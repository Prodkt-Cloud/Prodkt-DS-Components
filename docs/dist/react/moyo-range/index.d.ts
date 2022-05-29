import * as React from 'react';
import Component from '../../components/range/range';
declare const _default: React.ForwardRefExoticComponent<Partial<Omit<Component, "children">> & {
    onMoyoChange?: ((e: Event) => unknown) | undefined;
    onMoyoBlur?: ((e: Event) => unknown) | undefined;
    onMoyoFocus?: ((e: Event) => unknown) | undefined;
} & React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>>;
export default _default;
