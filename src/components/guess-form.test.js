import React from 'react';
import {shallow} from 'enzyme';d

import GuessForm from './guess-form';



describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Renders the form', () => {

        const wrapper = shallow(<GuessForm />);
        expect(wrapper.contains(<form>
            <input/>
            <button/>
        </form>)).toEqual(true);
    });

    it('Should fire the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 'Foobar';
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    

});