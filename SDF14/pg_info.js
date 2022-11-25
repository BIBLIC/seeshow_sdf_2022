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
