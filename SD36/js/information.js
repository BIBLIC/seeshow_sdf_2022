const pageNum = 22;
const pageName = "SD36";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "로그인을 완료하고 서울특별시 공공서비스 예약 실습을 진행해 주세요. 로그인 된 공공서비스 예약 첫 화면입니다. 화면 중앙 빠른 예약에서 바로 가기 버튼을 눌러주세요.";
const page2 =
    "빠른 예약에서는 두 가지 방법을 제공합니다. 분류 우선은 서비스 분야를, 지역 우선은 서비스 지역을 먼저 선택하고 예약합니다. 실습에서는 지역 우선 방식으로 예약하겠습니다. 지역 우선 버튼을 눌러주세요.";
const page3 =
    "지역 선택 화면입니다. 실습에서는 중구를 선택하겠습니다. 1단계 지역 선택에서 중구를 눌러서 선택해 주세요.";
const page4 =
    "1단계 지역은 중구로 선택 완료되었습니다. 2단계에서는 서비스를 선택합니다. 실습에서는 교육강좌를 선택하겠습니다. 교육강좌에는 9개의 서비스가 운영 중입니다. 교육강좌 버튼을 눌러주세요.";
const page5 =
    "스포츠, 자연/과학, 역사, 교양/어학, 그리고 기타 총 다섯 개 분류가 있습니다. 실습에서는 교양/어학 강좌를 선택하겠습니다. 서비스 선택에서 교양/어학 버튼을 눌러주세요.";
const page6 =
    "교육강좌의 교양/어학에서는 2개의 강좌가 조회됩니다. 실습에서는 시 낭송 강좌를 선택하겠습니다. 시 낭송을 눌러주세요.";
const page7 =
    "2단계 서비스에서 교양/어학의 시 낭송이 선택되었습니다. 3단계는 일정 선택입니다. 달력에 녹색 네모는 오늘이고, 회색으로 표시되어 있는 날짜는 예약 불가입니다. 예약이 가능한 15일과 22일 중 15일을 눌러주세요.";
const page8 = "15일로 날짜가 선택되었습니다. 예약을 계속 진행하겠습니다. 화면 하단 예약하기 버튼을 눌러주세요.";
const page9 = "진행 중인 예약 정보를 확인합니다. 신청 서비스 시낭송을 확인하고 화면을 눌러서 다음으로 진행해 주세요.";
const page10 =
    "신청한 날짜 15일에 예약 가능한 회차 중 희망하는 회차를 선택합니다. 15일에는 한 회차만 있습니다. 2시에 진행하는 회차를 눌러서 신청해 주세요.";
const page11 = "회차 선택이 완료되었습니다. 신청 인원을 설정하겠습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page12 = "이용 인원 입력입니다. 이용 인원 정보에서 더하기 표시를 눌러서 인원을 추가해 주세요.";
const page13 = "신청 인원이 추가되었습니다. 예약 신청 정보를 확인을 위해 화면을 눌러서 다음으로 진행해 주세요.";
const page14 = "신청자 정보 확인 화면입니다. 이름과 연락처를 확인하고 화면을 눌러 다음으로 진행해 주세요.";
const page15 =
    "신청자(로그인 사용자)와 서비스 이용자가 동일하다면 '신청자 정보와 동일'을 눌러서 체크하면 신청자 정보가 이용자 정보에 자동으로 입력됩니다. 실습에서는 신청자 정보와 동일을 눌러서 이용자 정보를 입력하겠습니다. 신청자 정보와 동일 좌측에 체크 박스를 선택하여 체크해 주세요.";
const page16 =
    "신청자 정보가 이용자 정보에 자동 입력되었습니다. 이제 동의 절차를 위해 화면을 눌러서 다음으로 진행해 주세요.";
const page17 =
    "개인 정보 수집 및 이용 안내는 필수 동의입니다. 내용을 확인하고 '동의합니다' 왼쪽 박스를 눌러서 체크해 주세요.";
const page18 =
    "개인 정보 제3자 제공이 필수 동의가 필요합니다. 내용을 확인하고 '동의합니다' 왼쪽 박스를 눌러서 체크해 주세요.";
const page19 =
    "필수 동의가 모두 완료되었습니다. 이용 인원, 이용 요금 등을 마지막으로 확인하고 화면 하단 파란색 예약하기 버튼을 눌러주세요.";
const page20 = "예약 신청 완료 알림 톡이 카카오톡으로 발송된다는 안내입니다. 확인 버튼을 눌러주세요.";
const page21 = "예약이 완료되었습니다. 확인을 눌러주세요.";
const page22 = "예약 신청이 정상적으로 처리되었습니다. 예약 내용을 확인해 주세요.";

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
    page16,
    page17,
    page18,
    page19,
    page20,
    page21,
    page22
);

const inputPage = [{ page: null, correctAnswer: null }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    if (this.value === answer) {
                        handleClickBox();
                    } else if (this.value !== answer) {
                        alert(RETRY_MESSAGE);
                    }
                }
            });
        }
    }
}

const coordinate1 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.35877862595419846,
    endRateX: 0.9801699716713881,
    endRateY: 0.6076335877862595,
};

const coordinate2 = {
    startRateX: 0.5042492917847026,
    startRateY: 0.24580152671755726,
    endRateX: 0.9716713881019831,
    endRateY: 0.3114503816793893,
};

const coordinate3 = {
    startRateX: 0.056657223796033995,
    startRateY: 0.5435114503816794,
    endRateX: 0.34844192634560905,
    endRateY: 0.5969465648854961,
};

const coordinate4 = {
    startRateX: 0.5920679886685553,
    startRateY: 0.433587786259542,
    endRateX: 0.7762039660056658,
    endRateY: 0.517557251908397,
};

const coordinate5 = {
    startRateX: 0.0453257790368272,
    startRateY: 0.5648854961832062,
    endRateX: 0.22096317280453256,
    endRateY: 0.6061068702290077,
};

const coordinate6 = {
    startRateX: 0.0453257790368272,
    startRateY: 0.6961832061068702,
    endRateX: 0.9518413597733711,
    endRateY: 0.7358778625954199,
};

const coordinate7 = {
    startRateX: 0.16147308781869688,
    startRateY: 0.7587786259541984,
    endRateX: 0.29745042492917845,
    endRateY: 0.816793893129771,
};

const coordinate8 = {
    startRateX: 0.7337110481586402,
    startRateY: 0.9389312977099237,
    endRateX: 0.26912181303116145,
    endRateY: 0.8519083969465648,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.036827195467422094,
    startRateY: 0.6931297709923664,
    endRateX: 0.9631728045325779,
    endRateY: 0.7572519083969466,
};

const coordinate11 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate12 = {
    startRateX: 0.8441926345609065,
    startRateY: 0.49312977099236643,
    endRateX: 0.9461756373937678,
    endRateY: 0.5587786259541985,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0.014164305949008499,
    startRateY: 0.10076335877862595,
    endRateX: 0.10764872521246459,
    endRateY: 0.15267175572519084,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
    startRateX: 0.9915014164305949,
    startRateY: 0.33129770992366414,
    endRateX: 0.7223796033994334,
    endRateY: 0.28396946564885495,
};

const coordinate18 = {
    startRateX: 0.7195467422096318,
    startRateY: 0.5633587786259542,
    endRateX: 0.9886685552407932,
    endRateY: 0.6106870229007634,
};

const coordinate19 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.8702290076335878,
    endRateX: 0.9830028328611898,
    endRateY: 0.9358778625954198,
};

const coordinate20 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.5206106870229008,
    endRateX: 0.9348441926345609,
    endRateY: 0.5954198473282443,
};

const coordinate21 = {
    startRateX: 0.0679886685552408,
    startRateY: 0.5129770992366413,
    endRateX: 0.9320113314447592,
    endRateY: 0.583206106870229,
};

const coordinate22 = {
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
    coordinate16,
    coordinate17,
    coordinate18,
    coordinate19,
    coordinate20,
    coordinate21,
    coordinate22
);
