(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
}());

  (function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header_nav_active');
    });
    if(window.innerWidth <= 767){
      for (let i =0; i < menuLinks.length; i +=1) {
        menuLinks[i].addEventListener('click', ()=>{
          menu.classList.remove('header_nav_active');
        });
      }
    }
  }());

  // Scroll to anchors 9.10(9v)
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

// 1.page speed по мобильному трафику смотрит google 12min (9v)
// 2.оптимизация изображений  Optimizilla
// 3. ss ужать. перед этим расставить префиксы 22.30 в "Автопрефиксоре -А-""
//далее минифицируем "Minify your css"
//также сжимается js"Minify your js"
//оптимизация html
// gap  везде исправить!!! удалитьь приставку grid
//валидация "W3O"42min  html  документа от семантических ошибок по стандартам. в butoon не вложили ссылку и тд.
//Favicon (10v) необходимо использовать ряд картинок.Favicon Generator.For real
//прописываем метатэги 2. title/ 3. h1- один на странице (и в div)
//администрирование  ~9min- управление контентом ( изменение ссылок,картинок и тд) Wordpress / bitrics
