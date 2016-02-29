#!/usr/bin/python

import os
import json

misns = []
#misn_ids = os.listdir('/home/ltratcliff/Documents/NITF/screener')
misn_ids = os.listdir('.')

print 'Content-Type: application/json\n\n'
print json.dumps(misn_ids)

