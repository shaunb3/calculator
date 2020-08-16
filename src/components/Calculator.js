import React, {Component} from 'react';
import Button from './Button'
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const digits = [
  {id:"clear",no:"AC",name:"AC"},
  {id:"divide",no:"/",name:"/"},
  {id:"multiply",no:"*",name:"*"},
  {id:"nine",no:9,name:"9"},
  {id:"eight",no:8,name:"8"},
  {id:"seven",no:7,name:"7"},
  {id:"subtract",no:"-",name:"-"},
  {id:"six",no:6,name:"6"},
  {id:"five",no:5,name:"5"},
  {id:"four",no:4,name:"4"},
  {id:"add",no:"+",name:"+"},
  {id:"three",no:3,name:"3"},
  {id:"two",no:2,name:"2"},  
  {id:"one",no:1,name:"1"},
  {id:"equals",no:"=",name:"="},
  {id:"zero",no:0,name:"0"},
  {id:"decimal",no:".",name:"."}
   
]


class Calculator extends Component{

  state={
    history:"0",
    currentDisplay:"0",
    currentNumber:"0",
    lastPressed:undefined,
    calc:"0",
    prevNumber:"0"
  }


  handleClick=(event)=>{
    console.log(event.target.innerText)
    
    this.setState({lastPressed:event.target.innerText})
    

      if(isNaN(event.target.innerText)=== false){

        if(this.state.currentNumber === "0"){
          this.setState({
          currentNumber:event.target.innerText
          })
        }

        else{
              this.setState({

                currentNumber: this.state.currentNumber + event.target.innerText,

            })
        }

 
      }


      else{
        switch(event.target.innerText){
          
          case "AC": this.setState({
            currentNumber: "0",
            history:"0"
            })
            break;

          case "=": 
          
          
          console.log("history "+this.state.history)
          console.log("current "+this.state.currentNumber)

          this.setState({
             
            currentNumber: eval( this.state.currentNumber),
            history:this.state.history + this.state.currentNumber
            })
            break;

            case ".":
            const {currentNumber} = this.state

            let split = currentNumber.split(/[\+\-\*\/]/)
            let last =split.slice(-1)[0]
             // console.log(split)
             // console.log("last "+ last)

              if(!last.includes(".")){
                this.setState({currentNumber:currentNumber+ event.target.innerText})
              }
            
            break;


            case "+":
            case "*":
            case "/":
            case "-":

 
            

             if(this.state.lastPressed===event.target.innerText){
              
            }
            else{
                this.setState({currentNumber:this.state.currentNumber+ event.target.innerText})

            }
            
            break;            

        default:

        
            
        }
            
      }
  }
    
    
 componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.currentNumber !== prevState.currentNumber) {
    if(String(this.state.currentNumber).match(/[\+\-\*\/]{3,}/)){
        console.log("fuck")
        this.setState({currentNumber:this.state.currentNumber.replace(/[\+\-\*\/]{3,}/, this.state.lastPressed)})
      }

      console.log("currentNo"+this.state.currentNumber)
  }


}

  
  //---------------------------------------
  render(){
     const digitArr= digits.map((item)=>{
        return(
          <Button id={item.id} number={item.no} name={item.name} key={item.id} handleClick={this.handleClick}/>
        )
      })
  //---------------------------------------
    return(
      <div className="calc-con">
      <h4 className="history">{this.state.history}</h4>
      <div id="display">{this.state.currentNumber}</div>
      {digitArr}
      </div>
    )
  }
  
}

export default Calculator