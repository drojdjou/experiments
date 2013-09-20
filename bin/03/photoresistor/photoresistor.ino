// Arduino Projects Book Chapter 04
const int greenLEDPin = 9;
const int redLEDPin = 11;
const int blueLEDPin = 10;

const int redSensorPin = A0;
const int greenSensorPin = A1;
const int blueSensorPin = A2;

int redSensorValue = 0;
int greenSensorValue = 0;
int blueSensorValue = 0;

void setup() {
  Serial.begin(9600);
  
  pinMode(greenLEDPin, OUTPUT);
  pinMode(redLEDPin, OUTPUT);
  pinMode(blueLEDPin, OUTPUT);
}

void loop() {
  redSensorValue = analogRead(redSensorPin);
  delay(5);
  greenSensorValue = analogRead(greenSensorPin);
  delay(5);
  blueSensorValue = analogRead(blueSensorPin);
  
  Serial.print("Red:");
  Serial.print(redSensorValue / 4);
  Serial.print("\t Green:");
  Serial.print(greenSensorValue / 4);
  Serial.print("\t Blue:");
  Serial.print(blueSensorValue / 4);
  Serial.print("\n");
  
  analogWrite(redLEDPin, redSensorValue / 2);
  analogWrite(greenLEDPin, greenSensorValue / 2);
  analogWrite(blueLEDPin, blueSensorValue / 2);
}
