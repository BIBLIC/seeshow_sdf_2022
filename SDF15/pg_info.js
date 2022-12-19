var total_page = 19;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {
        page: 13,
        correctAnswer: "pg_13_answer"
    },
    {
        page: 14,
        correctAnswer: "pg_14_answer"
    },
    {
        page: 15,
        correctAnswer: "pg_15_answer"
    },
    {
        page: 16,
        correctAnswer: "pg_16_answer"
    },
    {
        page: 17,
        correctAnswer: "pg_17_answer"
    },
    {
        page: 18,
        correctAnswer: "pg_18_answer"
    },
    {
        page: 19,
        correctAnswer: "pg_19_answer"
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
    {
        page: 8,
        inputableAnswer: "김서울"
    },
    {},
    {},
    {},
    {
        page: 12,
        inputableAnswer: "123456"
    },
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
        instruction: ""
    },
    {
        page: 1,
        instruction: ""
    },
    {
        page: 2,
        instruction: ""
    },
    {
        page: 3,
        instruction: ""
    },
    {
        page: 4,
        instruction: ""
    },
    {
        page: 5,
        instruction: ""
    },
    {
        page: 6,
        instruction: ""
    },
    {
        page: 7,
        instruction: ""
    },
    {
        page: 8,
        instruction: ""
    },
    {
        page: 9,
        instruction: ""
    },
    {
        page: 10,
        instruction: ""
    },
    {
        page: 11,
        instruction: ""
    },
    {
        page: 12,
        instruction: ""
    },
    {
        page: 13,
        instruction: ""
    },
    {
        page: 14,
        instruction: ""
    },
    {
        page: 15,
        instruction: ""
    },
    {
        page: 16,
        instruction: ""
    },
    {
        page: 17,
        instruction: ""
    },
    {
        page: 18,
        instruction: ""
    },
    {
        page: 19,
        instruction: ""
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

//const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// // const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// // const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// // const cursor_pos_6 = document.querySelector('.cursor_pos_6');

//const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// // const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// // const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// // const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


// cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
// // cursor_wrap_4.style.zIndex = "100";
// // cursor_wrap_5.style.zIndex = "100";
// // cursor_wrap_6.style.zIndex = "100";


const { createPopper } = Popper;
// createPopper(cursor_pos_1, cursor_wrap_1, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [0,0],
//             },
//         },
//     ],
// });
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
            },
        },
    ],
});
createPopper(cursor_pos_3, cursor_wrap_3, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,100],
            },
        },
    ],
});
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




$(document).on("click", '#start-btn', function () {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 2) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
});

// $(document).on("click", "#hint_btn", function () {
//     if (page_num === 2) {
//         $('.icon_chng').css('backgroundColor', '#aeaeae');
//         $('.icon_chng').css('border', '2px solid #aeaeae');
//         $(document).on("click", "#hint_btn", function () {
//             $('.icon_chng').css('backgroundColor', '#D7F1EE');
//             $('.icon_chng').css('border', '2px solid #e0e0e0');
//         });
//     }
// });
