import React, {Component} from 'react';


class Button extends Component{


  


  render(){
    return(
      <div>
        <div id={this.props.id} 
        key={this.props.id} 
        className="digit"
        onClick={this.props.handleClick}>
        {this.props.name}
        </div>
      </div>
    )
  }
  
}

export default Button