/* eslint-env jquery */

let allImages = ['Images/codePhotos/codeGroup01.jpg', 'Images/codePhotos/codeHands.jpg', 'Images/codePhotos/codingComputer02.jpg']

for (let i = 0; i < allImages.length; i++) {
  let div = document.createElement('div')
  let img = document.createElement('img')
  div.setAttribute('class', 'item')
  img.setAttribute('class', 'img-fluid')
  document.getElementById('main').appendChild(div).appendChild(img).src = allImages[i] // write div to page
}

// to make navbar non-transparent:
$(window).scroll(function () {
  // if window is scrolled more than 100px, adds the darken class
  if ($(this).scrollTop() > 100) {
    $('.navbar').addClass('darken')
  } else {
    $('.navbar').removeClass('darken')
  }
})
