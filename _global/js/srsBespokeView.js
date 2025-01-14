class View {
  constructor() {
    this.app = this.$("#root");

    // Create content container
    this.content = this.createElement("div", "content");

    // Create body-content container
    this.bodyContent = this.createElement("div", "body-content");

    // Create container container
    this.container = this.createElement("div", "container");

    // Create header
    this.header = this.createElement("div", "header");
    // this.header.classList.add("pink-background");

    this.mainHeading = this.createElement("div", "main-heading");
    this.mainHeading.innerHTML = 'My SRS';

    // Create header
    this.progress = this.createElement("div", "progress");
    // this.header.classList.add("pink-background");

    // Create progress bar
    this.progressBar = this.createElement("div", "progress-bar");
    this.progressBar.id = "progress-bar";
    this.start = this.createElement("div", "start");
    this.start.id = "start";

    this.start.innerHTML = "0";
    this.inner = this.createElement("div", "inner");
    this.bar = this.createElement("span", "bar")
    this.bar.classList.add("purple");
    this.bar.classList.add("purple-cta");
    this.bar.id = "bar";
    this.bar.style.width = "0%";

    this.inner.append(this.bar);
    this.end = this.createElement("div", "end");
    this.end.id = "end";

    this.divider = this.createElement("div", "divider");
    this.divider.innerHTML = "/";

    // Create generic more button
    let moreButtonSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    moreButtonSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    moreButtonSvg.setAttribute("height", "24px");
    moreButtonSvg.setAttribute("viewBox", "0 0 24 24");
    moreButtonSvg.setAttribute("width", "24px");
    moreButtonSvg.setAttribute("fill", "#7e7989");
    let moreButtonSvgPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    moreButtonSvgPath1.setAttribute("d", "M0 0h24v24H0V0z"); //Set path's data
    moreButtonSvgPath1.setAttribute("fill", "none");
    let moreButtonSvgPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let moreButtonSvgPath2d = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z";
    moreButtonSvgPath2.setAttribute("d", moreButtonSvgPath2d); //Set path's data
    moreButtonSvg.append(moreButtonSvgPath1, moreButtonSvgPath2);

     // Clone generic SVG button
    this.moreButtonSvg = moreButtonSvg.cloneNode(true);

    this.moreButton = this.createElement("div", "more-button");
    this.moreButton.append(this.moreButtonSvg);
    console.log(this.moreButton);

    this.progressBar.append(this.inner, this.start, this.divider, this.end);

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

    // Create close button
    this.closeButton = this.createElement("div", "close-button");
    this.closeButton.append(this.closeSvg);

    this.closeButton.addEventListener("click", (event) => {
      return (window.location.href = "../");
    });

    // If language is Mandarin
      if(language == "zh-CN" || language == "ja-JP" ){
        // Create pinyin button
        this.pinyinButton = this.createElement("div", "pinyin-button");
        
        if(language == "zh-CN") this.pinyinButton.textContent = "pinyin";
        else this.pinyinButton.textContent = "kana";

        console.log(language);
        this.showPinyin = true;

        this.pinyinButton.addEventListener("click", (event) => {
          this.displayPinyin();
        });
    }

    // If language is Mandarin, append pinyin button
    if(this.showPinyin){
      this.progress.append(this.progressBar, this.pinyinButton, this.moreButton);
    }

    // Append progressBar to progress
    this.progress.append(this.progressBar, this.moreButton);

    // Create SRS practice header title
    this.languagePractice = this.createElement("p", "language-practice");
    this.languagePractice.textContent = "SRS Practice";

    // Append close button + title to header
    this.header.append(this.mainHeading, this.closeButton);

    // Create slider container
    this.slider = this.createElement("div", "slider");

    // Create slides container and append
    this.slides = this.createElement("div", "slides");
    this.slider.append(this.slides);

    // Create button area
    this.buttonArea = this.createElement("div", "button-area");

    // Create Good / Bad button area
    this.goodBadButton = this.createElement("div", "good-bad");

    // Create Good button
    this.goodButton = this.createElement("button", "good");
    this.goodButton.innerHTML = "GOOD";
    //this.goodButton.style.display = "none";

    // Create Bad button
    this.badButton = this.createElement("button", "bad");
    this.badButton.innerHTML = "BAD";

    // Create Show button
    this.showButton = this.createElement("button", "purple-cta");
    this.showButton.id = "show-button";
    this.showButton.innerHTML = "SHOW";

    // Append buttons to button area
    this.goodBadButton.append(this.badButton, this.goodButton);
    this.buttonArea.append(this.showButton, this.goodBadButton);
    this.container.append(this.slider);
    this.bodyContent.append(this.container);
 
    // Append the title, form, and todo list to the content div
    this.content.append(this.header, this.progress, this.bodyContent, this.buttonArea);

    // Append content div to app
    this.app.append(this.content);

    // Create settings button
    this.settings = this.createElement("div", "settings");
    this.svgSettings = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svgSettings.style.overflow = "visible";
    this.svgSettings.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    this.svgSettings.setAttribute("height", "16px");
    this.svgSettings.setAttribute("viewBox", "0 0 16 16");
    this.svgSettings.setAttribute("width", "16px");
    this.svgSettings.setAttribute("fill", "#2a2142");

    this.svgSettingsPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgSettingsPath1.setAttribute("d", "M0 0h24v24H0V0z");
    this.svgSettingsPath1.setAttribute("fill", "none");

    this.svgSettingsPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgSettingsPath2.setAttribute(
      "d",
      "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
    );

    this.svgSettings.append(this.svgSettingsPath1, this.svgSettingsPath2);

    this.settings.append(this.svgSettings);
    this.app.append(this.settings);

    // Create "new character settings" icon
    this.svgEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svgEdit.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    this.svgEdit.setAttribute("height", "24px");
    this.svgEdit.setAttribute("viewBox", "0 0 24 24");
    this.svgEdit.setAttribute("width", "24px");
    this.svgEdit.setAttribute("fill", "white");

    this.svgEditPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgEditPath1.setAttribute("d", "M0 0h24v24H0V0z");
    this.svgEditPath1.setAttribute("fill", "none");

    this.svgEditPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgEditPath2.setAttribute("d", "M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z");

    this.svgEdit.append(this.svgEditPath1, this.svgEditPath2);

    // Create "reset SRS data" icon
    this.svgClear = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.svgClear.setAttribute("xmlns", "https://www.w3.org/2000/svg");
    this.svgClear.setAttribute("height", "24px");
    this.svgClear.setAttribute("viewBox", "0 0 24 24");
    this.svgClear.setAttribute("width", "24px");
    this.svgClear.setAttribute("fill", "white");

    this.svgClearPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgClearPath1.setAttribute("d", "M0 0h24v24H0V0z");
    this.svgClearPath1.setAttribute("fill", "none");

    this.svgClearPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.svgClearPath2.setAttribute("d", "M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z");

    this.svgClear.append(this.svgClearPath1, this.svgClearPath2);

    // Create sliding settings menu
    this.settingsMenu = this.createElement("div", "settings-menu");

    // // Add settings heading
    this.settingsHeading = this.createElement("div", "settings-menu__heading");
    this.settingsHeadingText = this.createElement("div", "settings-menu__text");
    this.settingsHeadingText.textContent = "Settings";
    this.settingsHeading.append(this.settingsHeadingText);
    this.settingsHeadingIcon = this.createElement("div", "settings-menu__icon");
    this.settingsClose = closeSvg.cloneNode(true);
    this.settingsClose.setAttribute("fill", "white");
    this.settingsHeadingIcon.append(this.settingsClose);
    this.settingsHeading.append(this.settingsHeadingIcon);
    this.settingsMenu.append(this.settingsHeading);

    // // Add change item number
    this.newItemsNum = this.createElement("div", "settings-menu__item");
    this.newItemsNumText = this.createElement("div", "settings-menu__text");
    this.newItemsNumText.textContent = "New characters settings";
    this.newItemsNum.append(this.newItemsNumText);
    this.newItemsNumIcon = this.createElement("div", "settings-menu__icon");
    this.newItemsNumIcon.append(this.svgEdit);
    this.newItemsNum.append(this.newItemsNumIcon);
    this.settingsMenu.append(this.newItemsNum);

    // // Add reset SRS
    this.resetSrs = this.createElement("div", "settings-menu__item");
    this.resetSrsText = this.createElement("div", "settings-menu__text");
    this.resetSrsText.textContent = "Reset SRS data";
    this.resetSrs.append(this.resetSrsText);
    this.resetSrsIcon = this.createElement("div", "settings-menu__icon");
    this.resetSrsIcon.append(this.svgClear);
    this.resetSrs.append(this.resetSrsIcon);
    this.settingsMenu.append(this.resetSrs);

    this.app.append(this.settingsMenu);

    // Create counters
    this.counter = this.createElement("div", "counter");
    this.newItemsCounter = this.createElement("div");
    this.newItemsCounter.id = "new-items";
    this.revisionItemsCounter = this.createElement("div");
    this.revisionItemsCounter.id = "revision-items";
    this.counter.append(this.newItemsCounter, this.revisionItemsCounter);
    this.app.append(this.counter);

    // Loader
    this.overlay = this.createElement("div");
    this.overlay.id = "overlay";
    this.overlay.style.top = 0;
    this.overlay.style.height = "100%";
    this.loader = this.createElement("div", "loader");
    this.loader.id = "loader";
    this.loader.classList.add(loadergradientBackground);
    this.overlay.append(this.loader);
    this.app.append(this.overlay);

    // Popover background
    this.popoverBackground = this.createElement("div", "popover-background");

    // Welcome Popover
    this.welcomeContainer = this.createElement("div", "popover");
    //this.welcomeContainer.style.display = "block";
    this.welcomeTitle = this.createElement("div", "shortcut-title");
    this.welcomeTitle.textContent = "Welcome!";
    this.welcomeContent = this.createElement("div", "popover-content-welcome");
    this.welcomeContent.innerText = welcomeIntro;
    this.welcomeContinueContainer = this.createElement("div", "continue-popover-container");
    this.welcomeContinueButton = this.createElement("div", "continue-popover");
    this.welcomeContinueButton.id = "continue-welcome";
    this.welcomeContinueButton.classList.add("purple-background");
    this.welcomeContinueButton.textContent = "CONTINUE";
    this.welcomeContinueContainer.append(this.welcomeContinueButton);

    // Clone original SVG button
    this.welcomeCloseButtonSvg = closeSvg.cloneNode(true);

    // Create close button
    this.welcomeCloseButton = this.createElement("div", "popover-close");
    this.welcomeCloseButton.append(this.welcomeCloseButtonSvg);

    this.welcomeContainer.append(this.welcomeTitle, this.welcomeContent, this.welcomeContinueContainer, this.welcomeCloseButton);

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

    // Today's Items Popover
    /*
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

    // Clone original SVG button
    this.todayCloseButtonSvg = closeSvg.cloneNode(true);

    // Create close button
    this.todayCloseButton = this.createElement("div", "popover-close");
    this.todayCloseButton.append(this.todayCloseButtonSvg);

    // Append container
    this.todayContainer.append(this.todayTitle, this.todayContent, this.todayContinueContainer, this.todayCloseButton);
    */

    // Congratulations Popover
    this.congratulationsContainer = this.createElement("div", "popover");
    this.congratulationsContainer.style.display = "none";
    this.congratulationsTitle = this.createElement("div", "shortcut-title");
    this.congratulationsTitle.textContent = "Congratulations!";
    this.congratulationsContent = this.createElement("div", "welcome-popover-content");
    this.congratulationsContent.innerText = "You've completed all of the items that were due today.";
    this.congratulationsContinueContainer = this.createElement("div", "continue-popover-container");
    this.congratulationsContinueButton = this.createElement("div", "continue-popover");
    this.congratulationsContinueButton.id = "continue-congratulations";
    this.congratulationsContinueButton.classList.add("purple-background");
    this.congratulationsContinueButton.textContent = "FINISH";
    this.congratulationsContinueContainer.append(this.congratulationsContinueButton);

    // Clone original SVG button
    this.congratulationsCloseButtonSVg = closeSvg.cloneNode(true);

    // Create close button
    this.congratulationsCloseButton = this.createElement("div", "popover-close");
    this.congratulationsCloseButton.append(this.congratulationsCloseButtonSVg);

    this.congratulationsContainer.append(this.congratulationsTitle, this.congratulationsContent, this.congratulationsContinueContainer, this.congratulationsCloseButton);

    // Create SRS reset popover
    this.srsResetContainer = this.createElement("div", "reset-popover");
    this.srsResetContainer.style.display = "none";
    this.srsResetContent = this.createElement("div", "reset-popover__content");
    this.srsResetContent.textContent = "Are you sure you want to delete your SRS data and reset your progress?";
    this.srsResetButtonContainer = this.createElement("div", "reset-popover__buttons");
    this.srsResetYes = this.createElement("div", "reset-popover__yes");
    this.srsResetYes.textContent = "YES";
    this.srsResetNo = this.createElement("div", "reset-popover__no");
    this.srsResetNo.textContent = "NO";
    this.srsResetButtonContainer.append(this.srsResetYes, this.srsResetNo);
    this.srsResetContainer.append(this.srsResetContent, this.srsResetButtonContainer);


    // Append All Popovers
    this.app.append(this.popoverBackground, this.newItemsContainer, this.welcomeContainer, this.congratulationsContainer, this.srsResetContainer);

    this.preventInvalidInputCharacters();

    this.svgAudioCtaArray = [];
    this.count = 1;

  } // End of constructor

  //
  createElement(el, clsName) {
    const elem = document.createElement(el);
    if (clsName) elem.classList.add(clsName);
    return elem;
  }

  $ = (n) => document.querySelector(n);


  // Display Pinyin

  displayPinyin(){
    if(this.showPinyin){
      this.pinyinTitle.style.display = "none";
      this.pinyin.style.display = "none";
      this.pinyinButton.classList.add("hidden");
      //this.pinyinButton.textContent = "pinyin";
    }
    else {
      this.pinyinTitle.style.display = "inline";
      this.pinyin.style.display = "inline";
      this.pinyinButton.classList.remove("hidden");
      //this.pinyinButton.textContent = "pinyin ✓";
    }
    this.showPinyin = !this.showPinyin;
  }

  // Generate Today's Items cards and add into Today's Item popover
  /*
  addTodaysCards(array) {

    this.todayContent.innerHTML = "";
    
    if (exerciseType == "character" || exerciseType == undefined ) {
      this.todayWelcomeCharacter = this.createElement("div", "welcome-character");

      array.forEach((item) => {

        let card = this.createElement("div", "today-character-card");
        let cardTop = this.createElement("div", "top");
        cardTop.innerHTML = item.original();
        let cardBottom = this.createElement("div", "bottom");
        cardBottom.innerHTML = item.romanize();
        card.append(cardTop, cardBottom);
        this.todayWelcomeCharacter.append(card);
        
      });

    this.todayContent.append(this.todayWelcomeCharacter);

    }

    else if (exerciseType == "vocabulary" || exerciseType == "vocabularyEnglish" ) {
     this.todayWelcomeVocab = this.createElement("div", "welcome-vocab");

      array.forEach((item) => {

        let card = this.createElement("div", "today-vocab-card");
        let cardTop = this.createElement("div", "top-vocab");
        cardTop.innerHTML = item.original();
        let cardBottom = this.createElement("div", "bottom-vocab");
        cardBottom.innerHTML = item.romanize();
        card.append(cardTop, cardBottom);
        this.todayWelcomeVocab.append(card);

      });

    this.todayContent.append(this.todayWelcomeVocab);
    }

  }
  */

  addNextCard(card, isNew) {
    if(card != undefined){

      let word = allSyllableMap[card];
      let nextCard;
      let nextCardWordOriginal;
      //let nextCardWordTranslation;
      //let nextCardWordSeparator;
      let newIcon;
      let audioValue = "";

      this.nextCard = this.createElement("div", "word");
      nextCardWordOriginal = this.createElement("p", "word-original");
      this.nextCardWordSeparator = this.createElement("p", "word-separator");
      this.nextCardWordSeparator.style.display = "none";
      this.answer = this.createElement("p", "word-translation");
      this.answer.style.opacity = 0;

      this.targetLanguage = this.createElement("p", "target-language");
      this.targetLanguage.innerHTML = languageTitle;

      this.englishLanguage = this.createElement("p", "english");
      this.englishLanguage.innerHTML = "English";
      this.englishLanguage.style.display = "none";

      if(isNew){
        newIcon = this.createElement("div", "new-icon");
        newIcon.textContent = "new";
        this.nextCard.append(newIcon);
      } 

      let nextCardOriginalContainer = this.createElement("div", "original-container");

      if(word.kana){
        this.pinyin = this.createElement("p", "pinyin");
        this.pinyin.textContent = word.kana;
        nextCardWordOriginal.innerHTML = card;

        this.pinyinTitle = this.createElement("p", "pinyin-title");
        if(language == "zh-CN") this.pinyinTitle.textContent = "pinyin"; 
        else this.pinyinTitle.textContent = "hiragana";

        if(this.showPinyin){
          this.pinyinTitle.style.display = "inline";
          this.pinyin.style.display = "inline";
        }

        else {
          this.pinyinTitle.style.display = "none";
          this.pinyin.style.display = "none"; 
        }

        this.pinyinIcon = this.createElement("p", "pinyin-icon");
        this.pinyinIcon.textContent = "show pinyin";

        nextCardOriginalContainer.append(this.targetLanguage, nextCardWordOriginal, this.pinyinTitle, this.pinyin)
      }

      else {
        nextCardWordOriginal.textContent = card; 
        nextCardOriginalContainer.append(this.targetLanguage, nextCardWordOriginal);
      }
      
      //nextCardOriginalContainer.append(nextCardWordOriginal, this.cardIcon)

      this.nextCard.append(nextCardOriginalContainer, this.englishLanguage, this.answer);
      
      let svgAudioCtaArray = [];

      let stringDefined = nextCardWordOriginal.innerHTML;
      console.log(stringDefined);


      // Autoplay audio
      console.log(card);
      this.playSpeech(card);


      // Play audio on button press

      // Create audio icon
      this.svgAudio = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this.svgAudio.classList.add("audio-icon");
      this.svgAudio.id = "audio-icon-" + this.count;
      this.svgAudio.setAttribute("xmlns", "https://www.w3.org/2000/svg");
      this.svgAudio.setAttribute("height", "20px");
      this.svgAudio.setAttribute("viewBox", "0 0 24 24");
      this.svgAudio.setAttribute("width", "20px");
      this.svgAudio.setAttribute("fill", "none");
      this.svgAudio.setAttribute("stroke", "#18093e");
      this.svgAudio.setAttribute("stroke-width", "2");

      this.svgAudioPath1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgAudioPath1.setAttribute("d", "M0 0h24v24H0z");
      this.svgAudioPath1.setAttribute("fill", "none");
      this.svgAudioPath1.setAttribute("stroke", "none");

      this.svgAudioPath2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgAudioPath2.setAttribute("d", "M15 8a5 5 0 0 1 0 8" );

      this.svgAudioPath3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgAudioPath3.setAttribute("d", "M17.7 5a9 9 0 0 1 0 14" );

      this.svgAudioPath4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
      this.svgAudioPath4.setAttribute("d", "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" );

      this.svgAudio.append(this.svgAudioPath1, this.svgAudioPath2, this.svgAudioPath3, this.svgAudioPath4);

      this.content.append(this.svgAudio);
      

      audioValue = word;


      this.svgAudio.addEventListener("click", (event) => {
        console.log(audioValue.kana);
        this.playAudio(audioValue.kana);
      });

      let nextCardSlide = this.createElement("div", "slide");
      nextCardSlide.append(this.nextCard);
      this.slides.append(nextCardSlide);


      // Add event listeners to audio icons of each example
      for(let audio of svgAudioCtaArray){
        audio.element.addEventListener("click", (event) => {
          
          // Play audio on click
          this.playSpeech(audio.word); 

          // Add key frame animation
          audio.element.classList.add("audio-icon-animation-small");

          // Remove key frame animation
          setTimeout(function() {
              audio.element.classList.remove("audio-icon-animation-small");
          }, 500);
               
        }) 
      }
      

    }

    this.count++;
  }


    // Play audio
    playSpeech(string) {
        console.log(string);
        let word = string;

        // If speechSynthesis in user's browser
        if (activateSpeech && "speechSynthesis" in window) {
            let audioWord = new SpeechSynthesisUtterance(word);
            audioWord.lang = language;
            window.speechSynthesis.speak(audioWord);
        }
    }


  bindDisplayNextCard(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });

    /*
    this.moreButton.addEventListener("click", (event) => {
      handler();
    });
    */
  }

  get _number() {
    return this.input.value;
  }

  get _isLastPopover() {
    // Collect all .popover nodes
    let popoverCollection = document.querySelectorAll(".popover");

    // Convert collection into node
    // Convert nodes into display block/none state
    // Filter out block states
    let popoverArray = [...popoverCollection].map((popover) => popover.style.display).filter((display) => display == "block");

    // If popoverArray only has 1 block state, then there is only one popover left on the DOM
    return popoverArray.length;
  }

  bindChangeNumber(handler) {
    this.newItemsForm.addEventListener("submit", () => {
      if (this._number && this._number > 0) {
        handler(this._number);
      }
    });

    this.newItemsContinueButton.addEventListener("click", () => {
      if (this._number && this._number > 0) {
        handler(this._number);
      }
    });
  }

  bindChangePreviousInputNumber(handler) {
    this.input.addEventListener("focus", () => {
      handler(this._number);
    });
  }

  displayPreviousInputNumber(previousInputNumber) {
    if (!this._number) {
      this.input.value = previousInputNumber;
    }
  }

  preventInvalidInputCharacters() {
    const invalidCharacters = [".", "-", "+", "e", "E"];

    this.input.addEventListener("keydown", (event) => {
      if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
      }
    });
  }

  displayNewItemsCount(item) {
    let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
    if (_number) {
      this.newItemsCounter.style.display = "block";
    } else {
      this.newItemsCounter.style.display = "none";
    }

    this.newItemsCounter.innerHTML = "NEW: " + item;
  }

  displayRevisionItemsCount(item) {
    let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
    if (_number) {
      this.revisionItemsCounter.style.display = "block";
    } else {
      this.revisionItemsCounter.style.display = "none";
    }
    this.revisionItemsCounter.innerHTML = "REVISION: " + item;
  }


  displayProgressBarStart(start, total) {
    this.start.innerHTML = start;
    this.end.innerHTML = total;

    // Update progress bar value and animate (via CSS transition)
    let progressVal = Math.floor((start * 100) / total);
    this.bar.style.width = progressVal + "%";
  }

  displayProgressBarEnd(total){
      this.end.innerHTML = total;
  }

  displayInitialWord(item) {
    this.word.innerHTML = item;
  }

  displayAnswer(item) {
    if(item != undefined){
      this.answer.innerHTML = item;
    }
  }

  bindIncrementTracker(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
    /*
    this.moreButton.addEventListener("click", (event) => {
      handler();
    });
    */
  }

  displayButtons(boolean) {
    if (boolean == false) {
      this.answer.style.opacity = 0;
      this.goodBadButton.style.bottom = "-80px";
      this.englishLanguage.style.display = 'none';

    } else {
      this.answer.style.opacity = 1;
      this.nextCard.style.height = "auto";  
      this.goodBadButton.style.bottom = 0;
      this.englishLanguage.style.display = 'inline';
      this.nextCardWordSeparator.style.display = "block";

      if(this.pinyin) this.pinyin.style.display = "inline";
    }
  }

  animateSlider(number) {
    // Slide next slide in
    //this.slider.style.transform = "translate(" + number * -100 + "vw)";
  }

  bindToggleVisibility(handler) {
    this.showButton.addEventListener("click", (event) => {
      let boolean = true;
      handler(boolean);
    });

    this.goodButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.badButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });
  }

  bindProcessBadAnswer(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler();
    });
  }

  bindProcessGoodAnswer(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler();
    });
  }

  /*
  bindProcessMoreButton(handler) {
    this.moreButton.addEventListener("click", (event) => {
      handler();
    });
  }
  */

  displayCongratulationsPopover(boolean) {
    if (boolean == false) {
      this.congratulationsContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.congratulationsContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }
    }
  }

  displayWelcomePopover(boolean) {
    if (boolean == false) {
      this.welcomeContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.welcomeContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }
    }
  }

  displayNewItemsPopover(boolean) {
    if (boolean == false) {
      this.newItemsContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.newItemsContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }

      let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
      this.input.value = _number || 5;
    }
  }

  /*
  displayTodaysItemsPopover(boolean) {
    if (boolean == false) {
      this.todayContainer.style.display = "none";

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none";
      }
    } else {
      this.todayContainer.style.display = "block";

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block";
      }
    }
  }
  */

  displaySrsResetPopover(boolean) {
    this.srsResetContainer.style.display = boolean ? "flex" : "none";

    this.popoverBackground.style.display = boolean ? "block" : "none";
  }

  displaySettingsMenu(boolean) {
    this.settingsMenu.style.right = boolean ? "0" : "";
  }

  bindDisplayWelcomePopover(handler) {
    this.welcomeCloseButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.welcomeContinueButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });
  }

  /*
  bindDisplayTodaysItemsPopover(handler) {
    this.todayCloseButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.todayContinueButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });
  }
  */

  bindDisplayPreviousInputNumber(handler) {
    this.input.addEventListener("blur", () => {
      handler();
    });
  }

  bindDisplayCongratulationsPopover(handler) {
    this.congratulationsCloseButton.addEventListener("click", (event) => {
      let boolean = false;
      handler(boolean);
    });

    this.congratulationsContinueButton.addEventListener("click", (event) => {
      return (window.location.href = "../");
    });
  }

  bindDisplayNewItemsPopover(handler) {
    this.newItemsForm.addEventListener("submit", () => {
      if (this._number && this._number > 0) {
        handler(false);
      }
    });

    this.newItemsContinueButton.addEventListener("click", () => {
      if (this._number && this._number > 0) {
        handler(false);
      }
    });

    this.newItemsNum.addEventListener("click", () => {
      handler(true);
    });
  }

  bindDisplaySrsResetPopover(handler) {
    this.resetSrs.addEventListener("click", () => {
      handler();
    });

    this.srsResetNo.addEventListener("click", () => {
      handler();
    });

    this.srsResetYes.addEventListener("click", () => {
      handler();

      localStorage.removeItem(localStorageKey + "Number");
      localStorage.removeItem(localStorageKey + "Data");
      localStorage.removeItem(localStorageKey + "Progress");
      location.reload();
    });
  }

  bindDisplaySettingsMenu(handler) {
    this.settings.addEventListener("click", () => {
      handler();
    });

    this.settingsClose.addEventListener("click", () => {
      handler();
    });
  }

  playAudio(value){
    // Play audio on click
    this.playSpeech(value);
    
    // Animate audio icon
    let audioIcon = this.svgAudio;
    
    // Add key frame animation
    audioIcon.classList.add("audio-icon-animation");
    
    // Remove key frame animation
    setTimeout(function() {
        audioIcon.classList.remove("audio-icon-animation");
    }, 500);
  }

  bindRemoveCard(handler) {
    this.moreButton.addEventListener("click", () => {
      handler();
    });
  }
    
}
