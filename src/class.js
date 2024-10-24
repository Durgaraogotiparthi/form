function  New(){
class Name{
    constructor(name,mobile){
        this.name = name;
        this.mobile=mobile;
    }
    value(){
        console.log(`say My Name: ${this.name}`)
        console.log(`Mobile Number: ${this.mobile}`)
    }
}

const Name1 = new Name('Durgarao',6303359425)
Name1.value()
}


// Parent classs  
class Animal{
    eat(){
        console.log(`${this.name} is eating!`)
    }
    sleep(){
        console.log(`${this.name} is sleeping!!!`)
    }
}
// child class 
class rabitt extends Animal{
    name='rabbit'
    run(){
        console.log(`${this.name} is Running`)
    }
}

class Fish extends Animal{
    name="Fish"
    swim(){
        console.log(`${this.name} is Swimming`)
    }
}

// calling the classes  
const rab = new rabitt()
rab.eat();
rab.sleep();
rab.run();

const Fis = new Fish()
Fis.swim()

export default New