$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $(".js-btn").addClass("show")
    }
    else {
        $(".js-btn").removeClass("show")
    }
})

$(".js-btn").click(function (e) { 
    e.preventDefault();
    $("html").animate({
        scrollTop : 0
    }, 1000)
 })