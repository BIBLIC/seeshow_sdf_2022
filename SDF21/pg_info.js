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
        instruction: "'조회ㆍ발급' 탭을 눌러주세요."
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
        instruction: "건강보험료 영역에서 '조회' 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "국민연금 영역에서 '조회' 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "보험료 영역에서 '조회' 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "의료비 영역에서 '조회' 버튼을 눌러주세요."
    },
    {
        page: 8,
        instruction: "스크롤을 내려 신용카드 영역에서 '조회' 버튼을 눌러주세요."
    },
    {
        page: 9,
        instruction: "'일괄/점자 내려받기' 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "선택한 항목을 확인하고 스크롤을 내려 '내려받기' 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "파일 내려받기가 완료될 때 까지 기다려주세요."
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
// const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// const cursor_pos_6 = document.querySelector('.cursor_pos_6');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
// // cursor_wrap_3.style.zIndex = "100";
// // cursor_wrap_4.style.zIndex = "100";
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
// // createPopper(cursor_pos_3, cursor_wrap_3, {
// //     placement: 'right',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [70,80],
// //             },
// //         },
// //     ],
// // });
// // //cursor_wrap_4.style.left="60%";

// // createPopper(cursor_pos_4, cursor_wrap_4, {
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