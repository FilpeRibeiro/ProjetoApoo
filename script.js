let button = $('#botao')
$('.video').addClass('none')
button.on('click', function(){
$.ajax({url:`https://api.nasa.gov/planetary/apod?api_key=c0rZBhWA17eRlEVJekMQW8fFD2hAkMp4U9HaRH74&date=${date.value}`,
    success: function(result){
        $('#texto').html(`${result.explanation}`)
        $('#titulo').html(`Autor:${result.copyright}`)
        
        if(result.media_type =='image'){
            $('#imagen').attr('src', (result.url))
            $('.video').addClass('none')
            $('#imagen').removeClass('none')
        }else{
            $('.video').attr( 'src',(result.url))
            $('.video').removeClass('none')
            $('#imagen').addClass('none')
        }

       
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