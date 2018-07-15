function shownav() {
    if($(".nav").css("display") == "none"){
        $(".nav").slideDown(600);
    }else {
        $(".nav").slideUp(600);
    }

    event.stopPropagation();
}
$(document).click(function () {
    $(".nav").slideUp(600);
});