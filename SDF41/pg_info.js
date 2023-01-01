var total_page = 13;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];

const inputAnswer = [
    {},
    {
        page: 1,
        inputableAnswer: "김서울"
    },
    {},
    {},
    {},
    {},
    {},
    {
        page: 7,
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
        instruction: "‘시작하기’ 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "이름 입력란에 ‘김서울’을 입력하세요."
    },
    {
        page: 2,
        instruction: "주민등록번호 앞자리 여섯글자를 주민번호 입력란의 첫 번째 칸에 입력하세요."
    },
    {
        page: 3,
        instruction: "주민등록번호 뒷자리 일곱글자를 주민번호 입력란의 두 번째 칸에 입력하세요."
    },
    {
        page: 4,
        instruction: "휴대폰 통신사 선택지 중 ‘SKT’를 선택하세요."
    },
    {
        page: 5,
        instruction: "휴대폰 번호 11자리를 휴대폰 번호 입력란에 숫자만 입력하고 ‘본인 인증하기’ 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "약관 내용 확인 후 ‘동의하기’ 버튼을 클릭하세요. 선택항목은 동의하지 않아도 서비스 이용이 가능합니다."
    },
    {
        page: 7,
        instruction: "인증번호 입력란에 ‘123456’을 입력하세요."
    },
    {
        page: 8,
        instruction: "전화 걸기 권한을 허용하기 위해 ‘허용’을 클릭하세요."
    },
    {
        page: 9,
        instruction: "‘인증 전화 받기’ 버튼을 클릭하세요."
    },
    {
        page: 10,
        instruction: "비밀번호를 설정하기 위해 먼저 숫자 네자리를 화면 상의 키패드를 이용해 클릭하세요."
    },
    {
        page: 11,
        instruction: "화면 상의 키패드를 이용해 알파벳 한 글자를 입력하세요."
    },
    {
        page: 12,
        instruction: "가입이 완료되엇습니다. 화면을 누르면 실습이 완료됩니다."
    },
];



// *******************************************************************************
// **************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
// const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// const cursor_pos_6 = document.querySelector('.cursor_pos_6');
// const cursor_pos_7 = document.querySelector('.cursor_pos_7');
// const cursor_pos_8 = document.querySelector('.cursor_pos_8');
// const cursor_pos_9 = document.querySelector('.cursor_pos_9');
// const cursor_pos_10 = document.querySelector('.cursor_pos_10');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
// const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');
// const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');
// const cursor_wrap_9 = document.querySelector('.cursor_wrap_9');
// const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
// cursor_wrap_3.style.zIndex = "100";
// cursor_wrap_4.style.zIndex = "100";
// cursor_wrap_5.style.zIndex = "100";
// cursor_wrap_6.style.zIndex = "100";
// cursor_wrap_7.style.zIndex = "100";
// cursor_wrap_8.style.zIndex = "100";
// cursor_wrap_9.style.zIndex = "100";
// cursor_wrap_10.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'left',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,100],
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
                offset: [0,100],
            },
        },
    ],
});
// createPopper(cursor_pos_3, cursor_wrap_3, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [70,80],
//             },
//         },
//     ],
// });
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