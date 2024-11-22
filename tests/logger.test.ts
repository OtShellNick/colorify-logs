import { Logger } from "../src";
import { textColors } from "../src/utils";
import { EColorsVariants } from "../src/models";

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

    logger.log(EColorsVariants.RED, message);

    // Проверяем, что console.log был вызван с правильными аргументами
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.any(String), // Текущее время
      textColors.red, // Цвет сообщения
      message, // Само сообщение
      textColors.reset, // Сброс цвета
    );
  });

  it("should include the current time in the log message", () => {
    const message = "Test message";

    logger.log(EColorsVariants.GREEN, message);

    // Проверяем, что время правильно добавляется в лог
    const loggedTime = consoleSpy.mock.calls[0][0];
    const currentTime = new Date().toTimeString().split(" ")[0];

    expect(loggedTime).toBe(currentTime);
  });
});
