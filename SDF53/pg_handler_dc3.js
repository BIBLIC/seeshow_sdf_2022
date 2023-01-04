var page_num = 0; // 수정 XXX -> 맨 처음 페이지 초기화하기 위함
var user_input_txt = '';
var total_height = $('.news-main').height();
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

// ios 또는 android Chrome 일 때 스크롤 맨 밑으로 스크롤 해서 어쩌구 보류 
// function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}
// if (Mobile()){// 모바일일 경우
//     window.addEventListener('load', function(){
//         document.body.style.height = (document.documentElement.clientHeight + 5) + 'px';
//         window.scrollTo(0, 1);
//     }, false);

// } else {// 모바일 외

// }

function runConfetti () {
    confetti({
        particleCount: 100,
        spread: 30
        // any other options from the global
        // confetti function
      });
}

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

    //---------ctrlbar shadow
    if (page_num == 0) {
        $(".ctrlbar").removeClass("ctrlbar_shadow");
    } else {
        $(".ctrlbar").addClass("ctrlbar_shadow");
    }
    //var number = $('.news-main').height();
    total_height = $('.news-main').height();

    //자동 스크롤
    if (page_num == 1) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
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

    if (page_num==total_page){
        setTimeout(function () {
            runConfetti();
        }, 500);
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

    //---------ctrlbar shadow
    if (page_num == 0) {
        $(".ctrlbar").removeClass("ctrlbar_shadow");
    } else {
        $(".ctrlbar").addClass("ctrlbar_shadow");
    }

    //자동 스크롤
    if (page_num == 1) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 2) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 3) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.3;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.15;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 4) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.9;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.6;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 5) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 6) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.8;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 7) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        }
    }

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

    //---------ctrlbar shadow
    if (page_num == 0) {
        $(".ctrlbar").removeClass("ctrlbar_shadow");
    } else {
        $(".ctrlbar").addClass("ctrlbar_shadow");
    }
     //자동 스크롤
     if (page_num == 1) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 2) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 3) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.3;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.15;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 4) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.9;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.6;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 5) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 6) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.8;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 7) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        }
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

// $(".cursor_wrap").css('display', 'none');
// $(".pg_" + page_num + "_answer").css('box-shadow', '#00000');
// $('.shadow_ext').css('box-shadow', '#00000');
// $('.shadow_inner').css('box-shadow', 'inset #00000');

// //시작하기 버튼 클릭 후 컨트롤 바 내부 변경
// $('#hint_btn').click(function () {
//     var myPgNum = $(".active").attr('id');
//     var real_pg = myPgNum.slice(1);
//     $(".cursor_wrap_" + real_pg).toggleClass('show');
//     $(".pg_" + real_pg + "_answer:first").toggleClass("addShadow");
//     $('.shadow_ext').toggleClass("addShadow");
//     $(".pg_" + real_pg + "_shadow_inner").toggleClass("addInnerShadow");
//     $('.border_darker').toggleClass("mk_border_darker");
// })

//*******************************************************************************
//**************************+    클릭 제어   +*********************************** 

//다음으로 가기 함수 
function next() {
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
    //자동 스크롤
    if (page_num == 1) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 2) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.001;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 3) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.3;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.15;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 4) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 0.9;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 0.6;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 5) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 6) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 1.8;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 1.5;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num == 7) {
        if (textSizeValue == "2") {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        } else {
            let scrollPos = total_height * 2;
            $('.news_main').scrollTop(scrollPos);
        }
    }
    if (page_num==total_page){
        setTimeout(function () {
            runConfetti();
        }, 500);
    }
}

//( 1 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_1_answer", function () {
    cursor_wrap_1.style.display = "none";
    modal1.style.display = "";
    //console.log('정답 누르고 p',real_pg);
});
$(document).on("click", ".nxtBtn1", function () {
    modal1.style.display = "none";
    modal1_2.style.display = "";
});
$(document).on("click", ".okBtn1", function () {
    modal1_2.style.display = "none";
    //console.log('전 p',real_pg);
    next();
    //console.log('후 p',real_pg);
});

//( 2 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_2_answer", function () {
    cursor_wrap_2.style.display = "none";
    modal2_1.style.display = "";
});
$(document).on("click", ".okBtn2", function () {
    modal2_1.style.display = "none";
    //console.log('전 p',real_pg);
    next();
    //console.log('후 p',real_pg);
});


//( 3 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_3_answer", function () {
    cursor_wrap_3.style.display = "none";
    modal3_1.style.display = "";
});
$(document).on("click", ".nxtBtn3", function () {
    modal3_1.style.display = "none";
    modal3_2.style.display = "";
   
    //console.log('후 p',real_pg);
});
$(document).on("click", ".okBtn3", function () {
    modal3_2.style.display = "none";
    //console.log('전 p',real_pg);
    next();
    //console.log('후 p',real_pg);
});


//( 4 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_4_answer", function () {
    cursor_wrap_4.style.display = "none";
    modal4_1.style.display = "";
});
$(document).on("click", ".nxtBtn4", function () {
    modal4_1.style.display = "none";
    modal4_2.style.display = "";
});
$(document).on("click", ".okBtn4", function () {
    modal4_2.style.display = "none";
    next();
});


//( 5 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_5_answer", function () {
    cursor_wrap_5.style.display = "none";
    modal5_1.style.display = "";
});
$(document).on("click", ".nxtBtn5", function () {
    modal5_1.style.display = "none";
    modal5_2.style.display = "";
});
$(document).on("click", ".okBtn5", function () {
    modal5_2.style.display = "none";
    next();
});


//( 6 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_6_answer", function () {
    cursor_wrap_6.style.display = "none";
    modal6_1.style.display = "";
});
$(document).on("click", ".nxtBtn6", function () {
    modal6_1.style.display = "none";
    modal6_2.style.display = "";
});
$(document).on("click", ".okBtn6", function () {
    modal6_2.style.display = "none";
    next();
});

//( 7 )++++++++++++++++++++++++++++
$(document).on("click", ".pg_7_answer", function () {
    cursor_wrap_7.style.display = "none";
    modal7_1.style.display = "";
});
$(document).on("click", ".nxtBtn7", function () {
    modal7_1.style.display = "none";
    modal7_2.style.display = "";
});
$(document).on("click", ".okBtn7", function () {
    modal7_2.style.display = "none";
    next();
});
