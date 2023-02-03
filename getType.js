// getType이라는 함수를 내보냄

export default function getType(data){
  return Object.prototype.toString.call(data).slice(8, -1)
}