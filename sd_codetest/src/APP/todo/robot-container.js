import React from 'react';
import { RobotModel } from './robot-model.js'


robotChanged(){
 var answer = "";
 if(this.state.type == "start"){
   answer = <div>Hello {this.state.textvalue}, Welcome to the Government Service! How can I help you today</div>;
 }else if(this.state.type == "question"){
   answer = <div>Sure, here is the link you are after <a href = "http://govt.org.au/rates">Government Service</a></div>;
 }else if(this.state.type == "init"){
   answer = <div> Please press start to ask question</div>;
 }else {
   answer = <div>Sorry, I cant undertand what you mean</div>;
 }
 return answer
}
