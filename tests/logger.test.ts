import { Logger } from "../src";
import { textColors } from "../src/utils";
import { EColorsVariants } from "../src/models";

describe("Logger class", () => {
  let logger: Logger;
  let timeLogger: Logger;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
    timeLogger = new Logger({ showTime: true });
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log a message with the correct color", () => {
    const message = "Test message";

    const log = logger.log(EColorsVariants.RED);
    log(message);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.any(String), 
      textColors.red,
      message, 
      textColors.reset,
    );
  });

  it("should include the current time in the log message", () => {
    const message = "Test message";

    const log = timeLogger.log(EColorsVariants.GREEN);
    log(message);

    // Проверяем, что время правильно добавляется в лог
    const loggedTime = consoleSpy.mock.calls[0][0];
    const currentTime = new Date().toTimeString().split(" ")[0];

    expect(loggedTime).toBe(currentTime);
  });
});
