/*------------------------------------------------------/
/ Variables for counter, timer(setInverval),user sel----/
/------------------------------------------------------*/
var counter = 1500; // default to 25 mins (25 * 60)
var counter_user_select = counter; // 25 default
var timer = null;


/*------------------------------------------------------/
/ Variables for counter set buttons --------------------/
/------------------------------------------------------*/
var pomodori_btn = document.getElementById("pomodori");
var break_long_btn = document.getElementById("break_long");
var break_short_btn = document.getElementById("break_short");

/*------------------------------------------------------/
/ Counter set value on click of btns--------------------/
/------------------------------------------------------*/
pomodori_btn.onclick = function() {
    counter = 1500;
    counter_user_select = counter;
    
    // Display the reset time
    reset();
};

break_long_btn.onclick = function() {
    counter = 600;
    counter_user_select = counter;
    
    // Display the reset time
    reset();
};

break_short_btn.onclick = function() {
    counter = 300;
    counter_user_select = counter;
    
    // Display the reset time
    reset();
};

/*------------------------------------------------------/
/ Function in charge of decrementing time in seconds----/
/------------------------------------------------------*/
function decTime(){    
    counter = counter - 1;
    
    if(counter === 0){
        var minutes = 0;
        var seconds = 0;
        $("#clock").html("0" + minutes + ":0" + seconds);
    }
    else {
        var minutes = Math.floor(counter / 60);
        var seconds = counter - minutes * 60;
        
        if(seconds < 10){seconds = "0" + seconds;}
        if(minutes < 10){minutes = "0" + minutes;}
        
        $("#clock").html(minutes + ":" + seconds);
    }
}

/*------------------------------------------------------/
/ Timekeeping functions, start stop reset --------------/
/------------------------------------------------------*/

function reset(){
clearInterval(timer);
    counter = counter_user_select;
    
    // Display the reset time
    var minutes = Math.floor(counter / 60);
    var seconds = counter - minutes * 60;
    if(seconds < 10){seconds = "0" + seconds;}
    if(minutes < 10){minutes = "0" + minutes;}
    $("#clock").html(minutes + ":" + seconds);
}

function startInterval(){
    timer= setInterval("decTime()", 1000);
}

function stopInterval(){
    clearInterval(timer);
}
