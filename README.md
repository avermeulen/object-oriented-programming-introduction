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
Exactly what a Car do internally when it accelerates is not clear, but you can ask each Car Object about it's `currentSpeed`. Note that `currentSpeed` attribute is readonly from outside of the Object.

Doing this will result in an error:

```typescript
carTwo.currentSpeed = 60;
```

The details of how a `Car` accelerates and stop is hidden inside the Class - the internal workings might even be changed and the users of the `Car` class would not notice anything. This concept is called `Encapsulation`.

A Class is thus a container or 'unit' that can contain data and functions it can choose which methods and data it expose to users of the Class instance or Object. This allows software developers to create maintainable software components of which they can change in internals without affecting the users of these Classes directly.

## Exploring Object Orientation further

Object Orientation can be used to Encapsulate details of software components into classes to explore that further we will use a Toll Road Kiosk. At a toll road kiosk vehicles pays to use a piece of road, this money is then used to maintain this piece of road. In South Africa toll roads are called a Toll Plaza, they are scattered across across South Africa - two examples of those are the [Huguenote Toll Plaza]() and the [Grasmere Toll Plaza]().

As you can see from the pictures above each Toll Plazas prices are different, but the concept is the same at each toll Plaza.

I will create a Toll Plaza Kiosk console that Toll plaza attendants use to charge vehicles using the Toll Plaza the correct fee. The console will keep track of how many specific vehicles and vehicle types was served by a given attendant. The console will later help to calculate the total income for the a day, which number of vehicles used the toll Road for a given day and other usefull calculations. But we will focus on the Toll Road Kiosk class for starters.

Let's start by creating a `TollPlazaKiosk` class it should be able to charge four category's of vehicles.

The four categories are:

* motorcycle, passenger cars, minibus taxi & car with caravan
* small trucks & busses with 4 wheels
* trucks and busess with 6-8 wheels
* trucks and busses with more than 8 wheels

If you will see that this categories is the same for both the [Huguenote Toll Plaza]() and the [Grasmere Toll Plaza](). The prices for the each Toll plaza is different though.


 Categort                 |  Huguenote Tunnel                  | Grasmere Toll Plaza
------------------|--------------------|--------------------
Motorcycle, passenger cars, minibus taxi & car with caravan|
Small trucks & busses with 4 wheels|
Trucks and busess with 6-8 wheels|
Trucks and busses with more than 8 wheels|





