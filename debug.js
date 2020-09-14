consoleBox = $('<ul></ul>').addClass('console');
$(document.body).append(consoleBox);
function log(message, isError = false){
    listElment = $('<li></li>').text(message)
    if(isError){
        listElment.css("color","red");
    }
    $('.console').append(listElment)
}

// Error handling
window.onerror = function(message, source, lineno, colno, error){
     log(`${message} ${source}[${lineno}][${colno}]` , true)   
}