"use strict";

// Mảng chứa các bài test (5 bài, mỗi bài là một mảng các câu hỏi)
const quizSets = [
  [
    {
        question: "Ba trong các trụ cột (điểm quan trọng) của triết lý (quan điểm) marketing đối với các tổ chức kinh doanh là",
        options: [
          "a. Sản phẩm hấp dẫn, xúc tiến bán hiệu quả và khả năng sinh lời",
          "b. Nhu cầu của khách hàng, các công cụ marketing phối hợp và khả năng sinh lời",
          "c. Sản phẩm hấp dẫn, các công cụ marketing phối hợp và khả năng sinh lời",
          "d. Nhu cầu của khách hàng, xúc tiến bán hiệu quả và khả năng sinh lời"
        ],
        correctAnswer: "b. Nhu cầu của khách hàng, các công cụ marketing phối hợp và khả năng sinh lời"
      }
],
  [   
  {
    question: "Dữ liệu thứ cấp là loại dữ liệu",
    options: [
        "chưa được tập hợp dưới một khuôn mẫu nào đó.",
        "đã được thu thập và đã lỗi thời.",
        "mà nhà nghiên cứu có thể có được thông qua điều tra hoặc quan sát.",
        "đã được thu thập và thường để sử dụng cho mục đích khác."
    ],
    correctAnswer: "đã được thu thập và thường để sử dụng cho mục đích khác."
},
// 2:
{
  question: "Nhóm nào sau đây không phải là công chúng đối với một doanh nghiệp?",
  options: [
  "Công chúng địa phương",
  "Giới truyền thông",
  "Cơ quan Nhà nước",
  "Nhà cung cấp"
  ],
  correctAnswer: "Nhà cung cấp"
  }

  ],
  // Thêm các bài test khác
  // ...
];

// Variables to track quiz state
let currentQuizIndex = 0; // Chỉ mục của bài test hiện tại
let currentQuestionIndex = 0; // Chỉ mục của câu hỏi hiện tại
let score = 0;

// Function to start a quiz
function startQuiz(index) {
  // Set the current quiz index
  currentQuizIndex = index;

  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuiz = quizSets[currentQuizIndex];
  const currentQuestion = currentQuiz[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function () {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuiz = quizSets[currentQuizIndex];
  const currentQuestion = currentQuiz[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to the next question or end the quiz if all questions in the current quiz are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuiz.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to end the quiz or move to the next quiz
function endQuiz() {
  // Check if there are more quizzes to display
  if (currentQuizIndex < quizSets.length - 1) {
    // Move to the next quiz
    currentQuizIndex++;
    currentQuestionIndex = 0;
    displayQuestion();
  } else {
    // All quizzes are completed
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>All Quizzes Completed!</h2>
      <p>Your Total Score: ${score} out of ${quizSets.reduce(
      (totalQuestions, quiz) => totalQuestions + quiz.length,
      0
    )}</p>
    `;
  }
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", () => {
  // Display the quiz selection buttons
  document.getElementById("quiz-selection").style.display = "block";
});
