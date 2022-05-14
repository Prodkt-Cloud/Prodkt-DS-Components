import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/radio-button/radio-button';

export default createComponent(React, 'moyo-radio-button', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoChange: 'moyo-change',
  onMoyoFocus: 'moyo-focus'
});
