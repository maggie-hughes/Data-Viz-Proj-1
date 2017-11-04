var svg = d3.select("body").select("#svg_BarChart2");
var data = [
  {id: "Las Vegas", topic: "Politics", conversation: 0.69},
  {id: "Las Vegas",  topic: "Weapon", conversation: 0.69},
  {id: "Las Vegas", topic: "Rights", conversation: 0.72},
  {id: "Las Vegas", topic: "Demographic", conversation: 0.37},
  {id: "Las Vegas", topic: "Terror", conversation: 0.16},
  {id: "Las Vegas", topic: "Mental", conversation: 0.10},
  {id: "Orlando", topic: "Politics", conversation: 0.44},
  {id: "Orlando", topic: "Weapon", conversation: 0.42},
  {id: "Orlando", topic: "Rights", conversation: 0.32},
  {id: "Orlando", topic: "Demographic", conversation: 0.65},
  {id: "Orlando",  topic: "Terror", conversation: 0.68},
  {id: "Orlando",  topic: "Mental", conversation: 0.08},
  {id: "San Bernardino",  topic: "Politics", conversation: 0.5},
  {id: "San Bernardino",  topic: "Weapon", conversation: 0.42},
  {id: "San Bernardino", topic: "Rights", conversation: 0.28},
  {id: "San Bernardino", topic: "Demographic", conversation: 0.42},
  {id: "San Bernardino", topic: "Terror", conversation: 0.66},
  {id: "San Bernardino", topic: "Mental", conversation: 0.08},
  {id: "Charleston", topic: "Politics", conversation: 0.45},
  {id: "Charleston", topic: "Weapon", conversation: 0.47},
  {id: "Charleston", topic: "Rights", conversation: 0.25},
  {id: "Charleston", topic: "Demographic", conversation: 0.8},
  {id: "Charleston",  topic: "Terror", conversation: 0.27},
  {id: "Charleston",  topic: "Mental", conversation: 0.10}
];
var visualization = d3plus.viz()
  .container("#svg_BarChart2")
  .data(data)
  .type("bar")
  .stacked(true)
  .id("id")
  .x("topic")
  .y("conversation")
  .draw();
