const defaultConfig = {
  'new': 5 * 60 * 1000,
  'bad': 5 * 60 * 1000,
  //'fresh': 0.1 * 3600 * 1000 * 24,
  'fresh': 1 * 3600 * 1000 * 24,
  'average': 2 * 3600 * 1000 * 24,
  'old': 5 * 3600 * 1000 * 24,
  'master': 20 * 3600 * 1000 * 24,
  'enlightened': 50 * 3600 * 1000 * 24,
  'burnt': 120 * 3600 * 1000 * 24,
}

class SpacedRepetition {
  constructor (date, state) {
    this.state = state || 'new';
    this.date = date;
  }


  nextDate (grade) {
    const getNextTime = () => {
      let time = defaultConfig[this.state] || 0;
       return time
    }

    if(grade == "good"){
        if (this.state === 'bad') {
          this.state = 'fresh'
        } else if (this.state == 'new'){
          this.state = 'fresh'
        } else if (this.state == 'fresh'){
          this.state = 'average'
        } else if (this.state === 'average') {
          this.state = 'old'
        } else if (this.state === 'old') {
          this.state = 'master'
        } else if (this.state === 'master') {
          this.state = 'enlightened'
        } else if (this.state === 'enlightened') {
          this.state = 'burnt'
         } else if (this.state === 'burnt') {
          this.state = 'burnt'
        } 
    }
    else {
        this.state = 'bad';
    }
    this.date = new Date().getTime() + getNextTime();
    //this.date = new Date('2022/02/07').getTime() + getNextTime();
    return this;
  }



  good(){
    return this.nextDate('good')
  }

  bad(){
    return this.nextDate('bad')
  }
}


