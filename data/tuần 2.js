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
  },
  {
  question: "Khi phân tích môi trường bên trong của doanh nghiệp, nhà phân tích sẽ thấy được … của doanh nghiệp.",
  options: [
  "cơ hội và nguy cơ",
  "điểm mạnh và cơ hội",
  "điểm mạnh và điểm yếu",
  "điểm mạnh, điểm yếu, cơ hội và nguy cơ"
  ],
  correctAnswer: "điểm mạnh và điểm yếu"
  },
  {
  question: "Phát biểu nào sau đây không đúng?",
  options: [
  "Môi trường vĩ mô cần tác động tới môi trường vi mô rồi mới ảnh hướng đến hoạt động marketing của doanh nghiệp",
  "Môi trường quốc tế có ảnh hưởng đến hoạt động marketing",
  "Môi trường vĩ mô, môi trường vi mô cùng tác động đến hoạt động marketing của doanh nghiệp",
  "Môi trường vi mô có quan hệ trực tiếp đến hoạt động marketing"
  ],
  correctAnswer: "Môi trường vĩ mô cần tác động tới môi trường vi mô rồi mới ảnh hướng đến hoạt động marketing của doanh nghiệp"
  },
  {
  question: "Trong các nhân tố sau, nhân tố nào không thuộc phạm vi của môi trường nhân khẩu?",
  options: [
  "Quy mô và tốc độ tăng dân số tự nhiên.",
  "Cơ cấu tuổi và giới tính",
  "Sự dịch chuyển dân cư.",
  "Thu nhập bình quân đầu người."
  ],
  correctAnswer: "Thu nhập bình quân đầu người."
  },
  {
  question: "Công ty Unilever có bột giặt Omo. Công ty P&G có bột giặt Ariel và Tide. Đối với Omo, Ariel là đối thủ …",
  options: [
  "sản phẩm thay thế.",
  "cạnh tranh về nhu cầu.",
  "cạnh tranh trực tiếp.",
  "cạnh tranh về dòng sản phẩm."
  ],
  correctAnswer: "cạnh tranh trực tiếp."
  },
  {
  question: "Môi trường nào mà trong đó thường không có các quy định bắt buộc tuân thủ, nhưng gây áp lực đến cách ứng xử của người tiêu dùng?",
  options: [
  "Môi trường kinh tế.",
  "Môi trường nhân khẩu.",
  "Môi trường văn hóa – xã hội.",
  "Môi trường pháp luật."
  ],
  correctAnswer: "Môi trường văn hóa – xã hội."
  },
  {
  question: "Những tổ chức kinh doanh độc lập mà tham gia hỗ trợ doanh nghiệp trong khâu phân phối và xúc tiến bán đến khách hàng cuối cùng được gọi là …",
  options: [
  "Công chúng",
  "Nhà cung cấp",
  "Nhà phân phối",
  "Nhà trung gian marketing"
  ],
  correctAnswer: "Nhà trung gian marketing"
  },
  {
  question: "Đâu là thành phần của môi trường marketing vĩ mô?",
  options: [
  "Môi trường chính trị – pháp luật.",
  "Môi trường kinh tế.",
  "Môi trường văn hóa – xã hội.",
  "Tất cả các trả lời đều đúng."
  ],
  correctAnswer: "Tất cả các trả lời đều đúng."
  },
  {
  question: "Giả sử thu nhập bình quân của một hộ gia đình trong một khu vực dân cư là 10 tr.đ./tháng, chi tiêu cho thực phẩm và đồ uống hiện tại của hộ này là 7 tr.đ./tháng. Do kinh doanh thuận lợi, thu nhập bình quân hộ gia đình này tăng lên mức 20 tr.đ./tháng. Đâu là dự đoán về chi tiêu cho thực phẩm và đồ uống mà phù hợp nhất với Định luật Engel về mối liên hệ giữa chi tiêu dùng và thu nhập?",
  options: [
  "là 6 tr.đ./tháng",
  "giữ nguyên như cũ",
  "là 12 tr.đ./tháng",
  "là 14 tr.đ./tháng"
  ],
  correctAnswer: "là 12 tr.đ./tháng"
  },
  
  {
  question: "Tình trạng độc quyền nhóm xuất hiện khi trên thị trường tồn tại",
  options: [
  "nhiều nhà sản xuất đang kinh doanh nhiều mặt hàng và cạnh tranh với nhau",
  "một số ít người sản xuất và kinh doanh nhiều mặt hàng.",
  "nhiều nhà sản xuất đang kinh doanh cùng một mặt hàng và cạnh tranh với nhau",
  "một số ít người sản xuất và kinh doanh cùng một mặt hàng."
  ],
  correctAnswer: "một số ít người sản xuất và kinh doanh cùng một mặt hàng."
  },
  
  {
  question: "Nhân tố nào không thuộc phạm vi của môi trường chính trị - pháp luật?",
  options: [
  "Các văn bản pháp luật.",
  "Quy mô và tốc độ tăng dân số tự nhiên.",
  "Cơ chế điều hành của Chính phủ.",
  "Hệ thống chính sách của Nhà nước."
  ],
  correctAnswer: "Quy mô và tốc độ tăng dân số tự nhiên."
  },
  
  {
  question: "Thông thường, tỷ suất lợi nhuận của ngành sẽ thấp nhất khi doanh nghiệp nằm trong ngành",
  options: [
  "độc quyền nhóm.",
  "cạnh tranh có tính độc quyền.",
  "cạnh tranh hoàn hảo.",
  "độc quyền."
  ],
  correctAnswer: "cạnh tranh hoàn hảo."
  },
  
  {
  question: "Môi trường marketing là tổng hợp các yếu tố … doanh nghiệp có ảnh hưởng đến hoạt động marketing của doanh nghiệp.",
  options: [
  "bên trong hoặc bên ngoài",
  "bên trong",
  "bên ngoài",
  "bên trong và bên ngoài"
  ],
  correctAnswer: "bên trong hoặc bên ngoài"
  },
  {
  question: "Sự chú trọng tới chất lượng cuộc sống và tôn trọng thiên nhiên là những xu thế trong môi trường …",
  options: [
  "văn hóa - xã hội.",
  "nhân khẩu.",
  "chính trị - pháp luật.",
  "tự nhiên."
  ],
  correctAnswer: "văn hóa - xã hội."
  }

];

