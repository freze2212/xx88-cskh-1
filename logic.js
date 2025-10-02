document.getElementsByClassName("download-app")[0].addEventListener("click", function(e) {
  e.preventDefault();
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "https://images.1097638.com/wsd-images-prod/xx88vndkf1/merchant_resource/android/xx88vndkf1_2.4.67_20250703183520.apk";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = "https://images.1097638.com/wsd-images-prod/xx88vndkf1/merchant_resource/mobileconfig/xx88vndkf1_2.4.3_20250703183454.mobileconfig";
    } else {
      alert("Vui lòng tải ứng dụng trên điện thoại Android hoặc iOS.");
    }
  });

  document.querySelector(".back-home").addEventListener("click", function(e) {
    e.preventDefault(); 
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/"; 
    }
  });


  const links = [
  "https://t.me/XX886CSKH",
  "https://t.me/XX881CSKH",
  "https://t.me/XX885CSKH",
]

const linkElement = document.getElementById("liveChatLink")

linkElement = addEventListener("click", function (e){

  let index = parseInt(localStorage.getItem("chatLinkIndex")) || 0;

  linkElement.href = links[index];

  index = (index + 1) % links.length;
  this.localStorage.setItem("chatLinkIndex", index)

})