const button = document.getElementById('popover-button');
const content = document.getElementById('popover-content');
let isVisible = false;

button.addEventListener('click', () => {
  if (isVisible) {
    content.style.display = 'none';
    isVisible = false;
  } else {
    const { right, top, width } = button.getBoundingClientRect();

    content.style.left = `${right - 1.28 * width}px`;
    content.style.top = `${top - width / 2}px`;
    content.style.display = 'block';
    isVisible = true;
  }
});
