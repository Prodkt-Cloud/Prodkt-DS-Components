import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/range/range';

export default createComponent(React, 'moyo-range', Component, {
  onMoyoChange: 'moyo-change',
  onMoyoBlur: 'moyo-blur',
  onMoyoFocus: 'moyo-focus'
});
