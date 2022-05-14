import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/menu/menu';

export default createComponent(React, 'moyo-menu', Component, {
  onMoyoSelect: 'moyo-select'
});
