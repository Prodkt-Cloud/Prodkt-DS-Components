import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/textarea/textarea';

export default createComponent(React, 'moyo-textarea', Component, {
  onMoyoChange: 'moyo-change',
  onMoyoInput: 'moyo-input',
  onMoyoFocus: 'moyo-focus',
  onMoyoBlur: 'moyo-blur'
});
