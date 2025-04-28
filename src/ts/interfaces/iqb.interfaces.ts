import {VariableCodingData} from "@iqbspecs/coding-scheme/coding-scheme.interface";

export const ResponseStatusList = [
    'UNSET',
    'NOT_REACHED',
    'DISPLAYED',
    'VALUE_CHANGED',
    'DERIVE_ERROR',
    'CODING_COMPLETE',
    'NO_CODING',
    'INVALID',
    'CODING_INCOMPLETE',
    'CODING_ERROR',
    'PARTLY_DISPLAYED',
    'DERIVE_PENDING',
    'INTENDED_INCOMPLETE',
    'CODE_SELECTION_PENDING'
] as const;


export type AutoCodingInstructions = {
    variableCodings: VariableCodingData[];
};

