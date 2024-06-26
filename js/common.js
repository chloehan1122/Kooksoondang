$(document).ready(function(){

    // 헤더 mouse over 위치 조정
    $(".gnb").mouseover(function(){
        $("header").addClass("on")
    })
    $(".gnb").mouseleave(function(){
        $("header").removeClass("on")
    })

    // TOP 버튼 (.btn_top) => fixed?
    console.log($(".btn_top").offset().top)
    $(".btn_top").click(function(){
        $("html").animate({ scrollTop: 0 }, 400);
    });




















})