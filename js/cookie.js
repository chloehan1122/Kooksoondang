function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// function checkPopup() {
//     if (getCookie("hidePopup") != "true") {
//         document.getElementById("popup").style.display = "block";
//     } else {
//         document.getElementById("popup").style.display = "none";
//     }
// }

// 팝업 닫기 함수
// function closePopup() {
//     setCookie("hidePopup", "true", 1); // 1일 동안 쿠키 저장
//     document.getElementById("popup").style.display = "none";
// }

// 페이지 로드 시 팝업 상태 확인
// window.onload = function() {
//     checkPopup();
// }