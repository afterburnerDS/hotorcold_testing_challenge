import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-form';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList />);
    });

    it('Should render the ul', () => {
        const wrapper = shallow(<GuessList />);
       const guesses = [1,3,5,6];
    
        expect(wrapper.contains(
            <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>

        )).toEqual(true);
    });

});