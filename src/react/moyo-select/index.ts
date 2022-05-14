import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/select/select';

export default createComponent(React, 'moyo-select', Component, {
  onMoyoClear: 'moyo-clear',
  onMoyoChange: 'moyo-change',
  onMoyoFocus: 'moyo-focus',
  onMoyoBlur: 'moyo-blur'
});
