export {};

declare global {
  namespace JSX {
    interface HTMLAttributes extends DOMAttributes {
      accesskey?: string;
      autocapitalize?: string;
      class?: string;
      contenteditable?: string;
      contextmenu?: string;
      dir?: "ltr" | "rtl" | "auto";
      draggable?: "true" | "false" | boolean;
      dropzone?: string;
      exportparts?: string;
      hidden?: "true" | "false" | boolean;
      id?: string;
      inputmode?: string;
      is?: string;
      itemid?: string;
      itemprop?: string;
      itemref?: string;
      itemscope?: "true" | "false" | boolean;
      itemtype?: string;
      lang?: string;
      part?: string;
      role?: "alert" | "alertdialog" | "button" | "checkbox" | "dialog" | "gridcell" | "link" | "log" | "marquee" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "tabpanel" | "textbox" | "timer" | "tooltip" | "treeitem" | "combobox" | "grid" | "listbox" | "menu" | "menubar" | "radiogroup" | "tablist" | "tree" | "treegrid" | "application" | "article" | "cell" | "columnheader" | "definition" | "directory" | "document" | "feed" | "figure" | "group" | "heading" | "img" | "list" | "listitem" | "math" | "none" | "note" | "presentation" | "region" | "row" | "rowgroup" | "rowheader" | "separator" | "table" | "term" | "text" | "toolbar" | "banner" | "complementary" | "contentinfo" | "form" | "main" | "navigation" | "search" | "doc-abstract" | "doc-acknowledgments" | "doc-afterword" | "doc-appendix" | "doc-backlink" | "doc-biblioentry" | "doc-bibliography" | "doc-biblioref" | "doc-chapter" | "doc-colophon" | "doc-conclusion" | "doc-cover" | "doc-credit" | "doc-credits" | "doc-dedication" | "doc-endnote" | "doc-endnotes" | "doc-epigraph" | "doc-epilogue" | "doc-errata" | "doc-example" | "doc-footnote" | "doc-foreword" | "doc-glossary" | "doc-glossref" | "doc-index" | "doc-introduction" | "doc-noteref" | "doc-notice" | "doc-pagebreak" | "doc-pagelist" | "doc-part" | "doc-preface" | "doc-prologue" | "doc-pullquote" | "doc-qna" | "doc-subtitle" | "doc-tip" | "doc-toc";
      slot?: string;
      spellcheck?: "true" | "false" | boolean;
      style?: string;
      tabindex?: string;
      title?: string;
      translate?: "yes" | "no";
      onabort?: string;
      onblur?: string;
      oncanplay?: string;
      oncanplaythrough?: string;
      onchange?: string;
      onclick?: string;
      oncontextmenu?: string;
      ondblclick?: string;
      ondrag?: string;
      ondragend?: string;
      ondragenter?: string;
      ondragleave?: string;
      ondragover?: string;
      ondragstart?: string;
      ondrop?: string;
      ondurationchange?: string;
      onemptied?: string;
      onended?: string;
      onerror?: string;
      onfocus?: string;
      onformchange?: string;
      onforminput?: string;
      oninput?: string;
      oninvalid?: string;
      onkeydown?: string;
      onkeypress?: string;
      onkeyup?: string;
      onload?: string;
      onloadeddata?: string;
      onloadedmetadata?: string;
      onloadstart?: string;
      onmousedown?: string;
      onmousemove?: string;
      onmouseout?: string;
      onmouseover?: string;
      onmouseup?: string;
      onmousewheel?: string;
      onpause?: string;
      onplay?: string;
      onplaying?: string;
      onprogress?: string;
      onratechange?: string;
      onreset?: string;
      onresize?: string;
      onreadystatechange?: string;
      onscroll?: string;
      onseeked?: string;
      onseeking?: string;
      onselect?: string;
      onshow?: string;
      onstalled?: string;
      onsubmit?: string;
      onsuspend?: string;
      ontimeupdate?: string;
      onvolumechange?: string;
      onwaiting?: string;
      "aria-activedescendant"?: string;
      "aria-atomic"?: "true" | "false" | boolean;
      "aria-autocomplete"?: "inline" | "list" | "both" | "none";
      "aria-busy"?: "true" | "false" | boolean;
      "aria-checked"?: "true" | "false" | "mixed" | "undefined" | boolean;
      "aria-colcount"?: string;
      "aria-colindex"?: string;
      "aria-colspan"?: string;
      "aria-controls"?: string;
      "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false" | boolean;
      "aria-describedat"?: string;
      "aria-describedby"?: string;
      "aria-disabled"?: "true" | "false" | boolean;
      "aria-dropeffect"?: "copy" | "move" | "link" | "execute" | "popup" | "none";
      "aria-errormessage"?: string;
      "aria-expanded"?: "true" | "false" | "undefined" | boolean;
      "aria-flowto"?: string;
      "aria-grabbed"?: "true" | "false" | "undefined" | boolean;
      "aria-haspopup"?: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | boolean;
      "aria-hidden"?: "true" | "false" | boolean;
      "aria-invalid"?: "grammar" | "false" | "spelling" | "true" | boolean;
      "aria-kbdshortcuts"?: string;
      "aria-label"?: string;
      "aria-labelledby"?: string;
      "aria-level"?: string;
      "aria-live"?: "off" | "polite" | "assertive";
      "aria-modal"?: "true" | "false" | boolean;
      "aria-multiline"?: "true" | "false" | boolean;
      "aria-multiselectable"?: "true" | "false" | boolean;
      "aria-orientation"?: "vertical" | "horizontal" | "undefined";
      "aria-owns"?: string;
      "aria-placeholder"?: string;
      "aria-posinset"?: string;
      "aria-pressed"?: "true" | "false" | "mixed" | "undefined" | boolean;
      "aria-readonly"?: "true" | "false" | boolean;
      "aria-relevant"?: "additions" | "removals" | "text" | "all" | "additions text";
      "aria-required"?: "true" | "false" | boolean;
      "aria-roledescription"?: string;
      "aria-rowcount"?: string;
      "aria-rowindex"?: string;
      "aria-rowspan"?: string;
      "aria-selected"?: "true" | "false" | "undefined" | boolean;
      "aria-setsize"?: string;
      "aria-sort"?: "ascending" | "descending" | "none" | "other";
      "aria-valuemax"?: string;
      "aria-valuemin"?: string;
      "aria-valuenow"?: string;
      "aria-valuetext"?: string;
      "aria-details"?: string;
      "aria-keyshortcuts"?: string;
      about?: string;
      datatype?: string;
      inlist?: string;
      prefix?: string;
      property?: string;
      resource?: string;
      typeof?: string;
      vocab?: string;
    }

    interface HTMLHtmlAttributes extends HTMLAttributes {
      manifest?: string;
      version?: string;
      xmlns?: string;
    }

    interface HTMLHeadAttributes extends HTMLAttributes {
      profile?: string;
    }

    interface HTMLTitleAttributes extends HTMLAttributes {
    }

    interface HTMLBaseAttributes extends HTMLAttributes {
      href?: string;
      target?: string;
    }

    interface HTMLLinkAttributes extends HTMLAttributes {
      href?: string;
      crossorigin?: "anonymous" | "use-credentials";
      rel?: string;
      media?: string;
      hreflang?: string;
      type?: string;
      sizes?: string;
      as?: string;
      importance?: string;
      integrity?: string;
      referrerpolicy?: string;
    }

    interface HTMLMetaAttributes extends HTMLAttributes {
      name?: string;
      "http-equiv"?: string;
      content?: string;
      charset?: string;
      scheme?: string;
    }

    interface HTMLStyleAttributes extends HTMLAttributes {
      media?: string;
      nonce?: string;
      type?: string;
      scoped?: "true" | "false" | boolean;
    }

    interface HTMLBodyAttributes extends HTMLAttributes {
      onafterprint?: string;
      onbeforeprint?: string;
      onbeforeunload?: string;
      onhashchange?: string;
      onlanguagechange?: string;
      onmessage?: string;
      onoffline?: string;
      ononline?: string;
      onpagehide?: string;
      onpageshow?: string;
      onpopstate?: string;
      onstorage?: string;
      onunload?: string;
      alink?: string;
      background?: string;
      bgcolor?: string;
      bottommargin?: string;
      leftmargin?: string;
      link?: string;
      onredo?: string;
      onundo?: string;
      rightmargin?: string;
      text?: string;
      topmargin?: string;
      vlink?: string;
    }

    interface HTMLArticleAttributes extends HTMLAttributes {
    }

    interface HTMLSectionAttributes extends HTMLAttributes {
    }

    interface HTMLNavAttributes extends HTMLAttributes {
    }

    interface HTMLAsideAttributes extends HTMLAttributes {
    }

    interface HTMLH1Attributes extends HTMLAttributes {
    }

    interface HTMLH2Attributes extends HTMLAttributes {
    }

    interface HTMLH3Attributes extends HTMLAttributes {
    }

    interface HTMLH4Attributes extends HTMLAttributes {
    }

    interface HTMLH5Attributes extends HTMLAttributes {
    }

    interface HTMLH6Attributes extends HTMLAttributes {
    }

    interface HTMLHeaderAttributes extends HTMLAttributes {
    }

    interface HTMLFooterAttributes extends HTMLAttributes {
    }

    interface HTMLAddressAttributes extends HTMLAttributes {
    }

    interface HTMLPAttributes extends HTMLAttributes {
    }

    interface HTMLHrAttributes extends HTMLAttributes {
      align?: string;
      color?: string;
      noshade?: string;
      size?: string;
      width?: string;
    }

    interface HTMLPreAttributes extends HTMLAttributes {
      cols?: string;
      width?: string;
      wrap?: string;
    }

    interface HTMLBlockquoteAttributes extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLOlAttributes extends HTMLAttributes {
      reversed?: "true" | "false" | boolean;
      start?: string;
      type?: "1" | "a" | "A" | "i" | "I";
      compact?: string;
    }

    interface HTMLUlAttributes extends HTMLAttributes {
      compact?: string;
    }

    interface HTMLLiAttributes extends HTMLAttributes {
      value?: string;
      type?: string;
    }

    interface HTMLDlAttributes extends HTMLAttributes {
    }

    interface HTMLDtAttributes extends HTMLAttributes {
    }

    interface HTMLDdAttributes extends HTMLAttributes {
      nowrap?: string;
    }

    interface HTMLFigureAttributes extends HTMLAttributes {
    }

    interface HTMLFigcaptionAttributes extends HTMLAttributes {
    }

    interface HTMLMainAttributes extends HTMLAttributes {
    }

    interface HTMLDivAttributes extends HTMLAttributes {
    }

    interface HTMLAAttributes extends HTMLAttributes {
      href?: string;
      target?: string;
      download?: string;
      ping?: string;
      rel?: string;
      hreflang?: string;
      type?: string;
      referrerpolicy?: string;
    }

    interface HTMLEmAttributes extends HTMLAttributes {
    }

    interface HTMLStrongAttributes extends HTMLAttributes {
    }

    interface HTMLSmallAttributes extends HTMLAttributes {
    }

    interface HTMLSAttributes extends HTMLAttributes {
    }

    interface HTMLCiteAttributes extends HTMLAttributes {
    }

    interface HTMLQAttributes extends HTMLAttributes {
      cite?: string;
    }

    interface HTMLDfnAttributes extends HTMLAttributes {
    }

    interface HTMLAbbrAttributes extends HTMLAttributes {
    }

    interface HTMLRubyAttributes extends HTMLAttributes {
    }

    interface HTMLRbAttributes extends HTMLAttributes {
    }

    interface HTMLRtAttributes extends HTMLAttributes {
    }

    interface HTMLRpAttributes extends HTMLAttributes {
    }

    interface HTMLTimeAttributes extends HTMLAttributes {
      datetime?: string;
    }

    interface HTMLCodeAttributes extends HTMLAttributes {
    }

    interface HTMLVarAttributes extends HTMLAttributes {
    }

    interface HTMLSampAttributes extends HTMLAttributes {
    }

    interface HTMLKbdAttributes extends HTMLAttributes {
    }

    interface HTMLSubAttributes extends HTMLAttributes {
    }

    interface HTMLSupAttributes extends HTMLAttributes {
    }

    interface HTMLIAttributes extends HTMLAttributes {
    }

    interface HTMLBAttributes extends HTMLAttributes {
    }

    interface HTMLUAttributes extends HTMLAttributes {
    }

    interface HTMLMarkAttributes extends HTMLAttributes {
    }

    interface HTMLBdiAttributes extends HTMLAttributes {
    }

    interface HTMLBdoAttributes extends HTMLAttributes {
    }

    interface HTMLSpanAttributes extends HTMLAttributes {
    }

    interface HTMLBrAttributes extends HTMLAttributes {
      clear?: string;
    }

    interface HTMLWbrAttributes extends HTMLAttributes {
    }

    interface HTMLInsAttributes extends HTMLAttributes {
      cite?: string;
      datetime?: string;
    }

    interface HTMLDelAttributes extends HTMLAttributes {
      cite?: string;
      datetime?: string;
    }

    interface HTMLPictureAttributes extends HTMLAttributes {
    }

    interface HTMLImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
      srcset?: string;
      crossorigin?: "anonymous" | "use-credentials";
      usemap?: string;
      ismap?: "true" | "false" | boolean;
      width?: string;
      height?: string;
      decoding?: string;
      importance?: string;
      intrinsicsize?: string;
      referrerpolicy?: string;
      sizes?: string;
    }

    interface HTMLIframeAttributes extends HTMLAttributes {
      src?: string;
      srcdoc?: string;
      name?: string;
      sandbox?: "allow-forms" | "allow-modals" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-same-origin" | "allow-scripts" | "allow-top-navigation";
      seamless?: "true" | "false" | boolean;
      allowfullscreen?: "true" | "false" | boolean;
      width?: string;
      height?: string;
      allow?: string;
      allowpaymentrequest?: string;
      csp?: string;
      importance?: string;
      referrerpolicy?: string;
    }

    interface HTMLEmbedAttributes extends HTMLAttributes {
      src?: string;
      type?: string;
      width?: string;
      height?: string;
    }

    interface HTMLObjectAttributes extends HTMLAttributes {
      data?: string;
      type?: string;
      typemustmatch?: "true" | "false" | boolean;
      name?: string;
      usemap?: string;
      form?: string;
      width?: string;
      height?: string;
      archive?: string;
      border?: string;
      classid?: string;
      codebase?: string;
      codetype?: string;
      declare?: string;
      standby?: string;
    }

    interface HTMLParamAttributes extends HTMLAttributes {
      name?: string;
      value?: string;
      type?: string;
      valuetype?: string;
    }

    interface HTMLVideoAttributes extends HTMLAttributes {
      src?: string;
      crossorigin?: "anonymous" | "use-credentials";
      poster?: string;
      preload?: "none" | "metadata" | "auto";
      autoplay?: "true" | "false" | boolean;
      mediagroup?: string;
      loop?: "true" | "false" | boolean;
      muted?: "true" | "false" | boolean;
      controls?: "true" | "false" | boolean;
      width?: string;
      height?: string;
    }

    interface HTMLAudioAttributes extends HTMLAttributes {
      src?: string;
      crossorigin?: "anonymous" | "use-credentials";
      preload?: "none" | "metadata" | "auto";
      autoplay?: "true" | "false" | boolean;
      mediagroup?: string;
      loop?: "true" | "false" | boolean;
      muted?: "true" | "false" | boolean;
      controls?: "true" | "false" | boolean;
    }

    interface HTMLSourceAttributes extends HTMLAttributes {
      src?: string;
      type?: string;
      sizes?: string;
      srcset?: string;
      media?: string;
    }

    interface HTMLTrackAttributes extends HTMLAttributes {
      default?: "true" | "false" | boolean;
      kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
      label?: string;
      src?: string;
      srclang?: string;
    }

    interface HTMLMapAttributes extends HTMLAttributes {
      name?: string;
    }

    interface HTMLAreaAttributes extends HTMLAttributes {
      alt?: string;
      coords?: string;
      shape?: "circle" | "default" | "poly" | "rect";
      href?: string;
      target?: string;
      download?: string;
      ping?: string;
      rel?: string;
      hreflang?: string;
      type?: string;
    }

    interface HTMLTableAttributes extends HTMLAttributes {
      border?: string;
      align?: string;
    }

    interface HTMLCaptionAttributes extends HTMLAttributes {
      align?: string;
    }

    interface HTMLColgroupAttributes extends HTMLAttributes {
      span?: string;
      align?: string;
    }

    interface HTMLColAttributes extends HTMLAttributes {
      span?: string;
      align?: string;
    }

    interface HTMLTbodyAttributes extends HTMLAttributes {
      align?: string;
    }

    interface HTMLTheadAttributes extends HTMLAttributes {
      align?: string;
    }

    interface HTMLTfootAttributes extends HTMLAttributes {
      align?: string;
    }

    interface HTMLTrAttributes extends HTMLAttributes {
      align?: string;
    }

    interface HTMLTdAttributes extends HTMLAttributes {
      colspan?: string;
      rowspan?: string;
      headers?: string;
      abbr?: string;
      align?: string;
      axis?: string;
      bgcolor?: string;
    }

    interface HTMLThAttributes extends HTMLAttributes {
      colspan?: string;
      rowspan?: string;
      headers?: string;
      scope?: "row" | "col" | "rowgroup" | "colgroup";
      sorted?: string;
      abbr?: string;
      align?: string;
      axis?: string;
      bgcolor?: string;
    }

    interface HTMLFormAttributes extends HTMLAttributes {
      "accept-charset"?: string;
      action?: string;
      autocomplete?: "on" | "off";
      enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
      method?: "GET" | "POST" | "dialog";
      name?: string;
      novalidate?: "true" | "false" | boolean;
      target?: string;
      accept?: string;
    }

    interface HTMLLabelAttributes extends HTMLAttributes {
      form?: string;
      for?: string;
    }

    interface HTMLInputAttributes extends HTMLAttributes {
      accept?: string;
      alt?: string;
      autocomplete?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
      autofocus?: "true" | "false" | boolean;
      checked?: "true" | "false" | boolean;
      dirname?: string;
      disabled?: "true" | "false" | boolean;
      form?: string;
      formaction?: string;
      formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
      formmethod?: "GET" | "POST";
      formnovalidate?: "true" | "false" | boolean;
      formtarget?: string;
      height?: string;
      list?: string;
      max?: string;
      maxlength?: string;
      min?: string;
      minlength?: string;
      multiple?: "true" | "false" | boolean;
      name?: string;
      pattern?: string;
      placeholder?: string;
      readonly?: "true" | "false" | boolean;
      required?: "true" | "false" | boolean;
      size?: string;
      src?: string;
      step?: string;
      type?: "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";
      value?: string;
      width?: string;
    }

    interface HTMLButtonAttributes extends HTMLAttributes {
      autofocus?: "true" | "false" | boolean;
      disabled?: "true" | "false" | boolean;
      form?: string;
      formaction?: string;
      formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
      formmethod?: "GET" | "POST";
      formnovalidate?: "true" | "false" | boolean;
      formtarget?: string;
      name?: string;
      type?: "button" | "submit" | "reset" | "menu";
      value?: string;
      autocomplete?: string;
    }

    interface HTMLSelectAttributes extends HTMLAttributes {
      autocomplete?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
      autofocus?: "true" | "false" | boolean;
      disabled?: "true" | "false" | boolean;
      form?: string;
      multiple?: "true" | "false" | boolean;
      name?: string;
      required?: "true" | "false" | boolean;
      size?: string;
    }

    interface HTMLDatalistAttributes extends HTMLAttributes {
    }

    interface HTMLOptgroupAttributes extends HTMLAttributes {
      disabled?: "true" | "false" | boolean;
      label?: string;
    }

    interface HTMLOptionAttributes extends HTMLAttributes {
      disabled?: "true" | "false" | boolean;
      label?: string;
      selected?: "true" | "false" | boolean;
      value?: string;
    }

    interface HTMLTextareaAttributes extends HTMLAttributes {
      autocomplete?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
      autofocus?: "true" | "false" | boolean;
      cols?: string;
      dirname?: string;
      disabled?: "true" | "false" | boolean;
      form?: string;
      maxlength?: string;
      minlength?: string;
      name?: string;
      placeholder?: string;
      readonly?: "true" | "false" | boolean;
      required?: "true" | "false" | boolean;
      rows?: string;
      wrap?: "soft" | "hard";
    }

    interface HTMLOutputAttributes extends HTMLAttributes {
      for?: string;
      form?: string;
      name?: string;
    }

    interface HTMLProgressAttributes extends HTMLAttributes {
      value?: string;
      max?: string;
    }

    interface HTMLMeterAttributes extends HTMLAttributes {
      value?: string;
      min?: string;
      max?: string;
      low?: string;
      high?: string;
      optimum?: string;
      form?: string;
    }

    interface HTMLFieldsetAttributes extends HTMLAttributes {
      disabled?: "true" | "false" | boolean;
      form?: string;
      name?: string;
    }

    interface HTMLLegendAttributes extends HTMLAttributes {
    }

    interface HTMLDetailsAttributes extends HTMLAttributes {
      open?: "true" | "false" | boolean;
    }

    interface HTMLSummaryAttributes extends HTMLAttributes {
    }

    interface HTMLDialogAttributes extends HTMLAttributes {
      open?: string;
    }

    interface HTMLScriptAttributes extends HTMLAttributes {
      src?: string;
      type?: string;
      charset?: string;
      async?: "true" | "false" | boolean;
      defer?: "true" | "false" | boolean;
      crossorigin?: "anonymous" | "use-credentials";
      nonce?: string;
      integrity?: string;
      nomodule?: string;
      referrerpolicy?: string;
      text?: string;
    }

    interface HTMLNoscriptAttributes extends HTMLAttributes {
    }

    interface HTMLTemplateAttributes extends HTMLAttributes {
    }

    interface HTMLCanvasAttributes extends HTMLAttributes {
      width?: string;
      height?: string;
      "moz-opaque"?: string;
    }

    interface IntrinsicElements {
      html: HTMLHtmlAttributes;
      head: HTMLHeadAttributes;
      title: HTMLTitleAttributes;
      base: HTMLBaseAttributes;
      link: HTMLLinkAttributes;
      meta: HTMLMetaAttributes;
      style: HTMLStyleAttributes;
      body: HTMLBodyAttributes;
      article: HTMLArticleAttributes;
      section: HTMLSectionAttributes;
      nav: HTMLNavAttributes;
      aside: HTMLAsideAttributes;
      h1: HTMLH1Attributes;
      h2: HTMLH2Attributes;
      h3: HTMLH3Attributes;
      h4: HTMLH4Attributes;
      h5: HTMLH5Attributes;
      h6: HTMLH6Attributes;
      header: HTMLHeaderAttributes;
      footer: HTMLFooterAttributes;
      address: HTMLAddressAttributes;
      p: HTMLPAttributes;
      hr: HTMLHrAttributes;
      pre: HTMLPreAttributes;
      blockquote: HTMLBlockquoteAttributes;
      ol: HTMLOlAttributes;
      ul: HTMLUlAttributes;
      li: HTMLLiAttributes;
      dl: HTMLDlAttributes;
      dt: HTMLDtAttributes;
      dd: HTMLDdAttributes;
      figure: HTMLFigureAttributes;
      figcaption: HTMLFigcaptionAttributes;
      main: HTMLMainAttributes;
      div: HTMLDivAttributes;
      a: HTMLAAttributes;
      em: HTMLEmAttributes;
      strong: HTMLStrongAttributes;
      small: HTMLSmallAttributes;
      s: HTMLSAttributes;
      cite: HTMLCiteAttributes;
      q: HTMLQAttributes;
      dfn: HTMLDfnAttributes;
      abbr: HTMLAbbrAttributes;
      ruby: HTMLRubyAttributes;
      rb: HTMLRbAttributes;
      rt: HTMLRtAttributes;
      rp: HTMLRpAttributes;
      time: HTMLTimeAttributes;
      code: HTMLCodeAttributes;
      var: HTMLVarAttributes;
      samp: HTMLSampAttributes;
      kbd: HTMLKbdAttributes;
      sub: HTMLSubAttributes;
      sup: HTMLSupAttributes;
      i: HTMLIAttributes;
      b: HTMLBAttributes;
      u: HTMLUAttributes;
      mark: HTMLMarkAttributes;
      bdi: HTMLBdiAttributes;
      bdo: HTMLBdoAttributes;
      span: HTMLSpanAttributes;
      br: HTMLBrAttributes;
      wbr: HTMLWbrAttributes;
      ins: HTMLInsAttributes;
      del: HTMLDelAttributes;
      picture: HTMLPictureAttributes;
      img: HTMLImgAttributes;
      iframe: HTMLIframeAttributes;
      embed: HTMLEmbedAttributes;
      object: HTMLObjectAttributes;
      param: HTMLParamAttributes;
      video: HTMLVideoAttributes;
      audio: HTMLAudioAttributes;
      source: HTMLSourceAttributes;
      track: HTMLTrackAttributes;
      map: HTMLMapAttributes;
      area: HTMLAreaAttributes;
      table: HTMLTableAttributes;
      caption: HTMLCaptionAttributes;
      colgroup: HTMLColgroupAttributes;
      col: HTMLColAttributes;
      tbody: HTMLTbodyAttributes;
      thead: HTMLTheadAttributes;
      tfoot: HTMLTfootAttributes;
      tr: HTMLTrAttributes;
      td: HTMLTdAttributes;
      th: HTMLThAttributes;
      form: HTMLFormAttributes;
      label: HTMLLabelAttributes;
      input: HTMLInputAttributes;
      button: HTMLButtonAttributes;
      select: HTMLSelectAttributes;
      datalist: HTMLDatalistAttributes;
      optgroup: HTMLOptgroupAttributes;
      option: HTMLOptionAttributes;
      textarea: HTMLTextareaAttributes;
      output: HTMLOutputAttributes;
      progress: HTMLProgressAttributes;
      meter: HTMLMeterAttributes;
      fieldset: HTMLFieldsetAttributes;
      legend: HTMLLegendAttributes;
      details: HTMLDetailsAttributes;
      summary: HTMLSummaryAttributes;
      dialog: HTMLDialogAttributes;
      script: HTMLScriptAttributes;
      noscript: HTMLNoscriptAttributes;
      template: HTMLTemplateAttributes;
      canvas: HTMLCanvasAttributes;
    }
  }
}
