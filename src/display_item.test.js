import React from 'react';
import DisplayItem from './display_item';
import renderer from 'react-test-renderer';

it('renders loading', () => {
  const tree = renderer.create(
    <DisplayItem 
      loading
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders data', () => {
  const tree = renderer.create(
    <DisplayItem 
      productName="Test"
      price={10}
      description="Description"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});