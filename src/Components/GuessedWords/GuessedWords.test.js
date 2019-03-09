import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GuessedWords from './GuessedWords';


const defaultProps = {
   guessedWords: [{ guessedWord: 'train', letterMatchCount: 3}]
};

const setup = (props={})=> {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps } />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', ()=> {
   test('renders without error', ()=> {
     const wrapper = setup({ guessedWords: [] });
     const component = findByTestAttr(wrapper, 'component-guessed-words');
     expect(component.length).toBe(1);
   });

   test('renders instructions to guess a word', ()=> {

   });
});

describe('if there are words guessed', ()=>{

});