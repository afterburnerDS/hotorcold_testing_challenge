import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Should render the section', () => {
        const wrapper = shallow(<GuessSection />);
        const feedback = 'Foo';
        const guessCount = 'bar';
        expect(wrapper.contains(<section>
            <Feedback feedback={feedback} guessCount={guessCount}/>
            <GuessForm/>
        </section>)).toEqual(true);
    });


});