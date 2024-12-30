/**
 * 연산자
 * 
 * 산술연산자
 * +, -, *, /, %, **(제곱)
 */
console.log(5**2)

/**
 * 증강연산자
 * ++, --
 * 
 * 비교연산자
 * <, <=, >, >=, (==, != 사용 x), ===, !==
 * javascript의 특징은 기본적으로 변수의 타입이 정해지지 않음.
 */

console.log(1 == 1);
console.log(1 == "1"); // 타입 검사 x
console.log(1 === "1"); // 타입 검사 o
console.log(1 !== "1"); // 타입 검사 o ture
console.log(1 != "1"); // 타입 검사 o false
console.log(1 !== "2"); // 타입 검사 o

/**
 * 논리연산자
 * &&, ||
 * 단축 평가 
 * 
 * 논리 자료 값 || anything 
 * 
 * 
 * 논리 자료 값 && anything 
 * 논리 자료 값 === true    => anything;
 * 논리 자료 값 === false   => false 
 * 
 * null 병합 연산
 * 논리 자료 값 ?? anything
 * 좌항(anything1) === null || 좌항(anything1) === nudefined => 우항(anything2)
 * 좌항(anything1) 1== null || 좌항(anything1) 1== nudefined => 좌항(anything1)
 */

console.log(1 === 1 || "차정민"); // 논리 자료 값 === true    => true;
console.log(1 !== 1 || "차정민"); // 논리 자료 값 === false   => anything
console.log(1 === 1 && "차정민"); // 논리 자료 값 === true    => anything;
console.log(1 !== 1 && "차정민"); // 논리 자료 값 === false   => false

console.log(null ?? "차정민");
console.log("차정민" ?? "차정민");

/**
 * Not 연산
 * !, !! 
 * "", 0, nullm undefined (값이 비어 있거나 없는 값) => false
 */
console.log("---------- Not 연산 ----------")
console.log(!"");
console.log(!0);
console.log(!null);
console.log(!undefined);

console.log(![1,2,3,4]);
console.log(![]);  // 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []);
console.log(![].length);


var name = "차정민";
if (!name) {
    console.log("이름이 비었습니다.");
}
if(!!name) {
    console.log("이름이 비어있지 않습니다.");
}