import './styles/index.scss'
import $ from "jquery";
import mangificPopup from 'magnific-popup';

$('.li-dropdown').on('click', function () {
  $(this).find('.li-dropdown__ul').fadeToggle();

  $(document).mouseup(function (e){ // событие клика по веб-документу
    const div = $(".li-dropdown"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.find('.li-dropdown__ul').fadeOut(); // скрываем его
    }
  });

});

$('.filers-switch').on('click', function (){
  $('.filters-block').fadeToggle();
});

$('.filters-button').on('click', function (){
  $('.filters-block').fadeOut();
})

//галерея
const gallery = (galleryEl, delegateSelector) => {
  galleryEl.each(function () {
    $(this).magnificPopup({
      delegate: delegateSelector,
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  })
};

gallery($('.afd-gallery '), '.afd-gallery__item a');

$('.open-block').on('click', '.open-block__caption', function (){
  const openBlock = $(this).closest('.open-block');

  openBlock.toggleClass('open');

  if (openBlock.hasClass('open')) {

    openBlock.find('.open-block__content').fadeIn();
  } else {

    openBlock.find('.open-block__content').fadeOut();
  }

})