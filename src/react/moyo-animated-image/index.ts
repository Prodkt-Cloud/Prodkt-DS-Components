import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/animated-image/animated-image';

export default createComponent(React, 'moyo-animated-image', Component, {
  onMoyoLoad: 'moyo-load',
  onMoyoError: 'moyo-error'
});
