function generateColors(primaryColor, secondaryColor, theme) {
    const colors = {
      textColor: theme === 'dark' ? '#ffffff' : '#171717',
      emailBackgroundColor: theme === 'dark' ? '#000000' : '#f8f9fb',
      columnBackgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
      columnBorderColor: theme === 'dark' ? '#333333' : '#e0e0e0',
      calloutBackgroundColor: theme === 'dark' ? '#333333' : '#f4f4f4',
      calloutTextColor: theme === 'dark' ? '#ffffff' : '#333333',
      calloutBorderColor: theme === 'dark' ? '#666666' : '#cccccc',
      buttonBackgroundColor: primaryColor,
      buttonTextColor: theme === 'dark' ? '#ffffff' : '#1e1c1a',
      buttonHoverColor: secondaryColor || adjustBrightness(primaryColor, -20),
      tagColors: generateTagColors(primaryColor, secondaryColor, theme)
    };
  
    return colors;
  }
  
  function adjustBrightness(color, amount) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    const newR = Math.max(0, Math.min(255, r + amount));
    const newG = Math.max(0, Math.min(255, g + amount));
    const newB = Math.max(0, Math.min(255, b + amount));
  
    const newHex = ((newR << 16) | (newG << 8) | newB).toString(16);
  
    return `#${newHex.padStart(6, '0')}`;
  }
  
  function generateTagColors(primaryColor, secondaryColor, theme) {
    const tagColors = [
      adjustBrightness(primaryColor, theme === 'dark' ? 80 : -30),
      adjustBrightness(primaryColor, theme === 'dark' ? 50 : -50),
      adjustBrightness(secondaryColor || primaryColor, theme === 'dark' ? 80 : -30),
      adjustBrightness(secondaryColor || primaryColor, theme === 'dark' ? 50 : -50)
    ];
  
    return {
      buttonBackground: primaryColor,
      buttonText: '#ffffff',
      linkColor: primaryColor,
      calloutBackground: '#f5f5f5',
      calloutText: '#000000',
      // Add more color values as needed
    };
  }