//api key: uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi
$(() => {

    const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&page=2';
    const backgroundNasa = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi';
    let image = '';

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
        console.log(firstSection);
        //   firstSection.css('backgroundImage', "url(' + image.hdUrl + ')");
    }

    const addGalleryBackgrouds = () => {
        const secondSection = $('.secondSection');
        $.ajax({
            method: "GET",
            url: nasaUrl + '&' + apiKey,
            dataType: "json",
        }).done(function (response) {
            console.log(response);
            const link = response.photos[1].img_src;
            console.log(link);
            secondsection.css('backgroundImage', `url(${link})`);
        });
       // console.log(secondSection);
        //   firstSection.css('backgroundImage', "url(' + image.hdUrl + ')");
    }

    loadContent();
    addBackground();
    addGalleryBackgrouds();

});