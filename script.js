const emailIframe = document.getElementById('email-iframe');
const widthButtons = document.querySelectorAll('.width-btn');
const themeButtons = document.querySelectorAll('.theme-btn');
const primaryColorInput = document.getElementById('primary-color');
const borderButtons = document.querySelectorAll('.border-btn');
const radiusRange = document.getElementById('radius-range');
const logoButtons = document.querySelectorAll('.logo-btn');
const fontSelect = document.getElementById('font-select');
const googleFontCheckbox = document.getElementById('google-font-checkbox');
const googleFontSelect = document.getElementById('google-font-select');
const textSizeSelect = document.getElementById('text-size-select');


function sendMessage(type, value) {
    emailIframe.contentWindow.postMessage({ type, value }, '*');
}

function handleButtonClick(buttons, activeClass, type) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove(activeClass));
            button.classList.add(activeClass);
            const value = button.getAttribute(`data-${type}`);
            sendMessage(type, value);
        });
    });
}

handleButtonClick(widthButtons, 'active', 'width');
handleButtonClick(themeButtons, 'active', 'theme');
handleButtonClick(borderButtons, 'active', 'border');
handleButtonClick(logoButtons, 'active', 'logoPosition');


primaryColorInput.addEventListener('input', () => {
    const primaryColor = primaryColorInput.value;
    sendMessage('primaryColor', primaryColor);
});

radiusRange.addEventListener('input', () => {
    const radius = radiusRange.value;
    sendMessage('radius', radius);
});

fontSelect.addEventListener('change', () => {
    const font = fontSelect.value;
    sendMessage('font', font);
});

googleFontCheckbox.addEventListener('change', () => {
  const useGoogleFont = googleFontCheckbox.checked;
  if (useGoogleFont) {
    googleFontSelect.disabled = false;
    const googleFont = googleFontSelect.value;
    sendMessage('googleFont', googleFont);
  } else {
    googleFontSelect.disabled = true;
    sendMessage('font', fontSelect.value);
  }
});

googleFontSelect.addEventListener('change', () => {
  const selectedOption = googleFontSelect.options[googleFontSelect.selectedIndex];
  const googleFont = selectedOption.value;
  const fallbackFonts = selectedOption.getAttribute('data-fallback');
  sendMessage('googleFont', { font: googleFont, fallback: fallbackFonts });
});

textSizeSelect.addEventListener('change', () => {
  const textSize = textSizeSelect.value;
  sendMessage('textSize', textSize);
});