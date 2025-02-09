$(function () {

    // ハンバーガー
    $(".hamburger").on("click", function () {
        $("header").toggleClass('active');
    });

    $(window).scroll(function () {
        $(".fade-up").each(function () {
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});