//페이지 수 -> 시나리오마다 total_page 수 바꾸기 
var page_num = 0;
var total_page = 3;
console.log(page_num); //마지막에 모두 지우기

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


//전체 동작 코드
page1Loader();


//1페이지 로딩
function page1Loader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
}


//다음 버튼
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
    console.log(page_num);
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
});


//오디오 재생

// btn1을 눌렀을 때 sound1.mp3 재생
document.querySelector(".btn1").addEventListener("click", function () {
    var audio1 = new Audio("sound1.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생
});

// btn2를 눌렀을 때 sound2.mp3 재생
document.querySelector(".btn2").addEventListener("click", function () {
    var audio2 = new Audio("sound2.mp3");
    audio2.loop = true; // 반복재생하지 않음
    audio2.volume = 0.5; // 음량 설정
    audio2.play(); // sound2.mp3 재생
    setTimeout(function () { // 1초 후 sound2.mp3 일시정지
        audio2.pause();
    }, 1000);
});


