var $ = require('jquery');
$(document).ready(function(){

    getData();

$('#choose').change(function(){

    $('.cds-container').empty();
    var option = $(this).val();

    if(option == 'All'){

        getData();

    } else {

        $.ajax(
            {
                'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
                'method': 'GET',
                'success': function(risposta){

                    printSelect(risposta, option);
                },
                'error': function(){
                    alert('Errore');
                }
            }
        );
    }

    });
});


// funzioni

function getData(){
    $.ajax(
        {
            'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
            'method': 'GET',
            'success': function(risposta){
                printData(risposta);

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

function printSelect(data, option){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < data.length; i++) {
        if (option == data[i].author) {
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
}
