/* 타입은 정해지지 않고, 대입 값에 따라 결정된다. */
var name = "차정민";
console.log(name);
console.log(typeof name);
var age = 27;
console.log(age);
console.log(typeof age);
var address;
/* 대입 값이 없을 경우 정의되지 않았다(undefined) 타입이 나타남 */
console.log(address);
console.log(typeof address);
/* 대입이 되었을 때 타입이 정해 진다. */
address = 10;
console.log(address);
console.log(typeof address);
address += "10" ;
console.log(address);
console.log(typeof address);
/* null = 객체  */
address = null;
console.log(address);
console.log(typeof address);
/* 객체 생성 {키값 작성}  */
address = {
    si : "부산시",
    gungn : "부산진구",
};
console.log(address);
console.log(typeof address);

/**
 * number(숫자 - 정수, 실수)
 * string(문자열)
 * boolean(논리 - 참, 거짓)
 * object(객체 - null)
 * undefined(type x)
 * NaN(Not a Number)
 */