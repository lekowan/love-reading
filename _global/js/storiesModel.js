//localStorage.clear();

class Model {
    constructor() {

        // Get data from  localStorage
        let _rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"));
        let _wrongAnswers = JSON.parse(localStorage.getItem(localStorageKey + "WrongAnswers"));

        this.rightAnswers = _rightAnswers || [];
        this.wrongAnswers = _wrongAnswers || [];

        this.allNewCards = Object.keys(allSyllableMap);

        // Display first word
        this.word = this.allNewCards[0];

        this.currentSlide = "1";
        this.goodAnswer = 0;
        this.totalItems = this.allNewCards.length - this.rightAnswers.length;

        
    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////

    get initialWelcomePopover() {
        return this.showWelcome;
    }

    get score(){
        let _rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"));
        let rightAnswers = _rightAnswers || [];
        return "" + Math.floor(rightAnswers.length * 100 / this.allNewCards.length) + "%"

        //return "" + _rightAnswers.length + "/" + this.allNewCards.length
    }

    get whatSlide(){
        return this.currentSlide;
    }

    get wrongAnswersArray(){
        return this.wrongAnswers;
    }

    get rightAnswersArray(){
        return this.rightAnswers;
    }

    get initialCongratulationsPopover() {
        return this.showCongratulations;
    }

    get initialWord() {
        if(this.allNewCards.length > 0){
          return this.allNewCards
       }
    }

    get totalCounter() {
        let _rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"));
        let rightAnswers = _rightAnswers || [];
        return this.allNewCards.length - rightAnswers.length;
    }



    // Check if element is within parent's viewport
    isInViewport(el, bodyContent) {
          const rect = el.getBoundingClientRect();

          return (
              rect.top >= bodyContent.getBoundingClientRect().top * 0.9  &&
              rect.bottom <= bodyContent.getBoundingClientRect().bottom * 1.1
          )
    }
      
    scroll(bodyContent, slideCollection){

        let _rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"));

        slideCollection.forEach(slide => {

          if(this.isInViewport(slide, bodyContent)){
            this.currentSlide = slide.id;
            this.playAudio();

            console.log(allSyllableMap[slide.id].character);
          }
        })

        // Pass on this.currentSlide to the view
        this.onScrolled(this.currentSlide);
    }


    playAudio(){

      let word = allSyllableMap[this.whatSlide].character;
      console.log(word);

      // If speechSynthesis in user's browser
      if (activateSpeech && "speechSynthesis" in window) {
          let audioWord = new SpeechSynthesisUtterance(word.toLowerCase());
          audioWord.lang = language;
          window.speechSynthesis.speak(audioWord);
      }

      this.onPlayedAudio();
    }

    bindOnPlayedAudio(callback) {
        this.onPlayedAudio = callback;
    }

    bindOnScrolled(callback) {
        this.onScrolled = callback;
    }


    bindOnCardsChanged(callback) {
        this.onCardsChanged = callback;
    }

    bindOnTrackerChanged(callback) {
        this.onTrackerChanged = callback;
    }

    toggleVisibility(boolean) {
        // if (boolean == true) this.sayIt();
        this.onVisibilityChanged(boolean);
    }

    bindOnVisibilityChanged(callback) {
        this.onVisibilityChanged = callback;
    }
  
    bindOnShowedScore(callback){
      this.onShowScore = callback; 
    }


    // Add new card to the DOM
    addCard() {
        this.onCardAdded(this.nextCard, this.rightAnswers, this.wrongAnswers);
    }

    bindOnNextCardAdded(callback) {
        this.onCardAdded = callback;
    }

    showDefinition(span){
        let word = this.whatSlide;
        let definition = allSyllableMap[word].span;
        console.log(definition)
        this.onShowedDefinition(definition);
    }

    bindOnShowedDefinition(callback) {
        this.onShowedDefinition = callback;
    }


    showAnswer(){
        this.onShowedAnswer(this.whatSlide);
    }

    bindOnShowedAnswer(callback) {
        this.onShowedAnswer = callback;
    }

    // Process bad answer:
    // Add answer to incorrect array
    // Update SRS data
    processBadAnswer() {

        let wrongAnswers = JSON.parse(localStorage.getItem(localStorageKey + "WrongAnswers"))  || [];
        let rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"))  || [];
        
        let currentSlide = this.whatSlide;

        // If the slide was previously marked as wrong or is new 
        // Increment the progress tracker
        if(!rightAnswers.includes(currentSlide) ){
            
            // increment progress start value
            this.goodAnswer++;        
            this.incrementProgressStart();
        } 

        // If the answer is not already in wrongAnswers in localStorage, add it
        if(!wrongAnswers.includes(currentSlide)){

            wrongAnswers.push(currentSlide);
            this._commitWrongAnswers(wrongAnswers);
        }

        // If the answer is already in rightAnswers in localStorage, remove it
        if(rightAnswers.includes(currentSlide)){
            let data = rightAnswers.filter(item => item != currentSlide);
            this._commitRightAnswers(data);
        }


        this.onBadPressed(currentSlide, this.score);
    }

    // Process good answer:
    // Add answer to incorrect array
    // Update SRS data
    processGoodAnswer() {
  
        let wrongAnswers = JSON.parse(localStorage.getItem(localStorageKey + "WrongAnswers"))  || [];
        let rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"))  || [];
        
        let currentSlide = this.whatSlide;

        // If the answer is not already in rightAnswers in localStorage, add it
        if(!rightAnswers.includes(currentSlide)){

            // If the slide was previously marked as wrong or is new 
            // increment progress start value
            this.goodAnswer++;        
            this.incrementProgressStart();

            rightAnswers.push(currentSlide);
            this._commitRightAnswers(rightAnswers);
        }

        // If the answer is already in wrongAnswers in localStorage, remove it
        if(wrongAnswers.includes(currentSlide)){
            let data = wrongAnswers.filter(item => item != currentSlide);
            this._commitWrongAnswers(data);
        }

        this.onGoodPressed(currentSlide, this.score);
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

    // Congratulations Popover
    showCongratulationsPopover(boolean) {
        this.onShowCongratulationsPopoverChanged(boolean);
    }

    bindOnShowCongratulationsPopoverChanged(callback) {
        this.onShowCongratulationsPopoverChanged = callback;
    }

    goToFirstSlide(){

        let currentSlide;
        currentSlide = this.whatSlide;

        let rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"))  || [];
        console.log(rightAnswers)

        if(rightAnswers.includes(currentSlide)){
            //this.currentSlide++;
            console.log('initial');
            this.goToNext()
        }   
    }


    goToNext(){
        let currentSlide;
        currentSlide = this.whatSlide;

        console.log(currentSlide);

        let rightAnswers = JSON.parse(localStorage.getItem(localStorageKey + "RightAnswers"))  || [];
        console.log(rightAnswers)

        let nextSlide = "" + (+currentSlide + 1);
        console.log(nextSlide);

        if(rightAnswers.includes(nextSlide)){
            this.currentSlide++;
            console.log('yay');
            this.goToNext()
        }

        else {
            this.onWentToNext(currentSlide);            
        }
    }

    saveDefinition(word){
        console.log(word)
    }

    bindOnWentToNext(callback) {
        this.onWentToNext = callback;
    }

    bindOnDisplayedPinyin(callback){
        this.onDisplayedPinyin = callback;
    }

    showPinyin(array,boolean){
        this.onDisplayedPinyin(array, boolean);
    }

    bindOnDisplayedNoSpace(callback){
        this.onDisplayedNoSpace = callback;
    }

    displayNoSpace(boolean){
        this.onDisplayedNoSpace(boolean);
    }


    // Update progress start value
    incrementProgressStart() {
        this.onProgressStartChanged(this.goodAnswer, this.totalItems);
    }

    bindOnProgressIncremented(callback) {
        this.onProgressStartChanged = callback;
    }


    _commitRightAnswers(data) {
        localStorage.setItem(localStorageKey + "RightAnswers", JSON.stringify(data));
    }

    _commitWrongAnswers(data) {
        localStorage.setItem(localStorageKey + "WrongAnswers", JSON.stringify(data));
    }


}