import React from 'react';
import { storiesOf } from '@storybook/react';

import Tab from './Tab';

storiesOf('TabInput', module).add('Single', () => {
  const story = <Tab label="Node Type" options={['test', 'awesome']} onChange={console.log} />;
  return story;
});
