import $ from "jquery";

const switchAnimate = (e) => {
  // 判断所点击的card
  var clickId = e.currentTarget.id
  if (clickId == 'back') {
    $('#back').css('animation', 'cutBrand_BTF 1000ms')
    $('#front').css('animation', 'cutBrand_FTB 1000ms')

    // 使两张卡片互换id
    setTimeout(() => {
      for (let index = 0; index <= 1; index++) {
        var idSet = $('.card').eq(index).attr('id') == 'front'
          ? 'back'
          : 'front'
        $('.card').eq(index).attr('id', idSet)
      }
    }, 1000);
  }
}

export { switchAnimate }