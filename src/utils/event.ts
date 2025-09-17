import { EventEmitter } from 'node:events';

export const globalEvent = new EventEmitter();

export enum GlobalEventName {}
