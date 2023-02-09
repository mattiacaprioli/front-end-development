function SendMail() {
    var params = {
      user_name : document.getElementById("user_name").value,
      user_email : document.getElementById("user_email").value,
      message : document.getElementById("message").value
    };

    emailjs.send("service_porfolio", "template_luy6lee", params)
      .then(function (res) {
        alert("Your data has been successfully sent!");
      }, function(err) {
        alert("Something went wrong.");
      });
  };