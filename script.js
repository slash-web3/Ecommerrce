function copyMenu() {
   let dptCategory = document.querySelector('.dpt-cat');
   let dptPlace = document.querySelector('.departments');
   dptPlace.innerHTML = dptCategory.innerHTML;

   let mainNav = document.querySelector('.header-nav nav');
   let navPlace = document.querySelector('.off-canvas nav');
   navPlace.innerHTML = mainNav.innerHTML;

   let topNav = document.querySelector('.header-top .wrapper');
   let topPlace = document.querySelector('.off-canvas .thetop-nav');
   topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

const menuButton = document.querySelector('.trigger'),
   closeButton = document.querySelector('.t-close'),
   addclass = document.querySelector('.site');
menuButton.addEventListener('click', function () {
   addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function () {
   addclass.classList.remove('showmenu')
})

const submenu = document.querySelectorAll('.has-child');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
   e.preventDefault();

   submenu.forEach((item) => {
      if (item !== this) {
         item.closest('.has-child').classList.remove('expand');
      }
   });

   const closestHasChild = this.closest('.has-child');
   if (closestHasChild && !closestHasChild.classList.contains('expand')) {
      closestHasChild.classList.add('expand');
   } else if (closestHasChild) {
      closestHasChild.classList.remove('expand');
   }
}

//SLIDER

const swiper = new Swiper('.swiper', {
   loop: true,

   pagination: {
      el: '.swiper-pagination',
   },

});

const searchButton = document.querySelector('.t-search'),
   tClose = document.querySelector('.search-close'),
   showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
   showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function () {
   showClass.classList.remove('showsearch')
})