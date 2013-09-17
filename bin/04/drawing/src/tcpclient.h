#pragma once

#include "ofMain.h"
#include "ofxNetwork.h"

class TcpClient {
	public:
		TcpClient();

		float cx;
		float cy;

		bool isDrawn;

		void setup();
		void update();
		void draw();
};
