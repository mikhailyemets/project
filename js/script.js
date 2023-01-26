'use strict';
// burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const linkList= document.querySelector('.menu__list');
if(iconMenu){
    iconMenu.addEventListener('click',function(e){
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
linkList.addEventListener('click', function(e){
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
});

$(document).ready(function(){
    
    $('.slider').slick({
        // подключение стрелок
        arrows: true,
        // подключение точек
        dots: true, 
        // подключение адаптивной высоты
        adaptiveHeight: false,
        // количество показываемых слайдов за 1 раз!
        slidesToShow: 1,
        // кол-во пролистываемых слайдов за 1 раз
        slidesToScroll: 1,
        // скорость пролистывания
        speed: 500,
        // тип анимации при изменеии слайдов
        easing: 'ease',
        // отвечает за бесконечно слайдара
        infinite: true,
        // стартовый слайд
        initialSlide: 2,
        // автоматическое пролистывание
        autoplay: true,
        // скорость автовозпроизведения
        autoplaySpeed: 2000,
        // пауза при определенных условиях
        pauseOnFocus: true, // onclick
        pauseOnHover: true, // onhover
        pauseOnDotsHover:true, // dots on hover
        // перемотка мышкой
        draggable: true,
        // для телефона
        swipe: true,
        // момент срабатывания слайда
        touchThreshold: 5,
        // отвечает за передвежения слайдера
        touchMove: true,
        // переключение по стрелку не ждет конца анимации а переключает сразу
        waitForAnimate:false,
        // выстраивает слайд по центру слайдера
        centerMode: false,
        // забивает слайдера контентом во всю допустимую ширину
        // хорошо работает с centerMode
        variableWidth: false,
        // кол-во рядов в слайдере
        rows: 1,
        // кол-во слайдов в ряду
        slidesPerRow: 1,
        // вертикальный слайдер
        vertical: false,
        verticalSwiping:false,

        // slidetoshow = 1!
        // еффект замены слайдов а не перелистывания
        fade:false,
        // связывание слайдеров между собой
        // asNavFor: ".anotheSliderClass",
        // двум слайдерам пишешь привязку друг к другу через 
        
        // ADAPTIVE -> CHANGES FOR BREAKPOINTS
        responsive: [
            {
                breakpoint: 1024, // WIDTH 
                settings: {
                    slidesToShow: 1
                },
            }, {
                breakpoint: 750, // WIDTH 
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            }
        ], 
        // Mobile first min -> max
        mobileFirst:false,
        // перемещаем стрелки в указанный блок и точки
        // appendArrows: $('.classOfDestination'),
        // appendDots: $('.classOfDestination'),


        // Основные собития

        
    });
    // $('.slider').on('beforeChange',function(event,slick,currentSlide,nextSlide){
    //     console.log(currentSlide);
    // });
    // $('.slider').on('afterChange',function(event,slick,currentSlide,nextSlide){
    //     console.log(currentSlide);
    // });
    // обновление слайда если он был скрыт
    // и по нажатию отображаеться не корректно
    // вызываем этот метод
    $('.slider').slick('setPosition');
    // указываем на какой слайд прокрутить
    // $('.slider').slick('goTo',5);
    // пролистывание вперед назад
    $('.slider').slick('slickPrev');
    $('.slider').slick('slickNext');

    // EXAMPLE 
    // при нажатии на ссылку перелистываеться слайдер
    
    $('.link').click(function(e){
        $('.slider').slick('slickPrev');
    });
    $('.link_n').click(function(e){
        $('.slider').slick('slickNext');
    });
    // AUTOPLAY OF SLIDER ON CLICK
    $('.linkplay').click(function(e){
        $('.slider').slick('slickPlay');
    });
});