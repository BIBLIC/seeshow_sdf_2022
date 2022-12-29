var total_page = 12;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

// -----------------------------------------------------------------------------------------------------------------------
//정답 처리할 영역 클래스 명
//correctAnswer 로 지정한 class 외 영역 클릭 시 모달창 출력
//-> 후에 for 문 써서 pg_n_answer 로 통일하기
const pageClickArea = [
    {
        page: 0,
        correctAnswer: "pg_0_answer"
    },
    {
        page: 1,
        correctAnswer: "pg_1_answer"
    },
    {
        page: 2,
        correctAnswer: "pg_2_answer"
    },
    {
        page: 3,
        correctAnswer: "pg_3_answer"
    },
    {
        page: 4,
        correctAnswer: "pg_4_answer"
    },
    {
        page: 5,
        correctAnswer: "pg_5_answer"
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer"
    },
    {
        page: 7,
        correctAnswer: "pg_7_answer"
    },
    {
        page: 8,
        correctAnswer: "pg_8_answer"
    },
    {
        page: 9,
        correctAnswer: "pg_9_answer"
    },
    {
        page: 10,
        correctAnswer: "pg_10_answer"
    },
    {
        page: 11,
        correctAnswer: "pg_11_answer"
    },
    {
        page: 12,
        correctAnswer: "pg_12_answer"
    },
];

// -=----------------------------------------------------------------------------------------------------------------------
//페이지 수만큼 0부터 {}, 공간이 있어야 함
const inputAnswer = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "국세청 손택스 메인화면에서 조회/발급 탭을 눌러 주세요."
    },
    {
        page: 2,
        instruction: "'연말정산서비스'를 눌러주세요."
    },
    {
        page: 3,
        instruction: "'근로자 소득ㆍ세액공제 자료조회'를 눌러주세요."
    },
    {
        page: 4,
        instruction: "필요한 항목을 조회 해야만 자료 내려받기가 가능합니다. 건강보험료 항목을 조회해 주세요."
    },
    {
        page: 5,
        instruction: "국민연금 항목을 조회해 주세요"
    },
    {
        page: 6,
        instruction: "보험료 항목을 조회해 주세요"
    },
    {
        page: 7,
        instruction: "의료비 항목을 조회해 주세요"
    },
    {
        page: 8,
        instruction: "마지막으로 신용카드 항목을 조회해 주세요"
    },
    {
        page: 9,
        instruction: "조회한 항목들을 내려받겠습니다 '일괄/점자 내려받기' 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "내려받기 버튼을 누르면 다운로드가 시작되고 실습이 완료됩니다. 내려받기 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "다운로드 시작"
    },
    {
        page: 12,
        instruction: "완료"
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_9 = document.querySelector('.cursor_pos_9');
const cursor_pos_10 = document.querySelector('.cursor_pos_10');
// const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// const cursor_pos_6 = document.querySelector('.cursor_pos_6');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_9 = document.querySelector('.cursor_wrap_9');
const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');
// const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_9.style.zIndex = "100";
cursor_wrap_10.style.zIndex = "100";
// // cursor_wrap_5.style.zIndex = "100";
// // cursor_wrap_6.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
            },
        },
    ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
            },
        },
    ],
});
createPopper(cursor_pos_9, cursor_wrap_9, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [10,20],
            },
        },
    ],
});
createPopper(cursor_pos_10, cursor_wrap_10, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-25,-30],
            },
        },
    ],
});
// // createPopper(cursor_pos_5, cursor_wrap_5, {
// //     placement: 'right',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [25,200],
// //             },
// //         },
// //     ],
// // });
// // createPopper(cursor_pos_6, cursor_wrap_6, {
// //     placement: 'bottom',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [250,10],
// //             },
// //         },
// //     ],
// // });

$('#hint_btn').click(function () {
    var myPgNum = $(".active").attr('id');
    var real_pg = myPgNum.slice(1);
    if ((real_pg == 2)){
        $(".menu").removeClass("box-shadow");
    } 
})

$(document).on("click", '.pg_10_answer', function () {
    if (page_num === 11) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 11) {
                    next();
                }
            }, 1200);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 10) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 11) {
                    next();
                }
            }, 1200);
          });  
    }
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 12) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 11) {
                    next();
                }
            }, 1200);
          });  
    }
});








// -------------------------------------------------------
$(document).on("click", "#hint_btn", function () {
    if (page_num === 2) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 0 + 1;
        $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_2_2").toggleClass('show');
        $(".cursor_wrap_2_3").toggleClass('show');
        $(".cursor_wrap_2_4").toggleClass('show');
    }

    if (page_num === 4) {

        // var total_height = $('.scroller').height();
        // let scrollPos = total_height * 0 + 1;
        // $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_4_2").toggleClass('show');
        $(".cursor_wrap_4_3").toggleClass('show');
    }
});


// ------------------------------------------------------------------
$(document).on("click", "#hint_btn", function () {
    if (page_num === 6 || page_num === 7) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 0.7;
        $('.scroller').scrollTop(scrollPos);

    }

    if (page_num === 8) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 1.7;
        $('.scroller').scrollTop(scrollPos);

    }
});

// ------------------------------------------------------------------
$(document).on("click", ".pg_5_answer", function () {
    if (page_num === 6) {
        $( document ).ready(function() {
                if (page_num === 6) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 0.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
});

$(document).on("click", ".pg_6_answer", function () {
    if (page_num === 7) {
        $( document ).ready(function() {
                if (page_num === 7) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 0.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
});

$(document).on("click", ".pg_7_answer", function () {
    if (page_num === 8) {
        $( document ).ready(function() {
                if (page_num === 8) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 1.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
});

// ------------------------------------------------------------------
$(document).on("click", "#next_btn", function () {
    if (page_num === 5 || page_num === 6) {

        $( document ).ready(function() {
                if (page_num === 6 || page_num === 7) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 0.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }

    if (page_num === 7) {

        $( document ).ready(function() {
                if (page_num === 8) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 1.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
});

// ------------------------------------------------------------------
$(document).on("click", "#prev_btn", function () {
    

    if (page_num === 5 || page_num === 6) {
        $( document ).ready(function() {
                if (page_num === 4 || page_num === 5) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 0;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
    
    if (page_num === 7 || page_num === 8) {
        $( document ).ready(function() {
                if (page_num === 6 || page_num === 7) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 0.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }

    if (page_num === 9) {
        $( document ).ready(function() {
                if (page_num === 8) {
                    var total_height = $('.scroller').height();
                    let scrollPos = total_height * 1.7;
                    $('.scroller').scrollTop(scrollPos);            
                }
          });  
    }
});