var $ = require('jquery');
$(document).ready(function(){

$('#choose').click(function(){
    $('.cds-container').empty();
    var option = $(this).val();
    if(option == 'All'){
        $.ajax(
            {
                'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
                'method': 'GET',
                'success': function(risposta){
                    printData(risposta);
                    // console.log(risposta);

                },
                'error': function(){
                    alert('Errore');
                }
            }
        );
    } else {

        $.ajax(
            {
                'url': 'http://localhost:81/11-php-dischi/php-ajax-dischi/src/server.php',
                'method': 'GET',
                'success': function(risposta){
                    var source = $("#entry-template").html();
                    var template = Handlebars.compile(source);
                    for (var i = 0; i < risposta.length; i++) {
                        if (option == risposta[i].author) {
                            var context = {
                                'title': risposta[i].title,
                                'author': risposta[i].author,
                                'year': risposta[i].year,
                                'poster': risposta[i].poster
                            };

                        var html = template(context);
                        $('.cds-container').append(html);
                        }
                    }

                },
                'error': function(){
                    alert('Errore');
                }
            }
        );
    }

    });
});

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
