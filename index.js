const birthDate = new Date('2010-05-18'); 
const creationDate = new Date('2024-04-2'); 

function calculateAge() {
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); 

  return ageInYears.toFixed(9); 
}

function calculateTimeElapsed() {
  const currentDate = new Date();
  const timeElapsed = currentDate - creationDate;

  const seconds = Math.floor(timeElapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30); 
  const years = Math.floor(months / 12);

  return { years, months: months % 12, days: days % 30, hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 };
}

function updateAgeAndTimer() {
  const ageElement = document.getElementById('age');
  const timerElement = document.getElementById('timer');

  const age = calculateAge();
  ageElement.textContent = `I'am ${age} years old`;

  const time = calculateTimeElapsed();
  timerElement.textContent = `Time Elapsed Since Website Creation: ${time.years} years, ${time.months} months, ${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`;
}

function animateTyping(text, index, wordAnimationDiv) {
  if (index < text.length) {
    setTimeout(() => {
      wordAnimationDiv.textContent += text[index];
      animateTyping(text, index + 1, wordAnimationDiv);
    }, Math.random() * 200 + 100); 
  } else {
    setInterval(() => {
      const cursor = document.getElementById('cursor');
      cursor.style.visibility = (cursor.style.visibility === 'visible') ? 'hidden' : 'visible';
    }, 500); 
  }
}

const wordAnimationDiv = document.getElementById('wordAnimation');
animateTyping("I am Pouyan, a full stack developer", 0, wordAnimationDiv);


setInterval(updateAgeAndTimer, 100);

updateAgeAndTimer();
