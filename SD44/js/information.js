const pageNum = 14;
const pageName = "SD44";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.gif`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "통화 내용을 듣고 보이스 피싱인지 아닌지 생각하고 O,X로 답변해주세요. 화면을 눌러서 다음으로 진행해 주세요.";
const page2 = "1번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다. 잘 들어보세요.";
const page3 = "디지털 범죄 보이스피싱 1번 통화가 재생 중입니다. 통화를 듣고 보이스피싱인지 아닌지 선택해 주세요.";
const page4 = "1번 통화는 보이스 피싱입니다. 저금리 대출이 가능하다며 접근하는 수법입니다. 계약서를 위임해 제출해 주겠다며 수수료를 요구합니다. 은행 및 대출 기관은 어떠한 명목으로도 선입금을 요구하지 않습니다. 문자, 전화로 연락받는 저금리 대출 상품 대부분은 보이스피싱에 해당합니다.";
const page5 = "2번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page6 = "디지털 범죄 보이스피싱 2번 통화가 재생 중입니다. 통화를 듣고 보이스피싱인지 아닌지 선택해 주세요.";
const page7 = "2번 통화는 보이스 피싱입니다. 수사 기관을 사칭해 명의가 도용되었다고 접근합니다. 대포 통장에 이용됐다며 개인 정보를 요구하는 경우가 많습니다. 수사 기관은 통화나 문자로 개인 정보나 금전을 요구하지 않는다는 점을 꼭 기억해 주세요.";
const page8 = "3번 통화 듣기 버튼을 누르면 통화 재생이 시작됩니다.";
const page9 = "디지털 범죄 보이스피싱 3번 통화가 재생 중입니다. 통화를 듣고 보이스피싱인지 아닌지 선택해 주세요.";
const page10 = "디지털 범죄 보이스피싱 3번 통화가 재생 중입니다.";
const page11 = "3번 통화는 보이스 피싱입니다. 수사 기관을 사칭해 접근합니다. 녹취 조사는 존재하지 않는 수사 기법이므로, 녹취를 핑계로 개인 정보를 요구하는 것을 주의해야 합니다. 수사 기관의 연락을 받았다면 사무실 번호, 소속, 이름을 받고 직접 해당 기관을 통해 확인하세요. 서울중앙지검이 운영하는 찐센터에서도 진위 여부를 확인할 수 있습니다.";
const page12 = "디지털 범죄 보이스피싱 4번 통화가 재생 중입니다. 통화를 듣고 보이스피싱인지 아닌지 선택해 주세요.";
const page13 = "4번 통화는 보이스 피싱입니다. 저금리 대출을 핑계로 접근하는 수법은 대표적인 보이스피싱의 유형 중 하나입니다. 저금리 대출을 위한 고금리 대출을 권유하는 경우도 있습니다. 대출을 권유하는 사람이 금융 회사의 직원인지, 저금리 대출이 정식 등록 된 대출 모집인지 확인해야 합니다. 또한, 문자나 전화로 권유받는 저금리 대출은 보이스 피싱일 확률이 높으니 항상 주의해 주셔야 합니다.";
const page14 = "준비한 퀴즈를 모두 완료하셨습니다. 감사합니다.";

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


const inputPage = [{ page: null, correctAnswer: null }];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let answer = inputPage[i].correctAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 15) {
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
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate2 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate3 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate4 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate5 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate6 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate7 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate8 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate9 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate10 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate11 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate12 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
};

const coordinate13 = {
    startRateX: 0.11331444759206799, startRateY: 0.8241590214067278, endRateX: 0.8781869688385269, endRateY: 0.981651376146789
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
