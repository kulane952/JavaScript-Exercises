let card={
    make:"Toyota",
    model:"Camry",
    year:"2020",
    start:function(){
        console.log("the car has started");
    }

}

console.log(card.make);
console.log(card.model);
console.log(card.year);

console.log("after adding new property");

// card.start='2020-01-01';

card.start();
// console.log(card);