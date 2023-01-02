var total_page = 9;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’ 버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "‘신청ㆍ제출’ 탭을 눌러주세요."
    },
    {
        page: 2,
        instruction: "스크롤을 내려 ‘세무서류신청-공통분야’를 눌러주세요."
    },
    {
        page: 3,
        instruction: "‘전자고지 신청/해지’를 눌러주세요."
    },
    {
        page: 4,
        instruction: "손택스에 등록된 정보를 확인하고 하단의 ‘다음’ 버튼을 눌러주세요."
    },
    {
        page: 5,
        instruction: "전자송달 신청 이용 안내를 모두 확인하고 화면하단의 ‘위의 내용을 확인함’을 체크해 주세요."
    },
    {
        page: 6,
        instruction: "‘전자송달 신청하기’를 눌러주세요."
    },
    {
        page: 7,
        instruction: "주의사항을 확인하고 ‘확인’을 눌러주세요"
    },
    {
        page: 8,
        instruction: "확인을 누르면 전자송달신청과 실습이 완료됩니다."
    },
    {
        page: 9,
        instruction: "완료"
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_pos_7 = document.querySelector('.cursor_pos_7');
const cursor_pos_8 = document.querySelector('.cursor_pos_8');



const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');
const cursor_wrap_7 = document.querySelector('.cursor_wrap_7');
const cursor_wrap_8 = document.querySelector('.cursor_wrap_8');



cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_6.style.zIndex = "100";
cursor_wrap_7.style.zIndex = "100";
cursor_wrap_8.style.zIndex = "100";




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
// createPopper(cursor_pos_2, cursor_wrap_2, {
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

createPopper(cursor_pos_4, cursor_wrap_4, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [270,10],
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
                offset: [300,10],
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
                offset: [200,0],
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
                offset: [230,0],
            },
        },
    ],
});

//*******************************************************************************
//**************************+    힌트 버튼   +*********************************** 

$('#hint_btn').click(function () {
    var myPgNum = $(".active").attr('id');
    var real_pg = myPgNum.slice(1);
    if ((real_pg == 2)){
        $(".menu").removeClass("box-shadow");
    } 
})