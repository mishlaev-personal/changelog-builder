const baseTemplate = `
{{fontFamily.mainLink}}
{{fontFamily.titleLink}}
<style type="text/css">
  html {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
</style>
<style em="styles">
html {
  text-size-adjust: none;
}

.em-font-title {
  {{fontFamily.titleCssStyle}}
}

.em-font-main {
  {{fontFamily.mainCssStyle}}
}

@media only screen and (max-device-width:{{mainWidth}}px),
only screen and (max-width:{{mainWidth}}px) {

  .em-mob-wrap.em-mob-wrap-cancel,
  .noresp-em-mob-wrap.em-mob-wrap-cancel {
    display: table-cell !important;
  }

  .em-narrow-table {
    width: 100% !important;
    max-width: {{mainWidth}}px !important;
    min-width: 320px !important;
  }

  .em-mob-padding_top-12 {
    padding-top: 12px !important;
  }

  .em-mob-padding_right-6 {
    padding-right: 6px !important;
  }

  .em-mob-padding_bottom-12 {
    padding-bottom: 12px !important;
  }

  .em-mob-padding_left-6 {
    padding-left: 6px !important;
  }

  .em-mob-padding_right-10 {
    padding-right: 10px !important;
  }

  .em-mob-padding_left-10 {
    padding-left: 10px !important;
  }

  .em-mob-width-100perc {
    width: 100% !important;
    max-width: 100% !important;
  }

  .em-mob-wrap {
    display: block !important;
  }

  .em-mob-padding_right-20 {
    padding-right: 20px !important;
  }

  .em-mob-padding_left-20 {
    padding-left: 20px !important;
  }

  .em-mob-width-auto {
    width: auto !important;
  }
}

/* Interactive */
.text-gray:hover {
  color: {{color.linkHover}} !important;
  text-decoration: underline !important;
  transition: 0.3s !important;
}

.text-links:hover {
  color: {{color.linkHover}} !important;
  text-decoration: underline !important;
  transition: 0.3s !important;
}

.title {
  border-bottom: 1px solid {{color.linkHover}}00 !important;
}

.title:hover {
  /* text-decoration: underline !important; */
  color: {{color.linkHover}} !important;
  border-bottom: 1px solid {{color.linkHover}} !important;
  transition: 0.3s !important;
}

.link:hover .text-links {
  color: {{color.linkHover}} !important;
  text-decoration: underline !important;
  transition: 0.3s !important;
}

.link:hover .arrow {
  transition: 0.3s !important;
  color: {{color.linkHover}} !important;
  text-decoration: none !important;
  padding-left: 2px;
}

.bg-black {
  border-radius: 8px;
}

.bg-black:hover {
  background-color: #000000 !important;
  transition: 0.3s !important;
}

.bg-main-cta {
  border-radius: {{curveness.button}}px;
}

.bg-main-cta:hover {
  background-color: {{color.ctaBgHover}} !important;
  transition: 0.3s !important;
}

.bg-reactions:hover {
  background-color: {{color.ctaBgHover}} !important;
  border-color: {{color.border}} !important;
  border-width: 1px !important;
  border-radius: {{curveness.border}}px;
  transition: 0.3s !important;
}

.bg-reactions:hover .pill {
  max-height: 0px !important;
  color: {{color.ctaText}} !important;
}

.bg-reactions:hover .pill-hover {
  max-height: none !important;
  color: {{color.ctaText}} !important;
  transition: 0.3s !important;
}

.rollover {
  padding: 0px;
}

.rollover .like-btn {
  border-radius: 999px !important;
  transition: 0.3s !important;
}

.rollover:hover .like-btn {
  /* max-height: 0px !important; */
  background-color: {{color.ctaBgHover}} !important;
  transition: 0.3s !important;
}

.rollover .like-btn-hover {
  border-radius: 999px !important;
}

.rollover:hover .like-btn-hover {
  max-height: none !important;
  background-color: {{color.ctaBgHover}} !important;
  transition: 0.3s !important;
}
</style>

<span class="preheader"
  style="visibility: hidden; opacity: 0; color: {{color.backgroundMain}}; height: 0px; width: 0px; font-size: 1px; display: none !important;">Multiple
  {{preheader}}&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌</span>
<!--[if !mso]><!-->
<div style="font-size:0px;color:transparent;opacity:0;">
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</div>
<!--<![endif]-->
<table cellpadding="0" cellspacing="0" border="0" width="100%"
  style="line-height: normal; background-color: {{color.backgroundMain}};" bgcolor={{color.backgroundMain}}">
  {{adminWarningBlock}}
  <tr em="group">
    <td align="center" style="padding-top: {{padding.global}}px; padding-bottom: {{padding.global}}px; background-repeat: repeat;" bgcolor="{{color.backgroundMain}}"
      class="em-mob-padding_top-24 em-mob-padding_right-12 em-mob-padding_bottom-24 em-mob-padding_left-12">
      <!--[if (gte mso 9)|(IE)]>
				<table cellpadding="0" cellspacing="0" border="0" width="{{mainWidth}}"><tr><td>
				<![endif]-->
      <table cellpadding="0" cellspacing="0" width="100%" border="0"
        style="max-width: {{mainWidth}}px; min-width: {{mainWidth}}px; width: {{mainWidth}}px;" class="em-narrow-table">
        <!--end of boilerplate header-->

            {{headerBlock}}
            {{dateTitleBlock}}
            {{dividerBlock(hideFirst: 'none', gapHeight: '{{padding.bigGap}}', hideLast: 'none')}}
            {{introBlock}}
            {{dividerBlock(hideFirst: 'none', gapHeight: '{{padding.bigGap}}', hideLast: '')}}
            {{announcementeBlock}}
            {{reactionBlock}}
            {{dividerBlock(hideFirst: '', gapHeight: '{{padding.global}}', hideLast: '')}}
            {{featureListBlock}}
            {{calloutBlock}}
            {{dividerBlock(hideFirst: '', gapHeight: '{{padding.global}}', hideLast: '')}}
            {{featureListTitleBlock}}
            {{featureListWrapperBlock}}
            {{dividerBlock(hideFirst: '', gapHeight: '{{padding.global}}', hideLast: 'none')}}
            {{footerBlock}}

        <!--start of boilerplate footer-->
      </table>
      <!--[if (gte mso 9)|(IE)]>
				</td></tr></table>
				<![endif]-->
    </td>
  </tr>
</table>
`;