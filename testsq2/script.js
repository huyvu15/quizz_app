"use strict";

// Mảng chứa các bài test (5 bài, mỗi bài là một mảng các câu hỏi)
const quizSets = [
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
  {
    question: "Một cách đặt câu hỏi nghiên cứu thị trường trong đó thay vì hỏi, người nghiên cứu đưa ra các phát biểu khẳng định hoặc phủ định và yêu cầu người trả lời phải thể hiện mức độ đồng ý với các phát biểu đó. Thang điểm thường từ 1 đến 5 trong đó 1 là hoàn toàn phản đối, 5 là hoàn toàn đồng ý. Đây là kiểu thang đo gì?",
    options: [
        "Thang nhiều lựa chọn.",
        "Thang có tổng không đổi.",
        "Thang Likert.",
        "Thang tỷ lệ."
    ],
    correctAnswer: "Thang Likert."
  },
  {
    question: "Câu hỏi nghiên cứu nào dưới đây luôn đòi hỏi phải thực hiện nghiên cứu định lượng?",
    options: [
        "Khách hàng biết tới những thương hiệu máy tính xách tay nào?",
        "Có bao nhiêu phần trăm người tiêu dùng Việt Nam cho rằng xuất xứ của sản phẩm thể hiện chất lượng sản phẩm?",
        "Khách hàng tìm kiếm những thông tin gì khi lựa chọn máy tính xách tay?",
        "Tại sao nước xuất xứ của sản phẩm có ảnh hưởng tới quyết định mua hàng của người tiêu dùng?"
    ],
    correctAnswer: "Có bao nhiêu phần trăm người tiêu dùng Việt Nam cho rằng xuất xứ của sản phẩm thể hiện chất lượng sản phẩm?"
  },
  ],
  [
    {
      question: " liệu thứ cấp là loại dữ liệu",
      options: [
          "chưa được tập hợp dưới một khuôn mẫu nào đó.",
          "đã được thu thập và đã lỗi thời.",
          "mà nhà nghiên cứu có thể có được thông qua điều tra hoặc quan sát.",
          "đã được thu thập và thường để sử dụng cho mục đích khác."
      ],
      correctAnswer: "đã được thu thập và thường để sử dụng cho mục đích khác."
  },
  {
    question: "Một cách đặt câu hỏi nghiên cứu thị trường trong đó thay vì hỏi, người nghiên cứu đưa ra các phát biểu khẳng định hoặc phủ định và yêu cầu người trả lời phải thể hiện mức độ đồng ý với các phát biểu đó. Thang điểm thường từ 1 đến 5 trong đó 1 là hoàn toàn phản đối, 5 là hoàn toàn đồng ý. Đây là kiểu thang đo gì?",
    options: [
        "Thang nhiều lựa chọn.",
        "Thang có tổng không đổi.",
        "Thang Likert.",
        "Thang tỷ lệ."
    ],
    correctAnswer: "Thang Likert."
  },
  {
    question: "Câu hỏi nghiên cứu nào dưới đây luôn đòi hỏi phải thực hiện nghiên cứu định lượng?",
    options: [
        "Khách hàng biết tới những thương hiệu máy tính xách tay nào?",
        "Có bao nhiêu phần trăm người tiêu dùng Việt Nam cho rằng xuất xứ của sản phẩm thể hiện chất lượng sản phẩm?",
        "Khách hàng tìm kiếm những thông tin gì khi lựa chọn máy tính xách tay?",
        "Tại sao nước xuất xứ của sản phẩm có ảnh hưởng tới quyết định mua hàng của người tiêu dùng?"
    ],
    correctAnswer: "Có bao nhiêu phần trăm người tiêu dùng Việt Nam cho rằng xuất xứ của sản phẩm thể hiện chất lượng sản phẩm?"
  },
  ],
  // Add more quizzes as needed
];

// Variables to track quiz state
let currentQuizIndex = 0; // Chỉ mục của bài test hiện tại
let currentQuestionIndex = 0; // Chỉ mục của câu hỏi hiện tại
let score = 0;

// Function to start a quiz
// Function to start a quiz
function startQuiz(index) {
  // Set the current quiz index
  currentQuizIndex = index;
  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score

  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  document.getElementById("next-quiz-button").style.display = "none"; // Hide "Next Quiz" button
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

// Function to end the quiz and display results
function endQuiz() {
  // Display the final score for the current quiz
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizSets[currentQuizIndex].length}</p>
    <button id="next-quiz-button" onclick="startNextQuiz()">Next Quiz</button>
  `;
}

// Function to start the next quiz
function startNextQuiz() {
  if (currentQuizIndex < quizSets.length - 1) {
    // Move to the next quiz
    currentQuizIndex++;
    currentQuestionIndex = 0;
    score = 0; // Reset the score for the next quiz
    displayQuestion();
  } else {
    // All quizzes are completed
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>All Quizzes Completed!</h2>
      <p>Your Total Score: ${score} out of ${quizSets.reduce(
      (totalQuestions, quiz) => totalQuestions + quiz.length,
      0
    )}</p>
    `;
    document.getElementById("next-quiz-button").style.display = "none"; // Hide "Next Quiz" button
  }
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", () => {
  // Display the quiz selection buttons
  document.getElementById("quiz-selection").style.display = "block";
});
