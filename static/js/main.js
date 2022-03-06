jQuery(document).ready(function ($) {
    //Isotope
    let btns = $("#servicos-recentes .button-group button");
    btns.click(function (e){
        $("#servicos-recentes .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $("#servicos-recentes .grid").isotope({
            filter: selector,
        });
    });

    $(".grid .popup-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        }
    });

    // Owl
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
            1600: {
                items: 3,
            },
        },
    });
});