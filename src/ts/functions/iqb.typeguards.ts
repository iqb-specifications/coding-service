// TODO move those to @iqb-specifications/responses repo
import {CodesType, ResponseStatusType, ResponseValueType} from '@iqbspecs/response/response.interface';
import { ResponseStatusList } from '../interfaces/iqb.interfaces';
import { isA, isArrayOf } from './common.typeguards';
import { Response } from '@iqbspecs/response/response.interface'

export const isResponseValueType =
  (thing: unknown): thing is ResponseValueType =>
    (Array.isArray(thing) && thing.every(isResponseValueType)) ||
    (['string', 'number', 'boolean'].includes(typeof thing)) ||
    (thing == null);

export const isCodesType =
  (thing: unknown): thing is CodesType =>
    (typeof thing === 'object') && (thing != null) &&
    ('id' in thing) && (typeof thing.id === "string") &&
    (!('parameter' in thing) || (typeof thing.parameter === "string"));

export const isResponse =
  (thing: unknown): thing is Response =>
    (typeof thing === 'object') && (thing != null) &&
    ('id' in thing) && (typeof thing.id === "string") &&
    ('status' in thing) && isA<ResponseStatusType>(ResponseStatusList, thing.status) &&
    ('value' in thing) && isResponseValueType(thing.value) &&
    (!('subform' in thing) || (typeof thing.subform === 'string')) &&
    (!('code' in thing) || (typeof thing.code === 'number')) &&
    (!('score' in thing) || (typeof thing.score === 'number')) &&
    (!('codes' in thing) || isArrayOf<CodesType>(thing.codes, isCodesType));

export const isResponseList = (thing: unknown): thing is Response[] =>
  isArrayOf<Response>(thing, isResponse);
