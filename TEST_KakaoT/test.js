//페이지 수 -> 시나리오마다 total_page 수 바꾸기 
var page_num = 0;

var total_page = 8;
console.log(page_num); //마지막에 모두 지우기

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`${j}.mp3`);
    audioArray.push(audio);
}
// const answerArray = [];
// for (j = 1; j <= total_page; j++) {
//     answer = new Answer(`${j}.mp3`);
//     audioArray.push(audio);
// }


const pageClickArea = [
    { 
        page: 1, 
        correctAnswer: "here" },
    {
        page: 2,
        correctAnswer: "서울디지털재단",
    },
    { 
        page: 3, 
        correctAnswer: "남부터미널" },
    {
        page: 4,
        correctAnswer: "서울디지털재단",
    },
];

// function handleInput(page_num) {
//     for (i = 0; i < pageClickArea.length; i++) {
//         if (page_num === pageClickArea[i].page) {//현재 페이지와 pageClickArea의 페이지 같으면
//             DrawInputBox(coordinateArray[page_num]);
//             let answer = pageClickArea[i].correctAnswer;
//             document.querySelector(".input-answer").addEventListener("keydown", function (event) {
//                 if (event.keyCode === 13) {
//                     if (this.value === answer) {
//                         handleClickBox();
//                     } else if (this.value !== answer) {
//                         alert(RETRY_MESSAGE);
//                     }
//                 }
//             });
//         }
//     }
// }

// //특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
// document.querySelector("body").addEventListener("click", function(e) {
//     if(e.target.className == e.currentTarget.querySelector(".title_h1").className) {
//         console.log("correct")
//     } else {
//         console.log("wrong")
//     }
// })

//전체 동작 코드
page1Loader();
console.log(audioArray);

// document.addEventListener('click',function(e){
//     if(gnbSlide == true){ //슬라이드 메뉴가 열려 있을때
//         if(e.target.id != 'loopBtn'){ //e.target이 슬라이딩 이미지 재생 버튼이 아니면
//             let tgEl = e.target;
//             let header = tgEl.closest('#header');//조상중 #header를 찾음-버튼이 header안에 있을 경우//
        
//             if(!header){ //hdader이 조상이 아니면 닫기//
//                 nav.classList.remove('slide');
//                 return gnbSlide = false;
//             }
//         }
//     }
// });


//1페이지 로딩
function page1Loader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
}


//다음 버튼 : 클릭 시 페이지 이동, 해당 페이지오디오만 재생(배열 인덱스라 페이지 넘버-1) 
$(".next").click(function () {
    if (page_num < total_page) {
        page_num += 1;
        $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
        $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
        $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
            //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
            //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
            $(".pactive").toggleClass("pactive");
            $("#p" + page_num).toggleClass("pactive");
            $(".pactive").fadeIn(0);
        });

    }
    //var audio_num = page_num-1;
    console.log(page_num);
    //console.log(audio_num);
    audioArray[page_num-1].load();
    audioArray[page_num-1].play();
    audioArray[page_num-2].pause();
});


//이전 버튼
$(".prev").click(function () {
    if (page_num > 0) {
        page_num -= 1;
        $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
        $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
        $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
            //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
            //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
            $(".pactive").toggleClass("pactive");
            $("#p" + page_num).toggleClass("pactive");
            $(".pactive").fadeIn(0);
        });
    }
    console.log(page_num);
    if (page_num != 0) {
        audioArray[page_num-1].load();
        audioArray[page_num-1].play();
    }
    audioArray[page_num ].pause();
});

//정지 버튼
$(".pause").click(function () {
    audioArray[page_num-1].pause();
});




// const emailInputEl = document.querySelector("#exampleInputEmail1");
// const modelEl = document.querySelector("#exampleModal");

// modelEl.addEventListener("shown.bs.modal", function() {
//   emailInputEl.focus();
// })