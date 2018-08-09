//api key: uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi
$(() => {

    const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&page=3';
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
                div.css('backgroundImage', 'cover');
                div.css('width', '100vw');
                div.css('height', '100vh');
                div.css('backgroundImage', `url(${link})`);
            }
        });
    }

    loadContent();
    addBackground();
    addGalleryBackgrouds();

});