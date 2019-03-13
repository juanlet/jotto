import React from 'react';
import { shallow } from 'enzyme';
import {findByTestAttr} from '../../../test/testUtils';
import TotalGuesses from './TotalGuesses';

const setup = () => {
    let initialState = {totalGuesses: 3};
    let wrapper = shallow(<TotalGuesses {...initialState} />);
    return wrapper;
}

    
    test('render correctly', () => {
        let wrapper = setup();

        let component = findByTestAttr(wrapper, 'total-guesses-box');

        expect(component.length).toBe(1);
    });


