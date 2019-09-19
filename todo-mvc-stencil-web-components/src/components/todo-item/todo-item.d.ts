import { EventEmitter } from '../../../dist/types/stencil.core';
export declare class TodoItem {
    completed: boolean;
    text: string;
    itemCheck: EventEmitter;
    itemChanged: EventEmitter;
    itemRemove: EventEmitter;
    editing: boolean;
    private textInput?;
    private handledEvent;
    edit: () => void;
    doneEdit: (e: any) => void;
    keyUp: (e: any) => void;
    render(): any;
}
