// スライドショーで使用する画像一覧
const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png"
];

// 現在表示している画像の番号
let currentImageIndex = 0;

// img要素を取得
const slideshowImage = document.getElementById("slideshow-image");

// 画像を順番に切り替える関数
function changeImage() {

  // 次の画像番号に更新
  currentImageIndex++;

  // 最後の画像まで到達したら最初に戻る
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // 画像を切り替える
  slideshowImage.src = images[currentImageIndex];
}

// 3秒ごとに画像を切り替える
setInterval(changeImage, 3000);