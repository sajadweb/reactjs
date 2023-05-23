// note
// The class which implements an abstract class must call super() in the constructor.
abstract class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }

    abstract find(string): Person;
}

class Employee extends Person { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person { 
        // execute AJAX request to find an employee from a db
        return new Employee(name, 1);
    }
}

let emp: Person = new Employee("James", 100);
emp.display(); //James

let emp2: Person = emp.find('Steve');


// abstract class Person {
//     abstract name: string;

//     display(): void{
//         console.log(this.name);
//     }
// }

// class Employee extends Person { 
//     name: string;
//     empCode: number;
    
//     constructor(name: string, code: number) { 
//         super(); // must call super()
        
//         this.empCode = code;
//         this.name = name;
//     }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James



abstract class Person1 {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
    display(): void {
      console.log(this.name);
    }
    abstract find(string): Person1;
  }
  
  class Employee1 extends Person1 {
    empCode: number;
    constructor(name: string, code: number) {
      super(name); // must call super()
      this.empCode = code;
    }
    find(name: any): Person1 {
      return new Employee1(name, 1);
    }
  }
  //Ex....
  function findOne(pr: Person1) {
    return pr.find("omid");
  }
  const emp1 = new Employee1("omid", 23);
  findOne(emp1);
  