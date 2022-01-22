let countDown;
function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  countDown = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000);
    // console.log(timeLeft);
    if (timeLeft < 0) {
      clearInterval(countDown);
      return;
    // console.log(timeLeft);
    }
    console.log(timeLeft);
  }, 1000);
}

function displayTimeLeft (seconds){
    const min 
    

}
