import './styles/index.scss'
import $ from "jquery";
import slickCarousel from 'slick-carousel'
import mangificPopup from 'magnific-popup';

$('.loans-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  appendArrows: $('.loans-carousel-arrows'),
  prevArrow: `<div class="w-10 h-10 border-blue border rounded-full flex items-center justify-center text-main hover:text-white bg-transparent hover:bg-blue transition duration-300 cursor-pointer">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 7L8 13" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>`,
  nextArrow: `<div class="w-10 h-10 border-blue border rounded-full flex items-center justify-center text-main hover:text-white bg-transparent hover:bg-blue transition duration-300 cursor-pointer">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L7 7L0.999999 1" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>`
})


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

// отображение фото при загрузке файла

// console.log($('.input-upload')[0].files);

const readURL = (input, element) => {

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      element.closest('.upload-item').find('.show-img img').attr('src', e.target.result);
      element.closest('.upload-item').find('.show-img').fadeIn();
      element.closest('.upload-item').find('.upload-item__plus').hide();
      element.closest('.upload-item').find('.upload-item__cancel').show();
    };
    reader.readAsDataURL(input.files[0]);
  }
}


$('.input-upload').each(function (){
  $(this).change(function (){
    readURL(this, $(this));
  })
});

// удаление фото из поля file

$('.upload-item__cancel').on('click', function (){
  $(this).closest('.upload-item').find('.input-upload').val('');
  $(this).closest('.upload-item').find('.show-img img').attr('src', '');
  $(this).closest('.upload-item').find('.show-img').hide();
  $(this).closest('.upload-item').find('.upload-item__plus').show();
  $(this).closest('.upload-item').find('.upload-item__cancel').hide();
});