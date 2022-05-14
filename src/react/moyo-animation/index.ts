import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/animation/animation';

export default createComponent(React, 'moyo-animation', Component, {
  onMoyoCancel: 'moyo-cancel',
  onMoyoFinish: 'moyo-finish',
  onMoyoStart: 'moyo-start'
});
