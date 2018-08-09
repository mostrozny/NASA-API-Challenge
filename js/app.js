//api key: uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi


const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
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





loadContent();
addBackground();