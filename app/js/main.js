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

const modalWatch = () => {
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
const modalMessage = () => {
  let btnMessage = document.querySelector ('.btn__message');
  let modalPopup = document.querySelector ('.modal__popup');

  btnMessage.addEventListener('click', () => {
    modalPopup.style.display = 'block'
  })
}

const clickTarif = () => {
  let btnMonth = document.querySelector('.btn__month');
  let btnYears = document.querySelector ('.btn__years');
  let tariffPriceBlock1 = document.querySelector ('.tariff__price__block1');
  let tariffPriceBlock2 = document.querySelector ('.tariff__price__block2');
  let tariffPriceBlock3 = document.querySelector ('.tariff__price__block3');
  let tariffPriceBlock4 = document.querySelector ('.tariff__price__block4');

      btnMonth.addEventListener('click', () => {
        tariffPriceBlock1.textContent = '$0 month'
        tariffPriceBlock2.textContent = '$5 month'
        tariffPriceBlock3.textContent = '$9 month'
        tariffPriceBlock4.textContent = '$12 month'
      })
      btnYears.addEventListener('click', () => {
        tariffPriceBlock1.textContent = '$0 year'
        tariffPriceBlock2.textContent = '$10 year'
        tariffPriceBlock3.textContent = '$18 year'
        tariffPriceBlock4.textContent = '$24 year'
      })
}

clickTarif()
modalMessage()
modalWatch()
