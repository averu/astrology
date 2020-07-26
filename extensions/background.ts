function urlRequest() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhr.response);
    }
  };
  xhr.responseType = "json";
  xhr.open(
    "GET",
    "https://www.youtube.com/live_chat?v=DUrPA1coKro&pbj=1",
    true
  );
  xhr.send();
}

setInterval(urlRequest, 5000);
