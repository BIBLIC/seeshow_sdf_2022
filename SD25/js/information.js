const pageNum = 26;
const pageName = "SD25";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "간편 인증 및 인증서 발급을 위한 패스 앱 실습입니다. 패스 앱은 통신사에서 제공하는 서비스로, 이용 중인 통신사의 패스 앱을 설치해야만 이용이 가능합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page2 =
    "최초 패스 앱을 실행하면 간편 본인확인 정보를 등록합니다. 이름과 주민등록번호 앞자리, 주민등록번호 뒤 첫 자리, 그리고 휴대폰 번호가 필요합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page3 =
    "실습에서 입력한 정보는 저장 및 전송되지 않습니다. 간편 본인확인 정보 등록에서 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page4 = "주민등록번호 앞자리 (생년월일 6자리)를 입력하고 엔터 또는 확인을 눌러주세요.";
const page5 = "주민등록번호 뒤 첫 자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page6 = "휴대폰 번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page7 = "본인 확인을 위한 정보 입력이 완료되었습니다. 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page8 =
    "패스 앱 사용을 위한 필수 동의 항목과 선택 동의 항목이 있습니다. 실습에서는 'PASS 필수 항목 모두 동의' 왼쪽 체크 표시를 눌러주세요.";
const page9 =
    "PASS 필수 항목 모두 동의에 체크되었습니다. 선택 항목은 체크하지 않겠습니다. 화면 하단 검은색 다음 버튼을 눌러주세요.";
const page10 =
    "인증 번호가 입력한 휴대폰 번호로 전송됩니다. 실습에서는 인증번호에 759774를 입력하고 엔터 또는 확인을 눌러주세요.";
const page11 = "인증번호가 입력되었습니다. 화면 하단 검은색 확인 버튼을 눌러주세요.";
const page12 =
    "인증 진행 중입니다. 인증이 완료되면 비밀번호 등록 화면으로 이동합니다. 실습에서는 화면을 눌러서 다음으로 진행해 주세요.";
const page13 =
    "패스 앱을 실행하고 간편 인증을 진행할 때, 비밀번호 입력을 통해 인증이 완료됩니다. 따라서 사용할 비밀번호 설정이 필요합니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page14 =
    "비밀번호는 개인정보가 포함되거나 쉽게 예상할 수 없는 비밀번호를 설정해 주세요.  실습에서는 202112를 비밀번호로 설정하겠습니다. 설정할 비밀번호 첫 번째 자리, 2를 입력해 주세요.";
const page15 = "두 번째 자리 0을 입력해 주세요.";
const page16 = "세 번째 자리 2를 입력해 주세요.";
const page17 = "네 번째 자리 1을 입력해 주세요.";
const page18 = "다섯 번째 자리 1을 입력해 주세요.";
const page19 = "여섯 번째 자리 2를 입력해 주세요.";
const page20 =
    "비밀번호를 한 번 더 입력합니다. 반드시 처음 입력 한 비밀번호를 한 번 더 입력해야 합니다. 실습에서 설정한 비밀번호 202112의 첫 번째 자리, 2를 입력해 주세요.";
const page21 = "두 번째 자리 0을 입력해 주세요.";
const page22 = "세 번째 자리 2를 입력해 주세요.";
const page23 = "네 번째 자리 1을 입력해 주세요.";
const page24 = "다섯 번째 자리 1을 입력해 주세요.";
const page25 = "여섯 번째 자리 2를 입력해 주세요.";
const page26 = "입력하신 6자리 비밀번호가 설정되었고, 패스 가입이 완료되었습니다.";

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
    { page: 2, correctAnswer: "이름을" },
    { page: 3, correctAnswer: "숫자 6자리를" },
    { page: 4, correctAnswer: "숫자 1자리" },
    { page: 5, correctAnswer: "휴대폰 번호를 숫자만" },
    { page: 9, correctAnswer: "759774" },
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
                    if (pageNumber === 2) {
                        if (2 <= this.value.length && this.value.length <= 5 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 3) {
                        if (this.value.length === 6 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 4) {
                        if (
                            this.value === "0" ||
                            this.value === "1" ||
                            this.value === "2" ||
                            this.value === "3" ||
                            (this.value === "4" && isNaN(typeofAnswer) === false)
                        ) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 5) {
                        if (5 <= this.value.length && this.value.length <= 15 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 9) {
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
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate2 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate3 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.17251908396946564,
    endRateX: 0.9546742209631728,
    endRateY: 0.233587786259542,
};

const coordinate4 = {
    startRateX: 0.056657223796033995,
    startRateY: 0.3297709923664122,
    endRateX: 0.46742209631728043,
    endRateY: 0.38778625954198476,
};

const coordinate5 = {
    startRateX: 0.5240793201133145,
    startRateY: 0.3282442748091603,
    endRateX: 0.5864022662889519,
    endRateY: 0.38778625954198476,
};

const coordinate6 = {
    startRateX: 0.056657223796033995,
    startRateY: 0.48396946564885496,
    endRateX: 0.9461756373937678,
    endRateY: 0.5419847328244275,
};

const coordinate7 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.8916030534351145,
    endRateX: 0.9461756373937678,
    endRateY: 0.9740458015267176,
};

const coordinate8 = {
    startRateX: 0.0226628895184136,
    startRateY: 0.583206106870229,
    endRateX: 0.9745042492917847,
    endRateY: 0.6595419847328244,
};

const coordinate9 = {
    startRateX: 0.05099150141643059,
    startRateY: 0.899236641221374,
    endRateX: 0.9490084985835694,
    endRateY: 0.981679389312977,
};

const coordinate10 = {
    startRateX: 0.039660056657223795,
    startRateY: 0.1435114503816794,
    endRateX: 0.8413597733711048,
    endRateY: 0.20458015267175572,
};

const coordinate11 = {
    startRateX: 0.9461756373937678,
    startRateY: 0.9725190839694656,
    endRateX: 0.053824362606232294,
    endRateY: 0.8900763358778626,
};

const coordinate12 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate14 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.6992366412213741,
    endRateX: 0.9971671388101983,
    endRateY: 0.7740458015267175,
};

const coordinate15 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.8519083969465648,
    endRateX: 1,
    endRateY: 0.9282442748091603,
};

const coordinate16 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.6992366412213741,
    endRateX: 0.9971671388101983,
    endRateY: 0.7740458015267175,
};

const coordinate17 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.7740458015267175,
    endRateX: 0.660056657223796,
    endRateY: 0.850381679389313,
};

const coordinate18 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.7740458015267175,
    endRateX: 0.660056657223796,
    endRateY: 0.850381679389313,
};

const coordinate19 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.6992366412213741,
    endRateX: 0.9971671388101983,
    endRateY: 0.7740458015267175,
};

const coordinate20 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7755725190839695,
    endRateX: 1,
    endRateY: 0.8488549618320611,
};

const coordinate21 = {
    startRateX: 0.3314447592067989,
    startRateY: 0.7725190839694657,
    endRateX: 0.6685552407932012,
    endRateY: 0.8488549618320611,
};

const coordinate22 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7755725190839695,
    endRateX: 1,
    endRateY: 0.8488549618320611,
};

const coordinate23 = {
    startRateX: 0.3314447592067989,
    startRateY: 0.6992366412213741,
    endRateX: 0.660056657223796,
    endRateY: 0.7755725190839695,
};

const coordinate24 = {
    startRateX: 0.3314447592067989,
    startRateY: 0.6992366412213741,
    endRateX: 0.660056657223796,
    endRateY: 0.7755725190839695,
};

const coordinate25 = {
    startRateX: 0.6628895184135978,
    startRateY: 0.7755725190839695,
    endRateX: 1,
    endRateY: 0.8488549618320611,
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
