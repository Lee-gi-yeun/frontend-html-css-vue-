// SYmbol : ES6에서 추가 된 7번째 타입으로 다른 값과 중복 되지 않는 유일 무이한 값
// 이름 충돌 위험이 없는 객체으 ㅣ유일한 프로퍼티 키 값을 만들기 위해 사용
var key = Symbol('key');
console.log(typeof key);

// 객체 타입
// 자바 스크립트의 데이터 타이은 크게 원시 타입, 객체 타입으로 분류
// 객체 (함수, 배열, ...) 에 대해서는 추후 각자의 채서에서 학스
var obj = {};
obj[key] = 'value';
console.log(obj);