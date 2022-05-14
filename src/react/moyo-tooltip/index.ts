import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/tooltip/tooltip';

export default createComponent(React, 'moyo-tooltip', Component, {
  onMoyoShow: 'moyo-show',
  onMoyoAfterShow: 'moyo-after-show',
  onMoyoHide: 'moyo-hide',
  onMoyoAfterHide: 'moyo-after-hide'
});
