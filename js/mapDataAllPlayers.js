$(function () {

    var data = [{"state-name": "Washington", "number": 983, "value": 2.29, "hc-key": "us-wa"}, {"state-name": "Virginia", "number": 843, "value": 1.96, "hc-key": "us-va"}, {"state-name": "Delaware", "number": 104, "value": 0.24, "hc-key": "us-de"}, {"state-name": "District of Columbia", "number": 70, "value": 0.16, "hc-key": "us-dc"}, {"state-name": "Wisconsin", "number": 193, "value": 0.45, "hc-key": "us-wi"}, {"state-name": "West Virginia", "number": 179, "value": 0.42, "hc-key": "us-wv"}, {"state-name": "Hawaii", "number": 181, "value": 0.42, "hc-key": "us-hi"}, {"state-name": "Florida", "number": 4978, "value": 11.59, "hc-key": "us-fl"}, {"state-name": "Alaska", "number": 18, "value": 0.04, "hc-key": "us-ak"}, {"state-name": "New Hampshire", "number": 98, "value": 0.23, "hc-key": "us-nh"}, {"state-name": "New Jersey", "number": 623, "value": 1.45, "hc-key": "us-nj"}, {"state-name": "New Mexico", "number": 265, "value": 0.62, "hc-key": "us-nm"}, {"state-name": "Texas", "number": 3825, "value": 8.91, "hc-key": "us-tx"}, {"state-name": "Louisiana", "number": 1037, "value": 2.42, "hc-key": "us-la"}, {"state-name": "North Carolina", "number": 1329, "value": 3.1, "hc-key": "us-nc"}, {"state-name": "North Dakota", "number": 36, "value": 0.08, "hc-key": "us-nd"}, {"state-name": "Nebraska", "number": 276, "value": 0.64, "hc-key": "us-ne"}, {"state-name": "Tennessee", "number": 993, "value": 2.31, "hc-key": "us-tn"}, {"state-name": "New York", "number": 897, "value": 2.09, "hc-key": "us-ny"}, {"state-name": "Pennsylvania", "number": 698, "value": 1.63, "hc-key": "us-pa"}, {"state-name": "Wyoming", "number": 28, "value": 0.07, "hc-key": "us-wy"}, {"state-name": "Rhode Island", "number": 100, "value": 0.23, "hc-key": "us-ri"}, {"state-name": "Nevada", "number": 457, "value": 1.06, "hc-key": "us-nv"}, {"state-name": "Colorado", "number": 346, "value": 0.81, "hc-key": "us-co"}, {"state-name": "California", "number": 8064, "value": 18.78, "hc-key": "us-ca"}, {"state-name": "Alabama", "number": 1013, "value": 2.36, "hc-key": "us-al"}, {"state-name": "Arkansas", "number": 438, "value": 1.02, "hc-key": "us-ar"}, {"state-name": "Vermont", "number": 16, "value": 0.04, "hc-key": "us-vt"}, {"state-name": "Illinois", "number": 1354, "value": 3.15, "hc-key": "us-il"}, {"state-name": "Georgia", "number": 1491, "value": 3.47, "hc-key": "us-ga"}, {"state-name": "Indiana", "number": 662, "value": 1.54, "hc-key": "us-in"}, {"state-name": "Iowa", "number": 359, "value": 0.84, "hc-key": "us-ia"}, {"state-name": "Oklahoma", "number": 1069, "value": 2.49, "hc-key": "us-ok"}, {"state-name": "Arizona", "number": 1317, "value": 3.07, "hc-key": "us-az"}, {"state-name": "Idaho", "number": 240, "value": 0.56, "hc-key": "us-id"}, {"state-name": "Connecticut", "number": 325, "value": 0.76, "hc-key": "us-ct"}, {"state-name": "Maine", "number": 68, "value": 0.16, "hc-key": "us-me"}, {"state-name": "Maryland", "number": 348, "value": 0.81, "hc-key": "us-md"}, {"state-name": "Massachusetts", "number": 373, "value": 0.87, "hc-key": "us-ma"}, {"state-name": "Ohio", "number": 823, "value": 1.92, "hc-key": "us-oh"}, {"state-name": "Utah", "number": 323, "value": 0.75, "hc-key": "us-ut"}, {"state-name": "Missouri", "number": 634, "value": 1.48, "hc-key": "us-mo"}, {"state-name": "Minnesota", "number": 247, "value": 0.58, "hc-key": "us-mn"}, {"state-name": "Michigan", "number": 655, "value": 1.53, "hc-key": "us-mi"}, {"state-name": "Kansas", "number": 658, "value": 1.53, "hc-key": "us-ks"}, {"state-name": "Montana", "number": 39, "value": 0.09, "hc-key": "us-mt"}, {"state-name": "Mississippi", "number": 801, "value": 1.87, "hc-key": "us-ms"}, {"state-name": "South Carolina", "number": 886, "value": 2.06, "hc-key": "us-sc"}, {"state-name": "Kentucky", "number": 476, "value": 1.11, "hc-key": "us-ky"}, {"state-name": "Oregon", "number": 544, "value": 1.27, "hc-key": "us-or"}, {"state-name": "South Dakota", "number": 31, "value": 0.07, "hc-key": "us-sd"}]

    function positionerFunction(tooltipX, tooltipY, c){
        return { x: (map.plotSizeX - tooltipX)/2, y: map.plotSizeY - tooltipY};
    }

    var options = {
        chart: {
            renderTo: 'map-allPlayers',
            zoomType: ''
        },
        title : {
            text : ''
        },
        tooltip: {
            positioner: positionerFunction,
            headerFormat: ""
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            },
            enableMouseWheelZoom: false
        },

        colorAxis: {
            type: "logarithmic",
            
            minColor: '#55FFFF',
            maxColor: '#FF0000'
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'All MLB Draft Selections',
            states: {
                hover: {
                    color: '#BADA55'
                },

            },

            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,

                padding: 0,
                positioner: positionerFunction,
                pointFormat: '<span><b>{point.state-name}</b><br/>' + 
                                   '<b>{point.value}%</b> of all selections<br/>' + 
                                   '<b>{point.number}</b> selections total</span>'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false
        }]
    };
    var map = new Highcharts.Map(options);
 });
