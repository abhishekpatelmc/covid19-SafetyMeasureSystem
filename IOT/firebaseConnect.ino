#include <ESP8266WiFi.h>  
#include <FirebaseArduino.h>

#define FIREBASE_HOST "xxxxx"  
#define FIREBASE_AUTH "xxxx"  
#define WIFI_SSID "xxx"  
#define WIFI_PASSWORD "xxxx"

void setup() {
 Serial.begin(9600);
 // connect to wifi.  
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);  
  Serial.print("connecting");  
  while (WiFi.status() != WL_CONNECTED) {  
    Serial.print(".");  
    delay(500);  
  }  
  Serial.println();  
  Serial.print("connected: ");  
  Serial.println(WiFi.localIP());  
    
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH)
 pinMode(14, INPUT);// set pin as input

}

void loop() {
  
  int detect = digitalRead(14);// read obstacle status and store it into "detect"
  if(detect == LOW){
    
   Serial.println("YOUR SAFE");
   Firebase.setString("message", "YOUR SAFE");
   // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /message failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  delay(1000);  
  }else{
    
   Serial.println("YOUR NOT SAFE"); 
   Firebase.setString("message", "YOUR NOT SAFE"); 
   // handle error  
  if (Firebase.failed()) {  
      Serial.print("setting /message failed:");  
      Serial.println(Firebase.error());    
      return;  
  }  
  
  }
  delay(1000);
}
