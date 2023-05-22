function makeNavSticky() {
  const nav = document.querySelector('.uncommon-ourscience-nav');
  const navCoord = nav.getBoundingClientRect();
  const contentGroups = document.querySelectorAll('.uncommon-ourscience-content');
  nav.style.position = 'sticky';
  nav.style.top = `${window.innerHeight - navCoord.height}px`;
  contentGroups.forEach((contentGroup, index) => {
    contentGroup.style.marginTop = `-${navCoord.height}px`;
  })
}

function initNav() {
  const navItems = document.querySelectorAll('.uncommon-ourscience-nav-item');
  const contentItems = document.querySelectorAll('.uncommon-ourscience-content');
        contentItems[0].classList.add('showing');

  navItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      //add class to button
      if ( item.classList.contains('uncommon-ourscience-nav-item--active') ) {
        item.classList.remove('uncommon-ourscience-nav-item--active');
      }
      else {
        document.querySelector('.uncommon-ourscience-nav-item--active')?.classList.remove('uncommon-ourscience-nav-item--active');
        item.classList.add('uncommon-ourscience-nav-item--active');
      }
      // add class to content
      contentItems.forEach((contentItem, contentIndex) => {
        if (contentIndex === index + 1) { 
          if ( contentItem.classList.contains('showing') ) {
            contentItem.classList.remove('showing');
            contentItems[0].classList.add('showing');
          } 
          else {
            contentItem.classList.add('showing');
          }
        } 
        else {
          contentItem.classList.remove('showing');
        }
      })
      //scroll window to top
      window.scrollTo(0, 0);

      //determine if content has contrast background color and then add class to body
      document.body.classList.contains('uncommon-content-has-background') ? document.body.classList.remove('uncommon-content-has-background') : null;
      const contentShowing = document.querySelector('.uncommon-ourscience-content.showing');
      if ( contentShowing.children[0].classList.contains('has-contrast-background-color') ) {
        document.body.classList.add('uncommon-content-has-background');
      } 
    })
  })
}

window.addEventListener('DOMContentLoaded', function() {
  makeNavSticky();
  initNav();
})

let timeout;
window.addEventListener('resize', function() {
  clearTimeout(timeout);
  timeout = setTimeout(makeNavSticky, 100);
})