import * as React from 'react';
import Component from '../../components/animation/animation';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & {
    onMoyoCancel?: ((e: Event) => unknown) | undefined;
    onMoyoFinish?: ((e: Event) => unknown) | undefined;
    onMoyoStart?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
