import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/rating/rating';

export default createComponent(React, 'moyo-rating', Component, {
  onMoyoChange: 'moyo-change'
});
