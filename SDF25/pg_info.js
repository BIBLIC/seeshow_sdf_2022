var total_page = 6;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
        correctAnswer: "pg_6_answer"
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
];


// -----------------------------------------------------------------------------------------------------------------------
const modalCont = [
    {
        page: 0,
        instruction: "‘시작하기’버튼을 눌러주세요."
    },
    {
        page: 1,
        instruction: "국민비서에서 알림서비스 신청을 실습하겠습니다. 정부24 메인화면에서 ‘국민비서 구삐’ 메뉴를 찾아서 눌러주세요."
    },
    {
        page: 2,
        instruction: "국민비서 서비스 이용 동의 화면입니다. 필수 항목에만 동의를 체크하고 화면 제일 아래 ‘확인’ 버튼을 눌러주세요."
    },
    {
        page: 3,
        instruction: "국민비서 신청 화면입니다. ‘국민비서 알림’ 항목에서 스위치 모양 토글을 눌러서 켜주세요."
    },
    {
        page: 4,
        instruction: "알림 수신받을 앱을 선택할 수 있습니다. 실습에서는 카카오톡을 선택하겠습니다. 카카오톡을 주 알림으로 선택해 주세요."
    },
    {
        page: 5,
        instruction: "실습에서는 다양한 알림 서비스 중에서, ‘건강검진’ 알림 서비스를 신청하겠습니다. 화면에서 건강검진 항목을 찾아서 체크해 주세요."
    },
    {
        page: 6,
        instruction: "완료"
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 

const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_2_2 = document.querySelector('.cursor_pos_2_2');
const cursor_pos_2_3 = document.querySelector('.cursor_pos_2_3');
const cursor_pos_2_4 = document.querySelector('.cursor_pos_2_4');
// const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_4_2 = document.querySelector('.cursor_pos_4_2');
const cursor_pos_4_3 = document.querySelector('.cursor_pos_4_3');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
// const cursor_pos_6 = document.querySelector('.cursor_pos_6');

const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_2_2 = document.querySelector('.cursor_wrap_2_2');
const cursor_wrap_2_3 = document.querySelector('.cursor_wrap_2_3');
const cursor_wrap_2_4 = document.querySelector('.cursor_wrap_2_4');
// const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_4_2 = document.querySelector('.cursor_wrap_4_2');
const cursor_wrap_4_3 = document.querySelector('.cursor_wrap_4_3');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
// const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');


cursor_wrap_1.style.zIndex = "100";
cursor_wrap_2.style.zIndex = "100";
cursor_wrap_2_2.style.zIndex = "100";
cursor_wrap_2_3.style.zIndex = "100";
cursor_wrap_2_4.style.zIndex = "100";
// cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_4_2.style.zIndex = "100";
cursor_wrap_4_3.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
// cursor_wrap_6.style.zIndex = "100";


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
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,10],
            },
        },
    ],
});
createPopper(cursor_pos_2_2, cursor_wrap_2_2, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,10],
            },
        },
    ],
});
createPopper(cursor_pos_2_3, cursor_wrap_2_3, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,10],
            },
        },
    ],
});
createPopper(cursor_pos_2_4, cursor_wrap_2_4, {
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

createPopper(cursor_pos_4, cursor_wrap_4, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,-30],
            },
        },
    ],
});
createPopper(cursor_pos_4_2, cursor_wrap_4_2, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0,-30],
            },
        },
    ],
});
createPopper(cursor_pos_4_3, cursor_wrap_4_3, {
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
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [170,5],
            },
        },
    ],
});
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



$(document).on("click", "#hint_btn", function () {
    if (page_num === 2) {

        var total_height = $('.scroller').height();
        let scrollPos = total_height * 0 + 1;
        $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_2_2").toggleClass('show');
        $(".cursor_wrap_2_3").toggleClass('show');
        $(".cursor_wrap_2_4").toggleClass('show');
    }

    if (page_num === 4) {

        // var total_height = $('.scroller').height();
        // let scrollPos = total_height * 0 + 1;
        // $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_4_2").toggleClass('show');
        $(".cursor_wrap_4_3").toggleClass('show');
    }
});

