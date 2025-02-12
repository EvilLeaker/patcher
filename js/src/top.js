var make_top_item = function (image, number) {
  // リスト
  var list = document.getElementById("swiper-wrapper");
  var top_item = document.createElement("div");
  top_item.className = "swiper-slide";
  var top_link = document.createElement("a");
  top_link.className = "top--info__link";
  top_link.href = `#`;
  var top_thumb = document.createElement("img");
  top_thumb.srcset = image;
  top_link.appendChild(top_thumb);
  top_item.appendChild(top_link);
  list.appendChild(top_item);
};

var request = new XMLHttpRequest();

request.open('GET', 'https://performai.evilleaker.com/wp-json/thistheme/v2/download', true);
request.responseType = 'json';
request.send();

request.onload = function () {
  var data = this.response;
  var news_list_length = Math.min(data.length, 10)
  for (let i = 0; i < news_list_length; i++) {
    var page_num;
    if (i < 6) {
      page_num = 1;
    } else {
      page_num = 2;
    }
    make_top_item(data[i].thumbnail, page_num);
  }
  var mySwiper = new Swiper(".swiper-container", {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: 1, //スライドを2つ（分）表示
    loopedSlides: 20,
    //ページネーション表示の設定
    pagination: {
      el: ".swiper-pagination", //ページネーションの要素
      type: "bullets", //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
      nextEl: ".swiper-button-next", //「次へボタン」要素の指定
      prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
    },
    //スクロールバー表示の設定
    scrollbar: {
      el: ".swiper-scrollbar", //要素の指定
    },
  });
};