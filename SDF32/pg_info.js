var total_page = 19;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];

const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "카카오톡 선물하기는 카카오톡에서 시작합니다. 우측 하단의 ‘···’버튼을 눌러주세요."
    },
    {
        page: 2,
        instruction: "‘선물하기’ 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "페이지가 자동으로 전환되도록 기다려주세요."
    },
    {
        page: 4,
        instruction: "‘전체동의’를 눌러주세요."
    },
    {
        page: 5,
        instruction: "선택 항목은 동의하지 않아도 서비스 이용이 가능합니다. 선택 항목은 체크를 해제해 주세요."
    },
    {
        page: 6,
        instruction: "이제 필수 항목만 선택되었습니다. ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "‘메인으로 이동하기’ 버튼을 눌러주세요."
    },
    {
        page: 8,
        instruction: "‘생일’ 버튼을 눌러주세요."
    },
    {
        page: 9,
        instruction: "수제 케이크를 찾아 눌러주세요."
    },
    {
        page: 10,
        instruction: "‘선물하기’ 버튼을 눌러주세요."
    },
    {
        page: 11,
        instruction: "선물 할 상대로, 친구 목록 중 ‘월디’를 찾아서 눌러주세요."
    },
    {
        page: 12,
        instruction: "‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 13,
        instruction: "선물과 함께 보낼 메시지를 입력하고, 결제를 위해 빠른 결제탭에서 ‘카드입력’을 눌러주세요"
    },
    {
        page: 14,
        instruction: "필수 항목만 전체 동의 체크해 주세요. 선택 항목은 동의하지 않아도 서비스 이용이 가능합니다."
    },
    {
        page: 15,
        instruction: "‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 16,
        instruction: "휴대폰으로 카드를 촬영하여 카드 정보를 자동 입력하겠습니다. 화면의 신용카드를 눌러주세요."
    },
    {
        page: 17,
        instruction: "카드 비밀번호 4자리를 입력하고 ‘완료’ 버튼을 눌러주세요."
    },
    {
        page: 18,
        instruction: "카드 등록 내용을 확인하고 ‘29,900원 결제하기’ 버튼을 눌러주세요."
    },
    {
        page: 19,
        instruction: "완료"
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_10 = document.querySelector('.cursor_pos_10');
const cursor_pos_12 = document.querySelector('.cursor_pos_12');
const cursor_pos_16 = document.querySelector('.cursor_pos_16');
const cursor_pos_18 = document.querySelector('.cursor_pos_18');


const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');
const cursor_wrap_12 = document.querySelector('.cursor_wrap_12');
const cursor_wrap_16 = document.querySelector('.cursor_wrap_16');
const cursor_wrap_18 = document.querySelector('.cursor_wrap_18');



cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_10.style.zIndex = "100";
cursor_wrap_12.style.zIndex = "100";
cursor_wrap_16.style.zIndex = "100";
cursor_wrap_18.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [-50,-10],
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
                offset: [0,30],
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
                offset: [280,10],
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
                offset: [130,10],
            },
        },
    ],
});
createPopper(cursor_pos_12, cursor_wrap_12, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [450,10],
            },
        },
    ],
});
createPopper(cursor_pos_16, cursor_wrap_16, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [200,200],
            },
        },
    ],
});
createPopper(cursor_pos_18, cursor_wrap_18, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [400,50],
            },
        },
    ],
});



// var myPgNum = $(".active").attr('id');// active 되어있는 페이지 id 값
// var real_pg = myPgNum.slice(1); // id값 앞에 붙은 p 떼어내기


$(document).on("click", '.pg_2_answer', function () {
    if (page_num === 3) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 2) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 4) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 3) {
                    next();
                }
            }, 800);
          });  
    }
});