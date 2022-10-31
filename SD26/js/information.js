const pageNum = 11;
const pageName = "SD26";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "패스 앱 가입에 이어서, 금융기관, 공공기관 그리고 각종 웹사이트에서 인증수단으로 사용 가능한 패스 인증서 발급을 실습하겠습니다. 패스 인증서를 발급하기 위해서 패스 앱 첫 화면에서 인증서 관리 버튼을 눌러주세요.";
const page2 = "인증서 관리 화면입니다. 발급받은 인증서가 없을 경우 화면과 같이 새로운 인증서 발급 버튼과 인증 대기 목록을 확인할 수 있습니다. 패스 인증서 발급하기 영역을 눌러주세요.";
const page3 = "공동 인증서보다 더 간편한 패스 인증서 발급을 위한 약관 동의 절차입니다. 선택 항목은 체크하지 않고 인증서 발급을 진행하겠습니다. 서비스 이용을 위해 필수로 동의가 필요한 '서비스 필수 항목 모두 동의'에 체크해 주세요.";
const page4 = "서비스 필수 항목 모두 동의에 체크되었습니다. 선택 항목은 동의하지 않고 진행하겠습니다. 화면 하단 검은색 발급하기 버튼을 눌러주세요.";
const page5 = "인증서 발급을 위해서, 회원가입 실습 시 입력했던 비밀번호 202112를 입력하겠습니다. 번호 자판을 이용하여 비밀번호 첫 번째 자리 2를 눌러주세요.";
const page6 = "두 번째 자리 0을 눌러주세요.";
const page7 = "세 번째 자리 2를 눌러주세요.";
const page8 = "네 번째 자리 1을 눌러주세요.";
const page9 = "다섯 번째 자리 1을 눌러주세요.";
const page10 = "여섯 번째 자리 2를 눌러주세요.";
const page11 = "인증서 발급이 완료되었습니다. 이제 패스 인증서를 활용해 보세요.";

pageDescArray.push(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11);

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
    startRateX: 0.05099150141643059,
    startRateY: 0.332824427480916,
    endRateX: 0.9461756373937678,
    endRateY: 0.4717557251908397,
};

const coordinate2 = {
    startRateX: 0.9490084985835694,
    startRateY: 0.3984732824427481,
    endRateX: 0.05099150141643059,
    endRateY: 0.09618320610687023,
};

const coordinate3 = {
    startRateX: 0.0339943342776204,
    startRateY: 0.4152671755725191,
    endRateX: 0.9745042492917847,
    endRateY: 0.48091603053435117,
};

const coordinate4 = {
    startRateX: 0.509915014164306,
    startRateY: 0.8977099236641222,
    endRateX: 0.9461756373937678,
    endRateY: 0.9709923664122138,
};

const coordinate5 = {
    startRateX: 0.6742209631728046,
    startRateY: 0.9236641221374046,
    endRateX: 0.32577903682719545,
    endRateY: 1,
};

const coordinate6 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.7725190839694657,
    endRateX: 0,
    endRateY: 0.8519083969465648,
};

const coordinate7 = {
    startRateX: 0.6742209631728046,
    startRateY: 0.9236641221374046,
    endRateX: 0.32577903682719545,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.9267175572519084,
    endRateX: 0,
    endRateY: 0.8442748091603054,
};

const coordinate9 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.9267175572519084,
    endRateX: 0,
    endRateY: 0.8442748091603054,
};

const coordinate10 = {
    startRateX: 0.6742209631728046,
    startRateY: 0.9236641221374046,
    endRateX: 0.32577903682719545,
    endRateY: 1,
};

const coordinate11 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.10076335877862595,
    endRateX: 0.9461756373937678,
    endRateY: 0.3893129770992366,
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
    coordinate11
);
