/**
 * 배열
 */

const numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers)
for (let i = 0; i < numbers.length;  i++) {
    console.log(numbers[i])
}

// for each | 대신 of 사용
for (let num of numbers) {
    console.log(num);
}

numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers);
numbers.pop(numbers.pop());

console.log(numbers.includes(5)); // 값을 포함하고 있는지 확인(java-contains)
console.log(numbers.indexOf(5)); // 값의 위치
console.log(numbers.lastIndexOf(4)); // 뒤에서 부터 값의 위치(index)
console.log(numbers.concat([11,12,13,14,15])); // 두 배열의 병합
console.log(numbers);

const newnumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newnumbers);
const newnumbers2 = [ ...numbers, 11, 12, 13, 14, 15];
console.log(newnumbers2);
const newnumbers3 = numbers.slice(0, 5); // 0 시작 5 엔드 , 엔드 전까지 , 엔드 미지정 시 끝까지가지고 온다.
console.log(newnumbers3);
const newnumbers4 =  numbers
.slice(0, numbers.indexOf(4))
.concat(numbers.slice(numbers.indexOf(4) + 1))
console.log(newnumbers4)
const newnumbers5 = numbers.splice(3, 1); // splice(제거하고자 하는 시작 인덱스 번호, 제거하고자 하는 개수)
console.log(newnumbers5);

console.log(numbers)
const newnumbers6 = numbers.splice(4, 2, 11, 12, 13); // splice(n, n, 값 추가)
console.log(newnumbers6);
console.log(numbers);

numbers.splice(4, 0, 20, 21);
console.log(numbers);