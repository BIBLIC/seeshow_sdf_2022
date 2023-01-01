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
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "페이지가 자동으로 전환되도록 기다려주세요."
    },
    {
        page: 2,
        instruction: "내용을 확인하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "단 한번 방문해서 지갑 속 운전면허증 그대로 모바일에 넣을 수 있는 모바일 운전면허증, 내용을 확인하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 4,
        instruction: "언제 어디서나 모바일 신분증으로 신원 증명이 가능합니다. ‘시작하기’버튼을 눌러서 다음으로 진행해주세요."
    },
    {
        page: 5,
        instruction: "필수 권한은 허용 해야만 모바일 신분증 앱사용이 가능합니다. ‘확인’ 버튼을 눌러주세요. "
    },
    {
        page: 6,
        instruction: "카메라 접근 권한은 필수항목입니다. ‘앱 사용 중에만 허용’을 눌러주세요"
    },
    {
        page: 7,
        instruction: "전화 접근 권한은 필수항목입니다. ‘허용’을 눌러주세요."
    },
    {
        page: 8,
        instruction: "서비스를 이용하려면 본인인증이 필요합니다. ‘본인인증 시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 9,
        instruction: "이름을 입력하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "주민등록번호 13자리를 숫자만 입력하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "휴대폰 번호 11자리를 숫자만 입력하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "‘전체동의’를 눌러주세요."
    },
    {
        page: 13,
        instruction: "‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 14,
        instruction: "인증번호 입력란에 ‘123456’을 입력하고 ‘다음’버튼을 눌러주세요"
    },
    {
        page: 15,
        instruction: "모바일 신분증 앱에서 사용 할 비밀번호 6자리를 입력해주세요"
    },
    {
        page: 16,
        instruction: "확인을 위해 입력한 비밀번호 6자리를 한번 더 입력해주세요."
    },
    {
        page: 17,
        instruction: "생체인증을 사용하면 휴대폰에 등록된 지문 등으로 간편하게 인증이 가능합니다. 실습에서는 ‘다음에’ 버튼을 눌러주세요."
    },
    {
        page: 18,
        instruction: "인증수단으로 비밀번호 등록이 완료되었습니다. ‘다음’버튼을 눌러주세요."
    },
    {
        page: 19,
        instruction: "모바일 신분증 앱 설치 완료! 발급 방법에는 두가지가 있습니다. 확인을 위해 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 20,
        instruction: "‘운전면허시험장 발급?’ 버튼을 눌러주세요."
    },
    {
        page: 21,
        instruction: "‘확인’ 버튼을 누르면 실습이 완료됩니다."
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