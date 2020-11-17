import React from 'react';
import render from 'react-test-renderer';
import Home from './Home';


/**
 * Small test which creates a snapshot of the application.
 */

test('App render', () => {
  const tree = render.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * After running "npm run test" in cmd or powershell,
 * check your file directory for the new .snap file.
 */
