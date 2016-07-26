# extract_state_data.py
# created by: Nick Usoff
# created on: 7-24-2016

import re
import json

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
    # 'AB': 'Alberta, Canada',
    # 'BC': 'British Columbia, Canada',
    # 'MB': 'Manitoba, Canada',
    # 'NB': 'New Brunswick, Canada',
    # 'NL': 'Newfoundland and Labrador, Canada',
    # 'NT': 'Northwest Territories, Canada',
    # 'NS': 'Nova Scotia, Canada',
    # 'NU': 'Nunavut, Canada',
    # 'ON': 'Ontario, Canada',
    # 'PE': 'Prince Edward Island, Canada',
    # 'QC': 'Quebec, Canada',
    # 'SK': 'Saskatchewan, Canada',
    # 'YT': 'Yukon, Canada',
    'CAN': "Canada"
}

def extractState(player_from):
    # St. Bernard School (Montville, CT)
    state_match = re.search(r'(\S\S)\)$', player_from, re.M|re.I)
    if(state_match):
        return state_match.group(1)
    else: #TODO error throw
        return ""

def createStateMap(player_array):
    player_count = 0
    state_map = {}
    for year in player_array:
        year_players = player_array[year]
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
    print(player_count)
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
############################################################################### 
jsonObj = {}
with open('BOS.json') as data_file:    
    jsonObj = json.load(data_file)

bos_players = jsonObj["BOS"]
# for player_id in bos_players:
#   player = bos_players[player_id]
#   print(extractState(player["player_from"]))

state_map = createStateMap(bos_players)
state_map = convertToCanada(state_map)
state_count = 0
for state in state_map:
    state_count += 1

sorted_states = sorted(state_map, key=state_map.get)
for state in sorted_states:
    state_name = ""
    try: 
        state_name = STATES[state]
    except KeyError:
        state_name = state_name
    if(state_name == ""):
        try:
            state_name = PROV_TERR[state] + ", Canada"
        except KeyError:
            state_name = state
    print(state_name + ": " + str(state_map[state]))