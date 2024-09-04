/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

console.log('--------');

console.log(10 * (10 + 10));

console.log('--------');

/**
 * 증가와 감소
 */

let num = 1;

num++;
console.log(num);

num--
console.log(num);

console.log('--------');

/**
 * 연산자와 위치
 */

let result = 1;
console.log(result);

result = num ++; // num 기본값이 1이여서 먼저 result에 1이 입력되고 num은 ++ 라 2로 변경된다.
console.log(result, num);

result = num --; // num의 값이 2라서 result에는 2가 입력이 되고 num은 -- 라 1로 변경된다.
console.log(result, num);

result = ++ num; // ++를 미리 계산하고 넘어가지므로 result 2 / num 2로 출력된다.
console.log(result, num);

console.log('--------');

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

console.log('--------');

/**
 * 할당 연산자
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

console.log('--------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log('--------');

// === 은 타입까지 비교한다.
console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log('--------');

// !은 값이 다르다
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('--------');

// 타입까지 비교
console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('--------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

console.log('--------');

/**
 * 삼항 조건 연산자
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

console.log('--------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);

console.log('--------');

// ||는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('--------');

console.log(10 > 1 && 20 > 2);
console.log(10 > 1 && 20 < 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);

console.log('--------');

/**
 * 단축평가
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 변환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log('--------');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

console.log('--------');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);

console.log('--------');

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);








