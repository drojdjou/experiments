#include "drawingapp.h"

struct Ball {
    ofPoint pos;
    int alpha;
    int ttl;
    float force;
    float direction;
};

vector<Ball> balls;

Ball getBall(float x, float y) {
    Ball ball;
    ball.pos.x = x;
    ball.pos.y = y;
    ball.ttl = ofRandom(128, 255);
    ball.force = ofRandom(2, 3);
    ball.direction = ofRandom(-2, 2);
    return ball;
}

float gravity = 0.05;
bool fullscreen = false;

//--------------------------------------------------------------
void DrawingApp::setup(){
	ofEnableSmoothing();
    ofSetFrameRate(60);
}

//--------------------------------------------------------------
void DrawingApp::update(){
    for (int i=0; i<balls.size(); i++)
        if(balls[i].ttl <= 0) balls.erase(balls.begin() + i);
}

//--------------------------------------------------------------
void DrawingApp::draw(){
	ofBackground(0);

    for (int i=0; i<balls.size(); i++) {
        Ball * b = &balls[i];
        b->ttl--;

        int a = (b->ttl < 255) ? b->ttl / 2 : 128;
        float s = (b->ttl < 255) ? b->ttl / 10.0 : 25.0;

        b->pos.y -= b->force;
        b->force -= gravity;

        b->pos.x += b->direction;

        ofSetColor(255, 0, 0, a);
        ofCircle(b->pos.x, b->pos.y, s);
    }
}

//--------------------------------------------------------------
void DrawingApp::keyPressed(int key){
    // F key to toggle fullscreen
    if(key == 102) {
        fullscreen = !fullscreen;
        ofSetFullscreen(fullscreen);
    }
}

//--------------------------------------------------------------
void DrawingApp::keyReleased(int key){
}

//--------------------------------------------------------------
void DrawingApp::mouseMoved(int x, int y){
    for (int i=0; i<10; i++) 
        balls.push_back(getBall(x + ofRandom(-20, 20), y + ofRandom(-20, 20)));
}

//--------------------------------------------------------------
void DrawingApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void DrawingApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void DrawingApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void DrawingApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void DrawingApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void DrawingApp::dragEvent(ofDragInfo dragInfo){ 

}