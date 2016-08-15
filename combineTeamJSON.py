import json
TEAM_IDS = ["ANA", "HOU", "OAK", "TOR", "ATL", "MIL", "STL", 
            "CHC", "TBD", "ARI", "LAD", "SFG", "CLE", "SEA", 
            "FLA", "NYM", "WSN", "BAL", "SDP", "PHI", "PIT", 
            "TEX", "BOS", "CIN", "COL", "KCR", "DET", "MIN", 
            "CHW", "NYY"]

combinedFile = {}
OUTPUT_DIR = "teamStates"

for team_id in TEAM_IDS:
    with open('teamStates/' + team_id + '.json') as data_file:    
        jsonObj = json.load(data_file)
        combinedFile[team_id] = jsonObj

with open(OUTPUT_DIR + '/combined' + '.json', 'w') as outfile:
         json.dump(combinedFile, outfile, sort_keys = True, indent = 4, 
                   ensure_ascii=False)

print(combinedFile)