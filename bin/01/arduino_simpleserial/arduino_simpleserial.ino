 char val;
 int ledPin = 13;
 
 void setup() {
   pinMode(ledPin, OUTPUT);
   Serial.begin(9600);
 }
 
 void loop() {
   if (Serial.available()) {
     val = Serial.read();
   
     if (val == 'H') {
       digitalWrite(ledPin, HIGH); 
     } else {
       digitalWrite(ledPin, LOW); 
     }
   }
 }
