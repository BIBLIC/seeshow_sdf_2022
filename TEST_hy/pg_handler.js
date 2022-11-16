var page_num = 0;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const ctrlbar = document.querySelector('.ctrlbar');

//페이지 로드 시 전체 동작 코드 (DOM 로딩 후 동작)
$(document).ready(function(){
    firstPageLoader();
    console.log(audioArray);
  });

//오디오 배열 선언, 페이지 수 대로 배열에 mp3 넣기
const audioArray = [];
for (j = 1; j <= total_page; j++) {
    audio = new Audio(`${j}.mp3`);
    audioArray.push(audio);
}

//특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
document.querySelector("body").addEventListener("click", function (e) {
    for (i = 0; i < pageHandler.length; i++) {
        if (page_num === pageHandler[i].page) {//현재 페이지와 pageHandler의 페이지 같으면
            let answer = pageHandler[i].correctAnswer;
            console.log("현재 페이지 ", page_num, "정답은", answer); //마지막에 모두 지우기
            //alert(answer);
            if (e.target.className == answer) {
                //맞게 클릭하면
                console.log("correct")
            } else {
                //틀리게 클릭하면
                console.log("wrong")
            }
        }
    }
})


//시작 페이지 로딩
function firstPageLoader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
}

//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
$('#start-btn').click(function () {
    var ctrlBar_inner = [
        `
            <div class="baricon_wrap prev" id="prev_btn">
                <div class="baricon"></div>
                <div class="bartext">이전</div>
            </div>
            <div class="baricon_wrap pause">
                <!--추가하기 -->
                <div class="baricon"></div>
                <div class="bartext">멈춤</div>
            </div>
            <div class="baricon_wrap">
                <div class="baricon"></div>
                <div class="bartext">힌트</div>
            </div>
            <div class="baricon_wrap">
                <div class="baricon"></div>
                <div class="bartext">크기</div>
            </div>
            <div class="baricon_wrap next" id="next_btn">
                <div class="baricon"></div>
                <div class="bartext">다음</div>
            </div>
        `
    ]
    ctrlbar.innerHTML = ctrlBar_inner; 

    
        page_num = 1;
        $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
        $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
        $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
            //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
            //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
            $(".pactive").toggleClass("pactive");
            $("#p" + page_num).toggleClass("pactive");
            $(".pactive").fadeIn(0);
        });
 
    console.log(page_num);
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    

});


//다음 버튼 : 클릭 시 페이지 이동, 해당 페이지오디오만 재생(배열 인덱스라 페이지 넘버-1) 
$('#next_btn').click(function () {
    console.log('dd');
    if (page_num < total_page) {
        page_num += 1;
        $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
        $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
        $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
            //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
            //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
            $(".pactive").toggleClass("pactive");
            $("#p" + page_num).toggleClass("pactive");
            $(".pactive").fadeIn(0);
        });
    }
    console.log(page_num);
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }
});


//이전 버튼
$(".prev").click(function () {
    if (page_num > 0) {
        page_num -= 1;
        $(".active").removeClass("active");//active 클래스에서 'active'클래스 제거하고 -> 없어도 되는 코드
        $("#p" + page_num).addClass("active");//클릭한 곳에 'active' 클래스 추가
        $(".pactive").fadeOut(0).promise().done(function () {//pactive -> active 추가된 p?
            //promise() -> 자바스크립트 비동기 처리에 사용되는 객체 -> fadeout 완료 후 실행되는 함수
            //.toggleClass('추가클래스') //해당 jquery로 가져온 요소를 클릭마다 클래스를 추가하고 삭제.
            $(".pactive").toggleClass("pactive");
            $("#p" + page_num).toggleClass("pactive");
            $(".pactive").fadeIn(0);
        });
    }
    console.log(page_num);
    if (page_num != 0) {
        audioArray[page_num - 1].load();
        audioArray[page_num - 1].play();
    }
    audioArray[page_num].pause();
});

//정지 버튼
$(".pause").click(function () {
    audioArray[page_num - 1].pause();
});
