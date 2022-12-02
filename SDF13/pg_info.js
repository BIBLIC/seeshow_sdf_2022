var total_page = 8;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 


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
        correctAnswer: "pg_2_answer",
    },
    {
        page: 3,
        correctAnswer: "pg_3_answer"
    },
    {
        page: 4,
        correctAnswer: "pg_4_answer",
    },
    {
        page: 5,
        correctAnswer: "pg_5_answer",
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer",
    },
    {
        page: 7,
        correctAnswer: "pg_7_answer",
    },
    {
        page: 8,
        correctAnswer: "pg_8_answer"
    },
];


const inputAnswer = [
    {},
    {},
    {},
    {},
    {},
    {서울디지털재단},
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
        instruction: "'확인' 버튼을 클릭하세요"
    },
    {
        page: 2,
        instruction: "기기의 위치정보 액세스를 허용하기 위해 '허용' 버튼을 클릭하세요."
    },
    {
        page: 3,
        instruction: "기기의 사진, 미디어, 파일 액세스를 허용하기 위해 '허용' 버튼을 클릭하세요."
    },
    {
        page: 4,
        instruction: "전화 걸기 및 관리를 허용하기 위해 '허용' 버튼을 클릭하세요."
    },
    {
        page: 5,
        instruction: "'카카오 계정으로 시작하기' 버튼을 클릭하세요."
    },
    {
        page: 6,
        instruction: "'허용하기' 버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "전화 걸기 및 관리를 허용하기 위해 '허용' 버튼을 클릭하세요."
    },
    {
        page: 8,
        instruction: "기기의 사진, 미디어, 파일 액세스를 허용하기 위해 '허용' 버튼을 클릭하세요."
    },
];



//*******************************************************************************
//**************************+    커서   +*********************************** 

// const cursor_pos_1 = document.querySelector('.cursor_pos_1');
// const cursor_pos_2 = document.querySelector('.cursor_pos_2');
// // const cursor_pos_3 = document.querySelector('.cursor_pos_3');
// // const cursor_pos_4 = document.querySelector('.cursor_pos_4');
// // const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// // const cursor_pos_6 = document.querySelector('.cursor_pos_6');

// const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
// const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
// // const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
// // const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// // const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// // const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


// cursor_wrap_1.style.zIndex = "100";
// cursor_wrap_2.style.zIndex = "100";
// // cursor_wrap_3.style.zIndex = "100";
// // cursor_wrap_4.style.zIndex = "100";
// // cursor_wrap_5.style.zIndex = "100";
// // cursor_wrap_6.style.zIndex = "100";


// const { createPopper } = Popper;
// createPopper(cursor_pos_1, cursor_wrap_1, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [10,180],
//             },
//         },
//     ],
// });
// createPopper(cursor_pos_2, cursor_wrap_2, {
//     placement: 'right',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [-50,0],
//             },
//         },
//     ],
// });
// // createPopper(cursor_pos_3, cursor_wrap_3, {
// //     placement: 'right',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [70,80],
// //             },
// //         },
// //     ],
// // });
// // //cursor_wrap_4.style.left="60%";

// // createPopper(cursor_pos_4, cursor_wrap_4, {
// //     placement: 'bottom',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [250,10],
// //             },
// //         },
// //     ],
// // });
// // createPopper(cursor_pos_5, cursor_wrap_5, {
// //     placement: 'right',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [25,200],
// //             },
// //         },
// //     ],
// // });
// // createPopper(cursor_pos_6, cursor_wrap_6, {
// //     placement: 'bottom',
// //     modifiers: [
// //         {
// //             name: 'offset',
// //             options: {
// //                 offset: [250,10],
// //             },
// //         },
// //     ],
// // });