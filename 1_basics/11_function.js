/**
 * function --> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

console.log('-----------');

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function lbh(){
    console.log((3 * 10 / 2 % 3).toString());
}

// lbh();

function lbh(number){ //number는 파라미터다.
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 parameter라고 합니다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
lbh(4);
lbh(5);
lbh(6);

console.log('-----------');

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 4);

console.log('-----------');

function multiply(x, y = 10){
    console.log(x * y);
}

multiply(2, 4);
multiply(2); // 값이 20이 나오는 이유는 y값을 입력하지 않아 y = 10 기본값이 들어감

console.log('-----------');

/**
 * 반환받기
 * return 받기
 */
function multiply2(x, y){
    return x * y;
}

const result1 = multiply2(2, 4);
console.log(result1);

const result2 = multiply2(4, 5);
console.log(result2);

console.log('-----------');

/**
 * Arrow 함수
 */

const multiply3 = (x, y)=>{
    return x * y;
}

console.log(multiply3(3, 4));

const multiply4 = (x, y) => x * y;
console.log(multiply4(3, 5));

const multiply5 = x => x * 2; // 파라미터가 한개만 괄호를 할 필요 없다.
console.log(multiply5(2));

const multiply6 = x => y => z => `x: ${x} y: ${y}, z: ${z}`;
console.log(multiply6(2)(5)(3));

const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));

console.log('-----------');

const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){ //...arguments : 무한하게 함수를 받을 수 있다.
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

console.log('-----------');

(function(x, y){
    console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);




