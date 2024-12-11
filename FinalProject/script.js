// Dynamically add upcoming games

console.log(document.querySelectorAll(".player-card"));
const games = [
    { date: 'Dec 8, 2024', opponent: 'Miami Dolphins', logo: 'images/dolphins-logo.png' },
    { date: 'Dec 15, 2024', opponent: 'Jacksonville Jaguars', logo: 'images/jaguars-logo.png' },
    { date: 'Dec 22, 2024', opponent: 'Los Angeles Rams', logo: 'images/rams-logo.png' },
    { date: 'Dec 29, 2024', opponent: 'Buffalo Bills', logo: 'images/bills-logo.png'},
    { date: 'Jan 5, 2025', opponent: 'Miami Dolphins', logo: 'images/dolphins-logo.png' }
  ];
  
  const ticketsLink = 'https://www.newyorkjets.com/tickets/home'; // Jets tickets URL
  
  // Dynamically add upcoming games
  const gamesContainer = document.getElementById('games-list');
  games.forEach(game => {
    // Create game card
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
  
    // Add game date
    const gameDate = document.createElement('div');
    gameDate.classList.add('game-date');
    gameDate.textContent = game.date;
    gameCard.appendChild(gameDate);
  
    // Add opponent
    const gameOpponent = document.createElement('div');
    gameOpponent.classList.add('game-opponent');
    gameOpponent.textContent = `vs. ${game.opponent}`;
    gameCard.appendChild(gameOpponent);
  
    // Add logo
    if (game.logo) {
      const gameLogo = document.createElement('img');
      gameLogo.classList.add('game-logo');
      gameLogo.src = game.logo;
      gameLogo.alt = `${game.opponent} logo`;
      gameCard.appendChild(gameLogo);
    }
  
    // Add "Jets Tickets" link
    const ticketsButton = document.createElement('a');
    ticketsButton.classList.add('tickets-link');
    ticketsButton.href = ticketsLink; // Link to Jets tickets page
    ticketsButton.target = '_blank';
    ticketsButton.textContent = 'Get Tickets';
    gameCard.appendChild(ticketsButton);
  
    // Append card to container
   gamesContainer.appendChild(gameCard);
  });
  
  // Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
  
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      emailInput.value = ''; // Clear the input field after submission
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  // Dynamically add players to a list
const playerNames = [
  'Aaron Rodgers',
  'Garrett Wilson',
  'Sauce Gardner',
];

const playerList = document.getElementById('player-list');
playerNames.forEach(player => {
  const li = document.createElement('li');
  li.textContent = player;
  playerList.appendChild(li);
});

document.addEventListener("DOMContentLoaded", () => {
  // Fan Quiz
  document.getElementById('start-quiz').addEventListener('click', () => {
    alert('Quiz Coming Soon!');
  });

  // Countdown Timer
  const targetDate = new Date("2024-12-08T13:00:00"); // Set your next game date and time
  const timerElement = document.getElementById('countdown-timer');

  function updateTimer() {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      timerElement.textContent = "Game Time!";
    }
  }

  setInterval(updateTimer, 1000);
});
