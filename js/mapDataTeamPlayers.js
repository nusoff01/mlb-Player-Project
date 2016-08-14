$(function () {
    var data2 = [{"state-name": "Washington", "percent": 1.98, "number": 27, "value": -300, "hc-key": "us-wa", "diff-string": "15.74% less than the MLB average"}, {"state-name": "Delaware", "percent": 0.29, "number": 4, "value": 16.0, "hc-key": "us-de", "diff-string": "16.0% more than the MLB average"}, {"state-name": "District of Columbia", "percent": 0.15, "number": 2, "value": -11.76, "hc-key": "us-dc", "diff-string": "11.76% less than the MLB average"}, {"state-name": "Wisconsin", "percent": 0.37, "number": 5, "value": -19.57, "hc-key": "us-wi", "diff-string": "19.57% less than the MLB average"}, {"state-name": "West Virginia", "percent": 0.22, "number": 3, "value": -48.84, "hc-key": "us-wv", "diff-string": "48.84% less than the MLB average"}, {"state-name": "Hawaii", "percent": 0.95, "number": 13, "value": 120.93, "hc-key": "us-hi", "diff-string": "120.93% more than the MLB average"}, {"state-name": "Florida", "percent": 14.08, "number": 192, "value": 18.22, "hc-key": "us-fl", "diff-string": "18.22% more than the MLB average"}, {"state-name": "New Hampshire", "percent": 0.37, "number": 5, "value": 60.87, "hc-key": "us-nh", "diff-string": "60.87% more than the MLB average"}, {"state-name": "New Jersey", "percent": 1.76, "number": 24, "value": 18.12, "hc-key": "us-nj", "diff-string": "18.12% more than the MLB average"}, {"state-name": "New Mexico", "percent": 0.73, "number": 10, "value": 15.87, "hc-key": "us-nm", "diff-string": "15.87% more than the MLB average"}, {"state-name": "Texas", "percent": 8.28, "number": 113, "value": -9.51, "hc-key": "us-tx", "diff-string": "9.51% less than the MLB average"}, {"state-name": "Louisiana", "percent": 1.98, "number": 27, "value": -20.16, "hc-key": "us-la", "diff-string": "20.16% less than the MLB average"}, {"state-name": "North Carolina", "percent": 3.15, "number": 43, "value": -0.94, "hc-key": "us-nc", "diff-string": "0.94% less than the MLB average"}, {"state-name": "North Dakota", "percent": 0.07, "number": 1, "value": -22.22, "hc-key": "us-nd", "diff-string": "22.22% less than the MLB average"}, {"state-name": "Nebraska", "percent": 0.29, "number": 4, "value": -56.06, "hc-key": "us-ne", "diff-string": "56.06% less than the MLB average"}, {"state-name": "Tennessee", "percent": 1.98, "number": 27, "value": -16.46, "hc-key": "us-tn", "diff-string": "16.46% less than the MLB average"}, {"state-name": "New York", "percent": 2.64, "number": 36, "value": 22.79, "hc-key": "us-ny", "diff-string": "22.79% more than the MLB average"}, {"state-name": "Pennsylvania", "percent": 1.83, "number": 25, "value": 9.58, "hc-key": "us-pa", "diff-string": "9.58% more than the MLB average"}, {"state-name": "Rhode Island", "percent": 0.81, "number": 11, "value": 237.5, "hc-key": "us-ri", "diff-string": "237.5% more than the MLB average"}, {"state-name": "Nevada", "percent": 1.03, "number": 14, "value": -5.5, "hc-key": "us-nv", "diff-string": "5.5% less than the MLB average"}, {"state-name": "Virginia", "percent": 2.64, "number": 36, "value": 30.69, "hc-key": "us-va", "diff-string": "30.69% more than the MLB average"}, {"state-name": "Colorado", "percent": 0.88, "number": 12, "value": 6.02, "hc-key": "us-co", "diff-string": "6.02% more than the MLB average"}, {"state-name": "California", "percent": 12.46, "number": 170, "value": -35.41, "hc-key": "us-ca", "diff-string": "35.41% less than the MLB average"}, {"state-name": "Alabama", "percent": 4.33, "number": 59, "value": 78.93, "hc-key": "us-al", "diff-string": "78.93% more than the MLB average"}, {"state-name": "Arkansas", "percent": 0.95, "number": 13, "value": -9.52, "hc-key": "us-ar", "diff-string": "9.52% less than the MLB average"}, {"state-name": "Vermont", "percent": 0.07, "number": 1, "value": 75.0, "hc-key": "us-vt", "diff-string": "75.0% more than the MLB average"}, {"state-name": "Illinois", "percent": 2.71, "number": 37, "value": -16.36, "hc-key": "us-il", "diff-string": "16.36% less than the MLB average"}, {"state-name": "Georgia", "percent": 4.69, "number": 64, "value": 31.37, "hc-key": "us-ga", "diff-string": "31.37% more than the MLB average"}, {"state-name": "Indiana", "percent": 1.32, "number": 18, "value": -16.46, "hc-key": "us-in", "diff-string": "16.46% less than the MLB average"}, {"state-name": "Iowa", "percent": 0.73, "number": 10, "value": -15.12, "hc-key": "us-ia", "diff-string": "15.12% less than the MLB average"}, {"state-name": "Oklahoma", "percent": 2.27, "number": 31, "value": -11.33, "hc-key": "us-ok", "diff-string": "11.33% less than the MLB average"}, {"state-name": "Arizona", "percent": 2.86, "number": 39, "value": -9.21, "hc-key": "us-az", "diff-string": "9.21% less than the MLB average"}, {"state-name": "Idaho", "percent": 0.59, "number": 8, "value": 3.51, "hc-key": "us-id", "diff-string": "3.51% more than the MLB average"}, {"state-name": "Connecticut", "percent": 1.54, "number": 21, "value": 97.44, "hc-key": "us-ct", "diff-string": "97.44% more than the MLB average"}, {"state-name": "Maine", "percent": 0.44, "number": 6, "value": 175.0, "hc-key": "us-me", "diff-string": "175.0% more than the MLB average"}, {"state-name": "Maryland", "percent": 0.59, "number": 8, "value": -28.92, "hc-key": "us-md", "diff-string": "28.92% less than the MLB average"}, {"state-name": "Massachusetts", "percent": 4.18, "number": 57, "value": 369.66, "hc-key": "us-ma", "diff-string": "369.66% more than the MLB average"}, {"state-name": "Ohio", "percent": 2.93, "number": 40, "value": 48.73, "hc-key": "us-oh", "diff-string": "48.73% more than the MLB average"}, {"state-name": "Utah", "percent": 0.66, "number": 9, "value": -14.29, "hc-key": "us-ut", "diff-string": "14.29% less than the MLB average"}, {"state-name": "Missouri", "percent": 1.03, "number": 14, "value": -32.24, "hc-key": "us-mo", "diff-string": "32.24% less than the MLB average"}, {"state-name": "Minnesota", "percent": 0.29, "number": 4, "value": -50.85, "hc-key": "us-mn", "diff-string": "50.85% less than the MLB average"}, {"state-name": "Michigan", "percent": 0.51, "number": 7, "value": -67.52, "hc-key": "us-mi", "diff-string": "67.52% less than the MLB average"}, {"state-name": "Kansas", "percent": 1.76, "number": 24, "value": 12.1, "hc-key": "us-ks", "diff-string": "12.1% more than the MLB average"}, {"state-name": "Mississippi", "percent": 2.49, "number": 34, "value": 29.69, "hc-key": "us-ms", "diff-string": "29.69% more than the MLB average"}, {"state-name": "South Carolina", "percent": 1.98, "number": 27, "value": -6.6, "hc-key": "us-sc", "diff-string": "6.6% less than the MLB average"}, {"state-name": "Kentucky", "percent": 1.39, "number": 19, "value": 21.93, "hc-key": "us-ky", "diff-string": "21.93% more than the MLB average"}, {"state-name": "Oregon", "percent": 0.66, "number": 9, "value": -49.23, "hc-key": "us-or", "diff-string": "49.23% less than the MLB average"}, {"state-name": "South Dakota", "percent": 0.07, "number": 1, "value": 0.0, "hc-key": "us-sd", "diff-string": "same as the MLB average"}]
    
    var TEAM_NAME_MAP = [
        {"ANA": "Los Angeles Angels"}, {"HOU": "Houston Astros"}, {"OAK": "Oakland Athletics"}, 
        {"TOR": "Toronto Blue Jays"}, {"ATL": "Atlanta Braves"}, {"MIL": "Milwaukee Brewers"}, 
        {"STL": "St. Louis Cardinals"}, {"CHC": "Chicago Cubs"}, {"TBD": "Tampa Bay Rays"}, 
        {"ARI": "Arizona Diamondbacks"}, {"LAD": "Los Angeles Dodgers"}, 
        {"SFG": "San Francisco Giants"}, {"CLE": "Cleveland Indians"}, {"SEA": "Seattle Mariners"}, 
        {"FLA": "Florida Marlins"}, {"NYM": "New York Mets"}, {"WSN": "Washington Nationals"}, 
        {"BAL": "Baltimore Orioles"}, {"SDP": "San Diego Padres"}, {"PHI": "Philadelphia Phillies"}, 
        {"PIT": "Pittsburgh Pirates"}, {"TEX": "Texas Rangers"}, {"BOS": "Boston Red Sox"}, 
        {"CIN": "Cincinnati Reds"}, {"COL": "Colorado Rockies"}, {"KCR": "Kansas City Royals"}, 
        {"DET": "Detroit Tigers"}, {"MIN": "Minnesota Twins"}, {"CHW": "Chicago White Sox"}, 
        {"NYY": "New York Yankees"}
    ]

    function createTeamSeries (data, name){
        return [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'All' + name + 'Draft Selections',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            enableMouseTracking: true,
            tooltip: {
                useHTML: true,
                followPointer: false,
                hideDelay: 2000, 
                pointFormat: '<span><b>{point.state-name}</b><br/>' + 
                                   '<b>{point.diff-string}</b><br/>' + 
                                   '<b>{point.number}</b> Draft Selections (<b>{point.percent}</b>% of total)<br/>' +
                                   '</span>'
            },
            nullColor: "#888888"
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }];
    }

    var teamSeries = createTeamSeries(data2, "Boston Red Sox");
                
    function positionerFunction(tooltipX, tooltipY, c){
        return { x: (map.plotSizeX - tooltipX)/2, y: map.plotSizeY - tooltipY};
    }

    var options = {
        title : {
            text : ''
        },
        chart: {
            renderTo: 'map-teamPlayers',
            zoomType: ''
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            },
            enableMouseWheelZoom: false
        },
        legend: {
            enabled: false
        },

        colorAxis: {
            dataClasses: createColorScheme()
        },
        tooltip: {
            positioner: positionerFunction,
            headerFormat: "",
            borderWidth: 4
        },
        series : teamSeries
    }

    var map = new Highcharts.Map(options);

    function setTeam(team) {
        if (TEAM_NAME_MAP.indexOf(team)){
            $.getJSON("teamStates/" + team + ".json", function(json) {
                options.series = createTeamSeries(json, TEAM_NAME_MAP[team])
                map = new Highcharts.Map(options);
            });
        }
    }

    function createColorScheme() {
        var schemes = []
        var previous = 0
        for (var i = 0; i < 25; i++){
            var shade = (255 - (((i+1) * 10 / 250) * 255));
            var shade = Math.floor(shade).toString(16);
            if(shade.length == 1){
                shade = "0" + shade;
            }
            schemes.push({
                "from": i*10,
                "to": i*10 + 10,
                "color": "#FF" + shade.toUpperCase() + shade.toUpperCase()  
            });
            schemes.push({
                "from": 0 - (i*10 + 10),
                "to": 0 - (i*10),
                "color": "#" + shade.toUpperCase() + "FFFF"
            });
        }

        schemes.push({
            "from": 250,
            "color": "#FF0000"
        });

        schemes.push({
            "to": -250,
            "color": "#00FFFF"
        });
        return schemes;
    }

    var teamNames = TEAM_NAME_MAP.map(function(pair){
        for (var key in pair){
            return {"name": pair[key], "key": key};
        }
    });
    console.log(teamNames);

    $('#teamSearchBox').typeahead({ 
        source: teamNames,
        items: 5,
        afterSelect: function(pair){
            setTeam(pair["key"]); 
        }
    });

    $("#teamSearchBox").val("Boston Red Sox");
    $(document).on('typeAhead:opened',function(){
        $('.dropdown-menu').css('width',$('#teamSearchBox').width() + 'px');
        console.log("opened")
    });


});