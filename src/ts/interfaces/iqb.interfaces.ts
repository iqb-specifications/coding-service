import { Response as ResponseBase } from '@iqb/responses';
import { ResponseStatusType, ResponseValueType, VariableCodingData } from '@iqb/responses/coding-interfaces';

export interface Response extends ResponseBase { // proposal
  codingProbabilities?: CodingProbabilities;
}

export interface CodingProbabilities {
  [code: string]: number
}

export const ResponseStatusList = ['UNSET', 'NOT_REACHED', 'DISPLAYED', 'VALUE_CHANGED', 'SOURCE_MISSING',
  'DERIVE_ERROR', 'VALUE_DERIVED', 'NO_CODING', 'INVALID', 'CODING_INCOMPLETE', 'CODING_ERROR', 'CODING_COMPLETE',
  'CODING_SEMI_COMPLETE' // proposal
];

export type AutoCodingInstructions = {
    variableCodings: VariableCodingData[];
};

