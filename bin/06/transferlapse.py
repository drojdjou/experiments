#!/usr/bin/env python

import time, os, sys, signal, urllib
from ftplib import FTP

host = "192.168.6.153"
folder = "/Users/bartekdrozdz/experiments/html/06/photos"
logurl = "http://192.168.6.153/experiments/html/06/log/write.php"

retryTime = 2
corruptedFiles = []

def log(level, message):
	urllib.urlopen("%s?lv=%s&ms=%s" % (logurl, level, message))
	# print "timelapse.py > [%s] %s" % (level, message)

def connect():
	global ftp
	
	try:
		log("info", "Connecting to FTP %s" % host)
		ftp = FTP(host, sys.argv[1], sys.argv[2], "", 2)
		ftp.cwd(folder)
	except Exception, e:
		log("error", "Unable to connect to FTP. Trying again in %isec. Error: %s" % (retryTime, str(e)))
   		time.sleep(retryTime)
   		connect()
   	else:
   		watch()

def watch():
	log("info", "Watching folder started");

	loop = True

	while (loop):
		time.sleep(0.5)
		for f in os.listdir("."):

			if (f.endswith("~")):
				# log("info", "Omitting temp file %s" % f);
				continue

			try:
				ftp.storbinary('STOR %s' % f, open(f, 'rb'))
			except IOError, ioe:
				if f not in corruptedFiles:
					corruptedFiles.append(f)
					log("error", "IOError on %s: %s" % (f, ioe))
			except Exception, e:
				log("error", "File transfer error: %s" % str(e))
				loop = False
   				break
   			else:
				t = time.ctime(os.path.getctime(f))
				os.system('rm %s' % f)
				log("info", "Transfer: %s %s" % (f, t))

	log("warn", "Exited watch loop, attempting to reconnect")
	connect()

def finalize(signal, frame):
	try:
		ftp.quit()
	except Exception, e:
		# There was no FTP connection made
		pass

	log("warn", "Terminating with signal: %i" % signal)
	sys.exit()

# ### ### ###

if(len(sys.argv) < 2):
	print "Usage timelapse.py user passwd"
	sys.exit()

signal.signal(signal.SIGINT, finalize)
signal.signal(signal.SIGHUP, finalize)
signal.signal(signal.SIGTERM, finalize)
# signal.signal(signal.SIGKILL, finalize)

connect()

