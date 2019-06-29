console.log("Sector Profitrs loaded.")
profits_dataset = {
    "children": [{"Name":"Aerospace &  Defense","Count":24703},
        {"Name":"Apparel","Count":5355.3},
        {"Name":"Business Services","Count":27725.6},
        {"Name":"Chemicals","Count":18194.4},
        {"Name":"Energy","Count":84875.7},
        {"Name":"Engineering & Construction","Count":5454},
        {"Name":"Financials","Count":228481.3},
        {"Name":"Food & Drug Stores","Count":8557.7},
        {"Name":"Food, Beverages, & Tobacco","Count":51335.6},
        {"Name":"Healthcare","Count":88045.6},
        {"Name":"Hotels, Restaurants, & Leisure","Count":19314.6},
        {"Name":"Household Products","Count":26763.2},
        {"Name":"Industrials","Count":13539.6},
        {"Name":"Materials","Count":10106.4},
        {"Name":"Media","Count":18944.2},
        {"Name":"Motor Vehicles & Parts","Count":5332.4},
        {"Name":"Retailing","Count":53591.8},
        {"Name":"Technology","Count":162730.3},
        {"Name":"Telecmmunications","Count":91727.1},
        {"Name":"Transportation","Count":46295.6},
        {"Name":"Wholesalers","Count":13727.2}
    ]
};

var diameter = 600;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(profits_dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#svg-area-1")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

var nodes = d3.hierarchy(profits_dataset)
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

node.style.border = "thick solid #0000FF";

d3.select(self.frameElement)
    .style("height", diameter + "px");

