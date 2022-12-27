var total_page = 7;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
    
];

// ----------------------------------------------------------------------------------------------------------------------- 
// const total_wrap = document.querySelector('.total_wrap');
// const reactions = document.querySelector('.reactions');
const my_wrap = document.querySelector('.my_wrap');
const my_wrap2 = document.querySelector('.my_wrap2');
// const share = document.querySelector('.share');

// const blog_main = document.querySelector('.blog_main');

const modal1 = document.querySelector('.modal1');
const modal1_2 = document.querySelector('.modal1_2');
const modal2 = document.querySelector('.modal2');


const modal2_1 = document.querySelector('.modal2_1');
const modal2_2 = document.querySelector('.modal2_2');
const modal3_1 = document.querySelector('.modal3_1');
const modal3_2 = document.querySelector('.modal3_2');
const modal4_1 = document.querySelector('.modal4_1');
const modal4_2 = document.querySelector('.modal4_2');
const modal5_1 = document.querySelector('.modal5_1');
const modal5_2 = document.querySelector('.modal5_2');
const modal6_1 = document.querySelector('.modal6_1');
const modal6_2 = document.querySelector('.modal6_2');

modal1_2.style.display = "none";
modal2_1.style.display = "none";
modal2_2.style.display = "none";
modal3_1.style.display = "none";
modal3_2.style.display = "none";
modal4_1.style.display = "none";
modal4_2.style.display = "none";
modal5_1.style.display = "none";
modal5_2.style.display = "none";
my_wrap.style.display = "none";
my_wrap2.style.display = "none";
modal6_1.style.display = "none";
modal6_2.style.display = "none";
modal1.style.display = "none";


const cursor_pos_1 = document.querySelector('.cursor_pos_1');
const cursor_wrap_1 = document.querySelector('.cursor_wrap_1');
const cursor_pos_2 = document.querySelector('.cursor_pos_2');
const cursor_wrap_2 = document.querySelector('.cursor_wrap_2');
const cursor_pos_3 = document.querySelector('.cursor_pos_3');
const cursor_wrap_3 = document.querySelector('.cursor_wrap_3');
const cursor_pos_4 = document.querySelector('.cursor_pos_4');
const cursor_wrap_4 = document.querySelector('.cursor_wrap_4');
// const cursor_pos_4_1 = document.querySelector('.cursor_pos_4_1');
// const cursor_wrap_4_1 = document.querySelector('.cursor_wrap_4_1');
const cursor_pos_5 = document.querySelector('.cursor_pos_5');
const cursor_wrap_5 = document.querySelector('.cursor_wrap_5');
const cursor_pos_6 = document.querySelector('.cursor_pos_6');
const cursor_wrap_6 = document.querySelector('.cursor_wrap_6');

cursor_wrap_1.style.zIndex = "40";
cursor_wrap_2.style.zIndex = "40";
cursor_wrap_3.style.zIndex = "40";
cursor_wrap_4.style.zIndex = "40";
cursor_wrap_5.style.zIndex = "40";
cursor_wrap_6.style.zIndex = "40";


const { createPopper } = Popper;
createPopper(cursor_pos_1, cursor_wrap_1, {
    placement: 'top',
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [150,1],
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
createPopper(cursor_pos_4, cursor_wrap_4, {
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
createPopper(cursor_pos_6, cursor_wrap_6, {
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
