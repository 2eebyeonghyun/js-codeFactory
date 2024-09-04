/**
 * Inheritance
 */

class IdolModel {
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    roleModel(){
        return `${this.name}의 롤모델은 이병현입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(yuJin instanceof IdolModel); // 유진은 아이돌모델의 상속인가 질문하는거














































