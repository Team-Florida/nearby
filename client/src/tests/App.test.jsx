import React from 'react';
import { shallow, mount, render} from 'enzyme';
import App from '../components/App.jsx';
// import MoreHouse from '../components/MoreHouse.jsx';
// import { exportAllDeclaration } from '@babel/types';
import Gallery from '../components/Gallery.jsx'


describe('A suite', function() {
    it('should render without throwing an error', function() {
      expect(shallow(<Gallery />).contains( <h1>From Local DataBase</h1>)).toBe(true);
    });

    it('should render without throwing an error', function() {
        expect(shallow(<Gallery />).contains( <h1>More homes you may like</h1>)).toBe(true);
      });
});







