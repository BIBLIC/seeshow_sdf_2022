var total_page = 12;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "실물 주민등록증과 동일한 신분 확인 효력을 갖는 '주민등록증 모바일 확인 서비스'를 패스앱에서 실습해보겠습니다. '모바일 신분증' 메뉴를 눌러주세요,"
    },
    {
        page: 2,
        instruction: "주민등록증을 선택해주세요."
    },
    {
        page: 3,
        instruction: "앱 사용을 위한 접근 권한 허용입니다. '앱 사용 중에만 허용'을 선택해주세요,"
    },
    {
        page: 4,
        instruction: "'서비스 필수항목 모두 동의'를 눌러서 필수항목만 동의해주세요."
    },
    {
        page: 5,
        instruction: "서비스 필수 항목만 모두 동의하였습니다 확인 후 '가입' 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "패스앱에서 사용하는 비밀번호 여섯자리를 입력해 주세요."
    },
    {
        page: 7,
        instruction: "주민등록증 모바일 확인 서비스 등록을 위해 '등록'버튼을 눌러주세요,"
    },
    {
        page: 8,
        instruction: "주민등록증 정보 입력입니다 이름, 주민등록번호 그리고 주민등록증의 발급일을 모두 입력하고 ’등록’ 버튼을 눌러주세요,"
    },
    {
        page: 9,
        instruction: "주민등록증이 패스앱 모바일 신분증에 등록되었습니다. 이름과 생년월일, 주소 앞부분 그리고 QR코드를 확인할 수 있습니다. '상세정보 표시'를 눌러주세요."
    },
    {
        page: 10,
        instruction: "상세정보를 표시하면 주민번호 뒤 첫자리와 주민등록번호 발급일까지 확인할 수 있습니다. 마지막으로 모든 정보를 표시해보겠습니다. 스위치 모양의 토글을 눌러주세요."
    },
    {
        page: 11,
        instruction: "모든 정보가 숨김없이 표시됩니다. 'QR정보 표시' 버튼을 누르면 실습이 완료됩니다."
    },
    {
        page: 12,
        instruction: "완료"
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
                offset: [10,50],
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
                offset: [100,100],
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

const txt_user_input_fill = document.querySelector('.txt_user_input_fill');
const txt_user_input_fill2 = document.querySelector('.txt_user_input_fill2');
//사용자가 입력한 내용 출력하기
// $('.pg_9_answer').click(function () {
//     txt_user_input_fill.innerText = user_input_txt_multi;
// });

$(document).on("click", "#next_btn", function () {
    if (user_input_txt_multi != ''){
        txt_user_input_fill.innerText = user_input_txt_multi;
        txt_user_input_fill2.innerText = user_input_txt_multi2;
    }
});



$(document).on("click", '.pg_9_answer', function () {
        txt_user_input_fill.innerText = user_input_txt_multi;  
        txt_user_input_fill2.innerText = user_input_txt_multi2;
});

$(document).on("click", '.pg_10_answer', function () {
        txt_user_input_fill2.innerText = user_input_txt_multi;  
        txt_user_input_fill2.innerText = user_input_txt_multi2;
});
