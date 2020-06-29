$(function() {
    let run = 1; //回合
    let ans = []; //回答
    let out = {
        "AAA": "<a href = 'https://www.books.com.tw/products/0010587662?sloc=main' target = '_blank'>羊毛記 / Hugh Howey</a>",
        "ABA": "<a href = 'https://www.books.com.tw/products/0010567806?sloc=main' target = '_blank'>魔戒 / J. R. R. Tolkien</a>",
        "ACA": "<a href = 'https://www.books.com.tw/products/E050040572?sloc=ms2_6' target = '_blank'>時光之輪 / Robert Jrdan</a>",
        "ADA": "<a href = 'https://www.books.com.tw/products/0010248994?sloc=main' target = '_blank'>十二國記 / 小野不由美</a>",
        "AAB": "<a href = 'https://www.books.com.tw/products/0010805315?sloc=main' target = '_blank'>巫王志 / 鄭丰</a>",
        "ABB": "<a href = 'https://www.books.com.tw/products/0010739142?sloc=main' target = '_blank'>怪奇孤兒院 / Ransom Riggs</a>",
        "ACB": "<a href = 'https://www.books.com.tw/products/0010549916?sloc=main' target = '_blank'>夜行馬戲團 / Erin Morgenstern</a>",
        "ADB": "<a href = 'https://www.books.com.tw/products/0010840730?sloc=main' target = '_blank'>鏡花緣 / 李汝珍</a>",
        "BAA": "<a href = 'https://www.books.com.tw/products/0010509107?sloc=main' target = '_blank'>魔印人 / Peter V. Brett</a>",
        "BBA": "<a href = 'https://www.books.com.tw/products/0010837385?sloc=main' target = '_blank'>黃金羅盤 / Philip Pullman</a>",
        "BCA": "<a href = 'https://www.books.com.tw/products/0010741367?sloc=main' target = '_blank'>地海巫師 / Ursula K. Le Guin</a>",
        "BDA": "<a href = 'https://www.books.com.tw/products/0010547550?sloc=main' target = '_blank'>動物精的秘密 / 陳郁如</a>",
        "BAB": "<a href = 'https://www.books.com.tw/products/0010419669?sloc=main' target = '_blank'>太歲 / 星子</a>",
        "BBB": "<a href = 'https://www.books.com.tw/products/0010221405?sloc=main' target = '_blank'>藍熊船長的奇幻大冒險 / Walter Moers</a>",
        "BCB": "<a href = 'https://www.books.com.tw/products/0010514526?sloc=main' target = '_blank'>邪惡圖書館 / Brandon Sanderson</a>",
        "BDB": "<a href = 'https://www.books.com.tw/products/0010804802?sloc=main' target = '_blank'>熊與夜鶯 / Katherine Arden</a>",
        "CAA": "<a href = 'https://www.books.com.tw/products/0010814757?sloc=main' target = '_blank'>獅子·女巫·魔衣櫥 / Clive Staples Lewis</a>",
        "CBA": "<a href = 'https://www.books.com.tw/products/0010553230?sloc=main' target = '_blank'>龍槍傳奇 / Margaret Weis</a>",
        "CCA": "<a href = 'https://www.books.com.tw/products/0010574821?sloc=main' target = '_blank'>吾命騎士 / 御我</a>",
        "CDA": "<a href = 'https://www.books.com.tw/products/0010570979?sloc=main' target = '_blank'>埃及守護神 / Rick Riordan</a>",
        "CAB": "<a href = 'https://www.books.com.tw/products/0010826528?sloc=main' target = '_blank'>神奇樹屋 / Mary Pope Osborne</a>",
        "CBB": "<a href = 'https://www.books.com.tw/products/0010799428?sloc=main' target = '_blank'>看不見的圖書館 / Genevieve Cogman</a>",
        "CCB": "<a href = 'https://www.books.com.tw/products/0010703250?sloc=main' target = '_blank'>禁忌圖書館 / Django Wexler</a>",
        "CDB": "<a href = 'https://www.books.com.tw/products/0010705034?sloc=main' target = '_blank'>   帝國大學赤雨騷亂 / 新日嵯峨子, 瀟湘神, 臺北地方異聞工作室 </a>"
    };


    //把其餘區塊隱藏
    $(".q1").hide();
    $(".q2").hide();

    $(".q3").hide();
    $(".final").hide();
    //$(".intro").hide();


    // 點擊開始按鈕
    $("#start").click(function() {

        $(".intro").fadeOut(500, function() {
            $(".q1").fadeIn(500);
        })
    });

    //各選項
    $(".choose").click(function() {
        ans.push($(this).attr("value"));
        next();

    });

    // 下一回合的function
    function next() {
        if (run === 3) {
            //秀出結果
            outcome();
            $(".q3").fadeOut(500, function() {
                $(".final").fadeIn(500);
            });

        } else if (run === 1) {
            $(".q1").fadeOut(500, function() {
                $(".q2").fadeIn(500);
            });

        } else if (run === 2) {

            $(".q2").fadeOut(500, function() {
                $(".q3").fadeIn(500);
            });

        }
        run += 1;
    }

    function outcome() {
        let myans = ans.join('');
        $(".outcome").html(out[myans]);

    }
    //回主頁
    $("#home").click(function() {
        run = 1;
        ans = [];
        $(".final").fadeOut(500, function() {
            $(".intro").fadeIn(500);
        });
    })
});