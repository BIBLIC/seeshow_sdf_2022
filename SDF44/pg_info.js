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
        instruction: "‘조회/납부’ 영역을 눌러주세요."
    },
    {
        page: 2,
        instruction: "‘전기요금’ 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "숫자 10자리 입력 후 ‘납부’버튼을 눌러주세요."
    },
    {
        page: 4,
        instruction: "납부금액 확인 후 좌측 체크박스를 눌러주세요."
    },
    {
        page: 5,
        instruction: "‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "‘은행선택’ 영역을 눌러주세요."
    },
    {
        page: 7,
        instruction: "거래 은행을 선택해 주세요."
    },
    {
        page: 8,
        instruction: "계좌번호 14자리를 숫자만 입력해 주세요."
    },
    {
        page: 9,
        instruction: "4자리 숫자입력 후 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 10,
        instruction: "전기요금 납부 내용을 확인하고 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "‘확인’ 버튼을 눌러주세요."
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_8 = document.querySelector('.cursor_pos_8');
const cursor_pos_9 = document.querySelector('.cursor_pos_9');
const cursor_pos_10 = document.querySelector('.cursor_pos_10');
const cursor_pos_11 = document.querySelector('.cursor_pos_11');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');
const cursor_wrap_9 = document.querySelector('.cursor_wrap_9');
const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');
const cursor_wrap_11 = document.querySelector('.cursor_wrap_11');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_8.style.zIndex = "100";
cursor_wrap_9.style.zIndex = "100";
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
                offset: [0,-30],
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
                offset: [250,20],
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
                offset: [280,0],
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
                offset: [100,10],
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
                offset: [100,5],
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
                offset: [10,10],
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
                offset: [20,10],
            },
        },
    ],
});


$(document).on("click", "#hint_btn", function () {
    if (page_num === 8) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 0 + 1;
        $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_8_1").toggleClass('show');
    }
});
