'use strict';
$(document).ready(function () {
    /***************************Our Services tabs *****************************************************************/

//hide the subtitles, except the first
    $('.services .services__tab-content').not(":first").hide();
//click on the title
    $(".services .services__tab-title")
        .on('click', function () {
        //all titles - removeClass, and currentTarget - add .active
        $(".services__tab-title")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
        //all subtitles - hide, and currentTarget - show
        $(".services__tab-content").hide().eq($(this).index()).fadeIn();
        //the first - add .active
    })
        .eq(0)
        .addClass("active");

//*****************creating of database for section Our Amazing Work*********************************************//

    const graph = "graphic-design";
    const web = "web-design";
    const landing = "landing-pages";
    const wordpress = "wordpress";
    const portfolio = $('.work__portfolio');
    const portfolioHover = {
        graph: "<div class='work__img-hover-block'><div class='work__img-hover-links'><a href='#'><i class='icon icon-link'></i></a><a href='#'><i class='icon icon-search'></i></a></div><div class='work__img-hover-info'><p>awesome design</p><p>graphic design</p></div></div>",
        web: "<div class='work__img-hover-block'><div class='work__img-hover-links'><a href='#'><i class='icon icon-link'></i></a><a href='#'><i class='icon icon-search'></i></a></div><div class='work__img-hover-info'><p>creative design</p><p>web design</p></div></div>",
        land: "<div class='work__img-hover-block'><div class='work__img-hover-links'><a href='#'><i class='icon icon-link'></i></a><a href='#'><i class='icon icon-search'></i></a></div><div class='work__img-hover-info'><p>variety of patterns</p><p>landing pages</p></div></div>",
        word: "<div class='work__img-hover-block'><div class='work__img-hover-links'><a href='#'><i class='icon icon-link'></i></a><a href='#'><i class='icon icon-search'></i></a></div><div class='work__img-hover-info'><p>functional</p><p>wordpress</p></div></div>"
    };

//initial adding of the portfolio pictures//
    for (let i = 1; i <= 3; i++) {
        $(portfolio).append(`<div class='work__img ${graph}'><img src='img/portfolio/${graph}/${graph}${i}.jpg' alt='web'></div>`);
        $(portfolio).append(`<div class='work__img ${web}'><img src='img/portfolio/${web}/${web}${i}.jpg' alt='web'></div>`);
        $(portfolio).append(`<div class='work__img ${landing}'><img src='img/portfolio/${landing}/${landing}${i}.jpg' alt='web'></div>`);
        $(portfolio).append(`<div class='work__img ${wordpress}'><img src='img/portfolio/${wordpress}/${wordpress}${i}.jpg' alt='web'></div>`);
    }
    const getImgHover = () => {
        $(".graphic-design>img").before(portfolioHover.graph);
        $(".web-design>img").before(portfolioHover.web);
        $(".landing-pages>img").before(portfolioHover.land);
        $(".wordpress>img").before(portfolioHover.word);
    };

//portfolio block 'filter' event//
    let loadBtnStatus = false;
    let currentClass = false;
    $(".work__theme").on('click', (event) => {
        $(".work__theme").removeClass("work__theme_active");
        $(event.target).addClass("work__theme_active");

        currentClass = $(event.target).attr('data-filter');

        if (currentClass !== "all") {
            $(`.${currentClass}`).fadeIn("fast");
            $(".work__img").not(`.${currentClass}`).hide();
        } else {
            $(".work__img").show();
        }
    });

//portfolio block 'load more' event//
    $(".work__btn-load").on('click', () => {
        $(".work>.work__load-wrap").show();//.css("display", "block");
        setTimeout(() => {
            $(".work>.work__load-wrap").hide();//.css("display", "none");
            if (loadBtnStatus === false) {
                for (let i = 4; i <= 6; i++) {
                    $(portfolio).append(`<div class='work__img ${graph}'><img src='img/portfolio/${graph}/${graph}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${web}'><img src='img/portfolio/${web}/${web}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${landing}'><img src='img/portfolio/${landing}/${landing}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${wordpress}'><img src='img/portfolio/${wordpress}/${wordpress}${i}.jpg' alt='web'></div>`);
                    loadBtnStatus = true;
                }
            } else {
                for (let i = 7; i <= 9; i++) {
                    $(portfolio).append(`<div class='work__img ${graph}'><img src='img/portfolio/${graph}/${graph}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${web}'><img src='img/portfolio/${web}/${web}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${landing}'><img src='img/portfolio/${landing}/${landing}${i}.jpg' alt='web'></div>`);
                    $(portfolio).append(`<div class='work__img ${wordpress}'><img src='img/portfolio/${wordpress}/${wordpress}${i}.jpg' alt='web'></div>`);
                    $(".work__btn-load").hide();
                }
            }
            if (currentClass !== "all" && currentClass !== false) {
                $(`.${currentClass}`).show();
                $(".port-img").not(`.${currentClass}`).hide();
            }
            getImgHover();
        }, 2000);
    });
    getImgHover();

    //****************** section What People Say About theHam*************************//

    const bigIcon = document.querySelector('.people__selected');
    const switchIcon = (previousPerson, nextPerson) => {
        bigIcon.removeChild(bigIcon.firstElementChild);
        bigIcon.appendChild(nextPerson.cloneNode());
        previousPerson.classList.remove('active');
        nextPerson.classList.add('active');

        document.querySelector('.people__comment-text.active').classList.remove('active');
        document.querySelector(`.people__comment-text[data-name="${nextPerson.dataset.name}"]`).classList.add('active');

        document.querySelector('.people__name.active').classList.remove('active');
        document.querySelector(`.people__name[data-name="${nextPerson.dataset.name}"]`).classList.add('active');

        document.querySelector('.people__post.active').classList.remove('active');
        document.querySelector(`.people__post[data-name="${nextPerson.dataset.name}"]`).classList.add('active');
    };

    // Click on icon
    document.querySelector('.people__selected-nav-persons').addEventListener('click', event => {
        const previousPerson = document.querySelector('.people__persons-item-img.active');
        if (event.target !== event.currentTarget) {
            switchIcon(previousPerson, event.target)
        }
    });

    // Click on back button
    document.querySelector('.people__selected-nav-back').addEventListener('click', () => {
        const previousPerson = document.querySelector('.people__persons-item-img.active');
        const nextPerson = (previousPerson === previousPerson.parentElement.firstElementChild)
            ? previousPerson.parentElement.lastElementChild
            : previousPerson.previousElementSibling;
        switchIcon(previousPerson, nextPerson)
    });

    // Click on forward button
    document.querySelector('.people__selected-nav-forward').addEventListener('click', () => {
        const previousPerson = document.querySelector('.people__persons-item-img.active');
        const nextPerson = (previousPerson === previousPerson.parentElement.lastElementChild)
            ? previousPerson.parentElement.firstElementChild
            : previousPerson.nextElementSibling;
        switchIcon(previousPerson, nextPerson)
    });
});

//******************MASONRY section Gallery of best images*************************//
const gridContainer = $('.gallery__grid');
const loadWrapBtn = $(".gallery__load-wrap");

$(".gallery__btn-load").on('click', () => {

    $(".gallery__load-wrap").css("display", "block");
    setTimeout(() => {
        $(loadWrapBtn).css("display", "none");
        for (let i = 1; i < 9; i++) {
            $(gridContainer).append(`<div class="gallery__grid-item gallery__grid-hide"><div class="gallery__grid-hover"><a href="#"><i class="gallery__icon icon-search"></i></a><a href="#"><i class="gallery__icon icon-resize-full-alt"></i></a></div><img src="img/gallery/gal5/gal5.${i}.png" alt=""></div>`);
        }

        $(gridContainer).masonry('reloadItems');
        $(gridContainer).masonry('layout');

        setTimeout(function () {
            $('.gallery__grid').masonry({
                itemSelector: '.gallery__grid-item',
                columnWidth: 15,
                gutter: 15
            });
        }, 500);
        $('.gallery__btn-load').remove();
    }, 2000);
});


$(gridContainer).masonry({
    itemSelector: '.gallery__grid-item',
    columnWidth: 15,
    gutter: 15
});


