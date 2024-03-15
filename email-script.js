function updateEmailWidth(width) {
  const emailTable = document.querySelector('.main-table');
  emailTable.style.maxWidth = width;
}

function updateEmailTheme(theme) {
  const backgroundColor = theme === 'dark' ? '#2c2c2c' : '#f5f5f5';
  const textColor = theme === 'dark' ? '#ffffff' : '#000000';

  document.body.style.backgroundColor = backgroundColor;
  document.querySelectorAll('.header, .footer').forEach(element => {
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
  });

  // Keep the main content block always white with dark text
  const content = document.querySelector('.content');
  content.style.backgroundColor = '#ffffff';
  content.style.color = '#000000';
}
function updateEmailColors(primaryColor) {
  const colorPalette = generateColorPalette(primaryColor);

  const buttons = document.querySelectorAll('.button, .emoji-button');
  buttons.forEach(button => {
    button.style.backgroundColor = colorPalette.buttonBackground;
    button.style.color = colorPalette.buttonText;
  });

  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = colorPalette.linkColor;
  });

  const calloutBlock = document.querySelector('.callout');
  calloutBlock.style.backgroundColor = colorPalette.calloutBackground;
  calloutBlock.style.color = colorPalette.calloutText;

  // Update other elements with colors from the color palette
}

function updateTextSize(size) {
  const textElements = document.querySelectorAll('.content p, .content ul, .content ol, .intro-text, .footer');

  switch (size) {
    case '13px':
      textElements.forEach(element => {
        element.style.fontSize = '13px';
      });
      break;
    case '15px':
      textElements.forEach(element => {
        element.style.fontSize = '15px';
      });
      break;
    case '16px':
      textElements.forEach(element => {
        element.style.fontSize = '16px';
      });
      break;
    case '18px':
      textElements.forEach(element => {
        element.style.fontSize = '18px';
      });
      break;
  }
}

function updateEmailBorder(border) {
  const content = document.querySelector('.content');
  if (border === 'true') {
    content.style.border = '1px solid #dddddd';
  } else {
    content.style.border = 'none';
  }
}

function updateEmailRadius(radius) {
  const content = document.querySelector('.content');
  const buttons = document.querySelectorAll('.button, .emoji-button');

  content.style.borderRadius = `${radius}px`;
  buttons.forEach(button => {
    button.style.borderRadius = `${radius}px`;
  });
}

function updateLogoPosition(position) {
  const logoWrapper = document.querySelector('.logo-wrapper');
  logoWrapper.style.textAlign = position;
}

function updateEmailFont(font) {
  document.body.style.fontFamily = font;
}

function embedGoogleFont(fontData) {
  const { font, fallback } = fontData;

  const fontFaceStyle = `
    @font-face {
      font-family: '${font}';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/${font.replace(/\s+/g, '').toLowerCase()}/v13/${font.replace(/\s+/g, '')}_400.woff2) format('woff2');
    }
  `;
  const fontLinkStyle = `
    <!--[if (gte mso 9)|(IE)]><!-->
    <link rel="noopener" target="_blank" href="https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}&display=swap" rel="stylesheet">
    <!--<![endif]-->
  `;
  const style = document.createElement('style');
  style.textContent = fontFaceStyle;
  document.head.appendChild(style);
  document.head.insertAdjacentHTML('beforeend', fontLinkStyle);
  document.body.style.fontFamily = `'${font}', ${fallback}`;
}

window.addEventListener('message', event => {
  const { type, value } = event.data;

  switch (type) {
    case 'width':
      updateEmailWidth(value);
      break;
    case 'theme':
      updateEmailTheme(value);
      break;
    case 'primaryColor':
      updateEmailColors(value);
      break;
    case 'border':
      updateEmailBorder(value);
      break;
    case 'radius':
      updateEmailRadius(value);
      break;
    case 'logoPosition':
      updateLogoPosition(value);
      break;
    case 'font':
      updateEmailFont(value);
      break;
    case 'googleFont':
      embedGoogleFont(value);
      break;
    case 'textSize':
      updateTextSize(value);
      break;
  }
});