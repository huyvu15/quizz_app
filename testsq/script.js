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
  {
    question: "Hệ thống giúp thu thập những thông tin mang tính sự kiện về môi trường bên ngoài, được gọi là gì?",
    options: [
        "Internal Records System",
        "Marketing Research System",
        "Marketing Decision Support System",
        "Marketing Intelligence System"
    ],
    correctAnswer: "Marketing Intelligence System"
  },
  {
    question: "Một siêu thị lắp đặt camera để kiểm soát an ninh, đồng thời cũng để nghiên cứu hành vi mua sắm của khách hàng trong siêu thị, từ đó điều chỉnh về cách bố trí hàng hóa trên giá kệ bày hàng. Trong nghiên cứu thị trường, đây là phương pháp …",
    options: [
        "nghiên cứu định tính.",
        "quan sát.",
        "phỏng vấn sâu.",
        "nghiên cứu thực nghiệm."
    ],
    correctAnswer: "quan sát."
  },
  {
    question: "Bước đầu tiên trong tiến trình nghiên cứu thị trường là",
    options: [
        "lập kế hoạch nghiên cứu.",
        "xác định đối tượng phỏng vấn.",
        "thiết kế bản câu hỏi.",
        "xác định mục tiêu nghiên cứu."
    ],
    correctAnswer: "xác định mục tiêu nghiên cứu."
  },
  {
    question: "Phần đầu của phiếu khảo sát trong một nghiên cứu thị trường thường có nội dung gì?",
    options: [
        "Nghiên cứu này phục vụ mục đích gì",
        "Người nghiên cứu là ai",
        "Cam kết rằng những trả lời của người được phỏng vấn sẽ được giữ bí mật",
        "Tất cả các trả lời đều đúng"
    ],
    correctAnswer: "Tất cả các trả lời đều đúng"
  },
  {
    question: "Để thực hiện nghiên cứu thị trường bột giặt, nhà nghiên cứu đã lựa chọn các hộ gia đình theo cách rút thăm ngẫu nhiên từ danh sách các địa chỉ có trước. Phương pháp chọn mẫu ở đây là",
    options: [
        "chọn mẫu theo cụm",
        "chọn mẫu ngẫu nhiên đơn giản",
        "chọn mẫu phân tầng",
        "chọn mẫu ngẫu nhiên hệ thống"
    ],
    correctAnswer: "chọn mẫu ngẫu nhiên đơn giản"
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
  {
    question: "Trong một bản câu hỏi, bạn yêu cầu người trả lời cho điểm theo 4 yếu tố ảnh hưởng tới quyết định mua hàng qua trang thương mại điện tử (chất lượng sản phẩm, dịch vụ giao hàng, giá cả, uy tín của website). Trong đó điểm càng cao thể hiện tầm quan trọng càng lớn, nhưng tổng điểm phải bằng 100. Loại dữ liệu thu được sẽ là",
    options: [
        "dữ liệu tỷ lệ.",
        "dữ liệu khoảng.",
        "dữ liệu định danh.",
        "dữ liệu phân hạng."
    ],
    correctAnswer: "dữ liệu tỷ lệ."
  }
  ],
  [
    {
      question: "Câu hỏi 1 bài 2",
      options: ["Đáp án 1", "Đáp án 2", "Đáp án 3", "Đáp án 4"],
      correctAnswer: "Đáp án 2",
    },
    // Thêm các câu hỏi khác của bài 2
    // ...
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
