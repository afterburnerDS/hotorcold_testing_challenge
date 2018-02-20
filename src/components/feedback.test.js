import React from 'react';
import {shallow} from 'enzyme';d

import Feedback from './feedback';



describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders the feedback', () => {
        const feedback = "Hot";
        const guessAgain = "Guess Again";
        const wrapper = shallow(<Feedback />);
        expect(wrapper.contains(<h2>{feedback} {guessAgain}</h2>)).toEqual(true);
    });

    

});