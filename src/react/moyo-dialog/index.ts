import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/dialog/dialog';

export default createComponent(React, 'moyo-dialog', Component, {
  onMoyoShow: 'moyo-show',
  onMoyoAfterShow: 'moyo-after-show',
  onMoyoHide: 'moyo-hide',
  onMoyoAfterHide: 'moyo-after-hide',
  onMoyoInitialFocus: 'moyo-initial-focus',
  onMoyoRequestClose: 'moyo-request-close'
});
