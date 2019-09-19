import { EventEmitter } from '../../../dist/types/stencil.core';
export declare class TodoInput {
    inputSubmit: EventEmitter;
    value: string;
    keyUp: (e: any) => void;
    render(): any;
}
