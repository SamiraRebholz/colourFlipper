const button = document.getElementById('jsTrigger');
const hexCode = document.getElementById('HEX-Code');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  const randomColour = Math.floor(100000 + Math.random() * 900000);
  console.log(randomColour);
  body.style.backgroundColor = `#${randomColour}`;
  hexCode.innerHTML = `#${randomColour}`;
});