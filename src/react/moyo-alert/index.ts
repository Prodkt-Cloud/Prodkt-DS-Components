import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/alert/alert';

export default createComponent(React, 'moyo-alert', Component, {
  onMoyoShow: 'moyo-show',
  onMoyoAfterShow: 'moyo-after-show',
  onMoyoHide: 'moyo-hide',
  onMoyoAfterHide: 'moyo-after-hide'
});
