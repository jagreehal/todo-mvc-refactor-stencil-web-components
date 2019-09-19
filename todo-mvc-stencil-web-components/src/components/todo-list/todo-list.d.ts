import { EventEmitter } from '../../../dist/types/stencil.core';
export declare class TodoList {
    todos: string;
    checkTodo: EventEmitter;
    removeTodo: EventEmitter;
    changeTodo: EventEmitter;
    render(): any;
}
