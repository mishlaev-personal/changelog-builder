
function updatePreview() {
  // Update the email preview with the current variables, snippets, and contents
  let previewHtml = snippets.header[headerStyle];

  // Replace placeholders with actual content and variables
  previewHtml = previewHtml.replace('{{companyName}}', document.getElementById('company-name').value);
  previewHtml = previewHtml.replace('{{mainWidth}}', variables.mainWidth[mainWidthOption]);
  previewHtml = previewHtml.replace('{{borderRadius}}', variables.curveness[curvenessOption].border);

  document.querySelector('header').innerHTML = previewHtml;

  // Update more snippets and content...
  document.querySelector('main p:first-child').textContent = document.getElementById('intro-text').value;
  document.querySelector('main div').innerHTML = document.getElementById('body-text').value;
  document.querySelector('main p:last-child').textContent = document.getElementById('outro-text').value;

  // Update button snippet
  let buttonHtml = snippets.button;
  buttonHtml = buttonHtml.replace('{{buttonRadius}}', variables.curveness[curvenessOption].button);
  document.querySelector('main div').insertAdjacentHTML('beforeend', buttonHtml);
}

// Add event listeners for content inputs
document.getElementById('company-name').addEventListener('input', updatePreview);
document.getElementById('intro-text').addEventListener('input', updatePreview);
document.getElementById('body-text').addEventListener('input', updatePreview);
document.getElementById('outro-text').addEventListener('input', updatePreview);

// Add event listeners for design settings
document.getElementById('wide-width').addEventListener('click', () => {
  mainWidthOption = 'wide';
  updatePreview();
});

document.getElementById('classic-width').addEventListener('click', () => {
  mainWidthOption = 'classic';
  updatePreview();
});

document.getElementById('narrow-width').addEventListener('click', () => {
  mainWidthOption = 'narrow';
  updatePreview();
});

document.getElementById('curly-curveness').addEventListener('click', () => {
  curvenessOption = 'curly';
  updatePreview();
});

document.getElementById('moderate-curveness').addEventListener('click', () => {
  curvenessOption = 'moderate';
  updatePreview();
});

document.getElementById('one-column-header').addEventListener('click', () => {
  headerStyle = 'oneColumn';
  updatePreview();
});

document.getElementById('two-column-header').addEventListener('click', () => {
  headerStyle = 'twoColumn';
  updatePreview();
});

// Add more event listeners for other design settings...

// Initial preview update
let mainWidthOption = 'classic';
let curvenessOption = 'moderate';
let headerStyle = 'oneColumn';
let companyNameOption = 'option1';
let introTextOption = 'option1';
let bodyTextOption = 'option1';
let outroTextOption = 'option1';
updatePreview();