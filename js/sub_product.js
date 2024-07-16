$(document).ready(function(){

    // "좋은술이야기" 탭&좌우 슬라이드
    $(".btn_sub_tab>li").click(function(e){
        e.preventDefault()
        $(".btn_sub_tab>li").removeClass("on")
        $(this).addClass("on")
        let slide = $(this).index()
        $(".sub_train").css("transform",`translateX(calc(${-33.333*slide}%))`)
    })






























})
