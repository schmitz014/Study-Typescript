let x:number = 10

x = 12

console.log(x)

//inference x annotation
let y:number = 12

//basic types
let firstName:string = 'Peter'
let age:number = 18
const isMale:boolean = true

//object
const myNumbers: number[] = [1,2,3,4,5]
console.log(myNumbers.length)
myNumbers.push(6)

//tuple
let myTuple: [string, number, string[]] = ['Peter', 18, ['a', 'b', 'c']]

//object literal
const person: {name: string, age: number} = {
    name: 'Peter',
    age: 18
}

console.log(person)
console.log(person.name)

//any
let a:any = 0
a = 'hello'
a = true
a = [1,2,3]

//union type
let id: string | number = 0
id = 'abc'

//type alias
type myIdType = string | number
const userId: myIdType = 10
const postId: myIdType = 'abc'

//enum
enum Size {
 s = 'small',
 m = 'medium',
 l = 'large'
}

const shirt = {
 name: 'shirt',
 size: Size.s
}
console.log(shirt)

//literal type
let test: "any" | null
test = "any"

//function
function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(1,2))

function sayHelloTo(name: String): string {
    return `Hello ${name}`
}

console.log(sayHelloTo('Peter'))

function logger(msg: string): void {
    console.log(msg)
}
logger('teste')

function greeting(name: string, greet?: string): void { 
    if(greet){
     console.log(`Hello ${greet} ${name}`)
    }
    console.log(`Hello ${name}`)
}

greeting('Peter', 'Mr.')

//interface
interface MathFunctionParams{
    a: number,
    b: number
}

function sumNumber(nums: MathFunctionParams): number {
    return nums.a + nums.b
}

console.log(sumNumber({a: 1, b: 2}))

function multiplyNumber(nums: MathFunctionParams): number {
    return nums.a * nums.b
}

console.log(multiplyNumber({a: 1, b: 2}))

const someNumber: MathFunctionParams = {
    a: 1,
    b: 2
}

console.log(multiplyNumber(someNumber))

//narrowing
function doSomething(info: number | boolean){
    if(typeof info === 'number'){
        console.log(`O número é ${info}`)
    }else{
        console.log('Não é um número')
    }
}

doSomething(1)
doSomething(true)

//generics
function showArrayItems<T>(arr: T[]){
 arr.forEach((item) =>{
  console.log(`Item: ${item}`)
 })
}
const a1 = [1,2,3]
const a2 = ['a', 'b', 'c']

showArrayItems(a1)
showArrayItems(a2)

//classes
class User{
 name
 role
 isApproved

 constructor(name:string, role:string, isApproved:boolean){
  this.name = name
  this.role = role
  this.isApproved = isApproved
 }

 showUserName(){
  console.log(`The user name is ${this.name}`)
 }

 showUserRole(){
  console.log(`The user role is ${this.role}`)
 }

 showUserIsApproved(canShow: boolean): void {
  if(canShow){
   console.log(`The user is ${this.isApproved ? 'approved' : 'not approved'}`)
  }
  console.log('You are not allowed to see this information')
 }
}

const user1 = new User('Peter', 'admin', true)
console.log(user1)
user1.showUserName()
user1.showUserRole()

//class interface
interface IVehicle{
 brand: string,
 showBrand(): void
}

class Car implements IVehicle{
 brand
 wheels

 constructor(brand: string, wheels: number){
  this.brand = brand
  this.wheels = wheels
 }

 showBrand(): void {
  console.log(`The brand is ${this.brand}`)
 }
}

const car1 = new Car('BMW', 4)
car1.showBrand()

//heritage
class SuperCar extends Car{
 engine

 constructor(brand: string, wheels: number, engine: number){
  super(brand, wheels)
  this.engine = engine
 }
}

const a4 = new SuperCar('Audi', 4, 2.0)
a4.showBrand()

//decorators
function BaseParameters(){
 return function <T extends {new (...args: any[]): {}}>(constructor: T){
  return class extends constructor{
   id = Math.random()
   createdAt = new Date()
  }
 }
}

@BaseParameters()
class Person{
 name 

 constructor(name: string){
  this.name = name
 }
}

const sam = new Person('Sam')
console.log(sam)