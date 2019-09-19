import { EventEmitter } from '../../../dist/types/stencil.core';
export declare class TodoFilters {
    filter: string;
    anyCompleted: boolean;
    setFilter: EventEmitter;
    clearCompleted: EventEmitter;
    render(): any;
}
