const pageNum = 19;
const pageName = "SD12";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "지도 앱을 활용해서 보다 편하고 정확한 길 찾기를 실습하겠습니다. 실습에서는 남부터미널 역 3호선에서 서울디지털재단까지 가는 길을 찾아보겠습니다. 화면을 눌러서 다음 페이지로 진행해 주세요.";
const page2 =
    "네이버 지도를 최초 실행하면 나오는, 기능과 활용법을 소개하는 튜토리얼 화면입니다. 내용을 확인하고 화면 상단 오른쪽에 화살표를 눌러서 다음으로 진행해 주세요.";
const page3 =
    "지도 앱의 내비게이션 기능과 특장점을 소개하는 화면입니다. 화면 상단 오른쪽에 화살표를 눌러서 다음으로 진행해 주세요.";
const page4 =
    "추천 기능 소개 화면입니다. 최초 실행 시에만 튜토리얼 화면이 실행됩니다. 화면 하단에 파란색 시작하기 버튼을 눌러주세요.";
const page5 =
    "지도 앱은 휴대폰의 위치 정보 GPS를 허용하면 보다 편리한 이용이 가능합니다. 실습에서는 위치 정보를 허용하겠습니다. 허용을 눌러주세요.";
const page6 =
    "공지, 이벤트 정보 알림 기능은 허용하지 않더라도 지도 서비스 이용에 제한은 없습니다. 내용을 확인하고 예 또는 아니요를 선택해 주세요.";
const page7 =
    "지도 앱의 첫 화면입니다. 화면 상단에 장소, 버스, 지하철, 주소를 검색할 수 있습니다. 검색창 바로 오른쪽, 파란색 길 찾기 버튼을 눌러주세요.";
const page8 =
    "길 찾기 화면에서 출발지와 도착지를 설정하고 이동 수단을 선택해서 검색합니다. 출발지에 새로운 장소를 등록하겠습니다. 출발지 입력을 눌러주세요.";
const page9 = "출발지 입력란을 눌러서 남부터미널을 입력하고 엔터 또는 확인을 눌러주세요.";
const page10 = "검색 제안 목록에서 종합버스터미널이 아닌 지하철역을 선택하겠습니다.'남부터미널역 3호선'을 눌러주세요";
const page11 = "출발지에 남부터미널역 3호선이 입력되었습니다. 도착지를 입력하겠습니다. 도착지 입력을 눌러주세요.";
const page12 = "도착지 입력 화면입니다. 도착지 입력란에 서울디지털재단을 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 = "검색 제안 목록에서 첫 번째 서울디지털재단을 눌러주세요.";
const page14 =
    "길 찾기 검색 결과입니다. 대중교통을 이용한 길 찾기 결과이므로 도착지 입력창 아래 파란색 버스 모양 아이콘이 선택되어 있습니다. 최적 경로는 지하철과 버스를 이용한 결과입니다. 버스만 이용해서 목적지로 가는 경로를 확인하기 위해 파란색 버스 아이콘 아래 전체 버튼 오른쪽에 있는 버스 버튼을 눌러주세요.";
const page15 =
    "버스만 이용해서 도착지로 가는 3개의 경로를 제안합니다. 이번에는 지하철만 이용해서 목적지에 가는 경로 확인을 위해 버스 버튼 오른쪽에 있는 지하철 버튼을 눌러주세요.";
const page16 =
    "지하철만 이용해서 도착지로 가는 3개의 경로를 제안합니다. 이번에는 대중교통이 아닌 자동차를 이용한 경로 확인을 위해 검색창 아래 파란색 버스 모양 아이콘 오른쪽에 있는 자동차 모양 아이콘을 눌러주세요.";
const page17 =
    "자동차로 올림픽대로를 이용하는 28분이 소요되는 경로를 제안하고 있습니다. 이번에는 도보로 이동하는 경로를 확인하겠습니다. 자동차 아이콘 오른쪽에 있는 사람이 걷는 모양 아이콘을 눌러주세요.";
const page18 =
    "도보로는 4시간 58분 소요되는 경로를 제안합니다. 마지막으로 자전거를 이용한 이동 경로를 확인해 보겠습니다. 자전거 모양 아이콘을 눌러주세요.";
const page19 =
    "자전거를 이용한 1시간 17분 소요 예상되는 경로를 제안합니다. 지도 앱을 활용해서 보다 편리하게 이동하세요.";

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
    page19
);

const inputPage = [
    { page: 8, correctAnswer: "남부터미널" },
    {
        page: 11,
        correctAnswer: "서울디지털재단",
    },
];

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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.8611898016997167,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.06870229007633588,
};

const coordinate3 = {
    startRateX: 0.8611898016997167,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.06870229007633588,
};

const coordinate4 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.916030534351145,
    endRateX: 1,
    endRateY: 1,
};

const coordinate5 = {
    startRateX: 0.7082152974504249,
    startRateY: 0.5435114503816794,
    endRateX: 0.8810198300283286,
    endRateY: 0.5969465648854961,
};

const coordinate6 = {
    startRateX: 0.5552407932011332,
    startRateY: 0.5221374045801527,
    endRateX: 0.9405099150141643,
    endRateY: 0.6106870229007634,
};

const coordinate7 = {
    startRateX: 0.8073654390934845,
    startRateY: 0.015267175572519083,
    endRateX: 0.9546742209631728,
    endRateY: 0.09312977099236641,
};

const coordinate8 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate9 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate10 = {
    startRateX: 1,
    startRateY: 0.8122137404580153,
    endRateX: 0,
    endRateY: 0.6427480916030535,
};

const coordinate11 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.07633587786259542,
    endRateX: 0.8668555240793201,
    endRateY: 0.13587786259541984,
};

const coordinate12 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.015267175572519083,
    endRateX: 0.8696883852691218,
    endRateY: 0.0732824427480916,
};

const coordinate13 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.32213740458015266,
    endRateX: 0,
    endRateY: 0.1465648854961832,
};

const coordinate14 = {
    startRateX: 0.15864022662889518,
    startRateY: 0.2183206106870229,
    endRateX: 0.32577903682719545,
    endRateY: 0.28549618320610687,
};

const coordinate15 = {
    startRateX: 0.509915014164306,
    startRateY: 0.2198473282442748,
    endRateX: 0.32294617563739375,
    endRateY: 0.2870229007633588,
};

const coordinate16 = {
    startRateX: 0.5722379603399433,
    startRateY: 0.21374045801526717,
    endRateX: 0.40226628895184136,
    endRateY: 0.13282442748091602,
};

const coordinate17 = {
    startRateX: 0.7847025495750708,
    startRateY: 0.216793893129771,
    endRateX: 0.623229461756374,
    endRateY: 0.13129770992366413,
};

const coordinate18 = {
    startRateX: 0.9971671388101983,
    startRateY: 0.21374045801526717,
    endRateX: 0.9121813031161473,
    endRateY: 0.13587786259541984,
};

const coordinate19 = {
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
    coordinate19
);
