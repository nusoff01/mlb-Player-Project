# town_to_county.py
# created by: Nick Usoff
# 
# starting from a JSON list of id, town, stateAbbreviation, and add in each
# of the corresponding counties


# Constants
SEARCH_BASE = "http://searches.rootsweb.ancestry.com/cgi-bin/townco/townco.pl"

from bs4 import BeautifulSoup
import os
import urllib2
import grequests
import sys
import requests



# Utilities


# Functions

def singleRequest(town, stateAb):
	url = SEARCH_BASE
	data = dict(Townname=town, Statein=stateAb)

	r = requests.post(url, data=data, allow_redirects=True)
	return (r.content)


def parseCountyResponse(countyPage):
	soup = BeautifulSoup(countyPage, "html.parser")
	try:
		county = soup.findAll('pre')[0].findAll("a")[0].contents[0]
		return (str(county))
	except:
		return ""

# Execution

resp = singleRequest("Acton", "MA")
print(parseCountyResponse(resp))
# print response

