$(document).ready(function () {
  $('.carousel').carousel({
    interval: 6000
  })
}) 

/*Start Add Class Active On Li in Navbar */
let navBarLi = document.querySelectorAll('.navbar-inverse .navbar-nav > li');

navBarLi.forEach((li) => {
  li.onclick = function () {
    removeAc();
    this.classList.add('active');
  }
}) 

function removeAc() {
  navBarLi.forEach((li) => {
    li.classList.remove('active');
  });
}
/*End Add Class Active On Li in Navbar */

  
/*Start Button Go top */
let goTop = document.querySelector('.go-top');
window.onscroll =  () => {
  window.scrollY > 800 ? goTop.style.display = 'flex' : goTop.style.display = 'none';
}
goTop.onclick = () => scrollTo(0, 0);
/*End Button Go top */

/*Start Option Box Change Color */
let boxColor = document.querySelector('.option-box .color-box');
let gear = document.querySelector('.option-box .gear');

gear.onclick = function () {
  boxColor.classList.toggle('active');
}

let li = document.querySelectorAll('.option-box ul li');
li[0].style.backgroundColor = '#E41B17';
li[1].style.backgroundColor = '#4e3d18';
li[2].style.backgroundColor = '#45438F';
li[3].style.backgroundColor = '#54153B';

let link = document.querySelector('#href');
li.forEach((e) => {
  e.onclick = function () {
    link.setAttribute('href', e.getAttribute('data-value'));
  }
});
/*End Option Box Change Color */

/*Start Loading Screen */
let fadeTarget = document.querySelector('.loading');

window.onload = function fadeOutEffect()
{
  var fadeEffect = setInterval(function() {
    if (fadeTarget.style.opacity < 0.1)
    {
      clearInterval(fadeEffect);
      document.body.style.cssText = 'overflow:auto';
      fadeTarget.style.opacity = '0';
      fadeTarget.remove();
    }
    else
    {
   fadeTarget.style.opacity -= 0.1;
  }
 }, 2000);
}
/*End Loading Screen */
