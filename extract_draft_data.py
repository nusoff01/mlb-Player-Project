# extract_draft_schools.py

from bs4 import BeautifulSoup
import os
import urllib2
import grequests
import sys
import requests
import json
import re

BR_BASE = "http://www.baseball-reference.com"
SEARCH_BASE = "http://www.baseball-reference.com/draft/?query_type=franch_year&team_ID="
PLAYER_LINK_BASE = "/register/player.cgi?id="

OUTPUT_DIR = "teamJSON"

TEAM_IDS = ["ANA", "HOU", "OAK", "TOR", "ATL", "MIL", "STL", 
            "CHC", "TBD", "ARI", "LAD", "SFG", "CLE", "SEA", 
            "FLA", "NYM", "WSN", "BAL", "SDP", "PHI", "PIT", 
            "TEX", "BOS", "CIN", "COL", "KCR", "DET", "MIN", 
            "CHW", "NYY"]
START_YEAR = 1986
END_YEAR = 2016

def getSearchLink(team_id, year_id):
    return SEARCH_BASE + team_id + "&year_ID=" + year_id + "&draft_type=junreg"

def getDraftPage(link):
    r = requests.get(link, allow_redirects=True)
    return r.content

def extractPlayers(page, team_id, year):
    soup = BeautifulSoup(page, "html.parser")
    players = {}

    try:
        table = soup.find("table", {"id": "draft_stats"});
        col_nums = findColNumbers(table)
        # print(col_nums)
        elems = table.find("tbody").findAll("tr")
        # print(len(elems))
        for e in elems:
            player_info = extractPlayerInfo(col_nums, e)
            if(len(player_info) < 4):
                continue
            player_info["team"] = team_id
            player_info["year"] = year
            players[player_info["player_id"]] = jsonifyPlayer(player_info)
            # players.append(player_info)
        return players
    except Exception, e:
        print(e)

def findColNumbers(table):
    headers = table.find("thead").findAll("th")
    player_slot = -1
    from_slot = -1
    from_type_slot = -1
    i = 0
    num_headers = len(headers)
    while(i < num_headers):
        h = headers[i]
        if(h["data-stat"] == "player"):
            if(player_slot == -1):
                player_slot = i
            else:
                print("this should never happen")
                # should throw error
        if(h["data-stat"] == "came_from"):
            if(from_slot == -1):
                from_slot = i
            else:
                print("this should never happen")
        if(h["data-stat"] == "from_type"):
            if(from_type_slot == -1):
                from_type_slot = i
            else:
                print("this should never happen")
        i += 1
    return {"player_slot": player_slot, "from_slot": from_slot, "from_type_slot": from_type_slot}

def extractPlayerInfo(col_nums, row):
    player_name = ""
    player_from = ""
    player_from_type = ""
    player_link = ""

    cells = row.findAll("td")
    i = 0
    cell_length = len(cells)
    while (i < cell_length):
        cell = cells[i]
        if(i == col_nums["player_slot"]):
            player_name = extractPlayerName(cell)
            player_id = extractPlayerId(cell)
        if(i == col_nums["from_slot"]):
            player_from = cell.get_text()
        if(i == col_nums["from_type_slot"]):
            player_from_type = cell.get_text()
        i += 1
    if player_id == "":
        return {"error": "player link not found!!"}
    return { "player_id": player_id,
             "player_name": player_name, 
             "player_from": player_from, 
             "player_from_type": player_from_type }

def extractPlayerId(player_cell):
    links = player_cell.findAll("a")
    if(len(links) == 0):
        return ""
    link = links[len(links) - 1]['href']
    player_id_match = re.search(r'id=(\S*)$', link, re.M|re.I)
    if(player_id_match):
        return player_id_match.group(1)
    return ""

def extractPlayerName(player_cell):
    name_raw = player_cell.get_text()
    name_raw = name_raw.replace("(minors)", "")
    name_raw = name_raw.replace("*", "")
    return name_raw.rstrip().lstrip()

def extractState(player_from):
    # St. Bernard School (Montville, CT)
    state_match = re.search(r'(\S\S)\)$', player_from, re.M|re.I)
    if(state_match):
        return state_match.group(1)
    else: #TODO error throw
        return ""

###############################################################################

def verifyData(player_array):
    player_count = 0
    players_well_formed = 0
    for player in player_array:
        player_count += 1
        if(checkPlayer(player)):
            players_well_formed += 1
    print("there are " + str(player_count) + " players. " + 
          str(players_well_formed) + " are well formed")

# TODO improve this
def checkPlayer(player):
    return (len(player) == 6)

def jsonifyPlayer(player):
    return {
        "player_name" : player["player_name"],
        "team" : player["team"],
        "player_from_type" : player["player_from_type"],
        "player_from" : player["player_from"],
        "year" : player["year"] 
    }
 
###############################################################################
TEAM_IDS = ["PHI"]
START_YEAR = 1989
END_YEAR = 1989
OUTPUT_DIR = "temp"


for team in TEAM_IDS:
    print("working on team " + team)
    year = START_YEAR
    player_obj = {}
    player_obj[team] = {}
    while(year <= END_YEAR):  
        print("working on year " + str(year))
        page = getDraftPage(getSearchLink(team, str(year)))
        year_obj = extractPlayers(page, team, str(year))
        player_obj[team][str(year)] = year_obj
        year += 1

    with open(OUTPUT_DIR + '/' + team + '.json', 'w') as outfile:
         json.dump(player_obj, outfile, sort_keys = True, indent = 4, 
                   ensure_ascii=False)

# print(json.dumps(player_obj))

# verifyData(player_array)s
