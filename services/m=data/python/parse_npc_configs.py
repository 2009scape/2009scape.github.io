'''
Rip only the required information from the
source json to make things load  faster
'''

import json

with open('npc_configs.json') as f:
  data = json.load(f)

n = {}

i = 0

while i < len(data):
    print(data[i]['id'])
    if 'name' in data[i]:
        if n.get(data[i]['name']):
            n[data[i]['name']] = n[data[i]['name']] + "," + data[i]['id']
        else:
            n[data[i]['name']] = data[i]['id']
    i += 1

with open("npc_config.json", "w") as outfile:
    json.dump(n, outfile)