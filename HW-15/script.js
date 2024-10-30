// Task 1

const users = [
    {
        name:"Ivan",
        friends:['Misha',"David",'Bob'],
        skills:['JavaScript',"Java","CSS","HTML"],
        balance:4500,
    },
    {
        name:"Misha",
        friends:['Ivan',"David"],
        skills:['JavaScript',"Python","React","HTML","Rust"],
        balance:1000,
    },
    {
        name:"David",
        friends:['Misha',"Ivan",'John',"Luke"],
        skills:['JavaScript',"C++","SASS","HTML","jQuery"],
        balance:3100,
    },
    {
        name:"Bob",
        friends:['Ivan',"Tom",'Thomas'],
        skills:['JavaScript',"Java","CSS","HTML","PHP","Angular"],
        balance:43500,
    },
    {
        name:"Thanos",
        friends:['Thomas',"Ludwig",'Novak',"Ralph","Leonardo"],
        skills:['JavaScript',"Python","C","Go"],
        balance:3000000000,
    },
];

const getTotalBalance = arr => arr.reduce((acc,el) => acc + el.balance,0);

console.log("Task 1");
console.log(getTotalBalance(users));

// Task 2

const getNameByFriends = (arr, friendName) => arr.filter((el) => el.friends.includes(friendName)).map((el) => el.name);

console.log("Task 2");
console.log(getNameByFriends(users,"Ivan"));

// Task 3

const getNameByAmountOfFriends = arr => arr.sort((a,b) => a.friends.length - b.friends.length).map((el) => el.name);

console.log("Task 3");
console.log(getNameByAmountOfFriends(users));

// Task 4

const getSkills = arr => arr.map(el => el.skills)
    .flat(Infinity)
    .filter((el, ind) => arr.map(el => el.skills).flat(Infinity).indexOf(el) === ind)
    .sort((a, b) => a.localeCompare(b));

console.log("Task 4");
console.log(getSkills(users));