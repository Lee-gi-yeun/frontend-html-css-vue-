// 고양이는 배열 index 10번째에 있습니다.
//     샌드위치는 배열에 존재하지 않습니다.
//     결과를 확인할 수 없습니다.

const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    if(word === undefined){
        return `결과를 확인할 수 없습니다.`;
    }
    let index = str.indexOf(word);
    let result = str.split(',').indexOf(word);
    if(index === -1){
        return `${word}는 배열에 존재하지 않습니다.`;
    } else {
        return `${word}는 ${result}번째에 있습니다.`;
    }
}

// [5, 3, 1, 4]

function filterRange(arr, a, b) {
    // 코드 작성
    for (let i=0; i <arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);


//    [ 9, 20, 37, 54, 88, 100 ]
//    [ 100, 88, 54, 37, 20, 9 ]
//    [ 'hello', 'js', 'party', 'wow' ]
//    [ 'wow', 'party', 'js', 'hello' ]

let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

// 코드 작성

console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(strings.sort());
console.log(strings.sort().reverse());


//[
//    Student { firstName: '관순', lastName: '유', score: 80 },
//    Student { firstName: '보고', lastName: '장', score: 70 },
//    Student { firstName: '길동', lastName: '홍', score: 60 }
//]
//    [
//    { name: '유관순', score: 80 },
//        { name: '장보고', score: 70 },
//        { name: '홍길동', score: 60 }
//    ]

function Student(firstName, lastName, score){
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}

const studentList = [
    new Student('길동', '홍', 60),
    new Student('보고', '장', 70),
    new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

function sortFromScore (arr) {
    // 코드 작성
    arr.sort((a, b) => b.score - a.score);
}

function makeFullName(arr){
    // 코드 작성
    return arr.map(student =>({
        name : student.lastName + student.firstName,
        score : student.score
    }));
}


//화
//월

console.log(getWeekDay(2022, 6, 21));       // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));      // 2022년 12월 12일

function getWeekDay(year, month, date) {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const day = new Date(year, month - 1, date).getDay();
    return dayNames[day];
}

// xxxxx초나 흘렀습니다. 시간을 소중히 씁시다^^
// xxxxx초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    // 코드 작성
    const today = new Date();
    const todayTime = today.getSeconds() + (today.getMinutes()*60) + (today.getHours()*3600);
    return `${todayTime}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
}

function getSecondsToTomorrow() {
    // 코드 작성
    const today = new Date();
    const todayTime = today.getSeconds() + (today.getMinutes()*60) + (today.getHours()*3600);
    const lastTime = (24 * 3600) - todayTime;
    return`${lastTime}초 밖에 안 남았습니다. 다시는 오지 않는 오늘입니다^^`;
}


// [ 1080, 100, 200, 60, 6, -15 ]

let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성


}
