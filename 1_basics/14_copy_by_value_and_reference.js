/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * 2. 객체는 copy by reference
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

console.log('------------------');

clone += '\t안유진 입니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name : '안유진',
    group : '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('------------------');

originalObj['group'] = '블랙핑크';
console.log(originalObj);
console.log(cloneObj);
// copy by reference 레퍼런스를 그대로 가져온다.


console.log(originalObj === cloneObj);
console.log(original === clone);

console.log('------------------');

originalObj = {
    name: '이병현',
    group: '코드팩토리',
};

cloneObj = {
    name: '이병현',
    group: '코드팩토리',
};

console.log(originalObj === cloneObj);

console.log('------------------');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;

const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

console.log('------------------');

/**
 * Spread Operator
 */

const yuJin4 = {
    ...yuJin3, // ... : 값을 복사한다.
}

console.log(yuJin4);
console.log(yuJin4 === yuJin3);


const yuJin5 = {
    year : 2003,
    ...yuJin3,
}

console.log(yuJin5);

const yuJin6 = {
    name : '코드팩토리', // 동일 값이 위에 있으므로 덮어쓰기가 안된다. (순서가 중요하다.)
    ...yuJin3,
}

console.log(yuJin6);

console.log('------------------');

const numbers = [1, 3, 5];
const numbers2 = [
    10,
    ...numbers,
    1,
];

console.log(numbers2);

















