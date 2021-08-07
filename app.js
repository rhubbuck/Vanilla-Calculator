window.onload = function () {
    let seconds = 00;
    let tenths = 00;
    let secondsHTML = document.getElementById('seconds');
    let tenthsHTML = document.getElementById('tenths');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    let interval;

    function startTimer () {
        tenths ++;
        if (tenths <= 9) {
            tenthsHTML.innerHTML = '0' + tenths;
        } else if ( tenths <= 99) {
            tenthsHTML.innerHTML = tenths;
        } else {
            seconds ++;
            if ( seconds <= 9) {
                secondsHTML.innerHTML = '0' + seconds;
            } else {
                secondsHTML.innerHTML = seconds;
            }
            tenths = 0;
            tenthsHTML.innerHTML = '0' + tenths;
        }

    }

    startButton.addEventListener('click', ()=> {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    })

    stopButton.addEventListener('click', ()=> {
        clearInterval(interval);
    })

    resetButton.addEventListener('click', ()=> {
        clearInterval(interval);
        tenths = 00;
        seconds = 00;
        tenthsHTML.innerHTML = '0' + tenths;
        secondsHTML.innerHTML = '0' + seconds;
    })
}