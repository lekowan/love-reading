//localStorage.clear();

class Model {

    constructor() {


    } // End of constructor ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
   

    // Chart Popover
    showChart(boolean, chart) {
        console.log(boolean, chart);
        let chartData, chartTitle, chartType, chartLocalStorageKey;

        languageContent.forEach(item => {
            if(item.chartName == chart){
                chartData = item.chartData 
                chartTitle = item.chartTitle;
                chartType = item.chartType;
                chartLocalStorageKey = item.localStorageKey;
            }
        })

        this.onShowChartChanged(boolean, chartData,chartTitle,chartType, chartLocalStorageKey);
    }

    bindOnShowChartChanged(callback) {
        this.onShowChartChanged = callback;
    }


    // New settings Popover
    showNewItemsPopover(boolean, localStorageKey) {
        
        languageContent.forEach(item => {
            if(item.localStorageKey == localStorageKey){
                console.log(localStorageKey);
            }
        })

        this.onShowNewSettingsChanged(boolean);
    }

    bindOnShowNewSettingsChanged(callback) {
        this.onShowNewSettingsChanged = callback;
    }

    changeNumber(number, localStorageKey) {
        
        console.log(number);
        console.log(localStorageKey);

        // Fetch number from localStorage
        let _number = JSON.parse(localStorage.getItem(localStorageKey + "Number"));
        let _progress = JSON.parse(localStorage.getItem(localStorageKey + "Progress"));

        console.log(number);
        console.log(_number);

        localStorage.setItem(localStorageKey + "Number", JSON.stringify(number));

        console.log(_number);

        /*
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
    */

    }

    bindOnNumberChanged(callback) {
        this.onNumberChanged = callback;
    }


}