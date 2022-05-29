import * as React from 'react';
import Component from '../../components/radio-button/radio-button';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & {
    onMoyoBlur?: ((e: Event) => unknown) | undefined;
    onMoyoChange?: ((e: Event) => unknown) | undefined;
    onMoyoFocus?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
