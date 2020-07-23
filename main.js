// Your code here.

//Get firstname
const getFirstName = function (person) {
  return person.firstName
}
let test = getFirstName({ firstName: 'Petra', lastName: 'Solano' })
test

//Get Last name
const getLastName = function (person) {
  return person.lastName
}
let test2 = getLastName({ firstName: 'Colin', lastName: 'Jaffe' })
test2;

//Get full name
const getFullName = function (person) {
  return person.firstName + ' ' + person.lastName
}
let test3 = getFullName({ firstName: 'Colin', lastName: 'Jaffe' })
test3;

//change fistName
const setFirstName = function (person, name) {
  return person.firstName = name
}
let test4 = setFirstName({ firstName: 'Colin', lastName: 'Jaffe' }, 'Redacted')
test4

//set age
const setAge = function (person, age) {
  return person.age = age
}
let test5 = setAge({ firstName: 'Colin', lastName: 'Jaffe', age: 39 }, 45)
test5

///give Birthday
const giveBirthday2 = function (person) {
  if (person.age === undefined) {
    return person.age = 1
  } else {
    return person.age + 1
  }
}
let test6 = giveBirthday2({ firstName: 'Colin', lastName: 'Jaffe', age: 40 })
test6

//Teacher fix
const giveBirthday = function (person){
  if ('age' in person){
    person.age = person.age + 1
  } else {
    person.age = 1
  }
}

const person = { firstName: 'Colin', lastName: 'Jaffe', age: 39 }
giveBirthday(person)
person;


//divorce 
const person1 = {
  firstName: 'Michael',
  lastName: 'Cordero',
  age: 33,
  married: true,
  spouseName: 'Jane Villanueva',
};

const person2 = {
  firstName: 'Jane',
  lastName: 'Villanueva',
  age: 28,
  married: true,
  spouseName: 'Michael Cordero'
};

const divorce = function (person1, person2) {
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}
divorce(person1, person2)
person1
person2



///marry
const marry  = function(person3, person4){
  person3.married = true
  person4.married = true 
  person3.spouseName = person4.firstName + ' ' + person4.lastName
  person4.spouseName = person3.firstName + ' ' + person3.lastName
  return person3
}

//teacher fix 
const marry2 = function(person1, person2){
  person1.married = true
  person2.married = true 
  person1.spouseName = getFullName(person2)
  person2.spouseName = getFullName(person1)
}

const fiance1 = {
  firstName: 'Colin',
  lastName: 'Jaffe',
  age: 39,
  married: true,
  spouseName: 'Redacted Jaffe'
};

const fiance2 = {
  firstName: 'Petra',
  lastName: 'Solano',
  age: 29,
  married: false,
};
marry2(fiance1,fiance2)
fiance2
fiance1



// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
