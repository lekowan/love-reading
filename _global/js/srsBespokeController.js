class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    ////////////////////
    // Function bindings

    // Change number in array
    this.model.bindOnNumberChanged(this.onNumberChanged);
    this.view.bindChangeNumber(this.handleChangeNumber);

    // Change previous input number
    this.view.bindChangePreviousInputNumber(this.handleChangePreviousInputNumber);

    // Restore previous number
    this.model.bindOnRestorePreviousInputNumber(this.onRestorePreviousInputNumber);
    this.view.bindDisplayPreviousInputNumber(this.handleDisplayPreviousInputNumber);

    // Change slide
    this.model.bindOnTrackerChanged(this.onTrackerChanged);
    this.view.bindIncrementTracker(this.handleIncrementTracker);

    // Toggle button visbility
    this.model.bindOnVisibilityChanged(this.onVisibilityChanged);
    this.view.bindToggleVisibility(this.handleToggleVisibility);

    // Process bad answer
    this.model.bindOnBadAnswerProcessed(this.onBadPressed);
    this.view.bindProcessBadAnswer(this.handleProcessBadAnswer);

    // Process good answer
    this.model.bindOnGoodAnswerProcessed(this.onGoodPressed);
    this.view.bindProcessGoodAnswer(this.handleProcessGoodAnswer);

    /*
    // Process more button
    this.model.bindOnMoreButtonProcessed(this.moreButtonPressed);
    this.view.bindProcessMoreButton(this.handleProcessMoreButton);
    */

    // Display initial word + answer
    if (!this.model.showWelcome) this.onNextCardAdded(this.model.initialWord, this.model.initialAnswer);

    // Display total card count = progress end value
    //this.onProgressIncremented(this.model.initialWord, this.model.initialAnswer)

    // Display next card
    this.model.bindOnNextCardAdded(this.onNextCardAdded);
    this.view.bindDisplayNextCard(this.handleAddCard);

    // Display Today's items popover
    /*
    this.onShowTodaysItemsPopoverChanged(this.model.initialTodaysItemsPopover);
    this.model.bindOnShowTodaysItemsPopoverChanged(this.onShowTodaysItemsPopoverChanged);
    this.view.bindDisplayTodaysItemsPopover(this.handleDisplayTodaysItemsPopover);
    */

    // Display New items popover
    this.onShowNewItemsPopoverChanged(this.model.initialNewItemsPopover);
    this.model.bindOnShowNewItemsPopoverChanged(this.onShowNewItemsPopoverChanged);
    this.view.bindDisplayNewItemsPopover(this.handleDisplayNewItemsPopover);

    // Display Welcome popover
    this.onShowWelcomePopoverChanged(this.model.initialWelcomePopover);
    this.model.bindOnShowWelcomePopoverChanged(this.onShowWelcomePopoverChanged);
    this.view.bindDisplayWelcomePopover(this.handleDisplayWelcomePopover);

    // Display Congratulations popover
    this.onShowCongratulationsPopoverChanged(this.model.initialCongratulationsPopover);
    this.model.bindOnShowCongratulationsPopoverChanged(this.onShowCongratulationsPopoverChanged);
    this.view.bindDisplayCongratulationsPopover(this.handleDisplayCongratulationsPopover);

    // Display SRS reset popover
    this.model.bindOnShowSrsResetPopoverChanged(this.onShowSrsResetPopoverChanged);
    this.view.bindDisplaySrsResetPopover(this.handleDisplaySrsResetPopover);

    // Display settings sliding menu
    this.model.bindOnShowSettingsMenuChanged(this.onShowSettingsMenuChanged);
    this.view.bindDisplaySettingsMenu(this.handleDisplaySettingsMenu);

    // Display initial new items counter
    this.onNewItemRemoved(this.model.newItemsCounter);

    // Decrement new items counter
    this.model.bindOnNewItemsCounterChanged(this.onNewItemRemoved);

    // Display initial revision items counter
    this.onRevisionItemRemoved(this.model.revisionItemsCounter);

    // Decrement revision items counter
    this.model.bindOnRevisionItemsCounterChanged(this.onRevisionItemRemoved);

    // Display total number of items counter = progress end value
    this.onProgressBarLoaded(this.model.totalCounter);

    // Increment progress start
    this.model.bindOnProgressIncremented(this.onProgressIncremented);

    // Display Today's Items popover
    //let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
    // this.view.addTodaysCards(this.model.newItemsArray.slice(0, _number));

    // Process remove card
    this.view.bindRemoveCard(this.handleRemoveCard);

  } // End of constructor

  // Change number in array handlers
  handleChangeNumber = (number) => {
    this.model.changeNumber(number);
  };

  onNumberChanged = (array, number) => {
    //this.view.addTodaysCards(array);
    this.view.displayNewItemsCount(number);
  };

  // Change previous input number
  handleChangePreviousInputNumber = (number) => {
    this.model.changePreviousInputNumber(number);
  };

  // Restore previous input number
  handleDisplayPreviousInputNumber = () => {
    this.model.restorePreviousInputNumber();
  };

  // Remove card
  handleRemoveCard = () => {
    this.model.removeCard();
  };

  onRestorePreviousInputNumber = (previousInputNumber) => {
    this.view.displayPreviousInputNumber(previousInputNumber);
  };

  // Change slide handlers
  handleIncrementTracker = () => {
    this.model.incrementTracker();
  };

  onTrackerChanged = (number) => {
    this.view.animateSlider(number);
  };

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

  onBadPressed = () => {
    this.view.bindProcessBadAnswer();
  };

  // Process good answer
  handleProcessGoodAnswer = () => {
    this.model.processGoodAnswer();
  };

  onGoodPressed = () => {
    this.view.bindProcessGoodAnswer();
  };

  /*
  // Process more button
  handleProcessMoreButton = () => {
    this.model.processMoreButton();
  };

  onMoreButtonPressed = () => {
    this.view.bindProcessMoreButton();
  };
  */


  // Handle Say it
  //handleProcessSayIt = () => {
  //  this.model.sayIt();
  //};

  //onSayItPressed = () => {
  //  this.view.bindPlayAudio();
    //this.view.addNextCard();
  //};

  // Add card
  handleAddCard = () => {
    this.model.addCard();
  };

  onNextCardAdded = (card, answer, isNew) => {
    this.view.addNextCard(card, isNew);
    this.view.displayAnswer(answer);
    //this.view.bindPlayAudio();
  };


  // Display total number of items = progress end value
  onProgressBarLoaded = (number) => {
    this.view.displayProgressBarEnd(number);
  };

  // Handle Welcome Popover visibility
  handleDisplayWelcomePopover = (boolean) => {
    this.model.showWelcomePopover(boolean);
  };

  onShowWelcomePopoverChanged = (boolean) => {
    this.view.displayWelcomePopover(boolean);
  };

  // Handle New Items Popover visibility
  handleDisplayNewItemsPopover = (boolean) => {
    this.model.showNewItemsPopover(boolean);
  };

  onShowNewItemsPopoverChanged = (boolean) => {
    this.view.displayNewItemsPopover(boolean);
  };

  /*
  // Handle Today's Items Popover visibility
  handleDisplayTodaysItemsPopover = (boolean) => {
    this.model.showTodaysItemsPopover(boolean);
  };

  onShowTodaysItemsPopoverChanged = (boolean) => {
    this.view.displayTodaysItemsPopover(boolean);
  };
  */

  // Handle Congratulations Popover visibility
  handleDisplayCongratulationsPopover = (boolean) => {
    this.model.showCongratulationsPopover(boolean);
  };

  onShowCongratulationsPopoverChanged = (boolean) => {
    this.view.displayCongratulationsPopover(boolean);
  };

  // Handle SRS reset popover visibility
  handleDisplaySrsResetPopover = () => {
    this.model.showSrsResetPopover();
  };

  onShowSrsResetPopoverChanged = (boolean) => {
    this.view.displaySrsResetPopover(boolean);
  };

  // Handle settings sliding menu visibility
  handleDisplaySettingsMenu = () => {
    this.model.showSettingsMenu();
  };

  onShowSettingsMenuChanged = (boolean) => {
    this.view.displaySettingsMenu(boolean);
  };

  // Remove items from counters
  onNewItemRemoved = (number) => {
    this.view.displayNewItemsCount(number);
  };

  onRevisionItemRemoved = (number) => {
    this.view.displayRevisionItemsCount(number);
  };

  // Increment progress start value
  onProgressIncremented = (start, total) => {
    this.view.displayProgressBarStart(start, total);
  };

  populateTodaysPopover = (array) => {
    this.view.addTodaysCards(array);
  };
}

const app = new Controller(new Model(), new View());
