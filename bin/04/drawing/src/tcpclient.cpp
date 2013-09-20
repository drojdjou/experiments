#include "tcpclient.h"

ofxTCPClient tcp;



std::vector<std::string> &split(const std::string &s, char delim, std::vector<std::string> &elems) {
    std::stringstream ss(s);
    std::string item;
    while (std::getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}


std::vector<std::string> split(const std::string &s, char delim) {
    std::vector<std::string> elems;
    split(s, delim, elems);
    return elems;
}

TcpClient::TcpClient() {
    isDrawn = true;
    cx = 0;
    cy = 0;
}

void TcpClient::setup(){
    tcp.setup("ec2-54-218-0-72.us-west-2.compute.amazonaws.com", 1337);
    tcp.setMessageDelimiter("\n");
}

void TcpClient::update(){
    if(tcp.isConnected()) {
        string str = tcp.receive();
        if( str.length() > 0 ){
            std::vector<std::string> values = split(str, ':');
            cx = atof(values[0].c_str());
            cy = atof(values[1].c_str());
            isDrawn = false;
        }
    }
}

void TcpClient::draw(){
    isDrawn = true;
}