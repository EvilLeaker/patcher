!function e(s, a, r) {
    function i(t, n) {
        if (!a[t]) {
            if (!s[t]) {
                var o = "function" == typeof require && require;
                if (!n && o)
                    return o(t, !0);
                if (c)
                    return c(t, !0);
                throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                n
            }
            o = a[t] = {
                exports: {}
            },
            s[t][0].call(o.exports, function(n) {
                return i(s[t][1][n] || n)
            }, o, o.exports, e, s, a, r)
        }
        return a[t].exports
    }
    for (var c = "function" == typeof require && require, n = 0; n < r.length; n++)
        i(r[n]);
    return i
}({
    1: [function(n, t, o) {
        "use strict";
        $(".header--btn").on("click", function() {
            $(".header").toggleClass("open")
        });
        var e = document.querySelector(".common--bg__loop--mv")
          , s = (e.play().then(function() {
            e.pause(),
            setTimeout(function() {
                e.play(),
                document.querySelector(".common--bg__loop--mv").classList.add("js-show"),
                document.querySelector(".common--bg__loop--thumb").classList.remove("js-show")
            }, 50)
        }).catch(function(n) {
            $(".common--bg__loop--thumb").addClass("js-show")
        }),
        $('a[href^="#"]').click(function() {
            var n = $(this).attr("href")
              , n = $("#" == n || "" == n ? "html" : n).offset().top;
            return $(this).hasClass("smooth") && $("html, body").animate({
                scrollTop: n
            }, 500, "swing"),
            !1
        }),
        $(window).on("scroll", function() {
            var n = $(".header--btn,.common--top")
              , t = $(this).scrollTop();
            $(this).height() - 600 <= t ? n.removeClass("off") : n.addClass("off")
        }),
        $(window).on("load", function() {
            var e = $(".header--nav").data("now");
            $(".header--nav__link").each(function(n, t) {
                var o = $(this).data("current");
                e == o && $(this).addClass("on")
            })
        }),
        DEVICE.isSp && $(".snav--nav__list").hide(),
        $(".snav--nav__current").on("click", function() {
            $(this).stop().toggleClass("open"),
            $(".snav--nav__list").stop().slideToggle()
        }),
        $(window).on("load", function() {
            var o = $(".common--h3").data("current");
            $(".snav--nav__item").each(function(n, t) {
                $(this).data("current") == o && $(this).addClass("current")
            })
        }),
        new XMLHttpRequest);
        s.open("GET", "https://performai.evilleaker.com/wp-json/thistheme/v1/articlesRest", !0),
        s.responseType = "json",
        s.onload = function() {
            for (var n = this.response, t = Math.min(n.length, 3), o = 0; o < t; o++) {
                var e = n[o]
                  , e = '\n<a href="'.concat(e.permalink, '" class="top--news__box">\n<div class="top--news__box--inner">\n<p class="top--news__date"><span>').concat(e.date, '</span>UP</p>\n<p class="top--news__title"><span class="title">').concat(e.title, '</span></p>\n<div class="top--news__thumb"><img src="').concat(e.thumbnail, '" alt=""></div>\n</div>\n</a>\n');
                $("#top_news").append(e)
            }
        }
        ,
        s.send()
    }
    , {}]
}, {}, [1]);
