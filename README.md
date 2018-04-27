# object-oriented-programming-introduction

Web developers can achieve alot these days without much knowledge of Object Oriented programming. Although they might be using Objects they don't know how they are composed and why they are composed they way they are.

Object Oriented knowledge is a powerfull approach to build composable and maintainable software. This is a gentle, but robust intro to the world of Object Orientation. 

We will start of by answering the questions of what Object Orientation is.

Next we will focus on Object Orientation a few Object Orientation building blocks:

* Encapsulation
* Interfaces
* Interheritance
* Polymorpism

After that I will look at Object Orientation using Design Patterns.

## Object Orientation

Object Orientation (OO) is a programming model that combines data and behaviour into one 'unit'. A 'unit' have data and some functions that can use the data inside the unit. The data and the exact behaviour inside the 'unit' is hidden. And can not be accessed from out side the 'unit'. With Object Orientation these 'units' aim to model things in a way that we aim things in real life. 

Like can `Car` for example a car can be `started`, and it can `accelerate`, it has a `mileage` attribute that is affected the `drive` function of the `car`. When driving a car I don't know exactly how things are working internally, but I know how to drive it to get where I need to go.

Object Orientation is doing exactly the same thing, it aims to create a 'unit' that hides complexity inside of them. A 'unit' can have some internal data and behviour, but it expose external behviour that can be used to interact with the unit.

A unit is called `class` in Object Oriented programming and they serve as a template for what behaviour data a 'unit' of behaviour or `object` can have. An instance of an `class` is called and `object`. More than one instance (copy) of a class can be created and each object instance keeps it own internal set of data.

```typescript

let carOne = new Car();

carOne.start();
carOne.accelerate();


```
