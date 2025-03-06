function buttonToggler(){
  const toggleButton = document.querySelector('button.toggleButton');
  const body = document.querySelector('body');

  const extraInfo = document.querySelector('.title-header p')
  const verticalLine = document.querySelector('div.line')
  const circles = document.querySelectorAll('.circle')

  console.log(circles)

  const eventHandler = (event) => {
    event.preventDefault(); // Para maiwasan ang default na behavior ng touch

    if (toggleButton.innerHTML === 'LIGHT') {
      toggleButton.innerHTML = 'DARK';
      toggleButton.classList.remove('lightModeToggle');
      toggleButton.classList.add('darkModeToggle');

      body.classList.add('lightMode');
      circles.forEach((circle) => {
        circle.classList.remove('white-dot');
        circle.classList.add('black-dot');
      })
      verticalLine.classList.add('blackLine');
      verticalLine.classList.remove('white-line');
      extraInfo.classList.add('lightMode_ExtraInfo');
      body.classList.remove('darkMode');
    } else {

      toggleButton.innerHTML = 'LIGHT';
      toggleButton.classList.remove('darkModeToggle');
      toggleButton.classList.add('lightModeToggle');

      body.classList.remove('lightMode');
      verticalLine.classList.add('white-line');
      circles.forEach((circle) => {
        circle.classList.add('white-dot');
        circle.classList.remove('black-dot');
      })
      verticalLine.classList.remove('blackLine');
      extraInfo.classList.remove('lightMode_ExtraInfo');
      body.classList.add('darkMode');
    }

    // Force reflow para siguruhing mag-apply agad ang CSS
    toggleButton.offsetHeight;
  };

  // Gamitin ang parehong event listener para sa click at touch
  toggleButton.addEventListener('click', eventHandler);
  toggleButton.addEventListener('touchstart', eventHandler, { passive: false });
}

buttonToggler();