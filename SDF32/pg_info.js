var total_page = 18;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

//정답 처리할 영역 클래스 명
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
];

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
    {
        page: 13,
        inputableAnswer: "123456"
    },
    {},
    {},
    {},
    {},
    {},
    {},
];

const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "우측 하단의 메뉴 영역을 눌러주세요"
    },
    {
        page: 2,
        instruction: "'선물하기' 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "페이지가 자동으로 전환되도록 기다려주세요."
    },
    {
        page: 4,
        instruction: "'전체동의'를 눌러주세요."
    },
    {
        page: 5,
        instruction: "'다음' 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "'메인으로 이동하기' 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "'생일' 버튼을 눌러주세요."
    },
    {
        page: 8,
        instruction: "수제 케이크를 찾아 눌러주세요."
    },
    {
        page: 9,
        instruction: "'선물하기' 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "친구 목록 중 '김한국'을 영역을 눌러주세요."
    },
    {
        page: 11,
        instruction: "'확인' 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "'선물과 함께 보낼 메시지를 적어보세요' 부분에 텍스트를 입력하고 스크롤을 내려 '카드 입력'을 눌러주세요."
    },
    {
        page: 13,
        instruction: "'약관 전체동의'를 눌러주세요."
    },
    {
        page: 14,
        instruction: "'확인' 버튼을 눌러주세요."
    },
    {
        page: 15,
        instruction: "'직접 입력하기' 버튼을 눌러주세요."
    },
    {
        page: 16,
        instruction: "카드 비밀번호 4자리를 입력하고 '완료' 버튼을 눌러주세요."
    },
    {
        page: 17,
        instruction: "카드 등록 내용을 확인하고 '29,900원 결제하기' 버튼을 눌러주세요."
    },
    {
        page: 18,
        instruction: "완료"
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
// // const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// // const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// // const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// // const cursor_pos_6 = document.querySelector('.cursor_pos_6');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// // const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// // const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// // const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// // const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


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
                offset: [-50,-10],
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
                offset: [0,30],
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



// var myPgNum = $(".active").attr('id');// active 되어있는 페이지 id 값
// var real_pg = myPgNum.slice(1); // id값 앞에 붙은 p 떼어내기


$(document).on("click", '.pg_2_answer', function () {
    if (page_num === 3) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 2) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 4) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});