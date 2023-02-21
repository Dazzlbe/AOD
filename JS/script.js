function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

ibg();

//......Для менюю бургера,добавляет класс и убирает его при нажатии на бургер.....
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .menu__body").toggleClass("active");
    $("body").toggleClass("lock"); //запрет на прокурутку при открытом меню
  });
});
//.................................................................................

//sliders стрелки..........................................................................

$(document).ready(function () {
  $(".slider__body").slick();
});

//sliders..........................................................................
