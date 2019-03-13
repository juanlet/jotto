import React from 'react';
import {shallow, mount} from 'enzyme';
import  {Provider} from 'react-redux';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';
import { UnconnectedInput } from './Input';

//CONNECTED COMPONENT
//testing redux component
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
 // solution for redux 6
 //   const wrapper = mount(<Provider store={store}><Input/></Provider>,);
 //solution for redux 5.0.7
 const wrapper = shallow(
    <Input store={store} />
    ).dive();
    return wrapper;
}


describe('render', () => {
    describe('word has not been guessed', () => {
         
        let wrapper;

        beforeEach(() => {
          const initialState = { success: false};
          wrapper = setup(initialState);    
        });

        test('renders component without error', () => {
             const component = findByTestAttr(wrapper,'component-input');
             expect(component.length).toBe(1); 
        });

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper,'input-box');
            expect(inputBox.length).toBe(1); 

        });

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper,'submit-box');
            expect(submitButton.length).toBe(1); 

        });

    });

    describe('word has been guessed',() => {
        let wrapper;

        beforeEach(() => {
            const initialState = { success: true};
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper,'guess-success');
            expect(component.length).toBe(1);
        });

        test('does not render input box', () => {
            const component = findByTestAttr(wrapper,'input-success');
            expect(component.length).toBe(0);
        });

        test('does not render submit button', () => {
            const component = findByTestAttr(wrapper,'submit-box');
            expect(component.length).toBe(0);
        });

    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
       const success = true;
       const wrapper = setup({ success });
       const successProp = wrapper.instance().props.success;
       expect(successProp).toBe(success); 
    });

    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});


describe('`guessWord` action creator call', () => {
   let guessWordMock;
   let wrapper;
   let props;
   const guessedWord = 'train';

   beforeEach(() => {
    guessWordMock = jest.fn(); 
    props = {
        guessWord: guessWordMock
    };   
    wrapper =  shallow(<UnconnectedInput {...props}/>);

    //add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord};

    //simulate click
    const buttonComponent = findByTestAttr(wrapper, 'submit-box');
     buttonComponent.simulate('click',{ preventDefault(){} });
   });

   test('Checks if action creator runs on submit click', () => {
        
     const unconnectedInputCallCount = guessWordMock.mock.calls.length;
       
     expect(unconnectedInputCallCount).toBe(1);
    });


    test('Checks if action creator runs with correct args', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });

    test('input box clears on submit', () => {
        expect(wrapper.instance().inputBox.current.value).toBe('');
    });

});
