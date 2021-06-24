const switch1 = document.getElementById('switch1');
const switch2 = document.getElementById('switch2');
const switch3 = document.getElementById('switch3');

switch1.addEventListener('click', () => {
  if (switch2.hasAttribute('checked')) {
    switch2.removeAttribute('checked');
  }
  if (switch3.hasAttribute('checked')) {
    switch3.removeAttribute('checked');
  }
  switch1.setAttribute('checked', '');
  if (switch1.hasAttribute('checked')) {
    document.documentElement.setAttribute('data-theme', 'first');
  }
});

switch2.addEventListener('click', () => {
  if (switch1.hasAttribute('checked')) {
    switch1.removeAttribute('checked');
  }
  if (switch3.hasAttribute('checked')) {
    switch3.removeAttribute('checked');
  }
  switch2.setAttribute('checked', '');
  if (switch2.hasAttribute('checked')) {
    document.documentElement.setAttribute('data-theme', 'second');
  }
});

switch3.addEventListener('click', () => {
  if (switch1.hasAttribute('checked')) {
    switch1.removeAttribute('checked');
  }
  if (switch2.hasAttribute('checked')) {
    switch2.removeAttribute('checked');
  }
  switch3.setAttribute('checked', '');
  if (switch3.hasAttribute('checked')) {
    document.documentElement.setAttribute('data-theme', 'third');
  }
});
