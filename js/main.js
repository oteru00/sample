$(function () {

    // ハンバーガー
    $(".hamburger").on("click", function () {
        $("header").toggleClass('active');
    });

    // フェードイン
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

    // ヘッダードロップダウン
    $(function () {
        $(".slideDown").hover(function () {
            $(".menuSub:not(:animated)", this).slideDown();
        },
            function () {
                $(".menuSub", this).slideUp();
            }
        );
    });

    // アンサー表示
    $(".question01").on("click", function () {
        $(".answer01").toggleClass('active');
    });
    $(".question02").on("click", function () {
        $(".answer02").toggleClass('active');
    });
    $(".question03").on("click", function () {
        $(".answer03").toggleClass('active');
    });
    $(".question04").on("click", function () {
        $(".answer04").toggleClass('active');
    });
    $(".question05").on("click", function () {
        $(".answer05").toggleClass('active');
    });
    $(".question06").on("click", function () {
        $(".answer06").toggleClass('active');
    });
    $(".question07").on("click", function () {
        $(".answer07").toggleClass('active');
    });
    $(".question08").on("click", function () {
        $(".answer08").toggleClass('active');
    });
    $(".question09").on("click", function () {
        $(".answer09").toggleClass('active');
    });
    $(".question10").on("click", function () {
        $(".answer10").toggleClass('active');
    });
    $(".question11").on("click", function () {
        $(".answer11").toggleClass('active');
    });
    $(".question12").on("click", function () {
        $(".answer12").toggleClass('active');
    });
    $(".question13").on("click", function () {
        $(".answer13").toggleClass('active');
    });
    $(".question14").on("click", function () {
        $(".answer14").toggleClass('active');
    });
    $(".question15").on("click", function () {
        $(".answer15").toggleClass('active');
    });
    $(".question16").on("click", function () {
        $(".answer16").toggleClass('active');
    });
    $(".question17").on("click", function () {
        $(".answer17").toggleClass('active');
    });
    $(".question18").on("click", function () {
        $(".answer18").toggleClass('active');
    });

    // スライドショー
    $('.slider').slick({
        arrows: false,//左右の矢印はなし
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
        speed: 6900,//スライドのスピード。初期値は300。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
        pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
        cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
        slidesToShow: 8,//スライドを画面に4枚見せる
        slidesToScroll: 1,//1回のスライドで動かす要素数
        responsive: [
            {
                breakpoint: 769,//モニターの横幅が769px以下の見せ方
                settings: {
                    slidesToShow: 2,//スライドを画面に2枚見せる
                }
            },
            {
                breakpoint: 426,//モニターの横幅が426px以下の見せ方
                settings: {
                    slidesToShow: 1.5,//スライドを画面に1.5枚見せる
                }
            }
        ]
    });

});