// 화살표 함수
// () => {} vs function () {}

// 익명 함수.
const double = function (x) {
  return x * 2
}
console.log('dobule: ', double(7))

// 화살표 함수.
const doubleArrow = (x) => {
  return x * 2
}
// 화살표 함수의 축약형.
// 매개변수가 아래 x처럼 하나면 소괄호도 생략가능
const doubleArrow2 = (x) => x * 2

// 객체데이터 축약형 ({name:heee1}) > 중괄호를 소괄호로 감싸주어야한다
const doubleArrow3 = x => ({
  name: 'heee1'
})

console.log('doubleArrow', doubleArrow(7))
console.log('doubleArrow', doubleArrow2(7))