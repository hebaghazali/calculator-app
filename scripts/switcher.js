// const body = document.getElementsByTagName('body')[0];
const switcher = document.getElementById('switcher');

const switcherPositions = switcher.getBoundingClientRect();

const switcherOneThird = switcherPositions.width / 3; // 1/3 of the switcher width
const firstThemePosition = switcherPositions.left + switcherOneThird;
const secondThemePosition = firstThemePosition + switcherOneThird;
const thirdThemePosition = switcherPositions.right;

switcher.addEventListener('click', e => {
  if (e.clientX <= firstThemePosition) {
    switcher.children[0].style.transform = 'translateX(0)';
    document.documentElement.setAttribute('data-theme', 'first');
  } else if (e.clientX <= secondThemePosition) {
    switcher.children[0].style.transform = 'translateX(21.5px)';
    document.documentElement.setAttribute('data-theme', 'second');
  } else if (e.clientX <= thirdThemePosition) {
    switcher.children[0].style.transform = 'translateX(44.5px)';
    document.documentElement.setAttribute('data-theme', 'third');
  }
});
