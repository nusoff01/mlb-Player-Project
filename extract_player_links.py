# extract_player_links.py
# created by Nick Usoff
# 
# From a baseball-reference letter page, extract the link for every player.
# 	Each link needs to be unique

from bs4 import BeautifulSoup
import os
import urllib2
import grequests
import sys
import requests
import json
# CONSTANTS

SEARCH_BASE = "http://www.baseball-reference.com/players/"

# UTILS

def findAllAMap (bsObj):
	
	return bsObj.findAll("a");

def add(c, x):
  return chr(ord(c)+x)

def flatten_2_deep(arr):
	ret_arr = []
	for sub_arr in arr:
		for e in sub_arr:
			ret_arr.append(e)
	return ret_arr


# FUNCTIONS

def get_player_list_page(letter):
	url = SEARCH_BASE + letter + "/"


	r = requests.get(url, allow_redirects=True)
	# print(r.content)
	return r.content

def parse_player_list_page(letter_page):
	soup = BeautifulSoup(letter_page, "html.parser")
	try:
		pres = soup.findAll("pre")
		
		links = map(findAllAMap, pres)
		flattened_links = flatten_2_deep(links)
		print(flattened_links)
		return flattened_links
	    
		# 	print(pre.findAll("a").contents[0])
	except Exception, e:
		print(e)

def create_dict_from_links(links):
	player_dict = {}
	for link in links:
		try:
			name = str(link.contents[0])
			href = str(link['href'])
			player_dict[href] = name
			print(name)
		except Exception, e:
			print("something went wrong, killing call to create_dict_from_links")
			return e
	return player_dict

def write_dict_to_file(dict, path):
	with open(path, 'w') as f:
	    json.dump(dict, f)

# EXECUTION

player_dict = {}


for i in range(0,26):
	letter = add('a', i)
	print(letter)
	page = get_player_list_page(letter)
	links = parse_player_list_page(page)
	pd = create_dict_from_links(links)
	player_dict.update(pd)
	
print(len(player_dict))
write_dict_to_file(player_dict, "output")
