
console.log("Sector revenues loaded.")
revenues_dataset = {
    "children": [{"Name":"Aerospace &  Defense","Count":352746},
        {"Name":"Apparel","Count":68796},
        {"Name":"Business Services","Count":209373},
        {"Name":"Chemicals","Count":195173},
        {"Name":"Energy","Count":1398194},
        {"Name":"Engineering & Construction","Count":127634},
        {"Name":"Financials","Count":2232306},
        {"Name":"Food & Drug Stores","Count":384245},
        {"Name":"Food, Beverages, & Tobacco","Count":464579},
        {"Name":"Healthcare","Count":1412704},
        {"Name":"Hotels, Restaurants, & Leisure","Count":133216},
        {"Name":"Household Products","Count":182367},
        {"Name":"Industrials","Count":428066},
        {"Name":"Materials","Count":188096},
        {"Name":"Media","Count":188942},
        {"Name":"Motor Vehicles & Parts","Count":411868},
        {"Name":"Retailing","Count":1583643},
        {"Name":"Technology","Count":1173955.1},
        {"Name":"Telecmmunications","Count":459715},
        {"Name":"Transportation","Count":389539},
        {"Name":"Wholesalers","Count":829333}
    ]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(revenues_dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#svg-area-2")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(revenues_dataset)
    .sum(function(d) { return d.Count; });

var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function(d){
        return  !d.children
    })
    .append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

node.append("title")
    .text(function(d) {
        return d.Name + ": " + d.Count;
    });

node.append("circle")
    .attr("r", function(d) {
        return d.r;
    })
    .style("fill", function(d,i) {
        return color(i);
    });

node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Name.substring(0, d.r / 3);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Count;
    })
    .attr("font-family",  "Gill Sans", "Gill Sans MT")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

d3.select(self.frameElement)
    .style("height", diameter + "px");

