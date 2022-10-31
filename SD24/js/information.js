const pageNum = 24;
const pageName = "SD24";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "비플제로페이로 상품권 없이 은행 계좌에서 즉시 결제하기 위해서 은행 계좌를 제로페이에 연결하는 실습을 진행하겠습니다. '계좌에서 제로페이 결제' 버튼을 눌러주세요.";
const page2 = "비플제로페이에 개인용 계좌를 등록해야만 '계좌에서 제로페이 결제' 개인용 서비스 이용이 가능합니다. 제로페이에 계좌를 등록하기 위해 확인을 눌러주세요.";
const page3 = "계좌관리 화면입니다. 제로페이 결제와 상품권 구매를 위한 계좌 정보를 관리합니다. 현재 등록된 계좌가 없습니다. 계좌 등록을 위해서 더하기 표시를 눌러주세요";
const page4 = "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 등록을 원하는 본인 명의의 계좌 은행을 선택해 주세요.";
const page5 = "이름은 자동으로 등록되어 있습니다. 계좌번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page6 = "계좌번호 입력이 완료되었습니다. ARS 인증 전화 수신을 위해 화면 하단 ARS 인증 버튼을 눌러주세요.";
const page7 = "전화를 받아서 ARS 인증을 진행해 주세요. 안내 음성을 잘 듣고 요청하는 정보를 키패드로 입력하면 인증됩니다. 실습에서는 화면을 눌러 다음으로 진행해 주세요.";
const page8 = "ARS 인증을 통해 계좌 등록이 완료되었습니다. 화면 하단 파란색 확인 버튼을 눌러주세요.";
const page9 = "계좌 연결이 완료되었습니다. 가맹점에서 비플제로페이로 결제하는 방법에는 크게 2가지가 있습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page10 = "첫 번째 방법은, 가맹점에서 상품을 구매할 때, 비플제로페이 앱의 바코드와 QR 코드를 활용해서 결제를 진행하는 방법입니다. 실습을 위해, 화면을 눌러서 다음으로 진행해 주세요.";
const page11 = "비플제로페이 메인 메뉴에서 '계좌에서 제로페이 결제' 버튼을 눌러주세요.";
const page12 = "연결해놓은 계좌가 보입니다. 화면의 오른쪽에 결제하기 버튼을 눌러주세요.";
const page13 = "은행 계좌에서 결제된다는 메시지와 함께, QR코드를 인식할 수 있는 화면과, 바코드 그림이 보이고 있습니다. 화면 하단의 바코드 영역을 확장하겠습니다. 바코드 영역을 눌러주세요.";
const page14 = "비플제로페이 앱에서 생성된 바코드와 QR코드를 확인할 수 있습니다. 그럼, 바코드와 QR코드를 통해 결제하는 방법을 확인하기 위해, 화면을 눌러서 다음으로 진행해 주세요.";
const page15 = "가맹점에서 물건을 구매할 때, 바코드나 QR코드를 매장 카운터에 보여주고, 이를 바코드 스캐너로 스캔하면 결제가 완료됩니다. 스캔을 하는 동시에 연결된 계좌에서 출금이 진행되고, 결제가 완료됩니다. 화면을 눌러서 다음으로 이동해 주세요.";
const page16 = "서울 디지털재단 가게에서 8,800원의 상품을 구매했다는 영수증이 발급되었습니다. 이제 화면을 눌러서 다음 결제 방법을 실습해 보겠습니다. 화면을 눌러주세요.";
const page17 = "두 번째 방법은 가맹점에서 상품을 구매할 때, 가맹점에 비치 또는 부착되어 있는 QR코드를 고객이 스캔해서 결제하는 방법입니다. 매장마다 고유의 QR코드가 있어서 이 코드를 스캔하면 매장의 결제 화면으로 연결되는 방식입니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page18 = "비플제로페이 메인 메뉴에서 '계좌에서 제로페이 결제' 버튼을 눌러주세요.";
const page19 = "연결해놓은 계좌가 보입니다. 화면의 오른쪽에 결제하기 버튼을 눌러주세요.";
const page20 = "은행 계좌에서 결제된다는 메시지와 함께, QR코드를 인식할 수 있는 화면과, 바코드 그림이 보이고 있습니다. 이번에는, 가맹점에 비치 및 부착되어있는 비플제로페이 QR코드를 스캔하겠습니다. QR코드를 화면에 인식해주세요. 실습에서는 QR코드 이미지를 눌러주세요.";
const page21 = "가맹점의 정보가 인식되고, 매장 결제 화면으로 연결되었습니다. 비플제로페이 가맹점으로 등록된 매장이라면, 이렇게 비플제로페이 앱을 활용해서 결제를 진행할 수 있습니다. 이제, 결제를 진행하기 위해서, 금액을 입력하겠습니다. 결제 금액 입력을 눌러서 12,300원을 입력하고 엔터 또는 확인을 눌러주세요.";
const page22 = "결제 금액에 12,300원이 입력되었습니다. 결제 금액에 직접 입력한 금액대로 결제가 진행되므로 결제 할 금액을 잘 확인하고 입력해주세요. 결제되는 계좌를 확인한 다음 결제하기를 눌러주세요.";
const page23 = "결제금액을 다시 한번 확인한 다음, 확인을 눌러서 결제를 완료해 보겠습니다. 확인을 눌러주세요.";
const page24 = "결제가 완료되었습니다. 서울 디지털재단 가게에서 12,300원의 상품을 구매했다는 영수증이 발급되었습니다. 이제, 비플제로페이 앱을 활용해서, 보다 편리한 소비생활을 누려보세요.";

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
    { page: 4, correctAnswer: "숫자만" },
    { page: 20, correctAnswer: "12300" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 20) {
                        if (this.value === answer) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 4) {
                        if (5 <= this.value.length && this.value.length <= 15 && isNaN(typeofAnswer) === false) {
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
    startRateX: 0.9490084985835694,
    startRateY: 0.8442748091603054,
    endRateX: 0.04815864022662889,
    endRateY: 0.6931297709923664,
};

const coordinate2 = {
    startRateX: 0.7280453257790368,
    startRateY: 0.5465648854961832,
    endRateX: 0.8895184135977338,
    endRateY: 0.6045801526717557,
};

const coordinate3 = {
    startRateX: 0.9461756373937678,
    startRateY: 0.4763358778625954,
    endRateX: 0.0453257790368272,
    endRateY: 0.216793893129771,
};

const coordinate4 = {
    startRateX: 0.042492917847025496,
    startRateY: 0.16793893129770993,
    endRateX: 0.9461756373937678,
    endRateY: 0.7938931297709924,
};

const coordinate5 = {
    startRateX: 0.059490084985835696,
    startRateY: 0.31755725190839695,
    endRateX: 0.9376770538243626,
    endRateY: 0.383206106870229,
};

const coordinate6 = {
    startRateX: 0,
    startRateY: 0.917557251908397,
    endRateX: 1,
    endRateY: 1,
};

const coordinate7 = {
    startRateX: 0.0056657223796034,
    startRateY: 0.0015267175572519084,
    endRateX: 0.9971671388101983,
    endRateY: 0.9984732824427481,
};

const coordinate8 = {
    startRateX: 0,
    startRateY: 0.917557251908397,
    endRateX: 1,
    endRateY: 1,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0.9490084985835694,
    startRateY: 0.8442748091603054,
    endRateX: 0.04815864022662889,
    endRateY: 0.6931297709923664,
};

const coordinate12 = {
    startRateX: 0.7053824362606232,
    startRateY: 0.17709923664122137,
    endRateX: 0.9178470254957507,
    endRateY: 0.28396946564885495,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0.7236641221374046,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0,
    startRateY: 0.4900763358778626,
    endRateX: 1,
    endRateY: 1,
};

const coordinate15 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate16 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate17 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};
const coordinate18 = {
    startRateX: 0.9490084985835694,
    startRateY: 0.8442748091603054,
    endRateX: 0.04815864022662889,
    endRateY: 0.6931297709923664,
};

const coordinate19 = {
    startRateX: 0.7053824362606232,
    startRateY: 0.17709923664122137,
    endRateX: 0.9178470254957507,
    endRateY: 0.28396946564885495,
};

const coordinate20 = {
    startRateX: 0,
    startRateY: 0.7267175572519083,
    endRateX: 1,
    endRateY: 0.20763358778625954,
};

const coordinate21 = {
    startRateX: 0.9008498583569405,
    startRateY: 0.4305343511450382,
    endRateX: 0.059490084985835696,
    endRateY: 0.3603053435114504,
};

const coordinate22 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.9190839694656489,
    endRateX: 0.9971671388101983,
    endRateY: 1,
};

const coordinate23 = {
    startRateX: 0.49575070821529743,
    startRateY: 0.5786259541984733,
    endRateX: 0.9858356940509915,
    endRateY: 0.6473282442748092,
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
