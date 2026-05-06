const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name === '' ? 'Anonymous' : name;
  // nameOutput.textContent = nameInput.value.trim() === '' ? 'Anonymous' : nameInput.value;
});