const languageTitle = "Japanese"
const languageSub = "日本語"

// Speech Synthesis
const language = "ja-JP"
const activateSpeech = true

const languageContent = [
  {
    chartTitle: "Shirokuma SRS",
    chartName: "shirokuma-srs",
    chartData: "",
    title: "Shirokuma SRS",
    sub: "Memorize all words from Shirokuma Cafe",
    icon: "シロクマ",
    url: "shirokuma-srs",
    localStorageKey: "japanese",
    chartType: "",
  },

  /*
{
      "chartTitle": "Shirokuma / Episode 1 / Part 1 / Story",
      "chartName": "shirokuma-episode-1-part-1-story-map",
      "chartData": shirokumaEpisode1Part1StoryChartData,
      "title": "Shirokuma Episode 1 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 1 Part 1",
      "icon": "ペ",
      "url": "shirokuma-episode-1-part-1-story",
      "localStorageKey": "japanese" + "Episode1Part1" + "Story",
      "chartType": shirokumaEpisode1Part1StoryChartType
},
{
      "chartTitle": "Shirokuma / Episode 1 / Part 2 / Story",
      "chartName": "shirokuma-episode-1-part-2-story-map",
      "chartData": shirokumaEpisode1Part2StoryChartData,
      "title": "Shirokuma Episode 1 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 1 Part 2",
      "icon": "ペ",
      "url": "shirokuma-episode-1-part-2-story",
      "localStorageKey": "japanese" + "Episode1Part2" + "Story",
      "chartType": shirokumaEpisode1Part2StoryChartType
},
{
      "chartTitle": "Shirokuma / Episode 2 / Part 1 / Story",
      "chartName": "shirokuma-episode-2-part-1-story-map",
      "chartData": shirokumaEpisode2Part1StoryChartData,
      "title": "Shirokuma Episode 2 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 2 Part 1",
      "icon": "ペ",
      "url": "shirokuma-episode-2-part-1-story",
      "localStorageKey": "japanese" + "Episode2Part1" + "Story",
      "chartType": shirokumaEpisode2Part1StoryChartType
},
{
      "chartTitle": "Shirokuma / Episode 2 / Part 2 / Story",
      "chartName": "shirokuma-episode-2-part-2-story-map",
      "chartData": shirokumaEpisode2Part2StoryChartData,
      "title": "Shirokuma Episode 2 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 2 Part 2",
      "icon": "ペ",
      "url": "shirokuma-episode-2-part-2-story",
      "localStorageKey": "japanese" + "Episode2Part2" + "Story",
      "chartType": shirokumaEpisode2Part2StoryChartType
},
*/

  {
    chartTitle: "Shirokuma / Episode 3 / Story",
    //"chartName": "shirokuma-episode-3-story-map",
    //"chartData": shirokumaEpisode3StoryChartData,
    title: "Shirokuma Episode 3",
    sub: "Memorize all words from Shirokuma Episode 3",
    icon: "3話目",
    url: "shirokuma-episode-3-story",
    localStorageKey: "japanese" + "Episode3" + "Story",
    //"chartType": shirokumaEpisode3StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 4 / Story",
    //"chartName": "shirokuma-episode-4-story-map",
    //"chartData": shirokumaEpisode4StoryChartData,
    title: "Shirokuma Episode 4",
    sub: "Memorize all words from Shirokuma Episode 4",
    icon: "4話目",
    url: "shirokuma-episode-4-story",
    localStorageKey: "japanese" + "Episode4" + "Story",
    //"chartType": shirokumaEpisode4StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 5 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 5",
    sub: "Memorize all words from Shirokuma Episode 5",
    icon: "5話目",
    url: "shirokuma-episode-5-story",
    localStorageKey: "japanese" + "Episode5" + "Story",
    //"chartType": shirokumaEpisode5StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 6 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 6",
    sub: "Memorize all words from Shirokuma Episode 6",
    icon: "6話目",
    url: "shirokuma-episode-6-story",
    localStorageKey: "japanese" + "Episode6" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 7 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 7",
    sub: "Memorize all words from Shirokuma Episode 7",
    icon: "7話目",
    url: "shirokuma-episode-7-story",
    localStorageKey: "japanese" + "Episode7" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 8 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 8",
    sub: "Memorize all words from Shirokuma Episode 8",
    icon: "8話目",
    url: "shirokuma-episode-8-story",
    localStorageKey: "japanese" + "Episode8" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 9 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 9",
    sub: "Memorize all words from Shirokuma Episode 9",
    icon: "9話目",
    url: "shirokuma-episode-9-story",
    localStorageKey: "japanese" + "Episode9" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 10 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 10",
    sub: "Memorize all words from Shirokuma Episode 10",
    icon: "10話目",
    url: "shirokuma-episode-10-story",
    localStorageKey: "japanese" + "Episode10" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 11 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 11",
    sub: "Memorize all words from Shirokuma Episode 11",
    icon: "11話目",
    url: "shirokuma-episode-11-story",
    localStorageKey: "japanese" + "Episode11" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 12 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 12",
    sub: "Memorize all words from Shirokuma Episode 12",
    icon: "12話目",
    url: "shirokuma-episode-12-story",
    localStorageKey: "japanese" + "Episode12" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 13 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 13",
    sub: "Memorize all words from Shirokuma Episode 13",
    icon: "13話目",
    url: "shirokuma-episode-13-story",
    localStorageKey: "japanese" + "Episode13" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 14 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 14",
    sub: "Memorize all words from Shirokuma Episode 14",
    icon: "14話目",
    url: "shirokuma-episode-14-story",
    localStorageKey: "japanese" + "Episode14" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 15 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 15",
    sub: "Memorize all words from Shirokuma Episode 15",
    icon: "15話目",
    url: "shirokuma-episode-15-story",
    localStorageKey: "japanese" + "Episode15" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  {
    chartTitle: "Shirokuma / Episode 16 / Story",
    //"chartName": "shirokuma-episode-5-story-map",
    //"chartData": shirokumaEpisode5StoryChartData,
    title: "Shirokuma Episode 16",
    sub: "Memorize all words from Shirokuma Episode 16",
    icon: "16話目",
    url: "shirokuma-episode-16-story",
    localStorageKey: "japanese" + "Episode16" + "Story",
    //"chartType": shirokumaEpisode6StoryChartType
  },

  /*
{
      "chartTitle": "Shirokuma / Episode 1 / Part 1",
      "chartName": "shirokuma-episode-1-part-1-map",
      "chartData": shirokumaEpisode1Part1ChartData,
      "title": "Shirokuma Episode 1 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 1 Part 1",
      "icon": "ペ",
      "url": "shirokuma-episode-1-part-1",
      "localStorageKey": "japanese" + "Episode1Part1" + "Srs",
      "chartType": shirokumaEpisode1Part1ChartType
},
{
      "chartTitle": "Shirokuma / Episode 1 / Part 2",
      "chartName": "shirokuma-episode-1-part-2-map",
      "chartData": shirokumaEpisode1Part2ChartData,
      "title": "Shirokuma Episode 1 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 1 Part 2",
      "icon": "ペ",
      "url": "shirokuma-episode-1-part-2",
      "localStorageKey": "japanese" + "Episode1Part2" + "Srs",
      "chartType": shirokumaEpisode1Part2ChartType
}, 
{
      "chartTitle": "Shirokuma / Episode 19 / Part 1",
      "chartName": "shirokuma-episode-19-part-1-map",
      "chartData": shirokumaEpisode19Part1ChartData,
      "title": "Shirokuma Episode 19 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 19 Part 1",
      "icon": "に",
      "url": "shirokuma-episode-19-part-1",
      "localStorageKey": "japanese" + "Episode19Part1" + "Srs",
      "chartType": shirokumaEpisode19Part1ChartType
},
{
      "chartTitle": "Shirokuma / Episode 19 / Part 2",
      "chartName": "shirokuma-episode-19-part-2-map",
      "chartData": shirokumaEpisode19Part2ChartData,
      "title": "Shirokuma Episode 19 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 19 Part 2",
      "icon": "も",
      "url": "shirokuma-episode-19-part-2",
      "localStorageKey": "japanese" + "Episode19Part2" + "Srs",
      "chartType": shirokumaEpisode19Part2ChartType
},
{
      "chartTitle": "Shirokuma / Episode 20 / Part 1",
      "chartName": "shirokuma-episode-20-part-1-map",
      "chartData": shirokumaEpisode20Part1ChartData,
      "title": "Shirokuma Episode 20 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 20 Part 1",
      "icon": "ペ",
      "url": "shirokuma-episode-20-part-1",
      "localStorageKey": "japanese" + "Episode20Part1" + "Srs",
      "chartType": shirokumaEpisode20Part1ChartType
},
{
      "chartTitle": "Shirokuma / Episode 20 / Part 2",
      "chartName": "shirokuma-episode-20-part-2-map",
      "chartData": shirokumaEpisode20Part2ChartData,
      "title": "Shirokuma Episode 20 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 20 Part 2",
      "icon": "ぎ",
      "url": "shirokuma-episode-20-part-2",
      "localStorageKey": "japanese" + "Episode20Part2" + "Srs",
      "chartType": shirokumaEpisode20Part2ChartType
}, 
{
      "chartTitle": "Shirokuma / Episode 29 / Part 1",
      "chartName": "shirokuma-episode-29-part-1-map",
      "chartData": shirokumaEpisode29Part1ChartData,
      "title": "Shirokuma Episode 29 Part 1",
      "sub": "Memorize all words from Shirokuma Episode 29 Part 1",
      "icon": "ペ",
      "url": "shirokuma-episode-29-part-1",
      "localStorageKey": "japanese" + "Episode29Part1" + "Srs",
      "chartType": shirokumaEpisode29Part1ChartType
},
{
      "chartTitle": "Shirokuma / Episode 29 / Part 2",
      "chartName": "shirokuma-episode-29-part-2-map",
      "chartData": shirokumaEpisode29Part2ChartData,
      "title": "Shirokuma Episode 29 Part 2",
      "sub": "Memorize all words from Shirokuma Episode 29 Part 2",
      "icon": "ペ",
      "url": "shirokuma-episode-29-part-2",
      "localStorageKey": "japanese" + "Episode29Part2" + "Srs",
      "chartType": shirokumaEpisode29Part2ChartType
},
*/
]
