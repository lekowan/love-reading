//localStorage.clear();

class Model {
    constructor() {
        // Declare today's date, start of day and end of day
        const now = new Date();
        // const now = new Date("2021/07/11"); /* for testing only - replaces previous line */
        const todaysDate = now.toLocaleDateString("en-GB");

        let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        let endOfDay = startOfDay + 24 * 60 * 60 * 1000 - 1;

        // Get data from  localStorage
        let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
        let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        this.newItemsArray = [];
        this.dueTodayItemsArray = [];

        // If data not in local storage, create and save the data object
        if (!_data) {

            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////////////////////
            /////////////////// TO BE DELETED

            /*
            if (localStorageKey == "norwegian" + "MysteryOfNilsVocabulary" + "Srs") {

                // transform object into array
                this.newItemsArray = Object.keys(norwegianMysteryOfNilsVocabularySrsData);

                // save data in local storage
                this._commitData(norwegianMysteryOfNilsVocabularySrsData);

            } else if (localStorageKey == "korean" + "IntegratedKorean" + "Srs") {

                // transform object into array
                this.newItemsArray = Object.keys(koreanIntegratedKoreanSrsData);

                // save data in local storage
                this._commitData(koreanIntegratedKoreanSrsData);

            } else if (localStorageKey == "mandarin" + "Hsk1Vocabulary" + "Srs") {

                // transform object into array
                this.newItemsArray = Object.keys(mandarinHsk1VocabularySrsData);

                // save data in local storage
                this._commitData(mandarinHsk1VocabularySrsData);

                ///////////////////////////////////////////////////////////////////////////////////////////


            } else {
            */
                // transform object into array
                this.newItemsArray = Object.keys(allSyllableMap);

                // save data in local storage
                this._commitData(allSyllableMap);
            // }
        }

        // If data exist, filter out new items and due items
        else {
            // Go through saved data and push due items into dueTodayArray
            for (let item in _data) {
                let wordData = _data[item];

                // If SRS Data exists for item, item is NOT new
                if (wordData.srsData) {
                    let dueDate = wordData.srsData.date;

                    // If item is due today or in the past, push in to dueTodayArray
                    if (dueDate <= endOfDay) {
                        this.dueTodayItemsArray.push(item);
                    }
                }

                // If SRS Data doesn't exist, item is new - push into newItemsArray
                else {
                    this.newItemsArray.push(item);
                }
            }
        }

        this.number = _number ? _number : this.newItemsArray.length;
        this.previousInputNumber;
        this.tracker = 0;
        this.show = false;
        this.incorrectArray = [];
        this.showNewItems = true;
        this.showWelcome = false;
        this.showTodaysItems = true;
        this.showCongratulations = false;
        this.showSrsReset = false;
        this.showSettings = false;
        this.goodAnswer = 0;
        this.totalItems = 0;

        // Local storage Progress
        let timeStamp = "";
        let newFromPreviousDayArray = [];
        this.completedItemsArray = [];

        // If progress data not in local storage, create it
        if (!_progress) {
            this.showWelcome = true;


            _progress = {};

            // manually importing SRS data 
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////

            ///////////////////////////////////////////////////////////////////////////////////////////
            /////////////////// TO BE DELETED

            /*
            if (localStorageKey == "norwegian" + "MysteryOfNilsVocabulary" + "Srs") {
                _progress.timeStamp = todaysDate;
                _progress.newItemsArray = norwegianMysteryOfNilsVocabularySrsProgress.newItemsArray;
                _progress.completedItemsArray = [];
                _progress.dueTodayItemsArray = norwegianMysteryOfNilsVocabularySrsProgress.newItemsArray;

                timeStamp = todaysDate;


            } else if (localStorageKey == "korean" + "IntegratedKorean" + "Srs") {
                _progress.timeStamp = todaysDate;
                _progress.newItemsArray = koreanIntegratedKoreanSrsProgress.newItemsArray;
                _progress.completedItemsArray = [];
                _progress.dueTodayItemsArray = koreanIntegratedKoreanSrsProgress.newItemsArray;

                timeStamp = todaysDate;

            } else if (localStorageKey == "mandarin" + "Hsk1Vocabulary" + "Srs") {
                _progress.timeStamp = todaysDate;
                _progress.newItemsArray = mandarinHsk1VocabularySrsProgress.newItemsArray;
                _progress.completedItemsArray = [];
                _progress.dueTodayItemsArray = mandarinHsk1VocabularySrsProgress.newItemsArray;

                timeStamp = todaysDate;

            
            } else {
                
            */
                _progress.timeStamp = todaysDate;
                _progress.newItemsArray = this.newItemsArray;
                _progress.completedItemsArray = [];
                _progress.dueTodayItemsArray = this.dueTodayItemsArray;

                timeStamp = todaysDate;
            // }

            this.allNewCards = this.newItemsArray.slice(0, this.number);

            _progress.allNewCards = this.allNewCards;

            // Save progress data in Local Storage
            return this._commitProgress(_progress);
        }

        // If progress data exists
        else {
            // If this is a new session
            if (_progress.timeStamp != todaysDate) {
                // Create a new array including new Items that have NOT been completed in previous session
                this.newItemsFromPreviousSession = this.newItemsArray.filter((item) => _progress.completedItemsArray.includes(item));

                // Create exercise array
                this.allNewCards = this.newItemsArray.slice(0, this.number)
                    .concat(this.shuffle(this.newItemsFromPreviousSession))
                    .concat(this.shuffle(this.dueTodayItemsArray))
                    .filter((item) => item != null);

                /*
                this.allNewCards = this.shuffle(this.newItemsArray.slice(0, this.number))
                  .concat(this.shuffle(this.newItemsFromPreviousSession))
                  .concat(this.shuffle(this.dueTodayItemsArray))
                  .filter((item) => item != null);
                */

                // If new items array is empty, hide today's items popover
                if (this.newItemsArray.slice(0, this.number).length == 0) {
                    this.showTodaysItems = false;
                }

                // Save today's time stamp in Local Storage
                _progress.timeStamp = todaysDate;

                timeStamp = todaysDate;

                // Save today's array in Local Storage
                _progress.allNewCards = this.allNewCards;
                _progress.newItemsArray = this.newItemsArray;
                _progress.dueTodayItemsArray = this.dueTodayItemsArray;

                // Reset completed items array
                _progress.completedItemsArray = [];

                // Save progress data in Local Storage
                this._commitProgress(_progress);

                // If the session was started ealier on today
            } else {
                timeStamp = _progress.timeStamp;
                this.allNewCards = _progress.allNewCards.filter((item) => !_progress.completedItemsArray.includes(item));

                this.showTodaysItems = false;

                // If all cards have been completed - go to Congratulations
                if (this.allNewCards.length == 0) {
                    this.showNewItems = false;
                    this.showCongratulations = true;
                }
            }
        }

        // Display first word
        this.word = this.allNewCards[0];

        // Create counter variables
        this.newItemsTracker = this.allNewCards.length - this.dueTodayItemsArray.length;
        this.revisionItemsTracker = this.dueTodayItemsArray.length;

        this.totalItems = this.allNewCards.length; 
        console.log(this.totalItems);

    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    get initialWelcomePopover() {
        return this.showWelcome;
    }

    get initialNewItemsPopover() {
        let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
        return _number ? false : true;
    }

    get initialCongratulationsPopover() {
        return this.showCongratulations;
    }

    get initialTodaysItemsPopover() {
        return this.showTodaysItems;
    }

    get totalCounter() {
        console.log(this.allNewCards.length);
        return this.allNewCards.length;
    }

    get newItemsCounter() {
        return this.newItemsTracker;
    }

    get revisionItemsCounter() {
        return this.revisionItemsTracker;
    }

    get initialWord() {
        return this.allNewCards[0];
    }

    get initialAnswer() {
        if (this.allNewCards[0] != undefined) {
            let word = this.allNewCards[0];
            return word.romanize();
        }
    }

    get newAnswer() {
        let word = this.allNewCards[this.tracker];
        return word.romanize();
    }

    get nextCard() {
        return this.allNewCards[this.tracker];
    }

    get trackerValue() {
        return this.tracker;
    }


    /*
      get showNewItemsPopoverValue() {
          return this.showNewItems;
      }

      get showWelcomePopoverValue() {
          return this.showWelcome;
      } 

      get showCongratulationsPopoverValue() {
          return this.showCongratulations;
      }

      */

    // Shuffle Array Function
    shuffle(array) {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[randIndex]] = [shuffledArray[randIndex], shuffledArray[i]];
        }
        return shuffledArray;
    }

    changeNumber(number) {
        console.log(number);

        // Fetch number from localStorage
        let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        // If the number passed is greater than the array
        if (number > this.newItemsArray.length) {
            number = this.newItemsArray.length;
        }

        // If this is the first session ever
        if (!_number) {
            // Create shuffled exercise array
            this.allNewCards = this.newItemsArray
                .slice(0, number)
                .concat(this.dueTodayItemsArray)
                .filter((item) => item != null);

            /*
            this.allNewCards = this.shuffle(
              this.newItemsArray
                .slice(0, number)
                .concat(this.dueTodayItemsArray)
                .filter((item) => item != null)
            );
            */

            // Add the first card to the DOM
            this.addCard();

            // Save new array and new number
            _progress.allNewCards = this.allNewCards;
            _number = number;

            this._commitNumber(_number);
            this._commitProgress(_progress);

            // Reset tracker
            this.newItemsTracker = number;

            // Update the view
            this.onNumberChanged(this.newItemsArray.slice(0, number), number);
        }

        // If this is not the first session ever, start a fresh new session
        else {
            // Reset today's timestamp
            _progress.timeStamp = "";
            this._commitProgress(_progress);

            // Save the number
            _number = number;
            this._commitNumber(_number);

            // Reload the app
            setTimeout(function() {
                window.location.reload();
            }, 500);
        }

        // Update progress tracker
        this.totalItems = this.allNewCards.length 
        this.incrementProgressStart()
    }

    bindOnCardsChanged(callback) {
        this.onCardsChanged = callback;
    }

    bindOnTrackerChanged(callback) {
        this.onTrackerChanged = callback;
    }

    bindOnNumberChanged(callback) {
        this.onNumberChanged = callback;
    }

    // Change previous input number
    changePreviousInputNumber(currentInputNumber) {
        this.previousInputNumber = currentInputNumber;
    }

    // Restore previous input number
    restorePreviousInputNumber() {
        this.onRestorePreviousInputNumber(this.previousInputNumber);
    }

    bindOnRestorePreviousInputNumber(callback) {
        this.onRestorePreviousInputNumber = callback;
    }

    toggleVisibility(boolean) {
        if (boolean == true) this.sayIt();
        this.onVisibilityChanged(boolean);
    }

    bindOnVisibilityChanged(callback) {
        this.onVisibilityChanged = callback;
    }

    // Add new card to the DOM
    addCard() {
        // if end of array is reached
        if (this.tracker == this.allNewCards.length) {
            // if incorrect array is empty - the exercise is finished
            if (this.incorrectArray.length == 0) {
                // Parse local storage and get SRS Data
                let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));
                let dateArray = [];

                // Push SRS data from local Storage into Date Array
                if (_data) {
                    for (let item in _data) {
                        let wordData = _data[item];
                        if (wordData.srsData) {
                            dateArray.push(wordData.srsData.date);
                        }
                    }
                }

                // Get closest date
                let nextDate = Math.min(...dateArray);

                // Save closest date in localStorage
                this._commitNextDate(nextDate);

                // Open Congratulations Popover
                this.onShowCongratulationsPopoverChanged(this.showCongratulationsPopover);
            }

            // If incorrect array is not empty, carry on looping through incorrect items
            else {
                // concatenate incorrect array to allNewCards
                this.allNewCards = this.allNewCards.concat(this.incorrectArray);
                this.incorrectArray = [];

                // add next card
                this.onCardAdded(this.nextCard, this.newAnswer);
            }
        }
        // If end of array is NOT reached
        else {
            // add next card
            this.onCardAdded(this.nextCard, this.newAnswer);
        }
    }

    // Play audio
    sayIt() {
        let word = this.allNewCards[this.tracker]

        // If speechSynthesis in user's browser and activateSpeech is zh-CN
        if (activateSpeech && "speechSynthesis" in window && language == "zh-CN") {
            if (exerciseType == "vocabularyEnglish") {
                let newWord = word.romanize()
                    .split("")
                    .filter(char => /\p{Script=Han}/u.test(char))
                    .join("")
                let audioWord = new SpeechSynthesisUtterance(newWord.replace(/\s*\(.*?\)\s*/g, '').toLowerCase());
                audioWord.lang = language;
                window.speechSynthesis.speak(audioWord);
            } else {
                let audioWord = new SpeechSynthesisUtterance(word.replace(/\s*\(.*?\)\s*/g, '').toLowerCase());
                audioWord.lang = language;
                window.speechSynthesis.speak(audioWord);
            }

        }

        // If speechSynthesis in user's browser and activateSpeech is not zh-CN
        if (activateSpeech && "speechSynthesis" in window && language != "zh-CN") {
            let audioWord = new SpeechSynthesisUtterance(word.toLowerCase());
            audioWord.lang = language;
            window.speechSynthesis.speak(audioWord);
        }

        // If activate speech is false and audio file exists, play it
        if (!activateSpeech && allSyllableMap[word].audio) {
            this.playAudio(allSyllableMap[word].audio);
        }
    }

    // Initiate audio
    playAudio(url) {
        new Audio(url).play();
    }

    incrementTracker() {
        this.tracker++;
        this.onTrackerChanged(this.trackerValue);
    }

    removeNewItem() {
        this.newItemsTracker--;
        this.onNewItemsCounterChanged(this.newItemsTracker);
    }

    bindOnNewItemsCounterChanged(callback) {
        this.onNewItemsCounterChanged = callback;
    }

    // Update progress start value
    incrementProgressStart() {
        this.onProgressStartChanged(this.goodAnswer, this.totalItems);
    }

    bindOnProgressIncremented(callback) {
        this.onProgressStartChanged = callback;
    }


    removeRevisionItem() {
        this.revisionItemsTracker--;
        this.onRevisionItemsCounterChanged(this.revisionItemsTracker);
    }

    bindOnRevisionItemsCounterChanged(callback) {
        this.onRevisionItemsCounterChanged = callback;
    }

    bindOnNextCardAdded(callback) {
        this.onCardAdded = callback;
    }

    // Process bad answer:
    // Add answer to incorrect array
    // Update SRS data
    processBadAnswer() {
        let word = this.allNewCards[this.tracker - 1];
        this.incorrectArray.push(word);

        // Get data from local Storage
        let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));

        let wordData = _data[word];
        let lastShown, lastState;

        // If SRS data doesn't exist
        if (!wordData.srsData) {
            lastShown = new Date().getTime();
            lastState = "bad";
        }

        // If SRS data exists
        else {
            lastShown = wordData.srsData.date;
            lastState = wordData.srsData.state;
        }

        let srsObj = new SpacedRepetition(lastShown, lastState);
        wordData.srsData = srsObj.bad();

        // save data in local storage
        this._commitData(_data);
    }

    // Process good answer:
    // Update SRS data
    processGoodAnswer() {
        let word = this.allNewCards[this.tracker - 1];

        // Get data from local Storage
        let _data = JSON.parse(localStorage.getItem(localStorageKey + "Data"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        let wordData = _data[word];
        let lastShown, lastState;

        // If no SRS data exist for the word, it is new
        if (!wordData.srsData) {
            lastShown = new Date().getTime();
            lastState = "bad";

            this.removeNewItem();
        }

        // If SRS data exists AND the word is new - for example, the word has been processed as Bad in the same session
        else if (this.newItemsArray.includes(word)) {
            lastShown = wordData.srsData.date;
            lastState = wordData.srsData.state;

            this.removeNewItem();

            // If SRS data exists and the word is not new
        } else {
            lastShown = wordData.srsData.date;
            lastState = wordData.srsData.state;

            this.removeRevisionItem();
        }

        let srsObj = new SpacedRepetition(lastShown, lastState);
        wordData.srsData = srsObj.good();

        // Add correct item to Completed Items Array
        _progress.completedItemsArray.push(word);

        // increment progress start value
        this.goodAnswer++;        
        this.incrementProgressStart();

        // save data in local storage
        this._commitData(_data);
        this._commitProgress(_progress);
    }

    bindOnBadAnswerProcessed(callback) {
        this.onBadPressed = callback;
    }

    bindOnGoodAnswerProcessed(callback) {
        this.onGoodPressed = callback;
    }

    // Welcome Popover
    showWelcomePopover(boolean) {
        this.onShowWelcomePopoverChanged(boolean);
    }

    bindOnShowWelcomePopoverChanged(callback) {
        this.onShowWelcomePopoverChanged = callback;
    }

    // Today's Items Popover
    showTodaysItemsPopover(boolean) {
        this.onShowTodaysItemsPopoverChanged(boolean);
    }

    bindOnShowTodaysItemsPopoverChanged(callback) {
        this.onShowTodaysItemsPopoverChanged = callback;
    }

    // New Items Popover
    bindOnShowNewItemsPopoverChanged(callback) {
        this.onShowNewItemsPopoverChanged = callback;
    }

    showNewItemsPopover(boolean) {
        this.onShowNewItemsPopoverChanged(boolean);
    }

    // Congratulations Popover
    showCongratulationsPopover(boolean) {
        this.onShowCongratulationsPopoverChanged(boolean);
    }

    bindOnShowCongratulationsPopoverChanged(callback) {
        this.onShowCongratulationsPopoverChanged = callback;
    }

    // SRS reset popover
    showSrsResetPopover() {
        this.showSrsReset = !this.showSrsReset;
        this.onShowSrsResetPopoverChanged(this.showSrsReset);
    }

    bindOnShowSrsResetPopoverChanged(callback) {
        this.onShowSrsResetPopoverChanged = callback;
    }

    // Settings sliding menu
    showSettingsMenu() {
        this.showSettings = !this.showSettings;
        this.onShowSettingsMenuChanged(this.showSettings);
    }

    bindOnShowSettingsMenuChanged(callback) {
        this.onShowSettingsMenuChanged = callback;
    }

    // Save in local storage methods
    _commitNumber(number) {
        localStorage.setItem(localStorageKey + "Number", JSON.stringify(number));
    }

    _commitData(data) {
        localStorage.setItem(localStorageKey + "Data", JSON.stringify(data));
    }

    _commitProgress(progress) {
        localStorage.setItem(localStorageKey + "Progress", JSON.stringify(progress));
    }

    _commitNextDate(nextDate) {
        localStorage.setItem(localStorageKey + "NextDate", JSON.stringify(nextDate));
    }
}