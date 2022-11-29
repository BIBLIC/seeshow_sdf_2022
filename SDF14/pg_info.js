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
        instruction: "택시 아이콘을 클릭하세요."
    },
    {
        page: 2,
        instruction: "출발지를 확인하고 '어디로 갈까요?'를 클릭해 도착지 설정 페이지로 이동하세요."
    },
    {
        page: 3,
        instruction: "도착지에 '서울디지털재단'을 입력하세요."
    },
    {
        page: 4,
        instruction: "하단의 '출발지로 설정 버튼을 클릭하세요."
    },
    {
        page: 5,
        instruction: "'일반호출' 탭을 클릭하세요."
    },
    {
        page: 6,
        instruction: "하단의 '호출하기 버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "하단의 '호출하기 버튼을 클릭하세요."
    },
    {
        page: 8,
        instruction: "하단의 '호출하기 버튼을 클릭하세요."
    },
    {
        page: 9,
        instruction: "하단의 '호출하기 버튼을 클릭하세요."
    },
    {
        page: 10,
        instruction: "마지막 페이지"
    },
];