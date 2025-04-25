import { Response } from '@iqbspecs/response/response.interface'

export interface ServiceInfo {
  readonly id: string;
  readonly type: string;
  readonly version: string;
  readonly apiVersion: string;
  readonly instructionsSchema: JSONSchema;
  readonly instructionsText?: string;
}

export interface TaskTypeInfo {
  readonly instructionsText: string;
  readonly instructionsSchema: JSONSchema;
}

export const TaskTypes = ['train', 'code', 'unknown'] as const;
export const TaskActions = ['commit', 'abort'] as const;
export const TaskEventTypes = [ 'create', 'commit', 'start', 'fail', 'finish', 'abort' ] as const;
export const ChunkTypes = ['input', 'output'] as const;

export type TaskType = (typeof TaskTypes[number]);
export type TaskAction = (typeof TaskActions[number]);
export type TaskEventType = (typeof TaskEventTypes[number]);
export type ChunkType = (typeof ChunkTypes[number]);

export interface TaskEvent {
  readonly status: TaskEventType;
  readonly message: string;
  readonly timestamp: number;
}

export interface DataChunk {
  readonly id: string;
  readonly type: ChunkType;
}

export interface TaskInstructions {
  [prop: string]: any
}

export interface Task {
  type: TaskType;
  label?: string;
  id: string;
  events: TaskEvent[];
  data: DataChunk[];
  instructions?: TaskInstructions;
  coder?: string;
}

export interface TaskUpdate {
  type?: TaskType;
  label?: string;
  instructions?: TaskInstructions;
  coder?: string;
}

export interface ResponseRow extends Response {
  readonly setId: string;
}

export interface JSONSchema {
  $id: string;
  $schema: string;
}

export interface Coder {
  id: string;
  label: string;
}
