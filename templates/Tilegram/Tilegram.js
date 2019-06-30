var stateCodesWithNames = [
    {
      state : 'Alabama',
      code : 'AL',
      color: '#1f77b4'
    },
    {
      state : 'Alaska',
      code : 'AK',
      color: '#aec7e8'
    },
    {
      state : 'American Samoa',
      code : 'AS',
      color: '#1f77b4'
    },
    {
      state : 'Arizona',
      code : 'AZ',
      color: '#ff7f0e'
    },
    {
      state : 'Arkansas',
      code : 'AR',
      color: '#ffbb78'
    },
    {
      state : 'California',
      code : 'CA',
      color: '#2ca02c'
    },
    {
      state : 'Colorado',
      code : 'CO',
      color: '#98df8a'
    },
    {
      state : 'Connecticut',
      code : 'CT',
      color: '#c5b0d5'
    },
    {
      state : 'Delaware',
      code : 'DE',
      color: '#ff9896'
    },
    {
      state : 'Dist. of Columbia',
      code : 'DC',
      color: '#9467bd'
    },
    {
      state : 'Florida',
      code : 'FL',
      color: '#c5b0d5'
    },
    {
      state : 'Georgia',
      code : 'GA',
      color: '#8c564b'
    },
    {
      state : 'Guam',
      code : 'GU',
      color: '#1f77b4'
    },
    {
      state : 'Hawaii',
      code : 'HI',
      color: '#c49c94'
    },
    {
      state : 'Idaho',
      code : 'ID',
      color: '#e377c2'
    },
    {
      state : 'Illinois',
      code : 'IL',
      color: '#f7b6d2'
    },
    {
      state : 'Indiana',
      code : 'IN',
      color: '#7f7f7f'
    },
    {
      state : 'Iowa',
      code : 'IA',
      color: '#c7c7c7'
    },
    {
      state : 'Kansas',
      code : 'KS',
      color: '#bcbd22'
    },
    {
      state : 'Kentucky',
      code : 'KY',
      color: '#dbdb8d'
    },
    {
      state : 'Louisiana',
      code : 'LA',
      color: '#17becf'
    },
    {
      state : 'Maine',
      code : 'ME',
      color: '#9edae5'
    },
    {
      state : 'Maryland',
      code : 'MD',
      color: '#393b79'
    },
    {
      state : 'Marshall Islands',
      code : 'MH',
      color: '#1f77b4'
    },
    {
      state : 'Massachusetts',
      code : 'MA',
      color: '#5254a3'
    },
    {
      state : 'Michigan',
      code : 'MI',
      color: '#6b6ecf'
    },
    {
      state : 'Micronesia',
      code : 'FM',
      color: '#1f77b4'
    },
    {
      state : 'Minnesota',
      code : 'MN',
      color: '#9c9ede'
    },
    {
      state : 'Mississippi',
      code : 'MS',
      color: '#637939'
    },
    {
      state : 'Missouri',
      code : 'MO',
      color: '#8ca252'
    },
    {
      state : 'Montana',
      code : 'MT',
      color: '#b5cf6b'
    },
    {
      state : 'Nebraska',
      code : 'NE',
      color: '#cedb9c'
    },
    {
      state : 'Nevada',
      code : 'NV',
      color: '#8c6d31'
    },
    {
      state : 'New Hampshire',
      code : 'NH',
      color: '#bd9e39'
    },
    {
      state : 'New Jersey',
      code : 'NJ',
      color: '#e7ba52'
    },
    {
      state : 'New Mexico',
      code : 'NM',
      color: '#e7cb94'
    },
    {
      state : 'New York',
      code : 'NY',
      color: '#843c39'
    },
    {
      state : 'North Carolina',
      code : 'NC',
      color: '#ad494a'
    },
    {
      state : 'North Dakota',
      code : 'ND',
      color: '#d6616b'
    },
    {
      state : 'Northern Marianas',
      code : 'MP',
      color: '#1f77b4'
    },
    {
      state : 'Ohio',
      code : 'OH',
      color: '#e7969c'
    },
    {
      state : 'Oklahoma',
      code : 'OK',
      color: '#7b4173'
    },
    {
      state : 'Oregon',
      code : 'OR',
      color: '#a55194'
    },
    {
      state : 'Palau',
      code : 'PW',
      color: '#1f77b4'
    },
    {
      state : 'Pennsylvania',
      code : 'PA',
      color: '#ce6dbd'
    },
    {
      state : 'Puerto Rico',
      code : 'PR',
      color: '#1f77b4'
    },
    {
      state : 'Rhode Island',
      code : 'RI',
      color: '#de9ed6'
    },
    {
      state : 'South Carolina',
      code : 'SC',
      color: '#3182bd'
    },
    {
      state : 'South Dakota',
      code : 'SD',
      color: '#6baed6'
    },
    {
      state : 'Tennessee',
      code : 'TN',
      color: '#9ecae1'
    },
    {
      state : 'Texas',
      code : 'TX',
      color: '#c6dbef'
    },
    {
      state : 'Utah',
      code : 'UT',
      color: '#e6550d'
    },
    {
      state : 'Vermont',
      code : 'VT',
      color: '#fd8d3c'
    },
    {
      state : 'Virginia',
      code : 'VA',
      color: '#fdae6b'
    },
    {
      state : 'Virgin Islands',
      code : 'VI',
      color: '#1f77b4'
    },
    {
      state : 'Washington',
      code : 'WA',
      color: '#fdd0a2'
    },
    {
      state : 'West Virginia',
      code : 'WV',
      color: '#31a354'
    },
    {
      state : 'Wisconsin',
      code : 'WI',
      color: '#74c476'
    },
    {
      state : 'Wyoming',
      code : 'WY',
      color: '#a1d99b'
    }
];


function loadTilegram(tilejson){
   
    var stateCodesWithNames = window.stateCodesWithNames;
    var topojson = window.topojson;
    var d3 = window.d3;
    var _ = window._;
    // var data = generateData();

    // function generateData() {
    //     var states = ['DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'AK', 'CA', 'CO', 'AZ', 'AR', 'AL', 'CT'];

    //     function dataArray() {
    //         var data = [];
    //         _.times(states.length, function (n) {
    //             data.push({
    //                 code: states[n],
    //                 value: _.random(1, 98.5)
    //             });
    //         });
    //         return data;
    //     }

    //     return dataArray();
    // }

    var f = d3.format('.1f');

  // var WIDTH = 1600

// var img = document.createElement('tiles');
// img.src = 'img/eqp/' + this.apparel + '/' + this.facing + '_idle.png';
// document.getElementById('gamediv').appendChild(img)

// d3.text(svgName, (e, data) => {
//   //var div = d3.select(document.body).append('div').html(data)
//   var div = d3.select('#tiles').html(data)
//   var svg = div.select('svg')
//   var groups = svg.selectAll('g')

//   // Scale SVG
//   var importedWidth = parseInt(svg.attr('width'))
//   var importedHeight = parseInt(svg.attr('height'))
//   var scale = WIDTH / importedWidth
//   svg
//     .attr('width', importedWidth * scale)
//     .attr('height', importedHeight * scale)
//   groups.attr('transform', 'scale(' + scale + ')')

//   // Apply handlers
//   groups.on('click', (e) => {
//     console.log('Clicked', d3.event.target.parentNode.id)
//   })
// })

// }

var WIDTH = 2300
var HEIGHT = 1200

// build list of state codes
        var stateCodes = [];
        // build list of state names
        var stateNames = [];
        // build a list of colour values
        var colorValues = [];

d3.select("#svgarea").selectAll("*").remove()
var svg = d3.select('body').select('#svgarea')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)

d3.json(tilejson, function showData(error, tilegram) {
  var tiles = topojson.feature(tilegram, tilegram.objects.tiles)

  var transform = d3.geoTransform({
    point: function(x, y) {
      this.stream.point(x, -y)
    }
  })

  var path = d3.geoPath().projection(transform)

  var g = svg.append('g')
    .attr('transform', 'translate(0,' + HEIGHT + ')')

  // g.selectAll('.tiles')
  //   .data(tiles.features)
  //   .enter().append('path')
  //   .attr('d', path)
  //   .attr('fill', 'lightgray')

        tilegram.objects.tiles.geometries.forEach(function (geometry) {
            if (stateCodes.indexOf(geometry.properties.state) === -1) {
                stateCodes.push(geometry.properties.state);
                //alert(geometry.properties.state)
                // pass in state names
                stateNames.push(_.find(stateCodesWithNames, { 'code': geometry.properties.state }).state);
                // pass in colour values
                //colorValues.push(geometry.properties.tilegramValue);
                colorValues.push(_.find(stateCodesWithNames, { 'code': geometry.properties.state }).color);
            }
        });

        console.log('stateCodes', stateCodes);
        console.log('stateNames', stateNames);
        console.log('colorValues', colorValues);

        //var linear = d3.scaleLinear().domain([0, _.mean(colorValues), d3.max(colorValues)]).range(['#FDBB30', '#F47521', '#EE3124']);

        // var borders = g.selectAll('.tiles').data(tiles.features).enter().append('path').attr('d', path).attr('fill', function (d, i) {
        //     return linear(colorValues[i]);
        // }).attr('stroke', 'none').attr('stroke-width', 4);
        var borders = g.selectAll('.tiles').data(tiles.features).enter().append('path').attr('d', path).attr('fill', function (d, i) {return colorValues[i]}).attr('stroke', 'none').attr('stroke-width', 4);

        borders.on('click', function (d, i) {
            console.log('d', d);
            console.log('stateCodes[i]', stateCodes[i]);
            console.log('stateNames[i]', stateNames[i]);
            console.log('colorValues[i]', colorValues[i]);
        });

        borders.on('mouseover', function (d, i) {
            d3.select('#state').text(stateNames[i] + ' : ' + f(colorValues[i]));
        });

        // add some labels
        g.selectAll('.state-label').data(tiles.features).enter().append('text').attr('class', function (d) {
            return 'state-label state-label-' + d.id;
        }).attr('transform', function (d) {
            return 'translate(' + path.centroid(d) + ')';
        }).attr('dy', '.35em')
        // .attr('dx', '10px')
        .text(function (d) {
            return d.properties.state;
        });

  var stateBorders = stateCodes.map(function(code) {
    return topojson.merge(tilegram,
      tilegram.objects.tiles.geometries.filter(function(geometry) {
        return geometry.properties.state === code
      })
    )
  })

// Border
g.selectAll('path.border')
  .data(stateBorders)
  .enter().append('path')
  .attr('d', path)
  .attr('class', 'border')
  .attr('fill', 'none')
  .attr('stroke', '#336699')
  .attr('stroke-width', 4)

// // Working, but unused labels
// const labels = g.selectAll('.labels').data(tiles.features)
// .enter()
// .append('text')
// .attr('class', 'labels')
// .attr('text-anchor', 'middle')
// .attr('dy', '0.5em')
// .text(d => d.id)
// .attr('x', d => path.centroid(d)[0])
// .attr('y', d => path.centroid(d)[1])

})

// // Unused example code from GitHub

// // Build list of state codes
// var stateCodes = []
// tilegram.objects.tiles.geometries.forEach(function(geometry) {
//   if (stateCodes.indexOf(geometry.properties.state) === -1) {
//     stateCodes.push(geometry.properties.state)
//   }
// })

// Build merged geometry for each state
// var stateBorders = stateCodes.map(function(code) {
//   return topojson.merge(tilegram,
//     tilegram.objects.tiles.geometries.filter(function(geometry) {
//       return geometry.properties.state === code
//     })
//   )
// })

// Draw path
// g.selectAll('path.border')
//   .data(stateBorders)
//   .enter().append('path')
//   .attr('d', path)
//   .attr('class', 'border')
//   .attr('fill', 'none')
//   .attr('stroke', 'black')
//   .attr('stroke-width', 4)

// // End Unused example code from GitHub

}
