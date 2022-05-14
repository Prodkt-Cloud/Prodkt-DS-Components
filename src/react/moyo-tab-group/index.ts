import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/tab-group/tab-group';

export default createComponent(React, 'moyo-tab-group', Component, {
  onMoyoTabShow: 'moyo-tab-show',
  onMoyoTabHide: 'moyo-tab-hide'
});
