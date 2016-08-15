$(function () {
    
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
                
    function positionerFunction(tooltipX, tooltipY, c){
        return { x: (map.plotSizeX - tooltipX)/2 + (map.plotSizeX / 5), y: map.plotSizeY - tooltipY + 20};
    }

    var options = {
        title : {
            text : ''
        },
        chart: {
            renderTo: 'map-teamPlayers',
            zoomType: '',
            marginBottom: 75
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            },
            enableMouseWheelZoom: false
        },
        legend: {
            enabled: true
        },

        colorAxis: {
            type: "linear",
            
            stops: [
                [0, '#660000'],
                [.4, '#aa8888'],
                [.5, '#ffffff'],
                [.6, '#88aa9e'],
                [1, '#00664d']

            ],
            min: -150,
            max: 150,
            dataClassColor: "tween"

            // dataClasses: createColorScheme()
        },
        tooltip: {
            positioner: positionerFunction,
            headerFormat: "",
            borderWidth: 4
        },
        series : null
    }

    var map;
    var statesData = [];

    function setTeam(team) {
        console.log("got to setTeam")
        console.log(statesData)
        if (TEAM_NAME_MAP.indexOf(team)){
            var teamStateData = statesData[team]
            console.log(teamStateData)
            options.series = createTeamSeries(teamStateData, TEAM_NAME_MAP[team])
            map = new Highcharts.Map(options);
        }
    }

    $.getJSON("teamStates/combined.json", function(json) {
        statesData = json
        setTeam("BOS");
    });

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

    $('#teamSearchBox').typeahead({ 
        source: teamNames,
        items: 5,
        afterSelect: function(pair){
            setTeam(pair["key"]); 
        },

    });

    $("#teamSearchBox").val("Boston Red Sox");

});