import VideoPlayer from "./modules/videoPlayer";
import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import Difference from "./modules/difference";

window.addEventListener('DOMContentLoaded', () => {
    const mainSliderArg = {container: '.page', btns: '.next'}

    const mainSlider = new MainSlider(mainSliderArg);
    mainSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active', // non dot in class
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active', // non dot in class
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active', // non dot in class
    });
    feedSlider.init();


    const videoPlayer = new VideoPlayer('.showup .play', '.overlay');
    videoPlayer.init();

    const oldOfficer = new Difference('.officerold', '.officer__card-item');
    oldOfficer.init();

    const newOfficer = new Difference('.officernew', '.officer__card-item');
    newOfficer.init();
});