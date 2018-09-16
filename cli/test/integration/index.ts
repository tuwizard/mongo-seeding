import { run } from '../../src/index';

console.error = jest.fn();

describe('CLI', () => {
  const previousArgv = process.argv;

  beforeEach(() => {
    jest.resetModules();
    process.argv = { ...previousArgv };
  });

  afterEach(() => {
    process.argv = previousArgv;
  });

  it('should exit with error on incorrect values', async () => {
    const exit = jest
      .spyOn(process, 'exit')
      .mockImplementation(number => number);

    const testCases = [
      {
        argv: ['', '', '--reconnect-timeout', '-5'],
      },
      {
        argv: ['', '', '--db-port', '-5'],
      },
    ];

    for (const testCase of testCases) {
      process.argv = testCase.argv;
      await run();

      expect(console.error).toBeCalledWith(
        expect.stringContaining('InvalidParameterError'),
      );
      expect(exit).toBeCalledWith(0);
    }
  });
});
