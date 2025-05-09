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
