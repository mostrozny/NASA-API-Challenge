//preload
$(window).on('load', () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});

$(() => {
    const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=300&page=1';
    const backgroundNasa = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi';

    const addFirstBackground = () => {
        $.ajax({
            method: "GET",
            url: backgroundNasa + '?' + apiKey,
            dataType: "json",
        }).done(function (response) {
            backgroundPod(response);
        });

    };

    const addGalleryBackgrounds = () => {
        $.ajax({
            method: "GET",
            url: nasaUrl + '&' + apiKey,
            dataType: "json",
        }).done(function (response) {
            backgroundCurio(response);
        });
    };

    const backgroundPod = (podObject) => {
        $('.firstSection').css('backgroundImage', `url(${podObject.hdurl})`);
    };

    const backgroundCurio = (curioPhotos) => {
        console.log(curioPhotos);
        for (let i = 0; i < 6; i++) {
            const div = $('<div></div>');
            div.css('backgroundImage', `url(${curioPhotos.photos[i].img_src})`);
            $('.secondSection').append(div);
        }
    };

    addFirstBackground();
    addGalleryBackgrounds();


});