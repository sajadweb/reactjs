// Benefits of Object Oriented Programming
// Some of the benefits of Object Oriented Programming are as follows:

// Easier debuging
// Reuse of code through inheritance
// Flexibility through polymorphism
// Effective problem solving
// Project decoupling (Separate project into groups)


// Inheritance
// class company 
type Department = {
    name: string
 }
 
 type Employee = {
    name: string
    age: number
 }
 
 class TeslaCompany {
       private static role = "Admin"
       private readonly credentials: string = ''
       private departments: (Department)[] = []
       private employees: (Employee)[] = []
 
       constructor(cred: string) {
         this.credentials = cred
       }
 
       addDepartment(value: Department) {
         this.departments = [...this.departments, value]
       }
 
       addEmployee(value: Employee) {
         this.employees = [...this.employees, value]
       }
     }
 
     class TeslaEmployee extends TeslaCompany {
       private new_employee: Employee = { name: '', age: 0}
 
       public setName(name: Employee): void {
         this.new_employee = name
 
       }
 }
 
 const newTeslaEmployee = new TeslaEmployee('123456')
 newTeslaEmployee.setName({ name: 'Kevin Odongo', age: 36 })
 newTeslaEmployee.addDepartment({ name: 'Finance' })
 newTeslaEmployee.addEmployee({ name: 'Kevin Odongo', age: 36 })
 console.log(newTeslaEmployee)


 //Polymorphism

 // class Person
class Person {
    public name: string = ''
    public role: string = '' 
 }
 
 class basketballPlayer extends Person {
      public setName(name: string){
        this.name = name
        this.role = 'BasketBall Player'
     }
     public getName(){
        return `User name: ${this.name} Role: ${this.role}`
     }
 }
 
 class golfPlayer extends Person {
     public setName(name: string){
        this.name = name
        this.role = 'Golf Player'
     }
     public getName(){
        return `User name: ${this.name} Role: ${this.role}`
     }
 }
 
 const person1 = new basketballPlayer()
 const person2 = new golfPlayer()
 person1.setName('Kevin Odongo')
 person2.setName('Kevin Odongo')
 console.log(person1.getName())
 console.log(person2.getName())

 