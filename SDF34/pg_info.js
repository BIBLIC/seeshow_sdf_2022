var total_page = 13;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
        instruction: "로딩중입니다."
    },
    {
        page: 2,
        instruction: "OTT플랫폼 이용하기를 실습하겠습니다. 첫 화면에서 시리즈 또는 영화를 눌러서 원하는 콘텐츠를 볼 수 있습니다. 시리즈 또는 영화를 누르면 다음 기능을 소개해 드립니다."
    },
    {
        page: 3,
        instruction: "NEW & HOT 기능에서는 공개 예정, TOP 10, 그리고 인기 콘텐츠 등을 확인할 수 있습니다. NEW & HOT을 누르면 다음 기능을 소개해 드립니다."
    },
    {
        page: 4,
        instruction: "카테고리에서는 다양한 콘텐츠 분류를 확인할 수 있습니다. 카테고리를 찾아서 눌러주세요."
    },
    {
        page: 5,
        instruction: "카테고리를 선택해서 원하는 콘텐츠를 찾을 수 있습니다. 엑스표 모양의 닫기 버튼을 눌러주세요."
    },
    {
        page: 6,
        instruction: "이어서 콘텐츠를 볼 때 자막을 크게하는 방법을 실습하겠습니다. 우측 상단 스마일 모양의 프로필을 눌러주세요."
    },
    {
        page: 7,
        instruction: "프로필 및 기타 설정 화면에서 프로필 관리 버튼을 눌러주세요."
    },
    {
        page: 8,
        instruction: "프로필 중에서 월디 프로필을 선택해 주세요."
    },
    {
        page: 9,
        instruction: "메뉴에서 자막 표시 설정을 찾아서 눌러주세요."
    },
    {
        page: 10,
        instruction: "글자 크기에서 가장 큰 ‘가’자를 눌러주세요."
    },
    {
        page: 11,
        instruction: "화면에 샘플 글자 크기를 확인하고 저장 버튼을 눌러주세요."
    },
    {
        page: 12,
        instruction: "자막 글자 크기 설정이 저장되었습니다. 화면을 누르면 실습이 완료됩니다."
    },
    {
        page: 13,
        instruction: "완료"
    },
];



// //*******************************************************************************
// //**************************+    커서   +*********************************** 


const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_pos_21 = document.querySelector('.cursor_pos_21');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_pos_12 = document.querySelector('.cursor_pos_12');


const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_wrap_21 = document.querySelector('.cursor_wrap_21');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_wrap_12 = document.querySelector('.cursor_wrap_12');



cursor_wrap_2.style.zIndex = "100";
cursor_wrap_21.style.zIndex = "100";
cursor_wrap_3.style.zIndex = "100";
cursor_wrap_4.style.zIndex = "100";
cursor_wrap_5.style.zIndex = "100";
cursor_wrap_12.style.zIndex = "100";


const { createPopper } = Popper;

createPopper(cursor_pos_2, cursor_wrap_2, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [210,70],
            },
        },
    ],
});
createPopper(cursor_pos_21, cursor_wrap_21, {
    placement: 'bottom',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [90,80],
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
                offset: [-220,120],
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
                offset: [0,20],
            },
        },
    ],
});
createPopper(cursor_pos_5, cursor_wrap_5, {
    placement: 'right',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [20,50],
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
                offset: [250,450],
            },
        },
    ],
});



$(document).on("click", '#start-btn', function () {
    if (page_num === 1) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#next_btn", function () {
    if (page_num === 0) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
});

$(document).on("click", "#prev_btn", function () {
    if (page_num === 2) {
        $( document ).ready(function() {
            setTimeout(function () {
                if (page_num === 1) {
                    next();
                }
            }, 800);
          });  
    }
});



$(document).on("click", "#hint_btn", function () {
    if (page_num === 2) {

        // var total_height = $('.scroller').height();
        // let scrollPos = total_height * 0 + 1;
        // $('.scroller').scrollTop(scrollPos);

        $(".cursor_wrap_21").toggleClass('show');
        
    }
});