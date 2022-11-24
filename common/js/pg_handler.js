var page_num = 0; // 수정 XXX -> 맨 처음 페이지 초기화하기 위함

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const ctrlbar = document.querySelector('.ctrlbar');
//const start_btn_wrap = document.querySelector('.start_btn_wrap');
//const nav_btn_wrap = document.querySelector('.nav_btn_wrap');

const textModal = document.getElementById("textModal");
const size_btn = document.getElementById("size_btn");
$('.nav_btn_wrap').css('display', 'none');




//popovers 초기화 작업
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//*******************************************************************************
//**************************+   이벤트 동작   +*********************************** 

//페이지 로드 시 전체 동작 코드 (DOM 로딩 후 동작)
$(document).ready(function () {
    //$('.nav_btn_wrap').css('display', 'none');
    firstPageLoader();
    console.log(audioArray);
});



//시작 페이지 로딩
function firstPageLoader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
}


//*******************************************************************************
//**************************+    시작하기 버튼   +***********************************  

//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
$('#start-btn').click(function () {
    console.log('클릭');

    $('.nav_btn_wrap').css('display', 'block');
    //$('.nav_btn_wrap').css('display', 'flex');
    $('.start_btn_wrap').css('display', 'none');
    //$('.nav_btn_wrap').unwrap();
    $('.nav_btn_wrap').contents().unwrap();

    //시작하기 버튼 클릭 후 페이지 1로 전환되게 하기
    page_num = 1;
    $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
    $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
    $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
        //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
        //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
    console.log(page_num);//나중에 다 지우기
    audioArray[page_num - 1].load();// 해당 페이지 오디오 로딩
    audioArray[page_num - 1].play();// 해당 페이지 오디오 재생
});



//*******************************************************************************
//**************************+    다음 버튼   +*********************************** 


//다음 버튼 : 클릭 시 페이지 이동, 해당 페이지오디오만 재생(배열 인덱스라 페이지 넘버-1) 
$(document).on("click", "#next_btn", function () {
    //$('#next_btn').click(function () {
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
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }
});


//*******************************************************************************
//**************************+    이전 버튼   +*********************************** 



//이전 버튼
$(document).on("click", "#prev_btn", function () {
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
        audioArray[page_num - 1].load();
        audioArray[page_num - 1].play();
    }
    audioArray[page_num].pause();
});



//*******************************************************************************
//**************************+    정지 버튼   +*********************************** 


$('.play').css('display', 'none');

//정지 버튼
$(document).on("click", "#pause_btn", function () {
    $('.stop').css('display', 'none');
    $('.play').css('display', 'block');
    audioArray[page_num - 1].pause();
});

//재생 버튼
$(document).on("click", "#play_btn", function () {
    $('.stop').css('display', 'block');
    $('.play').css('display', 'none');
    audioArray[page_num - 1].play();
});




//*******************************************************************************
//**************************+    사이즈 버튼   +*********************************** 



//텍스트 크기 조절 버튼 클릭 시 토글 뜰 수 있게
var options = {
    html: true,
    // title: "Optional: HELLO(Will overide the default-the inline title)",

    content: $('[data-name="popover-content"]')

}

//토글 안에 슬라이더 넣기
var tSliderEl = document.getElementById('tSlider')
var popover = new bootstrap.Popover(tSliderEl, options)
var slider = document.getElementById("tSliderRange");
var output = document.getElementById("value");

//슬라이더 바에 맞추어 텍스트 사이즈 조절
var $txt_area = $(".fontSz");
//$txt_area.css("background-color","black");
var currentSize = $txt_area.css("font-size");   /* 폰트사이즈를 알아낸다. */
var num = parseFloat(currentSize, 10); /* parseFloat()은 숫자가 아니면 숫자가 아니라는 뜻의 NaN을 반환한다. */
var unit = currentSize.slice(-2);   /* 끝에서부터 두자리의 문자를 가져온다. */
console.log("현재 텍스트 사이즈", currentSize);
console.log("num", num);
var textSizeValue = 0;
//output.innerHTML = slider.value;//슬라이더 값 출력할 곳
slider.oninput = function () {
    // output.innerHTML = this.value;
    textSizeValue = this.value;
    console.log("슬라이더 값", textSizeValue);
    console.log("현재 텍스트 사이즈", currentSize);
    console.log("num", num);

    if (textSizeValue == "0") {
        //$txt_area.css("fontSize", "1em");
        $txt_area.attr("style", "font-size: 1em !important");
    } else if (textSizeValue == "1") {
        //$txt_area.css("fontSize", "1.2em");
        $txt_area.attr("style", "font-size: 1.2rem !important");
    } else if (textSizeValue == "2") {
        //$txt_area.css("fontSize", "1.4em");
        $txt_area.attr("style", "font-size: 1.4em !important");

    }


}


//*******************************************************************************
//**************************+    힌트 버튼   +*********************************** 

$(".cursor_wrap").css('display', 'none');

//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
$('#hint_btn').click(function () {
    console.log('zmfflr');
    $(".cursor_wrap").toggleClass('show');
})



//*******************************************************************************
//**************************+    클릭 제어   +*********************************** 

//다음으로 가기 함수 
function next(page_num) {
    console.log('cc');
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
    console.log(page_num);
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }

}


//특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
document.querySelector("main").addEventListener("click", function (e) {//메인 영역에서만 이벤트 발생
    for (i = 0; i < pageClickArea.length; i++) {
        if (page_num === pageClickArea[i].page) {//현재 페이지와 pageClickArea의 페이지 같으면
            let clickableArea = pageClickArea[i].correctAnswer;
            console.log("현재 페이지 ", page_num, "정답은", clickableArea); //마지막에 모두 지우기
            //alert(answer);
            console.log("클릭한 요소는 ", e.target.className);


            if (e.target.className.includes(clickableArea)) {
                //맞게 클릭하면
                console.log("correct");
                next(page_num);
            } else {
                //틀리게 클릭하면
                $('#staticBackdrop').modal('show');
            }

            //let answer = inputAnswer[i].correctAnswer;

            // document.querySelector(".input_answer").addEventListener("keydown", function (e) {

            //     console.log('ss');
            //     // if (event.keyCode === 13) {
            //     //     if (this.value === answer) {
            //     //         //handleClickBox();
            //     //         alert("성공");
            //     //     } else if (this.value !== answer) {
            //     //         alert("실패");
            //     //     }
            //     // }
            // });

        }
    }
})




