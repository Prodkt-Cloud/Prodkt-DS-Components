import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/button/button';

export default createComponent(React, 'moyo-button', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoFocus: 'moyo-focus'
});
