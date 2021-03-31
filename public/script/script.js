define(function(require){
    "use strict";

    $(document).ready(function(){
        apply_event_handlers();
    });

    function apply_event_handlers(){
        $('#make_dot').click(function(){
            makeDot();
        });
        $('#make_dash').click(function(){
            makeDash();
        });
        $('#blink').click(function(){
            startBlink();
        });
    }

    function makeDot(){
        $("#light").css("visibility","visible");
        setTimeout(function(){
            $("#light").css("visibility","hidden");
        }, 300);
    }

    function makeDash(){
        $("#light").css("visibility","visible");
        setTimeout(function(){
            $("#light").css("visibility","hidden");
        }, 700);
    }

    function startBlink(){
        var arr = ['dot','dot','dash'];
        arr.forEach(blink);
        // blink('dot');
    }

    function blink(item, index){
        var flash_type = item;
        var time_len = 0;
        
        if(flash_type == 'dot'){
            time_len = 300;
        }else{
            time_len = 700;
        }
        $("#light").css("visibility","visible");
        setTimeout(function(){
            $("#light").css("visibility","hidden");
        }, time_len);
    }
});