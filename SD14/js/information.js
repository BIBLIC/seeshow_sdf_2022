const pageNum = 10;
const pageName = "SD14";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "지하철 이용을 편리하게 해주는 지하철 앱을 실습하겠습니다. 목적지까지 경로 안내와 빠른 환승 방법 그리고 역정보를 제공합니다. 화면 하단 노란색 시작하기 버튼을 눌러주세요.";
const page2 = "지하철 앱의 첫 화면입니다. 출발역과 도착역을 설정하고 경로를 검색하겠습니다. 화면 상단에 검색창을 눌러주세요.";
const page3 = "실습에서는 남부터미널을 검색하겠습니다. 검색창을 눌러서 남부터미널을 입력하고 엔터 또는 확인을 눌러주세요.";
const page4 = "지하철역이 검색되었습니다. 역 이름 오른쪽에는 해당 역이 몇 호선인지 숫자와 색으로 표시됩니다. 남부터미널을 눌러서 선택해 주세요.";
const page5 = "지하철 노선도의 남부터미널역에 네 개의 버튼이 있습니다. 남부터미널역을 출발지로 설정하겠습니다. 출발 버튼을 눌러주세요.";
const page6 = "남부터미널역이 출발지로 설정되어 파란색 출발 핀이 생겼습니다. 화면 상단의 도착 검색창을 눌러서, 도착지를 입력하겠습니다.";
const page7 = "디지털미디어시티를 입력하고 엔터 또는 확인을 눌러주세요.";
const page8 = "지하철역이 검색되었습니다. 역 이름 오른쪽에는 해당 역이 몇 호선인지 숫자와 색으로 표시됩니다. 디지털미디어시티역을 눌러주세요.";
const page9 = "남부터미널역에서 디지털미디어시티역으로 가는 지하철 경로가 검색되었습니다. 기본 검색 결과는 '최단시간' 경로이고 53분 소요 예상됩니다. 이번에는 '최소환승' 경로를 확인하겠습니다. 화면 상단 최소환승 버튼을 눌러주세요.";
const page10 = "'최소환승' 경로입니다. 44분 소요 예상되고, 한 번 환승이 필요합니다. 빠르고 정확한 이동을 위해서 지하철 앱을 활용하세요.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10);

const inputPage = [
    { page: 2, correctAnswer: "남부터미널" },
    {
        page: 6,
        correctAnswer: "디지털미디어시티",
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
    startRateX: 0.18980169971671387,
    startRateY: 0.8717557251908397,
    endRateX: 0.8101983002832861,
    endRateY: 0.9358778625954198,
};

const coordinate2 = {
    startRateX: 0.9575070821529745,
    startRateY: 0.012213740458015267,
    endRateX: 0.13031161473087818,
    endRateY: 0.06717557251908397,
};

const coordinate3 = {
    startRateX: 0.1274787535410765,
    startRateY: 0.010687022900763359,
    endRateX: 0.9631728045325779,
    endRateY: 0.061068702290076333,
};

const coordinate4 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.07480916030534351,
    endRateX: 0.9971671388101983,
    endRateY: 0.15725190839694655,
};

const coordinate5 = {
    startRateX: 0.3597733711048159,
    startRateY: 0.5251908396946565,
    endRateX: 0.21813031161473087,
    endRateY: 0.45038167938931295,
};

const coordinate6 = {
    startRateX: 0.1359773371104816,
    startRateY: 0.05801526717557252,
    endRateX: 0.9575070821529745,
    endRateY: 0.11145038167938931,
};

const coordinate7 = {
    startRateX: 0.13031161473087818,
    startRateY: 0.007633587786259542,
    endRateX: 0.9575070821529745,
    endRateY: 0.06259541984732825,
};

const coordinate8 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.07633587786259542,
    endRateX: 0.9943342776203966,
    endRateY: 0.15725190839694655,
};

const coordinate9 = {
    startRateX: 0.24929178470254956, startRateY: 0.0030534351145038168, endRateX: 0.5495750708215298, endRateY: 0.0717557251908397
};

const coordinate10 = {
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
    coordinate10
);
