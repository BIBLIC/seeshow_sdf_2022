const pageNum = 16;
const pageName = "SD35";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "서울특별시 공공서비스 예약을 위해서는 로그인이 반드시 필요합니다. 비회원 로그인을 실습하겠습니다. 화면을 눌러서 다음으로 이동해 주세요.";
const page2 =
    "로그인을 위해 서울특별시 공공서비스 예약 첫 화면에서 좌측 상단 세 줄 모양을 눌러서 메뉴를 펼쳐보겠습니다. 좌측 상단 서울특별시 로고 아래 세 줄 모양 메뉴 버튼을 눌러주세요.";
const page3 = "서비스 메뉴가 열렸습니다. 로그인을 위해 상단 공공서비스 예약 로고 바로 아래 로그인 버튼을 눌러주세요.";
const page4 =
    "서울시 통합 아이디로 회원가입을 하면 서비스를 편리하게 이용할 수 있습니다. 네이버 또는 카카오 아이디 로그인도 가능합니다. 실습에서는 비회원 로그인을 진행하겠습니다. 로그인 화면 탭에서 비회원 로그인 버튼을 눌러주세요.";
const page5 =
    "휴대폰 본인 인증과 아이핀 본인 인증으로 비회원 로그인이 가능합니다. 실습에서는 휴대폰 본인인증으로 진행하겠습니다. 휴대폰 본인인증에서 본인인증 버튼을 눌러주세요.";
const page6 = "본인인증을 위해서 이용 중이신 통신사를 선택해 주세요.";
const page7 =
    "통신사가 선택되었습니다. 인증을 위한 전체 동의를 진행하겠습니다. 전체 동의 왼쪽 동그라미를 눌러서 선택해 주세요.";
const page8 = "전체 동의가 선택되었습니다. 화면 하단 문자로 인증하기 버튼을 눌러서 인증을 진행해 주세요.";
const page9 =
    "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 문자 인증을 위해 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page10 = "주민등록번호 앞 생년월일 여섯 자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 = "주민등록번호 뒤 첫 자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page12 = "휴대폰 번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 = "입력이 완료되었습니다. 진한 회색 확인 버튼을 눌러주세요.";
const page14 =
    "문자로 인증번호가 발송됩니다. 인증은 3분 내에 진행해 주셔야 합니다. 실습에서 인증번호는 9,3,1,8,3,8을 입력하겠습니다. 인증번호 9,3,1,8,3,8을 입력하고 엔터 또는 확인을 눌러주세요.";
const page15 = "인증번호 9,3,1,8,3,8 이 입력되었습니다. 인증 완료를 위해 진한 회색 인증 확인 버튼을 눌러주세요.";
const page16 =
    "비회원 로그인이 완료되었습니다. 다음 시간에는 빠른 예약 기능을 활용해서 공공서비스 예약하는 법을 실습하겠습니다.";

pageDescArray.push(
    page1,
    page2,
    page3,
    page4,
    page5,
    page6,
    page7,
    page8,
    page9,
    page10,
    page11,
    page12,
    page13,
    page14,
    page15,
    page16
);

const inputPage = [
    { page: 8, correctAnswer: "이름" },
    { page: 9, correctAnswer: "숫자 6자리" },
    { page: 10, correctAnswer: "숫자 1자리" },
    { page: 11, correctAnswer: "숫자 10~11자리" },
    { page: 13, correctAnswer: "931838" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 8) {
                        if (2 <= this.value.length && this.value.length <= 5 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 9) {
                        if (this.value.length === 6 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 10) {
                        if (
                            this.value === "1" ||
                            this.value === "2" ||
                            this.value === "3" ||
                            (this.value === "4" && isNaN(typeofAnswer) === false)
                        ) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 11) {
                        if (10 <= this.value.length && this.value.length <= 11 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 13) {
                        if (this.value === answer) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.028328611898016998,
    startRateY: 0.11908396946564885,
    endRateX: 0.1274787535410765,
    endRateY: 0.17099236641221374,
};

const coordinate3 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.1450381679389313,
    endRateX: 0.2521246458923513,
    endRateY: 0.2198473282442748,
};

const coordinate4 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.33893129770992364,
    endRateX: 0.9631728045325779,
    endRateY: 0.39083969465648855,
};

const coordinate5 = {
    startRateX: 0.0764872521246459,
    startRateY: 0.5053435114503817,
    endRateX: 0.9206798866855525,
    endRateY: 0.6534351145038167,
};

const coordinate6 = {
    startRateX: 0.11331444759206799,
    startRateY: 0.250381679389313,
    endRateX: 0.8725212464589235,
    endRateY: 0.650381679389313,
};

const coordinate7 = {
    startRateX: 0.06515580736543909,
    startRateY: 0.6473282442748092,
    endRateX: 0.28611898016997167,
    endRateY: 0.6977099236641221,
};

const coordinate8 = {
    startRateX: 0.059490084985835696,
    startRateY: 0.7923664122137405,
    endRateX: 0.9405099150141643,
    endRateY: 0.8641221374045801,
};

const coordinate9 = {
    startRateX: 0.0679886685552408,
    startRateY: 0.21374045801526717,
    endRateX: 0.9291784702549575,
    endRateY: 0.2595419847328244,
};

const coordinate10 = {
    startRateX: 0.0708215297450425,
    startRateY: 0.32061068702290074,
    endRateX: 0.45892351274787535,
    endRateY: 0.36335877862595417,
};

const coordinate11 = {
    startRateX: 0.6203966005665722,
    startRateY: 0.3618320610687023,
    endRateX: 0.5410764872521246,
    endRateY: 0.32061068702290074,
};

const coordinate12 = {
    startRateX: 0.9291784702549575,
    startRateY: 0.4534351145038168,
    endRateX: 0.0708215297450425,
    endRateY: 0.40458015267175573,
};

const coordinate13 = {
    startRateX: 0.5070821529745042,
    startRateY: 0.5419847328244275,
    endRateX: 0.9320113314447592,
    endRateY: 0.5908396946564886,
};

const coordinate14 = {
    startRateX: 0.06515580736543909,
    startRateY: 0.20916030534351146,
    endRateX: 0.9348441926345609,
    endRateY: 0.26106870229007634,
};

const coordinate15 = {
    startRateX: 0.5014164305949008,
    startRateY: 0.33435114503816793,
    endRateX: 0.9376770538243626,
    endRateY: 0.3969465648854962,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

coordinateArray.push(
    coordinate1,
    coordinate2,
    coordinate3,
    coordinate4,
    coordinate5,
    coordinate6,
    coordinate7,
    coordinate8,
    coordinate9,
    coordinate10,
    coordinate11,
    coordinate12,
    coordinate13,
    coordinate14,
    coordinate15,
    coordinate16
);
