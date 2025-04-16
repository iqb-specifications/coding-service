// TODO move this to @iqb-specifications/responses repo
import { ResponseStatusType, ResponseValueType } from '@iqb/responses/coding-interfaces';
import { CodingProbabilities, Response, ResponseStatusList } from '../interfaces/iqb.interfaces';
import { isA, isArrayOf } from './common.typeguards';

export const isResponseValueType =
  (thing: unknown): thing is ResponseValueType =>
    (Array.isArray(thing) && thing.every(isResponseValueType)) ||
    (['string', 'number', 'boolean'].includes(typeof thing)) ||
    (thing == null);

export const isCodingProbabilities =
  (thing: unknown): thing is CodingProbabilities =>
    (typeof thing === 'object') && (thing != null) &&
    Object.values(thing).every(k => typeof k === 'number');

export const isResponse =
  (thing: unknown): thing is Response =>
    (typeof thing === 'object') && (thing != null) &&
    ('id' in thing) && (typeof thing.id === "string") &&
    ('status' in thing) && isA<ResponseStatusType>(ResponseStatusList, thing.status) &&
    ('value' in thing) && isResponseValueType(thing.value) &&
    (!('subform' in thing) || (typeof thing.subform === 'string')) &&
    (!('code' in thing) || (typeof thing.code === 'number')) &&
    (!('score' in thing) || (typeof thing.score === 'number')) &&
    (!('codingProbabilities' in thing) || isCodingProbabilities(thing.codingProbabilities)); // proposal

export const isResponseList = (thing: unknown): thing is Response[] =>
  isArrayOf<Response>(thing, isResponse);
