//Blocking Example (Synchronous):

function simpleblocking(){
    alert("Hello World");
    return {id: 1, name: 'programming', subject: 'JavaScript', marks: 100};

}
console.log('Before calling the function');
const result = simpleblocking();

console.log(result);
console.log('After calling the function');

//Non-Blocking Example (Asynchronous):


function simpleNonBlocking(){
    setTimeout(()=>{
        console.log("Hello World");
    }, 1000);
    return {id: 1, name: 'programming', subject: 'JavaScript', marks: 100};
}

console.log('Before calling the function');

const result1 = simpleNonBlocking();

console.log(result1);
console.log('After calling the function');

