$(document).ready(function(){
    $('.carousel').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      speed: 900,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/examples/arrow_l.png" alt="prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/examples/arrow_r.png" alt="next"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            slidesToShow: 1,
            speed: 400,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      ]
    });
  });
  const modal = document.querySelector('.modal'),
        wordpress = document.querySelector('#wordpress'),
        uber = document.querySelector('#uber'),
        game = document.querySelector('#game'),
        eFood = document.querySelector('#eFood'),
        nivea = document.querySelector('#nivea'),
        email = document.querySelector('#email'),
        stayhealthy = document.querySelector('#stayhealthy'),
        foodsberry = document.querySelector('#foodsberry'),
        wordpressBtn = document.querySelector('.wordpress-btn'),
        uberBtn = document.querySelector('.uber-btn'),
        gameBtn = document.querySelector('.game-btn'),
        eFoodBtn = document.querySelector('.eFood-btn'),
        niveaBtn = document.querySelector('.nivea-btn'),
        emailBtn = document.querySelector('.email-btn'),
        stayhealthyBtn = document.querySelector('.stayhealthy-btn'),
        foodsberryBtn = document.querySelector('.foodsberry-btn'),
        close = document.querySelectorAll('.modal__readme-close'),
        modalArr = [wordpress, uber, game, eFood, nivea, email, stayhealthy, foodsberry],
        btnArr = [wordpressBtn, uberBtn, gameBtn, eFoodBtn, niveaBtn, emailBtn, stayhealthyBtn, foodsberryBtn],
        btnTest = document.querySelectorAll('.btn-test');



  function openModal() {
    for (let i = 0; i < btnArr.length; i++) {
      btnArr[i].addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalArr[i].style.display = 'block';
      });
    }
  }
  function closeModal() {
    for (let item = 0; item < btnArr.length; item++) {
      close[item].addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalArr[item].style.display = 'none';
      });
    }
  }
  function showAndHideModal() {
    openModal();
    closeModal();
  }

  showAndHideModal();