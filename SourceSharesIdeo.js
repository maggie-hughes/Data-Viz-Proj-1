var svg = d3.select("body").select("#svg_SourceSharesIdeo");
var data = [
      
  
      {ideology: "blue", date: "June 12, 2016", shares:	130},
      {ideology: "red", date: "June 12, 2016", shares:	119},
      {ideology: "grey", date: "June 12, 2016", shares:	86},
      {ideology:	"red", date: "June 12, 2016", shares:	76},
      {ideology:	"blue", date: "June 12, 2016", shares:	68},
      {ideology:	"blue", date: "June 12, 2016", shares:	66},
      {ideology:	"purple", date: "June 12, 2016", shares:	63},
      {ideology:	"red", date: "June 12, 2016", shares:	56},
      {ideology:	"red", date: "June 12, 2016", shares:	55},
      {ideology:	"grey", date: "June 13, 2016", shares:	68},
      {ideology:	"blue", date: "June 13, 2016", shares:	59},
      {ideology:	"red", date: "June 13, 2016", shares:	57},
      {ideology:	"blue", date: "June 13, 2016", shares:	53},
      {ideology:	"blue", date: "June 13, 2016", shares:	53},
      {ideology:	"red", date: "June 13, 2016", shares:	44},
      {ideology:	"purple", date: "June 13, 2016", shares:	29},
      {ideology:	"blue", date: "June 13, 2016", shares:	28},
      {ideology:	"grey", date: "June 14, 2016", shares:	65},
      {ideology:	"red", date: "June 14, 2016", shares:	31},
      {ideology:	"blue", date: "June 14, 2016", shares:	24},
      {ideology:	"red", date: "June 14, 2016", shares:	24},
      {ideology:	"blue", date: "June 14, 2016", shares:	22},
      {ideology:	"blue", date: "June 14, 2016", shares:	17},
      {ideology:	"blue", date: "June 14, 2016", shares:	17},
      {ideology:	"purple", date: "June 14, 2016", shares:	16},
      {ideology:	"purple", date: "June 14, 2016", shares:	16},
      {ideology:	"red", date: "June 14, 2016", shares:	13},
      {ideology:	"grey", date: "June 15, 2016", shares:	10},
      {ideology:	"blue", date: "June 15, 2016", shares:	98},
      {ideology:	"blue", date: "June 15, 2016", shares:	75},
      {ideology:	"blue", date: "June 15, 2016", shares:	75},
      {ideology:	"blue", date: "June 15, 2016", shares:	59},
      {ideology:	"blue", date: "June 15, 2016", shares:	42},
      {ideology:	"blue", date: "June 15, 2016", shares:	35},
      {ideology:	"blue", date: "June 15, 2016", shares:	29},
      {ideology:	"purple", date: "June 15, 2016", shares:	23},
      {ideology:	"blue", date: "June 15, 2016", shares:	22},
      {ideology:	"grey", date: "June 16, 2016", shares:	77},
      {ideology:	"blue", date: "June 16, 2016", shares:	57},
      {ideology:	"red", date: "June 16, 2016", shares:	33},
      {ideology:	"purple", date: "June 16, 2016", shares:	28},
      {ideology:	"blue", date: "June 16, 2016", shares:	21},
      {ideology: "blue", date: "June 16, 2016", shares:	20},
      {ideology: "red", date: "June 16, 2016", shares:	20},
      {ideology: "blue", date: "June 16, 2016", shares:	20},
      {ideology: "red", date: "June 16, 2016", shares:	17},
      {ideology: "blue", date: "June 16, 2016", shares:	18},
      {ideology: "blue", date: "June 17, 2016", shares:	97},
      {ideology: "grey", date: "June 17, 2016", shares:	78},
      {ideology: "red", date: "June 17, 2016", shares:	36},
      {ideology: "red", date: "June 17, 2016", shares:	35},
      {ideology: "purple", date: "June 17, 2016", shares:	21},
      {ideology: "red", date: "June 17, 2016", shares:	20},
      {ideology: "blue", date: "June 17, 2016", shares:	18},
      {ideology: "purple", date: "June 17, 2016", shares:	16},
      {ideology:	"blue", date: "June 17, 2016", shares:	14},
      {ideology: "red", date: "June 17, 2016", shares:	14},
      {ideology:	"grey", date: "June 18, 2016", shares:	61},
      {ideology: "purple", date: "June 18, 2016", shares:	41},
      {ideology: "blue", date: "June 18, 2016", shares:	21},
      {ideology: "purple", date: "June 18, 2016", shares:	20},
      {ideology:	"blue", date: "June 18, 2016", shares:	19},
      {ideology:	"red", date: "June 18, 2016", shares:	18},
      {ideology:	"blue", date: "June 18, 2016", shares:	17},
      {ideology:	"red", date: "June 18, 2016", shares:	15},
      {ideology:	"red", date: "June 18, 2016", shares:	12},
      {ideology:	"red", date: "June 18, 2016", shares:	11},
      {ideology:	"red", date: "June 19, 2016", shares:	87},
      {ideology:	"grey", date: "June 19, 2016", shares:	44},
      {ideology:	"red", date: "June 19, 2016", shares:	17},
      {ideology:	"red", date: "June 19, 2016", shares:	16},
      {ideology:	"purple", date: "June 19, 2016", shares:	15},
      {ideology:	"red", date: "June 19, 2016", shares:	13},
      {ideology:	"blue", date: "June 19, 2016", shares:	12},
      {ideology:	"purple", date: "June 19, 2016", shares:	10},
      {ideology: "blue", date: "June 19, 2016", shares:	9},
      {ideology: "red", date: "June 19, 2016", shares:	8},
      {ideology:	"grey", date: "June 20, 2016", shares:	41},
      {ideology:	"purple", date: "June 20, 2016", shares:	33},
      {ideology:	"red", date: "June 20, 2016", shares:	17},
      {ideology:	"purple", date: "June 20, 2016", shares:	14},
      {ideology:	"red", date: "June 20, 2016", shares:	12},
      {ideology:	"red", date: "June 20, 2016", shares:	12},
      {ideology:	"blue", date: "June 20, 2016", shares:	12},
      {ideology:	"blue", date: "June 20, 2016", shares:	11},
      {ideology:	"blue", date: "June 20, 2016", shares:	11},
      {ideology:	"red", date: "June 20, 2016", shares:	10},
      {ideology:	"red", date: "June 21, 2016", shares:	68},
      {ideology:	"purple", date: "June 21, 2016", shares:	48},
      {ideology:	"grey", date: "June 21, 2016", shares:	23},
      {ideology:	"red", date: "June 21, 2016", shares:	23},
      {ideology:	"blue", date: "June 21, 2016", shares:	20},
      {ideology:	"blue", date: "June 21, 2016", shares:	13},
      {ideology:	"purple", date: "June 21, 2016", shares:	12},
      {ideology:	"blue", date: "June 21, 2016", shares:	11},
      {ideology:	"red", date: "June 21, 2016", shares:	11},
      {ideology: "purple", date: "June 21, 2016", shares:	9},
      {ideology:	"red", date: "June 22, 2016", shares:	74},
      {ideology:	"red", date: "June 22, 2016", shares:	34},
      {ideology:	"purple", date: "June 22, 2016", shares:	21},
      {ideology:	"grey", date: "June 22, 2016", shares:	18},
      {ideology:	"red", date: "June 22, 2016", shares:	18},
      {ideology: "red", date: "June 22, 2016", shares:	9},
      {ideology: "red", date: "June 22, 2016", shares:	8},
      {ideology: "red", date: "June 22, 2016", shares:	8},
      {ideology: "purple", date: "June 22, 2016", shares:	7},
      {ideology:	"red", date: "June 23, 2016", shares:	42},
      {ideology:	"red", date: "June 23, 2016", shares:	23},
      {ideology:	"blue", date: "June 23, 2016", shares:	19},
      {ideology:	"red", date: "June 23, 2016", shares:	16},
      {ideology:	"grey", date: "June 23, 2016", shares:	12},
      {ideology:	"red", date: "June 23, 2016", shares:	12},
      {ideology:	"blue", date: "June 23, 2016", shares:	11},
      {ideology: "red", date: "June 23, 2016", shares:	7},
      {ideology: "red", date: "June 23, 2016", shares:	6},
      {ideology: "red", date: "June 24, 2016", shares:	36},
      {ideology: "grey", date: "June 24, 2016", shares:	9},
      {ideology: "blue", date: "June 24, 2016", shares:	6},
      {ideology: "purple", date: "June 24, 2016", shares:	4},
      {ideology: "grey", date: "June 25, 2016", shares:	7},
      {ideology: "red", date: "June 25, 2016", shares:	7},
      {ideology: "blue", date: "June 25, 2016", shares:	5},
      {ideology: "red", date: "June 25, 2016", shares:	5},
      {ideology:	"red", date: "June 26, 2016", shares:	20},
      {ideology: "blue", date: "June 26, 2016", shares:	8},
      {ideology: "grey", date: "June 26, 2016", shares:	6},
      {ideology:	"red", date: "June 27, 2016", shares:	46},
      {ideology: "grey", date: "June 27, 2016", shares:	8},
      {ideology:	"red", date: "June 28, 2016", shares:	23},
      {ideology:	"red", date: "June 28, 2016", shares:	21},
      {ideology: "purple", date: "June 28, 2016", shares:	9},
      {ideology: "purple", date: "June 28, 2016", shares:	9},
      {ideology: "red", date: "June 28, 2016", shares:	7},
      {ideology: "red", date: "June 28, 2016", shares:	7},
      {ideology: "grey", date: "June 28, 2016", shares:	6},
      {ideology: "blue", date: "June 28, 2016", shares:	6},
      {ideology: "blue", date: "June 28, 2016", shares:	5},
      {ideology:	"blue", date: "June 29, 2016", shares:	15},
      {ideology:	"red", date: "June 29, 2016", shares:	14},
      {ideology:	"red", date: "June 29, 2016", shares:	14},
      {ideology:	"purple", date: "June 29, 2016", shares:	11},
      {ideology: "grey", date: "June 29, 2016", shares:	8},
      {ideology: "red", date: "June 29, 2016", shares:	8},
      {ideology: "red", date: "June 29, 2016", shares:	8},
      {ideology: "blue", date: "June 29, 2016", shares:	7},
      {ideology: "red", date: "June 29, 2016", shares:	6},
      {ideology: "blue", date: "June 29, 2016", shares:	5}

  
  ];
var visualization = d3plus.viz()
  .container("#svg_SourceSharesIdeo")
  .data(data)
  .type("bar")
  .id("ideology")
  .x("date")
  .y("shares")
  .draw();
