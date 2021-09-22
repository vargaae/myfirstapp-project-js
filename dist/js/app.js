// #myFirstApp - Andras Varga ************************************************************************************************************************************************************
// INITIAL STATE - pictures ARRAY ****************************************************************************************************************************************************************************************************************
let currentPhoto = 0;

let pictures = [
  {
    'id': 0, 'photo': 'dist/images/1.jpg', 'title': 'Pines and valleys', 'description': 'You can see many pines and mountains in this fabulous photo', 'active': ' active', 'activate': 'thumbnail'
  },
  {
    'id': 1, 'photo': 'dist/images/2.jpg', 'title': 'Lady by the lake', 'description': "This photo has taken near a fantastic lake, and there is a woman's back ", 'active': '', 'activate': 'thumbnail active'
  },
  {
    'id': 2, 'photo': 'dist/images/3.jpg', 'title': 'Skyscraper', 'description': "You can see a huge skyscraper's windows in this picture", 'active': '', 'activate': ' active'
  },
  {
    'id': 3, 'photo': 'dist/images/4.jpg', 'title': 'Valley of fairytales', 'description': 'Valley of fairytales: in this photograph you can see a lake with an unbellivable aquamarine colour, woods of pines and beautiful mountains', 'active': '', 'activate': ' active'
  },
];

// LOADING THUMBNAILS ****************************************************************************************************************************************************************************************************************
let containerSection = document.getElementById('container');

pictures.forEach(picture => {
  containerSection.innerHTML += `<div class="thumbnail${picture.active}" id="thumbnail${picture.id}" data-src="${picture.photo}">
  <img src="${picture.photo}" data-src="${picture.photo}" data-index="${picture.id}" data-id="${picture.id}" width="100px" height="100px">
  <div class="title">${picture.title}</div>
  </div>
  `
})

// MAIN IMAGE LOADING WITH ANIMATION ************************************************************************************************************************************************************
let loadPhoto = (photoNumber) => {
  $('#photo').fadeOut(700, function () {
    $(this).attr('src', pictures[photoNumber].photo);
  }).fadeIn(700);
  $('#photo-title').fadeOut(700, function () {
    $(this).text(pictures[photoNumber].title);
  }).fadeIn(700);
  $('#photo-description').fadeOut(700, function () {
    $(this).text(pictures[photoNumber].description);
  }).fadeIn(700);

  switch (currentPhoto) {
    case 0:
      $('#thumbnail0').addClass('active');
      $('#thumbnail1').removeClass('active');
      $('#thumbnail2').removeClass('active');
      $('#thumbnail3').removeClass('active');
      break;
    case 1:
      $('#thumbnail1').addClass('active');
      $('#thumbnail0').removeClass('active');
      $('#thumbnail2').removeClass('active');
      $('#thumbnail3').removeClass('active');
      break;
    case 2:
      $('#thumbnail2').addClass('active');
      $('#thumbnail1').removeClass('active');
      $('#thumbnail0').removeClass('active');
      $('#thumbnail3').removeClass('active');
      break;
    case 3:
      $('#thumbnail3').addClass('active');
      $('#thumbnail0').removeClass('active');
      $('#thumbnail1').removeClass('active');
      $('#thumbnail2').removeClass('active');
      break;
    default:
      console.log("Default image loaded successfully");
      break;
  }
}
loadPhoto(currentPhoto);

// THUMBNAIL EVENT LISTENER ************************************************************************************************************************************************************
$('.thumbnail').click((event) => {
  let currentPhoto = $(event.target).attr('data-index');
  // let indexClicked = $(event.target).attr('data-src');

  loadPhoto(currentPhoto);
});

// ACTIVATION ************************************************************************************************************************************************************************************************************
let header = document.getElementById("container");
let thumbnails = header.getElementsByClassName("thumbnail");
for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ARROW BUTTONS ****************************************************************************************************************************************************************************************************************
$('#arrowRightBtn').click(() => {
  if (currentPhoto < 3) {
    currentPhoto++;
  }
  else {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);

});

$('#arrowLeftBtn').click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  }
  else {
    currentPhoto = 3;
  }
  loadPhoto(currentPhoto);
});