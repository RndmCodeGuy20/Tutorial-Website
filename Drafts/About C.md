<!-- ---
marp: true
author: Shantanu Mane
size: 4.3
--- -->

# About C :-

---

## Lots of stuff done continuing forward :-

---

C is popular due to its many desirable qualities. The rich set of built-in functions and operators can be used to write any complex level program.

> Fun Fact : Apollo 11 had a RAM of 512KB and the **Apollo Guidance Computer (AGC)** was programmed using C.

The C compiler combines the capabilities of an assembly language with the features of a high-level language and therefore it is well suited for writing both system software and business packages. In fact, many of the C compilers available in the market are written in C.

Due to the availability of variety of data types and powerful operators, C is fast and efficient. There are only 32 keywords in ANSI C and its strength lies within its built in functions.

The presence of various thousands of libraries available also makes it easy to use and versatile, and we can add/create our own libraries in C.

C language supports structured programming, this means that a problem can be solved in terms of blocks or function modules.

### Some common terms :-

- <u>Syntax</u> - Possible combination of symbols that form a correct program.

- <u>IDE</u> - An **integrated development environment**, or IDE, is a computer program that makes it easier to write other computer programs.

- Compiler - Part of either the IDE or a stand alone program to convert source file to machine code.

- Keywords - The words in a language whose meaning has already been explained to the C compiler.

create full table in HTML

| `auto` | `double` |
| :----: | -------- |

```c
#include <stdio.h>

int main(){
    printf("Hello World!");
    return 0;
}
```

### What is #include &lt;stdio.h&gt; ?

This program contains a function `printf()`, which is used to print the sentence written inside the parathesis, so it is necessary to give the reference of this function.

The functionality of `printf` is written inside the `stdio.h` file, therefore, this file is included as a library.

`#include` is a preprocessor directive which tells the compiler which library to refer when a program is compiled. We can include n number of libraries inside our C program but it also slows down its execution speed.

### What is int main()?

C is a function oriented language, that means we write programs through functions.

C provides some built in functions, we can also create functions which are called user-defined functions.

`main()` is one of the built in functions in C, it is the most important function in C and program execution starts through this program.
