//function to take in block site list and send to content.js
function timerMath()
{
    if(hoursLeft == 0 && minutesLeft == 0 && secondsLeft == 0)
    {
        //unblock sites: send block message to content.js
        startIndicator = 0;
        clearInterval(holder);
    }
    else
    {
        //block sites: send allow message to content.js
        secondsLeft--;
        if(secondsLeft <= 0)
        {
            if(minutesLeft <= 0)
            {
                if(hoursLeft > 0)
                {
                    hoursLeft--;
                    minutesLeft = 59;
                }
            }
            else
            {
                minutesLeft--;
                secondsLeft = 59;
            }
        }
    }
    document.getElementById('displayHRS').innerHTML = hoursLeft;
    document.getElementById('displayMINS').innerHTML = minutesLeft;
    document.getElementById('displaySECS').innerHTML = secondsLeft;
}
function startTimer()
{
    startIndicator = 1;
    hoursLeft = parseInt(document.getElementById("hours").value) + 0;
    minutesLeft = parseInt(document.getElementById("minutes").value) + 0;
    secondsLeft = 0;
    timerMath()
    holder = setInterval(timerMath, 1000)
}
var hoursLeft = 0;
var minutesLeft = 0;
var secondsLeft = 0;
var startIndicator = 0;
var holder = 0;
document.getElementById('clickme').addEventListener('click', startTimer);

