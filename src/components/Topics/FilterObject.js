import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
            unFilteredArray: [
                {name: 'Johnny',
                age: 21}, 

                {name: 'Bobby', 
                height: 187}, 

                {name: 'Franky',
                favoriteSport:'tennis'}, 

                {name: 'Billy', 
                favoriteSport: 'soccer'}, 

                {name: 'Greg',
                favoriteSport: 'basketball'}
            ],

            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    filterMethod(prop){
        let kids = this.state.unFilteredArray;
        let filteredArray = [];
    
        for ( let i = 0; i < kids.length; i++ ) {
          if ( kids[i].hasOwnProperty(prop) ) {
            filteredArray.push(kids[i]);
          }
        }

        this.setState({
            filteredArray
        })
    }

    render(){
        return(
            <div className='puzzleBox filterObjPB'>
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterMethod(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }

}

export default FilterObject