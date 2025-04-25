export const debugTypeguard = <T>(input: unknown, typeguard: (thing: unknown) =>  thing is T): input is T => {
  console.log('debug-typeguard:', typeguard.name);
  console.log('test-object:', input);
  const conditions = typeguard.toString().split('=>', 2)[1].split('&&');
  const firstFailingCondition = conditions
    .filter(condition => !!condition)
    .find(condition => {
      console.log('condition:', condition.trim());
      const result = eval(`(function test(thing) { return ${condition.trim()}; })`)(input);
      console.log('result: ', result);
      return !result;
    });
  console.log('final result:', !firstFailingCondition);
  return !firstFailingCondition;
}
