import React, { Component } from 'react';
import { connect} from 'react-redux';
import './App.css';

import GuessedWords from './Components/GuessedWords/GuessedWords';
import Congrats from './Components/Congrats/Congrats';
import { getSecretWord} from './actions';
import Input from './Input/Input';
import TotalGuesses from './Components/TotalGuesses/TotalGuesses';
export class UnconnectedApp extends Component {
  componentDidMount(){
    //get the secret word 
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
        <TotalGuesses totalGuesses={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}



export default connect(mapStateToProps,{getSecretWord})(UnconnectedApp);
