import {isResponse, isResponseList, isResponseValueType} from './iqb.typeguards';
import {contains, isA, isCarrier} from './common.typeguards';
import { isResponseRow, isTask } from './ics-api.typeguards';
import {ResponseStatusType} from "@iqbspecs/response/response.interface";
import {ResponseStatusList} from "../interfaces/iqb.interfaces";

describe('TypeGuards', () => {

  it('isResponse should work', () => {
    expect(isResponse({ id: 'a', value: 'A', status: 'VALUE_CHANGED' })).toBeTruthy();
  });

  it('isResponseList should work', () => {
    expect(isResponseList([
      { "id": "a", "value": "A", "status": "VALUE_CHANGED" },
      { "id": "b", "value": "B", "status": "VALUE_CHANGED" },
      { "id": "c", "value": "C", "status": "VALUE_CHANGED" },
      { "id": "d", "value": "D", "status": "VALUE_CHANGED" }
    ])).toBeTruthy();
  });

  it('isCarrier', () => {
    expect(isCarrier({ a:'1', b:'2' }, 'a', ['1'])).toBeTruthy()
    expect(isCarrier({ a:'1' }, 'a', ['1'])).toBeTruthy()
    expect(isCarrier({ a:'1' }, 'c', ['1'])).toBeFalsy()
    expect(isCarrier({ a:'1' }, 'a', ['2'])).toBeFalsy()
  });

  it('contains', () => {
    expect(contains({ a: '1' }, 'a', 'string')).toBeTruthy();
    expect(contains({ a: '1' }, 'a', 1)).toBeFalsy();
    expect(contains({ a: 1 }, 'a', 'string')).toBeFalsy();
    expect(contains({ a: 1 }, 'a', 1)).toBeTruthy();
    expect(contains({ x: true, y: false }, 'y', false)).toBeTruthy();
  });

  it('isTask', () => {
    const task = {
      "data": [
        {
          "id": "eqgnuhqkiujc",
          "type": "input"
        },
        {
          "id": "test",
          "type": "input"
        },
        {
          "id": "upreotooxynm",
          "type": "input"
        }
      ],
      "events": [
        {
          "status": "create",
          "message": "automatically created because data dir was not empty on startup",
          "timestamp": 1738669102538
        }
      ],
      "id": "__orphaned_data__",
      "type": "unknown",
      "instructions": {
        "variableCodings": []
      },
      "coder": "a"
    };
    expect(isTask(task)).toBeTruthy();
  });

  it('responseRow', () => {
    expect(isResponseRow({ id: 'a', value: 'A', status: 'VALUE_CHANGED' })).toBeFalsy();
    expect(isResponseRow({ id: 'a', value: 'A', status: 'VALUE_CHANGED', setId: 'user1' })).toBeTruthy();
  });

  it('responseRow with almost nothing', () => {
    const minimal = {
      id: "MD2",
      setId: "auto",
      status: "DERIVE_ERROR",
      value: null
    };

    expect(isResponseRow(minimal)).toBe(true);
  });
});
