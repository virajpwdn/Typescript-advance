# 🧠 TypeScript Fundamentals

> TypeScript is a superset of JavaScript that adds **type safety**. It helps developers catch errors **before** running the code (i.e., at compile time), ensuring better code quality and maintainability.

---

## 🔍 What is TypeScript?

* It is a **superset of JavaScript**: All valid JS is valid TS.
* Adds **static type checking** to JS (errors at compile time).
* Final code is always **converted to JavaScript** during compilation.
* TypeScript doesn't add new features at runtime; it's mainly a **development tool** for writing better, safer code.

> 🧠 **Analogy**: Think of TypeScript like wearing protective gear while skating — it doesn't stop you from skating (JavaScript), but it helps prevent you from getting hurt (bugs).

---

## 📌 Core Concepts

### ✅ Type Safety

```ts
const user = { name: "Alpha", age: "20" };
console.log(user.email); // ❌ Error: 'email' doesn't exist
```

TypeScript prevents such mistakes by enforcing **type safety**.

---

## 📪 Built-in Types

* `number`
* `string`
* `boolean`
* `null`
* `undefined`
* `any` (⚠️ avoid using this)
* `tuple`
* `enum`
* `void`
* `never`

---

### 📌 `any`

* Disables type checking — avoid it unless absolutely necessary.

```ts
let data: any = 42;
data = "hello"; // no error
```

---

### 📌 `void`

* Used when a function doesn't return anything.

```ts
function logMessage(): void {
  console.log("Logging something...");
}
```

---

### 📌 `never`

* Used when a function never returns (e.g., throws an error or infinite loop).

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## 🧠 Type Inference

* TypeScript often guesses the type for you.

```ts
let score = 42; // inferred as number
```

* **Functions require explicit types for better clarity**.

---

## 🛠️ Custom Types

### Using `type` keyword

```ts
type User = {
  username: string;
  email: string;
  password: string;
  isPremium: boolean;
  creditCard?: number; // optional
};
```

---

### Functions with Custom Types

```ts
function newGuest(user: User): User {
  return user;
}
```

---

## 🔗 Combining Types (Intersection)

```ts
type ExtraInfo = { cvv: number };
type Combined = User & ExtraInfo;
```

---

## 📚 Arrays

```ts
const superHeros: string[] = [];
const heroPower: Array<number> = [];

superHeros.push("Ironman");
heroPower.push(100);
```

---

## 📏 Array of Objects

```ts
type Marvel = {
  power: number;
  heroName: string;
};

const marvelArray: Marvel[] = [];
marvelArray.push({ power: 9000, heroName: "Thor" });
```

---

## 📊 2D Arrays

```ts
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
```

---

## 🫱 Tuples

* Fixed-length array with **fixed types and order**.

```ts
let tupleExample: [string, number] = ["Ironman", 42];
```

---

## 🎭 Unions

* Variable can hold **multiple types**.

```ts
let score: number | string = 12;
score = "High";

type User = { name: string; id: number };
type Admin = { username: string; id: number };

const member: User | Admin = { username: "Boss", id: 1 };
```

---

### Function using Union Types

```ts
function process(value: number | string): number | string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value + 2;
}
```

---

### Union in Arrays

```ts
const arr: (number | string)[] = [1, "2", 3];
```

---

## 💪 Function Examples

```ts
function addTwo(num: number): number {
  return num + 2;
}

function signup(name: string, email: string, isPremium: boolean = false): void {
  console.log(name, email, isPremium);
}
```

---

## 📄 Object as Function Parameters

```ts
function createCourse({ name, isPremium }: { name: string; isPremium: boolean }): { name: string; isPremium: boolean } {
  return { name, isPremium };
}
```

---

## 🧠 Interview Questions You Might Face

1. What is TypeScript? How is it different from JavaScript?
2. What are the advantages of using TypeScript?
3. Explain `any`, `unknown`, `never`, `void` types.
4. What is the difference between `type` and `interface`?
5. How does TypeScript handle type inference?
6. What are union and intersection types?
7. What is the use of optional properties (`?`) in TypeScript?
8. Can you explain tuples and how they differ from arrays?
9. What is static type checking?
10. Why should we avoid using `any`?

---

## 🧠 Summary in One Line

> **TypeScript = JavaScript + Type Safety + Compile-Time Error Prevention**


</hr>
<p>Day 2</p>
</hr>

# TypeScript: Tuples, Enums & Interfaces

Welcome to the child-friendly guide on **Tuples**, **Enums**, and **Interfaces** in TypeScript. This guide is designed so even a beginner or a child can understand these concepts easily with analogies and simple examples.

---

## 🧵 Tuples

### 📦 What is a Tuple?

A **tuple** is a special type of array where:

* The **number of elements** is fixed.
* The **order** of items matters.
* The **type** of each item is fixed by position.

### 🍱 Think of it like a lunchbox:

You always pack exactly:

1. A **sandwich** (a string 🍞)
2. A **juice box** (a number 🧃)

```ts
let lunchbox: [string, number];
lunchbox = ["Cheese Sandwich", 250]; // ✅ Correct
lunchbox = [250, "Cheese Sandwich"]; // ❌ Wrong order!
lunchbox = ["Cheese Sandwich"];      // ❌ Missing juice
```

### ✅ Real-Life Tuple Use Case: Function Return

```ts
function getUser(): [string, number] {
  return ["IronMan", 42];
}

const [name, id] = getUser();
```

### 🔄 Tuple vs Array

| Feature       | Tuple                | Array                 |
| ------------- | -------------------- | --------------------- |
| Fixed size    | ✅ Yes                | ❌ No                  |
| Fixed types   | ✅ Yes (per position) | ❌ Usually mixed types |
| Order matters | ✅ Yes                | ❌ Not enforced        |

### 🧪 Interview Questions on Tuples:

* What is a tuple in TypeScript?
* How are tuples different from arrays?
* Can you give an example where a tuple would be useful?
* What happens if you assign values in the wrong order to a tuple?

---

## 🎖️ Enums

Enums allow you to define a set of named constants.

### 🌀 What’s the difference between `enum` and `const enum`?

#### Regular `enum` (Compiles to IIFE JavaScript):

```ts
enum choiceIIFE {
    gold,
    silver,
    bronze,
}
```

This creates a small function (IIFE) behind the scenes.

#### `const enum` (More optimized, inlines values):

```ts
const enum choice {
    gold,
    silver,
    bronze,
}

const newChoice = choice.gold;
```

This is faster and generates less code in the final JS.

---

## 🤝 Interfaces

An **interface** defines the shape of an object — what properties and functions it must have.

```ts
interface offer {
    readonly _id: string;
    promo_code: string;
    email: string;
    discount?: number;
    getPromo(): number;
    showOffers: () => string;
}

const newOffer: offer = {
    _id: "1111",
    promo_code: "early10",
    email: "js@mail.com",
    discount: 10,
    getPromo: () => 1111,
    showOffers: () => "testing",
};
```

### 🛠 Reopening of Interfaces

In TypeScript, you can **reopen an interface** to add more properties later.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// TypeScript will merge them:
const person: User = {
  name: "Tony",
  age: 42,
};
```

This is very useful in large applications where your interface evolves over time.

</br>
</hr>
</hr>
# 📘 TypeScript Notes for Beginners

These notes are refined to help a complete beginner understand key TypeScript concepts with clear examples, dry runs, and analogies.

---

## 🔷 Abstract Classes

### What is an Abstract Class?

* An **abstract class** acts like a blueprint.
* You **cannot create objects** directly from an abstract class.
* You must **extend** it in another class to use its features.

### Syntax and Example:

```ts
abstract class TakePhoto {
  constructor(public howManyPhoto: number, public device: string) {
    console.log(howManyPhoto, device);
  }

  abstract getAiele(): void;

  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(photoCount: number, device: string) {
    super(photoCount, device);
  }

  getAiele(): void {
    console.log("Applied AI filter");
  }
}
```

### Key Point:

* Use `extends` with abstract classes.
* Use `implements` only with interfaces.

---

## 🔷 Generics

### Why Use Generics?

* To write flexible and **reusable code**.
* Provide **type safety** while maintaining flexibility.
* Avoid the `any` type, which disables TypeScript's power.

### Syntax Examples:

```ts
function identityOne<Type>(val: Type): Type {
  return val;
}

function identityTwo<T>(val: T): T {
  return val;
}

const variable = <T>(val: T): T => {
  return val;
}

function getUserId<T>(users: T[]): T {
  return users[1];
}

const getData = <T>(data: Array<T>): T => {
  return data[2];
}

interface Database {
  connection: string;
  password: string;
  username: string;
}

function generics<T, U extends Database>(val: T, data: U): object {
  return {
    message: "Hola"
  };
}

// Example usage
const result = generics(1, {
  connection: "mongostring",
  password: "atlaspassword",
  username: "HOLA"
});
```

---

## 🔷 Narrowing

### What is Narrowing?

It’s a technique used to **refine** types inside conditional branches.

```ts
function narrowing(data: string | number | null): number | string {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  if (data !== null) {
    return data + 10;
  }
}
```

---

## 🔷 `in` Keyword

### Purpose:

Checks if a **property exists** in an object.

```ts
interface Car {
  wheels: number;
}

interface Boat {
  sails: number;
}

function checkVehicle(vehicle: Car | Boat) {
  if ("wheels" in vehicle) {
    console.log("It’s a car!");
  }
}
```

---

## 🔷 `instanceof` Keyword

### Purpose:

Checks if an object is **created from a specific class**.

```ts
class Dog {
  bark() {}
}

const pet = new Dog();
console.log(pet instanceof Dog); // true
```

### Analogy:

"instanceof" is like asking: *"Is this apple from the AppleFactory?"*

---

## 🔷 Type Predicates

### Purpose:

Custom logic to help TypeScript **narrow a type**.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function talkToAnimal(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // ✅ Safe
  } else {
    animal.meow(); // ✅ Safe
  }
}
```

### Dry Run:

1. Check if `animal.bark` exists.
2. If yes, it's a dog.
3. TypeScript safely lets you call `bark()`.

---

## 🔷 `as` Keyword

### Purpose:

**Type Assertion**: Tells TypeScript to treat a value as a certain type.

```ts
let val: unknown = "hello";
let len = (val as string).length;
```

### Analogy:

"Hey TypeScript, I *promise* this is a string. Let me access its length!"

---