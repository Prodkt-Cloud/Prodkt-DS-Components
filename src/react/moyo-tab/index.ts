import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/tab/tab';

export default createComponent(React, 'moyo-tab', Component, {
  onMoyoClose: 'moyo-close'
});
