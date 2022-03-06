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
    })
});