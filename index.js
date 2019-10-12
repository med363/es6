const pets =[
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

// console.log(pets);

const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
};

//const pet1 = { name: "Max", type: "dog", bornOn: 2018 };

//const age1 = getAge(pet1);

// console.log('age de pet1 : ', age1);


let petsWithAge = [];

pets.forEach((item) => {
    let pet = item;
    pet.age = getAge(pet) // ou bien pet.age = getAge(item)
    petsWithAge.push(pet); 
})

console.log('petsWithAge: ', petsWithAge);
let dogs = [];
pets.forEach((num)=>{
    let pet = num ;
    if (pet.type === 'dog'){
        dogs.push(pet);
    }
});
console.log(dogs);
let jasper;
pets.forEach((item) => {
    let pet = item ;
    if (pet.name === "Jasper") {
        jasper = pet;
    }

    
})
console.log("Jasper is " + jasper.age + " years old");
