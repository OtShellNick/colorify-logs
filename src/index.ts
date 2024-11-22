import { EColorsVariants, TTextColors } from "./models";
import { textColors } from "./utils";

export class Logger {
  private readonly textColors: TTextColors;

  constructor() {
    this.textColors = textColors;
  }

  /**
   * Получает текущее время в формате HH:MM:SS.
   * @param date - Объект Date.
   * @returns Форматированное время.
   */
  private getTime(date: Date): string {
    return date.toTimeString().split(" ")[0];
  }

  /**
   * Логирует сообщение с текущим временем и указанным цветом.
   * @param color - Цвет сообщения (red, green, yellow, blue).
   * @param args - Сообщения для логирования.
   */
  public log(color: EColorsVariants, ...args: any[]): void {
    console.log(
      this.getTime(new Date()),
      `${this.textColors[color]}`,
      ...args,
      this.textColors.reset,
    );
  }
}
