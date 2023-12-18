// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// const date = document.getElementById('date');
// date.innerHTML = new Date().getFullYear();

// ********** close links ************
const btn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const link = document.querySelector('.links');

btn.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = link.getBoundingClientRect().height;
  // console.log(containerHeight);
  // console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// // ********** fixed navbar ************
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const nav = document.getElementById('nav');
  const navHeight = nav.getBoundingClientRect().height;
  const scrollBtn = document.querySelector('.top-link');

  if (scrollHeight > navHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    scrollBtn.classList.add('show-link');
  } else {
    scrollBtn.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // to make the nav close atfer clicking
    linksContainer.style.height = 0;
    // geting the height
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');

    const attribute = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(attribute);
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    // console.log(position);
    window.scrollTo({
      top: position,
    });
  });
});

// // =========================================
// //

// // select links
// // ==========================================//
// // ==========================================//
// // ==========================================//
// const scrollLinks = document.querySelectorAll('.scroll-link');
// scrollLinks.forEach(function (links) {
//   links.addEventListener('click', function (e) {
//     linksContainer.style.height = 0;
//     // getting height
//     const navHeight = nav.getBoundingClientRect().height;
//     console.log(navHeight);

//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = nav.classList.contains('fixed-nav');
//     e.preventDefault();
//     // target the elements
//     const attribute = e.currentTarget.getAttribute('href').slice(1);
//     const element = document.getElementById(attribute);
//     //  all if statements

//     let position = element.offsetTop - navHeight;
//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (containerHeight > 82) {
//       position = position + containerHeight;
//     }
//     window.scrollTo({
//       top: position,
//     });
//   });
// });
