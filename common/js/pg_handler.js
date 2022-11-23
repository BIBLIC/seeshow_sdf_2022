var page_num = 0;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const ctrlbar = document.querySelector('.ctrlbar');
const textModal = document.getElementById("textModal");
const size_btn = document.getElementById("size_btn");


//popovers 초기화 작업
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//*******************************************************************************
//**************************+   이벤트 동작   +*********************************** 

//페이지 로드 시 전체 동작 코드 (DOM 로딩 후 동작)
$(document).ready(function () {
    firstPageLoader();
    console.log(audioArray);
});



//시작 페이지 로딩
function firstPageLoader() {
    $("#p1").addClass("active");
    $(".pactive").fadeOut(0).promise().done(function () {
        $(".pactive").toggleClass("pactive");
        $("#p" + page_num).toggleClass("pactive");
        $(".pactive").fadeIn(0);
    });
}


//*******************************************************************************
//**************************+    버튼 제어   +*********************************** 

//시작하기 버튼 클릭 후 컨트롤 바 내부 변경
$('#start-btn').click(function () {
    var ctrlBar_inner = [
        `
            <div class="baricon_wrap prev" id="prev_btn">
                <div class="baricon"></div>
                <div class="bartext">이전</div>
            </div>
            <div class="baricon_wrap pause" id="pause_btn">
                <!--추가하기 -->
                <div class="baricon"></div>
                <div class="bartext">멈춤</div>
            </div>
            <div class="baricon_wrap" id="hint_btn">
                <div class="baricon"></div>
                <div class="bartext">힌트</div>
            </div>
            <div class="baricon_wrap" id="size_btn" >
                <select class="form-select form-select-lg mb-2" aria-label=".form-select-lg example">
                    <option selected>T</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
                <div class="bartext">크기</div>
            </div>
            <div class="baricon_wrap next" id="next_btn">
                <div class="baricon"></div>
                <div class="bartext">다음</div>
            </div>
        `
    ]
    ctrlbar.innerHTML = ctrlBar_inner;

    //시작하기 버튼 클릭 후 페이지 1로 전환되게 하기
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
    console.log(page_num);//나중에 다 지우기
    audioArray[page_num - 1].load();// 해당 페이지 오디오 로딩
    audioArray[page_num - 1].play();// 해당 페이지 오디오 재생
});


//다음 버튼 : 클릭 시 페이지 이동, 해당 페이지오디오만 재생(배열 인덱스라 페이지 넘버-1) 
$(document).on("click", "#next_btn", function () {
    //$('#next_btn').click(function () {
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
$(document).on("click", "#prev_btn", function () {
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
$(document).on("click", "#pause_btn", function () {
    audioArray[page_num - 1].pause();
});


//크기 버튼 : 클릭 시 텍스트 모달 띄우기
// $(document).on("click", "#size_btn", function () {
//     $('#textModal').modal('show');
//     $('.modal-backdrop').remove();
// });

// 크기 모달 팝오버
// const { createPopper } = Popper;
// createPopper(size_btn, textModal, {
//     placement: 'top',
//     modifiers: [
//         {
//             name: 'offset',
//             options: {
//                 offset: [0,0],
//             },
//         },
//     ],
// });


function next(page_num) {
    console.log('cc');
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
    console.log(page_num);
    audioArray[page_num - 1].load();
    audioArray[page_num - 1].play();
    if (page_num > 1) {
        audioArray[page_num - 2].pause();
    }

}


//*******************************************************************************
//**************************+    클릭 제어   +*********************************** 

//특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
document.querySelector("main").addEventListener("click", function (e) {//메인 영역에서만 이벤트 발생
    for (i = 0; i < pageClickArea.length; i++) {
        if (page_num === pageClickArea[i].page) {//현재 페이지와 pageClickArea의 페이지 같으면
            let clickableArea = pageClickArea[i].correctAnswer;
            console.log("현재 페이지 ", page_num, "정답은", clickableArea); //마지막에 모두 지우기
            //alert(answer);
            console.log("클릭한 요소는 ", e.target.className);


            if (e.target.className.includes(clickableArea)) {
                //맞게 클릭하면
                console.log("correct");
                next(page_num);
            } else {
                //틀리게 클릭하면
                $('#staticBackdrop').modal('show');
            }

            //let answer = inputAnswer[i].correctAnswer;

            // document.querySelector(".input_answer").addEventListener("keydown", function (e) {

            //     console.log('ss');
            //     // if (event.keyCode === 13) {
            //     //     if (this.value === answer) {
            //     //         //handleClickBox();
            //     //         alert("성공");
            //     //     } else if (this.value !== answer) {
            //     //         alert("실패");
            //     //     }
            //     // }
            // });

        }
    }
})