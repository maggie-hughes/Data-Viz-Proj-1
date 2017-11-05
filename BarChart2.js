var svg = d3.select("body").select("#svg_BarChart2");
var data = [
  {id: "Time", date: "June 12", shares: 130},
  {id: "Clashdaily", date: "June 12", shares: 119},
  {id: "Youtube", date: "June 12", shares: 86},
  {id: "PoliticusUSA", date: "June 12", shares: 76},
  {id: "Time", date: "June 12", shares: 68},
  {id: "OccupyDemocrats", date: "June 12", shares: 66},
  {id: "USAToday", date: "June 12", shares: 63},
  {id: "ZeroHedge", date: "June 12", shares: 56},
  {id: "AmericanThinker", date: "June 12", shares: 55},
  {id: "Youtube", date: "June 13", shares: 68},
  {id: "NewYorkTimes", date: "June 13", shares: 59},
  {id: "PJMedia", date: "June 13", shares: 57},
  {id: "WashingtonPost", date: "June 13", shares: 53},
  {id: "NewYorkTimes", date: "June 13", shares: 53},
  {id: "Breitbart", date: "June 13", shares: 44},
  {id: "People", date: "June 13", shares: 29},
  {id: "TheAtlantic", date: "June 13", shares: 28},
  {id: "Twitter", date: "June 13", shares: 25},
  {id: "CNN", date: "June 13", shares: 25},
  {id: "Youtube", date: "June 14", shares: 65},
  {id: "FoxNews", date: "June 14", shares: 31},
  {id: "TheHill", date: "June 14", shares: 24},
  {id: "PJMedia", date: "June 14", shares: 24},
  {id: "NewYorkTimes", date: "June 14", shares: 22},
  {id: "TheAtlantic", date: "June 14", shares: 17},
  {id: "HuffingtonPost", date: "June 14", shares: 17},
  {id: "CBS", date: "June 14", shares: 16},
  {id: "CNN", date: "June 14", shares: 16},
  {id: "WashingtonPost", date: "June 14", shares: 13}
  
  
];
var visualization = d3plus.viz()
  .container("#svg_BarChart2")
  .data(data)
  .type("bar")
  .id("id")
  .x("date")
  .y("shares")
  .draw();
