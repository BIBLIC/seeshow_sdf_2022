var total_page = 14;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`./assets/audios/${j}.mp3`);
    audioArray.push(audio);
}

$('#date-picker').datepicker({
              
    language: "ko",

})

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
    
    
];

const inputAnswer = [
    {},
    {},
    {},
    {},
    {
        page: 4,
        inputableAnswer: ""
    },
    {
        page: 5,
        inputableAnswer: "감기"
    },
    {},
    {
        page: 7,
        inputableAnswer: "2022.10.27"
    },
    {},
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
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "'병원비 돌려받기'를 클릭하세요."
    },
    {
        page: 2,
        instruction: "'내 병원비 돌려받기' 버튼을 클릭하세요."
    },
    {
        page: 3,
        instruction: "서류를 받았다면 '받았어요' 버튼을 클릭하세요."
    },
    {
        page: 4,
        instruction: "'삼성해상화재보험'을 클릭하세요."
    },
    {
        page: 5,
        instruction: "주민번호를 입력 후 '다음' 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "병원에 방문한 이유를 간단하게 작성 후 '다음'버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "날짜를 입력한 후 '다음'버튼을 클릭하세요."
    },
    {
        page: 8,
        instruction: "병원에서 받은 서류 사진을 올리기 위해 '사진 첨부' 버튼을 클릭하세요."
    },
    {
        page: 9,
        instruction: "'사진첩에서 가져오기' 버튼을 클릭하세요."
    },
    {
        page: 10,
        instruction: "갤러리에서 서류를 촬영한 사진을 클릭하세요."
    },
    {
        page: 11,
        instruction: "선택된 사진을 확인 후 '다음' 버튼을 클릭하세요."
    },
    {
        page: 12,
        instruction: "'입출금 통장'을 클릭하세요."
    },
    {
        page: 13,
        instruction: "신청 정보를 확인 후 '버튼'을 클릭하세요."
    },
    {
        page: 14,
        instruction: ""
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
// const cursor_pos_7 = document.querySelector('.cursor_pos_7');
// const cursor_pos_8 = document.querySelector('.cursor_pos_8');
// const cursor_pos_9 = document.querySelector('.cursor_pos_9');
// const cursor_pos_10 = document.querySelector('.cursor_pos_10');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
// const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');
// const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');
// const cursor_wrap_9 = document.querySelector('.cursor_wrap_9');
// const cursor_wrap_10 = document.querySelector('.cursor_wrap_10');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
// cursor_wrap_3.style.zIndex = "100";
// cursor_wrap_4.style.zIndex = "100";
// cursor_wrap_5.style.zIndex = "100";
// cursor_wrap_6.style.zIndex = "100";
// cursor_wrap_7.style.zIndex = "100";
// cursor_wrap_8.style.zIndex = "100";
// cursor_wrap_9.style.zIndex = "100";
// cursor_wrap_10.style.zIndex = "100";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
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
createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [55,100],
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