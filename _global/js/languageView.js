class View {
  constructor() {
    // Get today's date and end of day timestamp
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    let endOfDay = startOfDay + 24 * 60 * 60 * 1000 - 1;

    this.localStorageKey = '';

    this.app = this.$("#root");

    // Create content container
    this.content = this.createElement("div", "content");

    // Create body-content container
    this.homeContainer = this.createElement("div", "home-container");

    // Create header
    this.header = this.createElement("header", "main-background");
    this.header.classList.add("logo");
    this.header.classList.add("header");
    this.logo = this.createElement("logo", "top-nav");
    this.logoText = this.createElement("p", "logo-text");
    this.logoText.innerText = "love alphabets";
    this.logo.append(this.logoText);

    this.logoText.addEventListener("click", (event) => {
      window.location.href = "../";
    });

    this.languageMenu = this.createElement("div", "language-menu");
    this.languageMenuUnderline = this.createElement("span", "underline-nav");
    this.languageMenuUnderline.textContent = languageTitle;
    this.languageMenuUnderlineArrow = this.createElement("span", "menu-arrow");
    this.languageMenuUnderlineArrow.innerHTML = "&nbsp;&nbsp;&#9662";
    this.languageToolTip = this.createElement("span", "tooltiptext");
    this.languageMenuList = this.createElement("ul", "menu-list");

    //const languageList = ["amharic", "arabic", "armenian", "bengali", "cherokee", "georgian", "greek", "hindi", "inuktitut", "japanese", "korean", "mandarin", "norwegian", "russian", "tibetan"];
    const languageList = ["cree", "korean", "mandarin", "norwegian", "japanese","russian" ];


    languageList.forEach((item) => {
      let menuItem = this.createElement("li", "menu-list-item");
      let menuItemATag = this.createElement("a", "menu-item");
      menuItemATag.innerHTML = item;
      menuItemATag.addEventListener("click", (event) => {
        window.location.href = "../" + item;
      });
      menuItem.append(menuItemATag);
      this.languageMenuList.append(menuItem);
    });

    this.languageToolTip.append(this.languageMenuList);
    this.languageMenu.append(this.languageMenuUnderline, this.languageMenuUnderlineArrow, this.languageToolTip);

    this.showMenu = false;
    this.header.append(this.logo, this.languageMenu);

    // Create language header
    this.languageHeader = this.createElement("nav", "language-header");
    this.languageHeaderContainer = this.createElement("div", "language-header-container");
    this.languageTitle = this.createElement("h1", "language-title");
    this.languageTitle.innerText = languageTitle;
    this.languageGeoTitle = this.createElement("span", "language-geo-title");

    if (typeof languageGeo == "undefined") {
      this.languageGeoTitle.innerText = "";
    } else {
      this.languageGeoTitle.innerText = languageGeo;
    }

    this.languageSub = this.createElement("p", "sub");
    this.languageSub.innerText = languageSub;
    this.languageHeaderContainer.append(this.languageGeoTitle, this.languageTitle, this.languageSub);
    this.languageHeader.append(this.languageHeaderContainer);

    // Create Main Section
    this.homeWrapper = this.createElement("section", "home-wrapper");
    this.home = this.createElement("div", "home");

    this.languageViewCtaArray = [];
    this.languageResetCtaArray = [];

    // Go through languageContent array and display content
    languageContent.forEach((item, number) => {
      let homeLanguage = this.createElement("article", "home-language");
      let homeLanguageCard = this.createElement("div", "home-language-card");

      let homeLanguageIcon = this.createElement("span", "home-language-icon");
      homeLanguageIcon.innerHTML = item.icon;

      let languageHeading = this.createElement("div", "language-heading");
      let languageHeadingTitle = this.createElement("span", "language-heading-title");
      languageHeadingTitle.innerHTML = item.title;

      let languageSubHeading = this.createElement("div", "language-subheading");
      languageSubHeading.innerHTML = item.sub;

      let languageInfo = this.createElement("div", "language-info");
      languageInfo.innerHTML = item.info;

      let languageButtonsBar = this.createElement("div", "language-button-bar");

      let languageCta = this.createElement("button", "language-cta");
      languageCta.innerHTML = "LAUNCH SRS";

      if(item.chartName){
        var languageViewChart = this.createElement("button", "language-view-chart-cta");
        languageViewChart.innerHTML = "PREVIEW";
        languageViewChart.id = item.chartName;
        // Push View Chart CTAs into array so they can be accessed later
        this.languageViewCtaArray.push(languageViewChart);
      }


      // Create "reset SRS data" icon
      this.svgClear = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this.svgClear.setAttribute("xmlns", "https://www.w3.org/2000/svg");
      this.svgClear.setAttribute("height", "24px");
      this.svgClear.setAttribute("viewBox", "0 0 24 24");
      this.svgClear.setAttribute("width", "24px");
      this.svgClear.setAttribute("fill", "#18093e");

      this.svgClearPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgClearPath1.setAttribute("d", "M0 0h24v24H0V0z");
      this.svgClearPath1.setAttribute("fill", "none");

      this.svgClearPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgClearPath2.setAttribute("d", "M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z");

      this.svgClear.append(this.svgClearPath1, this.svgClearPath2);

      this.languageReset = this.createElement("div", "settings-menu__icon");
      this.languageReset.append(this.svgClear);

      let languageReset = this.languageReset;
      languageReset.id = item.localStorageKey;

      this.languageResetCtaArray.push(languageReset);
      

      /*
      // Create new character settings icon
      
      this.svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this.svgEdit.setAttribute("xmlns", "https://www.w3.org/2000/svg");
      this.svgEdit.setAttribute("height", "24px");
      this.svgEdit.setAttribute("viewBox", "0 0 24 24");
      this.svgEdit.setAttribute("width", "24px");
      this.svgEdit.setAttribute("fill", "#18093e");

      this.svgEditPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgEditPath1.setAttribute("d", "M0 0h24v24H0V0z");
      this.svgEditPath1.setAttribute("fill", "none");

      this.svgEditPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgEditPath2.setAttribute("d", "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z");

      this.svgEdit.append(this.svgEditPath1, this.svgEditPath2);

      this.languageReset = this.createElement("div", "settings-menu__icon");
      this.languageReset.append(this.svgEdit);

      let languageReset = this.languageReset;
      languageReset.id = item.localStorageKey;

      this.languageResetCtaArray.push(languageReset);
      */

      // End of SVG 


      let languageStatus = this.createElement("span", "language-status");

      let nextDate = JSON.parse(localStorage.getItem(item.localStorageKey + "NextDate"));

      if (!nextDate) {
        languageStatus.innerHTML = "";
      } else if (nextDate <= endOfDay) {
        languageStatus.innerHTML = "due";
        languageStatus.classList.add("due");
      } else {
        languageStatus.innerHTML = "done";
        languageStatus.classList.add("done");
      }

      languageHeading.append(languageHeadingTitle, languageStatus);
      homeLanguageCard.append(homeLanguageIcon);

      if(item.chartName){
        languageButtonsBar.append(languageCta, languageViewChart, languageInfo, languageReset);
      }

      else {
        languageButtonsBar.append(languageCta, languageInfo, languageReset);
      }

      homeLanguage.append(homeLanguageCard, languageHeading, languageSubHeading, languageButtonsBar);
      this.home.append(homeLanguage);

      languageCta.addEventListener("click", function () {
        window.location.href = item.url;
      });
    
      languageReset.addEventListener("click", function () {  
        let text = "Press a button!\nEither OK or Cancel.";
        if (confirm(text) == true) {
          alert("done!");
          localStorage.removeItem(item.localStorageKey + "Number");
          localStorage.removeItem(item.localStorageKey + "Data");
          localStorage.removeItem(item.localStorageKey + "Progress");
          localStorage.removeItem(item.localStorageKey + "NextDate");

          localStorage.removeItem(item.localStorageKey + "SavedWords");
          localStorage.removeItem(item.localStorageKey + "WrongAnswers");
          localStorage.removeItem(item.localStorageKey + "RightAnswers")

          location.reload();

        } else {
          alert("cancelled!");
        }
      });
      
    });

    // Popover background
    this.popoverBackground = this.createElement("div", "popover-background");
    this.popoverBackground.style.display = "none";

    // Characters chart popover
    this.chartContainer = this.createElement("div", "chart-popover");
    this.chartContainer.style.display = "none";

    // Create generic close button
    let closeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    closeSvg.setAttribute("height", "24px");
    closeSvg.setAttribute("viewBox", "0 0 24 24");
    closeSvg.setAttribute("width", "24px");
    closeSvg.setAttribute("fill", "#2a2142");
    let closeSvgPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
    closeSvgPath1.setAttribute("fill", "none");
    let closeSvgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let closePath2d = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z";
    closeSvgPath2.setAttribute("d", closePath2d); //Set path's data
    closeSvg.append(closeSvgPath1, closeSvgPath2);

    // Clone generic SVG button
    this.closeSvg = closeSvg.cloneNode(true);
    this.closeButton = this.createElement("div", "chart-close");

    this.footer = this.createElement("footer", "footer");
    this.footerContent = this.createElement("div", "footer-content");
    this.footerContent.innerHTML = "© 2021 love alphabets. All rights reserved.";
    this.footerEmail = this.createElement("div", "footer-email");
    this.footerEmail.innerHTML = "hello@lovealphabets.com";
    this.footerEmail.style.userSelect = "text";

    this.footerEmail.addEventListener("click", (event) => {
      window.location.href = "mailto:hello@lovealphabets.com";
    });

    this.footer.append(this.footerContent, this.footerEmail);

    // New Items Popover
    this.newItemsContainer = this.createElement("div", "popover");
    this.newItemsTitle = this.createElement("div", "shortcut-title");
    this.newItemsTitle.textContent = "New characters settings";
    this.newItemsContent = this.createElement("div", "popover-content");
    this.newItemsContent.classList.add("popover-content-center");
    this.newItemsContentText = this.createElement("div", "popover-content-text");
    this.newItemsContentText.innerHTML = "How many new characters do you want to learn everyday?";
    this.newItemsContinueContainer = this.createElement("div", "continue-popover-container");
    this.newItemsContinueButton = this.createElement("div", "continue-popover");
    this.newItemsContinueButton.id = "continue-new-items";
    this.newItemsContinueButton.classList.add("purple-background");
    this.newItemsContinueButton.textContent = "CONTINUE";
    this.newItemsContinueContainer.append(this.newItemsContinueButton);

    // The form, with a [type="text"] input, and a submit button
    this.newItemsForm = this.createElement("form", "new-items-form");
    this.newItemsForm.setAttribute("onSubmit", "return false");

    // Input
    this.input = this.createElement("input", "new-items-input");
    this.input.type = "number";
    this.input.value = this._number || 5;
    this.input.min = 1;
    this.input.name = "todo";

    // Hidden form submit
    this.inputSubmit = this.createElement("input");
    this.inputSubmit.type = "submit";
    this.inputSubmit.hidden = true;

    // Append the input and hidden submit to the form
    this.newItemsForm.append(this.input, this.inputSubmit);
    this.newItemsContent.append(this.newItemsContentText, this.newItemsForm);

    this.newItemsContainer.append(this.newItemsTitle, this.newItemsContent, this.newItemsContinueContainer);
    this.newItemsContainer.style.display = "none";

    this.settingsCloseButton = this.createElement("div", "chart-close");

    // Today's Items Popover
    this.todayContainer = this.createElement("div", "popover");
    this.todayTitle = this.createElement("div", "shortcut-title");
    this.todayTitle.textContent = "Today's items";
    this.todayContent = this.createElement("div", "popover-content");
    this.todayContinueContainer = this.createElement("div", "continue-popover-container");
    this.todayContinueButton = this.createElement("div", "continue-popover");
    this.todayContinueButton.id = "continue-new-items";
    this.todayContinueButton.classList.add("purple-background");
    this.todayContinueButton.textContent = "CONTINUE";
    this.todayContinueContainer.append(this.todayContinueButton);

    // Append all elements
    this.homeWrapper.append(this.home);
    this.homeContainer.append(this.header, this.languageHeader, this.homeWrapper, this.footer, this.popoverBackground, this.chartContainer, this.newItemsContainer);
    this.app.append(this.homeContainer);
  } // End of constructor

  //
  createElement(el, clsName) {
    const elem = document.createElement(el);
    if (clsName) elem.classList.add(clsName);
    return elem;
  }

  $ = (n) => document.querySelector(n);

  bindShowMenu(handler) {
    this.languageMenu.addEventListener("click", (event) => {
      this.showMenu = !this.showMenu;
      handler(this.showMenu);
    });
  }

  get _number() {
    return this.input.value;
  }

  displayMenu(boolean) {
    if (boolean == false) {
      this.languageToolTip.style.visibility = "hidden";
      this.languageMenuList.style.display = "none";
    } else {
      this.languageToolTip.style.visibility = "visible";
      this.languageMenuList.style.display = "block";
    }
  }

  // Generate character chart items
  addCharacterChart(chart, chartTitle, chartType, chartLocalStorageKey) {
    this.chartContainer.innerHTML = "";

    // Create close button
    this.closeButton.append(this.closeSvg);
    this.chartTitle = this.createElement("div", "chart-title");
    this.chartTitle.innerHTML = chartTitle;

    this.chartContainer.append(this.chartTitle, this.closeButton);

    this.chartPopoverContent = this.createElement("div", "chart-popover-content");
    this.chartWrapper = this.createElement("div", "chart-wrapper");
    this.category = this.createElement("div", "category");

    // Get data from local Storage
    let _data = JSON.parse(localStorage.getItem(chartLocalStorageKey + "Data"));

    if(chart){

    chart.forEach((subChart) => {
      let subChartTitle = this.createElement("div", "character-title");
      subChartTitle.innerHTML = subChart.subtitle;
      this.category.append(subChartTitle);

      let characterColumn;
      let charMap = subChart.content;

      // If type of exercise is character
      if (chartType == "character" || chartType == undefined) {
          // If number of column is set in data file
          if (subChart.chartColumn) {
            characterColumn = this.createElement("div", subChart.chartColumn);
          }

          // If number of column is not set
          else {
            characterColumn = this.createElement("div", "character-content-11-column");
          }

          for (let item in charMap) {
            let charCard = this.createElement("div", "character-card");
            let top = this.createElement("div", "top");
            top.innerHTML = item;
            let bottom = this.createElement("div", "bottom");
            bottom.innerHTML = charMap[item].letter;

            charCard.append(top, bottom);
            characterColumn.append(charCard);
          }

          this.category.append(characterColumn);
        }

        if (chartType == "vocabulary" || chartType == "vocabularyEnglish") {

          characterColumn = this.createElement("div", "character-content-1-column");
          let n = 1;

          for (let item in charMap) {

            let charCard = this.createElement("div", "character-card-vocab");
            let top = this.createElement("div", "top-vocab");
            top.innerHTML = n;
            let middle = this.createElement("div", "middle-vocab");
            middle.innerHTML = charMap[item].character;
            let bottom = this.createElement("div", "bottom-vocab");
            bottom.innerHTML = charMap[item].letter;
            charCard.append(top, middle, bottom);

            /*
            if(_data[item].status == 'hidden'){
              charCard.classList.add('grey');
            }
            */
             
            characterColumn.append(charCard);
            n++;
          }

          this.category.append(characterColumn);
        }

      });
    }

    this.chartWrapper.append(this.category);
    this.chartPopoverContent.append(this.chartWrapper);
    this.chartContainer.append(this.chartPopoverContent);

  }

  displayChart(boolean) {
    if (boolean == false) {
      this.popoverBackground.style.display = "none";
      this.chartContainer.style.display = "none";
    } else {
      this.popoverBackground.style.display = "block";
      this.chartContainer.style.display = "block";
    }
  }

  bindShowChart(handler) {
    let boolean;

    this.languageViewCtaArray.forEach((cta) => {

      cta.addEventListener("click", (event) => {
        boolean = true;

        if (event.target.id == cta.id) {
          let chart = cta.id;
          handler(boolean, chart);
        }
      });
    });

    this.closeButton.addEventListener("click", (event) => {
      boolean = false;
      handler(boolean);
    });
  }

    // Generate character chart items
  addNewSettingsPopover(chart, chartTitle, chartType) {
    //this.chartContainer.innerHTML = "";
    // Create close button
  
    this.closeButton.append(this.closeSvg);
    this.newItemsContainer.append(this.closeButton);
  }

  displayNewSettings(boolean) {

    if (boolean == false) {
      this.popoverBackground.style.display = "none";
      this.newItemsContainer.style.display = "none";
    } else {
      this.popoverBackground.style.display = "block";
      this.newItemsContainer.style.display = "block";
    }
  }

  bindShowNewSettings(handler) {
    let boolean;

    this.languageResetCtaArray.forEach((cta) => {
      
      cta.addEventListener("click", (event) => {
        boolean = true;
        let targetedEl = event.target.parentNode.id;
        this.localStorageKey = targetedEl;
        
        if (targetedEl == cta.id) {
          let chart = cta.id;
          handler(boolean);
        }
      });
    });

    this.closeButton.addEventListener("click", (event) => {
      boolean = false;
      handler(boolean);
    });

    this.newItemsForm.addEventListener("submit", () => {
      boolean = false;
      handler(boolean); 
    });

    this.newItemsContinueButton.addEventListener("click", () => {
      boolean = false;
      handler(boolean);
    });

  }


  bindChangeNumber(handler) {

    this.newItemsForm.addEventListener("submit", () => {
      if (this._number && this._number > 0) {
        handler(this._number, this.localStorageKey);
      }      
    });

    this.newItemsContinueButton.addEventListener("click", () => {
      if (this._number && this._number > 0) {
        handler(this._number, this.localStorageKey);
      }
    });

  }

}
