import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/checkbox/checkbox';

export default createComponent(React, 'moyo-checkbox', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoChange: 'moyo-change',
  onMoyoFocus: 'moyo-focus'
});
