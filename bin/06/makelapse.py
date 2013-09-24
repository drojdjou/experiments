#!/usr/bin/env python

import subprocess

# cmd = "raspistill -tl 2000 -w 960 -h 540 -t 200000 -o image%d.jpg"
cmd = "raspistill -t 0 -w 960 -h 540 -o image.jpg"
rc = subprocess.call(cmd, shell=True)
print rc