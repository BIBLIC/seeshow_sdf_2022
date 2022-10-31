const pageNum = 31;
const pageName = "SD33";
for (j = 1; j <= pageNum; j++) {
    contentImage.push(`../assets/${pageName}/image/${j}.jpg`);
    audio = new Audio(`../assets/${pageName}/audio/${j}.mp3`);
    audioArray.push(audio);
}

const page1 =
    "비회원 로그인 실습을 진행한 후 민원 신청 실습을 진행해 주세요. 정부24 앱에서 주민등록등초본 발급 민원 신청을 실습하겠습니다. 정부 24 첫 화면의 자주 찾는 서비스 영역에서 주민등록등본(초본) 버튼을 눌러주세요.";
const page2 =
    "민원 안내 및 신청 정보를 확인해 주세요. 등본은 인터넷과 방문 신청 시 즉시 처리가 가능하고 인터넷으로 발급받으면 수수료가 무료입니다. 확인 후 화면 하단 신청하기 버튼을 눌러주세요.";
const page3 =
    "주민등록등본과 초본 중 주민등록등본으로 신청하겠습니다. 주민등록상의 주소를 확인하겠습니다. 화면 하단 시도 선택 상자를 눌러주세요.";
const page4 = "주민등록상의 주소를 선택해 주세요. 실습에서는 서울특별시를 선택하겠습니다. 서울특별시를 눌러주세요.";
const page5 = "화면 하단 시군구 선택 상자를 눌러주세요.";
const page6 = "실습에서는 강남구를 선택하겠습니다. 강남구를 눌러주세요.";
const page7 = "서울특별시 강남구로 주민등록상의 주소 선택이 완료되었습니다. 화면을 눌러서 다음으로 진행해 주세요.";
const page8 =
    "발급 형태 선택입니다. 기본 발급 형태로 신청하면 과거 주소 변동 사항을 제외한 모든 정보가 표시됩니다. 선택 발급을 눌러서 신청하면 발급 시 표시할 정보를 선택할 수 있습니다. 선택 발급을 살펴보겠습니다. 선택 발급을 눌러주세요.";
const page9 =
    "선택 발급은 과거의 주소 변동 사항, 세대 구성 정보, 세대 구성원 정보, 주민등록번호 뒷자리 중 표시할 정보만 선택하여 신청할 수 있습니다. 실습에서는 기본 발급으로 진행하겠습니다. 발급을 눌러주세요.";
const page10 = "수령 방법을 선택하겠습니다. 온라인 발급(본인 출력) 선택 상자를 눌러주세요.";
const page11 =
    "수령 방법에는 온라인과 우편 발급이 있습니다. 실습에서는 온라인 발급(본인 출력)으로 진행하겠습니다. 발급된 민원의 출력은 PC에서만 가능합니다. 온라인 발급 본인 출력을 눌러서 선택해 주세요.";
const page12 =
    "발급 형태와 수령 방법이 선택되었습니다. 화면 하단의 민원신청하기 버튼을 눌러서, 등본 발급 신청을 진행해 주세요.";
const page13 =
    "온라인으로 민원을 신청하기 위해서는 인증 절차가 필요합니다. 간편 인증을 활용하면 모바일에서도 손쉽게 인증이 가능합니다. 이번 실습에서는 간편 인증 패스인증서로 인증하겠습니다. 간편 인증 버튼을 눌러주세요.";
const page14 =
    "정부24에서 지원하는 간편 인증 서비스 중 통신사 패스로 인증하겠습니다. 서비스 선택에서 통신사 패스를 눌러주세요.";
const page15 =
    "통신사 패스가 선택되었습니다. 실습에서 입력한 정보는 저장 및 전송되지 않습니다. 이름을 입력하고 엔터 또는 확인을 눌러주세요.";
const page16 = "주민등록번호 앞자리 생년월일 6자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page17 = "주민등록번호 뒤 7자리를 입력하고 엔터 또는 확인을 눌러주세요.";
const page18 = "통신사 선택을 위해 통신사 선택 상자를 눌러주세요.";
const page19 =
    "SKT, KT, LGU+ 중 이용 중인 통신사를 선택해 주세요. 알뜰폰은 본인의 알뜰폰 서비스가 속한 통신망을 SKT, KT, LGU+ 중에서 선택해 주세요.";
const page20 = "010을 제외한 휴대폰 번호를 숫자만 입력하고 엔터 또는 확인을 눌러주세요.";
const page21 = "인증을 위해 필요한 정보가 입력되었습니다. 하단에 다음 버튼을 눌러서, 인증을 진행해 주세요.";
const page22 = "인증을 위해서 필수로 요구되는 이용약관 동의입니다. 모두 동의하고 인증 요청 버튼을 눌러주세요.";
const page23 =
    "정부 24에서 인증 요청한 내용을 승인하고, 패스 인증서에서 비밀번호를 입력하면 인증이 완료됩니다. 간편 로그인 요청 알림에서 보낸 이와 제목을 확인하고 이상이 없다면 인증하기를 눌러주세요.";
const page24 =
    "패스 통신사 인증 앱이 실행되었습니다. 패스 앱에서 설정한 비밀번호를 입력하면 정부 24에서 인증을 완료할 수 있습니다. 실습에서는, 2,0,2,1,1,2를 입력하겠습니다. 비밀번호 첫 번째 숫자, 2를 입력해 주세요.";
const page25 = "두 번째 숫자 0을 입력해 주세요.";
const page26 = "세 번째 숫자 2를 입력해 주세요.";
const page27 = "네 번째 숫자 1을 입력해 주세요.";
const page28 = "다섯 번째 숫자 1을 입력해 주세요.";
const page29 = "여섯 번째 숫자, 2를 입력해 주세요.";
const page30 = "패스 인증서 앱에서 인증이 완료되면 다시 정부24 앱이 실행됩니다. 화면 하단 인증 완료 버튼을 눌러주세요.";
const page31 =
    "간편 인증이 완료되고, 민원 신청이 처리되었습니다. 민원 사무 조회가 가능하며 실습에서 발급한 주민등록표등본(초본) 교부 민원은 처리 완료 상태입니다. 정부24를 이용하여 편리하게 민원 업무를 처리하세요.";

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
    page28,
    page29,
    page30,
    page31
);

const inputPage = [
    { page: 14, correctAnswer: "이름" },
    { page: 15, correctAnswer: "숫자 6자리" },
    { page: 16, correctAnswer: "숫자 7자리" },
    { page: 19, correctAnswer: "숫자 7~8자리" },
];

function handleInput(pageNumber) {
    for (i = 0; i < inputPage.length; i++) {
        if (pageNumber === inputPage[i].page) {
            DrawInputBox(coordinateArray[pageNumber]);
            let typeofAnswer;
            document.querySelector(".input-answer").addEventListener("keydown", function (event) {
                if (event.keyCode === 13) {
                    typeofAnswer = Number(this.value);
                    if (pageNumber === 14) {
                        if (2 <= this.value.length && this.value.length <= 5 && isNaN(typeofAnswer) === true) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 15) {
                        if (this.value.length === 6 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 16) {
                        if (this.value.length === 7 && isNaN(typeofAnswer) === false) {
                            handleClickBox();
                        } else {
                            alert(RETRY_MESSAGE);
                        }
                    } else if (pageNumber === 19) {
                        if (7 <= this.value.length && this.value.length <= 8 && isNaN(typeofAnswer) === false) {
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
    startRateX: 0.0679886685552408,
    startRateY: 0.5862595419847328,
    endRateX: 0.3654390934844193,
    endRateY: 0.7816793893129771,
};

const coordinate2 = {
    startRateX: 0.254957507082153,
    startRateY: 0.7007633587786259,
    endRateX: 0.7337110481586402,
    endRateY: 0.7862595419847328,
};

const coordinate3 = {
    startRateX: 0.9093484419263456,
    startRateY: 0.8610687022900764,
    endRateX: 0.0906515580736544,
    endRateY: 0.8,
};

const coordinate4 = {
    startRateX: 0.9093484419263456,
    startRateY: 0.23053435114503817,
    endRateX: 0.10198300283286119,
    endRateY: 0.13282442748091602,
};

const coordinate5 = {
    startRateX: 0.09348441926345609,
    startRateY: 0.8625954198473282,
    endRateX: 0.9036827195467422,
    endRateY: 0.9206106870229007,
};

const coordinate6 = {
    startRateX: 0.09915014164305949,
    startRateY: 0.13587786259541984,
    endRateX: 0.9065155807365439,
    endRateY: 0.22900763358778625,
};

const coordinate7 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate8 = {
    startRateX: 0.2719546742209632,
    startRateY: 0.18778625954198475,
    endRateX: 0.5070821529745042,
    endRateY: 0.24885496183206107,
};

const coordinate9 = {
    startRateX: 0.26912181303116145,
    startRateY: 0.24885496183206107,
    endRateX: 0.08781869688385269,
    endRateY: 0.18931297709923664,
};

const coordinate10 = {
    startRateX: 0.08781869688385269,
    startRateY: 0.5633587786259542,
    endRateX: 0.7535410764872521,
    endRateY: 0.6213740458015267,
};

const coordinate11 = {
    startRateX: 0.10198300283286119,
    startRateY: 0.25190839694656486,
    endRateX: 0.9093484419263456,
    endRateY: 0.35572519083969467,
};

const coordinate12 = {
    startRateX: 0.039660056657223795,
    startRateY: 0.7358778625954199,
    endRateX: 0.9546742209631728,
    endRateY: 0.8137404580152672,
};

const coordinate13 = {
    startRateX: 0.11048158640226628,
    startRateY: 0.46106870229007635,
    endRateX: 0.8895184135977338,
    endRateY: 0.5801526717557252,
};

const coordinate14 = {
    startRateX: 0.7280453257790368,
    startRateY: 0.31755725190839695,
    endRateX: 0.4985835694050991,
    endRateY: 0.1633587786259542,
};

const coordinate15 = {
    startRateX: 0.053824362606232294,
    startRateY: 0.583206106870229,
    endRateX: 0.9461756373937678,
    endRateY: 0.6717557251908397,
};

const coordinate16 = {
    startRateX: 0.49008498583569404,
    startRateY: 0.7709923664122137,
    endRateX: 0.059490084985835696,
    endRateY: 0.6824427480916031,
};

const coordinate17 = {
    startRateX: 0.5127478753541076,
    startRateY: 0.6809160305343511,
    endRateX: 0.943342776203966,
    endRateY: 0.7694656488549618,
};

const coordinate18 = {
    startRateX: 0.059490084985835696,
    startRateY: 0.7816793893129771,
    endRateX: 0.2804532577903683,
    endRateY: 0.867175572519084,
};

const coordinate19 = {
    startRateX: 0.09631728045325778,
    startRateY: 0.1801526717557252,
    endRateX: 0.9036827195467422,
    endRateY: 0.4778625954198473,
};

const coordinate20 = {
    startRateX: 0.5410764872521246,
    startRateY: 0.7816793893129771,
    endRateX: 0.943342776203966,
    endRateY: 0.8656488549618321,
};

const coordinate21 = {
    startRateX: 0.0028328611898017,
    startRateY: 0.8488549618320611,
    endRateX: 0.9971671388101983,
    endRateY: 0.9251908396946565,
};

const coordinate22 = {
    startRateX: 0.04815864022662889,
    startRateY: 0.8137404580152672,
    endRateX: 0.9518413597733711,
    endRateY: 0.9007633587786259,
};

const coordinate23 = {
    startRateX: 0.8696883852691218,
    startRateY: 0.6442748091603053,
    endRateX: 0.13031161473087818,
    endRateY: 0.5541984732824428,
};

const coordinate24 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.7725190839694657,
    endRateX: 0.9971671388101983,
    endRateY: 0.8473282442748091,
};

const coordinate25 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.8473282442748091,
    endRateX: 0.6628895184135978,
    endRateY: 0.9221374045801527,
};

const coordinate26 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.7725190839694657,
    endRateX: 0.9971671388101983,
    endRateY: 0.8473282442748091,
};

const coordinate27 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.6977099236641221,
    endRateX: 0.660056657223796,
    endRateY: 0.7694656488549618,
};

const coordinate28 = {
    startRateX: 0.3371104815864023,
    startRateY: 0.6977099236641221,
    endRateX: 0.660056657223796,
    endRateY: 0.7694656488549618,
};

const coordinate29 = {
    startRateX: 0.6685552407932012,
    startRateY: 0.7725190839694657,
    endRateX: 0.9971671388101983,
    endRateY: 0.8473282442748091,
};

const coordinate30 = {
    startRateX: 0,
    startRateY: 0,
    endRateX: 1,
    endRateY: 1,
};

const coordinate31 = {
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
    coordinate28,
    coordinate29,
    coordinate30,
    coordinate31
);
