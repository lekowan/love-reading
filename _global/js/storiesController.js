class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    ////////////////////
    // Function bindings

    // Change slide
    this.model.bindOnTrackerChanged(this.onTrackerChanged);

    // Toggle button visbility
    this.model.bindOnVisibilityChanged(this.onVisibilityChanged);
    this.view.bindToggleVisibility(this.handleToggleVisibility);

    // Process bad answer
    this.model.bindOnBadAnswerProcessed(this.onBadPressed);
    this.view.bindProcessBadAnswer(this.handleProcessBadAnswer);

    // Process good answer
    this.model.bindOnGoodAnswerProcessed(this.onGoodPressed);
    this.view.bindProcessGoodAnswer(this.handleProcessGoodAnswer);

    // Display initial word + answer
    //if (!this.model.showWelcome) 
    this.onNextCardAdded(this.model.initialWord, this.model.rightAnswersArray, this.model.wrongAnswersArray);

    // Get slide number upon scrolling
    this.model.bindOnScrolled(this.onScrolled);
    this.view.bindScroll(this.handleScroll);

    // Play audio
    this.model.bindOnPlayedAudio(this.onPlayedAudio);
    this.view.bindPlayAudio(this.handlePlayAudio);

    // Show answer
    this.model.bindOnShowedAnswer(this.onShowedAnswer);
    this.view.bindShowAnswer(this.handleShowAnswer);

    // Show pinyin
    this.view.bindDisplayPinyin(this.handleDisplayPinyin);
    this.model.bindOnDisplayedPinyin(this.onDisplayedPinyin);

    // Show no space
    this.view.bindDisplayNoSpace(this.handleDisplayNoSpace);
    this.model.bindOnDisplayedNoSpace(this.onDisplayedNoSpace);

    // Go to next slide
    this.model.bindOnWentToNext(this.onWentToNext);
    this.view.bindGoToNext(this.handleGoToNext);

    // Display Welcome popover
    this.onShowWelcomePopoverChanged(this.model.initialWelcomePopover);
    this.model.bindOnShowWelcomePopoverChanged(this.onShowWelcomePopoverChanged);
    this.view.bindDisplayWelcomePopover(this.handleDisplayWelcomePopover);
  
    // Display definition popover
    this.model.bindOnShowedDefinition(this.onShowedDefinition);
    //this.view.showDefinition(_, this.handleSaveDefinition);

    // Display score
    this.onShowedScore(this.model.score);

    // Go to correct slide
    this.model.goToFirstSlide();

    // Display total number of items counter = progress end value
    this.onProgressBarLoaded(this.model.totalCounter);

    // Increment progress start
    this.model.bindOnProgressIncremented(this.onProgressIncremented);

    // Display Congratulations popover
    //this.onShowCongratulationsPopoverChanged(this.model.initialCongratulationsPopover);
    //this.model.bindOnShowCongratulationsPopoverChanged(this.onShowCongratulationsPopoverChanged);
    //this.view.bindDisplayCongratulationsPopover(this.handleDisplayCongratulationsPopover);

  } // End of constructor


  // Show score
  onShowedScore = (score) => {
    this.view.displayScore(score);
  }

  // Toggle button visibility handlers
  handleToggleVisibility = (boolean) => {
    this.model.toggleVisibility(boolean);
  };

  onVisibilityChanged = (boolean) => {
    this.view.displayButtons(boolean);
  };

  // Process bad answer
  handleProcessBadAnswer = () => {
    this.model.processBadAnswer();
  };

  onBadPressed = (id, score) => {
    this.view.displayBadIcon(id);
    this.view.displayScore(score);
  };

  // Process good answer
  handleProcessGoodAnswer = () => {
    this.model.processGoodAnswer();
  };

  onGoodPressed = (id, score) => {
    this.view.displayGoodIcon(id);
    this.view.displayScore(score);
  };

  onNextCardAdded = (card, rightAnswers, wrongAnswers) => {
    this.view.addNextCard(card, rightAnswers, wrongAnswers);
  };

  // Scroll
  handleScroll = (bodyContent, slideCollection) => {
    this.model.scroll(bodyContent, slideCollection);
  };

  onScrolled = (answer) => {
    //this.view.displayAnswer(answer);
  };

  // Play Audio
  handlePlayAudio = () => {
    this.model.playAudio();
  };

  onPlayedAudio = () => {
    this.view.animateAudioIcon();
  };

  // Save definition
  /* 
  handleSaveDefinition = (word) => {
    this.model.saveDefinition(word);
  };
  */

  onShowedDefinition = () => {
    this.view.addNextCard(card, answer, isNew, handler);
  };


  // Go to next
  handleGoToNext = () => {
    this.model.goToNext();
  };

  onWentToNext = (anchor) => {
    this.view.displayNext(anchor);
  };

  // Show Answer
  handleShowAnswer = () => {
    this.model.showAnswer();
  };

  onShowedAnswer = (id) => {
    this.view.displayAnswer(id);
  };

  // Show pinyin
  handleDisplayPinyin = (array, boolean) => {
    this.model.showPinyin(array, boolean);
  };

  onDisplayedPinyin = (array, boolean) => {
    this.view.displayPinyin(array, boolean);
  };

  // Show No Space
  handleDisplayNoSpace = (boolean) => {
    this.model.displayNoSpace(boolean);
  };

  onDisplayedNoSpace = (boolean) => {
    this.view.displayNoSpace(boolean);
  };

  // Handle Welcome Popover visibility
  handleDisplayWelcomePopover = (boolean) => {
    this.model.showWelcomePopover(boolean);
  };

  onShowWelcomePopoverChanged = (boolean) => {
    this.view.displayWelcomePopover(boolean);
  };

  // Handle Congratulations Popover visibility
  handleDisplayCongratulationsPopover = (boolean) => {
    this.model.showCongratulationsPopover(boolean);
  };

  onShowCongratulationsPopoverChanged = (boolean) => {
    this.view.displayCongratulationsPopover(boolean);
  };

  // Display total number of items = progress end value
  onProgressBarLoaded = (number) => {
    this.view.displayProgressBarEnd(number);
  };

  // Increment progress start value
  onProgressIncremented = (start, total) => {
    this.view.displayProgressBarStart(start, total);
  };

}

const app = new Controller(new Model(), new View());
