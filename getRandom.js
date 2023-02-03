// getRandom.js
export default function random() {
  // Math함수를 사용한다
  // Math.random()으로 0~1 사이의 랜덤한 수를 생성
  // 랜덤한 수에 10을 곱하고 반올림하여 반환(return)한다.
  return Math.floor(Math.random() * 10)
  // 반환된 랜덤한 수가 .js파일 밖으로도 나갈 수 있도록 export default를 명시해준다.
}