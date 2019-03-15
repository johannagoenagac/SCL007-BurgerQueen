import React from 'react';
// import ReactDOM from 'react-dom';
import NameForm from './NameForm'
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe(NameForm, () => {
    it('Debería ser una funcion', () => {

    });
})

configure({ adapter: new Adapter() });

it('Deberia encontrar un boton', () => {

    const NameComponent = shallow(<NameForm />);

    expect(NameComponent.find('button').length > 0).toBeTruthy();
});

it('Deberia encontrar un input', () => {

    const inputComponent = shallow(<NameForm />);

    expect(inputComponent.find('button').length > 0).toBeTruthy();
});
 

    
    


