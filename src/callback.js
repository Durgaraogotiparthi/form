import React, { useEffect } from 'react';

const Callback = () => {
    useEffect(() => {
        function Task1(callback) {
            console.log("Task One is completed");
            callback();
        }

        function Task2(callback) {
            setTimeout(() => {
                console.log("Task Two is completed");
            }, 1000);
            callback();
        }

        function Task3(callback) {
            console.log("Task Three is completed");
            callback();
        }

        Task1(() => {
            Task2(() => {
                Task3(() => {
                    console.log("All tasks are completed!!!");
                });
            });
        });
    }, []);

    return (
        <div>
            <h1>Output is showing in Console</h1>
        </div>
    );
};


function Dog(){
    return new Promise((resolve,reject)=>{
        const val = true;
        if(val){
    setInterval(() => {
        resolve("Dog is Barking on out side!!!")
    }, 1000);}
    else{
        return reject("It is not working")
    }
})
}
function Cat(){
    return new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("cat is Barking on out side!!!")
    }, 1000);
})
}
Dog().then((a)=>{console.log(a)}).catch((error)=>{console.log(error)})
Cat().then((a)=>{console.log(a)})

const result = async()=>{
    const dog = await Dog();
    console.log(dog)
    const cat = await Cat();
    console.log(cat)

}
result()

export default Callback;
