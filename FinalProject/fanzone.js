document.addEventListener("DOMContentLoaded", () => {
  // Fan Quiz
  const startQuizButton = document.getElementById("start-quiz");
  const quizContainer = document.getElementById("quiz-container");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");
  const submitButton = document.getElementById("submit-answer");
  const feedback = document.getElementById("quiz-feedback");

  // Quiz Data
  const questions = [
    {
      question: "Who was the Jets quarterback during their Super Bowl III victory?",
      options: ["Joe Namath", "Brett Favre", "Chad Pennington", "Ken O'Brien"],
      answer: "Joe Namath",
    },
    {
      question: "What year was the New York Jets founded?",
      options: ["1960", "1965", "1970", "1955"],
      answer: "1960",
    },
    {
      question: "What is the name of the Jets' current home stadium?",
      options: ["MetLife Stadium", "Giants Stadium", "Yankee Stadium", "Shea Stadium"],
      answer: "MetLife Stadium",
    },
    {
      question: "Which Jets player is known for guaranteeing a Super Bowl III victory?",
      options: ["Joe Namath", "Curtis Martin", "Don Maynard", "Mark Sanchez"],
      answer: "Joe Namath",
    },
    {
      question: "What are the Jets' official team colors?",
      options: ["Green and White", "Blue and Red", "Black and Yellow", "Silver and Black"],
      answer: "Green and White",
    },
    {
      question: "Who holds the Jets' franchise record for most rushing yards?",
      options: ["Curtis Martin", "LaDainian Tomlinson", "Freeman McNeil", "Bilal Powell"],
      answer: "Curtis Martin",
    },
    {
      question: "Which division do the New York Jets compete in?",
      options: ["AFC East", "NFC East", "AFC North", "NFC South"],
      answer: "AFC East",
    },
    {
      question: "Who was the Jets' first head coach?",
      options: ["Sammy Baugh", "Weeb Ewbank", "Lou Holtz", "Charley Winner"],
      answer: "Sammy Baugh",
    },
    {
      question: "What was the Jets' original name when they were founded?",
      options: ["New York Titans", "New York Giants", "Brooklyn Dodgers", "New York Knights"],
      answer: "New York Titans",
    },
    {
      question: "Which Jets player was inducted into the Hall of Fame in 2012?",
      options: ["Curtis Martin", "Joe Namath", "Kevin Mawae", "Don Maynard"],
      answer: "Curtis Martin",
    }
];


  let currentQuestionIndex = 0;
  let score = 0;

  // Show Quiz Question
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizQuestion.textContent = currentQuestion.question;
    quizOptions.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.classList.add("quiz-option");
      li.addEventListener("click", () => {
        document.querySelectorAll(".quiz-option").forEach((el) =>
          el.classList.remove("selected")
        );
        li.classList.add("selected");
      });
      quizOptions.appendChild(li);
    });
  }

  // Start Quiz
  startQuizButton.addEventListener("click", () => {
    startQuizButton.style.display = "none";
    quizContainer.classList.remove("hidden");
    showQuestion();
  });

  // Submit Answer
  submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".quiz-option.selected");
    if (!selectedOption) {
      feedback.textContent = "Please select an answer!";
      feedback.style.color = "red";
      return;
    }

    const answer = selectedOption.textContent;
    if (answer === questions[currentQuestionIndex].answer) {
      feedback.textContent = "Correct!";
      feedback.style.color = "green";
      score++;
    } else {
      feedback.textContent = `Wrong! The correct answer was "${questions[currentQuestionIndex].answer}".`;
      feedback.style.color = "red";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        feedback.textContent = "";
        showQuestion();
      }, 1500);
    } else {
      setTimeout(() => {
        feedback.textContent = `Quiz Over! Your score: ${score}/${questions.length}`;
        quizContainer.style.display = "none";
      }, 1500);
    }
  });

  // Countdown Timer
  const targetDate = new Date("2024-12-08T13:00:00"); // Set your next game date and time
  const timerElement = document.getElementById("countdown-timer");

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
