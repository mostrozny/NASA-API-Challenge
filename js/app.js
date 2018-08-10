//api key: uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi

//preload
$(window).on('load', () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
});

$(() => {





    const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=300&page=1';
    const backgroundNasa = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi';

    const loadContent = () => {
        $.ajax({
            url: nasaUrl + '&' + apiKey,
        }).done(function (response) {
            console.log(response);
        }).fail(function (error) {
            console.log(error);
        })
    }

    const addBackground = () => {
        const firstSection = $('.firstSection');
        $.ajax({
            method: "GET",
            url: backgroundNasa + '?' + apiKey,
            dataType: "json",
        }).done(function (response) {
            console.log(response);
            const link = response.hdurl;
            firstSection.css('backgroundImage', `url(${link})`);
        });
    }

    const addGalleryBackgrouds = () => {
        const secondSection = $('.secondSection');
        $.ajax({
            method: "GET",
            url: nasaUrl + '&' + apiKey,
            dataType: "json",
        }).done(function (response) {
            console.log(response);
            let link = "";
            for (let i=0; i<6; i++){
                link = response.photos[i].img_src;
                console.log(link);
                const div = $('<div></div>');
                secondSection.append(div);
                div.css('backgroundColor', 'black');
                div.css('backgroundImage', `url(${link})`);
                div.css('backgroundImage', 'contain');
                div.css('backgroundSize', '100%');
                div.css('backgroundRepeat', 'no-repeat');
                div.css('width', '100vw');
                div.css('height', '100vh');
            }
        });
    }

    loadContent();
    addBackground();
    addGalleryBackgrouds();

});