import { contains, isA, isArrayOf } from './common.typeguards';
import {
  ChunkType, ChunkTypes,
  Coder,
  DataChunk, JSONSchema, ResponseRow, ServiceInfo, ServiceMode, ServiceModes, Task,
  TaskEvent,
  TaskEventType,
  TaskEventTypes,
  TaskInstructions, TaskType, TaskTypeInfo, TaskTypes, TaskUpdate
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
  (!('label' in thing) || (typeof thing.label === 'string')) &&
  (!('instructions' in thing) || isTaskInstructions(thing.instructions)) &&
  (!('coder' in thing) || (typeof thing.coder === 'string'));

export const isTaskTypeInfo = (thing: unknown): thing is TaskTypeInfo =>
  (typeof thing === 'object') && (thing != null) &&
  ('instructionsText' in thing) && (typeof thing.instructionsText === 'string') &&
  ('instructionsSchema' in thing) && isJsonSchema(thing.instructionsSchema);

export const isTaskUpdate = (thing: unknown): thing is TaskUpdate =>
  (typeof thing === 'object') && (thing != null) &&
  (!('type' in thing) || isA<TaskType>(TaskTypes, thing.type)) &&
  (!('instructions' in thing) || isTaskInstructions(thing.instructions)) &&
  (!('label' in thing) || (typeof thing.label === 'string')) &&
  (!('coder' in thing) || (typeof thing.coder === 'string'));

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
  ('instructionsSchema' in thing) && isJsonSchema(thing.instructionsSchema) &&
  (!('instructionsText' in thing) || (typeof thing.instructionsText === 'string')) &&
  (!('mode' in thing) || isA<ServiceMode>(ServiceModes, thing.mode));

export const isResponseRow= (thing: unknown): thing is ResponseRow =>
  (typeof thing == 'object') && (thing != null) &&
  isResponse(thing) && contains(thing, 'setId', '');

export const isResponseRowList = (thing: unknown): thing is ResponseRow[] =>
  isArrayOf(thing, isResponseRow);
