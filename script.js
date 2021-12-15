let button = $('#botao')
button.on('click', function(){
$.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=c0rZBhWA17eRlEVJekMQW8fFD2hAkMp4U9HaRH74&date=${date.value}`,
    success: function(result){
        $('#texto').html(`${result.explanation}`)
        $('#titulo').html(`Autor:${result.copyright}`)
        $('#imagen').attr('src', (result.url))
        console.log(result)
    }
    })
});


$.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT`,
    type: 'GET',
    success: function(fotoDia){
        console.log(fotoDia)
        $('#texto').text(fotoDia.explanation)
        $('#imagen').attr('src', fotoDia.url)
        $('#titulo').text(fotoDia.title)
    }
})