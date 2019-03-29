$(document).ready(function(){
    let i = 1;
    let arr = $('img');

    function nextPreviousImg(n) {
        i += n;
        if (i > arr.length - 1) {
            i = 0;
        }

        if (i < 0) {
            i = arr.length - 1;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }

        $('img')[i].style.display = 'block';
    }

    let imgLoop = function () {
        setTimeout(function () {
            nextPreviousImg(+1);
            imgLoop(); // restarts the function
        }, 5000);
    };

    imgLoop();


    $('#slider img:gt(0)').hide();

    $('#next').click(function() {
        $('#slider img:first-child').fadeOut().next().fadeIn().end().appendTo('#slider');
    });
    
    $('#prev').click(function() {
        $('#slider img:first-child').fadeOut();
        $('#slider img:last-child').prependTo('#slider').fadeOut();
        $('#slider img:first-child').fadeIn();
    });

});
