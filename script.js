"use strict";
const quizQuestions = [
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


];

  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }

  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);