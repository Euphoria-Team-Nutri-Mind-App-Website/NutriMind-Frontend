//window.onload = function(){
  //  var image = document.getElementsByClassName("image");
  //  var postion = -image.width;
  //  var interval = setInterval(moveimage,10);

//};
//document.body.style.overflowX = "hidden";
window.onload = function() {
  var image = document.getElementById("image");
  var position = -image.width; // تحديد البداية من اليسار
  
  var interval = setInterval(moveImage, 1); // تحديد سرعة الحركة بالمللي ثانية
  
  function moveImage() {
    if (position >= window.innerWidth) { // التوقف عندما تصل الصورة إلى الجهة اليمنى
      clearInterval(interval);
    } else {
      position += 1; // زيادة الموضع بـ5 بكسل في كل مرة
      image.style.left = position + "px";
    }
  }


//document.getElementById("image").style.position = "absolute";
//document.getElementById("image").style.left = "";
//document.getElementById("image").style.right = "";
//document.getElementById("image").style.overflowX = "hidden";
};