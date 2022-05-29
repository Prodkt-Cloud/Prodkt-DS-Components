import * as React from 'react';
import Component from '../../components/resize-observer/resize-observer';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & {
    onMoyoResize?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
