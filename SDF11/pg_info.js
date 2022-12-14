var total_page = 15;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];

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
    {
        page: 13,
        inputableAnswer: "123456"},
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
        instruction: "‘확인’ 버튼을 클릭하세요 선택 접근 권한은 허용하지 않아도 서비스 이용이 가능합니다."
    },
    {
        page: 2,
        instruction: "기기의 위치정보 액세스를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 3,
        instruction: "기기의 사진, 미디어, 파일 액세스를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 4,
        instruction: "전화 걸기 및 관리를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 5,
        instruction: "‘카카오 계정으로 시작하기’ 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "‘허용하기’ 버튼을 클릭하세요. 권한을 허용해야만 카카오 계정으로 택시앱 이용이 가능합니다."
    },
    {
        page: 7,
        instruction: "전화 걸기 및 관리를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 8,
        instruction: "기기의 사진, 미디어, 파일 액세스를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 9,
        instruction: "기기의 위치정보 액세스를 허용하기 위해 ‘허용’ 버튼을 클릭하세요."
    },
    {
        page: 10,
        instruction: "약관 내용 확인 후 ‘전체 동의하기’영역을 클릭하세요."
    },
    {
        page: 11,
        instruction: "‘동의하고 계속하기’ 버튼을 클릭하세요."
    },
    {
        page: 12,
        instruction: "휴대폰 번호 11자리를 숫자만 입력하고 ‘보내기’ 버튼을 클릭하세요."
    },
    {
        page: 13,
        instruction: "인증번호 ‘123456’을 입력하고 ‘변경하기’ 버튼을 클릭하세요."
    },
    {
        page: 14,
        instruction: "가입이 완료되었습니다. 가입 완료 버튼을 눌러주세요."
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_11 = document.querySelector('.cursor_pos_11');
const cursor_pos_13 = document.querySelector('.cursor_pos_13');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_11 = document.querySelector('.cursor_wrap_11');
const cursor_wrap_13 = document.querySelector('.cursor_wrap_13');



cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_11.style.zIndex = "100";
cursor_wrap_13.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [10,180],
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
                offset: [-50,0],
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
                offset: [-50,0],
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
                offset: [-50,0],
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
                offset: [270,8],
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
                offset: [220,10],
            },
        },
    ],
});

createPopper(cursor_pos_13, cursor_wrap_13, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [220,210],
            },
        },
    ],
});