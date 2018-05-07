# object-oriented-programming-introduction

Web developers can achieve alot these days without much knowledge of Object Oriented programming. Although they might be using Objects they might not know alot about how Objects are created and why they are created the way they are created. Object Orientation programming is a powerfull approach to building composable and maintainable software though. This is a gentle, yet robust intro to the world of Object Orientated programming.

We will start of by answering the questions of what Object Orientation is.

Next we will focus on Object Orientation a few Object Orientation building blocks:

* Encapsulation
* Interfaces
* Inheritance
* Polymorpism

After that I will look at Object Orientation using Design Patterns.

## Using TypeScript

I will use TypeScript for this Object Orientation intro, because it supports Object Orientation in a similar way to Java and C#. TypeScript is a superset of JavaScript that transpiles into the desired target version of JavaScript.

To install TypeScript you need NodeJS.

> Onwaba: this is the command `npm i -g typescript@2.3.2 ` that worked for me becuse the given one installed an old version that resulted on `tsc --init` to give an error.

Run the command: `npm install -g tsc`
Once installed you should be able to run the `tsc` command from a terminal window.

To setup a new TypeScript project:
* create a project folder
* create a folder called `src` in the project folder
* in the project folder do `tsc --init`
* this will create `a tsconfig.json` file, edit this file to contain this:

```json
{
  "compilerOptions": {
      "target": "es5",                        
      "module": "none",                    
      "outDir": "./dist",                       
      "strict": true
  },
  "location" : ["src/**/*"]
}
```


This will configure TypeScript to look for source files in the `src` folder and transpiles them into the `dist` (distribution) folder when running the `tsc` command.

> Onwaba thinks it would be lovely if I could try out this example. The reasn I did not there is not enough guidance for me to try it out and see what happpens. The next example would have been much better to follow if I had tried this example. I like it is simple yet contains so much info. The guidance I was exepting to see was where to have what.

If you create a file in the src folder called `car.ts` if will be transpiled into a file called `car.js` in the dist folder.

To transpile TypeScript code to JavaScript run `tsc` in the project folder or run TypeScipt in watch mode using `tsc -w` - then it will detect all changes in the `src` folder and transpiles the files upon change.

> Onwaba asks when and where should I run `tsc - w`?

You can read more about TypeScript classes [here](https://www.typescriptlang.org/docs/handbook/classes.html) and interfaces [here](https://www.typescriptlang.org/docs/handbook/interfaces.html).

TypeScript also introduce [typing](https://www.typescriptlang.org/docs/handbook/basic-types.html) to JavaScript.

## Object Orientation

Object Orientation (OO) is a programming model that combines data and behaviour into one 'unit'. A 'unit' have data and some functions that can use the data inside the unit. The data and the exact behaviour inside the 'unit' is hidden. And can not be accessed from out side the 'unit'. With Object Orientation these 'units' aim to model things in a way that we aim things in real life. 

Like can `Car` for example a car can be `started`, and it can `accelerate`, it has a `mileage` attribute that is affected by the `drive` function of the `car`. When driving a car I don't know exactly how things are working internally, but I know how to drive it to get where I need to go.

Object Orientation is doing exactly the same thing, it aims to create a 'unit' that hides complexity inside of them. A 'unit' can have some internal data and behviour, but it expose external behviour that can be used to interact with the unit.

A unit is called `class` in Object Oriented programming and they serve as a template for what behaviour data a 'unit' of behaviour or `object` can have. An instance of an `class` is called and `object`. More than one instance (copy) of a class can be created and each object instance keeps it own internal set of data.

> For example this code should be on your cars.ts

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

## Using TypeScript

I am using TypeScript to explere Object Oriented programming.

### Install it like this

### Read more

You can learn more about using Classes in TypeScript [here](https://www.typescriptlang.org/docs/handbook/classes.html).


## Exploring Object Orientation further

Object Orientation can be used to Encapsulate details of software components into classes to explore that further we will use a Toll Road Kiosk. At a toll road kiosk vehicles pays to use a piece of road, this money is then used to maintain this piece of road. In South Africa toll roads are called a Toll Plaza, they are scattered across across South Africa - two examples of those are the **Huguenote Toll Plaza** and the **Grasmere Toll Plaza**.

![Huguenote Toll Plaza](./images/huguenot-plaza.jpg):{width : 5em;}

![Grasmere Toll Plaza](./images/grasmere-plaza.jpg).

As you can see from the pictures above each Toll Plazas prices are different, but the concept is the same at each toll Plaza.

I will create a Toll Plaza Kiosk console that Toll plaza attendants use to charge vehicles using the Toll Plaza the correct fee. The console will keep track of how many specific vehicles and vehicle types was served by a given attendant. The console will later help to calculate the total income for the a day, which number of vehicles used the toll Road for a given day and other usefull calculations. But we will focus on the Toll Road Kiosk class for starters.

Let's start by creating a `TollPlazaKiosk` class it should be able to charge four category's of vehicles.

The four categories are:

* motorcycles, passenger cars, minibus taxis & car with caravan
* small trucks & busses with 4 wheels
* trucks and busess with 6-8 wheels
* trucks and busses with more than 8 wheels

You will see that the categories is the same for the [Huguenote Toll Plaza]() and the [Grasmere Toll Plaza](). The prices for the each one is different though.

 Category         |  Huguenote Tunnel  | Grasmere Toll Plaza
------------------|--------------------|--------------------
Motorcycles, passenger cars, minibus taxis & cars with caravan|18.00| 9.00
Small trucks & busses with 4 wheels|47.00| 24.00
Trucks and busess with 6-8 wheels|73.00| 28.00
Trucks and busses with more than 8 wheels|118.00| 36.00

The Toll Plaza Kiosk class should be able to charge the correct amount, keep a total for the day and a count of how many vehicles passed through the kiosk. It also needs a description to identify the toll plaza it is for.

### Interfaces

This is where **interfaces** becomes usefull for a class to be a Plaza Kiosk it needs to implement specific methods. We need to create Kiosks for the Huguenote tunnel and the Grasmere Plazas to ensure they both implement the correct methods we will create an interface called `PlazaKiosk`

```typescript
interface PlazaKiosk{
    charge(category : string) : void;
    dailyTotal : number;
    dailyVehicleCount : number;
    description : string;
}
```

The `PlazaKiosk` define what behaviour and object should implement to be considered an PlazaKiosk.

If a class implement an interface it needs to implement all the methods and attributes defined in the interface. 

I will create two classes that implements the `PlazaKiosk` interface:

```typescript
class HuguenotePlazaKiosk implements PlazaKiosk {
    private total:number = 0;
    private vehicleCount:number = 0;

    private chargeVehicle(price : number){
        this.total += price;
        this.vehicleCount++;
    }

    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(18);
        }
        else if (category === "two"){
            this.chargeVehicle(37);
            
        }
        else if (category === "three"){
            this.chargeVehicle(28);
        }
        else if (category === "four"){
            this.chargeVehicle(36);
        }
    }
    
    get dailyTotal(): number{
        return this.total;
    };

    get dailyVehicleCount(): number{
        return this.vehicleCount;
    };  
}
```

```typescript
class GrasmerePlazaKiosk implements PlazaKiosk {
    
    private total:number = 0;
    private vehicleCount:number = 0;

    private chargeVehicle(price : number){
        this.total += price;
        this.vehicleCount++;
    }

    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(9);
        }
        else if (category === "two"){
            this.chargeVehicle(24);
            
        }
        else if (category === "three"){
            this.chargeVehicle(73);
        }
        else if (category === "four"){
            this.chargeVehicle(118);
        }
    }
    
    get dailyTotal(): number{
        return this.total;
    };

    get dailyVehicleCount(): number{
        return this.vehicleCount;
    };

}
```

Now we can create instances of both classes for each kiosk types:

```typescript

let huguenotePlaza = new HuguenotePlazaKiosk();
let grasmerePlaza = new GrasmerePlazaKiosk();

huguenotePlaza.charge('one');
huguenotePlaza.charge('two');

grasmerePlaza.charge('one');
grasmerePlaza.charge('two');

assert.equal(huguenotePlaza.dailyTotal, 55);
assert.equal(grasmerePlaza.dailyTotal, 33);

assert.equal(huguenotePlaza.dailyVehicleCount, 2);
assert.equal(grasmerePlaza.dailyVehicleCount, 2);

```

Each object knows internally what is the correct price to charge. The price information in encapsulated into the Kiosk Objects.

### Abstract classes

There is alot of repetition in these two classes it is only the `charge` method that is different for each class.

I can create a common class that implement the shared methods of the Kiosks and then let each kiosk implement it's own specific logic. This is what Abstract Classes are for.

Abstract classes implement some methods and leaves other methods unimplemented - classes can then extend an Abstract class and implement their own logic.

To create an Abstract class for PlazaKiosks lets create a `PlazaKioskBase` abstract class. It should implement the `PlazaKiosk` interface. The `charge` method will be marked as abstract and won't be implemented in the `PlazaKioskBase` class

```typescript
abstract class PlazaKioskBase implements PlazaKiosk{
    private _dailyTotal:number = 0;

    private _dailyVehicleCount:number = 0;

    protected chargeVehicle(price : number){
        this._dailyTotal += price;
        this._dailyVehicleCount++;
    }
    
    get dailyTotal(): number{
        return this._dailyTotal;
    };

    get dailyVehicleCount(): number{
        return this._dailyVehicleCount;
    };

    abstract charge(category: string): number
}
```

**Note:** that abstract classes can't be instantiated.

And that this code will fail:

```typescript
let kiosk = new PlazaKioskBase();
```

The `PlazaKioskBase` abstract class needs to be reference in another class by using the `extend` keyword and by implementing the `charge` method.

**Also note:** the `chargeVehicle` function is **protected** so that it is accessible from classes that inherits from the `PlazaKioskBase` class. Protected methods and properties is accessible in the classes itself and sub-classes, that is classes that is inheriting from the (base)class. The class that other classes are inheriting from is called a base class.

## Inheritance

Each Kiosk class will now use the shared behaviour in the `PlazaKioskBase` abstract base class through inheritance. Inheritance allow Objects to use behaviour from Objects that they are inheriting from. Objects can only inherit from one Object in main stream Object Oriented languages.

The `GrasmerePlazaKiosk` class is now much smaller as it is inheriting behaviour from the `PlazaKioskBase` class and is only implementing it's own specific cost structure.

```typescript
class GrasmerePlazaKiosk extends PlazaKioskBase {
    
    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(9);
        }
        else if (category === "two"){
            this.chargeVehicle(24);
        }
        else if (category === "three"){
            this.chargeVehicle(28);
        }
        else if (category === "four"){
            this.chargeVehicle(36);
        }
    }
}
```

The `HuguenotePlazaKiosk` is also much smaller:

```typescript
class HuguenotePlazaKiosk extends PlazaKioskBase {
    charge(category: string): void {
        if (category === "one"){
            this.chargeVehicle(18);
        }
        else if (category === "two"){
            this.chargeVehicle(47);
            
        }
        else if (category === "three"){
            this.chargeVehicle(73);
        }
        else if (category === "four"){
            this.chargeVehicle(118);
        }
    }    
}
```

Everything is still working as before:

> Onwaba asks where shpuld this code be?

```typescript
let huguenotePlaza = new HuguenotePlazaKiosk();
let grasmerePlaza = new GrasmerePlazaKiosk();

huguenotePlaza.charge('one');
huguenotePlaza.charge('two');

grasmerePlaza.charge('one');
grasmerePlaza.charge('two');

assert.equal(huguenotePlaza.dailyTotal, 65);
assert.equal(grasmerePlaza.dailyTotal, 33);

assert.equal(huguenotePlaza.dailyVehicleCount, 2);
assert.equal(grasmerePlaza.dailyVehicleCount, 2);
```

But there is less code now as each of the PlazaKiosk class is sharing some behviour which they are inheriting from the `PlazaKioskBase` class.

Next I will create a web interface for the Kiosk in the `index.html` file.

### Object Constructors

I will create a `KioskConsole` class that takes a reference to an instance of the `PlazaKiosk` interface when instantiated.

The constructor is the first method that is getting called on an Object when a new Class is instantiated.

```typescript
class KioskConsole{
    private _kiosk: PlazaKiosk;
    constructor(kiosk : PlazaKiosk){
        this._kiosk = kiosk;
        document
    }
}
```

The `KioskConsole` class will link the `PlazaKiosk` class to the DOM. It will send values into the kiosk object and get values back from it.

### Polymorphism





















