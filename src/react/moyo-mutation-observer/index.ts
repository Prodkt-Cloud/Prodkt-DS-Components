import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/mutation-observer/mutation-observer';

export default createComponent(React, 'moyo-mutation-observer', Component, {
  onMoyoMutation: 'moyo-mutation'
});
