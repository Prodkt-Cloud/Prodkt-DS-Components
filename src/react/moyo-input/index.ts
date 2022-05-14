import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/input/input';

export default createComponent(React, 'moyo-input', Component, {
  onMoyoChange: 'moyo-change',
  onMoyoClear: 'moyo-clear',
  onMoyoInput: 'moyo-input',
  onMoyoFocus: 'moyo-focus',
  onMoyoBlur: 'moyo-blur'
});
