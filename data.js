const variables = {
  mainWidth: {
    wide: '680',
    classic: '600',
    narrow: '400'
  },
  logoHight: {
    tiny: '32',
    normal: '48',
    lrage: '72'
  },
  curveness: {
    round: {
      border: '16',
      button: '100'
    },
    curly: {
      border: '8',
      button: '8'
    },
    squre: {
      border: '4',
      button: '4'
    }
  },
  border: {
    bold: {
      width: '3',
    },
    tiny: {
      width: '1',
    },
    no: {
      width: '0',
    }
  },
  padding: {
    air: {
      global: '48',
      bigGap: '24',
      gap: '12',
    },
    classic: {
      global: '40',
      bigGap: '24',
      gap: '10',
    },
    Compact: {
      global: '32',
      bigGap: '16',
      gap: '8',
    }
  },
  fontSize: {
    px16: {
      header1: '40',
      header2: '26',
      header3: '21  ',
      paragraph: '16',
      small: '14',
    },
    px15: {
      header1: '32',
      header2: '26',
      header3: '21',
      paragraph: '15',
      small: '13',
    },
    px13: {
      header1: '24',
      header2: '18',
      header3: '14',
      paragraph: '13',
      small: '12',
    },
  },
  fontFamily: {
    inter: {
      mainFallback: 'Helvetica, Arial, sans-serif',
      mainCssStyle: `font-family: "Inter", sans-serif !important;
      font-weight: 400 !important;`,
      mainLink: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400&amp;display=swap"
      em-class="em-font-main">`,
      titleFallback: 'Helvetica, Arial, sans-serif',
      titleCssStyle: `font-family: "Inter", sans-serif !important;
      font-weight: 700 !important;`,
      titleLink: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,700&amp;display=swap"
      em-class="em-font-title">`,
    },
    courier: {
      mainFallback: 'Courier, monospace',
      mainCssStyle: `font-family: "Courier Prime", monospace !important;
      font-weight: 400 !important;`,
      mainLink: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
      em-class="em-font-main">`,
      titleFallback: 'Courier, monospace',
      titleCssStyle: `font-family: "Courier Prime", monospace !important;
      font-weight: 700 !important;`,
      titleLink: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap"
      em-class="em-font-title">`,
    },
    robotoPlayfair: {
      mainFallback: `Helvetica, Arial, sans-serif`,
      mainCssStyle: `font-family: "Roboto", sans-serif !important;
      font-weight: 400 !important;`,
      mainLink: `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      em-class="em-font-main">`,
      titleFallback: `georgia, 'times new roman', serif`,
      titleCssStyle: `font-family: "Playfair", serif !important;
      font-weight: 600 !important;`,
      titleLink: `<link rel="stylesheet" https://fonts.googleapis.com/css2?family=Playfair:opsz,wght@5..1200,600&display=swap"
      em-class="em-font-title">`,
    },
  },
  color: {
    blackWhiteBlue: {
      backgroundMain: '#ffffff',
      backgroundContent: '#ffffff',
      border: "#e5e7eb",
      ctaBg: '#2142e7',
      ctaBgHover: '#0a33ff',
      ctaText: '#ffffff',
      titles: '#111827',
      text: '#113226',
      textDim: '#6b7280;',
      link: '#2142e7',
      linkHover: '#111827',
      calloutBg: '#e9ecfd',
    },
    greenDark: {
      backgroundMain: '#13221C',
      backgroundContent: '#13221C',
      border: "#1F2F29",
      ctaBg: '#27ae60',
      ctaBgHover: '#39D97C',
      ctaText: '#ffffff',
      titles: '#ffffff',
      text: '#C3CECB',
      textDim: '#73827C;',
      link: '#ffffff',
      linkHover: '#39D97C',
      calloutBg: '#1F2F29',
    },
    dark: {
      backgroundMain: '#161616',
      backgroundContent: '#161616',
      border: "#343434",
      ctaBg: '#343434',
      ctaBgHover: '#505050',
      ctaText: '#EDEDED',
      titles: '#EDEDED',
      text: '#A0A0A0',
      textDim: '#7E7E7E;',
      link: '#BABABA',
      linkHover: '#EDEDED',
      calloutBg: '#232323',
    },
    sand: {
      backgroundMain: '#FBF7EE',
      backgroundContent: '#FDFDF9',
      border: "#d6d2bf",
      ctaBg: '#F5D90A',
      ctaBgHover: '#F7CE00',
      ctaText: '#35290F',
      titles: '#35290F',
      text: '#1c1c1e',
      textDim: '#6D6D6E;',
      link: '#4262ff',
      linkHover: '#183eff',
      calloutBg: '#f5f5f7',
    }
  },
  featureListIteamDescription: {
    show: ``,
    hide: `display: none;`,
  },

  
};

const snippets = {
  // Blocks are the main building large htmls, could be embedeed ONLY boilerplate.js at the root level 
  headerBlock: {
    airOld: `
        <tr em="block" class="em-structure">
            <td align="center" {{noBgAndBorderTopLogic}}>
                <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                <tr>
                    <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                        <tr>
                        <td>
                            <img src="{{companyLogo}}" border="0" alt="" style="display: block;" height="{{logoHight}}">
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </td>
        </tr>
        `,
    air: `<tr em="block" class="em-structure">
  <td align="center" {{noBgAndBorderTopLogic}}>
    <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
      <tr>
        <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
            <tr>
              <td>
                <img src="{{companyLogo}}" border="0" alt="{{companyName}}" style="display: block;"
                  height="{{logoHight}}">
              </td>
            </tr>
          </table>
        </td>
        <td width="20" class="em-mob-wrap em-mob-wrap-cancel"></td>
        <td width="100%" valign="middle" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto" style="padding: 0px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
            <tr>
              <td style="padding: 0px; height: 100%;" valign="middle" height="100%">
                <div style="font-family: {{fontFamily.mainFallback}};" class="em-font-main" align="right"><a href=""
                    target="_blank"
                    style="text-decoration: underline; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.textDim}}"><span
                      class="text-gray">View in browser</span></a></div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>
</tr>`,
  },
  announcementeBlock: {
    air: `
    {{fullWidthImageLayout}}

    <!--tags-wrapper: start-->
  <tr em="block" class="em-structure">
    <td align="left"
      style="padding: {{padding.gap}}px {{padding.global}}px 0px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      {{tagsAtom}}
    </td>
  </tr>
  <!--tags-wrapper: end-->

  <tr em="block" class="em-structure">
    <td align="center"
      style="padding: 0px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding: {{padding.gap}}px 0px;">
                  <div
                    style="font-family: {{fontFamily.titleFallback}}; font-size: {{fontSize.header2}}px; line-height: {{fontSizeHeader2HightMath}}px; color: {{color.titles}};"
                    class="em-font-title">Set the stage.
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
                    class="em-font-main"><a href="" target="_blank"
                      style="color: {{{color.link}}}; text-decoration:  underline;"><strong></strong></a>Every Arcade
                    should look and feel like an extension of your brand. Now, you can choose a custom
                    background to make your Arcade pop even more.<br></div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
                    class="em-font-main">Our latest benchmark report also found that the top 10% of
                    Arcades (by play rate) had 1.7x more backgrounds, signaling that more visually engaging
                    demos lead to better engagement. Plus, backgrounds are just fun 🌈 🤩 .
                  </div>
                </td>
              </tr>
            </table>
            {{buttonMainAtom}}

          </td>
        </tr>
      </table>
    </td>
  </tr>
        `
  },
  dateTitleBlock: {
    air: `<tr em="block" class="em-structure">
    <td align="center" {{noBgAndBorderMiddleLogic}}>
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.bigGap}}px; padding-top: {{padding.gap}}px;" align="center">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.titles}};"
                    class="em-font-main">March 2024 🕹
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding: 0px 0px {{padding.bigGap}}px;">
                  <div
                    style="font-family: {{fontFamily.titleFallback}}; font-size: {{fontSize.header1}}px; line-height: {{fontSizeHeader1HightMath}}px; color: {{color.titles}};"
                    class="em-font-title" align="center">{{mainFeatureTitle}}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
  },
  dividerBlock: {
    empty: `<!--divider-->
    <tr em="block" class="em-structure">
            <td align="center" style="border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;
            class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                <tr>
                  <td height="{{padding.bigGap}}"></td>
                </tr>
              </table>
            </td>
          </tr>`,
    line: `{{lineDividerBlock}}`,
    framing: (props) => `<!--divider-->
  <tr em="block" class="em-structure" style="display:${props.hideFirst};">
  <td align="center"
    style="border-right: {{border.width}}px solid {{color.border}}; border-bottom: {{border.width}}px solid {{color.border}}; border-left: {{border.width}}px solid {{color.border}}; border-bottom-left-radius: {{curveness.border}}px; border-bottom-right-radius: {{curveness.border}}px; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
    class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom" style="display:${props.hideFirst};">
      <tr>
        <td height="{{paddingGlobalMinusGapMath}}"></td>
      </tr>
    </table>
  </td>
</tr>
  <tr em="block" class="em-structure">
    <td align="center" style="border-width: 0px; background-color: {{color.backgroundMain}}; background-repeat: repeat;
    class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundMain}}">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
        <tr>
          <td height="${props.gapHeight}"></td>
        </tr>
      </table>
    </td>
</tr>
  <tr em="block" class="em-structure" style="display:${props.hideLast};">
      <td align="center"
        style="border-top-left-radius: {{curveness.border}}px; border-top-right-radius: {{curveness.border}}px; border-width: {{border.width}}px {{border.width}}px 0px; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: {{color.border}}; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
        class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundContent}}">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom" style="display:${props.hideLast};">
          <tr>
            <td height="{{paddingGlobalMinusGapMath}}"></td>
          </tr>
        </table>
      </td>
  </tr>
    `,
  },
  introBlock: {
    bigFeature: `
        <tr em="block" class="em-structure">
        <td align="center" {{noBgAndBorderMiddleLogic}}>
            <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                <tr>
                <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                    <tr>
                        <td style="padding: 0px 0px {{padding.bigGap}}px;">
                        <div
                            style="font-family: {{fontFamily.titleFallback}}; font-size: {{fontSize.header2}}px; line-height: {{fontSizeHeader2HightMath}}px; color: {{color.titles}};"
                            class="em-font-title">{{intoTitle}}
                        </div>
                        </td>
                    </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                    <tr>
                        <td style="padding-bottom: {{padding.bigGap}}px;">
                        <div
                            style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
                            class="em-font-main">{{introContent}}</div>
                        </td>
                    </tr>
                    </table>
                </td>
                </tr>
            </table>
            </td>
        </tr>
        `
  },
  calloutBlock: {
    background: `<tr em="block" class="em-structure">
    <td align="center"
      style="padding: {{padding.gap}}px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td
                  style="padding: {{fontSize.paragraph}}px; background-color: {{color.calloutBg}}; background-repeat: repeat; border-radius: {{curveness.border}}px;"
                  bgcolor="{{color.calloutBg}}">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
                    class="em-font-main">🕹 <strong>Pro tip</strong>: Get ahead of spring cleaning
                      and organize your Arcades into folders (and tags for a layer deeper!) Time spent
                      organizing will unlock deeper insights and allow you to curate groups of Arcade for
                      performance analysis.
                      {{innerColWidthMath}}
                      </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },
  featureListTitleBlock: {
    simple: `<tr em="block" class="em-structure">
    <td align="center"
      style="padding: {{padding.gap}}px {{padding.global}}px 0px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding: 0px;">
                  <div
                    style="font-family: {{fontFamily.titleFallback}}; font-size: {{fontSize.header2}}px; line-height: {{fontSizeHeader2HightMath}}px; color: {{color.titles}};"
                    class="em-font-title">Done
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px; padding-top: 0px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.textDim}};"
                    class="em-font-main">2 highlighted ideas: you've either asked or upvoted it.</div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
`,
  },
  featureListWrapperBlock: {
    listSimple: `<tr em="block" class="em-structure">
    <td align="center"
      style="padding: 0px {{padding.global}}px {{padding.gap}}px {{padding.global}}px ; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <!-- Feature item -->
            {{featureListIteamAtom(bgcolor: '{{color.calloutBg}}',emoji: '🍱', title: '[My idea] Indicative Discount Prediction', description: 'Ensure correct region links when logged out.')}}
            {{featureListIteamAtom(bgcolor: '{{color.calloutBg}}', emoji: '💰', title: '[My upvote] Default PS Plus Sale Prices', description: 'Extensive multilingual support for various languages.')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '🏢', title: 'Publisher Search', description: 'Display both discounted and non-discounted games.')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '🏆', title: 'Regional Trophy List Filter', description: 'Improve user experience compared to mobile browser.')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '🔔', title: '"Notify Me If Price Drops" Bug Fix', description: 'Correct price calculation for percentage option in price drop notifications.')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '📧', title: 'Email Unsubscription', description: 'Option to unsubscribe from platform update emails.')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '🇭🇷', title: 'Croatia PS Store Currency Change', description: 'Reset to address price drop due to currency change from "kn" to "€".')}}
            {{featureListIteamAtom(bgcolor: '{{color.backgroundContent}}', emoji: '🎮', title: 'Xbox Function Parity with PS', description: 'Implement features like genres local co-op filter account integration and achievements for Xbox.')}}
            </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },
  featureListBlock: {
    simple: `<tr em="block" class="em-structure">
    <td align="center"
      style="padding: 0px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding: {{padding.gap}}px 0px;">
                  <div
                    style="font-family: {{fontFamily.titleFallback}}; font-size: {{fontSize.header2}}px; line-height: {{fontSizeHeader2HightMath}}px; color: {{color.titles}};"
                    class="em-font-title">Three ways to use Collections:
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
                    class="em-font-main">Over the past few months, we have invested in providing more
                    detailed and actionable insights for your demos. Some of the features we introduced include
                    <a href="" target="_blank" style="color: {{color.link}}; text-decoration: underline;"><span
                        class="text-links">audience
                        reveal</span></a> and integrations. In February, we rolled out more updates to <a
                      href="" target="_blank" style="color: {{color.link}}; text-decoration: underline;"><span
                        class="text-links">Insights</span></a>* to
                    allow you to get more granular data.
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.textDim}};"
                    class="em-font-main">*Collections are available on Growth and Enterprise plans. <a
                      href="" target="_blank" style="color: {{color.link}}; text-decoration:  underline;"><span
                        class="text-links">Learn more
                        about pricing</span></a>.
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
    colTwo: `<tr em="block" class="em-structure">
    <td align="center"
      style="padding: {{padding.gap}}px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="270" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding: 6px 6px; vertical-align: middle;">
                  <div style="line-height: {{fontSizeHeader3HightMath}}px; padding-right: 18px; vertical-align: bottom;"><a href="#" target="_blank"
                      style="color: {{color.titles}}; text-decoration: none; font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.header3}}px;"
                      new="true" class="em-font-title title">CSV Downloads</a>
                      {{likeButtonInline(height: '{{fontSize.paragraph}}')}}
                  </div>
                </td>
              </tr>
            </table>
            {{tagsAtom}}
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: 6px; padding-top: 6px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}}"
                    class="em-font-main">Export your Insight data for further analysis using external
                    tools.
                  </div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: 5px; padding-top: 6px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.link}};"
                    class="em-font-main"><a href="#" target="_blank"
                      style="color: {{color.link}}; text-decoration:  none;" new="true" class="link"><span
                        style="text-decoration: underline;" class="text-links">Try CSV</span><span
                        style="text-decoration: none;" class="arrow"> →</span></a></div>
                </td>
              </tr>
            </table>
          </td>
          <td width="{{padding.bigGap}}" class="em-mob-wrap"></td>
          <!-- TODO: calculate the cal width -->
          <td width="270" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td>
                  <img src="images/240401_45_LWSuP5U.png" width="271" border="0" alt=""
                    style="display: block; width: 100%; max-width: 271px; border-radius: {{borderRadiusQuaterMath}}px;">
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },
  reactionBlock: {
    pills: `<tr em="block" class="em-structure">
    <td align="left"
      style="padding: {{padding.gap}}px {{padding.global}}px; border-width: {{border.width}}px; border-color:{{color.border}}; border-left-style: solid; border-right-style: solid;"
      class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
        {{reactionPillButtonAtom(image: 'images/like.png', imageHover: 'images/like-hover.png', title: '❤︎ Rate up the update!', alt: 'Like', text: 'LIKE')}}
          <td width="12" class="em-mob-wrap em-mob-wrap-cancel"></td>
        {{reactionPillButtonAtom(image: 'images/dislike.png', imageHover: 'images/dislike-hover.png', title: 'Rate down the update!', alt: 'Dislike', text: '')}}
          <td width="12" class="em-mob-wrap em-mob-wrap-cancel"></td>
        {{reactionPillButtonAtom(image: 'images/comment.png', imageHover: 'images/comment-hover.png', title: 'Share your thoughts', alt: 'Comment', text: 'DISCUSS')}}
        </tr>
      </table>
    </td>
  </tr>`,
  },
  footerBlock: {
    simple: `
        <tr em="block" class="em-structure">
            <td align="center" {{noBgAndBorderBottomLogic}}>
              <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
                <tr>
                  <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
                    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                      <tr>
                        <td style="padding: 0px;">
                          <a href="" target="_blank"
                            style="color: {{color.border}}; text-decoration: underline; font-size: {{fontSize.small}}px;">
                            <div
                              style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.link}};"
                              class="em-font-main" align="center">Unsubscribe from {{companyName}} emails</div>
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        `,
    socialMedia: `
    <!-- Footer with Socail Media and address -->
  {{socailMediaBlock}}
  <tr em="block" class="em-structure">
    <td align="center" {{noBgAndBorderBottomLogic}}>
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px; padding-top: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.textDim}};"
                    class="em-font-main" align="left">
                    You are receiving this email because you signed up to <a href="" target="_blank"
                      style="text-decoration: underline; color: {{color.textDim}};"><span
                        class="text-gray">{{companyName}}</span></a><br>GAMETTI LTD,
                    2nd Floor, College House, 17 King Edwards Road, Ruislip, London<br></div>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-bottom: {{padding.gap}}px; padding-top: {{padding.gap}}px;">
                  <div
                    style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: {{color.textDim}};"
                    class="em-font-main" align="left"><a href="" target="_blank"
                      style="text-decoration: underline; color: {{color.textDim}};"><span
                        class="text-gray">Unsubscribe</span></a> from {{companyName}} Release
                    Notes</div>
                </td>
              </tr>
            </table>


          </td>
        </tr>
      </table>
    </td>
  </tr>
    `,
  },
  socailMediaBlock: {
    dark: `<tr em="block" class="em-structure">
    <td align="center" {{noBgAndBorderMiddleLogic}}>
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" align="left" class="em-mob-wrap em-mob-wrap-cancel em-mob-width-auto">
            <table border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td em="atom" width="40">
                  <img src="images/240401_45_1awTGIv.png" width="30" border="0" alt="" style="display: block;">
                </td>
                <td em="atom" width="40">
                  <img src="images/240401_45_hsPNE31.png" width="30" border="0" alt="" style="display: block;">
                </td>
                <td em="atom" width="40">
                  <img src="images/240401_45_MJrPIRN.png" width="30" border="0" alt="" style="display: block;">
                </td>
                <td em="atom" width="40">
                  <img src="images/240401_45_w8mmGzP.png" width="30" border="0" alt="" style="display: block;">
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },

  lineDividerBlock: {
    line: `<!--divider-->
    <tr em="block" class="em-structure">
    <td align="center"
      style="padding: {{padding.bigGap}}px {{padding.global}}px {{padding.gap}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" em="atom" width="100%">
              <tr>
                <td style="padding: 0px; border-top: {{noEmptyLineDividerLogic}}px solid {{color.border}};">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },

  adminWarningBlock: {
    off: ``,
    on: `<tr em="block" class="em-structure">
      <td align="center" style="padding: 12px 6px; background-color: #ebbc00; background-repeat: repeat;"
        bgcolor="#EBBC00" background="images/warningBg.png">
        <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
          <tr>
            <td width="{{mainWidth}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                <tr>
                  <td style="padding: 6px 0px;">
                    <div
                      style="font-family: {{fontFamily.titleFallback}}; font-size: 24px; line-height: 36px; color: #111827;"
                      class="em-font-title" align="center">This is a Release Notes Preview</div>
                  </td>
                </tr>
              </table>

              <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                <tr>
                  <td style="padding-bottom: 6px;">
                    <div
                      style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: #121212;"
                      class="em-font-main" align="center">Only board admins can see that. Nothing will be send
                      without your approval.</div>
                  </td>
                </tr>
              </table>
              <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                <tr>
                  <td style="padding: 10px 0;" align="center">
                    <table cellpadding="0" cellspacing="0" border="0" width="200">
                      <tr>
                        <td align="center" valign="middle" height="41"
                          style="background-color: #282828; border-radius: 8px; height: 41px;" bgcolor="#282828">
                          <a href="" target="_blank"
                            style="display: block; height: 41px; font-family: {{fontFamily.mainFallback}}; color: #ffffff; font-size: 14px; line-height: 41px; text-decoration: none; white-space: nowrap; padding-bottom: 0px;"
                            class="em-font-title bg-black">Go to Approval</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>


            </td>
          </tr>
        </table>
      </td>
    </tr>`
  },

  // Atoms are smaller html blocks, could be embedeed ONLY into Blocks 
  buttonMainAtom: {
    air: `
    <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
    <tr>
      <td style="padding: {{padding.bigGap}}px 0px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center" valign="middle"
              style="background-color: {{color.ctaBg}}; border-radius: {{curveness.button}}px;">
              <!-- TODO: calculate button's paddings -->
              <a href="" target="_blank"
                style="display: block; font-family: {{fontFamily.mainFallback}}; color: {{color.ctaText}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; text-decoration: none; white-space: nowrap; padding: 16px 28px;"
                class="em-font-main bg-main-cta">Try custom backgrounds</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  `
  },
  tagsAtom: {
    filled: `<table  border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td valign="top" class="em-mob-wrap em-mob-wrap-cancel">
        <table cellpadding="0" cellspacing="0" border="0" em="atom">
          <tr>
          <!--TODO: add tags color scheme-->
          <!--TODO: move tags to atoms-->
            <td
              style="padding: 2px 8px; background-color: #e7f9fb; background-repeat: repeat; border-radius: {{curveness.button}}px;"
              bgcolor="#e7f9fb">
              <div
                style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: #0c7792;"
                class="em-font-main">Integrations</div>
            </td>
          </tr>
        </table>
      </td>
      <td width="12" class="em-mob-wrap em-mob-wrap-cancel"></td>
      <td valign="top" class="em-mob-wrap em-mob-wrap-cancel">
        <table cellpadding="0" cellspacing="0" border="0" em="atom">
          <tr>
            <td
              style="padding: 2px 8px; background-repeat: repeat; border-radius: {{curveness.button}}px; background-color: #feeef8;"
              bgcolor="#feeef8">
              <div
                style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: #cd1d8d;"
                class="em-font-main">Evaluation</div>
            </td>
          </tr>
        </table>
      </td>
      <td width="12" class="em-mob-wrap em-mob-wrap-cancel"></td>
      <td valign="top" class="em-mob-wrap em-mob-wrap-cancel">
        <table cellpadding="0" cellspacing="0" border="0" em="atom">
          <tr>
            <td
              style="padding: 2px 8px; background-repeat: repeat; border-radius: {{curveness.button}}px; background-color: #e9f9ee;"
              bgcolor="#e9f9ee">
              <div
                style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; line-height: {{fontSizeSmallHightMath}}px; color: #18794e;"
                class="em-font-main">Voting</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`,
    transperent: `<table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
    <tr>
      <td>
        <div
          style="font-family: {{fontFamily.mainFallback}}; line-height: {{fontSizeSmallHightMath}}px; color: #121212; font-size: {{fontSize.small}}px;"
          class="em-font-main">&nbsp;<span
            style="color: #0c7792; font-size: {{fontSize.small}}px;">#integrations&nbsp;</span><span
            style="color: {{color.textDim}}; font-size: {{fontSize.small}}px;"> ·&nbsp;&nbsp;</span><span
            style="color: #cd1d8d; font-size: {{fontSize.small}}px;">#Evaluation</span><span
            style="color: {{color.textDim}}; font-size: {{fontSize.small}}px;">&nbsp; ·&nbsp;&nbsp;</span><span
            style="color: #18794e; font-size: {{fontSize.small}}px;">#Voting</span></div>
      </td>
    </tr>
  </table>`,
    none: ``,
  },
  reactionPillButtonAtom: {
    air: (props) => `<td valign="middle" class="em-mob-wrap em-mob-wrap-cancel">
    <table cellpadding="0" cellspacing="0" border="0" em="atom">
      <tr>
      <!--TODO: Calculate button sizes-->
        <td>
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" valign="middle"
                style="border-radius: {{curveness.button}}px; border-width: 1px; border-style: solid; border-color: {{color.border}};"
                class="bg-reactions">
                <a href="" target="_blank"
                  style="display: block; font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.small}}px; text-decoration: none; white-space: nowrap; padding: 10px 14px; color: {{color.titles}};"
                  class="em-font-main">
                  <span class="rollover">
                    <img src="${props.image}" border="0" alt="Like Button"
                      style="display: inline-block; vertical-align: middle;" class="pill" height="18"
                      title="${props.title}"><img src="${props.image}" border="0"
                      alt="${props.alt}"
                      style="display: inline-block; vertical-align: middle; max-height:0px;"
                      class="pill-hover" height="18" title="${props.title}">
                  </span><span style="line-height: 12px; vertical-align: middle;">
                    ${props.text}</span>
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </td>`,
  },

  featureListIteamAtom: {
    headerAndText: (props) => `<table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
    <tr>
      <td
        style="padding: {{paddingGapQuaterMath}}px {{padding.gap}}px; background-color: ${props.bgcolor}; background-repeat: repeat; border-radius: {{curveness.border}}px;"
        bgcolor="${props.bgcolor}">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td align="left" valign="top" width="{{fontSizeParagraphHightMath}}" style="padding: 1px {{paddingGapHalfMath}}px 0 {{paddingGapHalfMath}}px;">
            <div
              style="font-family: {{fontFamily.mainFallback}}; font-size: {{fontSize.paragraph}}px; line-height: {{fontSizeParagraphHightMath}}px; color: {{color.text}};"
              class="em-font-main">${props.emoji}</div>
            </td>
            <td align="left" valign="top" style="padding-bottom: 0px; padding-top: 0px;">
              <div
                class="em-font-main"><a href="#" class="em-font-main title"
                  style="line-height: {{fontSizeParagraphHightMath}}px; font-size: {{fontSize.paragraph}}px; color: {{color.text}}; font-family: {{fontFamily.mainFallback}}; text-decoration: none;">
                  ${props.title}</a></span>
                {{likeButtonInline(height: '{{fontSize.paragraph}}')}}
                <span style="{{featureListIteamDescription}} font-family: {{fontFamily.mainFallback}}; line-height: {{fontSizeParagraphHightMath}}px; font-size: {{fontSize.paragraph}}px; color: {{color.textDim}};">
                <br>${props.description}
                </span>
                <br>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
    <tr>
      <td height="4"></td>
    </tr>
  </table>`,
  },

  // If we chose border width No and we have a line divider On, the diveder shouldn't disapper 
  noEmptyLineDividerLogic: {
    noLess: (props) => {
      const { selectedOptions } = props;
      if (selectedOptions.border === 'no') {
        return `1`;
      } else {
        return `{{border.width}}`;
      }
    },
  },

  // For the Divider = Framing remove border and background  
  noBgAndBorderTopLogic: {
    noLess: (props) => {
      const { selectedOptions } = props;
      if (selectedOptions.dividerBlockLayout === 'framing') {
        return `style="padding: {{padding.global}}px {{padding.global}}px {{padding.gap}}px; border-width: 0px; background-color: {{color.backgroundMain}}; background-repeat: repeat;"
        class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundContent}}"`;
      } else {
        return `style="padding: {{padding.global}}px {{padding.global}}px {{padding.gap}}px; border-top-left-radius: {{curveness.border}}px; border-top-right-radius: {{curveness.border}}px; border-width: {{border.width}}px {{border.width}}px 0px; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: {{color.border}}; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
        class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundContent}}"`;
      }
    },
  },

  // For the Divider = Framing remove border and background  
  noBgAndBorderMiddleLogic: {
    noLess: (props) => {
      const { selectedOptions } = props;
      if (selectedOptions.dividerBlockLayout === 'framing') {
        return `style="padding: 0px {{padding.global}}px; border-width: 0px; background-color: {{color.backgroundMain}}; background-repeat: repeat;"
        class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundMain}}"`;
      } else {
        return `style="padding: 0px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
        class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}"`;
      }
    },
  },

    // For the Divider = Framing remove border and background  
    noBgAndBorderBottomLogic: {
      noLess: (props) => {
        const { selectedOptions } = props;
        if (selectedOptions.dividerBlockLayout === 'framing') {
          return `style="padding: {{padding.gap}}px {{padding.global}}px {{padding.global}}px; background-color: {{color.backgroundMain>}}; background-repeat: repeat;"
          class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundMain}}"`;
        } else {
          return `style="padding: {{padding.gap}}px {{padding.global}}px {{padding.global}}px; border-right: {{border.width}}px solid {{color.border}}; border-bottom: {{border.width}}px solid {{color.border}}; border-left: {{border.width}}px solid {{color.border}}; border-bottom-left-radius: {{curveness.border}}px; border-bottom-right-radius: {{curveness.border}}px; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
          class="em-mob-padding_left-20 em-mob-padding_right-20" bgcolor="{{color.backgroundContent}}"`;
        }
      },
    },

  // Layout Style. part of block styling gives us ability to use full width images  
  fullWidthImageLayout: {
    mainCol: `
    <tr em="block" class="em-structure">
      <td align="center"
      style="padding: 0px {{padding.global}}px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
      class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
        <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
          <tr>
            <td width="{{innerColWidthMath}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
              <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
                <tr>
                  <td style="padding-top: 20px;">
                    <img src="{{mainFeatureImage}}" width="100%" border="0" alt=""
                      style="display: block; width: 100%; max-width: 100%;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    `,
    full: `<tr em="block" class="em-structure">
    <td align="center"
    style="padding: 0px 0px; border-width: 0px {{border.width}}px; border-right-style: solid; border-left-style: solid; border-right-color: {{color.border}}; border-left-color: {{color.border}}; background-color: {{color.backgroundContent}}; background-repeat: repeat;"
    class="em-mob-padding_right-10 em-mob-padding_left-10" bgcolor="{{color.backgroundContent}}">
      <table border="0" cellspacing="0" cellpadding="0" class="em-mob-width-100perc">
        <tr>
          <td width="{{mainWidth}}" valign="top" class="em-mob-wrap em-mob-width-100perc">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" em="atom">
              <tr>
                <td style="padding-top: 20px;">
                  <img src="{{mainFeatureImage}}" width="100%" border="0" alt=""
                    style="display: block; width: 100%; max-width: 100%;">
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>`,
  },

  // Content some large content blocks containing Variables  
  mainFeatureContent: {
    arcade: `
        <a href="#" target="_blank"
                              style="color: {{color.link}}; text-decoration:  underline;"><strong>Collections</strong></a> is
                            our latest feature designed to transform how you showcase your demos. By combining multiple
                            Arcades into one polished landing page, you can tell a more cohesive story about your
                            product and share a single link with prospects and customers.
        `
  },
  introContent: {
    arcade: `
        Multiple launches in a month or quarter? For more impact and a clear reference point, combine each feature into a cohesive release story for email newsletters or your website.
        `
  },
  preheader: {
    main: `This is the preheader for {{companyName}} release notes`,
  },

  // Inline buttons only for inline use inside Blocks or Atoms 
  likeButtonInline: {
    roundBackground: (props) => `
    <a href="#" target="_blank"
    style="text-decoration: none; white-space: nowrap; padding-left: {{paddingGapHalfMath}}px;">
    <span class="rollover" style="display: inline-block;"><img src="images/like.png" border="0" alt="Like Button"
        style="display: block; vertical-align: middle;" class="like-btn"
        height="${props.height}" width="${props.height}" title="❤︎ I Like That!">
        <!--
        <img src="images/like-hover.png"
        border="0" alt="Like Button"
        style="display: block; vertical-align: middle; max-height:0px;"
        class="like-btn-hover" height="${props.height}" width="${props.height}" title="❤︎ I Like That!">-->
    </span>
  </a>
  `,
  },

  // Math containts formula calculations from base sizes into spacing and sizing variables
  innerColWidthMath: {
    classic: `{{math.evaluate('{{mainWidth}} - 2 * {{padding.global}}')}}`,
  },
  borderRadiusHalfMath: {
    classic: `{{math.ceil({{curveness.border}} / 1.5)}}`,
  },
  borderRadiusQuaterMath: {
    classic: `{{math.ceil({{curveness.border}} / 4)}}`,
  },
  fontSizeHeader1HightMath: {
    h1_3: `{{math.ceil({{fontSize.header1}} * 1.3)}}`,
  },
  fontSizeHeader2HightMath: {
    h1_4: `{{math.ceil({{fontSize.header2}} * 1.4)}}`,
  },
  fontSizeHeader3HightMath: {
    h1_5: `{{math.ceil({{fontSize.header3}} * 1.5)}}`,
  },
  fontSizeParagraphHightMath: {
    h1_6: `{{math.ceil({{fontSize.paragraph}} * 1.5)}}`,
  },
  fontSizeSmallHightMath: {
    h1_6: `{{math.ceil({{fontSize.small}} * 1.6)}}`,
  },
  paddingGapHalfMath: {
    gap0_2: `{{math.ceil({{padding.gap}} / 2)}}`,
  },
  paddingGapQuaterMath: {
    gap0_25: `{{math.ceil({{padding.gap}} / 4)}}`,
  },
  paddingGlobalMinusGapMath: {
    math: `{{math.evaluate('{{padding.global}} - {{padding.gap}}')}}`,
  },

};

const contents = {
  companyName: {
    option1: 'Acme Inc.',
    option2: 'Global Corp.'
  },
  companyLogo: {
    option1: 'images/arcade_logo.png',
    option2: 'images/ducalis.png',
    option3: 'images/miro.png',
    option4: 'images/raycast.png',
  },
  introText: {
    option1: 'Welcome to our newsletter!',
    option2: 'Thanks for subscribing!'
  },
  outroText: {
    option1: 'Best regards,',
    option2: 'Sincerely,'
  },
  ctaText: {
    option1: 'Try Growth for Free',
    option2: 'HIT ME!'
  },
  mainFeatureImage: {
    option1: 'images/arcade_changelog.jpg',
    option2: 'images/arc-hero.gif',
    option3: 'images/designmodo-hero.png',
    option4: 'images/hello-apple.jpg',
  },
  mainFeatureTitle: {
    option1: 'Multiple Arcades. One Landing Page.',
    option2: 'The new Designmodo homepage design is now live!',
    option3: 'Custom backgrounds, callout pointers, benchmarks, and more.',
  },
  intoTitle: {
    option1: 'Three ways to use Collections:'
  },
  feature1Title: {
    option1: '🆕&nbsp; Customer onboarding'
  },
  feature1Text: {
    option1: `Welcome new users with a page that showcases your product's
        key features and benefits. Highlight important activation moments and include them in your
        onboarding programs, both in and out of the product.`
  },
  feature2Title: {
    option1: '📣 Changelog'
  },
  feature2Text: {
    option1: `Multiple launches in a month or quarter? For more impact and a
        clear reference point, combine each feature into a cohesive release story for email
        newsletters or your website.`
  },
  feature3Title: {
    option1: '👋 Sales leave-behind'
  },
  feature3Text: {
    option1: `Share a curated collection of demos that showcase how you
        solve your prospects' pain points to make a lasting impression, especially with teams you
        may have yet to speak to.`
  },
};