var svg = d3.select("body").select("#svg_BarChart2");
var data = [
  {id: "Time", date: "June 12", number of shares: 130},
  {id: "Clashdaily", date: "June 12", number of shares: 119},
  {id: "Youtube", date: "June 12", number of shares: 86},
  {id: "PoliticusUSA", date: "June 12", number of shares: 76},
  {id: "Time", date: "June 12", number of shares: 68},
  {id: "OccupyDemocrats", date: "June 12", number of shares: 66},
  {id: "USAToday", date: "June 12", number of shares: 63},
  {id: "ZeroHedge", date: "June 12", number of shares: 56},
  {id: "AmericanThinker", date: "June 12", number of shares: 55}
  
  
];
var visualization = d3plus.viz()
  .container("#svg_BarChart2")
  .data(data)
  .type("bar")
  .id("id")
  .x("date")
  .y("number of shares")
  .draw();
