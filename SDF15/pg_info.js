var total_page = 19;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {
        page: 18,
        correctAnswer: "pg_18_answer"
    },
    {
        page: 19,
        correctAnswer: "pg_19_answer"
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
    {
        page: 8,
        inputableAnswer: "김서울"
    },
    {},
    {},
    {},
    {
        page: 12,
        inputableAnswer: "123456"
    },
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
        instruction: "페이지가 자동으로 전환되도록 기다려주세요."
    },
    {
        page: 2,
        instruction: "앱 접근 권한을 확인하고 ‘확인’ 버튼을 눌러주세요. 필수 접근 허용 항목은 서비스 이용을 위해 동의가 필요합니다."
    },
    {
        page: 3,
        instruction: "회원가입과 로그인을 한 번에 진행하는 '본인인증으로 로그인' 버튼을 눌러 주세요"
    },
    {
        page: 4,
        instruction: "본인인증을 진행합니다. 실습에서는 SK텔레콤을 선택해 주세요."
    },
    {
        page: 5,
        instruction: "본인 확인을 위한 필수 사항에 '전체동의'를 눌러 주세요"
    },
    {
        page: 6,
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 7,
        instruction: "실습에서는 패스 앱이 아닌 문자메시지로 본인 인증을 진행하겠습니다. '문자로 인증하기' 버튼을 눌러 주세요."
    },
    {
        page: 8,
        instruction: "이름 입력란에 ‘김서울’을 입력해주세요."
    },
    {
        page: 9,
        instruction: "주민등록번호 앞 숫자 여섯 자리를 입력해 주세요."
    },
    {
        page: 10,
        instruction: "주민번호 뒷자리의 제일 첫번째 숫자를 입력해주세요."
    },
    {
        page: 11,
        instruction: "휴대폰번호 11자리를 숫자만 입력 후 ‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "인증번호 입력란에 ‘123456’을 입력하고 ‘확인’버튼을 눌러주세요."
    },
    {
        page: 13,
        instruction: "서비스 이용을 위한 필수 약관 동의를 위해 ‘네, 이동할게요’ 버튼을 눌러 주세요."
    },
    {
        page: 14,
        instruction: "전체 동의를 눌러주세요."
    },
    {
        page: 15,
        instruction: "선택 항목은 동의하지 않아도 서비스 이용에 제한이 없습니다. 확인하고 다음 버튼을 눌러주세요."
    },
    {
        page: 16,
        instruction: "마케팅 정보 수신 동의 내용을 확인하고 동의 여부를 선택해 주세요."
    },
    {
        page: 17,
        instruction: "티머니GO 가입이 완료되었습니다. ‘티머니GO 시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 18,
        instruction: "티머니GO 메인 화면입니다. 네비게이션바의 ‘다음’ 버튼을 누르면 실습이 완료됩니다."
    },
    {
        page: 19,
        instruction: "완료"
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

//const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_15 = document.querySelector('.cursor_pos_15');
const cursor_pos_17 = document.querySelector('.cursor_pos_17');

//const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_15 = document.querySelector('.cursor_wrap_15');
const cursor_wrap_17 = document.querySelector('.cursor_wrap_17');


// cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_15.style.zIndex = "100";
cursor_wrap_17.style.zIndex = "100";


const { createPopper } = Popper;
// createPopper(cursor_pos_1, cursor_wrap_1, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [0,0],
//             },
//         },
//     ],
// });
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
                offset: [10,250],
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
                offset: [150,10],
            },
        },
    ],
});
createPopper(cursor_pos_15, cursor_wrap_15, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [540,230],
            },
        },
    ],
});
createPopper(cursor_pos_17, cursor_wrap_17, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [550,250],
            },
        },
    ],
});




$(document).on("click", '#start-btn', function () {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
});

$(document).on("click", "#prev_btn", function () {
    console.log('이전 버튼 누름');
    console.log("1번째",page_num);
    if (page_num === 2) {
        console.log("2번째",page_num);
        $( document ).ready(function() {
            console.log("3번째",page_num);
            setTimeout(function () {
                console.log("4번째",page_num);
                if (page_num === 1) {
                    console.log("5번째",page_num);
                    next();
                    console.log("next 이후 ",page_num);
                    console.log("-------------------------------");
                }
            }, 800);
          });  
    }
});

// $(document).on("click", "#hint_btn", function () {
//     if (page_num === 2) {
//         $('.icon_chng').css('backgroundColor', '#aeaeae');
//         $('.icon_chng').css('border', '2px solid #aeaeae');
//         $(document).on("click", "#hint_btn", function () {
//             $('.icon_chng').css('backgroundColor', '#D7F1EE');
//             $('.icon_chng').css('border', '2px solid #e0e0e0');
//         });
//     }
// });
