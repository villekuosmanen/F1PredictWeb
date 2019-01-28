angular
    .module('barChart')
    .component("barChart", {
        templateUrl: 'bar-chart/bar-chart.template.html',
        controller: function BarChartController($http) {
            this.$onInit = setUpChart;
        }
    });

var dataLength = 20;
var margin = { top: 10, right: 20, bottom: 40, left: 30, xAxis: 0};
var width = window.innerWidth * 0.48;
var barHeight = 26;
var height = (barHeight + 3.6) * dataLength;

var x = d3.scaleLinear()
    .domain([0, 100])        // 100%
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0, 20])
    .range([0, height]);

function setUpChart() {
    var data = new Array(dataLength).fill(0);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    var chart = d3.select(".barChart")
        .attr("width", '100%')
        .attr("height", height + margin.xAxis + margin.top + margin.bottom)
        .attr('viewBox','0 0 '+ width + ' ' + (height +  margin.top + margin.bottom + margin.xAxis))
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height + margin.xAxis) + ")")
        .call(xAxis);
    chart.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    // Setup the tool tip.  Note that this is just one example, and that many styling options are available.
    // See original documentation for more details on styling: http://labratrevenge.com/d3-tip/
    var tool_tip = d3.tip()
        .attr("class", "d3-tip")
        .direction('e')
        .offset([0, 8])
        .html(function (d, i) { return (i+1) + ": " + d + " %"; });
    chart.call(tool_tip);

    chart.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("stroke-width", 1)
        .attr("stroke", "#222222")
        .attr("class", "bar")
        .attr("x", function (d) { 0; })     //HACK!
        .attr("y", function (d, i) { return y(i); })
        .attr("height", barHeight)
        .attr("width", function (d) {
            var _width = x(d);
            console.log("d: " + d + ", width: " + _width);
            return _width;
        })
        .on('mouseover', tool_tip.show)
        .on('mouseout', tool_tip.hide);
}

//Predictions: {position: promilles}
function changeData(driver) {
    //Copied from above...
    var newData = new Array(dataLength).fill(0);   //Create base data

    //console.log("changeData called");
    for (var pos in driver.predictions) {
        newData[parseInt(pos)] = driver.predictions[pos] / 10.0;
    }

    var chart = d3.select(".barChart")
        .selectAll(".bar")
        .data(newData)
        .attr("fill", driver.color)
        .attr("x", function (d) { 0; })     //HACK!
        .attr("y", function (d, i) { return y(i); }) 
        .transition()   //Transitions
        .duration(800)  //time in ms
        .attr("width", function (d) {
            var _width = x(d);
            console.log("d: " + d + ", width: " + _width);
            return _width;
        })
}