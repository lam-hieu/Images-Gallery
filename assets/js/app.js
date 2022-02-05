var images = document.querySelectorAll('.image__list img'); //lấy hết tất cả ảnh
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var btnClose = document.querySelector('.close-btn');

// lấy từng ảnh mỗi khi click thay đổi
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGalleryImg() {
    //hidden btn
    if (currentIndex == 0) {
        btnLeft.classList.add('hidden');
    } else {
        btnLeft.classList.remove('hidden');
    }
    // 
    if (currentIndex == images.length - 1) {
        btnRight.classList.add('hidden');
    } else {
        btnRight.classList.remove('hidden');
    }

    //display Img
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index; //lấy vị trí khi click
        showGalleryImg();

    })
})

// btn btnClose
btnClose.addEventListener('click', function () {
    gallery.classList.remove('show');
})

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        gallery.classList.remove('show');
    }
})

//btn control
btnLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        showGalleryImg();
    }
})

btnRight.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGalleryImg();
    }
})