#include "ofMain.h"
#include "drawingapp.h"

//========================================================================
int main( ) {
	// OF_FULLSCREEN
	ofSetupOpenGL(1024, 768, OF_WINDOW);
	ofRunApp( new DrawingApp());
}
