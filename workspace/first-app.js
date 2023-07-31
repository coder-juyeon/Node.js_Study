const fs = require('fs');

// 파일생성
fs.writeFileSync('hello.txt', 'Hello from Node.js');

const hobbies = ['Sports', 'Cooking'];

// spread 연산자: 배열이나 객체에서 원소나 속성을 추출하는데 사용
// 스프레드 연산자로 원소를 끄집어 내서 새로운 배열에 하나씩 추가
const copiedArray = [...hobbies];
console.log(copiedArray)

// rest 연산자: 인수 목록이나 함수에서 여러 인수를 하나의 배열로 묶는데 사용
// 여러 인자 
const toArray = (...args) => {
    return args;
}

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// 객체 구조 분해
const printName = ( {name} ) => {
    console.log(name);
}

// 배열 구조 분해
const [hobby1, hobby2] = hobbies;

// 비동기코드
setTimeout(() => {
    console.log('Time is done!')
}, 2000);

// 비동기 코드와 프로미스
// 이해안됨

// 템플릿리터럴
const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);