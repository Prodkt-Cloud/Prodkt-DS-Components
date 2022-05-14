import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/image-comparer/image-comparer';

export default createComponent(React, 'moyo-image-comparer', Component, {
  onMoyoChange: 'moyo-change'
});
