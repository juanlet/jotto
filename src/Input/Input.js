import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../actions';

export class UnconnectedInput extends Component {
    constructor(props){
        super(props);
         //creating a ref to get text to the input
        this.inputBox = React.createRef();
    }

    submitGuessedWord = (evt) => {
        //prevent default
        evt.preventDefault();
        const guessedWord = this.inputBox.current.value;
        if(guessedWord && guessedWord.length > 0){
            this.props.guessWord(guessedWord);
            this.inputBox.current.value = '';
        }
    }

    render() {
       const content =  this.props.success ?
       <div data-test="guess-success">
       
       </div>
       :
       <form className="form-inline">
            <input data-test="input-box" 
                   ref={this.inputBox} 
                   className="mb-2 mx-sm-3"
                   id="word-guess"
                   type="text"
                   placeholder="enter guess"/>
            <button data-test="submit-box" 
                    type="submit" 
                    className="btn btn-primary mb-2"
                    onClick={this.submitGuessedWord}
                     >Submit
            </button>
        </form>;

      return <div data-test="component-input">
        
          {content}
            </div>;
    }
}
 
const mapStateToProps = ({success}) => {
    return {success};
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput)