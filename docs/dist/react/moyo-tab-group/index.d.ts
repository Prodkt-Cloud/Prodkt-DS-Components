import * as React from 'react';
import Component from '../../components/tab-group/tab-group';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & {
    onMoyoTabShow?: ((e: Event) => unknown) | undefined;
    onMoyoTabHide?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
