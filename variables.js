const variables = {
    companyName: {
        default: 'Acme Inc.'
    },
    introText: {
        default: 'Hey it is an into text'
    },
    width: ['680px', '600px', '400px'],
    logo_hight: ['24px','32px','56px'], 
    fontVariants: {
        'system-default': {
          style: `body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }`,
          inline: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
        },
        'georgia': {
          style: `body { font-family: Georgia, 'Times New Roman', Times, serif; }`,
          inline: `Georgia, 'Times New Roman', Times, serif`
        },
        'inter': {
          style: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'); body { font-family: 'Inter', Helvetica, Arial, sans-serif; }`,
          inline: `'Inter', Helvetica, Arial, sans-serif`
        }
      }, 
    radius: {
        small: {
            border: '2px',
            button: '4px'
        },
        large: {
            border: '16px',
            button: '50px'
        }
    }
};

export default variables;