import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr, checkProps} from '../../../test/testUtils';
import TotalGuesses from './TotalGuesses';
import Input,{UnconnectedInput} from '../../Input/Input';
import { storeFactory} from '../../../test/testUtils';

const defaultProps = {
    totalGuesses: 3
 };

const setup = (initialState = null) => {
    initialState = initialState? initialState: {totalGuesses: 0};
    let wrapper = shallow(<TotalGuesses {...initialState} />);
    return wrapper;
}

    
    test('render correctly', () => {
        let wrapper = setup();

        let component = findByTestAttr(wrapper, 'total-guesses-box');

        expect(component.length).toBe(1);
    });

    test('does not throw proptypes warning', () => {
      
        checkProps(TotalGuesses,defaultProps);
    
    });

    test('displays the correct guess count', () => {
         
   /*      let wrapper = setup();

        let store = storeFactory({success: false});
        
        const guessWordMock = jest.fn(); 
        const props = {
            guessWord: guessWordMock
        };   

        //fill input 
        let inputWrapper = shallow(<UnconnectedInput store={store} {...props} />);
        inputWrapper.instance().inputBox.current = {value: "casa"};
 
        //trigger button click
 
        const buttonComponent = findByTestAttr(inputWrapper, 'submit-box');
        
   

        buttonComponent.simulate('click',{ preventDefault(){} });

        //check if count has incremented
        let guessCount = findByTestAttr(wrapper,"total-guesses-count");
        expect(guessCount).toBe(1); */
        const totalGuesses = 3;
        let wrapper= setup({totalGuesses });
        let component = findByTestAttr(wrapper,"total-guesses-count");
        expect(component.text()).toContain(totalGuesses.toString());
    });


