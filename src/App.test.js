import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import './components';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

configure({ adapter: new Adapter() });

it('Deberia encontrar Navbar', () => {

  const nameComponent = shallow(<App />);
  expect(nameComponent.find('Navbar').length).toBe(1);

});

it('Deberia encontrar Waiters', ()=>{

  const waitersComponent = shallow(<App />);
  expect(waitersComponent.find('Waiters').length).toBe(1);
});





