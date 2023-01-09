var total_page = 9;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

$('#date-picker').datepicker({
              
    language: "ko",
})


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
    {
        page: 6,
        inputableAnswer: "36"  
    },
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
        instruction: "예스키는 금융결제원에서 제공하는 금융인증서 발급 및 관리를 위한 서비스입니다."
    },
    {
        page: 2,
        instruction: "화면에서 금융인증서 ‘관리하기’를 찾아서 눌러주세요."
    },
    {
        page: 3,
        instruction: "인증서 유형을 개인으로 선택해 주세요."
    },
    {
        page: 4,
        instruction: "인증을 위해 이름, 휴대폰번호, 생년월일을 모두 입력하고, ‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "문자가 오면 화면에 보이는 확인코드 ‘36’을 받은 문자에 답장해 주세요."
    },
    {
        page: 6,
        instruction: "숫자 ‘36’을 입력하고 문자 보내기 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "페이지가 자동으로 넘어갑니다."
    },
    {
        page: 8,
        instruction: "금융 인증서 조회가 완료되었습니다. 금융 인증서를 누르면 실습이 완료됩니다."
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_8 = document.querySelector('.cursor_pos_8');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_8.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [10,10],
            },
        },
    ],
});
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,0],
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
                offset: [0,80],
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
                offset: [100,0],
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
                offset: [10,10],
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
                offset: [220,250],
            },
        },
    ],
});



$(document).on("click", '.pg_4_answer', function () {
    if (page_num === 5) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 5) {
                    next();
                }
            }, 8000);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 4) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 5) {
                    next();
                }
            }, 8000);
          });  
    }
});


$(document).on("click", "#prev_btn", function () {
    if (page_num === 6) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 5) {
                    next();
                }
            }, 8000);
          });  
    }
});

//  =====================================================

$(document).on("click", '.pg_6_answer', function () {
    if (page_num === 7) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 7) {
                    next();
                }
            }, 1500);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 6) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 7) {
                    next();
                }
            }, 1500);
          });  
    }
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 8) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 7) {
                    next();
                }
            }, 1500);
          });  
    }
});