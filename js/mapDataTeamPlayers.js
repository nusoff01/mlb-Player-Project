$(function () {

    // var data = [{"state-name": "Washington", "number": 983, "value": 2.29, "hc-key": "us-wa"}, {"state-name": "Virginia", "number": 843, "value": 1.96, "hc-key": "us-va"}, {"state-name": "Delaware", "number": 104, "value": 0.24, "hc-key": "us-de"}, {"state-name": "District of Columbia", "number": 70, "value": 0.16, "hc-key": "us-dc"}, {"state-name": "Wisconsin", "number": 193, "value": 0.45, "hc-key": "us-wi"}, {"state-name": "West Virginia", "number": 179, "value": 0.42, "hc-key": "us-wv"}, {"state-name": "Hawaii", "number": 181, "value": 0.42, "hc-key": "us-hi"}, {"state-name": "Florida", "number": 4978, "value": 11.59, "hc-key": "us-fl"}, {"state-name": "Alaska", "number": 18, "value": 0.04, "hc-key": "us-ak"}, {"state-name": "New Hampshire", "number": 98, "value": 0.23, "hc-key": "us-nh"}, {"state-name": "New Jersey", "number": 623, "value": 1.45, "hc-key": "us-nj"}, {"state-name": "New Mexico", "number": 265, "value": 0.62, "hc-key": "us-nm"}, {"state-name": "Texas", "number": 3825, "value": 8.91, "hc-key": "us-tx"}, {"state-name": "Louisiana", "number": 1037, "value": 2.42, "hc-key": "us-la"}, {"state-name": "North Carolina", "number": 1329, "value": 3.1, "hc-key": "us-nc"}, {"state-name": "North Dakota", "number": 36, "value": 0.08, "hc-key": "us-nd"}, {"state-name": "Nebraska", "number": 276, "value": 0.64, "hc-key": "us-ne"}, {"state-name": "Tennessee", "number": 993, "value": 2.31, "hc-key": "us-tn"}, {"state-name": "New York", "number": 897, "value": 2.09, "hc-key": "us-ny"}, {"state-name": "Pennsylvania", "number": 698, "value": 1.63, "hc-key": "us-pa"}, {"state-name": "Wyoming", "number": 28, "value": 0.07, "hc-key": "us-wy"}, {"state-name": "Rhode Island", "number": 100, "value": 0.23, "hc-key": "us-ri"}, {"state-name": "Nevada", "number": 457, "value": 1.06, "hc-key": "us-nv"}, {"state-name": "Colorado", "number": 346, "value": 0.81, "hc-key": "us-co"}, {"state-name": "California", "number": 8064, "value": 18.78, "hc-key": "us-ca"}, {"state-name": "Alabama", "number": 1013, "value": 2.36, "hc-key": "us-al"}, {"state-name": "Arkansas", "number": 438, "value": 1.02, "hc-key": "us-ar"}, {"state-name": "Vermont", "number": 16, "value": 0.04, "hc-key": "us-vt"}, {"state-name": "Illinois", "number": 1354, "value": 3.15, "hc-key": "us-il"}, {"state-name": "Georgia", "number": 1491, "value": 3.47, "hc-key": "us-ga"}, {"state-name": "Indiana", "number": 662, "value": 1.54, "hc-key": "us-in"}, {"state-name": "Iowa", "number": 359, "value": 0.84, "hc-key": "us-ia"}, {"state-name": "Oklahoma", "number": 1069, "value": 2.49, "hc-key": "us-ok"}, {"state-name": "Arizona", "number": 1317, "value": 3.07, "hc-key": "us-az"}, {"state-name": "Idaho", "number": 240, "value": 0.56, "hc-key": "us-id"}, {"state-name": "Connecticut", "number": 325, "value": 0.76, "hc-key": "us-ct"}, {"state-name": "Maine", "number": 68, "value": 0.16, "hc-key": "us-me"}, {"state-name": "Maryland", "number": 348, "value": 0.81, "hc-key": "us-md"}, {"state-name": "Massachusetts", "number": 373, "value": 0.87, "hc-key": "us-ma"}, {"state-name": "Ohio", "number": 823, "value": 1.92, "hc-key": "us-oh"}, {"state-name": "Utah", "number": 323, "value": 0.75, "hc-key": "us-ut"}, {"state-name": "Missouri", "number": 634, "value": 1.48, "hc-key": "us-mo"}, {"state-name": "Minnesota", "number": 247, "value": 0.58, "hc-key": "us-mn"}, {"state-name": "Michigan", "number": 655, "value": 1.53, "hc-key": "us-mi"}, {"state-name": "Kansas", "number": 658, "value": 1.53, "hc-key": "us-ks"}, {"state-name": "Montana", "number": 39, "value": 0.09, "hc-key": "us-mt"}, {"state-name": "Mississippi", "number": 801, "value": 1.87, "hc-key": "us-ms"}, {"state-name": "South Carolina", "number": 886, "value": 2.06, "hc-key": "us-sc"}, {"state-name": "Kentucky", "number": 476, "value": 1.11, "hc-key": "us-ky"}, {"state-name": "Oregon", "number": 544, "value": 1.27, "hc-key": "us-or"}, {"state-name": "South Dakota", "number": 31, "value": 0.07, "hc-key": "us-sd"}]
    var data = [{"state-name": "Washington", "percent": 1.98, "number": 27, "value": -15.74, "hc-key": "us-wa", "diff-string": "15.74% less than the MLB average"}, {"state-name": "Delaware", "percent": 0.29, "number": 4, "value": 16.0, "hc-key": "us-de", "diff-string": "16.0% more than the MLB average"}, {"state-name": "District of Columbia", "percent": 0.15, "number": 2, "value": -11.76, "hc-key": "us-dc", "diff-string": "11.76% less than the MLB average"}, {"state-name": "Wisconsin", "percent": 0.37, "number": 5, "value": -19.57, "hc-key": "us-wi", "diff-string": "19.57% less than the MLB average"}, {"state-name": "West Virginia", "percent": 0.22, "number": 3, "value": -48.84, "hc-key": "us-wv", "diff-string": "48.84% less than the MLB average"}, {"state-name": "Hawaii", "percent": 0.95, "number": 13, "value": 120.93, "hc-key": "us-hi", "diff-string": "120.93% more than the MLB average"}, {"state-name": "Florida", "percent": 14.08, "number": 192, "value": 18.22, "hc-key": "us-fl", "diff-string": "18.22% more than the MLB average"}, {"state-name": "New Hampshire", "percent": 0.37, "number": 5, "value": 60.87, "hc-key": "us-nh", "diff-string": "60.87% more than the MLB average"}, {"state-name": "New Jersey", "percent": 1.76, "number": 24, "value": 18.12, "hc-key": "us-nj", "diff-string": "18.12% more than the MLB average"}, {"state-name": "New Mexico", "percent": 0.73, "number": 10, "value": 15.87, "hc-key": "us-nm", "diff-string": "15.87% more than the MLB average"}, {"state-name": "Texas", "percent": 8.28, "number": 113, "value": -9.51, "hc-key": "us-tx", "diff-string": "9.51% less than the MLB average"}, {"state-name": "Louisiana", "percent": 1.98, "number": 27, "value": -20.16, "hc-key": "us-la", "diff-string": "20.16% less than the MLB average"}, {"state-name": "North Carolina", "percent": 3.15, "number": 43, "value": -0.94, "hc-key": "us-nc", "diff-string": "0.94% less than the MLB average"}, {"state-name": "North Dakota", "percent": 0.07, "number": 1, "value": -22.22, "hc-key": "us-nd", "diff-string": "22.22% less than the MLB average"}, {"state-name": "Nebraska", "percent": 0.29, "number": 4, "value": -56.06, "hc-key": "us-ne", "diff-string": "56.06% less than the MLB average"}, {"state-name": "Tennessee", "percent": 1.98, "number": 27, "value": -16.46, "hc-key": "us-tn", "diff-string": "16.46% less than the MLB average"}, {"state-name": "New York", "percent": 2.64, "number": 36, "value": 22.79, "hc-key": "us-ny", "diff-string": "22.79% more than the MLB average"}, {"state-name": "Pennsylvania", "percent": 1.83, "number": 25, "value": 9.58, "hc-key": "us-pa", "diff-string": "9.58% more than the MLB average"}, {"state-name": "Rhode Island", "percent": 0.81, "number": 11, "value": 237.5, "hc-key": "us-ri", "diff-string": "237.5% more than the MLB average"}, {"state-name": "Nevada", "percent": 1.03, "number": 14, "value": -5.5, "hc-key": "us-nv", "diff-string": "5.5% less than the MLB average"}, {"state-name": "Virginia", "percent": 2.64, "number": 36, "value": 30.69, "hc-key": "us-va", "diff-string": "30.69% more than the MLB average"}, {"state-name": "Colorado", "percent": 0.88, "number": 12, "value": 6.02, "hc-key": "us-co", "diff-string": "6.02% more than the MLB average"}, {"state-name": "California", "percent": 12.46, "number": 170, "value": -35.41, "hc-key": "us-ca", "diff-string": "35.41% less than the MLB average"}, {"state-name": "Alabama", "percent": 4.33, "number": 59, "value": 78.93, "hc-key": "us-al", "diff-string": "78.93% more than the MLB average"}, {"state-name": "Arkansas", "percent": 0.95, "number": 13, "value": -9.52, "hc-key": "us-ar", "diff-string": "9.52% less than the MLB average"}, {"state-name": "Vermont", "percent": 0.07, "number": 1, "value": 75.0, "hc-key": "us-vt", "diff-string": "75.0% more than the MLB average"}, {"state-name": "Illinois", "percent": 2.71, "number": 37, "value": -16.36, "hc-key": "us-il", "diff-string": "16.36% less than the MLB average"}, {"state-name": "Georgia", "percent": 4.69, "number": 64, "value": 31.37, "hc-key": "us-ga", "diff-string": "31.37% more than the MLB average"}, {"state-name": "Indiana", "percent": 1.32, "number": 18, "value": -16.46, "hc-key": "us-in", "diff-string": "16.46% less than the MLB average"}, {"state-name": "Iowa", "percent": 0.73, "number": 10, "value": -15.12, "hc-key": "us-ia", "diff-string": "15.12% less than the MLB average"}, {"state-name": "Oklahoma", "percent": 2.27, "number": 31, "value": -11.33, "hc-key": "us-ok", "diff-string": "11.33% less than the MLB average"}, {"state-name": "Arizona", "percent": 2.86, "number": 39, "value": -9.21, "hc-key": "us-az", "diff-string": "9.21% less than the MLB average"}, {"state-name": "Idaho", "percent": 0.59, "number": 8, "value": 3.51, "hc-key": "us-id", "diff-string": "3.51% more than the MLB average"}, {"state-name": "Connecticut", "percent": 1.54, "number": 21, "value": 97.44, "hc-key": "us-ct", "diff-string": "97.44% more than the MLB average"}, {"state-name": "Maine", "percent": 0.44, "number": 6, "value": 175.0, "hc-key": "us-me", "diff-string": "175.0% more than the MLB average"}, {"state-name": "Maryland", "percent": 0.59, "number": 8, "value": -28.92, "hc-key": "us-md", "diff-string": "28.92% less than the MLB average"}, {"state-name": "Massachusetts", "percent": 4.18, "number": 57, "value": 369.66, "hc-key": "us-ma", "diff-string": "369.66% more than the MLB average"}, {"state-name": "Ohio", "percent": 2.93, "number": 40, "value": 48.73, "hc-key": "us-oh", "diff-string": "48.73% more than the MLB average"}, {"state-name": "Utah", "percent": 0.66, "number": 9, "value": -14.29, "hc-key": "us-ut", "diff-string": "14.29% less than the MLB average"}, {"state-name": "Missouri", "percent": 1.03, "number": 14, "value": -32.24, "hc-key": "us-mo", "diff-string": "32.24% less than the MLB average"}, {"state-name": "Minnesota", "percent": 0.29, "number": 4, "value": -50.85, "hc-key": "us-mn", "diff-string": "50.85% less than the MLB average"}, {"state-name": "Michigan", "percent": 0.51, "number": 7, "value": -67.52, "hc-key": "us-mi", "diff-string": "67.52% less than the MLB average"}, {"state-name": "Kansas", "percent": 1.76, "number": 24, "value": 12.1, "hc-key": "us-ks", "diff-string": "12.1% more than the MLB average"}, {"state-name": "Mississippi", "percent": 2.49, "number": 34, "value": 29.69, "hc-key": "us-ms", "diff-string": "29.69% more than the MLB average"}, {"state-name": "South Carolina", "percent": 1.98, "number": 27, "value": -6.6, "hc-key": "us-sc", "diff-string": "6.6% less than the MLB average"}, {"state-name": "Kentucky", "percent": 1.39, "number": 19, "value": 21.93, "hc-key": "us-ky", "diff-string": "21.93% more than the MLB average"}, {"state-name": "Oregon", "percent": 0.66, "number": 9, "value": -49.23, "hc-key": "us-or", "diff-string": "49.23% less than the MLB average"}, {"state-name": "South Dakota", "percent": 0.07, "number": 1, "value": 0.0, "hc-key": "us-sd", "diff-string": "same as the MLB average"}]
    var data2 = [{"state-name": "Washington", "percent": 1.98, "number": 27, "value": -300, "hc-key": "us-wa", "diff-string": "15.74% less than the MLB average"}, {"state-name": "Delaware", "percent": 0.29, "number": 4, "value": 16.0, "hc-key": "us-de", "diff-string": "16.0% more than the MLB average"}, {"state-name": "District of Columbia", "percent": 0.15, "number": 2, "value": -11.76, "hc-key": "us-dc", "diff-string": "11.76% less than the MLB average"}, {"state-name": "Wisconsin", "percent": 0.37, "number": 5, "value": -19.57, "hc-key": "us-wi", "diff-string": "19.57% less than the MLB average"}, {"state-name": "West Virginia", "percent": 0.22, "number": 3, "value": -48.84, "hc-key": "us-wv", "diff-string": "48.84% less than the MLB average"}, {"state-name": "Hawaii", "percent": 0.95, "number": 13, "value": 120.93, "hc-key": "us-hi", "diff-string": "120.93% more than the MLB average"}, {"state-name": "Florida", "percent": 14.08, "number": 192, "value": 18.22, "hc-key": "us-fl", "diff-string": "18.22% more than the MLB average"}, {"state-name": "New Hampshire", "percent": 0.37, "number": 5, "value": 60.87, "hc-key": "us-nh", "diff-string": "60.87% more than the MLB average"}, {"state-name": "New Jersey", "percent": 1.76, "number": 24, "value": 18.12, "hc-key": "us-nj", "diff-string": "18.12% more than the MLB average"}, {"state-name": "New Mexico", "percent": 0.73, "number": 10, "value": 15.87, "hc-key": "us-nm", "diff-string": "15.87% more than the MLB average"}, {"state-name": "Texas", "percent": 8.28, "number": 113, "value": -9.51, "hc-key": "us-tx", "diff-string": "9.51% less than the MLB average"}, {"state-name": "Louisiana", "percent": 1.98, "number": 27, "value": -20.16, "hc-key": "us-la", "diff-string": "20.16% less than the MLB average"}, {"state-name": "North Carolina", "percent": 3.15, "number": 43, "value": -0.94, "hc-key": "us-nc", "diff-string": "0.94% less than the MLB average"}, {"state-name": "North Dakota", "percent": 0.07, "number": 1, "value": -22.22, "hc-key": "us-nd", "diff-string": "22.22% less than the MLB average"}, {"state-name": "Nebraska", "percent": 0.29, "number": 4, "value": -56.06, "hc-key": "us-ne", "diff-string": "56.06% less than the MLB average"}, {"state-name": "Tennessee", "percent": 1.98, "number": 27, "value": -16.46, "hc-key": "us-tn", "diff-string": "16.46% less than the MLB average"}, {"state-name": "New York", "percent": 2.64, "number": 36, "value": 22.79, "hc-key": "us-ny", "diff-string": "22.79% more than the MLB average"}, {"state-name": "Pennsylvania", "percent": 1.83, "number": 25, "value": 9.58, "hc-key": "us-pa", "diff-string": "9.58% more than the MLB average"}, {"state-name": "Rhode Island", "percent": 0.81, "number": 11, "value": 237.5, "hc-key": "us-ri", "diff-string": "237.5% more than the MLB average"}, {"state-name": "Nevada", "percent": 1.03, "number": 14, "value": -5.5, "hc-key": "us-nv", "diff-string": "5.5% less than the MLB average"}, {"state-name": "Virginia", "percent": 2.64, "number": 36, "value": 30.69, "hc-key": "us-va", "diff-string": "30.69% more than the MLB average"}, {"state-name": "Colorado", "percent": 0.88, "number": 12, "value": 6.02, "hc-key": "us-co", "diff-string": "6.02% more than the MLB average"}, {"state-name": "California", "percent": 12.46, "number": 170, "value": -35.41, "hc-key": "us-ca", "diff-string": "35.41% less than the MLB average"}, {"state-name": "Alabama", "percent": 4.33, "number": 59, "value": 78.93, "hc-key": "us-al", "diff-string": "78.93% more than the MLB average"}, {"state-name": "Arkansas", "percent": 0.95, "number": 13, "value": -9.52, "hc-key": "us-ar", "diff-string": "9.52% less than the MLB average"}, {"state-name": "Vermont", "percent": 0.07, "number": 1, "value": 75.0, "hc-key": "us-vt", "diff-string": "75.0% more than the MLB average"}, {"state-name": "Illinois", "percent": 2.71, "number": 37, "value": -16.36, "hc-key": "us-il", "diff-string": "16.36% less than the MLB average"}, {"state-name": "Georgia", "percent": 4.69, "number": 64, "value": 31.37, "hc-key": "us-ga", "diff-string": "31.37% more than the MLB average"}, {"state-name": "Indiana", "percent": 1.32, "number": 18, "value": -16.46, "hc-key": "us-in", "diff-string": "16.46% less than the MLB average"}, {"state-name": "Iowa", "percent": 0.73, "number": 10, "value": -15.12, "hc-key": "us-ia", "diff-string": "15.12% less than the MLB average"}, {"state-name": "Oklahoma", "percent": 2.27, "number": 31, "value": -11.33, "hc-key": "us-ok", "diff-string": "11.33% less than the MLB average"}, {"state-name": "Arizona", "percent": 2.86, "number": 39, "value": -9.21, "hc-key": "us-az", "diff-string": "9.21% less than the MLB average"}, {"state-name": "Idaho", "percent": 0.59, "number": 8, "value": 3.51, "hc-key": "us-id", "diff-string": "3.51% more than the MLB average"}, {"state-name": "Connecticut", "percent": 1.54, "number": 21, "value": 97.44, "hc-key": "us-ct", "diff-string": "97.44% more than the MLB average"}, {"state-name": "Maine", "percent": 0.44, "number": 6, "value": 175.0, "hc-key": "us-me", "diff-string": "175.0% more than the MLB average"}, {"state-name": "Maryland", "percent": 0.59, "number": 8, "value": -28.92, "hc-key": "us-md", "diff-string": "28.92% less than the MLB average"}, {"state-name": "Massachusetts", "percent": 4.18, "number": 57, "value": 369.66, "hc-key": "us-ma", "diff-string": "369.66% more than the MLB average"}, {"state-name": "Ohio", "percent": 2.93, "number": 40, "value": 48.73, "hc-key": "us-oh", "diff-string": "48.73% more than the MLB average"}, {"state-name": "Utah", "percent": 0.66, "number": 9, "value": -14.29, "hc-key": "us-ut", "diff-string": "14.29% less than the MLB average"}, {"state-name": "Missouri", "percent": 1.03, "number": 14, "value": -32.24, "hc-key": "us-mo", "diff-string": "32.24% less than the MLB average"}, {"state-name": "Minnesota", "percent": 0.29, "number": 4, "value": -50.85, "hc-key": "us-mn", "diff-string": "50.85% less than the MLB average"}, {"state-name": "Michigan", "percent": 0.51, "number": 7, "value": -67.52, "hc-key": "us-mi", "diff-string": "67.52% less than the MLB average"}, {"state-name": "Kansas", "percent": 1.76, "number": 24, "value": 12.1, "hc-key": "us-ks", "diff-string": "12.1% more than the MLB average"}, {"state-name": "Mississippi", "percent": 2.49, "number": 34, "value": 29.69, "hc-key": "us-ms", "diff-string": "29.69% more than the MLB average"}, {"state-name": "South Carolina", "percent": 1.98, "number": 27, "value": -6.6, "hc-key": "us-sc", "diff-string": "6.6% less than the MLB average"}, {"state-name": "Kentucky", "percent": 1.39, "number": 19, "value": 21.93, "hc-key": "us-ky", "diff-string": "21.93% more than the MLB average"}, {"state-name": "Oregon", "percent": 0.66, "number": 9, "value": -49.23, "hc-key": "us-or", "diff-string": "49.23% less than the MLB average"}, {"state-name": "South Dakota", "percent": 0.07, "number": 1, "value": 0.0, "hc-key": "us-sd", "diff-string": "same as the MLB average"}]
    
    var TEAM_NAME_MAP = [
        {"ANA": ""}, {"HOU": ""}, {"OAK": ""}, {"TOR": ""}, {"ATL": ""}, {"MIL": ""}, {"STL": ""}, 
            {"CHC": ""}, {"TBD": ""}, {"ARI": ""}, {"LAD": ""}, {"SFG": ""}, {"CLE": ""}, {"SEA": ""}, 
            {"FLA": ""}, {"NYM": ""}, {"WSN": ""}, {"BAL": ""}, {"SDP": ""}, {"PHI": ""}, {"PIT": ""}, 
            {"TEX": ""}, {"BOS": "Boston Red Sox"}, {"CIN": ""}, {"COL": ""}, {"KCR": ""}, {"DET": ""}, {"MIN": ""}, 
            {"CHW": ""}, {"NYY": "New York Yankees"}
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
                pointFormat: '<span><b>{point.state-name}</b><br/>' + 
                                   '<b>{point.diff-string}</b><br/>' + 
                                   '<b>{point.number}</b> selections total<br/>' +
                                   '<b>{point.percent}%</b> of selections for the Boston Red Sox<br/>' +
                                   'click for draft selection list</span>'
            }
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
                // Initiate the chart
    var options = {
        title : {
            text : ''
        },
        chart: {
            renderTo: 'map-teamPlayers',
            zoomType: '',
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            },
            enableMouseWheelZoom: false
        },

        colorAxis: {
            minColor: '#AAFFFF',
            maxColor: '#FF0000',
            min: -200,
            max: 200
        },
        series : teamSeries
    }

    console.log("right before mapping options")
    console.log(options)
    var map = new Highcharts.Map(options);

    function setTeam(team) {
        if (TEAM_NAME_MAP.indexOf(team)){
            $.getJSON("teamStates/" + team + ".json", function(json) {
                console.log(options)
                options.series = createTeamSeries(json, TEAM_NAME_MAP[team])
                map = new Highcharts.Map(options);
                console.log(json); // this will show the info it in firebug console
            });
        }
    }

    $( "#BOS" ).click(function() {
        document.getElementById("dropdownTeam").innerHTML="Boston Red Sox <span class='caret'></span>";
        document.getElementById("teamHeader").innerHTML="Boston Red Sox";
        setTeam("BOS");
        // $.getJSON("test.json", function(json) {
        //     console.log(json); // this will show the info it in firebug console
        // });
        // // alert( "Handler for .click() called." );
    
        // teamSeries[0].data = data2;
        // options.series = teamSeries;
        // var map = new Highcharts.Map(options);
        // location.hash = "#playersByTeam"  
    });
    $( "#NYY" ).click(function() {
        document.getElementById("dropdownTeam").innerHTML="New York Yankees <span class='caret'></span>";
        document.getElementById("teamHeader").innerHTML="New York Yankees";
        setTeam("NYY");
        // $.getJSON("test.json", function(json) {
        //     console.log(json); // this will show the info it in firebug console
        // });
        // // alert( "Handler for .click() called." );
    
        // teamSeries[0].data = data2;
        // options.series = teamSeries;
        // var map = new Highcharts.Map(options);
        // location.hash = "#playersByTeam"  
    });

});