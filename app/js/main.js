$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });

const modal = () => {
  let btnWatch = document.querySelector('.btn__watch');
  let modalPopup = document.querySelector ('.modal__popup');
  
  btnWatch.addEventListener('click', () => {
    modalPopup.style.display = 'block'
  })
  window.addEventListener('click', (e) => {
    if(e.target == modalPopup) {
      modalPopup.style.display = 'none'
    }
  })
}
modal()

