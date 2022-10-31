const pageNum = 28;
const pageName = "SD23";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 = "간편결제 서비스 비플제로페이는 가맹점에서 간편하게 결제가 가능하고, 특히 동네 상권에서 유용하게 활용할 수 있습니다. 비플제로페이 첫 화면을 눌러서 다음 단계로 진행해 주세요.";
const page2 = "비플제로페이는 회원가입이 필요합니다. 실습에서 입력한 정보는 저장 및 전송되지 않습니다. 회원가입을 위해 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page3 = "이름이 입력되었습니다. 화면 하단에 파란색 다음 버튼을 눌러주세요.";
const page4 = "주민등록번호 앞자리(생년월일 6자리)를 입력하고 엔터 또는 확인을 눌러주세요.";
const page5 = "주민등록번호 뒤 첫 자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page6 = "본인 인증에 사용할 휴대폰 통신사를 선택합니다. 통신사 항목을 눌러서 통신사 선택 상자를 열어주세요.";
const page7 = "통신사 선택에서 총 6가지 통신사 유형을 확인할 수 있습니다. 통신사를 눌러서 선택해 주세요.";
const page8 = "통신사가 선택되었습니다. 휴대폰 번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page9 = "인증 문자를 받기 위해 화면 하단 파란색 인증 문자 받기 버튼을 눌러주세요. ";
const page10 = "인증번호 받기를 누르면 비플제로페이 사용을 위한 약관이 안내됩니다. '약관에 모두 동의' 왼쪽 동그라미 부분을 눌러서 체크해 주세요.";
const page11 = "약관에 동의하고 화면 하단 다음 버튼을 누르면 인증번호가 휴대폰으로 전송됩니다.";
const page12 = "휴대폰 문자로 인증번호가 발송됩니다. 휴대폰에 수신된 인증번호를 입력합니다. 실습에서는 입력 창을 눌러서 224973을 입력하고 엔터 또는 확인을 눌러주세요.";
const page13 = "인증번호가 입력되었습니다. 파란색 인증 완료 버튼을 눌러주세요.";
const page14 = "본인인증이 완료되었습니다. 확인을 눌러 다음으로 진행해 주세요";
const page15 = "비플제로페이 회원가입이 완료되었습니다. 비플제로페이를 사용하려면 6자리 숫자로 된 거래 승인번호 설정이 필요합니다. '거래승인번호 설정하기'를 눌러주세요.";
const page16 = "여섯 자리 숫자로 거래 승인번호를 설정하겠습니다. 거래 승인번호는 결제할 때 비밀번호로 사용됩니다. 실습에서는 202112로 설정하겠습니다. 첫 번째 자리 2를 입력해 주세요.";
const page17 = "두 번째 자리 0을 입력해 주세요.";
const page18 = "세 번째 자리 2를 입력해 주세요.";
const page19 = "네 번째 자리 1을 입력해 주세요.";
const page20 = "다섯 번째 자리 1을 입력해 주세요.";
const page21 = "여섯 번째 자리 2를 입력해 주세요.";
const page22 = "방금 설정한 거래 승인번호 202112를 다시 한번 입력해 주세요. 첫 번째 자리 2를 입력해 주세요.";
const page23 = "두 번째 자리 0을 입력해 주세요.";
const page24 = "세 번째 자리 2를 입력해 주세요.";
const page25 = "네 번째 자리 1을 입력해 주세요.";
const page26 = "다섯 번째 자리 1을 입력해 주세요.";
const page27 = "여섯 번째 자리 2를 입력해 주세요.";
const page28 = "비밀번호 설정이 완료되었습니다. 이제 비플제로페이를 사용할 준비가 되었습니다. 다음 시간에는 비플제로페이에 계좌를 연결하는 실습을 진행하겠습니다.";

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
    page26,
    page27,
    page28
);

const inputPage = [
    { page: 1, correctAnswer: "이름" },
    { page: 3, correctAnswer: "숫자 6자리" },
    { page: 4, correctAnswer: "숫자 1자리" },
    { page: 7, correctAnswer: "숫자 10~11자리" },
    { page: 11, correctAnswer: "224973" },
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
                    if (pageNumber === 1) {
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
                    } else if (pageNumber === 7) {
                        if (10 <= this.value.length && this.value.length <= 11 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 11) {
                        if (this.value === answer) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    }
                }
                isKeyboardActive = false;
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
    startRateX: 0.0708215297450425,
    startRateY: 0.2015267175572519,
    endRateX: 0.9121813031161473,
    endRateY: 0.2732824427480916,
};

const coordinate3 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.9114503816793893,
    endRateX: 0.9971671388101983,
    endRateY: 0.9984732824427481,
};

const coordinate4 = {
    startRateX: 0.0764872521246459,
    startRateY: 0.3267175572519084,
    endRateX: 0.46742209631728043,
    endRateY: 0.39083969465648855,
};

const coordinate5 = {
    startRateX: 0.6062322946175638,
    startRateY: 0.3893129770992366,
    endRateX: 0.5382436260623229,
    endRateY: 0.3236641221374046,
};

const coordinate6 = {
    startRateX: 0.0708215297450425,
    startRateY: 0.18778625954198475,
    endRateX: 0.9376770538243626,
    endRateY: 0.27633587786259545,
};

const coordinate7 = {
    startRateX: 0.05099150141643059,
    startRateY: 0.516030534351145,
    endRateX: 0.9376770538243626,
    endRateY: 0.9801526717557252,
};

const coordinate8 = {
    startRateX: 0.0764872521246459,
    startRateY: 0.20458015267175572,
    endRateX: 0.9206798866855525,
    endRateY: 0.2748091603053435,
};

const coordinate9 = {
    startRateX: 0,
    startRateY: 0.9083969465648855,
    endRateX: 1,
    endRateY: 1,
};

const coordinate10 = {
    startRateX: 0.04815864022662889,
    startRateY: 0.6183206106870229,
    endRateX: 0.9546742209631728,
    endRateY: 0.6793893129770993,
};

const coordinate11 = {
    startRateX: 0,
    startRateY: 0.9083969465648855,
    endRateX: 1,
    endRateY: 1,
};

const coordinate12 = {
    startRateX: 0.08498583569405099,
    startRateY: 0.29770992366412213,
    endRateX: 0.9206798866855525,
    endRateY: 0.3648854961832061,
};

const coordinate13 = {
    startRateX: 0,
    startRateY: 0.516030534351145,
    endRateX: 1,
    endRateY: 0.6076335877862595,
};

const coordinate14 = {
    startRateX: 0.7393767705382436,
    startRateY: 0.5801526717557252,
    endRateX: 0.8781869688385269,
    endRateY: 0.6351145038167939,
};

const coordinate15 = {
    startRateX: 0.28895184135977336,
    startRateY: 0.6717557251908397,
    endRateX: 0.71671388101983,
    endRateY: 0.7282442748091603,
};

const coordinate16 = {
    startRateX: 0.5070821529745042,
    startRateY: 0.7755725190839695,
    endRateX: 0.24645892351274787,
    endRateY: 0.6946564885496184,
};

const coordinate17 = {
    startRateX: 0.7592067988668555,
    startRateY: 0.8473282442748091,
    endRateX: 0.9971671388101983,
    endRateY: 0.9206106870229007,
};

const coordinate18 = {
    startRateX: 0.5070821529745042,
    startRateY: 0.7755725190839695,
    endRateX: 0.24645892351274787,
    endRateY: 0.6946564885496184,
};

const coordinate19 = {
    startRateX: 0.2521246458923513,
    startRateY: 0.6931297709923664,
    endRateX: 0,
    endRateY: 0.7755725190839695,
};

const coordinate20 = {
    startRateX: 0.2521246458923513,
    startRateY: 0.6931297709923664,
    endRateX: 0,
    endRateY: 0.7755725190839695,
};

const coordinate21 = {
    startRateX: 0.5070821529745042,
    startRateY: 0.7755725190839695,
    endRateX: 0.24645892351274787,
    endRateY: 0.6946564885496184,
};

const coordinate22 = {
    startRateX: 0.7648725212464589,
    startRateY: 0.7770992366412214,
    endRateX: 0.5014164305949008,
    endRateY: 0.6961832061068702,
};

const coordinate23 = {
    startRateX: 0.7592067988668555,
    startRateY: 0.8534351145038168,
    endRateX: 1,
    endRateY: 0.9221374045801527,
};

const coordinate24 = {
    startRateX: 0.7648725212464589,
    startRateY: 0.7770992366412214,
    endRateX: 0.5014164305949008,
    endRateY: 0.6961832061068702,
};

const coordinate25 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7725190839694657,
    endRateX: 0.24362606232294617,
    endRateY: 0.6961832061068702,
};

const coordinate26 = {
    startRateX: 0.4985835694050991,
    startRateY: 0.7725190839694657,
    endRateX: 0.24362606232294617,
    endRateY: 0.6961832061068702,
};

const coordinate27 = {
    startRateX: 0.7648725212464589,
    startRateY: 0.7770992366412214,
    endRateX: 0.5014164305949008,
    endRateY: 0.6961832061068702,
};

const coordinate28 = {
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
    coordinate26,
    coordinate27,
    coordinate28
);
