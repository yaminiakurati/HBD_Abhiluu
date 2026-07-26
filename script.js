function openGift() {

    // Gift lid opens
    document.querySelector(".lid").style.transform =
        "rotate(-130deg) translateY(-35px)";

    // Small delay before showing the letter
    setTimeout(function () {

        document.querySelector(".hero").style.display = "none";

        document.querySelector(".letter-page").style.display = "flex";

    }, 1000);

}