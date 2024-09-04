/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

console.log('---------------');

// push() -> 새로운 엘리먼트 값을 마지막 값으로 추가
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------');

// pop() -> 마지막 엘리먼트 값을 반납한다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('---------------');

// shift() -> 첫번째 엘리먼트 값을 삭제한다.
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('---------------');

// unshift() -> 첫번째 순서에 새로운 엘리먼트 값을 추가한다.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('---------------');

console.log(iveMembers.splice(0, 3)); // 0 ~ 3 번 값을 삭제하고 새로 Array로 출력한다.
console.log(iveMembers);

console.log('---------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

console.log('---------------');

// concat() -> push와 다른점은 concat은 array값을 아예 새로 만든다.
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

console.log('---------------');

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log('---------------');

// spread operator
let iveMembers2 = [
    ...iveMembers,
]

console.log(iveMembers2);

console.log('---------------');

let iveMembers3 = [
    iveMembers,
]

console.log(iveMembers3);

console.log('---------------');

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);

console.log('---------------');

// join()
console.log(iveMembers.join());
console.log(typeof iveMembers.join());

console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

console.log('---------------');

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3
];

console.log(numbers);

// a, b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});

console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);

console.log(numbers);

console.log('---------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브 : ${x}`;
    } else {
        return x;
    }
}));

console.log('---------------');

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0)); // 짝수만 선언
console.log('---------------');

// find() -> 가장 첫번째로 해당되는 값을 선언
console.log(numbers.find((x) => x % 2 === 0));

console.log('---------------');

// findIndex() -> index 값을 선언
console.log(numbers.findIndex((x) => x % 2 === 0)); // 8이 1번째 인덱스여서 1 이 선언
console.log(numbers.findIndex((x) => x === 6)); // 6이 3번째 인덱스여서 3 이 선언

console.log('---------------');

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));






