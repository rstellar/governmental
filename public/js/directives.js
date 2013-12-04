 
app.directive('ngSparkline', function(){
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&callback=JSON_CALLBACK&q="


    return {
        restrict: 'A',
        template: '<div class="sparkline"><div></div><div class="graph"></div></div>',
        scope: {
            ngCity: '=',
            weather: '='
        },

        controller: ['$scope', '$http', function($scope, $http){
            $scope.getTemp = function(city) {
                console.log("Test");
                $http({
                    method: 'JSONP',
                    url: url+city
                }).success(function(data){
                    console.log("THIS IS TEMP", $scope.weather)
                    var weather = [];

                    angular.forEach(data.list, function(value){
                        weather.push(value);
                    });

                    $scope.weather = weather;
                });
                
            }
        }],

        link: function(scope, iElement, iAttrs, ctrl){
            console.log("scope :",scope);

            scope.getTemp(iAttrs.ngCity);
            
            scope.$watch('weather', function(newVal){
                if(newVal) {
                    var high = [],
                        height = 50,
                        width = 50;
                        console.log("There is a newval");

                    angular.forEach(scope.weather, function(value){
                        high.push(value.temp.max);
                    });

                    var chartGraph = function(element, data, opts){
                        var width = opts.width || 200,
                        height = opts.height || 80,
                        padding = opts.padding || 30;

                        //Build the d3 sparkline chart

                        var svg = d3.select(element[0])
                            .append("svg:svg")
                            .attr('width', 200)
                            .attr('height', 100)
                            .attr('class', 'sparkline')
                            .sppend('g')
                            .attr('transform', 'translate('+padding+', '+padding+')');

                        svg.selectAll('*').remove();

                        var maxY = d3.max(data);

                            x   = d3.scale.linear()
                            .domain([0, data.length])
                            .range([0, width]),

                            y   = d3.scale.linear()
                            .domain([0, maxY]).
                            range([height, 0]),

                            yAxis = d3.svg.axis().scale(y)
                            .orient('left')
                            .ticks(5);

                        svg.append('g')
                            .attr('class','axis')
                            .call(yAxis);


                        var line = d3.svg.line()
                            .interpolate('linear')
                            .x(function(d,i) { return x(i);})
                            .y(function(d,i) { return y(d);}),

                            path = svg.append('svg:path')
                                .data([data])
                                .attr('d', line)
                                .attr('fill', 'none')
                                .attr('stroke-width','1');
                    }
                }   
            });
        }
    }   
});

// app.directive('ngCity', function(){
//     return {
//         controller: function($scope){}
//     }
// });