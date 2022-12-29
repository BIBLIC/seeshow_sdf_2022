var total_page = 11;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {},
    {},
    {},
    {
        page: 4,
        inputableAnswer: "남부터미널"
    },
    {},
    {},
    {
        page: 7,
        inputableAnswer: "강남세브란스"
    },
    {},
    {},
    {},
    {},
];

const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "노란 택시 버튼을 눌러 주세요."
    },
    {
        page: 2,
        instruction: "'예약' 버튼을 눌러주세요"
    },
    {
        page: 3,
        instruction: "출발 시간을 확인하고 '선택완료' 버튼을 눌러주세요."
    },
    {
        page: 4,
        instruction: "출발지 검색란에 '남부터미널'을 입력하고 검색해 주세요."
    },
    {
        page: 5,
        instruction: "장소 결과 목록에서 '남부터미널'을 확인하고 '출발' 버튼을 눌러주세요"
    },
    {
        page: 6,
        instruction: "'출발지로 설정' 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "도착지 검색란에 '강남세브란스'를 입력하고 검색해 주세요."
    },
    {
        page: 8,
        instruction: "장소 결과 목록에서 '강남세브란스'를 확인하고 '도착' 버튼을 눌러주세요"
    },
    {
        page: 9,
        instruction: "출발지와 도착지를 확인하고 '승합차 예약' 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "예약 정보를 확인하고 '예약하기' 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "예약이 접수되었습니다. 확인을 누르면 실습이 완료됩니다."
    },
    {
        page: 12,
        instruction: "완료되었습니다."
    },
    
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_10 = document.querySelector('.cursor_pos_10');
const cursor_pos_11 = document.querySelector('.cursor_pos_11');



const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');
const cursor_wrap_11 = document.querySelector('.cursor_wrap_11');




cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_10.style.zIndex = "100";
cursor_wrap_11.style.zIndex = "100";




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
                offset: [0,60],
            },
        },
    ],
});
createPopper(cursor_pos_3, cursor_wrap_3, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [120,3],
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
                offset: [240,8],
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
                offset: [180,10],
            },
        },
    ],
});
createPopper(cursor_pos_11, cursor_wrap_11, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [240,8],
            },
        },
    ],
});