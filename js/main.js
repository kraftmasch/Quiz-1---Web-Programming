/* Menyisipkan header, menu mobile, dan footer yang sama ke setiap halaman */
(function () {
  var here = document.body.dataset.page;
  var root = here === 'home' ? './' : '../';

  var menu = [['home', 'Home', root], 
              ['profile', 'Profile', root + 'profile'],
              ['hometown', 'Hometown', root + 'hometown'], 
              ['food', 'Local Food', root + 'food'],
              ['tourist', 'Tourist Places', root + 'tourist']];
  function links(cls, wrap) {
    return menu.map(function (m) {
      var a = '<a class="' + cls + (m[0] === here ? ' is-active' : '') + '" href="' + m[2] + '">' + m[1] + '</a>';
      return wrap ? '<li class="nav-item">' + a + '</li>' : '<li>' + a + '</li>';
    }).join('');
  }
  document.body.insertAdjacentHTML('afterbegin',
    '<header class="site-header"><div class="container header-inner">' +
    '<a href="' + menu[0][2] + '" class="brand" aria-label="Dimas Maulana Putra home">' +
    '<img src="' + root + 'images/logo.png" alt="Dimas Maulana Putra logo" class="brand-logo">' +
    '</a>' +
    '<nav class="main-nav"><ul class="nav-list">' + links('nav-link', true) + '</ul></nav>' +
    '<button class="menu-toggle" id="menuToggle" aria-label="Menu"><span class="bar"></span><span class="bar"></span><span class="bar"></span></button>' +
    '</div></header><nav class="mobile-nav" id="mobileNav"><ul>' + links('m-link') + '</ul></nav>');
  document.body.insertAdjacentHTML('beforeend',
    '<footer class="site-footer"><div class="container footer-base"><span>&copy; ' + new Date().getFullYear() +
    ' Dimas Maulana Putra &middot Informatics ITS</span></div></footer>');
  var t = document.getElementById('menuToggle'), m = document.getElementById('mobileNav');
  t.addEventListener('click', function () { t.classList.toggle('open'); m.classList.toggle('open'); });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  setTimeout(function () { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); }); }, 2500);
})();
