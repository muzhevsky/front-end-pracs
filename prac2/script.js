"use strict";
// Задание1
function getPrice(size, milk = "default", additional = "default") {
    var _a, _b, _c;
    let sum = 0;
    let sizePriceMap = new Map();
    sizePriceMap.set("small", 150);
    sizePriceMap.set("medium", 180);
    sizePriceMap.set("large", 200);
    let milkPriceMap = new Map();
    milkPriceMap.set("default", 0);
    milkPriceMap.set("banana", 100);
    milkPriceMap.set("coconut", 110);
    milkPriceMap.set("soy", 130);
    let additionalPriceMap = new Map();
    additionalPriceMap.set("default", 0);
    additionalPriceMap.set("berry", 10);
    additionalPriceMap.set("vanile", 20);
    additionalPriceMap.set("caramel", 30);
    additionalPriceMap.set("chocolate", 40);
    sum += (_a = sizePriceMap.get(size)) !== null && _a !== void 0 ? _a : 0;
    sum += (_b = milkPriceMap.get(milk)) !== null && _b !== void 0 ? _b : 0;
    sum += (_c = additionalPriceMap.get(additional)) !== null && _c !== void 0 ? _c : 0;
    return sum;
}
console.log(getPrice("small", "banana", "vanile"));
console.log(getPrice("large", "default", "chocolate"));
console.log(getPrice("medium", "soy", "default"));
console.log(getPrice("medium", "default", "default"));
// Задание2
function getArray(arg) {
    if (arg == null)
        return [];
    if (typeof (arg) == "string")
        return arg.split(" ");
    if (Array.isArray(arg))
        return arg;
    if (typeof (arg) == "number") {
        let result = [];
        for (let i = 0; i <= arg; i++)
            result.push(i);
        return result;
    }
}
let array = [1, 6, 3];
console.log(getArray("привет я ненавижу js, но ts вроде норм"));
console.log(getArray(7));
console.log(getArray(array));
console.log(getArray(null));
// Задание3.1
const defaultGetFullName = (fullName) => fullName.name + " " + fullName.surname + (fullName.patronymic === null ? "" : fullName.patronymic);
let testFullName = { name: "Иванов", surname: "Иван", patronymic: null };
let testFullName2 = { name: "Петров", surname: "Петр", patronymic: "Петрович" };
let testStudent = { fullname: testFullName };
let testStudent2 = { fullname: testFullName2 };
let testGroup = { students: [testStudent, testStudent2], name: "x1-test-21", course: 2 };
let testTeacher = { fullname: testFullName, curatedGroups: [testGroup], scienceDegree: "professor" };
function isMyStudent(student, teacher) {
    if (teacher == null)
        return false;
    if (teacher.curatedGroups == null)
        return false;
    for (let i = 0; i < teacher.curatedGroups.length; i++) {
        for (let j = 0; j < teacher.curatedGroups[i].students.length; j++) {
            if (teacher.curatedGroups[i].students[j] === student)
                return true;
        }
    }
    return false;
}
console.log(isMyStudent(testStudent, testTeacher));
console.log(isMyStudent(testStudent2, testTeacher));
// Задание3.2
function getName(object) {
    if ("fullname" in object)
        return defaultGetFullName(object.fullname);
    return object.name;
}
console.log(getName(testStudent));
console.log(getName(testGroup));
console.log(getName(testTeacher));
// Задание3.3
function studentCount(object) {
    let result = 0;
    if (!("curatedGroups" in object))
        return object.students.length;
    if (!object.curatedGroups)
        return 0;
    object.curatedGroups.forEach((group) => result += group.students.length);
    return result;
}
console.log(studentCount(testGroup));
console.log(studentCount(testTeacher));
// Задание3.4
function selectCount(group1, group2, student) {
    let group = group1.students.length < group2.students.length ? group1 : group2;
    group.students.push(student);
}
console.log(studentCount(testGroup));
selectCount(testGroup, testGroup, testStudent);
console.log(studentCount(testGroup));
// Задание4
let formSelect = document.querySelector("select[name = \"tags\"]");
console.log(formSelect.value);
