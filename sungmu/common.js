$('.top-bar > .inner > .right-menu-list > .cell').click(function () {

    $(this).toggleClass('active');
    
});

$('.top-bar > .inner > .right-menu-list > .cell-right').click(function () {

    $('.popup-bg').addClass('active');
    $('.popup-all-menu').addClass('active');
    
});

$('.popup-all-menu > .close-btn').click(function () {
    $('.popup-bg').removeClass('active');
    $('.popup-all-menu').removeClass('active');
});

$('.popup-bg').click(function () {
    $('.popup-bg').removeClass('active');
    $('.popup-all-menu').removeClass('active');
});

$(function() {
    $.scrollify({
        section:".page",
        updateHash: true,
        touchScroll: true,
        setHeights: false,
        interstitialSection:".footer",
        before:function(i,page) {
            $('html').attr('data-current-index', i);
            var ref = page[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            $(".pagination-box a").on("click", $.scrollify.move);
        }
    });
});