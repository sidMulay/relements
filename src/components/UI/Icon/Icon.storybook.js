import React from 'react';
import { storiesOf } from '@storybook/react';

import Docs from './Icon.mdx';

storiesOf('UI/Icon', module).add('Documentation', () => {
  return <Docs />;
});

export const IconSheet = () => null;