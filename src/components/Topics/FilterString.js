import React, {Component} from 'react'

class FilterString extends Component {

    constructor(){
        super()
        this.state={
            unFilteredArray: ['mouse', 'keyboard', 'monitor', 'headset'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val 
           })
    }

    filterMethod(userInput){
        let parts = this.state.unFilteredArray
        let filteredArray = []

        for ( let i = 0; i < parts.length; i++ ) {
            if ( parts[i].includes(userInput) ) {
              filteredArray.push(parts[i]);
            }
          }
      
          this.setState({
              filteredArray
           });

    }

    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className='inputLine' onChange={ e => this.handleChange(e.target.value) } />
                <button className='confirmationButton' onClick={ () => this.filterMethod(this.state.userInput)} >Filter String</button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>    

        )
    }
}

export default FilterString