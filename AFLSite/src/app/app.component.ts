import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

     // General

export class AppComponent {
  title = 'AFLSite';

  
 show: boolean = true;
 speak: boolean = false;


showComponent(){
  this.show = !this.show;
}

toggleTTS() 
{ 
  if (this.speak === false){
  this.speak = true
  }
  else {
  this.speak = false
  }
}

sayText()
{
  var speak = window.getSelection().toString(); 
  if(this.speak)
  {
  var msg = new SpeechSynthesisUtterance(speak);
  window.speechSynthesis.speak(msg);
  }
 speak;


}


}