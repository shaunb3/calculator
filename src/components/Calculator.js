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
    previousNumber:undefined,
    calc:"0"
  }

  handleClick=(event)=>{
    console.log(event.target.innerText)
    
    
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
            previousNumber:undefined,
            history:undefined
            })
            break;

          case "=": 
          
          if(this.state.previousNumber===undefined){
 
          }
          console.log("history "+this.state.history)
          console.log("current "+this.state.currentNumber)
          console.log("previous "+this.state.previousNumber)

         


          this.setState({
             
            currentNumber: eval(this.state.previousNumber + this.state.currentNumber),
            previousNumber:undefined,
            history:this.state.history + this.state.currentNumber
            })
            break;

            case ".":
              

              if(this.state.currentNumber.includes(".")){
                  this.setState({currentNumber:this.state.currentNumber})
              }
              else{
                this.setState({currentNumber:this.state.currentNumber+"."})
              }
            break;

            
            case "-":
            if(this.state.currentNumber==="-"){
              
            }
            else if(this.state.previousNumber===undefined){
                  this.setState({previousNumber:this.state.currentNumber,
                currentNumber:event.target.innerText,
                history:this.state.currentNumber
                })
              }
              
              else{
                  this.setState({previousNumber:this.state.previousNumber   +this.state.currentNumber,
                  currentNumber:event.target.innerText,
                  history:this.state.previousNumber + this.state.currentNumber
                })
              }
            break



                          

            default:

 

             if(this.state.currentNumber==="+" || this.state.currentNumber==="*" || this.state.currentNumber==="/" ){



                this.setState({
                  //currentNumber:this.state.currentNumber+ event.target.innerText
                  currentNumber: event.target.innerText
              
                })
            }

           

            else if(this.state.currentNumber==="0"){
              this.setState({
              currentNumber:event.target.innerText
              
              })
            }

            else{

              if(this.state.previousNumber===undefined){
                  this.setState({previousNumber:this.state.currentNumber,
                currentNumber:event.target.innerText,
                history:this.state.currentNumber
                })
              }
              
              else{
                  this.setState({previousNumber:this.state.previousNumber   +this.state.currentNumber,
                  currentNumber:event.target.innerText,
                  history:this.state.previousNumber + this.state.currentNumber
                })
              }
                   
            }     
              
              
        
            
        }
            
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