class View {
  constructor() {
    this.app = this.$("#root")

    // Create content container
    this.content = this.createElement("div", "content")

    // Create body-content container
    this.bodyContent = this.createElement("div", "body-content")

    // Create header
    this.header = this.createElement("div", "header")

    this.mainHeading = this.createElement("div", "main-heading")
    this.mainHeading.innerHTML = srsTitle

    // Create progress bar
    this.progressBar = this.createElement("div", "progress-bar")
    this.progressBar.id = "progress-bar"
    this.start = this.createElement("div", "start")
    this.start.id = "start"

    this.start.innerHTML = "0"
    this.inner = this.createElement("div", "inner")
    this.bar = this.createElement("span", "bar")
    this.bar.classList.add("purple")
    this.bar.classList.add("purple-cta")
    this.bar.id = "bar"
    this.bar.style.width = "0%"

    this.inner.append(this.bar)
    this.end = this.createElement("div", "end")
    this.end.id = "end"

    this.divider = this.createElement("div", "divider")
    this.divider.innerHTML = "/"

    this.progressBar.append(this.inner, this.start, this.divider, this.end)

    this.progressBarContainer = this.createElement(
      "div",
      "progress-bar-container"
    )
    this.progressBarContainer.append(this.progressBar)

    // Create progress
    this.progress = this.createElement("div", "progress")

    // Create generic close button
    let closeSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    closeSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg")
    closeSvg.setAttribute("height", "24px")
    closeSvg.setAttribute("viewBox", "0 0 24 24")
    closeSvg.setAttribute("width", "24px")
    closeSvg.setAttribute("fill", "#2a2142")
    let closeSvgPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    closeSvgPath1.setAttribute("d", "M0 0h24v24H0V0z") //Set path's data
    closeSvgPath1.setAttribute("fill", "none")
    let closeSvgPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    let closePath2d =
      "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    closeSvgPath2.setAttribute("d", closePath2d) //Set path's data
    closeSvg.append(closeSvgPath1, closeSvgPath2)

    // Clone generic SVG button
    this.closeSvg = closeSvg.cloneNode(true)

    // Create close button
    this.closeButton = this.createElement("div", "close-button")
    this.closeButton.append(this.closeSvg)

    this.closeButton.addEventListener("click", (event) => {
      return (window.location.href = "../")
    })

    // If language is Mandarin or Japanese
    if (language == "zh-CN" || language == "ja-JP") {
      // Create pinyin button
      this.pinyinButton = this.createElement("div", "pinyin-button")

      if (language == "zh-CN") this.pinyinButton.textContent = "pinyin"
      else this.pinyinButton.textContent = "kana"

      this.showPinyin = true

      // Create no space button
      this.noSpaceButton = this.createElement("div", "no-space-button")
      this.noSpaceButton.textContent = "spaces"
      this.noSpaceButton.classList.add("hidden")

      this.showNoSpaceButton = true

      this.progress.append(this.pinyinButton, this.noSpaceButton)
    }

    this.scoreDisplay = this.createElement("p", "score")
    this.progress.append(this.scoreDisplay)

    // Create SRS practice header title
    this.languagePractice = this.createElement("p", "language-practice")
    this.languagePractice.textContent = "SRS Practice"

    // Append close button + title to header
    this.header.append(this.mainHeading, this.closeButton)

    // Create button area
    this.buttonArea = this.createElement("div", "button-area")

    // Create Good / Bad button area
    this.goodBadButton = this.createElement("div", "good-bad")
    this.goodBadButton.style.bottom = "-80px"

    // Create Good button
    this.goodButton = this.createElement("button")

    // Create thumb up icon
    let thumbUpSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    )
    thumbUpSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg")
    thumbUpSvg.setAttribute("height", "24px")
    thumbUpSvg.setAttribute("viewBox", "0 0 24 24")
    thumbUpSvg.setAttribute("width", "24px")
    thumbUpSvg.setAttribute("fill", "#14e38c")
    let thumbUpSvgPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    thumbUpSvgPath1.setAttribute("d", "M0 0h24v24H0V0zm0 0h24v24H0V0z") //Set path's data
    thumbUpSvgPath1.setAttribute("fill", "none")
    let thumbUpSvgPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    let thumbUpSvgPath2d =
      "M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"
    thumbUpSvgPath2.setAttribute("d", thumbUpSvgPath2d) //Set path's data
    thumbUpSvg.append(thumbUpSvgPath1, thumbUpSvgPath2)

    // Clone generic SVG button
    this.thumbUpSvg = thumbUpSvg.cloneNode(true)
    //this.thumbUpSvg.style.filter = "drop-shadow(0px 0px 1px rgb(20 227 140 / .3))";
    this.goodButton.append(this.thumbUpSvg)

    // Create Bad button
    this.badButton = this.createElement("button")
    //this.badButton.innerHTML = "BAD";

    this.thumbDownSvg = thumbUpSvg.cloneNode(true)
    this.thumbDownSvg.style.transform = "rotate(180deg)"
    this.thumbDownSvg.style.fill = "#f45acb"
    this.badButton.append(this.thumbDownSvg)

    // Append buttons to button area
    this.goodBadButton.append(this.badButton, this.goodButton)

    // Create translate icon
    let translateSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    )
    translateSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg")
    translateSvg.setAttribute("height", "24px")
    translateSvg.setAttribute("viewBox", "0 0 24 24")
    translateSvg.setAttribute("width", "24px")
    translateSvg.setAttribute("fill", "#18093e")
    let translateSvgPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    translateSvgPath1.setAttribute("d", "M0 0h24v24H0V0z") //Set path's data
    translateSvgPath1.setAttribute("fill", "none")
    let translateSvgPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    let translateSvgPath2d =
      "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
    translateSvgPath2.setAttribute("d", translateSvgPath2d) //Set path's data
    translateSvg.append(translateSvgPath1, translateSvgPath2)

    // Clone generic translate icon
    this.translateSvg = translateSvg.cloneNode(true)
    this.translateButton = this.createElement("button", "translate-button")
    this.translateButton.append(this.translateSvg)

    // Create audio icon
    let audioSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    audioSvg.setAttribute("xmlns", "https://www.w3.org/2000/svg")
    audioSvg.setAttribute("height", "20px")
    audioSvg.setAttribute("viewBox", "0 0 24 24")
    audioSvg.setAttribute("width", "20px")
    audioSvg.setAttribute("fill", "none")
    audioSvg.setAttribute("stroke", "#18093e")
    audioSvg.setAttribute("stroke-width", "2")
    let audioSvgPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    audioSvgPath1.setAttribute("d", "M0 0h24v24H0z")
    audioSvgPath1.setAttribute("fill", "none")
    audioSvgPath1.setAttribute("stroke", "none")
    let audioSvgPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    audioSvgPath2.setAttribute("d", "M15 8a5 5 0 0 1 0 8")
    let audioSvgPath3 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    audioSvgPath3.setAttribute("d", "M17.7 5a9 9 0 0 1 0 14")
    let audioSvgPath4 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    )
    audioSvgPath4.setAttribute(
      "d",
      "M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a0.8 .8 0 0 1 1.5 .5v14a0.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"
    )
    audioSvg.append(audioSvgPath1, audioSvgPath2, audioSvgPath3, audioSvgPath4)

    // Clone generic translate icon
    this.audioSvg = audioSvg.cloneNode(true)
    this.audioSvg.classList.add("audio-icon")

    // Create translate icon
    this.englishTranslateButton = this.createElement("button", "continue")
    this.englishTranslateButton.innerHTML = "Continue"
    this.englishTranslateButton.classList.add("purple-background")

    this.nextButton = this.createElement("button", "continue")
    this.nextButton.style.display = "none"
    this.nextButton.innerHTML = "Continue"
    this.nextButton.classList.add("purple-background")

    this.buttonArea.append(this.englishTranslateButton, this.nextButton)

    // Append the title, form, and todo list to the content div
    this.content.append(
      this.header,
      this.progressBarContainer,
      this.progress,
      this.bodyContent,
      //   this.audioSvg,
      this.buttonArea,
      this.goodBadButton
    )

    // Append content div to app
    this.app.append(this.content)

    // Loader
    this.overlay = this.createElement("div")
    this.overlay.id = "overlay"
    this.overlay.style.top = 0
    this.overlay.style.height = "100%"
    this.loader = this.createElement("div", "loader")
    this.loader.id = "loader"
    this.loader.classList.add(loadergradientBackground)
    this.overlay.append(this.loader)
    this.app.append(this.overlay)

    // Popover background
    this.popoverBackground = this.createElement("div", "popover-background")

    // Welcome Popover
    this.welcomeContainer = this.createElement("div", "popover")
    this.welcomeContainer.style.display = "none"
    this.welcomeTitle = this.createElement("div", "shortcut-title")
    this.welcomeTitle.textContent = "Welcome!"
    this.welcomeContent = this.createElement("div", "popover-content-welcome")
    this.welcomeContent.innerText = welcomeIntro
    this.welcomeContinueContainer = this.createElement(
      "div",
      "continue-popover-container"
    )
    this.welcomeContinueButton = this.createElement("div", "continue-popover")
    this.welcomeContinueButton.id = "continue-welcome"
    this.welcomeContinueButton.classList.add("purple-background")
    this.welcomeContinueButton.textContent = "CONTINUE"
    this.welcomeContinueContainer.append(this.welcomeContinueButton)

    // Clone original SVG button
    this.welcomeCloseButtonSvg = closeSvg.cloneNode(true)

    // Create close button
    this.welcomeCloseButton = this.createElement("div", "popover-close")
    this.welcomeCloseButton.append(this.welcomeCloseButtonSvg)
    this.welcomeContainer.append(
      this.welcomeTitle,
      this.welcomeContent,
      this.welcomeContinueContainer,
      this.welcomeCloseButton
    )

    // Congratulations Popover
    this.congratulationsContainer = this.createElement("div", "popover")
    this.congratulationsContainer.style.display = "none"
    this.congratulationsTitle = this.createElement("div", "shortcut-title")
    this.congratulationsTitle.textContent = "Congratulations!"
    this.congratulationsContent = this.createElement(
      "div",
      "welcome-popover-content"
    )
    this.congratulationsContent.innerText =
      "You've completed all of the items that were due today."
    this.congratulationsContinueContainer = this.createElement(
      "div",
      "continue-popover-container"
    )
    this.congratulationsContinueButton = this.createElement(
      "div",
      "continue-popover"
    )
    this.congratulationsContinueButton.id = "continue-congratulations"
    this.congratulationsContinueButton.classList.add("purple-background")
    this.congratulationsContinueButton.textContent = "FINISH"
    this.congratulationsContinueContainer.append(
      this.congratulationsContinueButton
    )

    // Clone original SVG button
    this.congratulationsCloseButtonSVg = closeSvg.cloneNode(true)

    // Create close button
    this.congratulationsCloseButton = this.createElement("div", "popover-close")
    this.congratulationsCloseButton.append(this.congratulationsCloseButtonSVg)

    this.congratulationsContainer.append(
      this.congratulationsTitle,
      this.congratulationsContent,
      this.congratulationsContinueContainer,
      this.congratulationsCloseButton
    )

    // Play audio on button press

    // Definition popover
    this.definitionPopover = this.createElement("div", "definition-popover")

    // Anchor position of popover
    this.definitionPopover.style.bottom = "-70%"

    // Clone generic close button
    this.definitionCloseSvg = closeSvg.cloneNode(true)

    // Create definition popover content
    this.definitionCloseButton = this.createElement(
      "div",
      "definition-popover-close"
    )
    this.definitionCloseButton.append(this.definitionCloseSvg)

    // Append All Popovers
    this.app.append(
      this.popoverBackground,
      this.welcomeContainer,
      this.congratulationsContainer,
      this.definitionPopover
    )

    this.svgAudioCtaArray = []
    this.count = 1
    this.slideCollection = []
    this.slideArray = []
    this.currentSlide = 1
    this.spanArray = []
    this.originalWordNoSpaceArray = []
    this.originalWordSpaceArray = []
    this.pinyinWordNoSpaceArrray = []
    this.pinyinWordSpaceArrray = []
  } // End of constructor

  //
  createElement(el, clsName) {
    const elem = document.createElement(el)
    if (clsName) elem.classList.add(clsName)
    return elem
  }

  $ = (n) => document.querySelector(n)

  addNextCard(cardsSet, rightAnswers, wrongAnswers) {
    cardsSet.forEach((card, id) => {
      if (card != undefined) {
        let nextCardWordOriginal
        let newIcon
        let audioValue = ""

        let nextCard = this.createElement("div", "word")

        // Insert original word
        nextCardWordOriginal = this.createElement("p", "word-original")
        nextCardWordOriginal.innerHTML = allSyllableMap[card].character

        let answer = this.createElement("p", "word-translation")
        answer.innerHTML = allSyllableMap[card].letter
        answer.id = "word-translation-" + (id + 1)
        answer.style.opacity = 0

        let nextCardOriginalContainer = this.createElement(
          "div",
          "original-container"
        )

        if (allSyllableMap[card].pinyin) {
          let pinyin = this.createElement("p", "pinyin")
          pinyin.textContent = allSyllableMap[card].pinyin

          this.pinyinWordNoSpaceArrray.push(allSyllableMap[card].pinyin)
          this.pinyinWordSpaceArrray.push(allSyllableMap[card].pinyinSpace)

          if (this.showPinyin) {
            pinyin.style.display = "inline"
          } else {
            pinyin.style.display = "none"
          }

          let pinyinIcon = this.createElement("p", "pinyin-icon")
          pinyinIcon.textContent = "show pinyin"

          nextCardOriginalContainer.append(nextCardWordOriginal, pinyin)
        } else {
          nextCardOriginalContainer.append(nextCardWordOriginal)
        }

        nextCard.append(nextCardOriginalContainer, answer)

        let svgAudioCtaArray = []

        let stringDefined = nextCardWordOriginal.innerHTML

        // If definition exists

        if (allSyllableMap[card].definition) {
          let stringDefinedSpaces = allSyllableMap[card].definition
          let definitionArray = allSyllableMap[card].definition.split(" ")

          // Parse defined words and add span tags around them

          let newArr = []

          definitionArray.forEach((word, n) =>
            dictionary[word]
              ? newArr.push(
                  "<span id='" +
                    (id + 1) +
                    "-" +
                    (n + 1) +
                    "'" +
                    "class='definition'>" +
                    word +
                    "</span>"
                )
              : newArr.push(
                  "<span id='" +
                    (id + 1) +
                    "-" +
                    (n + 1) +
                    "'" +
                    ">" +
                    word +
                    "</span>"
                )
          )

          this.originalWordSpaceArray.push(newArr.join(" "))
          this.originalWordNoSpaceArray.push(newArr.join(""))

          nextCardWordOriginal.innerHTML = newArr.join("")
        }

        // Collect all span tags from string
        // Convert into array
        let spanCollection =
          nextCardWordOriginal.getElementsByClassName("definition")
        let spanArray = [...spanCollection]

        // Add event listeners to all span tags
        this.showDefinition(spanArray)

        let nextCardSlide = this.createElement("div", "slide")
        nextCardSlide.id = "" + (id + 1)
        nextCardSlide.append(nextCard)

        this.slideCollection.push(nextCardSlide)
        this.bodyContent.append(nextCardSlide)

        if (rightAnswers.includes((id + 1).toString())) {
          nextCard.style.color = "#ababab"
          //let right = this.createElement("div", "right-answer");
          //right.innerHTML = "GOOD";
          //nextCard.append(right);
        }

        if (wrongAnswers.includes((id + 1).toString())) {
          //let wrong = this.createElement("div", "wrong-answer");
          //wrong.innerHTML = "BAD";
          //nextCard.append(wrong);
          nextCardWordOriginal.classList.add("wrong-answer-cross")
        }
      }

      this.count++
    })
  }

  // Retrieve an element from the DOM
  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }

  // Play audio
  bindPlayAudio(handler) {
    this.audioSvg.addEventListener("click", (event) => {
      handler()
    })
  }

  bindDisplayNextCard(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler()
    })
    this.goodButton.addEventListener("click", (event) => {
      handler()
    })
  }

  get _isLastPopover() {
    // Collect all .popover nodes
    let popoverCollection = document.querySelectorAll(".popover")

    // Convert collection into node
    // Convert nodes into display block/none state
    // Filter out block states
    let popoverArray = [...popoverCollection]
      .map((popover) => popover.style.display)
      .filter((display) => display == "block")

    // If popoverArray only has 1 block state, then there is only one popover left on the DOM
    return popoverArray.length
  }

  displayButtons(boolean) {
    if (boolean == true) {
      this.bodyContent.style.overflowY = "hidden"
      this.goodBadButton.style.bottom = "0px"
      // this.showButton.style.display = "block";
      //this.nextButton.style.display = "block";
      this.englishTranslateButton.style.display = "none"
    } else {
      this.goodBadButton.style.bottom = "-80px"
      this.englishTranslateButton.style.display = "block"
      //this.nextButton.style.display = "none";
      this.bodyContent.style.overflowY = "scroll"
    }
  }

  bindToggleVisibility(handler) {
    this.goodBadButton.addEventListener("click", (event) => {
      let boolean = false
      handler(boolean)
    })

    this.englishTranslateButton.addEventListener("click", (event) => {
      let boolean = true
      handler(boolean)
    })

    /*
        this.badButton.addEventListener("click", (event) => {
          let boolean = false;
          handler(boolean);
        });
        */
  }

  bindProcessBadAnswer(handler) {
    this.badButton.addEventListener("click", (event) => {
      handler()
    })
  }

  bindProcessGoodAnswer(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler()
    })
  }

  displayScore(score) {
    this.scoreDisplay.innerText = score
  }

  displayCongratulationsPopover(boolean) {
    if (boolean == false) {
      this.congratulationsContainer.style.display = "none"

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none"
      }
    } else {
      this.congratulationsContainer.style.display = "block"

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block"
      }
    }
  }

  displayWelcomePopover(boolean) {
    boolean = false
    if (boolean == false) {
      this.welcomeContainer.style.display = "none"

      if (this._isLastPopover == 0) {
        this.popoverBackground.style.display = "none"
      }
    } else {
      this.welcomeContainer.style.display = "block"

      if (this._isLastPopover == 1) {
        this.popoverBackground.style.display = "block"
      }
    }
  }

  bindDisplayWelcomePopover(handler) {
    this.welcomeCloseButton.addEventListener("click", (event) => {
      let boolean = false
      handler(boolean)
    })

    this.welcomeContinueButton.addEventListener("click", (event) => {
      let boolean = false
      handler(boolean)
    })
  }

  bindDisplayCongratulationsPopover(handler) {
    this.congratulationsCloseButton.addEventListener("click", (event) => {
      let boolean = false
      handler(boolean)
    })

    this.congratulationsContinueButton.addEventListener("click", (event) => {
      return (window.location.href = "../")
    })
  }

  animateAudioIcon() {
    // Animate audio icon
    let audioIcon = this.audioSvg

    // Add key frame animation
    audioIcon.classList.add("audio-icon-animation")

    // Remove key frame animation
    setTimeout(function () {
      audioIcon.classList.remove("audio-icon-animation")
    }, 150)
  }

  bindScroll(handler) {
    let bodyContent = this.bodyContent
    let slideCollection = this.slideCollection

    // Setup isScrolling variable
    let isScrolling

    this.bodyContent.addEventListener(
      "scroll",
      function (event) {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling)

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          handler(bodyContent, slideCollection)
        }, 150)
      },
      false
    )
  }

  displayAnswer(element) {
    let answer = document.getElementById("word-translation-" + element)
    answer.style.opacity = 1
  }

  bindShowAnswer(handler) {
    this.englishTranslateButton.addEventListener("click", (event) => {
      handler()
    })
  }

  showDefinition(spanArray) {
    spanArray.forEach((span) => {
      span.addEventListener("click", (event) => {
        this.definitionPopover.innerHTML = ""
        this.definitionPopover.append(this.definitionCloseButton)

        let word = span.innerHTML
        this.definitionPopover.style.bottom = "0%"

        dictionary[word].forEach((item, i) => {
          let definitionPopoverTarget = this.createElement(
            "div",
            "definition-popover-target"
          )
          let definitionPopoverEnglish = this.createElement(
            "div",
            "definition-popover-english"
          )
          let definitionPopoverPinyin = this.createElement(
            "div",
            "definition-popover-pinyin"
          )
          let definitionCta = this.createElement("div", "definition-cta")

          definitionCta.innerHTML = "Add to SRS"
          definitionCta.classList.add("purple-background")
          if (item.definition.length == 0) definitionCta.style.display = "none"

          definitionPopoverPinyin.innerHTML = item.kana
          definitionPopoverEnglish.innerHTML = item.definition.join(",")

          definitionCta.id = "cta-" + span.id

          // If item is a compound or a verb
          if (item.type) {
            definitionPopoverTarget.innerHTML = item.kanji

            let definitionType = this.createElement("div", "definition-type")
            definitionType.innerHTML = item.type

            this.definitionPopover.append(
              definitionPopoverTarget,
              definitionPopoverPinyin,
              definitionType,
              definitionPopoverEnglish,
              definitionCta
            )

            definitionCta.addEventListener("click", (ev) => {
              let kanji = item.kanji

              let savedWords =
                JSON.parse(
                  localStorage.getItem(
                    languageTitle.toLowerCase() + "SavedWords"
                  )
                ) || {}

              //alert(ev.target.id);
              if (ev.target.id == "cta-" + span.id) {
                if (!savedWords[kanji]) {
                  let definitionObj = {
                    kana: item.kana,
                    definition: item.definition,
                  }
                  savedWords[kanji] = definitionObj

                  this._commitSavedWords(savedWords)
                  alert("saved in your library!")
                } else {
                  alert("already in your library!")
                }
              }
              this.definitionPopover.style.bottom = "-100%"
            })
          }

          // If word is NOT a verb
          else {
            definitionPopoverTarget.innerHTML = word

            this.definitionPopover.append(
              definitionPopoverTarget,
              definitionPopoverPinyin,
              definitionPopoverEnglish,
              definitionCta
            )
            definitionCta.addEventListener("click", (ev) => {
              let savedWords =
                JSON.parse(
                  localStorage.getItem(
                    languageTitle.toLowerCase() + "SavedWords"
                  )
                ) || {}

              //alert(ev.target.id);
              if (ev.target.id == "cta-" + span.id) {
                if (!savedWords[word]) {
                  let definitionObj = {
                    kana: item.kana,
                    definition: item.definition,
                  }

                  savedWords[word] = definitionObj
                  this._commitSavedWords(savedWords)
                  alert("saved in your library!")
                } else {
                  alert("already in your library!")
                }
              }
              this.definitionPopover.style.bottom = "-100%"
            })
          }
        })
      })

      this.definitionCloseButton.addEventListener("click", (event) => {
        this.definitionPopover.style.bottom = "-100%"
      })
    })
  }

  _commitSavedWords(data) {
    localStorage.setItem(
      languageTitle.toLowerCase() + "SavedWords",
      JSON.stringify(data)
    )
  }

  displayBadIcon(id) {
    let slide = document.getElementById(id)
    let word = slide.getElementsByClassName("word")[0]

    // If GOOD icon is showing, remove it
    //if(word.getElementsByClassName("right-answer").length > 0){
    //  word.getElementsByClassName("right-answer")[0].remove();
    //}

    word.style.color = "#18093e"

    let wordOriginal = word.getElementsByClassName("word-original")[0]
    wordOriginal.classList.add("wrong-answer-cross")

    // Only add BAD icon if it is not already showing
    //if(word.getElementsByClassName("wrong-answer").length == 0){
    //  let wrong = this.createElement("div", "wrong-answer");
    //  wrong.innerHTML = "BAD";
    //  word.append(wrong);
    //}
  }

  displayGoodIcon(id) {
    let slide = document.getElementById(id)
    let word = slide.getElementsByClassName("word")[0]

    word.style.color = "#ababab"

    let wordOriginal = word.getElementsByClassName("word-original")[0]
    wordOriginal.classList.remove("wrong-answer-cross")

    /*
        // If BAD icon is showing, remove it
        if(word.getElementsByClassName("wrong-answer").length > 0){
          word.getElementsByClassName("wrong-answer")[0].remove()
        }

        // Only add GOOD icon if it is not already showing
        if(word.getElementsByClassName("right-answer").length == 0){
          let right = this.createElement("div", "right-answer");
          right.innerHTML = "GOOD";
          word.append(right);

        }
        */
  }

  displayNext(id) {
    id++
    let slide = document.getElementById(id)
    slide.scrollIntoView()
  }

  bindGoToNext(handler) {
    this.goodButton.addEventListener("click", (event) => {
      handler()
    })
    this.badButton.addEventListener("click", (event) => {
      handler()
    })
  }

  displayPinyin(array, boolean) {
    if (boolean == false) {
      this.pinyinButton.classList.add("hidden")
      array.forEach((item) => (item.style.display = "none"))
    } else {
      this.pinyinButton.classList.remove("hidden")
      array.forEach((item) => (item.style.display = "block"))
    }
  }

  bindDisplayPinyin(handler) {
    this.pinyinButton.addEventListener("click", (event) => {
      let pinyinCollection = document.getElementsByClassName("pinyin")
      let pinyinArray = [...pinyinCollection]

      this.showPinyin = !this.showPinyin

      handler(pinyinArray, this.showPinyin)
    })
  }

  get _wordOriginalElement() {
    let noSpaceCollection = document.getElementsByClassName("word-original")
    return [...noSpaceCollection]
  }

  get _pinyinElement() {
    let noSpacePinyinCollection = document.getElementsByClassName("pinyin")
    return [...noSpacePinyinCollection]
  }

  displayNoSpace(boolean) {
    if (boolean == true) {
      this.noSpaceButton.classList.add("hidden")

      // Loop through all word-original elements
      this._wordOriginalElement.forEach((item, number) => {
        item.innerHTML = this.originalWordNoSpaceArray[number]

        let noSpaceItemCollection = item.getElementsByClassName("definition")
        let noSpaceItemArray = [...noSpaceItemCollection]

        this.showDefinition(noSpaceItemArray)
      })

      // Loop through all pinyin elements
      // Replace all innerHTML with No Space version
      this._pinyinElement.forEach((item, number) => {
        item.innerHTML = this.pinyinWordNoSpaceArrray[number]
      })
    } else {
      this.noSpaceButton.classList.remove("hidden")

      // Loop through all word-original elements
      this._wordOriginalElement.forEach((item, number) => {
        item.innerHTML = this.originalWordSpaceArray[number]

        let spaceItemCollection = item.getElementsByClassName("definition")
        let spaceItemArray = [...spaceItemCollection]
        this.showDefinition(spaceItemArray)
      })

      // Loop through all pinyin elements
      // Replace all innerHTML with space version
      this._pinyinElement.forEach((item, number) => {
        item.innerHTML = this.pinyinWordSpaceArrray[number]
      })
    }
  }

  bindDisplayNoSpace(handler) {
    this.noSpaceButton.addEventListener("click", (event) => {
      this.showNoSpaceButton = !this.showNoSpaceButton

      handler(this.showNoSpaceButton)
    })
  }

  displayProgressBarStart(start, total) {
    this.start.innerHTML = start
    this.end.innerHTML = total

    // Update progress bar value and animate (via CSS transition)
    let progressVal = Math.floor((start * 100) / total)
    this.bar.style.width = progressVal + "%"
  }

  displayProgressBarEnd(total) {
    this.end.innerHTML = total
  }
}
