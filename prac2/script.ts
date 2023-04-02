// Задание1
function getPrice(size: "small" | "medium" | "large", milk: "default" | "banana" | "coconut" | "soy" = "default", additional: "default" | "berry" | "vanile" | "caramel" | "chocolate" = "default"): number {
    let sum: number = 0;
    let sizePriceMap = new Map<string, number>();
    sizePriceMap.set("small", 150);
    sizePriceMap.set("medium", 180);
    sizePriceMap.set("large", 200);

    let milkPriceMap = new Map<string, number>();
    milkPriceMap.set("default", 0);
    milkPriceMap.set("banana", 100);
    milkPriceMap.set("coconut", 110);
    milkPriceMap.set("soy", 130);

    let additionalPriceMap = new Map<string, number>();
    additionalPriceMap.set("default", 0);
    additionalPriceMap.set("berry", 10);
    additionalPriceMap.set("vanile", 20);
    additionalPriceMap.set("caramel", 30);
    additionalPriceMap.set("chocolate", 40);


    sum += sizePriceMap.get(size) ?? 0;
    sum += milkPriceMap.get(milk) ?? 0;
    sum += additionalPriceMap.get(additional) ?? 0;

    return sum;
}


console.log(getPrice("small", "banana", "vanile"));
console.log(getPrice("large", "default", "chocolate"));
console.log(getPrice("medium", "soy", "default"));
console.log(getPrice("medium", "default", "default"));


// Задание2
function getArray(arg: string | any[] | null | number) {
    if (arg == null) return [];

    if (typeof (arg) == "string")
        return arg.split(" ");

    if (Array.isArray(arg))
        return arg;

    if (typeof (arg) == "number") {
        let result: number[] = [];
        for (let i = 0; i <= arg; i++)
            result.push(i);
        return result
    }
}

let array: number[] = [1, 6, 3];

console.log(getArray("привет я ненавижу js, но ts вроде норм"));
console.log(getArray(7));
console.log(getArray(array));
console.log(getArray(null));


// Задание3

type FullName = {
    name: string;
    surname: string;
    patronymic: null | string;
}

type Student = {
    fullname: FullName;
}

type Group = {
    name: string;
    course: number;
    students: Student[];
}

type Teacher = {
    fullname: FullName;
    curatedGroups: null | Group[];
    scienceDegree: null | "ktn" | "professor"
}


// Задание3.1
const defaultGetFullName = (fullName: FullName) => fullName.name + " " + fullName.surname + (fullName.patronymic === null ? "" : fullName.patronymic);

let testFullName: FullName = {name: "Иванов", surname: "Иван", patronymic: null};
let testFullName2: FullName = {name: "Петров", surname: "Петр", patronymic: "Петрович"};
let testStudent: Student = {fullname: testFullName};
let testStudent2: Student = {fullname: testFullName2};
let testGroup: Group = {students: [testStudent, testStudent2], name: "x1-test-21", course: 2};
let testTeacher: Teacher = {fullname: testFullName, curatedGroups: [testGroup], scienceDegree: "professor"};

function isMyStudent(student: Student, teacher: Teacher): boolean {
    if (teacher == null) return false;
    if (teacher.curatedGroups == null) return false;

    for (let i = 0; i < teacher.curatedGroups.length; i++) {
        for (let j = 0; j < teacher.curatedGroups[i].students.length; j++) {
            if (teacher.curatedGroups[i].students[j] === student) return true;
        }
    }

    return false;
}

console.log(isMyStudent(testStudent, testTeacher));
console.log(isMyStudent(testStudent2, testTeacher));


// Задание3.2
function getName(object: Student | Teacher | Group): string | FullName {
    if ("fullname" in object) return defaultGetFullName(object.fullname);
    return object.name;
}

console.log(getName(testStudent));
console.log(getName(testGroup));
console.log(getName(testTeacher));


// Задание3.3
function studentCount(object: Teacher | Group) : number {
    let result: number = 0;

    if (!("curatedGroups" in object))
        return object.students.length;

    if (!object.curatedGroups) return 0;

    object.curatedGroups.forEach((group) => result+=group.students.length);

    return result;
}

console.log(studentCount(testGroup));
console.log(studentCount(testTeacher));

// Задание3.4
function selectCount(group1: Group, group2: Group, student: Student){
    let group: Group = group1.students.length < group2.students.length ? group1 : group2;
    group.students.push(student);
}


console.log(studentCount(testGroup));
selectCount(testGroup, testGroup, testStudent);
console.log(studentCount(testGroup));



// Задание4

let formSelect = document.querySelector("select[name = \"tags\"]") as HTMLSelectElement
console.log(formSelect.value);

