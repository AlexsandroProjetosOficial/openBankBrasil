var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

localStorage.setItem('@div', 'dollar');

const exib = (id) => {
    const activeted = localStorage.getItem('@div');

    document.querySelector(`#${activeted}`).classList.remove('active');
    localStorage.setItem('@div', String(id));
    document.querySelector(`#${id}`).classList.add('active');

}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;

    if (scroll >= 100 || scroll < 100) {
        gsap.to("#logo-home", {
            duration: 0.1,
            ease: "power3.out",
            y: -130,
            x: -45,
            scale: 0.8
        });
        $("#logo-home").addClass('visited');
        if ($("#logo-home").hasClass('visited')) {
            $("#logo-home").attr("src", "images/logo.svg");
            $(".header").css("background", "#FFF");
            $(".menu-text").css("color", "#000");
            $(".hamburger-svg").css("fill", "#000");
        } else {
            $(".menu-text").css("color", "#FFF");
            $(".hamburger-svg").css("fill", "#FFF");
        }
    }

    if (scroll < 100) {
        gsap.to("#logo-home", {
            duration: 0.1,
            ease: "power3.out",
            y: 0,
            x: 0,
            scale: 1
        });
        $(".header").css("background", "#000");
        $(".hamburger-svg").css("fill", "#FFF");
        $(".menu-text").css("color", "#FFF");
        $("#logo-home").attr("src", "images/logoHome.svg");

        if ($("#menu-button").hasClass("burger-active")) {
            $(".hamburger-svg").css("fill", "#000");
            $(".menu-text").css("color", "#000");
        }
    }
});

$("#servicoslnk").click(function () {
    closeMenu()
});
$("#contratelnk").click(function () {
    closeMenu()
});
$("#fazemoslnk").click(function () {
    closeMenu()
});
$("#gestaolnk").click(function () {
    closeMenu()
});
$("#gestaolnk").click(function () {
    closeMenu()
});
$("#pericialnk").click(function () {
    closeMenu()
});
$("#auditorialnk").click(function () {
    closeMenu()
});
$("#advocacialnk").click(function () {
    closeMenu()
});
$("#vitrialnk").click(function () {
    closeMenu()
});
$("#porquelnk").click(function () {
    closeMenu()
});
$("#contrate1lnk").click(function () {
    closeMenu()
});
$("#sobrelnk").click(function () {
    closeMenu()
});
$("#contatolnk").click(function () {
    closeMenu()
});