import processing.net.*; 
import processing.serial.*;

Serial p;
Client c; 
byte[] bf = new byte[10];
 
void setup() { 
  size(600, 600); 
  
  c = new Client(this, "ec2-54-218-0-72.us-west-2.compute.amazonaws.com", 1337); 
  
  String pn = Serial.list()[0];
  p = new Serial(this, pn, 9600);
} 

void draw() { 
  if (c.available() > 0) { 
    int ct = c.readBytes(bf); 
    if (ct > 0 ) {
      String v = new String(bf);

      if(v.charAt(0) == "0".charAt(0)) {
        //fill(0);                     
        p.write('L');  
      } else { 
        //fill(204);                    
        p.write('H');  
      }
      //rect(200, 200, 200, 200); 
    } 
  } 
} 
