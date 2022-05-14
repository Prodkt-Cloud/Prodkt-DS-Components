import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/color-picker/color-picker';

export default createComponent(React, 'moyo-color-picker', Component, {
  onMoyoChange: 'moyo-change'
});
