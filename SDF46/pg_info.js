var total_page = 8;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "시작하기 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "로딩중입니다."
    },
    {
        page: 2,
        instruction: "어카운트 인포는 금융결제원에서 운영하는 서비스입니다. 휴면계좌 한눈에 서비스 이용을 위해 어카운트 인포에 금융인증서로 로그인하겠습니다. 금융인증서를 눌러주세요"
    },
    {
        page: 3,
        instruction: "금융인증서 비밀번호 6자리를 입력해 주세요."
    },
    {
        page: 4,
        instruction: "우측 하단 점 세개 아이콘의 '더보기' 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "메뉴에서 '휴면예금/보험금 조회'를 찾아서 눌러주세요."
    },
    {
        page: 6,
        instruction: "휴면예금/보험금 조회를 위한 동의 항목에 체크하여 동의해 주세요. 모든 동의가 필수입니다. 모두 동의하고 '다음'버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "휴면예금 보험금이 조회되었습니다. 총 1개의 계좌를 찾았습니다. 조회 된 계좌를 누르면 실습이 완료됩니다."
    },
    {
        page: 8,
        instruction: "완료"
    },

];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

// const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// const cursor_pos_6 = document.querySelector('.cursor_pos_6');

// const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


// cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
// cursor_wrap_4.style.zIndex = "100";
// cursor_wrap_5.style.zIndex = "100";
// cursor_wrap_6.style.zIndex = "100";


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
createPopper(cursor_pos_3, cursor_wrap_3, {
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
// //cursor_wrap_4.style.left="60%";

// createPopper(cursor_pos_4, cursor_wrap_4, {
//     placement: 'bottom',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [250,10],
//             },
//         },
//     ],
// });
// createPopper(cursor_pos_5, cursor_wrap_5, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [25,200],
//             },
//         },
//     ],
// });
// createPopper(cursor_pos_6, cursor_wrap_6, {
//     placement: 'bottom',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [250,10],
//             },
//         },
//     ],
// });



$(document).on("click", '#start-btn', function () {
    if (page_num === 1) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 0) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
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