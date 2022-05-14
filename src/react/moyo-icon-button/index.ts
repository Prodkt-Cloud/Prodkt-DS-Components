import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/icon-button/icon-button';

export default createComponent(React, 'moyo-icon-button', Component, {
  onMoyoBlur: 'moyo-blur',
  onMoyoFocus: 'moyo-focus'
});
