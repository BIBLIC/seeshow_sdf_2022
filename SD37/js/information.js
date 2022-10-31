const pageNum = 24;
const pageName = "SD37";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "주정차 단속 알림 서비스는 최초 단속 후 사전 알림 문자가 발송되어 과태료로 인한 피해를 최소화할 수 있는 서비스입니다. 필수 이용 권한 허용 확인을 눌러서 다음으로 진행해 주세요.";
const page2 =
    "주정차 단속 알림 서비스에서 필요로 하는 권한 허용을 묻는 창입니다. 허용을 눌러서 다음으로 진행해 주세요.";
const page3 = "주정차 단속 알림 서비스 첫 화면입니다. 이용 절차를 확인하고, 분홍색 지역 선택하기 버튼을 눌러주세요.";
const page4 =
    "서비스 가입하기 화면입니다. 주정차 단속 알림 서비스는 신청한 지역의 주정차 단속 정보만 알림을 받게 됩니다. 주의사항을 모두 확인하고, 가입 지역 선택을 위해 화면 중앙에 '지역을 선택하세요' 항목을 눌러주세요.";
const page5 =
    "거주지와 상관없이 가입하고 알림 받기 원하는 지역을 선택할 수 있습니다. 실습에서는 서울특별시를 선택하겠습니다. 서울특별시를 눌러주세요.";
const page6 =
    "서울특별시가 선택되었습니다. 알림 받기 원하는 지자체마다 각각 가입이 필요합니다. 실습에서는 가입 가능한 지자체 목록에서 강남구청을 선택하겠습니다. 강남구청 오른쪽 하늘색 가입하기 버튼을 눌러주세요.";
const page7 =
    "강남구 주정차 단속 알림 서비스 신청 화면으로 이동하였습니다. 서비스 가입을 위해 주요 메뉴에서 서비스 신청 버튼을 눌러주세요.";
const page8 =
    "서비스 신청은 총 네 단계로 진행됩니다. 개인 정보 수집 및 이용에 대한 동의를 진행하겠습니다. 내용을 확인하고 '동의합니다'를 눌러서 선택해 주세요.";
const page9 = "'동의합니다'가 선택되었습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page10 = "개인 정보 위탁 동의 절차입니다.내용을 확인하고 '동의합니다'를 눌러주세요.";
const page11 =
    "개인 정보 위탁 동의가 선택되었습니다. 개인 정보의 제3자에 대한 공유 및 제공 동의 내용을 확인하고, '동의합니다'를 눌러주세요.";
const page12 = "개인 정보의 제3자에 대한 공유 및 제공 동의가 선택되었습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page13 = "유의사항 동의입니다. 내용을 확인하고 '동의합니다'를 눌러주세요.";
const page14 = "서비스 이용을 위한 필수 항목에 동의가 완료되었습니다. 화면 하단 검은색 '동의합니다'버튼을 눌러주세요.";
const page15 =
    "서비스 가입 정보 입력 화면입니다. 실습에서 입력한 정보는 저장 및 전송되지 않습니다. 차량번호 입력을 눌러서 차량번호를 입력하고 엔터 또는 확인을 눌러주세요.";
const page16 =
    "차량번호가 입력되었습니다. 핸드폰 번호 항목에 핸드폰 번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page17 =
    "핸드폰 번호가 입력되었습니다. 스팸 방지를 위한 자동 방지 번호를 입력해 주세요. 화면에 보이는 숫자 95770을 입력하고 엔터 또는 확인을 눌러주세요.";
const page18 = "모든 항목이 입력되었습니다. 화면 하단 검은색 '정보 입력 완료' 버튼을 눌러주세요.";
const page19 =
    "입력한 핸드폰 번호로 인증 번호가 발송 중입니다. 핸드폰 문자로 수신된 인증번호를 인증번호에 입력하면 됩니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page20 =
    "실습에서는 202112를 인증번호에 입력해 주세요. 인증번호 입력을 눌러서 202112를 입력하고 엔터 또는 확인을 눌러주세요.";
const page21 = "인증번호가 입력되었습니다. 화면 하단 검은색 '인증 완료' 버튼을 눌러주세요.";
const page22 = "인증이 완료되었습니다. 확인 버튼을 눌러서 다음으로 진행해 주세요.";
const page23 =
    "신청 확인 단계에서는 입력한 차량번호의 가입신청 가능 여부와 입력한 차량 번호와 핸드폰 번호를 확인합니다. 정보를 확인하고 오류가 없다면 화면 하단 검은색 확인 버튼을 눌러주세요.";
const page24 =
    "서울특별시 강남구의 주정차 단속 알림 서비스 가입이 완료되었습니다. 알림 받기 원하는 다른 지자체 주정차 단속 알림 서비스에도 가입해 주세요.";

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
    page24
);

const inputPage = [
    { page: 14, correctAnswer: "차량번호" },
    { page: 15, correctAnswer: "숫자 10~11자리" },
    { page: 16, correctAnswer: "95770" },
    { page: 19, correctAnswer: "202112" },
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
                    if (pageNumber === 14) {
                        if (2 <= this.value.length && this.value.length <= 8 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 15) {
                        if (10 <= this.value.length && this.value.length <= 11 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 16) {
                        if (this.value === answer) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 19) {
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
    startRateX: 0.9235127478753541,
    startRateY: 0.6076335877862595,
    endRateX: 0.6685552407932012,
    endRateY: 0.5267175572519084,
};

const coordinate2 = {
    startRateX: 0.9235127478753541,
    startRateY: 0.6076335877862595,
    endRateX: 0.6685552407932012,
    endRateY: 0.5267175572519084,
};

const coordinate3 = {
    startRateX: 0.9773371104815864,
    startRateY: 0.8198473282442749,
    endRateX: 0.0226628895184136,
    endRateY: 0.7267175572519083,
};

const coordinate4 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.3801526717557252,
    endRateX: 0.9745042492917847,
    endRateY: 0.4732824427480916,
};

const coordinate5 = {
    startRateX: 0.0708215297450425,
    startRateY: 0.11908396946564885,
    endRateX: 0.9235127478753541,
    endRateY: 0.216793893129771,
};

const coordinate6 = {
    startRateX: 0.6968838526912181,
    startRateY: 0.5633587786259542,
    endRateX: 0.9886685552407932,
    endRateY: 0.6366412213740458,
};

const coordinate7 = {
    startRateX: 0.943342776203966,
    startRateY: 0.6778625954198473,
    endRateX: 0.49291784702549574,
    endRateY: 0.4381679389312977,
};

const coordinate8 = {
    startRateX: 0.1813031161473088,
    startRateY: 0.749618320610687,
    endRateX: 0.49291784702549574,
    endRateY: 0.8076335877862595,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.49291784702549574,
    startRateY: 0.48244274809160304,
    endRateX: 0.19830028328611898,
    endRateY: 0.42900763358778626,
};

const coordinate11 = {
    startRateX: 0.23512747875354106,
    startRateY: 0.8244274809160306,
    endRateX: 0.5325779036827195,
    endRateY: 0.8778625954198473,
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
    startRateX: 0.18696883852691218,
    startRateY: 0.6534351145038167,
    endRateX: 0.4985835694050991,
    endRateY: 0.7083969465648855,
};

const coordinate14 = {
    startRateX: 0.2719546742209632,
    startRateY: 0.7389312977099237,
    endRateX: 0.7280453257790368,
    endRateY: 0.8473282442748091,
};

const coordinate15 = {
    startRateX: 0.20396600566572237,
    startRateY: 0.2824427480916031,
    endRateX: 0.9235127478753541,
    endRateY: 0.34961832061068704,
};

const coordinate16 = {
    startRateX: 0.2096317280453258,
    startRateY: 0.4549618320610687,
    endRateX: 0.9235127478753541,
    endRateY: 0.517557251908397,
};

const coordinate17 = {
    startRateX: 0.21246458923512748,
    startRateY: 0.6885496183206107,
    endRateX: 0.8753541076487252,
    endRateY: 0.7404580152671756,
};

const coordinate18 = {
    startRateX: 0.254957507082153,
    startRateY: 0.8259541984732824,
    endRateX: 0.7422096317280453,
    endRateY: 0.9221374045801527,
};

const coordinate19 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate20 = {
    startRateX: 0.24645892351274787,
    startRateY: 0.516030534351145,
    endRateX: 0.9263456090651558,
    endRateY: 0.5877862595419847,
};

const coordinate21 = {
    startRateX: 0.29461756373937675,
    startRateY: 0.6244274809160305,
    endRateX: 0.7053824362606232,
    endRateY: 0.7221374045801526,
};

const coordinate22 = {
    startRateX: 0.7280453257790368,
    startRateY: 0.5389312977099237,
    endRateX: 0.8923512747875354,
    endRateY: 0.6091603053435114,
};

const coordinate23 = {
    startRateX: 0.17563739376770537,
    startRateY: 0.7847328244274809,
    endRateX: 0.5070821529745042,
    endRateY: 0.8885496183206106,
};

const coordinate24 = {
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
    coordinate24
);
