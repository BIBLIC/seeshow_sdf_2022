var total_page = 12;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
        page: 6,
        correctAnswer: "pg_6_answer"
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer"
    },
    {
        page: 6,
        correctAnswer: "pg_6_answer"
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
    {
        page: 2,
        inputableAnswer: "인사동"
    },
    {},
    {},
    {},
    {},
    {
        page: 7,
        inputableAnswer: "123456"
    },
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
        instruction: "'시작하기' 버튼을 클릭하세요."
    },
    {
        page: 1,
        instruction: "1"
    },
    {
        page: 2,
        instruction: "2"
    },
    {
        page: 3,
        instruction: "3"
    },
    {
        page: 4,
        instruction: "4"
    },
    {
        page: 5,
        instruction: "5"
    },
    {
        page: 6,
        instruction: "6"
    },
    {
        page: 7,
        instruction: "7"
    },
    {
        page: 8,
        instruction: "8"
    },
    {
        page: 9,
        instruction: "9"
    },
    {
        page: 10,
        instruction: "10"
    },
    {
        page: 11,
        instruction: "11"
    },
    {
        page: 12,
        instruction: "12"
    },
    {
        page: 13,
        instruction: "마지막 페이지"
    },
];