/**
 * 객체
 */

const obj = {
    name: "차정민",
    age : 27,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), // 자신의 주소 명시 필수
}

obj.print();

const obj2 = {
    name: "차정민",
    age : 27,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), // 자신의 주소 명시 필수
}

console.log(obj === obj2);
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(JSON.stringify(obj));
console.log(typeof JSON.stringify(obj));

/**
 * object -> Json JSON.stringfy(object)
 * Json -> object JSON.parse(json문자열)
 * User 객체 생성
 * username, password, name, eamil
 */

const user = {
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    address:{
        si : "부산시",
        gungn : "부산진구"
    },
    printUserInfo : () => console.log("사용자 정보 출력"),
}
user.username = "min";
user.password = "1234";
user.name = "차정민";
user.email = "ssss@ssss.sss";



// JSON 변환 시 KEY, VALUE만 가능 but function X(함수는 불가능)
const userJson = JSON.stringify(user);
console.log(user);
console.log(userJson);
const convertUser = JSON.parse(userJson);
console.log(convertUser);

const student = {
    name: "차정민",
    age : 27,
    address: "부산 동래구",
}

const key = "age";
const value = 28;

const student2 = {
    ...student,
    [key]: value,
}
console.log(student2);
