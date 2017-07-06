function postToMail(formData) {
  // alert(JSON.stringify(formData))
  $.ajax({
    url: "https://docs.google.com/forms/d/1FAIpQLSelTfZnCeLKccoiRJqPbAoZT1kQNOLiTcJ_1xWbmvT5hAFs9g/formResponse",
    data: formDataJson,
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        alert("form Submitted successFuly 0 ")
      },
      200: function () {
        alert("form Submitted successFuly 200")
      }
    }
  });
}