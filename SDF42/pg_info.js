var total_page = 8;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];

const inputAnswer = [
    {},
    {},
    {},
    {},
    {
        page: 4,
        inputableAnswer: "123456-789-10"
    },
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
        instruction: "계좌 조회를 위해 ‘연결한 계좌’를 눌러주세요"
    },
    {
        page: 2,
        instruction: "등록된 전체 계좌 목록을 확인할 수 있습니다. 계좌 등록을 위해 ‘계좌 추가하기’를 눌러주세요"
    },
    {
        page: 3,
        instruction: "추가할 계좌의 은행을 선택해 주세요."
    },
    {
        page: 4,
        instruction: "계좌번호 ‘123456-789-10’를 입력 후 ‘다음’ 버튼을 클릭하세요."
    },
    {
        page: 5,
        instruction: "계좌 비밀번호 4자리 입력 후 ‘다음’ 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "출금이체 동의를 위해 ‘동의하기’ 버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "계좌 추가가 완료되었습니다. 추가된 계좌 정보를 확인하고 화면을 누르면 실습이 완료됩니다."
    },
    {
        page: 8,
        instruction: "완료"
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
// const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
// const cursor_pos_7 = document.querySelector('.cursor_pos_7');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
// const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');



cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
// cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
// cursor_wrap_7.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
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
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,150],
            },
        },
    ],
});
createPopper(cursor_pos_4, cursor_wrap_4, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [280,50],
            },
        },
    ],
});
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [280,50],
            },
        },
    ],
});

createPopper(cursor_pos_6, cursor_wrap_6, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [270,30],
            },
        },
    ],
});
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
// createPopper(cursor_pos_7, cursor_wrap_7, {
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