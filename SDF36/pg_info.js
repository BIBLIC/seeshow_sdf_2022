var total_page = 14;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    {
        page: 7,
        inputableAnswer: "자전거판매"
    },
    {},
    {
        page: 9,
        inputableAnswer: "100000"
    },
    {},
    {},
    {
        page: 12,
        inputableAnswer: "안국역"
    },
    {},
    {},
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "'+' 버튼을 눌러주세요."
    },
    {
        page: 2,
        instruction: "'내 물건 팔기'를 눌러주세요."
    },
    {
        page: 3,
        instruction: "'지금 동네 인증하기' 버튼을 눌러주세요."
    },
    {
        page: 4,
        instruction: "'동네인증 완료하기' 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "카메라 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "자전거 사진을 눌러주세요."
    },
    {
        page: 7,
        instruction: "글 제목 입력란에 '자전거 판매'를 입력해주세요."
    },
    {
        page: 8,
        instruction: "'스포츠/레저'를 클릭해주세요."
    },
    {
        page: 9,
        instruction: "가격 입력란에 '100000'을 숫자로만 입력해주세요."
    },
    {
        page: 10,
        instruction: "게시글 내용을 작성하고 '장소 선택' 부분을 눌러주세요."
    },
    {
        page: 11,
        instruction: "'선택 완료' 버튼을 눌러주세요." 
    },
    {
        page: 12,
        instruction: "입력란에 '안국역'을 입력해주세요."
    },
    {
        page: 13,
        instruction: "오른쪽 상단의 '완료'를 눌러 게시글 작성을 완료해주세요. "
    },
    {
        page: 14,
        instruction: "마지막 페이지"
    },
];


const txt_user_input_fill = document.querySelector('.txt_user_input_fill');
//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
    $('.pg_12_answer').click(function () {
        txt_user_input_fill.innerText = user_input_txt;
    });

    $(document).on("click", "#next_btn", function () {
        txt_user_input_fill.innerText = user_input_txt;
    });




// *******************************************************************************
// **************************+    커서   +*********************************** 

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