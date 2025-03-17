const score = JSON.parse(localStorage.getItem('score'))
      || {
        wins: 0,
        losses: 0,
        attempts: 0
      };
      
      scoreUpdate();
      
      function scoreUpdate() {
        document.querySelector('.js-display').innerHTML = 
      `Wins: ${score.wins}, Losses: ${score.losses}, Attempts: ${score.attempts}`;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.attempts = 0;
        localStorage.removeItem('score');
        scoreUpdate();
      }

      let isAutoPlaying = false;

      let intervalId;

      function autoPlay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(() => {
            score.attempts += 1;
            const playerGuess = pickComputerMove();
            playGame(playerGuess);
            
          }, 1000);

          isAutoPlaying = true;

        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
      }

      
      document.querySelector('.js-heads-button').addEventListener('click', () => {
        score.attempts += 1;
        playGame('heads');
        
      });

      document.querySelector('.js-tails-button').addEventListener('click', () => {
        score.attempts += 1;
        playGame('tails');
        
      });

      document.querySelector('.js-reset-score-button').addEventListener('click', () => {
        resetScore();
        document.querySelector('.js-moves').innerHTML = '';
        document.querySelector('.js-result').innerHTML = '';
      });

      const autoPlayButtonElement = document.querySelector('.js-auto-play-button');
      autoPlayButtonElement.addEventListener('click', () => {
        autoPlay();

        if (autoPlayButtonElement.innerText === 'Auto Play') {
          autoPlayButtonElement.innerText = 'Stop Playing';
        } else {
          autoPlayButtonElement.innerText = 'Auto Play';
        }
      });

     
      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'h') {
          score.attempts += 1;
          playGame('heads');
        } else if (event.key === 't') {
          score.attempts += 1;
          playGame('tails');
        } else if (event.key === 'a') {
          autoPlay();
        } else if (event.key === 'Backspace') {
          resetScore();
        }
      });

      function playGame(playerGuess) {
        const result = pickComputerMove();
        
        let outcome = '';
          
        if (playerGuess === result) {
          outcome = 'You win!';
        } else {
          outcome = 'You lose!';
        }
        
        if (outcome === 'You win!') {
          document.querySelector('.js-moves').innerHTML = `You ${playerGuess}, Computer ${result}.`;
          document.querySelector('.js-result').innerHTML = `${outcome}`;
          score.wins += 1;
        } else {
          document.querySelector('.js-moves').innerHTML = `You ${playerGuess}, Computer ${result}.`;
          document.querySelector('.js-result').innerHTML = `${outcome}`;
          score.losses += 1;
        }

          localStorage.setItem('score', JSON.stringify(score));
        
          scoreUpdate();
          //alert(`Wins: ${score.wins}, Losses: ${score.losses}`);
        }

        function pickComputerMove() {
          const randomNumber = Math.random();
        
          let result = '';
          
          if (randomNumber < 0.5) {
            result = 'heads';
          } else {
            result = 'tails';
          }
          return result;
        }