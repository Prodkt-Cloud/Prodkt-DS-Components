import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/resize-observer/resize-observer';

export default createComponent(React, 'moyo-resize-observer', Component, {
  onMoyoResize: 'moyo-resize'
});
