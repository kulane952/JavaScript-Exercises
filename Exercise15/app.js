console.log("students details:", "----------");

const students = {
    name: "John",
    age: 20,
    grade: "A",

}
for (const key in students) {
    console.log(key + ": " + students[key]);
}
console.log("student1 details:", "----------");

const student1 = {
    name: "kate",
    age: 20,
    grade: "A"

}
for(const key in student1){
    console.log(key + ": " + student1[key]);
}
console.log("student2 details:", "----------");


const student2 = {
    name: "Mike",
    age: 20,
    grade: "A"
}
for (const key in student2) {
    console.log(key + ": " + student2[key]);
}

