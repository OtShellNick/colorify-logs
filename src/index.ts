import { EColorsVariants, TLog, TTextColors, TTextFormats, TLoggerSettings, ELogLevels } from "./models";
import { textColors, textFormats } from "./utils";
import { config } from "./config";

export class Logger {
  private readonly textColors: TTextColors;
  private readonly textFormats: TTextFormats;
  private readonly config: TLoggerSettings;
  private readonly baseColor: EColorsVariants;
  private readonly baseLevel: ELogLevels;

  constructor(loggerConfig: Partial<TLoggerSettings> = {}) {
    this.textColors = textColors;
    this.textFormats = textFormats;
    this.config = { ...config, ...loggerConfig };
    this.baseLevel = ELogLevels.DEBUG;
    this.baseColor = this.config.levelColors[this.baseLevel] || EColorsVariants.WHITE;
  }

  /**
   * Получает текущее время в формате HH:MM:SS.
   * @param date - Объект Date.
   * @returns Форматированное время.
   */
  private getTime(date: Date): string {
    const [time] = date.toTimeString().split(" ");
    return time;
  }

  private getLogTime(): string {
    return this.config.showTime ? this.getTime(new Date()) : "";
  }

  private getLogColor(color?: EColorsVariants, logLevel?: ELogLevels): string {
    return color ? `${this.textColors[color]}` : this.config.enableLogLevels ? logLevel ? this.textColors[this.config.levelColors[logLevel] || this.baseColor] : this.textColors[this.config.levelColors[this.baseLevel] || this.baseColor] : this.textColors[this.baseColor];
  }

  private getLogLevel(level?: ELogLevels): string {
    return this.config.enableLogLevels ? level ? `[${level.toUpperCase()}]` : `[${ELogLevels.DEBUG.toUpperCase()}]` : "";
  }

  /**
   * Логирует сообщение с текущим временем и указанным цветом.
   * @param color - Цвет сообщения (red, green, yellow, blue).
   * @param args - Сообщения для логирования.
   */
  public log(color?: EColorsVariants, logLevel?: ELogLevels): TLog {
    const lvl = this.config.enableLogLevels ? logLevel ? logLevel : ELogLevels.DEBUG : undefined;

    const logMessage = `${this.getLogColor(color, lvl)} ${this.getLogTime()} ${this.getLogLevel(logLevel)}`;
    let logAction;

    switch (logLevel) {
      case ELogLevels.DEBUG:
        logAction = console.debug;
        break;
      case ELogLevels.INFO:
        logAction = console.info;
        break;
      case ELogLevels.WARN:
        logAction = console.warn;
        break;
      case ELogLevels.ERROR:
        logAction = console.error;
        break;
      case ELogLevels.FATAL:
        logAction = console.error;
        break;
      default:
        logAction = console.log;
    }

    return (...args) => logAction(
      logMessage,
      ...args,
      this.textFormats.reset,
    );
  }
}