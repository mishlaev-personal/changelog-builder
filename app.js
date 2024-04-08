function updatePreview() {
  let previewHtml = baseTemplate;

  // Replace snippets
  for (const key in snippets) {
    const regex = new RegExp(`{{${key}(?:\\((.+?)\\))?}}`, 'g');
    previewHtml = previewHtml.replace(regex, (match, propsString) => {
      const snippet = snippets[key][selectedOptions[`${key}Layout`]];
      if (typeof snippet === 'function') {
        if (propsString) {
          const props = {};
          const propPairs = propsString.split(',').map(pair => pair.trim());
          propPairs.forEach(pair => {
            const [key, value] = pair.split(':').map(item => item.trim());
            props[key] = value.replace(/^'(.*)'$/, '$1');
          });
          props.selectedOptions = selectedOptions; // Add selectedOptions to props
          return snippet(props);
        } else {
          return snippet({ selectedOptions }); // Pass selectedOptions as props
        }
      } else {
        return snippet;
      }
    });
  }

  // Replace variables
  for (const key in selectedOptions) {
    if (key in variables) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      previewHtml = previewHtml.replace(regex, variables[key][selectedOptions[key]]);
    }
  }

  // Replace nested variables
  for (const key in selectedOptions) {
    const nestedRegex = new RegExp(`{{${key}\\.(\\w+)}}`, 'g');
    previewHtml = previewHtml.replace(nestedRegex, (match, nestedKey) => {
      return variables[key][selectedOptions[key]][nestedKey];
    });
  }

  // Replace content variables
  for (const key in contents) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    previewHtml = previewHtml.replace(regex, document.getElementById(key).value);
  }

  // Evaluate math expressions
  const mathExprRegex = /{{(.*?)}}/g;
  previewHtml = previewHtml.replace(mathExprRegex, (match, expr) => {
    try {
      return eval(expr);
    } catch (error) {
      console.warn(`Error evaluating math expression: ${expr}`, error);
      return match;
    }
  });


  document.getElementById('email-preview').innerHTML = previewHtml;
}

function generateContentPanel() {
  const contentPanel = document.getElementById('content-panel');
  contentPanel.innerHTML = '<h3>Content Management</h3>';

  // Add the randomization button to the content panel
  const randomizeContentButton = document.createElement('button');
  randomizeContentButton.textContent = 'Randomize Content';
  randomizeContentButton.addEventListener('click', randomizeContent);
  contentPanel.appendChild(randomizeContentButton);

  for (const key in contents) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', key);
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
    const input = document.createElement('textarea');
    input.setAttribute('id', key);
    input.value = contents[key].option1;
    input.addEventListener('input', updatePreview);
    div.appendChild(label);
    div.appendChild(input);
    contentPanel.appendChild(div);
  }

}

function generateDesignPanel() {
  const designPanel = document.getElementById('design-panel');
  designPanel.innerHTML = '<h3>Design Settings</h3>';

  // Add the randomization button to the design panel
  const randomizeDesignButton = document.createElement('button');
  randomizeDesignButton.textContent = 'Randomize Design';
  randomizeDesignButton.addEventListener('click', randomizeDesign);
  designPanel.appendChild(randomizeDesignButton);

  for (const key in variables) {
    if (Object.keys(variables[key]).length > 1) {
      const div = document.createElement('div');
      div.setAttribute('data-key', key);
      const label = document.createElement('label');
      label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
      div.appendChild(label);

      for (const option in variables[key]) {
        const button = document.createElement('button');
        button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        button.addEventListener('click', () => {
          selectedOptions[key] = option;
          updatePreview();
          updateActiveButton(key, option);
        });
        div.appendChild(button);
        console.log(`Generated button for variable: ${key}, option: ${option}`);
      }

      designPanel.appendChild(div);
    }
  }

  for (const key in snippets) {
    if (Object.keys(snippets[key]).length > 1) {
      const div = document.createElement('div');
      div.setAttribute('data-key', key);
      const label = document.createElement('label');
      label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';
      div.appendChild(label);

      for (const option in snippets[key]) {
        const button = document.createElement('button');
        button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        button.addEventListener('click', () => {
          selectedOptions[key] = key;
          selectedOptions[`${key}Layout`] = option;
          updatePreview();
          updateActiveButton(key, option);
        });
        div.appendChild(button);
        console.log(`Generated button for snippet: ${key}, layout: ${option}`);
      }

      designPanel.appendChild(div);
    }
  }

}

function updateActiveButton(key, option) {
  const buttons = document.querySelectorAll(`#design-panel div[data-key="${key}"] button`);
  buttons.forEach(button => {
    const buttonOption = button.textContent.toLowerCase();
    if (buttonOption === option.toLowerCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function randomizeContent() {
  for (const key in contents) {
    const options = Object.keys(contents[key]);
    const randomOption = options[Math.floor(Math.random() * options.length)];
    document.getElementById(key).value = contents[key][randomOption];
  }
  updatePreview();
}

function randomizeDesign() {
  for (const key in variables) {
    const options = Object.keys(variables[key]);
    const randomOption = options[Math.floor(Math.random() * options.length)];
    selectedOptions[key] = randomOption;
  }

  for (const key in snippets) {
    const options = Object.keys(snippets[key]);
    const randomOption = options[Math.floor(Math.random() * options.length)];
    selectedOptions[key] = key;
    selectedOptions[`${key}Layout`] = randomOption;
  }

  updatePreview();
  updateActiveButtons();
}

function updateActiveButtons() {
  for (const key in selectedOptions) {
    if (key in variables) {
      updateActiveButton(key, selectedOptions[key]);
    } else if (key.endsWith('Layout')) {
      const snippetKey = key.slice(0, -6);
      updateActiveButton(snippetKey, selectedOptions[key]);
    }
  }
}

// Generate panels
generateContentPanel();
generateDesignPanel();

// Initial preview update
const selectedOptions = {};

for (const key in variables) {
  selectedOptions[key] = Object.keys(variables[key])[0];
}

for (const key in snippets) {
  selectedOptions[key] = key;
  selectedOptions[`${key}Layout`] = Object.keys(snippets[key])[0];
}

// Randomize content and design on page load
randomizeContent();
randomizeDesign();

updatePreview();