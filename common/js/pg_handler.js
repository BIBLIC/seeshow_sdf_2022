var page_num = 0; // 수정 XXX -> 맨 처음 페이지 초기화하기 위함

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const ctrlbar = document.querySelector('.ctrlbar');

//const start_btn_wrap = document.querySelector('.start_btn_wrap');
//const nav_btn_wrap = document.querySelector('.nav_btn_wrap');

const textModal = document.getElementById("textModal");
const size_btn = document.getElementById("size_btn");
const start_btn_wrap = document.getElementById("start_btn_wrap");
$('.nav_btn_wrap').css('display', 'none');

var audio_stat = 1;
var pwArr = [];

//popovers 초기화 작업
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//창 비율 고정
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
});
// New event listener:
window.addEventListener("load",function() {
    setTimeout(function(){
        // Hide the address bar:
        window.scrollTo(0, 1);
    }, 0);
});


const page_wrap = document.querySelector('.page_wrap');
//자동 스크롤
function scrollToBottom() {
    page_wrap.scrollTop = page_wrap.scrollHeight;
}

// ios 또는 android Chrome 일 때 스크롤 맨 밑으로 스크롤 해서 
// function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
// if (Mobile()){// 모바일일 경우
//     console.log('모바일 환경');
//     window.addEventListener('load', function(){
//         // document.body.style.height = (document.documentElement.clientHeight + 5) + 'px';
//         // window.scrollTo(0, 1);
//         scrollToBottom()
//     }, false);
        
// } 

//*******************************************************************************
//**************************+   이벤트 동작   +*********************************** 

//페이지 로드 시 전체 동작 코드 (DOM 로딩 후 동작)
$(document).ready(function () {
    //$('.nav_btn_wrap').css('display', 'none');
    firstPageLoader();
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
    ctrlbar.style.background = "#E0E0E0";
    audioArray[page_num - 1].load();// 해당 페이지 오디오 로딩
    audioArray[page_num - 1].play();// 해당 페이지 오디오 재생
    function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
if (Mobile()){// 모바일일 경우
    document.querySelector('.page_wrap').requestFullscreen();
        
} 
});



//*******************************************************************************
//**************************+    다음 버튼   +*********************************** 


//다음 버튼 : 클릭 시 페이지 이동, 해당 페이지오디오만 재생(배열 인덱스라 페이지 넘버-1) 
$(document).on("click", "#next_btn", function () {
    console.log("다음");
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
//         $('.shadow_ext').removeClass("addShadow");
// $('.shadow_inner').removeClass("addInnerShadow");
// $('.border_darker').removeClass("mk_border_darker");
    }
    console.log(page_num);
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }
    if (audio_stat == 0) {
        audioArray[page_num - 1].pause();
    } else if (audio_stat == 1) {
        audioArray[page_num - 1].play();
    }
    //if ($(".active").children().hasClass(".answer_txt")){
    // if ($(".active > .answer_txt")){
    // alert('폼 영역 확인');
    // }
});


//*******************************************************************************
//**************************+    이전 버튼   +*********************************** 



//이전 버튼
$(document).on("click", "#prev_btn", function () {
    console.log("이전");
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
//         $('.shadow_ext').removeClass("addShadow");
// $('.shadow_inner').removeClass("addInnerShadow");
// $('.border_darker').removeClass("mk_border_darker");
    }
    console.log(page_num);
    if (page_num != 0) {
        audioArray[page_num - 1].load();
        audioArray[page_num - 1].play();
    }
    audioArray[page_num].pause();
    if (audio_stat == 0) {
        audioArray[page_num - 1].pause();
    } else if (audio_stat == 1) {
        audioArray[page_num - 1].play();
    }

});



//*******************************************************************************
//**************************+    정지 버튼   +*********************************** 


$('.play').css('display', 'none');

//정지 버튼
$(document).on("click", "#pause_btn", function () {
    $('.stop').css('display', 'none');
    $('.play').css('display', 'block');
    $('.play').css('display', 'flex');
    audioArray[page_num - 1].pause();
    audio_stat = 0;
});

//재생 버튼
$(document).on("click", "#play_btn", function () {
    $('.stop').css('display', 'block');
    $('.play').css('display', 'none');
    $('.stop').css('display', 'flex');
    audioArray[page_num - 1].play();
    audio_stat = 1;
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
var textSizeValue = 0;
//output.innerHTML = slider.value;//슬라이더 값 출력할 곳
slider.oninput = function () {
    // output.innerHTML = this.value;
    textSizeValue = this.value;
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
$(".pg_" + page_num + "_answer").css('box-shadow', '#00000');
$('.shadow_ext').css('box-shadow', '#00000');
$('.shadow_inner').css('box-shadow', 'inset #00000');

//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
$('#hint_btn').click(function () {
    var myPgNum = $(".active").attr('id');
    var real_pg = myPgNum.slice(1);
    $(".cursor_wrap_" + real_pg).toggleClass('show');
    $(".pg_" + real_pg + "_answer:first").toggleClass("addShadow");
    $('shadow_ext').toggleClass("addShadow");
    $('shadow_inner').toggleClass("addInnerShadow");
    $('border_darker').toggleClass("mk_border_darker");
    // $("#p"+real_pg>'.shadow_ext').toggleClass("addShadow");
})

//*******************************************************************************
//**************************+    클릭 제어   +*********************************** 

//다음으로 가기 함수 
function next(real_pg) {
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
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }
    $(".submit_btn").removeClass("pg_" + real_pg + "_answer");
    $('.shadow_ext').removeClass("addShadow");
}



//특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
document.querySelector("main").addEventListener("click", function (e) {//메인 영역에서만 이벤트 발생

    var myPgNum = $(".active").attr('id');// active 되어있는 페이지 id 값
    var real_pg = myPgNum.slice(1); // id값 앞에 붙은 p 떼어내기

    //if (page_num == pageClickArea[i].page) {//현재 페이지와 pageClickArea의 페이지 같으면
    let clickableArea = pageClickArea[real_pg].correctAnswer; //페이지별 선택 영역 정답 불러오기
    let inputableAnswer = inputAnswer[real_pg].inputableAnswer;//페이지별 입력 정답 불러오기
    let instruction = modalCont[real_pg].instruction;//페이지별 모달 내용 불러오기
    let introModalCont = modalCont[0].instruction;//첫 번째 페이지 모달 내용

    // if($("#div_test").hasClass("apple") === true) {

    // //     // 속성값이 존재함.

    // }


    if (e.target.className.includes(clickableArea)) {
        //맞게 클릭하면
        //console.log("correct");

        //----엔터값 있을 경우-------------------
        //answer_txt pg_n_answer n_input
        if (e.target.className.includes("answer_txt")) {
            $('.' + real_pg + '_input').keydown(function (e) {
                if (event.which === 13) {
                    let unspacedValue = this.value.split(' ').join('');
                    if (unspacedValue == inputableAnswer) {
                        next(real_pg);
                    } else {
                        $('.modal-body').text(instruction);
                        $('#staticBackdrop').modal('show');
                    }
                }
            });
            //키보드 떼고 값 일치하면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                let unspacedValue = this.value.split(' ').join('');
                if (unspacedValue == inputableAnswer) {
                    $(".input_nxt_btn_txt").addClass("pg_" + real_pg + "_answer");
                }
            });
        }
        

        //----자동으로 페이지 넘겨야할 때 : 6자리 입력 --토스 등등-----------------
        //ID6_auto_txt pg_n_answer n_input
        else if (e.target.className.includes("ID6_auto_txt")) {
            //키보드 떼고 값 일치하면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length ==6) {
                    next(real_pg);
                    
                }
            });
        }

        //----자동으로 페이지 넘겨야할 때 : 7자리 입력 --토스 등등-----------------
        //ID7_auto_txt pg_n_answer n_input
        else if (e.target.className.includes("ID7_auto_txt")) {
            //키보드 떼고 값 일치하면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length ==7) {
                    next(real_pg);
                    
                }
            });
        }

        //----자동으로 페이지 넘겨야할 때 : 텍스트 입력 --토스 등등-----------------
        //anwer_auto_txt pg_n_answer n_input
        else if (e.target.className.includes("answer_auto_txt")) {
            //키보드 떼고 값 일치하면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                let unspacedValue = this.value.split(' ').join('');
                if (unspacedValue == inputableAnswer) {
                    next(real_pg);
                }
            });
        }

        //----아무거나 입력해도 될 때-------------------
        //answer_any_txt pg_n_answer n_input
        else if (e.target.className.includes("answer_any_txt")) {

            //키보드 누르고 1자리 이상일 때 엔터 누르면 다음 페이지로 넘어가게 
            $('.' + real_pg + '_input').keydown(function (e) {
                if (event.which === 13) {
                    let unspacedValue = this.value.split(' ').join('');
                    if (unspacedValue.length >= 1 ) {
                        console.log(unspacedValue);
                        console.log(unspacedValue.length);
                        next(real_pg);
                    } else {
                        $('.modal-body').text(instruction);
                        $('#staticBackdrop').modal('show');
                    }
                }
            });

            //키보드 떼고 1자리 이상이면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length >=1 ) {
                    $(".input_nxt_btn").addClass("pg_" + real_pg + "_answer");
                    $(".nxt_btn_able").addClass("btn_able_color");
                }
            });
        }

        
        //----아무거나 입력해도 될 때 // 다 입력하고 다음 값 입력할 수 있도록 페이지 넘겨줄 때 -------------------
        //answer_autoNxt_any_txt pg_n_answer n_input
        else if (e.target.className.includes("answer_autoNxt_any_txt")) {

            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length >=1 ) {
                    $(".nxt_Input").addClass("pg_" + real_pg + "_answer");
                }
            });
        }

        //----주민번호 13자리... 있을 경우(-없이 13자리 입력)-------------------
        // ID_num13 pg_n_answer n_input
        else if (e.target.className.includes("ID_num13")) {

            //키보드 누르고 13자리 이상일 때 엔터 누르면 다음 페이지로 넘어가게 
            $('.' + real_pg + '_input').keydown(function (e) {
                if (event.which === 13) {
                    let unspacedValue = this.value.split(' ').join('');
                    if (unspacedValue.length == 13 ) {
                        console.log(unspacedValue);
                        console.log(unspacedValue.length);
                        next(real_pg);
                    } else {
                        $('.modal-body').text(instruction);
                        $('#staticBackdrop').modal('show');
                    }
                }
            });

            //키보드 떼고 13자리 이상이면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length ==13 ) {
                    $(".input_nxt_btn").addClass("pg_" + real_pg + "_answer");
                }
            });
        }

        //----전화번호 입력... 있을 경우 (-없이 11자리 입력)-------------------
        // ID_num11 pg_n_answer n_input
        else if (e.target.className.includes("ID_num11")) {

            //키보드 누르고 11자리 이상일 때 엔터 누르면 다음 페이지로 넘어가게 
            $('.' + real_pg + '_input').keydown(function (e) {
                if (event.which === 13) {
                    let unspacedValue = this.value.split(' ').join('');
                    if (unspacedValue.length == 11 ) {
                        console.log(unspacedValue);
                        console.log(unspacedValue.length);
                        next(real_pg);
                    } else {
                        $('.modal-body').text(instruction);
                        $('#staticBackdrop').modal('show');
                    }
                }
            });

            //키보드 떼고 11자리 이상이면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length ==11 ) {
                    if (e.target.className.includes("toss_btn_chng")) {
                        $(".input_nxt_btn").removeClass("btn-disabled");
                        $(".input_nxt_btn").addClass("btn-b");
                    }
                    $(".input_nxt_btn").addClass("pg_" + real_pg + "_answer");
                }
            });
        }


        //----비번 4자리 입력... 있을 경우 (-없이 4자리 입력)-------------------
        // ID_num4 pg_n_answer n_input
        else if (e.target.className.includes("ID_num4")) {

            //키보드 누르고 4자리 이상일 때 엔터 누르면 다음 페이지로 넘어가게 
            $('.' + real_pg + '_input').keydown(function (e) {
                if (event.which === 13) {
                    let unspacedValue = this.value.split(' ').join('');
                    if (unspacedValue.length == 4 ) {
                        console.log(unspacedValue);
                        console.log(unspacedValue.length);
                        next(real_pg);
                    } else {
                        $('.modal-body').text(instruction);
                        $('#staticBackdrop').modal('show');
                    }
                }
            });

            //키보드 떼고 4자리 이상이면 다음 버튼 활성화되게 
            $('.' + real_pg + '_input').keyup(function(){
                if (this.value.length ==4 ) {
                    $(".input_nxt_btn").addClass("pg_" + real_pg + "_answer");
                }
            });
        }

        //----비번4자리 있을 경우 + dot -------------------
        //pw_4_input pg_n_answer input_(키패드 넘버)
        else if (e.target.className.includes("pw_4_input")) {
            console.log('pw');
            //키패드 번호 누르기
            for (j = 0; j < 10; j++) {
                if (e.target.className.includes("input_" + j)) {
                    //let pressedKey = j;
                    if (pwArr.length < 3) {
                        console.log(j + '이전 clicked');
                        var num_cnt = pwArr.length
                        pwArr.push(j);
                        console.log(pwArr);
                        console.log("길이는", pwArr.length);
                        $(".dot" + num_cnt).css("background-color", "#ffffff");//색칠

                    } else if (pwArr.length = 3) { //배열 길이 5 -> 6개까지 입력하고 일어날 이벤트
                        console.log(j + '이후 clicked');
                        pwArr.push(j);
                        console.log("길이는", pwArr.length);
                        console.log(pwArr);
                        $(".dot3").css("background-color", "#ffffff");//색칠
                        next(real_pg);
                        $('.submit_btn').click(function () {
                            var pw_set = pwArr.join('');
                            console.log(pw_set);
                            $(".submit_btn").addClass("pg_" + real_pg + "_answer");
                            pwArr = [];
                            for ( i =0; i <4; i++) {
                                $(".dot"+i).css("background-color", "#4f4f5a");//버튼누르면 색칠초기화
                            }
                        });
                    }
                }
            }
        } 

        //----비번6자리 있을 경우 + dot -------------------
        //pw_input pg_n_answer pwn input_(키패드 넘버)
        else if (e.target.className.includes("pw_input")) {
            console.log('pw');
            //키패드 번호 누르기
            for (j = 0; j < 10; j++) {
                if (e.target.className.includes("input_" + j)) {
                    //let pressedKey = j;
                    if (pwArr.length < 5) {
                        console.log(j + '이전 clicked');
                        var num_cnt = pwArr.length
                        pwArr.push(j);
                        console.log(pwArr);
                        console.log("길이는", pwArr.length);
                        $(".dot" + num_cnt).css("background-color", "#375BA9");//색칠

                    } else if (pwArr.length = 5) { //배열 길이 5 -> 6개까지 입력하고 일어날 이벤트
                        console.log(j + '이후 clicked');
                        pwArr.push(j);
                        console.log("길이는", pwArr.length);
                        console.log(pwArr);
                        $(".dot5").css("background-color", "#375BA9");//색칠
                        $('.submit_btn').click(function () {
                            var pw_set = pwArr.join('');
                            console.log(pw_set);
                            $(".submit_btn").addClass("pg_" + real_pg + "_answer");
                            pwArr = [];
                            for ( i =0; i <6; i++) {
                                $(".dot"+i).css("background-color", "#a9a9a9");//버튼누르면 색칠초기화
                            }
                        });
                    }
                }
            }
        } 
        

        //----주민번호 뒷자리만 입력하는 경우  + dot -------------------
        //input_8 pg_n_answer IDn_input pw(키패드 넘버)
        else if (e.target.className.includes("ID7_input")) {
            console.log('pw');
            //키패드 번호 누르기
            for (j = 0; j < 10; j++) {
                if (e.target.className.includes("input_" + j)) {
                    //let pressedKey = j;
                    if (pwArr.length < 6) {
                        console.log(j + '이전 clicked');
                        var num_cnt = pwArr.length
                        pwArr.push(j);
                        console.log(pwArr);
                        console.log("길이는", pwArr.length);
                        $(".dot_" + num_cnt).css("background-color", "#000000");//색칠

                    } else if (pwArr.length = 6) { //배열 길이 6 -> 7개까지 입력하고 일어날 이벤트
                        console.log(j + '이후 clicked');
                        pwArr.push(j);
                        console.log("길이는", pwArr.length);
                        console.log(pwArr);
                        $(".dot_6").css("background-color", "#000000");//색칠
                        $('.submit_btn').click(function () {
                            var pw_set = pwArr.join('');
                            console.log(pw_set);
                            $(".submit_btn").addClass("pg_" + real_pg + "_answer");
                            pwArr = [];
                            for ( i =0; i <7; i++) {
                                $(".dot_"+i).css("background-color", "#fff");//버튼누르면 색칠초기화
                            }
                        });
                    }
                } 
            }
        } 

        //----날짜 선택창 있는 경우 -------------------
        else if (e.target.className.includes("calendar")) {
        
            $('.datepicker').click(function () {
                $('.datepicker').css('display', 'none');
                $(".cal_next_btn").addClass("pg_" + real_pg + "_answer");
                
            });
        }
        
        //암것도 없으면 모달 띄우기
        else {
            next(real_pg);//다음 페이지로 이동
        }

    } else {
        //틀리게 클릭하면
        $('#staticBackdrop').modal('show');
    }



    //----------- 모달 내부 내용 넣기 -----------------------
    if (page_num == 0) {
        $('.modal-body').text(introModalCont);
    } else {
        $('.modal-body').text(instruction);
    }


});


