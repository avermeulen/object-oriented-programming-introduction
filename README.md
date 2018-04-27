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

Look at this code:

```typescript

try{
  let carOne = new Car();
  let carTwo = new Car();
  let carThree = new Car();
  
  carOne.start();
  carTwo.start();
  
  carOne.accelerateBy(20);
  carTwo.accelerateBy(30);
  console.log(carOne.currentSpeed);
  console.log(carTwo.currentSpeed);
  
  carOne.accelerateBy(20);
  // carOne is now faster  
  console.log(carOne.currentSpeed);
  //carTwo is still going at the same speed
  console.log(carTwo.currentSpeed);
  
  carTwo.stop();
  //carTwo speed is now 0
  console.log(carTwo.currentSpeed);
  
  // this will throw an error as carThree was never started
  carThree.accelerateBy(20);

}
catch(err){
  console.log(err)
}
```

You will notice that each instance of the Car class have the same methods, but the state of their internal data is different.
Exactly what a Car do internal when it accelerates is not clear, but you can ask each Car Object about it's `currentSpeed`. Note that `currentSpeed` attribute is read only from outside of the Object.

Doing this will result in an error:

```typescript
carTwo.currentSpeed = 60;
```

The details of how a `Car` accelerates and stop is hidden inside the Class - the internal workings might even be changed and the users of the `Car` class would not notice anything. This concept is called `Encapsulation`.

A Class is thus a container or 'unit' that can contain data and functions it can choose which methods and data it expose to users of the Class. This allows software developers to create maintainable software components of which they can change in internals without affecting the users of these Classes directly.



