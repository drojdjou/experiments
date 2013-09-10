import processing.net.*; 
import processing.serial.*;

Serial p;
Client c; 
byte[] bf = new byte[10];
 
void setup() { 
  size(600, 600); 
  
  c = new Client(this, "127.0.0.1", 1337); 
  
  String pn = Serial.list()[0];
  p = new Serial(this, pn, 9600);
} 

void draw() { 
  if (c.available() > 0) { 
    int ct = c.readBytes(bf); 
    if (ct > 0 ) {
      String v = new String(bf);

      if(v.charAt(0) == "0".charAt(0)) {
        fill(0);                     
        p.write('L');  
      } else { 
        fill(204);                    
        p.write('H');  
      }
      
      rect(200, 200, 200, 200); 
    } 
  } 
} 

/*



void setup() 
{
  size(600, 600);
  String portName = Serial.list()[0];
  myPort = new Serial(this, portName, 9600);
}

void draw() {
  background(255);
  if (mouseOverRect() == true) {  
    fill(204);                    
    myPort.write('H');             
  } 
  else {                       
    fill(0);                     
    myPort.write('L');              
  }
  rect(200, 200, 200, 200);        
  
  if ( myPort.available() > 0) {
    print(myPort.read());         
  }
}

boolean mouseOverRect() { // Test if mouse is over square
  return ((mouseX >= 200) && (mouseX <= 400) && (mouseY >= 200) && (mouseY <= 400));
}

*/
