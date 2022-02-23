import './styles/index.scss'
import $ from "jquery";
import mangificPopup from 'magnific-popup';


// отказ от страховки
$('.no-save').on('click', function (){
  $('.white-container-dialog').fadeIn();
});

$('.no-save-confirm').on('click', function (){
  $('.white-container-dialog').fadeOut();
});


// вопросы
$('.question__caption').on('click', function (){
  $(this).find('.question__chevron').toggleClass('rotate-x-180');
  $(this).closest('.question').find('.question__content').slideToggle();
})

$('.open-block').on('click', '.open-block__caption', function (){
  const openBlock = $(this).closest('.open-block');

  openBlock.toggleClass('open');

  if (openBlock.hasClass('open')) {

    openBlock.find('.open-block__content').fadeIn();
  } else {

    openBlock.find('.open-block__content').fadeOut();
  }

})