import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/switch/switch';

export default createComponent(React, 'moyo-switch', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoChange: 'moyo-change',
  onMoyoFocus: 'moyo-focus'
});
