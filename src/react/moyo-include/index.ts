import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/include/include';

export default createComponent(React, 'moyo-include', Component, {
  onMoyoLoad: 'moyo-load',
  onMoyoError: 'moyo-error'
});
