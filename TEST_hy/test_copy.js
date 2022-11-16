//특정 영역 외 클릭시 이벤트 처리 (class 명으로 가져오기)
document.querySelector("body").addEventListener("click", function(e) {
    if(e.target.className == e.currentTarget.querySelector(".here").className) {
        console.log("correct")
    } else {
        console.log("wrong")
    }
})

$(document).ready(function(){
    jQuery.noConflict();
$('#staticBackdrop').modal('show'); 
 });

