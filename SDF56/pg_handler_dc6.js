var page_num = 0; // 수정 XXX -> 맨 처음 페이지 초기화하기 위함
var user_input_txt = '';
var total_height = $('.blog-main').height();
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const ctrlbar = document.querySelector('.ctrlbar');

const textModal = document.getElementById("textModal");
const size_btn = document.getElementById("size_btn");
const start_btn_wrap = document.getElementById("start_btn_wrap");
$('.nav_btn_wrap').css('display', 'none');
$('.play').css('display', 'none');

const msg_data = localStorage.getItem('msg');
const news_data = localStorage.getItem('news');
const blog_data = localStorage.getItem('blog');
const community_data = localStorage.getItem('community');

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
window.addEventListener('touchend', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//*******************************************************************************
//**************************+   이벤트 동작   +*********************************** 

//페이지 로드 시 전체 동작 코드 (DOM 로딩 후 동작)
$(document).ready(function () {
    firstPageLoader();
    type_done_check();
});


//시작 페이지 로딩
function firstPageLoader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
    $('.nav_btn_wrap').css('display', 'block');
    $('.nav_btn_wrap').contents().unwrap();
    ctrlbar.style.background = "#E0E0E0";
    $(".ctrlbar").addClass("ctrlbar_shadow");
}





const cmplt_img_1 = document.querySelector('.cmplt_img_1');
const cmplt_img_2 = document.querySelector('.cmplt_img_2');
const cmplt_img_3 = document.querySelector('.cmplt_img_3');
const cmplt_img_4 = document.querySelector('.cmplt_img_4');

const img_pos_1 = document.querySelector('.img_pos_1');
const img_pos_2 = document.querySelector('.img_pos_2');
const img_pos_3 = document.querySelector('.img_pos_3');
const img_pos_4 = document.querySelector('.img_pos_4');

cmplt_img_1.style.right="4em";
cmplt_img_2.style.right="4em";
cmplt_img_3.style.right="4em";
cmplt_img_4.style.right="4em";

cmplt_img_1.style.display = "none";
cmplt_img_2.style.display = "none";
cmplt_img_3.style.display = "none";
cmplt_img_4.style.display = "none";

cmplt_img_1.style.zIndex = "40";
cmplt_img_2.style.zIndex = "40";
cmplt_img_3.style.zIndex = "40";
cmplt_img_4.style.zIndex = "40";


const { createPopper } = Popper;
// createPopper(img_pos_1, cmplt_img_1, {
//     placement: 'left',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [0,-150],
//             },
//         },
//     ],
// });

//각 유형 진행 체크
function type_done_check() {
    if (msg_data=="done"){
        $('.msg_btn').css({ "opacity":"0.4"})
        cmplt_img_1.style.display = "";
    }
    if (news_data=="done"){
        $('.news_btn').css({ "opacity":"0.4"})
        cmplt_img_2.style.display = "";
    }
    if (blog_data=="done"){
        $('.blog_btn').css({ "opacity":"0.4"})
        cmplt_img_3.style.display = "";
    }
    if (community_data=="done"){
        $('.community_btn').css({ "opacity":"0.4"})
        cmplt_img_4.style.display = "";
    }
    if ((blog_data=="done")&&(news_data=="done")&&(blog_data=="done")&&(community_data=="done")){
        
    }
}

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

}

// 각 유형 클릭 시 이벤트
$('.msg_btn').click(function () {
    localStorage["msg"] = "done";
    location.href = "./SDF52/SDF52.html";
});

$('.news_btn').click(function () {
    localStorage["news"] = "done";
    location.href = "./SDF53/SDF53.html";
});

$('.blog_btn').click(function () {
    localStorage["blog"] = "done";
    location.href = "./SDF54/SDF54.html";
});

$('.community_btn').click(function () {
    localStorage["community"] = "done";
    location.href = "./SDF55/SDF55.html";
});

//리프레시 버튼
$('.refresh_btn').click(function () {
    window.localStorage.clear();
    location.reload(true);
});