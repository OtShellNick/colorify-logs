import { Logger } from "../src";
import { textColors, textFormats } from "../src/utils";
import { EColorsVariants, ELogLevels } from "../src/models";

describe("Logger class", () => {
  let logger: Logger;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    logger = new Logger();
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
      message,
      textFormats.reset,
    );
  });

  it("should include the current time in the log message when showTime is true", () => {
    const loggerWithTime = new Logger({ showTime: true });
    const message = "Test message";
    const log = loggerWithTime.log(EColorsVariants.GREEN);
    log(message);

    const loggedTime = consoleSpy.mock.calls[0][0];
    const currentTime = new Date().toTimeString().split(" ")[0];

    expect(loggedTime).toContain(currentTime);
  });

  it("should log messages with all log levels", () => {
    const message = "Log level test message";
    const logLevelMethods = {
      [ELogLevels.DEBUG]: "debug",
      [ELogLevels.INFO]: "info",
      [ELogLevels.WARN]: "warn",
      [ELogLevels.ERROR]: "error",
      [ELogLevels.FATAL]: "error",
    };

    Object.entries(logLevelMethods).forEach(([level, method]) => {
      const consoleMethodSpy = jest.spyOn(console, method as "log" | "debug" | "info" | "warn" | "error").mockImplementation(() => {});
      const testLog = logger.log(undefined, level as ELogLevels);
      testLog(message);

      expect(consoleMethodSpy).toHaveBeenCalledWith(
        expect.any(String),
        message,
        textFormats.reset,
      );

      consoleMethodSpy.mockRestore();
    });
  });

  it("should use the correct console method for each log level", () => {
    const message = "Log level action test message";
    const logLevelMethods = {
      [ELogLevels.DEBUG]: "debug",
      [ELogLevels.INFO]: "info",
      [ELogLevels.WARN]: "warn",
      [ELogLevels.ERROR]: "error",
      [ELogLevels.FATAL]: "error",
    };

    Object.entries(logLevelMethods).forEach(([level, method]) => {
      consoleSpy = jest.spyOn(console, method as "log" | "debug" | "info" | "warn" | "error").mockImplementation(() => {});
      const log = logger.log(undefined, level as ELogLevels);
      log(message);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.any(String),
        message,
        textFormats.reset,
      );

      consoleSpy.mockRestore();
    });
  });
});