+++
title = "zer0pts 2023: Aush (pwn, easy)"
author = "Domingo Dirutigliano"
tags = ["pwn"]
date = "2023-07-15"
+++
## Aush (pwn, easy)

>I will give you the shell, but after you authenticated yourself.

I spent a lot of time on this challenge because I typically focus on static analysis and don't execute the program until I understand how it works. Initially, I solved it without fully understanding the exploit, but after further analysis, I finally grasped its mechanism and wrote this write-up.

## Overview

The challenge provides us with the binary (also running on a remote server) and its C source code.

The program initially reads some bytes from `/dev/urandom`, which serve as the username and password. We need to input the correct values to obtain a shell.

One noteworthy aspect is that the binary uses cowsay to print messages (through `execve`).

```c
#include <fcntl.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#define LEN_USER 0x10
#define LEN_PASS 0x20

int setup(char *passbuf, size_t passlen, char *userbuf, size_t userlen) {
  int ret, fd;

  // TODO: change it to password/username file
  if ((fd = open("/dev/urandom", O_RDONLY)) == -1)
    return 1;
  ret  = read(fd, passbuf, passlen) != passlen;
  ret |= read(fd, userbuf, userlen) != userlen;
  close(fd);
  return ret;
}

int main(int argc, char **argv, char **envp) {
  char *args[3];
  char inpuser[LEN_USER+1] = { 0 };
  char inppass[LEN_PASS+1] = { 0 };
  char username[LEN_USER] = { 0 };
  char password[LEN_PASS] = { 0 };

  if (system("/usr/games/cowsay Welcome to AUSH: AUthenticated SHell!") != 0) {
    write(STDOUT_FILENO, "cowsay not found\n", 17);
    return 1;
  }

  /* Load password and username file */
  if (setup(password, LEN_PASS, username, LEN_USER))
    return 1;

  /* Check username */
  write(STDOUT_FILENO, "Username: ", 10);
  if (read(STDIN_FILENO, inpuser, 0x200) <= 0)
    return 1;

  if (memcmp(username, inpuser, LEN_USER) != 0) {
    args[0] = "/usr/games/cowsay";
    args[1] = "Invalid username";
    args[2] = NULL;
    execve(args[0], args, envp);
  }

  /* Check password */
  write(STDOUT_FILENO, "Password: ", 10);
  if (read(STDIN_FILENO, inppass, 0x200) <= 0)
    return 1;

  if (memcmp(password, inppass, LEN_PASS) != 0) {
    args[0] = "/usr/games/cowsay";
    args[1] = "Invalid password";
    args[2] = NULL;
    execve(args[0], args, envp);
  }

  /* Grant access */
  args[0] = "/bin/sh";
  args[1] = NULL;
  execve(args[0], args, envp);
  return 0;
}
```

## My first doubts

There is a buffer overflow on the user input, but:

- The binary has PIE enabled, and there's no way to leak addresses.
- The binary has NX enabled, and there's no way to execute shellcode.
- The variable holding the random username is located below the user input buffer, which means we can't overwrite it using the buffer overflow.

So, The challenge is impossible?

However, it's labeled as an easy challenge. So, after overthinking it, I tried executing it by inputting a different size of "A" characters.

With 411 "A" characters as the username, it resulted in the correct username... What? How is it possible?

However, when I entered the overwritten password containing "A" characters, it seemed to pass the equality check, but no shell was spawned, and a stack smash was triggered.

## The brutal solution

After some debugging, I noticed that the `execve` for the shell was executed, but the pointer to the environment variables (`envp`) was partially overwritten, making it an invalid pointer. I tried overwriting it with zeros in the first input, but it didn't work. However, when I did the same using the second input, it worked! I got a shell!

```python
from pwn import *
p = process("./aush")
p.sendline(b"A"*411)
p.sendline(b"A"0x20+b"\x00"*400)
p.iteractive()
```

## Why it works?

The fact that it worked triggered my obsessive side for static analysis, so I tried to understand why it worked.

Using gdb and inserting the input `"A"*411`, I observed that the `memcmp` function was executed and returned `0xffffffff`, which is different from 0. Thus, the `execve` was executed... or was it?

And that's the point! The `execve` was executed, but it failed.

Thanks to our overflow, we reached the `envp` pointer on the stack and overwrote it, making it an invalid address.

While `execve` was indeed executed, the `envp` pointer was invalid, causing `execve` to fail. However, the program continued its execution without being interrupted by the `"error"` because the `cowsay binary` was used to close the main program. This is because it calls `exit_group` at the end, which kills the main program as well.

The first step of the exploit is to overwrite the `envp` pointer with an invalid value, so `execve` will be skipped. Additionally, we overwrite the generated password with a password of our choice.

Now we can pass the next check by inserting the chosen password. But there's a problem: at this point, `execve` is used to spawn our shell, but the `envp` pointer is still invalid, causing `execve` to fail, and no shell is spawned. D:

Now we need to enable again the execution of `execve`, and one way to do that is by using a `null pointer` instead of the `envp` pointer (execve accepts a null pointer as valid for environment).

So, we can insert the correct password chosen by us, but also overwrite the `envp` pointer with a null pointer. This way, cowsay will be skipped because the password is deemed correct, and execve will be able to spawn the shell normally.

---

## TL; DR

The challenge was easy to solve but tricky to understand.

I understood also that: `dynamic analysis >>> static analysis` :D