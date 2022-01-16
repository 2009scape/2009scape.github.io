import json

with open('item_configs.json') as f:
  data = json.load(f)

n = {}

i = 0

while i < len(data):
    print(data[i]['id'])
    if 'name' in data[i]:
        n[data[i]['id']] = data[i]['name']
    i += 1

with open("item_config.json", "w") as outfile:
    json.dump(n, outfile)