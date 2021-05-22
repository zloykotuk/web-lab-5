$(document).ready(function() {
    $(".top-nav-menu").slicknav({
      label: ""
    });

    $(".page-footer-menu, .top-nav-menu, .slicknav_nav").on("click", "li", function(event) {
        var anchor = $(this).children().attr("href");
        var dist = $("a[name=" + anchor.substr(1) + "]").offset().top;
        $("li.active").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({scrollTop: dist - 100}, "slow", "linear");
    });

    $(".slider-nav-item").on("click", function(event) {
        var item = $(this);
        var whichItem = item.attr("class").split(" ")[1];
        $(".slider .active").removeClass("active");
        $(".slider-item." + whichItem).addClass("active");
        item.addClass("active");
    });

    $(".slicknav_nav").on("click", "li", function(event) {
        console.log(this);
    });
});
