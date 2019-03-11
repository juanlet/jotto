import React from 'react';
import {shallow, mount} from 'enzyme';
import  {Provider} from 'react-redux';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';


//testing redux component
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
 // solution for redux 6
 //   const wrapper = mount(<Provider store={store}><Input/></Provider>,);
 //solution for redux 5.0.7
 const wrapper = shallow(
    <Input store={store} />
    ).dive();

}


describe('render', () => {
    describe('word has not been guessed', () => {
         
        test('renders component without error', () => {
            setup();   
        });

        test('renders input box', () => {
            
        });

        test('renders submit button', () => {
            
        });

    });

    describe('word has been guessed',() => {
        test('renders component without error', () => {
            
        });

        test('does not render input box', () => {
            
        });

        test('does not render submit button', () => {
            
        });

    });
});

describe('update state', () => {
    
});
