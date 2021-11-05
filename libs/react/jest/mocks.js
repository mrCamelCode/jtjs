jest.mock('../src/hooks/use-theme.hook.ts', () => {
  return {
    useTheme: () => [{}, () => {}],
  };
});
