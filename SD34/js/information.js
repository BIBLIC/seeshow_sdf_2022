const pageNum = 25;
const pageName = "SD34";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "안전신문고를 활용하면 생활 속 안전 신고, 생활 불편 신고, 불법 주정차 신고 등이 가능합니다. 실습에서는 파손된 시설물을 신고하겠습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page2 = "안전신문고 이용을 위한 필수 필요 정보와 권한에 대한 알림입니다. 앱 이용을 위해 사용자 휴대폰 번호 수집에 동의하고 필수 권한 허용을 모두 승인해야 합니다. 내용을 확인하고 '예'를 눌러 다음으로 진행해 주세요.";
const page3 = "앱 접근 권한 안내 입니다. 접근 권한과 필요한 이유를 확인하고 화면 하단 확인 버튼을 눌러서 다음으로 진행해 주세요.";
const page4 = "내 기기 위치 접근을 허용하겠습니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page5 = "전화를 걸고 관리하도록 허용하겠습니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page6 = "사진, 미디어, 파일에 접근을 허용하겠습니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page7 = "사진 촬영과 동영상 녹화를 허용하겠습니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page8 = "오디오 녹음 권한을 허용하겠습니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page9 = "안전신문고가 실행되었습니다. 안전 신고, 생활 불편 신고, 불법 주정차 신고, 코로나19 신고 버튼이 있습니다. 실습에서는 안전 신고를 진행하겠습니다. 안전신고 오른쪽 유형 선택 버튼을 눌러주세요.";
const page10 = "실습에서는 안전 신고 유형 중 첫 번째, 도로, 시설물 파손 및 고장 버튼을 눌러서 선택해 주세요.";
const page11 = "도로, 시설물 파손 및 고장 신고 안내 사항을 확인하고 화면 하단 확인을 눌러주세요.";
const page12 = "안전 신고 유형이 도로, 시설물 파손 및 고장으로 선택되었습니다. 사진/동영상 항목 오른쪽에 있는 촬영/앨범 버튼을 눌러주세요.";
const page13 = "사진과 동영상을 바로 촬영하거나, 촬영한 사진과 동영상을 휴대폰 앨범에서 선택하여 첨부할 수 있습니다. 실습에서는 사진촬영으로 진행하겠습니다. 사진촬영 버튼을 눌러주세요.";
const page14 = "카메라 기능 자동 종료 알림입니다. 확인하고 사진 촬영을 시작하겠습니다. 촬영 버튼을 눌러주세요.";
const page15 = "카메라가 실행됩니다. 카메라의 동그라미 촬영 버튼을 눌러서 시설물의 파손된 부분을 촬영해 주세요.";
const page16 = "사진이 촬영되었습니다. 사진을 다시 찍고 싶다면, 화면 하단의 '다시 시도' 버튼을 눌러서 재촬영 할 수 있습니다. 실습에서는 이 사진을 사용하겠습니다. 화면 하단 검은색 영역의 확인 버튼을 눌러주세요.";
const page17 = "사진 첨부가 완료되었습니다. 정확한 발생 지역 제공은 민원 해결에 매우 중요합니다. 발생지역을 선택하겠습니다. 발생지역 항목 오른쪽에 위치 찾기 버튼을 눌러주세요.";
const page18 = "위치 찾기 화면에서는 주소 검색과 키워드 검색 기능을 제공합니다. 기본 위치는 GPS에서 확인한 현재 위치가 표시됩니다. 실습에서는 GPS에서 확인한 현재 위치로 진행하겠습니다. 위치를 확인하고, 화면 하단 파란색 위치 선택 버튼을 눌러주세요.";
const page19 = "위치 선택이 완료되었습니다. 민원 내용을 추가하겠습니다. 실습에서는 '철조망에 보행자가 다칠 수 있어요'라고 내용을 입력하였습니다. 화면 하단 파란색 제출 버튼을 눌러주세요.";
const page20 = "인적 사항 입력은 선택입니다. 실습에서는 아니오를 눌러서 진행해 주세요.";
const page21 = "안전신문고 앱에서 보내는 알림 수신 동의 안내입니다. 알림 받기를 원하시면 '예'를, 알림을 받고 싶지 않다면 '아니오'를 눌러서 진행해 주세요.";
const page22 = "인적 사항은 선택 항목이므로 실습에서는 인적 사항을 입력하지 않고 제출하겠습니다. 화면 하단 파란색 제출 버튼을 눌러주세요.";
const page23 = "최종 제출 확인 안내입니다. 신고내용 제출 완료를 위해 예를 눌러주세요.";
const page24 = "안전신고 접수가 완료되었습니다. 비회원은 신고번호를 알아야 처리 과정 및 조치 결과 조회가 가능합니다. 화면 하단 홈으로 버튼을 눌러주세요.";
const page25 = "안전신문고 첫 화면입니다. 안전신문고 서비스를 활용하여 편리하게 민원을 처리할 수 있습니다.";

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
    page25
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0.9121813031161473,
    startRateY: 0.8030534351145038,
    endRateX: 0.08498583569405099,
    endRateY: 0.7038167938931298,
};

const coordinate3 = {
    startRateX: 0.9660056657223796,
    startRateY: 0.899236641221374,
    endRateX: 0.031161473087818695,
    endRateY: 0.8076335877862595,
};

const coordinate4 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6106870229007634,
    endRateX: 0.6798866855524079,
    endRateY: 0.5343511450381679,
};

const coordinate5 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6106870229007634,
    endRateX: 0.6798866855524079,
    endRateY: 0.5343511450381679,
};

const coordinate6 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6106870229007634,
    endRateX: 0.6798866855524079,
    endRateY: 0.5343511450381679,
};

const coordinate7 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6106870229007634,
    endRateX: 0.6798866855524079,
    endRateY: 0.5343511450381679,
};

const coordinate8 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6106870229007634,
    endRateX: 0.6798866855524079,
    endRateY: 0.5343511450381679,
};

const coordinate9 = {
    startRateX: 0.6713881019830028,
    startRateY: 0.16793893129770993,
    endRateX: 0.9773371104815864,
    endRateY: 0.25190839694656486,
};

const coordinate10 = {
    startRateX: 0.9150141643059491,
    startRateY: 0.3114503816793893,
    endRateX: 0.08781869688385269,
    endRateY: 0.22748091603053436,
};

const coordinate11 = {
    startRateX: 0.5014164305949008,
    startRateY: 0.8412213740458016,
    endRateX: 0.0764872521246459,
    endRateY: 0.7572519083969466,
};

const coordinate12 = {
    startRateX: 0.9915014164305949,
    startRateY: 0.34961832061068704,
    endRateX: 0.6572237960339944,
    endRateY: 0.2748091603053435,
};

const coordinate13 = {
    startRateX: 0.08498583569405099,
    startRateY: 0.22290076335877862,
    endRateX: 0.9150141643059491,
    endRateY: 0.31297709923664124,
};

const coordinate14 = {
    startRateX: 0.1048158640226629,
    startRateY: 0.3786259541984733,
    endRateX: 0.8951841359773371,
    endRateY: 0.47480916030534354,
};

const coordinate15 = {
    startRateX: 0.254957507082153, startRateY: 0.8458015267175573, endRateX: 0.7195467422096318, endRateY: 0.9984732824427481
};

const coordinate16 = {
    startRateX: 0.9291784702549575, startRateY: 0.9908396946564886, endRateX: 0.4985835694050991, endRateY: 0.8870229007633588
};

const coordinate17 = {
    startRateX: 0.9886685552407932,
    startRateY: 0.6091603053435114,
    endRateX: 0.6657223796033994,
    endRateY: 0.5206106870229008,
};

const coordinate18 = {
    startRateX: 0.028328611898016998,
    startRateY: 0.7618320610687023,
    endRateX: 0.9745042492917847,
    endRateY: 0.8458015267175573,
};

const coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate20 = {
    startRateX: 0.6175637393767706,
    startRateY: 0.5740458015267176,
    endRateX: 0.36827195467422097,
    endRateY: 0.48854961832061067,
};

const coordinate21 = {
    startRateX: 0.11898016997167139,
    startRateY: 0.2885496183206107,
    endRateX: 0.8838526912181303,
    endRateY: 0.366412213740458,
};

const coordinate22 = {
    startRateX: 0.49575070821529743,
    startRateY: 0.9969465648854962,
    endRateX: 0.0084985835694051,
    endRateY: 0.917557251908397,
};

const coordinate23 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.332824427480916,
    endRateX: 0.8781869688385269,
    endRateY: 0.40916030534351144,
};

const coordinate24 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate25 = {
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
    coordinate25
);
