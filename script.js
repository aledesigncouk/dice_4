var width = 800,
    height = 800;

var trows = 1000;

var data = dataGenerator(trows);

var svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// X axis start from 0 to n flips
var xMax = d3.max([d3.max(data, function (d) {
    return d.x;
})]);
var xMin = d3.min([d3.min(data, function (d) {
    return d.x;
})]);

// Y axis start from lowest toss value to highest 
var yMax = d3.max([d3.max(data, function (d) {
    return d.y;
})]);
var yMin = d3.min([d3.min(data, function (d) {
    return d.y;
})]);

var xscale = d3.scaleLinear()
    .domain([xMin, xMax])
    .range([0, width]);

var yscale = d3.scaleLinear()
    .domain([yMax, yMin])
    .range([0, height]);

var x_axis = d3.axisBottom()
    .scale(xscale);

var y_axis = d3.axisLeft()
    .scale(yscale);

svg.append("g")
    .attr("transform", "translate(" + xscale(0) + ",0)")
    .call(y_axis);

// X axes need to stick to 0 Y axis point
svg.append("g")
    .attr("transform", "translate(0, " + yscale(0) + ")") // set the xAxis to Y 0 dinamically
    .call(x_axis);

// import data
svg.selectAll("circle")
    .attr("class", "points")
    .data(data)
    .enter().append("circle")
    .attr("cx", function (d) {
        return xscale(d.x);
    })
    .attr("cy", function (d) {
        return yscale(d.y);
    })
    .attr("r", 1);

var line = d3.line()
    .x(function (d) {
        return xscale(d.x);
    })
    .y(function (d) {
        return yscale(d.y);
    });

// Add the valueline path.
svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

// data generator
function dataGenerator(n) {
    var graph = []; // main array
    var i = 0;
    var y = 0;
    var x = 0;

    while (i < n) {

        switch (Math.floor(Math.random() * 4)) {
            case 0: // 1 y++

                var point = new Object();
                point.x = x;
                point.y = y += 1;
                graph.push(point);

                break;

            case 1: // 2 y--

                var point = new Object();
                point.x = x;
                point.y = y -= 1;
                graph.push(point);

                break;

            case 2: // 3 x--

                var point = new Object();
                point.x = x -= 1;
                point.y = y;
                graph.push(point);

                break;

            case 3: // 4 x++

                var point = new Object();
                point.x = x += 1;
                point.y = y;
                graph.push(point);

                break;
        }
        i++;
    }
    return graph;
}