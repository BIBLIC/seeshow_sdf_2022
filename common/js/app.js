// 콘텐츠 연동
var JS = document.createElement("script");
JS.type = "text/javascript";
JS.charset = "UTF-8";
JS.src = "https://ssc.seoul.kr/common/js/content_tracking.js";
document.getElementsByTagName("head")[0].appendChild(JS);

// Audio Section
const pauseButton = document.querySelector(".pause-button");
const playButton = document.querySelector(".play-button");
const mobilePlayButton = document.querySelector(".mobile-play-button");
const mobilePauseButton = document.querySelector(".mobile-pause-button");

// Contents Description Section
const pageDescription = document.querySelector(".content-desc");
const pageDescArray = [];

// Asset
const contentImage = [];
const audioArray = [];

// user input answer
let pageVariable = 0;
let isInput = false;
let userInputValue = "";

// 좌표
const coordinateArray = [];

let imageWidth;
let imageHeight;

// Page Section
const pageArray = ["../common/content-1.html"];

const workingArea = document.getElementById("working-space");
const goToMainPage = document.querySelector("#go-main-page");
const goToIndexPage = document.querySelector(".go-home");
const goToNextPage = document.querySelector(".next");
const goToPreviousPage = document.querySelector(".previous");

const mobileGoToIndexPage = document.querySelector(".mobile-go-home");
const mobileGoToNextPage = document.querySelector(".mobile-next");
const mobileGoToPreviousPage = document.querySelector(".mobile-previous");

const indexNav = document.querySelector(".nav-index-contents");
const MainNav = document.querySelector(".nav-main-contents");

const practiceArea = document.querySelector(".practice-section");
const practiceClickArea = document.querySelector(".click-area");

const mainDesc = document.querySelector(".main-desc");

const navHeader = document.querySelector(".nav-header");
const fullScreenButton = document.querySelector(".full-screen-button");

const fontResizeSmall = document.querySelector(".small");
const fontResizeMedium = document.querySelector(".medium");
const fontResizeLarge = document.querySelector(".large");

const playSpeedSlow = document.querySelector(".speed-slow");
const playSpeedMedium = document.querySelector(".speed-medium");
const playSpeedFast = document.querySelector(".speed-fast");
let currentSpeed = 1;

const clickButton = document.createElement("button");
clickButton.className = "click-button";
let isClick = false;

const hintButton = document.querySelector(".hint-button");
const mobileHintButton = document.querySelector(".mobile-hint-button");

const HIDDEN_CLASSNAME = "hidden";
const HIDDEN_MOBILE_CLASSNAME = "mobile-hidden";

const RETRY_MESSAGE = "다시 생각해보세요!";

window.addEventListener("resize", function () {
    if (document.querySelector(".input-answer") === null) {
        imageWidth = document.querySelector(".bg-image").clientWidth;
        imageHeight = document.querySelector(".bg-image").clientHeight;
        buttonPositionCalcurate(coordinateArray[pageVariable]);
        for (i = 0; i < inputPage.length; i++) {
            if (pageVariable === inputPage[i].page) {
                DrawInputBox(coordinateArray[pageVariable]);
            }
        }
    }
});

function inputSizeHandler() {
    if (document.querySelector(".input-answer") !== null) {
        document.querySelector(".input-answer").addEventListener("focusin", function () {
            imageWidth = document.querySelector(".bg-image").clientWidth;
            imageHeight = document.querySelector(".bg-image").clientHeight;
        });

        document.querySelector(".input-answer").addEventListener("focusout", function () {
            imageWidth = document.querySelector(".bg-image").clientWidth;
            imageHeight = document.querySelector(".bg-image").clientHeight;
        });
    }
}

window.addEventListener("load", function () {
    imageWidth = document.querySelector(".bg-image").clientWidth;
    imageHeight = document.querySelector(".bg-image").clientHeight;
    setTimeout(scrollTo, 0, 0, 1);
});

// About Move Page
// Index 의 시작 버튼 기능 구현
goToMainPage.addEventListener("click", function () {
    fn_FinishPage();
    goToMain(pageVariable);
    showDescriptionText(pageVariable);
    fn_StartPage(pageVariable);
});

// 처음 단계, 이전 단계, 다음 단계 버튼 기능 구현
// 처음 단계 버튼 기능 구현
goToIndexPage.addEventListener("click", function () {
    fn_FinishPage();
    goToIndex(pageVariable);
    loadBackgroundImage(pageVariable);
    fn_StartPage(pageVariable);
});

mobileGoToIndexPage.addEventListener("click", function () {
    fn_FinishPage();
    goToIndex(pageVariable);
    fn_StartPage(pageVariable);
});

// 다음 단계 버튼 기능 구현
goToNextPage.addEventListener("click", function () {
    fn_FinishPage();
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
        showDescriptionText(pageVariable);
        inputSizeHandler();
    } else if (pageVariable === contentImage.length) {
        goToIndex(pageVariable);
        loadBackgroundImage(pageVariable);
        indexNav.classList.toggle(HIDDEN_CLASSNAME);
        MainNav.classList.toggle(HIDDEN_CLASSNAME);
    }
    fn_StartPage(pageVariable);
});

mobileGoToNextPage.addEventListener("click", function () {
    fn_FinishPage();
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
        inputSizeHandler();
    } else if (pageVariable === contentImage.length) {
        goToIndex(pageVariable);
        loadBackgroundImage(pageVariable);
        indexNav.classList.toggle(HIDDEN_CLASSNAME);
        MainNav.classList.toggle(HIDDEN_CLASSNAME);

        indexNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
        MainNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
        mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
    }
    fn_StartPage(pageVariable);
});

clickButton.addEventListener("click", function () {
    isClick = true;
});

practiceClickArea.addEventListener("click", function () {
    if (isClick === true) {
        fn_FinishPage();
        handleClickBox();
        isClick = false;
        fn_StartPage(pageVariable);
    } else if (document.querySelector(".click-button") === null) {
        return;
    } else {
        alert(RETRY_MESSAGE);
    }
});

// 이전 단계 버튼 기능 구현
goToPreviousPage.addEventListener("click", function () {
    fn_FinishPage();
    pageVariable--;
    if (pageVariable >= 0) {
        goToPrevious(pageVariable);
        showDescriptionText(pageVariable);
    } else {
        pageVariable = 0;
    }
    fn_StartPage(pageVariable);
});

mobileGoToPreviousPage.addEventListener("click", function () {
    fn_FinishPage();
    pageVariable--;
    if (pageVariable >= 0) {
        goToPrevious(pageVariable);
    } else {
        pageVariable = 0;
    }
    fn_StartPage(pageVariable);
});

// Play Speed Control
playSpeedSlow.addEventListener("click", function () {
    currentSpeed = 0.7;
    audioArray[pageVariable].playbackRate = currentSpeed;
});

playSpeedMedium.addEventListener("click", function () {
    currentSpeed = 1;
    audioArray[pageVariable].playbackRate = currentSpeed;
});

playSpeedFast.addEventListener("click", function () {
    currentSpeed = 1.3;
    audioArray[pageVariable].playbackRate = currentSpeed;
});

// About hint button
hintButton.addEventListener("click", function () {
    if (document.querySelector(".input-answer") !== null) {
        for (i = 0; i < inputPage.length; i++) {
            if (pageVariable === inputPage[i].page) {
                document.querySelector(".input-answer").placeholder = `${inputPage[i].correctAnswer} 입력하세요.`;
            }
        }
    } else {
        document.querySelector(".click-button").style.backgroundColor = "rgba(200, 150, 150, 0.5)";
    }
});

// About mobile hint button
mobileHintButton.addEventListener("click", function () {
    if (document.querySelector(".input-answer") !== null) {
        for (i = 0; i < inputPage.length; i++) {
            if (pageVariable === inputPage[i].page) {
                document.querySelector(".input-answer").placeholder = `${inputPage[i].correctAnswer}을 입력하세요.`;
            }
        }
    } else {
        document.querySelector(".click-button").style.backgroundColor = "rgba(200, 150, 150, 0.5)";
    }
});

// About Audio AutoPlay
pauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});

playButton.addEventListener("click", function () {
    audioArray[pageVariable].play();
});

// Mobile Audio AutoPlay

mobilePlayButton.addEventListener("click", function () {
    audioArray[pageVariable].load();
    audioArray[pageVariable].play();
});

mobilePauseButton.addEventListener("click", function () {
    audioArray[pageVariable].pause();
});

// handle local Storage function
function handleLocalStorage(pageNumber) {
    localStorage.setItem("pageNumber", pageNumber);
}

// handle load background image
function loadBackgroundImage(pageNumber) {
    if (document.querySelector(".bg-image") !== null) {
        practiceClickArea.removeChild(practiceClickArea.querySelector(".bg-image"));
    }
    let backgroundImage = document.createElement("img");
    backgroundImage.className = "bg-image";
    backgroundImage.src = contentImage[pageNumber];
    practiceClickArea.appendChild(backgroundImage);
}

function goToMain(pageNumber) {
    if (pageNumber === 0) {
        workingArea.src = pageArray[0];
        audioArray[pageNumber].load();
        audioArray[pageNumber].play();
        loadBackgroundImage(pageNumber);
        buttonPositionCalcurate(coordinateArray[pageNumber]);
        handleInput(pageNumber);
    }
}

function goToIndex(pageNumber) {
    pageVariable = 0;
    const previousPageNumber = parseInt(localStorage.getItem("pageNumber"));
    audioArray[previousPageNumber].pause();
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
}

function goToNext(pageNumber) {
    if (document.querySelector(".input-answer") !== null) {
        deleteInputBox();
    }
    imageWidth = document.querySelector(".bg-image").clientWidth;
    imageHeight = document.querySelector(".bg-image").clientHeight;
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
    audioArray[pageNumber].load();
    audioArray[pageNumber].play();
    audioArray[pageNumber - 1].pause();
    loadBackgroundImage(pageNumber);
    buttonPositionCalcurate(coordinateArray[pageNumber]);
    handleInput(pageNumber);
}

function goToPrevious(pageNumber) {
    if (document.querySelector(".input-answer") !== null) {
        deleteInputBox();
    }
    handleLocalStorage(pageNumber);
    workingArea.src = pageArray[0];
    audioArray[pageNumber].load();
    audioArray[pageNumber].play();
    audioArray[pageNumber + 1].pause();
    loadBackgroundImage(pageNumber);
    buttonPositionCalcurate(coordinateArray[pageNumber]);
    handleInput(pageNumber);
}

function showDescriptionText(pageNumber) {
    pageDescription.innerText = pageDescArray[pageNumber];
}

function handleClickBox() {
    pageVariable++;
    if (pageVariable >= 0 && pageVariable < contentImage.length) {
        goToNext(pageVariable);
        showDescriptionText(pageVariable);
    } else if (pageVariable === contentImage.length) {
        goToIndex(pageVariable);
        loadBackgroundImage(pageVariable);
        if (screen.width > 750) {
            indexNav.classList.toggle(HIDDEN_CLASSNAME);
            MainNav.classList.toggle(HIDDEN_CLASSNAME);
        } else if (screen.width <= 750) {
            indexNav.classList.toggle(HIDDEN_CLASSNAME);
            MainNav.classList.toggle(HIDDEN_CLASSNAME);

            indexNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
            MainNav.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
            mainDesc.classList.toggle(HIDDEN_MOBILE_CLASSNAME);
        }
    }
}

// handle Click Button
function buttonPositionCalcurate(coordinate) {
    let nowX;
    let nowY;
    let nowWidth;
    let nowHeight;

    if (document.querySelector(".click-button") !== null) {
        deleteButton();
    }
    if (coordinate.startRateX < coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.endRateY * imageHeight - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY > coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.startRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
    } else {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        nowWidth = coordinate.endRateX * imageWidth - nowX;
        nowHeight = coordinate.startRateY * imageHeight - nowY;
    }
    createButton(nowX, nowY, nowWidth, nowHeight);
}

function positionCalcurate(coordinate) {
    if (coordinate.startRateX < coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        endX = coordinate.endRateX * imageWidth;
        endY = coordinate.endRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY < coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.startRateY * imageHeight;
        endX = coordinate.startRateX * imageWidth;
        endY = coordinate.endRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
    } else if (coordinate.startRateX > coordinate.endRateX && coordinate.startRateY > coordinate.endRateY) {
        nowX = coordinate.endRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        endX = coordinate.startRateX * imageWidth;
        endY = coordinate.startRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
    } else {
        nowX = coordinate.startRateX * imageWidth;
        nowY = coordinate.endRateY * imageHeight;
        endX = coordinate.endRateX * imageWidth;
        endY = coordinate.startRateY * imageHeight;
        nowWidth = endX - nowX;
        nowHeight = endY - nowY;
    }
}

function createButton(currentX, currentY, currentWidth, currentHeight) {
    clickButton.style.position = "absolute";
    clickButton.style.left = currentX + "px";
    clickButton.style.top = currentY + "px";
    clickButton.style.width = currentWidth + "px";
    clickButton.style.height = currentHeight + "px";
    clickButton.style.backgroundColor = "transparent";
    practiceClickArea.appendChild(clickButton);
}

function deleteButton() {
    practiceClickArea.removeChild(practiceClickArea.querySelector(".click-button"));
}

// Draw user Input box
function DrawInputBox(coordinate) {
    if (document.querySelector(".input-answer") !== null) {
        deleteInputBox();
    }

    positionCalcurate(coordinate);
    createInput(nowX, nowY, nowWidth, nowHeight);
    practiceClickArea.removeChild(document.querySelector(".click-button"));
}

function createInput(currentX, currentY, currentWidth, currentHeight) {
    const inputAnswer = document.createElement("input");
    inputAnswer.className += "input-answer";
    inputAnswer.type = "text";
    inputAnswer.style.position = "absolute";
    inputAnswer.style.left = currentX + "px";
    inputAnswer.style.top = currentY + "px";
    inputAnswer.style.width = currentWidth + "px";
    inputAnswer.style.height = currentHeight + "px";
    inputAnswer.placeholder = "여기에 정답을 입력해주세요.";
    practiceClickArea.appendChild(inputAnswer);
}

function deleteInputBox() {
    practiceClickArea.removeChild(practiceClickArea.querySelector(".input-answer"));
}
