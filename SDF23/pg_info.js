var total_page = 22;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {
        page: 20,
        correctAnswer: "pg_20_answer"
    },
    {
        page: 21,
        correctAnswer: "pg_21_answer"
    },
    {
        page: 22,
        correctAnswer: "pg_22_answer"
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
    {
        page: 14,
        inputableAnswer: "123456"
    },
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
        instruction: "페이지가 자동으로 전환되도록 기다려주세요."
    },
    {
        page: 2,
        instruction: "'다음' 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "'다음' 버튼을 눌러주세요."
    },
    {
        page: 4,
        instruction: "'시작하기' 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "'확인' 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "'앱 사용 중에만 허용'을 눌러주세요."
    },
    {
        page: 7,
        instruction: "'허용'을 눌러주세요."
    },
    {
        page: 8,
        instruction: "'본인인증 시작하기' 버튼을 눌러주세요."
    },
    {
        page: 9,
        instruction: "이름을 입력하고 '다음' 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "'-'을 제외한 주민번호 13자리를 입력하고 '다음' 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "'-'을 제외한 휴대폰 번호 11자리를 입력하고 '다음' 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "'전체동의'를 눌러주세요."
    },
    {
        page: 13,
        instruction: "'확인' 버튼을 눌러주세요."
    },
    {
        page: 14,
        instruction: "인증번호 '123456'을 입력하고 '확인' 버튼을 눌러주세요."
    },
    {
        page: 15,
        instruction: "화면의 키패드를 이용해 비밀번호 6자리를 입력해주세요."
    },
    {
        page: 16,
        instruction: "다시 한번 화면의 키패드를 이용해 비밀번호 6자리를 입력해주세요."
    },
    {
        page: 17,
        instruction: "'등록하기' 버튼을 눌러주세요."
    },
    {
        page: 18,
        instruction: "'다음' 버튼을 눌러주세요."
    },
    {
        page: 19,
        instruction: "'다음' 버튼을 눌러주세요."
    },
    {
        page: 20,
        instruction: "'IC 운전면허증 신청하기' 버튼을 눌러주세요."
    },
    {
        page: 21,
        instruction: "'운전면허시험장에서 발급 시작하기' 버튼을 눌러주세요."
    },
    {
        page: 22,
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
                offset: [0,100],
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
    $(document).ready(function () {
        setTimeout(function () {
            if (page_num === 1) {
                next();
            }
        }, 800);
    });
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 2) {
        $(document).ready(function () {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
        });
    }
});


const txt_user_input_fill = document.querySelector('.txt_user_input_fill');
const txt_user_input_fill2 = document.querySelector('.txt_user_input_fill2');
//사용자가 입력한 내용 출력하기
// $('.pg_9_answer').click(function () {
//     txt_user_input_fill.innerText = user_input_txt;
// });

$(document).on("click", "#next_btn", function () {
    if (user_input_txt != ''){
        txt_user_input_fill.innerText = user_input_txt;
        txt_user_input_fill2.innerText = user_input_txt;
    }
});



$(document).on("click", '.pg_9_answer', function () {

        txt_user_input_fill.innerText = user_input_txt;  

});

$(document).on("click", '.pg_10_answer', function () {
   
        txt_user_input_fill2.innerText = user_input_txt;  

});