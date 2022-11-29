var total_page = 10;//페이지 수 -> 시나리오마다 total_page 수 바꾸기 

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
        instruction: "'로그인' 버튼을 클릭하세요."
    },
    {
        page: 2,
        instruction: "화면의 키패드를 이용해 비밀번호 6자리를 입력해주세요"
    },
    {
        page: 3,
        instruction: "'공과금 통합조회' 탭을 클릭하세요."
    },
    {
        page: 4,
        instruction: "주민번호 13자리를 입력하고 '다음' 버튼을 클릭하세요"
    },
    {
        page: 5,
        instruction: "앞서 등록한 비밀번호 6자리를 입력하고 '입력완료' 버튼을 클릭해주세요."
    },
    {
        page: 6,
        instruction: "'확인' 버튼을 클릭하세요."
    },
    {
        page: 7,
        instruction: "'공과금 통합조회' 탭을 클릭하세요."
    },
    {
        page: 8,
        instruction: "주민번호 13자리를 입력하고 '다음' 버튼을 클릭하세요."
    },
    {
        page: 9,
        instruction: "'국세' 탭을 클릭하세요."
    },
    {
        page: 10,
        instruction: "마지막 페이지"
    },
];