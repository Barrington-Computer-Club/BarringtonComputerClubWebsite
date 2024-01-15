---
title: "The Offering of Functional Programming"
author: Felix
postDate: 1/15/24
image: "https://img.icons8.com/external-others-inmotus-design/270/external-Lambda-greek-alphabet-letters-and-symbols-others-inmotus-design-7.png"
---

In the age of Fortran, C, and Java, software engineering engineering gained popularity despite it being a largely cumbersome and tedious process. Unfortunately, it has largely remained that way. Many programming languages are inherently unorganized, allowing developers to write slow and unmaintainable code. Errors run rampant on the web, often causing some of the most important software in the world to hopelessly crash. Worst of all, most code is vulgar, messy, and over-complicated. 

However, through Functional Programming, software engineers have hope. Functional programming brings new light to the experience of software engineering by enabling advanced modularity, promoting concise and beautiful code, and preventing unnecessary bugs.

# Background: What is functional programming?

Functional Programming (FP) is one of several popular programming paradigms -- styles of programming supported by particular programming languages. FP is based on the notion of a pure function [^1]. A pure function is similar to a mathematical function in that it only uses input to calculate output. This vastly differs from the most popular programming paradigm, Imperative Programming (which is closely associated with Object Oriented Programming). In Imperative Programming, functions do take inputs and return outputs but often mutate external variables. 

The difference between these paradigms is found in the pseudo-code for adding two to a number. In Imperative Programming, one would create a variable *x* and assign it a number, 3. Then a function, add, would be written. When passed in 2, this function would set variable *x* equal to 5 -- in effect adding 2 to the variable *x*. In FP, a variable, *x*, would be created and assigned 2. Then a function, add, would be created accepting two inputs and returning the sum of them. Finally, one would create a new variable *x_plus_2* and set it equal to the result of add when passed in *x* and 2 as inputs. Notice that the imperative function modifies the external variable *x* while the pure function does not -- it only deals with inputs and outputs. 

As a core tenet of FP, the pure function may not seem so advanced or even very practical; However, this is the exact appeal of pure functions: they are "simple and predictable" [^7]. As a foundation/requirement for a programming paradigm, they cause the paradigm as a whole to follow this simple and predictable nature.

# When using functional programming, one can get more out of their effort through increased modularity

When using functional programming, developers can get more out of their efforts through the advanced modularity that functional programming enables. Before this is covered, however, the concept and importance of modularity in software engineering should be understood.

## What is modularity? 

In the simplest form, the process of software development is structured as follows: "One first divides [a] problem into sub-problems, then solves the sub-problems and combines the solutions" [^Hughes]. These smaller solutions form modules and these modules are an incredible investment. The modules can be reused when the problem they solved is again encountered. Modular design is especially important to software engineering as it reduces the amount of new code engineers must write. There are limitations to modularity, however. Specifically, "the ways in which one can divide up the original problem depend directly on the ways in which one can glue solutions together" [^Hughes]. In other words, modularity is limited by a programming paradigm's ability to compose together solutions. 

Programming paradigms greatly differ in their styles of composition, with some being far more effective than others. The focus of Functional Programming being on pure functions has led to especially successful systems of composition. Through higher-order functions, Functional Programming enables extremely advanced modularity.

## What are higher-order functions and how do they promote modularity?

Functions are code that takes in an input and returns an output. Higher-order functions are slightly different: the input they receive is a function. For example, there may be a function, *add_3*, which accepts two inputs and adds them together. Then, there is a higher-order function, *apply_to_list*, which accepts two inputs, the first being a list and the second being a function and it returns the result of a list made from applying the input function to each item in the input list. So, if *apply_to_list* was called with the list [1, 2, 3, 4] and the function *add_3* as inputs, it would return the list [4, 5, 6, 7]. Higher-order functions are popular in FP because they extend pure functions to create more practical yet simple systems [^7]. In this example, the function *add_3* is a primitive pure function, and the function *apply_to_list* extends *add_3* by allowing it to interact with the list data structure. 

This trait of extensibility for pure functions is the main appeal of higher-order functions. In a research paper published by the University of Glasgow, John Hughes constructs one pure function and one higher-order function to operate on a list and then reuses components of this solution in solving nine other non-trivial problems. He clearly displays that "once defined, ... higher-order functions allow many operations to be programmed very easily" [^Hughes]. Higher-order functions are a "glue" promoting advanced code reuse, or modularity.

## The modularity of Fucntional Programming is a major improvement

A key objective of software engineering is modularity, but often programmers are limited by how their programming paradigm allows for the composition of modules. Object-oriented programming languages do not have first-class support for higher-order functions, and for Hughes's example, completely new code would likely have been required to solve each of the subsequent nine problems. In the engineering experience, this simply feels slow and tedious. However, with FP the effort engineers put into their code is truly an investment -- one that pays off handsomely through the advanced modularity of FP. This creates an experience of almost perfect efficiency unique only to Functional Programming.

# Through Functional Programming, Experience more beauty when writing code!

When most people imagine engineering, art is not the first word that comes to mind. However, to a software engineer, the feeling that he/she gets when looking at software simplified from 1000 lines to 200 is certainly akin to that created by beauty. Though this beauty can be experienced in any programming paradigm, it is especially common in Functional Programming. FP causes programs to be shorter and less complex than those in the imperative paradigms.

## Functional Programs tend to be shorter and less complex than imperative ones are shorter, and this creates beauty in software.

One example of Functional Programming's concision and simplicity is the case study on using Functional Programming for Internet of Things Applications by Till Haenisch. In this study, sensors in a building publish temperature data while algorithms use this data to optimize the energy consumed heating the building. The algorithm was implemented twice in an Imperative style and once in a Functional style. The main finding of the paper was how drastically shorter the functional example was than the imperative ones: it was roughly 17% of the size of the first and 42% of the size of the second [^Haenisch]. By a measure of cyclomatic complexity which was only performed on the second Imperative version and the Functional version, the FP program was also much simpler than the Imperative implementation. Cyclomatic complexity is a measurement of the number of "linearly independent paths" in a program [^cyclo]. A linearly independent path is a particular set of operations in code. Programs that contain statements similar if this then that, have at least a cyclomatic complexity of two because there is one path where this is true and another path where this is false. With a basic understanding, the results can be interpreted. For the functions in the OOP version of the algorithm, the average cyclomatic complexity was 2.6 while for the FP example, the cyclomatic complexity was 1 for every function except for one, where a complexity greater than one was necessary by the algorithm's requirements [^Haenisch]. From these results, it is clear that developers using FP will typically experience more beautiful code. 

## ... but why does this happen?

Functional Programming's concision and simplicity can be attributed to one primary factor: it is declarative. While "imperative programming lays more stress on 'how' a solution procedure is specified", FP's declarative character promotes "stating the relationship between inputs and output" [^5]. Imperative programming describes how code should work while the declarative style describes what code should do. These declarations will occur largely through the composition of modules and heavily use higher-order functions. Since specifying all implementation details is more specific and complex than describing what a result should be, Imperative programs are longer and more complex than declarative/functional ones [^5].

## The beautiful experience of FP

For software engineers, concise and simple code is magical. The problems faced are often quite overwhelming at first and answers are usually not immediately clear. This often creates dread that the programming process will be long and tedious. Often in imperative programming, this emotion becomes a reality; software attains unnecessary and overwhelming lengths and is far too complex. Due to this challenge, there is strong value in concise and simple solutions. Through its declarative nature, Functional Programming promotes concise and simple code. FP languages are fresh air for Software Engineers, as the tedious implementation details are abstracted away, and engineers are left to beautifully express their ideas in code.

# FP provides an advanced error handling experience

Of the major aspects of software engineering not yet mentioned, error handling is the most prominent. Software engineers spend hours or even days trying to solve complex, unknown, and unclear errors. Luckily, through advanced static typing and specialty error handling, Functional Programming eliminates the most tedious errors.

## Functional Programs tend to have fewer errors than Imperative one

In a study comparing Functional and Imperative Projects on Github -- a collaboration platform for open-source developers -- it was found that Functional Projects tend to have significantly fewer errors than Imperative projects [^Abajirov]. These results indicate that for a wide variety of use cases, developers in the FP paradigm will have to deal with fewer errors when creating software. Further, in the "application" domain, Imperative Projects tended to have almost twice as many bugs as functional projects. The majority of developers will be working in the application domain, so this result indicates that the choice to use Functional Programming has an especially large impact on the development experience of the average developer.

## Why is this?

One reason this occurs is that Functional Programming prevents developers from publishing code that has certain errors. For many programming languages, before developers can run and test their code, they must compile the code to a format that the computer can read. In this process, there are certain checks on the source code that, if not passed, will halt the compilation process before the code is run. One category of these checks is called type checking, in which the usage of variables is justified for correctness with the variable's data structure. It is well known that Functional programming has its roots in type theory, and this leads to advanced type checking in many FP languages. This type of checking catches a substantial amount of errors at compile time [^4]. The last and possibly most important cause lies in the error-handling constructs present in Functional Languages. Functions that encounter errors and halt the execution of a program defy FP's purity requirements. For this reason, FP languages have constructed a Result type, which represents the possibility of an error and allows functions to return this type instead of halting the execution of the program [^8]. When this type is returned by a function, developers must write code to acknowledge the possibility of an error -- instead of ignoring it as usually occurs in imperative languages; this acknowledgment results major reduction in the number of errors in code [^moore].

## Functional Programming promotes structuraly sound software

The worst nightmare of many software engineers is the unsolvable error, and this fear has been created by the long popularity of imperative programming languages. However, Static analysis and specialized error handling are methods that Functional Programming successfully employs to limit errors. With Functional Programming, the focus of software development further shifts away from the tediousness of frantically tracking down errors and is replaced by a bliss of swift, structurally sound innovation.

# A new era for software development

Software development originated as a tedious endeavor -- taking long hours to produce few results -- and it has largely remained that way due to the popularity of imperative programming. However, new light is found in the likes of Functional Programming. Functional programming revitalizes the software development experience by promoting efficiency through modularity, the creation of beauty through concise and simple code, and the death of unnecessary frustration through improved error handling. Developers have grown weary of imperative programming -- which they likely only learned because of antiquated education -- and the sparks of Functional Programming are beginning to ignite. Functional Programming is inspiring a new era of software development and the developer experience may never look the same.


[^1]: Scala FP Textbook: https://livebook.manning.com/book/functional-programming-in-scala/chapter-1/9

[^Hughes]: Hughes, John. “Why Functional Programming Matters | The Computer Journal | Oxford Academic.” OUP Academic, Oxford University Press, 1 Jan. 1989, https://doi.org/10.1093/comjnl/32.2.98.

[^3]: Laufer, Konstantin, and George K. Thiruvathukal. “Scientific Programming: The Promises of Typed, Pure, and Lazy Functional Programming: Part II.” Computing in Science & Engineering, no. 5, Institute of Electrical and Electronics Engineers (IEEE), Sept. 2009, pp. 68–75. Crossref, https://doi.org/10.1109/mcse.2009.147.

[^Abajirov]: Abajirov, Daniel. “OPUS: Does Functional Programming Improve Software Quality? : An Empirical Analysis of Open Source Projects on GitHub.” University of Stuttgart, 7 May 2021, http://dx.doi.org/10.18419/opus-11582

[^Haenisch]: Haenisch, Till. “A Case Study on Using Functional Programming for Internet of Things Applications.” Athens Journal of Τechnology & Engineering, no. 1, Athens Institute for Education and Research ATINER, Feb. 2016, pp. 29–38. Crossref, https://doi.org/10.30958/ajte.3-1-2.

[^moore]: Personal Interview with Mark Moore, a software engineer that uses functional programming

[^4]: Khanfor, Abdullah & Yang, Ye. (2017). An Overview of Practical Impacts of Functional Programming. 50-54. https://doi.org/10.1109/APSECW.2017.27. 

[^5]: https://personal.utdallas.edu/~gupta/courses/apl/lec1.html

[^cyclo]: https://en.wikipedia.org/wiki/Cyclomatic_complexity

[^6]: https://www.credera.com/insights/how-functional-programming-can-help-minimize-complexity-in-your-code-base

[^7]: https://learning.oreilly.com/library/view/learning-reactive-programming/9781785288722/ch02s03.html

[^8]: https://en.wikipedia.org/wiki/Result_type
