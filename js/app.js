//api key: uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi


const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=uPEwNrk9updnhBTYgoXZiLinsuV9XMoOmyJYSnZi'

function loadContent() {
    $.ajax({
        url: nasaUrl
    }).done(function (response) {
        console.log(response);
    }).fail(function (error) {
        console.log(error);
    })
}

loadContent();