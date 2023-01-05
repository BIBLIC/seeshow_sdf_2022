var total_page = 16;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {},
    {},
    {},
    {}
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "카페 앱으로 미리 주문하고 기다림 없이 매장에서 바로 찾는 스마트오더를 실습하겠습니다. 카페 앱 첫 화면에서 주문(Order)을 눌러주세요"
    },
    {
        page: 2,
        instruction: "실습에서는 하트파이를 주문하겠습니다. 분류에서 음료가 아닌 ‘푸드’를 찾아서 눌러주세요."
    },
    {
        page: 3,
        instruction: "하트파이가 있는 ‘브레드’ 분류를 선택해 주세요."
    },
    {
        page: 4,
        instruction: "화면에서 ‘하트파이’를 찾아서 선택해 주세요."
    },
    {
        page: 5,
        instruction: "하트파이의 가격, 제품 정보 등을 확인하고 ‘주문하기’ 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "주문할 매장을 선택해 주세요. 꼭! 선택한 매장으로 하트파이를 찾으러 가야합니다. ‘매장 선택하기’ 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "매장 정보를 잘 확인하고 선택해 주세요. 실습에서는 ‘광화문’ 지점을 눌러주세요."
    },
    {
        page: 8,
        instruction: "선택한 지점으로 방문하여 하트파이를 수령하겠습니다. ‘매장 내 직접 수령’ 버튼을 눌러주세요"
    },
    {
        page: 9,
        instruction: "주문 정보를 확인하고, ‘결제하기’버튼을 눌러주세요"
    },
    {
        page: 10,
        instruction: "다시 한번 주문 지점과 내용을 확인하고 포장 옵션에서 ‘전체 포장’을 찾아서 눌러주세요."
    },
    {
        page: 11,
        instruction: "화면에서 '일회용품 받지 않음' 버튼을 선택하고 ‘결제 및 주문하기’ 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "결제 진행을 위해 필수 정보에 모두 동의합니다. ‘전체 동의’를 체크해 주세요."
    },
    {
        page: 13,
        instruction: "결제수단을 선택해 눌러주세요."
    },
    {
        page: 14,
        instruction: "내용을 확인하고, ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 15,
        instruction: "주문이 완료되었습니다. 화면의 하트파이를 누르면 실습이 완료됩니다."
    },
    {
        page: 16,
        instruction: "완료"
    }
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_8 = document.querySelector('.cursor_pos_8');
const cursor_pos_9 = document.querySelector('.cursor_pos_9');
const cursor_pos_14 = document.querySelector('.cursor_pos_14');


const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');
const cursor_wrap_9 = document.querySelector('.cursor_wrap_9');
const cursor_wrap_14 = document.querySelector('.cursor_wrap_14');



cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_8.style.zIndex = "100";
cursor_wrap_9.style.zIndex = "100";
cursor_wrap_14.style.zIndex = "100";


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
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [60,10],
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
                offset: [100,10],
            },
        },
    ],
});
createPopper(cursor_pos_8, cursor_wrap_8, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [120,0],
            },
        },
    ],
});
createPopper(cursor_pos_9, cursor_wrap_9, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [220,0],
            },
        },
    ],
});
createPopper(cursor_pos_14, cursor_wrap_14, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [70,-40],
            },
        },
    ],
});