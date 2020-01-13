/*Variables: Number, string, boolean, undefined, null*/

let nameVariable = 20;

//To print in console: console.log(item)

//To declare a function

//Solamente se puede utilizar después de su declaración
nameFunction = () => {
    //Code goes here
    return;
}

//Se puede usar antes o despues de su declaración
function nameFunction(){
    //Code goes here
    return;
}

//Managing arrays

let nums=[2,4,6,8];

nums.forEach((item/*index*/) =>{
    console.log(item);
});

for(let index of nums){

}

//Definition of objects

let obj = {
    firstName: "Mike",
    lastName: "Miller",
    age: 18,
    grades: [90, 80, 100],
    extraCurricular: {name: "football"},
    isActive: true,
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
};

//To access attribute of an object
console.log(obj.age);
for(let i=0; i<obj.grades.length; i++){
    console.log(obj.grades[i]);
}

//To access functions of an object (method)
obj.printFullName();

//To loop through all elements of an object
for(let key in obj){
    console.log(obj[key]);
}

//To generate an array with all the properties of an object
let allKeys = Object.keys(obj);
let allValues = Object.values(obj);

//To add an element to an array
let nums = [];
nums.push(4); //Add at the end
nums.pop(); //Access the last item
nums.shift(8); //Adds at the beggining
nums.unshift(); //Access the first item

//To remove items in the middle
nums.splice(2,1); //Index to start at, num of elements to erase
nums.splice(2,0,20); //Index to start, num to erase, add new element there

//Get number of items on array
nums.length;


//To create a copy of an array and execute something
let newArr = nums.map((item, index)=>{
    return item+5;
});

//To create a new array with some items of another one
let filteredArr = nums.filter((item, index)=>{
    if(item>=7){
        return item;
    }
});


//To acces elements
//document.getElementsById
//document.getElementByClassName
//document.getEelementsByTagName
