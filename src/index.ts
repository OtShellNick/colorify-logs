import { EColorsVariants, TLog, TTextColors, TLoggerSettings } from "./models";
import { textColors } from "./utils";
import { config } from "./config";

export class Logger {
  private readonly textColors: TTextColors;
  private readonly config: TLoggerSettings;

  constructor(loggerConfig: TLoggerSettings = {}) {
    this.textColors = textColors;
    this.config = { ...config, ...loggerConfig };
  }

  /**
   * Получает текущее время в формате HH:MM:SS.
   * @param date - Объект Date.
   * @returns Форматированное время.
   */
  private getTime(date: Date): string {
    const [time] =  date.toTimeString().split(" ");
    return time;
  }

  /**
   * Логирует сообщение с текущим временем и указанным цветом.
   * @param color - Цвет сообщения (red, green, yellow, blue).
   * @param args - Сообщения для логирования.
   */
  public log (color: EColorsVariants): TLog {
    return (...args) => console.log(
      this.config.showTime ? this.getTime(new Date()) : "",
      `${this.textColors[color]}`,
      ...args,
      this.textColors.reset,
    );
  }
}