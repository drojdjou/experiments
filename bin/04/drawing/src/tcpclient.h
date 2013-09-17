#pragma once

#include "ofMain.h"
#include "ofxNetwork.h"

class TcpClient {
	public:
		TcpClient();

		float cx;
		float cy;

		void setup();
		void update();
};
