const pageNum = 14;
const pageName = "SD32";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "정부24 앱을 활용하여 각종 민원 서비스를 신청하기 위해 비회원 로그인을 실습하겠습니다. 비회원 로그인을 위해서 정부 24 첫 화면에서 파란색 로그인 버튼을 눌러주세요.";
const page2 = "정부24 앱은 다양한 방법으로 로그인이 가능합니다. 이번 실습에서는 회원 가입을 하지 않고 서비스를 이용할 수 있는 비회원 로그인을 진행하겠습니다. 로그인 화면 탭의 제일 오른쪽에 있는 비회원 로그인을 눌러주세요.";
const page3 = "비회원 로그인 탭을 클릭하면 나오는 화면에서, 파란색 비회원 로그인 버튼을 눌러주세요.";
const page4 = "실습에서는 개인(내국인)으로 비회원 로그인을 진행하겠습니다. 개인 정보 수집 및 고유식별 정보 수집 이용 동의 내용을 확인하고, 화면을 눌러서 다음으로 진행해 주세요.";
const page5 = "개인 정보 수집 및 이용에 대한 안내를 확인하고 동의합니다 좌측 동그라미를 눌러서 선택해 주세요.";
const page6 = "'동의합니다'가 선택되었습니다. 다음으로, 고유 식별 정보 수집에 대한 동의를 확인하고, 화면을 눌러서 다음으로 진행해 주세요.";
const page7 = "고유식별 정보 수집에 대한 안내를 확인하고 동의합니다 좌측 동그라미를 눌러서 선택해 주세요.";
const page8 = "'동의합니다'가 선택되었습니다. 비회원 신청 정보를 입력하겠습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page9 = "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 이름과 주민등록번호는 필수 입력 사항입니다. 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page10 = "주민등록번호 앞자리(생년월일 6자리)를 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 = "주민등록번호 뒤 7자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page12 = "입력 확인 항목에서는 화면에 출력 된 번호 4,0,0,3,5,7을 그대로 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 = "입력이 완료되었습니다. 화면 하단 확인 버튼을 눌러주세요.";
const page14 = "비회원 로그인이 완료되었습니다. 로그인 중에는 정부 24 첫 화면의 로그인 버튼이 보이지 않습니다. 정부 24를 활용해서 민원 발급 서비스를 이용해 보세요.";

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
    page14
);

const inputPage = [
    { page: 8, correctAnswer: "이름" },
    { page: 9, correctAnswer: "숫자 6자리" },
    { page: 10, correctAnswer: "숫자 7자리" },
    { page: 11, correctAnswer: "400357" },
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
                        if (this.value.length === 7 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 11) {
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
    startRateX: 0.6827195467422096,
    startRateY: 0.467175572519084,
    endRateX: 0.9943342776203966,
    endRateY: 0.5312977099236641,
};

const coordinate2 = {
    startRateX: 0.7592067988668555,
    startRateY: 0.22442748091603054,
    endRateX: 0.9291784702549575,
    endRateY: 0.3068702290076336,
};

const coordinate3 = {
    startRateX: 0.09631728045325778,
    startRateY: 0.5786259541984733,
    endRateX: 0.9008498583569405,
    endRateY: 0.6977099236641221,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0.16147308781869688,
    startRateY: 0.5236641221374045,
    endRateX: 0.45609065155807366,
    endRateY: 0.5786259541984733,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0.1501416430594901,
    startRateY: 0.4534351145038168,
    endRateX: 0.46175637393767704,
    endRateY: 0.5022900763358779,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0.3031161473087819,
    startRateY: 0.14961832061068703,
    endRateX: 0.9546742209631728,
    endRateY: 0.20763358778625954,
};

const coordinate10 = {
    startRateX: 0.3059490084985836,
    startRateY: 0.22290076335877862,
    endRateX: 0.623229461756374,
    endRateY: 0.2885496183206107,
};

const coordinate11 = {
    startRateX: 0.9546742209631728,
    startRateY: 0.2885496183206107,
    endRateX: 0.6402266288951841,
    endRateY: 0.22748091603053436,
};

const coordinate12 = {
    startRateX: 0.9490084985835694,
    startRateY: 0.7190839694656489,
    endRateX: 0.31444759206798867,
    endRateY: 0.6732824427480916,
};

const coordinate13 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.7541984732824427,
    endRateX: 0.5014164305949008,
    endRateY: 0.8183206106870229,
};

const coordinate14 = {
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
    coordinate14
);
