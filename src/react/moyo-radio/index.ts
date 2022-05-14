import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/radio/radio';

export default createComponent(React, 'moyo-radio', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoChange: 'moyo-change',
  onMoyoFocus: 'moyo-focus'
});
