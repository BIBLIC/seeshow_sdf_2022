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
// 넘버링 주의

// {
//     page: 3,
//     inputableAnswer: "서울디지털재단"
// },
// 위 형식 맞춰서 ""안에 답 넣으면 됨
// 답에는 공백이 없어야 함
const inputAnswer = [
    {},
    {},
    {
        page: 2,
        inputableAnswer: "인사동"
    },
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
    {
        page: 10,
        inputableAnswer: "자전거"
    },
    {},
    {},
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 2,
        instruction: "'인사동'을 입력하고 검색해 주세요."
    },
    {
        page: 3,
        instruction: "검색 결과에서 '서울 종로구 인사동'을 클릭하세요."
    },
    {
        page: 4,
        instruction: "'필수 항목'만 선택해 주세요. '선택 항목'은 동의하지 않아도 서비스 이용이 가능합니다."
    },
    {
        page: 5,
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "'-'없이 휴대폰 번호 11자리를 입력하고 '인증문자 받기' 버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "인증번호 입력란에 인증번호 '123456'을 입력하세요. "
    },
    {
        page: 8,
        instruction: "'나의 당근'탭을 클릭하세요.'"
    },
    {
        page: 9,
        instruction: "'알림 키워드 설정' 메뉴를 찾아서 눌러주세요."
    },
    {
        page: 10,
        instruction: "키워드 입력란에 '자전거'를 입력하고 '등록'을 눌러주세요."
    },
    {
        page: 11,
        instruction: "등록된 키워드를 확인하고 하단 바의 '다음'버튼을 클릭하세요."
    },
    {
        page: 12,
        instruction: "마지막 페이지"
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

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
// cursor_wrap_3.style.zIndex = "100";
// cursor_wrap_4.style.zIndex = "100";
// cursor_wrap_5.style.zIndex = "100";
// cursor_wrap_6.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
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
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-35,100],
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