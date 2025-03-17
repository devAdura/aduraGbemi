const timeElement = document.querySelector('.js-start-timer-button');

    timeElement.addEventListener('click', () => {
      
    if (timeElement.innerHTML === 'Start') {
      start();
      timeElement.innerHTML = 'Stop'; 
    } else {
      stop();
      timeElement.innerHTML = 'Start';
    }
    
    });

    const resetElement = document.querySelector('.js-reset-timer-button');

    resetElement.addEventListener('click', () => {
      if (resetElement.innerHTML === 'Reset') {
        reset();
        timeElement.innerHTML = 'Start';
      }
      
    });

    let intervalId;
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function start() {
      intervalId = setInterval(updateTime, 10);
    }

    function stop() {
      clearInterval(intervalId);
    }
    
    function reset() {
      clearInterval(intervalId);

      milliseconds = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;

      document.querySelector('.js-time-display').innerText = '00:00:00:00'
    }

    function updateTime() {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      } else if (seconds === 60) {
        seconds = 0;
        minutes++;
      } else if (minutes === 60) {
        minutes = 0;
        hours++;
      }

        const displayElement = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 10 ? '0' + milliseconds : milliseconds);
        document.querySelector('.js-time-display').innerText = displayElement;
      }

      