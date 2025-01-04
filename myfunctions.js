$(document).ready(function() {
  // إظهار تفاصيل الكتاب عند الضغط على الزر "إظهار التفاصيل"
  $(".show-details").click(function() {
    var bookISBN = $(this).closest("tr").find("td:last-child").text();
    var bookCover = $(this).closest("tr").find("td:nth-child(5) img").attr("src");
	var bookTitle = $(this).closest("tr").find("td:nth-child(4)").text();
    var bookPrice = $(this).closest("tr").find("td:nth-child(3)").text();
    var bookPublisher = "دار اشبيلية";
    var bookClassification = "سلسلة قصص وحكايات ادبية للكبار والصغار";
    var bookSummary = "فاضل أبو السعود السباعي (1929 - 22 تشرين الثاني 2020) كاتب قصصي وروائي سوري بدأ نشاطه الأدبي بنظم الشعر، ثمّ تحول إلى كتابة القصّة القصيرة التي أبدع فيها على نحو غدا فيه واحداً من أهم القاصّين العرب خلال العقود الخمسة الأخيرة، كتب أيضاً المقالة، والدراسات الأدبية، والتاريخية، والقصّة المطولة، والرواية، وله تجربة في أدب الرحلات بلغت إصداراته نحواً من ثلاثين مؤلفاً في شتى الأجناس الأدبية، وتحول عدد منها إلى دراما تلفزيونية";

    $("#book-isbn").text(bookISBN);
    $("#displayImage").attr("src", bookCover).show();
	$("#book-title").text(bookTitle);
    $("#book-price").text(bookPrice);
    $("#book-publisher").text(bookPublisher);
    $("#book-classification").text(bookClassification);
    $("#book-summary").text(bookSummary);

    $("#book-details").show();
  });

  // إظهار نموذج الطلب عند الضغط على الزر "متابعة"
  $(".select-book").click(function() {
    $("#order-form").show();
  });

  // التحقق من صحة المدخلات في نموذج الطلب
  $("#order-form").submit(function(event) {
    event.preventDefault();

    var fullName = $("#full-name").val();
    var nationalID = $("#national-id").val();
    var birthDate = $("#birth-date").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();

    // التحقق من صحة المدخلات
    if (fullName.match(/^[a-zA-Z\s]+$/) && nationalID.match(/^\d{11}$/) && mobile.match(/^[0-9]{10,13}$/) && (email === "" || validateEmail(email))) {
      // إظهار نافذة جديدة أو رسالة تتضمن معلومات الكتاب الذي تم اختياره
      alert("تم إرسال طلبك بنجاح!") 
	alert ("شكراً لزيارتك سيتم التواصل معك من قبل فريق المبيعات");
	alert ("لمزيد من المعلومات ومتابعة طلبك يرجى التواصل مع الدعم الفني");
    } else {
      alert("يرجى إدخال المعلومات بشكل صحيح.");
    }
  });

  function validateEmail(email) {
    // التحقق من صحة البريد الإلكتروني
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});