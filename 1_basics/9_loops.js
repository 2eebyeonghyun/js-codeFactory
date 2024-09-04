/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++){
     console.log(i);
}

console.log('----------');

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log('----------');

for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

console.log('----------');

// *을 이용해서 6X6의 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i < 6; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

console.log('----------');

/**
 * for...in
 */

const yuJin = {
    name: '안유진',
    year: 2003,
}

for(let key in yuJin){
    console.log(key);
}

console.log('----------');

const iveMembersArray = ['안유진', '가을', '장원영', '레이', '리즈', '이서']

for (let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}

console.log('----------');

/**
 * for...of
 */

for (let value of iveMembersArray){
    console.log(value);
}

console.log('----------');

/**
 * while
 */

let num = 0;

while(num < 10){
    num++;
}

console.log(num);

console.log('----------');

/**
 * do...while
 */

num = 0;

do{
    num++;
} while(num < 10);

console.log(num);

console.log('----------');

/**
 * break
 */

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}

console.log('----------');

num = 0;
while(num < 10){
    if(num === 5){
        break;
    }

    num ++;
    console.log(num);
}

console.log('----------');

/**
 * continue
 */

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue; // continue는 skip이랑 같다.
    }

    console.log(i);
}

console.log('----------');

num = 0;

while(num < 10){
    num ++;

    if(num === 5){
        continue;
    }

    console.log(num);
}