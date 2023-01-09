var total_page = 17;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "티머니GO에서 고속버스 예약을 실습하겠습니다. 티머니GO 메인화면에서 ‘고속ㆍ시외’를 찾아서 눌러주세요."
    },
    {
        page: 2,
        instruction: "상단 검색창, ‘터미널 검색’ 부분을 눌러주세요."
    },
    {
        page: 3,
        instruction: "터미널 목록에서, ‘경부서울’을 찾아서 눌러주세요."
    },
    {
        page: 4,
        instruction: "도착지, ‘속초고속’을 선택해 눌러주세요."
    },
    {
        page: 5,
        instruction: "12월 12일 14시 이후 고속버스를 검색하겠습니다. 달력에서 12일을 선택해 주세요."
    },
    {
        page: 6,
        instruction: "시간 선택에서 14시를 눌러서 선택해 주세요."
    },
    {
        page: 7,
        instruction: "편도 조회 버튼을 눌러서 검색해 주세요."
    },
    {
        page: 8,
        instruction: "검색 결과에서 15시 40분에 출발하는 ‘월디고속’을 찾아서 선택해 주세요."
    },
    {
        page: 9,
        instruction: "좌석 선택 화면입니다. 원하는 자리를 선택할 수 있습니다. 실습에서는 1번 좌석을 선택해 주세요."
    },
    {
        page: 10,
        instruction: "1번 좌석이 선택되었습니다. ‘선택완료’를 눌러주세요."
    },
    {
        page: 11,
        instruction: "서울에서 속초로 가는 고속버스, 1번 좌석 한 장이 예약되었습니다. 결제할 여정의 체크박스를 선택하고 ‘결제하기’ 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "다양한 결제수단이 있습니다. 실습에서는 ‘신용/체크 일반결제’를 선택해 주세요."
    },
    {
        page: 13,
        instruction: "예약 및 결제를 위한 필수 항목에 체크하여 동의하고 ‘결제하기’ 버튼을 눌러주세요."
    },
    {
        page: 14,
        instruction: "휴대폰으로 카드를 촬영하여 카드 정보를 자동 입력하겠습니다. 화면의 신용카드를 눌러주세요."
    },
    {
        page: 15,
        instruction: "불러온 신용카드 정보를 확인하고 ‘결제하기’ 버튼을 눌러주세요."
    },
    {
        page: 16,
        instruction: "예매 및 결제가 완료되고 고속버스 탑승 시 사용 가능한 승차권이 발권되었습니다. 승차권을 누르면 실습이 완료됩니다."
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_7 = document.querySelector('.cursor_pos_7');
const cursor_pos_10 = document.querySelector('.cursor_pos_10');
const cursor_pos_11 = document.querySelector('.cursor_pos_11');
const cursor_pos_11_1 = document.querySelector('.cursor_pos_11_1');
const cursor_pos_13 = document.querySelector('.cursor_pos_13');
const cursor_pos_14 = document.querySelector('.cursor_pos_14');
const cursor_pos_15 = document.querySelector('.cursor_pos_15');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');
const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');
const cursor_wrap_11 = document.querySelector('.cursor_wrap_11');
const cursor_wrap_11_1 = document.querySelector('.cursor_wrap_11_1');
const cursor_wrap_13 = document.querySelector('.cursor_wrap_13');
const cursor_wrap_14 = document.querySelector('.cursor_wrap_14');
const cursor_wrap_15 = document.querySelector('.cursor_wrap_15');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_7.style.zIndex = "100";
cursor_wrap_10.style.zIndex = "100";
cursor_wrap_11.style.zIndex = "100";
cursor_wrap_11_1.style.zIndex = "100";
cursor_wrap_13.style.zIndex = "100";
cursor_wrap_14.style.zIndex = "100";
cursor_wrap_15.style.zIndex = "100";


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
                offset: [0,100],
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
                offset: [10,10],
            },
        },
    ],
});
createPopper(cursor_pos_7, cursor_wrap_7, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [100,-20],
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
                offset: [100,-10],
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
                offset: [0,-10],
            },
        },
    ],
});
createPopper(cursor_pos_11_1, cursor_wrap_11_1, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [150,-70],
            },
        },
    ],
});
// createPopper(cursor_pos_12, cursor_wrap_12, {
//     placement: 'bottom',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [150,-70],
//             },
//         },
//     ],
// });
createPopper(cursor_pos_13, cursor_wrap_13, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [100,-50],
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
                offset: [200,150],
            },
        },
    ],
});
createPopper(cursor_pos_15, cursor_wrap_15, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [300,600],
            },
        },
    ],
});

$(document).on("click", "#hint_btn", function () {
    if (page_num === 11) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 0 + 1;
        $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_11_1").toggleClass('show');
    }

    
});