const pageNum = 26;
const pageName = "SD15";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "코레일 톡 활용 기차 예매를 실습하겠습니다. 코레일 톡 최초 실행 시 접근 권한 설정 안내 확인이 필요합니다. 휴대폰에 정보를 저장하는 권한은 필수, 휴대폰 위치 제공은 선택입니다. 확인하고 앱 사용을 위해서 네를 눌러주세요.";
const page2 = "기기의 사진, 미디어, 파일 접근 권한에 대해서 '허용'을 눌러주세요.";
const page3 = "위치 접근 권한은 필수 허용 권한이 아닙니다. 거부 또는 허용을 선택해 주세요.";
const page4 =
    "승차권 예매 화면에서 편도 또는 왕복 승차권을 예매할 수 있습니다. 실습에서는 용산역에서 서대전역까지 가는 KTX, 성인 1매 편도 승차권을 예약하겠습니다. 화면을 눌러 다음으로 진행해 주세요.";
const page5 =
    "출발 역을 선택하겠습니다. 기본 값으로 서울이 입력되어 있습니다. 서울을 눌러서 실습의 출발 역인 용산역으로 변경하겠습니다. 서울을 눌러주세요.";
const page6 =
    "출발 기차역 선택 창이 펼쳐집니다. 목록에서 역을 선택하거나 검색창에 역 이름을 검색합니다. 이번 실습의 출발 역 '용산'을 선택해 주세요.";
const page7 =
    "출발 역이 용산으로 설정되었습니다. 도착 역을 선택하겠습니다. 도착 역의 기본 값이 부산으로 되어있습니다. 도착 역 변경을 위해 부산을 눌러주세요.";
const page8 =
    "도착 기차역 선택 창이 펼쳐집니다. 목록에서 역을 선택하거나 검색창에 역 이름을 검색합니다. 이번 실습의 도착 역 '서대전'을 선택해 주세요.";
const page9 =
    "출발은 용산, 도착은 서대전으로 선택되었습니다. 출발 날짜를 선택하겠습니다. 출발일의 날짜 부분 또는 날짜 아래 펼침 화살표 버튼을 눌러주세요.";
const page10 = "출발 날짜와 시간을 선택할 수 있는 달력이 열렸습니다. 실습에서 출발 날짜는 11일 목요일로 선택해 주세요.";
const page11 = "출발일이 11일로 선택되었습니다. 11일 오전 6시 이후의 기차 편을 조회하기 위해 '06시'를 선택해 주세요.";
const page12 =
    "출발일과 출발 시간이 잘 선택되었습니다. 승객 연령 및 좌석 수는 기본 성인 1명으로 설정되어 있습니다. 실습에서는 변경하지 않고 화면 하단 '열차 조회하기' 버튼을 눌러주세요.";
const page13 =
    "11월 11일 오전 6시 이후 용산에서 서대전까지 성인 1명이 예약 가능한 열차가 조회되었습니다. 실습에서는 용산에서 오전 6시 12분 출발하여 서대전에 오전 7시 19분 도착 예정인 KTX 산천 471 열차의 일반실 19,900원 열차를 눌러주세요.";
const page14 = "소요 시간과 요금 그리고 좌석을 확인한 다음 예매 버튼을 눌러주세요.";
const page15 =
    "코레일 회원이라면 회원 로그인 후 예매가 가능합니다. 실습에서는 비회원 로그인으로 예매하겠습니다. 화면 하단에 '비회원' 버튼을 눌러주세요.";
const page16 = "비회원 예약을 위한 정보 입력입니다. 이름 입력을 눌러서 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page17 = "전화번호 항목에 전화번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page18 = "비밀번호 항목에 설정하고 싶은 비밀번호를 5자리 숫자로 입력하고 엔터 또는 확인을 눌러주세요.";
const page19 = "비밀번호 확인 항목에 방금 설정한 비밀번호 5자리 숫자를 한 번 더 입력하고 엔터 또는 확인을 눌러주세요.";
const page20 =
    "정보 입력이 완료되었습니다. 입력한 이름, 전화번호, 비밀번호를 이용하여 비회원 예약 확인 및 취소가 가능합니다. 내용을 확인하고 화면 하단 확인 버튼을 눌러주세요.";
const page21 = "이용안내 확인 페이지입니다. 내용을 확인하고 ‘위 내용에 대해 확인하였습니다.’를 체크해 주세요.";
const page22 = "안내 창 하단 '네'를 눌러서 다음으로 진행해 주세요.";
const page23 =
    "결제 전 승차권 정보를 확인해 주세요. 결제와 발권, 환불 관련 주의 사항을 확인하고 화면 하단 '결제하기' 버튼을 눌러주세요.";
const page24 = "예약 열차 정보 및 승차권 금액 그리고 각종 할인 항목을 확인하고 다음 버튼을 눌러주세요.";
const page25 =
    "결제는 카드 결제와 간편결제를 제공합니다. 간편 결제는 페이코, 카카오 페이, 네이버 페이 등이 지원됩니다. 결제에 사용할 서비스를 선택하고 결제하면 예약이 완료됩니다. 화면 상단에 카드 결제 버튼을 눌러주세요.";
const page26 =
    "카드 결제는 신용카드 정보를 입력해서 결제를 진행할 수 있습니다. 카드 정보를 입력하고 결제하면 예약이 완료됩니다. 코레일 톡을 활용해서 편리하게 예약하고 발권하세요.";

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
    page22,
    page23,
    page24,
    page25,
    page26
);

const inputPage = [
    { page: 15, correctAnswer: "이름을" },
    { page: 16, correctAnswer: "전화번호를 숫자만" },
    { page: 17, correctAnswer: "숫자만 5자리를" },
    { page: 18, correctAnswer: "숫자만 5자리를" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 15) {
                        if (2 <= this.value.length && this.value.length <= 5 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 16) {
                        if (5 <= this.value.length && this.value.length <= 15 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 17 || pageNumber === 18) {
                        if (this.value.length === 5 && isNaN(typeofAnswer) === false) {
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
    startRateX: 0.4985835694050991,
    startRateY: 0.7022900763358778,
    endRateX: 0.9631728045325779,
    endRateY: 0.7786259541984732,
};

const coordinate2 = {
    startRateX: 0.8951841359773371,
    startRateY: 0.6152671755725191,
    endRateX: 0.6940509915014165,
    endRateY: 0.5557251908396946,
};

const coordinate3 = {
    startRateX: 0.5184135977337111,
    startRateY: 0.5321100917431193,
    endRateX: 0.8810198300283286,
    endRateY: 0.599388379204893,
};

const coordinate4 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0.4192634560906516,
    startRateY: 0.2778625954198473,
    endRateX: 0.08498583569405099,
    endRateY: 0.1465648854961832,
};

const coordinate6 = {
    startRateX: 0.45892351274787535,
    startRateY: 0.45038167938931295,
    endRateX: 0.9206798866855525,
    endRateY: 0.5221374045801527,
};

const coordinate7 = {
    startRateX: 0.9320113314447592,
    startRateY: 0.15267175572519084,
    endRateX: 0.5920679886685553,
    endRateY: 0.27633587786259545,
};

const coordinate8 = {
    startRateX: 0.46458923512747874,
    startRateY: 0.7847328244274809,
    endRateX: 0.9178470254957507,
    endRateY: 0.8564885496183207,
};

const coordinate9 = {
    startRateX: 0.0821529745042493,
    startRateY: 0.3669724770642202,
    endRateX: 0.9178470254957507,
    endRateY: 0.5,
};

const coordinate10 = {
    startRateX: 0.45609065155807366,
    startRateY: 0.5214067278287462,
    endRateX: 0.2804532577903683,
    endRateY: 0.37155963302752293,
};

const coordinate11 = {
    startRateX: 0.8016997167138811,
    startRateY: 0.5206106870229008,
    endRateX: 0.9376770538243626,
    endRateY: 0.5969465648854961,
};

const coordinate12 = {
    startRateX: 0.5014164305949008,
    startRateY: 0.8106870229007633,
    endRateX: 0.9971671388101983,
    endRateY: 0.9099236641221374,
};

const coordinate13 = {
    startRateX: 0.5977337110481586,
    startRateY: 0.7083969465648855,
    endRateX: 0.7762039660056658,
    endRateY: 0.76793893129771,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0.8076335877862595,
    endRateX: 1,
    endRateY: 0.9114503816793893,
};

const coordinate15 = {
    startRateX: 0.0169971671388102,
    startRateY: 0.7935779816513762,
    endRateX: 0.9830028328611898,
    endRateY: 0.9036697247706422,
};

const coordinate16 = {
    startRateX: 0.33994334277620397,
    startRateY: 0.10229007633587786,
    endRateX: 0.9603399433427762,
    endRateY: 0.16793893129770993,
};

const coordinate17 = {
    startRateX: 0.9603399433427762,
    startRateY: 0.250381679389313,
    endRateX: 0.33994334277620397,
    endRateY: 0.18473282442748093,
};
const coordinate18 = {
    startRateX: 0.33994334277620397,
    startRateY: 0.2687022900763359,
    endRateX: 0.9575070821529745,
    endRateY: 0.33129770992366414,
};
const coordinate19 = {
    startRateX: 0.33994334277620397,
    startRateY: 0.35419847328244275,
    endRateX: 0.9575070821529745,
    endRateY: 0.4152671755725191,
};
const coordinate20 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.9114503816793893,
    endRateX: 0,
    endRateY: 0.8091603053435115,
};

const coordinate21 = {
    startRateX: 0.056657223796033995,
    startRateY: 0.7018348623853211,
    endRateX: 0.7818696883852692,
    endRateY: 0.7798165137614679,
};

const coordinate22 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7893129770992366,
    endRateX: 0.9603399433427762,
    endRateY: 0.8641221374045801,
};

const coordinate23 = {
    startRateX: 0,
    startRateY: 0.8977099236641222,
    endRateX: 1,
    endRateY: 1,
};

const coordinate24 = {
    startRateX: 0.5042492917847026,
    startRateY: 0.9145038167938931,
    endRateX: 1,
    endRateY: 1,
};

const coordinate25 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.1480916030534351,
    endRateX: 0,
    endRateY: 0.07022900763358779,
};

const coordinate26 = {
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
    coordinate22,
    coordinate23,
    coordinate24,
    coordinate25,
    coordinate26
);
