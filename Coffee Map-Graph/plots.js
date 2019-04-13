
// Create the Traces
var trace1 = {
  x: data.Coffee_Type,
  y: data.Price,
  mode: "markers",
  type: "scatter",
  name: "caffeine",
  marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: data.Coffee_Type,
  y: data.Caffeine_Level,
  mode: "markers",
  type: "scatter",
  name: "Price",
  marker: {
    color: "orange",
    symbol: "diamond-x"
  }
};


// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Coffees Around The World",
  xaxis: { title: "Price" },
  yaxis: { title: "Caffeine_Level" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
