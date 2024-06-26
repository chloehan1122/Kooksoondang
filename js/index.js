$(document).ready(function(){

    $("body").addClass("hidden");

    // // 연령제한 팝업[테스트]
    // $("#enter").click(function(event){
    //     event.preventDefault(); // 폼 제출 막기!!!
    //     $(".modal_back").addClass("hidden")
    //     $(".popup_age").addClass("hidden")
    // })
    
    // 연령제한 팝업
    $('#enter').click(function(e){
        e.preventDefault();

        // 값 정수로 변환
        let year = parseInt($('#user_year').val());
        let month = parseInt($('#user_month').val()) - 1; // JavaScript의 월은 0부터 시작
        let day = parseInt($('#user_day').val());

        if (isNaN(year) || isNaN(month) || isNaN(day)) {
            alert('생년월일을 올바르게 입력해주세요.');
            return;
        }

        let birthDate = new Date(year, month, day);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear(); // 일단 현재 연도에서 태어난 연도를 뺌
        let m = today.getMonth() - birthDate.getMonth(); // 현재 월에서 태어난 월을 뺌
        // 태어난 월이 아직 지나지 않았거나, 태어난 월이 같고 태어난 일이 아직 지나지 않은 경우
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
            // 여기서 m이 음수인 경우는 현재 월이 생일 월보다 이전인 경우입니다.
            // 이 경우 아직 생일이 지나지 않았으므로 나이를 1살 줄입니다.
            // m이 0이고 현재 일이 생일 일보다 이전인 경우도 생일이 지나지 않은 경우이므로 나이를 1살 줄입니다.
        }

        if (age >= 19) {
            $('.modal_back').addClass('hidden');
            $('.popup_age').addClass('hidden');
            $("body").removeClass("hidden");
        } else {
            alert('만 19세 이상만 이용이 가능합니다.');
            // $("body").addClass("hidden");
        }
    });

    // gnb 모바일 버튼
    $(".gnb_btn").click(function(){
        $(".modal_gnb").addClass("on")
        $(".gnb_mo").addClass("on")
        $("body").addClass("hidden")
    })
    $(".gnb_btn_close").click(function(){
        $(".modal_gnb").removeClass("on")
        $(".gnb_mo").removeClass("on")
        $("body").removeClass("hidden")
    })

    let winWidth = window.innerWidth;
    let intervalId;

    if(winWidth > 768) {
        // 탭버튼 + 슬라이드 => 두개 연결
        let count = 0;
        $(".ul_title>li").click(function(e){
            e.preventDefault()
            $(".ul_title>li").removeClass("on")
            $(this).addClass("on")
            count = $(this).index()
            $(".ul_train").css("transform",`translateX(calc(${-33.333*count}% - 50px))`)
        })

        intervalId = setInterval(function(){
            count++
            if(count>2){count=0}
            $(".ul_title>li").removeClass("on")
            $(".ul_title>li").eq(count).addClass("on")
            $(".ul_train").css("transform",`translateX(calc(${-33.333*count}% - 50px))`)
        },5000)
    } else{
        let count = 0;
        $(".ul_title>li").click(function(e){
            e.preventDefault()
            $(".ul_title>li").removeClass("on")
            $(this).addClass("on")
            count = $(this).index()
            $(".ul_train").css("transform",`translateX(calc(${-33.333*count}%))`).css("transition", "none")
        })
        
        if (intervalId) {
            clearInterval(intervalId); // setInterval 제거
        }
    }

    // a버튼 기능 무력화
    $("a.no_scroll").on('click', function(event){
        event.preventDefault();
    });
    

























})