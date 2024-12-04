export enum EColorsVariants {
  BLACK = "black",
  RED = "red",
  GREEN = "green",
  YELLOW = "yellow",
  BLUE = "blue",
  MAGENTA = "magenta",
  CYAN = "cyan",
  WHITE = "white",
  BLACK_BRIGHT = "blackBright",
  RED_BRIGHT = "redBright",
  GREEN_BRIGHT = "greenBright",
  YELLOW_BRIGHT = "yellowBright",
  BLUE_BRIGHT = "blueBright",
  MAGENTA_BRIGHT = "magentaBright",
  CYAN_BRIGHT = "cyanBright",
  WHITE_BRIGHT = "whiteBright",
}

export enum ETextFormats {
  RESET = "reset",
  BRIGHT = "bright",
  DIM = "dim",
  UNDERSCORE = "underscore",
  BLINK = "blink",
  REVERSE = "reverse",
  HIDDEN = "hidden",
}

export enum ELogLevels {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
  FATAL = "fatal",
}

export type TTextColors = Record<EColorsVariants, string>;
export type TTextFormats = Record<ETextFormats, string>;
export type TLoggerSettings = {
  showTime: boolean;
  enableLogLevels: boolean;
  levelColors: Partial<Record<ELogLevels, EColorsVariants>>;
}
export type TLog = (...args: any[]) => void;
