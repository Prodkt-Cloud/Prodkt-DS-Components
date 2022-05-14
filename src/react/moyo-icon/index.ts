import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/icon/icon';

export default createComponent(React, 'moyo-icon', Component, {
  onMoyoLoad: 'moyo-load',
  onMoyoError: 'moyo-error'
});
