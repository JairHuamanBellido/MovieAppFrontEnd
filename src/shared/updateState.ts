// Genericos
// <S tipo IState>
// Parametros.  Key del IState y el value del IState[value]

export const updateState = <S extends any>(key: keyof S, value: any) => (
  prevState: S
): S => ({
  ...prevState,
  [key]: value
});
