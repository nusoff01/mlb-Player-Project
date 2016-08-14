# extract_state_data.py
# created by: Nick Usoff
# created on: 7-24-2016

import re
import json

team = "NYY"

OUTPUT_DIR = "teamStates"

TEAM_IDS = ["ANA", "HOU", "OAK", "TOR", "ATL", "MIL", "STL", 
            "CHC", "TBD", "ARI", "LAD", "SFG", "CLE", "SEA", 
            "FLA", "NYM", "WSN", "BAL", "SDP", "PHI", "PIT", 
            "TEX", "BOS", "CIN", "COL", "KCR", "DET", "MIN", 
            "CHW", "NYY"]

STATES = {
    'AK': 'Alaska',
    'AL': 'Alabama',
    'AR': 'Arkansas',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DC': 'District of Columbia',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'IA': 'Iowa',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'MA': 'Massachusetts',
    'MD': 'Maryland',
    'ME': 'Maine',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MO': 'Missouri',
    'MP': 'Northern Mariana Islands',
    'MS': 'Mississippi',
    'MT': 'Montana',
    'NA': 'National',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'NE': 'Nebraska',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NV': 'Nevada',
    'NY': 'New York',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VA': 'Virginia',
    'VI': 'Virgin Islands',
    'VT': 'Vermont',
    'WA': 'Washington',
    'WI': 'Wisconsin',
    'WV': 'West Virginia',
    'WY': 'Wyoming',
    'CAN': "Canada"
}

def extractState(player_from):
    state_match = re.search(r'(\S\S)\)$', player_from, re.M|re.I)
    if(state_match):
        return state_match.group(1)
    else: #TODO error throw
        return ""

def createStateMap(player_array):
    player_count = 0
    state_map = {}
    for year in player_array:
        print("year: " + str(year))
        year_players = player_array[year]
        try:
            for player_id in year_players:
                player_count += 1
                player = year_players[player_id]
                state = extractState(player["player_from"])
                if(len(state) != 2):
                    continue;
                try: 
                    state_map[state] += 1
                except KeyError:
                    state_map[state] = 1
        except TypeError:
            continue
    return state_map


############################################################################### 

def convertToCanada(state_map):
    provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'] 
    num_in_province = 0
    state_map["CAN"] = 0
    for province in provinces:
        try:
            num_in_province = state_map[province]
            state_map["CAN"] += num_in_province
            state_map.pop(province, None)
        except KeyError:
            continue
    return state_map

def verifyTeamData(player_array):
    num_years = 0;
    for year in player_array:
        num_years += 1
        year_players = player_array[year]
        if(not year_players):
            print("no players in year " + str(year) + "!")
        else:
            print("num players in " + str(year) + ": " + str(len(year_players)))
    print("num years (31): " + str(num_years))
        # if(year == "1996"):
        #     for player_id in year_players:
        #         player = year_players[player_id]
        #         print(player)

############################################################################### 

complete_state_map = {}
total_count = 0
team_state_maps = {}
jsonObj = {}
team_to_check_players = {}

for team_id in TEAM_IDS:
    with open('teamJSON/' + team_id + '.json') as data_file:    
        jsonObj = json.load(data_file)
    team_players = jsonObj[team_id]
    
    if(team_id == team):
        team_to_check_players = team_players

    state_map = createStateMap(team_players)
    state_map = convertToCanada(state_map)
    team_state_maps[team_id] = state_map

    sorted_states = sorted(state_map, key=state_map.get)
    for state in sorted_states:
        total_count += state_map[state]
        try:
            complete_state_map[state] += state_map[state]
        except KeyError:
            complete_state_map[state] = state_map[state]
        # print(state_map[state])
        state_name = ""
        try: 
            state_name = STATES[state]
        except KeyError:
            state_name = state_name
        # if(state_name == ""):
        #     try:
        #         state_name = PROV_TERR[state] + ", Canada"
        #     except KeyError:
        #         state_name = state
        # print(state_name + ": " + str(state_map[state]))

print(complete_state_map)
print(total_count)
# print(team_state_maps)

############################################################################### 
MAP_STATE_IDS = ["us-ma", "us-wa", "us-ca", "us-or", "us-wi", "us-me", "us-mi", "us-nv", 
 "us-nm", "us-co", "us-wy", "us-ks", "us-ne", "us-ok", "us-mo", "us-il", 
 "us-in", "us-vt", "us-ar", "us-tx", "us-ri", "us-al", "us-ms", "us-nc", 
 "us-va", "us-ia", "us-md", "us-de", "us-pa", "us-nj", "us-ny", "us-id", 
 "us-sd", "us-ct", "us-nh", "us-ky", "us-oh", "us-tn", "us-wv", "us-dc", 
 "us-la", "us-fl", "us-ga", "us-sc", "us-mn", "us-mt", "us-nd", "us-az", 
 "us-ut", "us-hi", "us-ak"]


def createDiffString(diff):
    if diff > 0:
        return str(diff) + "% more than the MLB average"
    elif diff < 0:
        return str(abs(diff)) + "% less than the MLB average"
    else:
        return "same as the MLB average"

def findPercentageDiff(num1, num2):
    return round((((num1 - num2) / num2) * 100), 2)    


def addComparisonToAverage(chartsArrayTeam, chartsArrayTotal): 
    for stateTeam in chartsArrayTeam:
        for stateTotal in chartsArrayTotal:
            if(stateTeam["hc-key"] == stateTotal["hc-key"]):
                print(createDiffString(findPercentageDiff(stateTeam["value"], stateTotal["value"])))
                diff = findPercentageDiff(stateTeam["value"], stateTotal["value"])
                diffString = createDiffString(diff)
                stateTeam["percent"] = stateTeam["value"]
                stateTeam["value"] = diff
                stateTeam["diff-string"] = diffString
                continue
        continue;

    return chartsArrayTeam


def createCompleteChartsArray(state_map):
    total_num = 0
    for state in state_map:
        state_string = "us-" + state.lower()
        if state_string in MAP_STATE_IDS:
            total_num += state_map[state]


    print("total num: " + str(total_num))
    chartsArray = []
    for state in state_map:
        state_string = "us-" + state.lower()
        if state_string in MAP_STATE_IDS:
            percentage = round((float(state_map[state]) / total_num) * 100, 2)
            chartsArray.append({"hc-key" : state_string,
                                "value" : percentage, 
                                "number" : state_map[state],
                                "state-name": STATES[state]})
        else:
            # do something
            print("NO: " + state)
    return chartsArray

chartsArray = createCompleteChartsArray(complete_state_map)

BOSchartsArray = createCompleteChartsArray(team_state_maps[team])
BOSchartsArray = addComparisonToAverage(BOSchartsArray, chartsArray);

with open(OUTPUT_DIR + '/' + team + '.json', 'w') as outfile:
         json.dump(BOSchartsArray, outfile, sort_keys = True, indent = 4, 
                   ensure_ascii=False)

verifyTeamData(team_to_check_players)
# print(json.dumps(BOSchartsArray))

