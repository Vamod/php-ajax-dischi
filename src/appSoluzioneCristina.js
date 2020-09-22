var $ = require('jquery');

$(document).ready(function(){
    getData();
    $(document).on('change', '#choose', function(){
        var thisAuthor = $(this).val();
        filterData(thisAuthor);

});

function getData(){
    $.ajax(
        {
            'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
            'method': 'GET',
            'success': function(risposta){
                printData(risposta);
                // console.log(risposta);
                printSelect(risposta);
            },
            'error': function(){
                alert('Errore');
            }
        }
    );
}

function printData(data){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < data.length; i++) {

            var context = {
                'title': data[i].title,
                'author': data[i].author,
                'year': data[i].year,
                'poster': data[i].poster
            };

        var html = template(context);
        $('.cds-container').append(html);
    }
}

function printSelect(data){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var arrayAuthor = [];
    for (var i = 0; i < data.length; i++) {
        if(!arrayAuthor.includes(data[i].author)){
            arrayAuthor.push(data[i].author);

        }
    }
    for (var i = 0; i < arrayAuthor.length; i++) {
        var context = {
            author: arrayAuthor[i]
        }
        var html = template(context);
        $('#choose').append(html);
    }
}

function filterData(autore){
    $.ajax(
        {
            'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
            'method': 'GET',
            'data': {
                'author': autore
            },
            'success': function(risposta){
                $('.cds-container').empty();
                printData(risposta);
            },
            'error': function(){
                alert('Errore');
            }
        }
    );
});
}
