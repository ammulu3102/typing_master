const codes =[
    'Success doesnot come from what you do ocassionally it comes from what you do consistently.',
    'Push yourself, because no one else is going to do it for  you.',
    'Donot stop when you are tired. stop when you are done.',
    'Discipline is doing whar needs to be document, even when you donot feel like doing it.'
    
];
let currentcodes='';
let startTime, interval;
let errors = 0;
  const lineC1 = document.getElementById('line');
  const inputC1 = document.getElementById('input');
  const speedC1 = document.getElementById('speed');
  const errorsC1 = document.getElementById('errors');
  const TimeC1 = document.getElementById('time');
  const startButtonC1 = document.getElementById('start');

  function startTyping(){

    inputC1.disabled = false;
  inputC1.value = '';
    errors = 0;
    speedC1.textContent ='0';
    errorsC1.textContent = '0';
    TimeC1.textContent = '0';




     currentcodes = codes[Math.floor(Math.random() * codes.length)];

    lineC1.textContent = currentcodes;




      startTime = new Date().getTime();
      interval = setInterval(updateTimer,1000);

        inputC1.focus();
  }
    function updateTimer() {
      const elapsed = Math.floor((new Date().getTime() - startTime)/1000);
        TimeC1.textContent = elapsed;
    }
      function endTest() {
        console.log('endTest')
        clearInterval(interval);
        inputC1.disabled = true;

        const elapsedMinutes = (new Date().getTime() - startTime)/60000;
        const wordcount = currentcodes.split('').length;
        const wpm = Math.round(wordcount / elapsedMinutes);
        speedC1.textContent = wpm;
      }
      function checkInput() {
        const enteredText = inputC1.value;
        const expectedText = currentcodes.substring(0,enteredText.length);
            if (enteredText !== expectedText) {
              errors++;
              errorsC1.textContent = errors;
            }
                 console.log({o: currentcodes===enteredText})
      if  (enteredText === currentcodes) {
          endTest();
      }
    
      }

  

  startButtonC1.addEventListener('click', startTyping);
  inputC1.addEventListener('input',checkInput);