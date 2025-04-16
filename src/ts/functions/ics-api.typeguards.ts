import { contains, isA, isArrayOf } from './common.typeguards';
import {
  ChunkType, ChunkTypes,
  Coder,
  DataChunk, JSONSchema, ResponseRow, ServiceInfo, Task,
  TaskEvent,
  TaskEventType,
  TaskEventTypes,
  TaskInstructions, TaskSeed, TaskType, TaskTypeInfo, TaskTypes
} from '../interfaces/ics-api.interfaces';
import { isResponse } from './iqb.typeguards';

export const isCoder = (thing: unknown): thing is Coder =>
  (typeof thing == 'object') && (thing != null) &&
  ('id' in thing) && (typeof thing.id === 'string') &&
  ('label' in thing) && (typeof thing.label === 'string');

export const isTaskInstructions = (thing: unknown): thing is TaskInstructions =>
  (typeof thing == 'object') && (thing != null);

export const isTaskEvent = (thing: unknown): thing is TaskEvent =>
  (typeof thing == 'object') && (thing != null) &&
  ('timestamp' in thing) && (typeof thing.timestamp === 'number') &&
  ('status' in thing) && (typeof thing.status === 'string') && isA<TaskEventType>(TaskEventTypes, thing.status);

export const isDataChunk = (thing: unknown): thing is DataChunk =>
  (typeof thing === 'object') && (thing != null) &&
  ('id' in thing) && (typeof thing.id === 'string') &&
  ('type' in thing) && isA<ChunkType>(ChunkTypes, thing.type);

export const isTask = (thing: unknown): thing is Task =>
  (typeof thing === 'object') && (thing != null) &&
  ('id' in thing) && (typeof thing.id === 'string') &&
  ('type' in thing) && isA<TaskType>(TaskTypes, thing.type) &&
  ('events' in thing) && isArrayOf<TaskEvent>(thing.events, isTaskEvent) &&
  ('data' in thing) && isArrayOf<DataChunk>(thing.data, isDataChunk) &&
  (!('instructions' in thing) || ((typeof thing.instructions === 'string') || isTaskInstructions(thing.instructions)));

export const isTaskTypeInfo = (thing: unknown): thing is TaskTypeInfo =>
  (typeof thing === 'object') && (thing != null) &&
  ('instructionsText' in thing) && (typeof thing.instructionsText === 'string') &&
  ('instructionsSchema' in thing) && isJsonSchema(thing.instructionsSchema);

export const isTaskSeed = (thing: unknown): thing is TaskSeed =>
  (typeof thing === 'object') && (thing != null) &&
  ('type' in thing) && isA<TaskType>(TaskTypes, thing.type);

export const isJsonSchema = (thing: unknown): thing is JSONSchema =>
  (typeof thing === 'object') && (thing != null) &&
  ('$id' in thing) && (typeof thing.$id === 'string') &&
  ('$schema' in thing) && (typeof thing.$schema === 'string');

export const isServiceInfo = (thing: unknown): thing is ServiceInfo =>
  (typeof thing == 'object') && (thing != null) &&
  ('id' in thing) && (typeof thing.id == 'string') &&
  ('type' in thing) && (typeof thing.type == 'string') &&
  ('version' in thing) && (typeof thing.version == 'string') &&
  ('apiVersion' in thing) && (typeof thing.apiVersion == 'string') &&
  ('instructionsSchema' in thing) && isJsonSchema(thing.instructionsSchema);

export const isResponseRow= (thing: unknown): thing is ResponseRow =>
  (typeof thing == 'object') && (thing != null) &&
  isResponse(thing) && contains(thing, 'setId', '');

export const isResponseRowList = (thing: unknown): thing is ResponseRow[] =>
  isArrayOf(thing, isResponseRow);
