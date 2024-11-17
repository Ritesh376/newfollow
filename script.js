var btn = document.querySelector(".follow-btn");
var isstatus = document.querySelector(".status h4");
var check = 0;
btn.addEventListener("click", function () {


    if (check == 0) {
        isstatus.innerHTML = "Friends";
        isstatus.style.color = "green";
        btn.innerHTML = "Unfollow";
        btn.style.backgroundColor = "red";

        check = 1;
    } else {
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        btn.innerHTML = "Follow";
        btn.style.backgroundColor = "blue";
        check = 0;
    }
});
