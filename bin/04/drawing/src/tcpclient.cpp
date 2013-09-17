#include "tcpclient.h"

ofxTCPClient tcp;

TcpClient::TcpClient() {
    cx = 0;
    cy = 0;
}

void TcpClient::setup(){
    tcp.setup("ec2-54-218-0-72.us-west-2.compute.amazonaws.com", 1337);

    tcp.setMessageDelimiter("\n");
    tcp.setVerbose(true);
}

void TcpClient::update(){
    if(tcp.isConnected()) {
        string str = tcp.receive();
        if( str.length() > 0 ){
            printf("%s\n", str.c_str());
        }
    }
}