var total_page = 10;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 


//정답 처리할 영역 클래스 명
//correctAnswer 로 지정한 class 외 영역 클릭 시 모달창 출력
//-> 후에 for 문 써서 pg_n_answer 로 통일하기
const pageClickArea = [
    {
        page: 0,
        correctAnswer: "title_h1"
    },
    {
        page: 1,
        correctAnswer: "banner"
    },
    {
        page: 2,
        correctAnswer: "pg2_answer",
    },
    {
        page: 3,
        correctAnswer: "title_h1"
    },
    {
        page: 4,
        correctAnswer: "title_h1",
    },
    {
        page: 5,
        correctAnswer: "title_h1",
    },
    {
        page: 6,
        correctAnswer: "title_h1",
    },
    {
        page: 7,
        correctAnswer: "title_h1",
    },
    {
        page: 8,
        correctAnswer: "title_h1",
    },
    {
        page: 9,
        correctAnswer: "title_h1",
    },
    {
        page: 10,
        correctAnswer: "title_h1",
    }
];

const ctrlBtnNames = [
    "prev_btn","pause_btn","hint_btn","size_btn","next_btn"
]