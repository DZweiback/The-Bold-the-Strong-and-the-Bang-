
// Create the Traces
var trace1 = {
  x: data.year,
  y: data.Caffeine_Level,
  mode: "markers",
  type: "scatter",
  name: "caffeine",
  marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: data.year,
  y: data.Price,
  mode: "markers",
  type: "scatter",
  name: "Price",
  marker: {
    color: "orange",
    symbol: "diamond-x"
  }
};

var trace3 = {
  x: data.Year,
  y: data,Bean_Type,
  mode: "markers",
  type: "scatter",
  name: "Bean Type",
  marker: {
    color: "rgba(156, 165, 196, 1.0)",
    symbol: "cross"
  }
};

// Create the data array for the plot
var data = [trace1, trace2, trace3];

// Define the plot layout
var layout = {
  title: "Coffees Around The World",
  xaxis: { title: "Price" },
  yaxis: { title: "Caffeine_Level" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);
