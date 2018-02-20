import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-form';



describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render the h2', () => {
        const wrapper = shallow(<GuessCount />);
       const guessCount = 'bar';
       const guessNoun = 'foo';
        expect(wrapper.contains(
            <h2 id="guessCount">
            You've made <span id="count">{guessCount}</span> {guessNoun}!
        </h2>

        )).toEqual(true);
    });

});
