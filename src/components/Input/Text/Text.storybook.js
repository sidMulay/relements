import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './Text';

const VALUE = '';

storiesOf('Inputs/Text', module).add('Single', () => {
  const story = (
    <div>
      <Text label="Sample Input" value={VALUE} onChange={console.log} />
    </div>
  );
  return story;
});