import { EColorsVariants, ELogLevels, TLoggerSettings } from "../models";

export const config: TLoggerSettings = {
    showTime: false,
    enableLogLevels: false,
    levelColors: {
        [ELogLevels.DEBUG]: EColorsVariants.BLUE,
        [ELogLevels.INFO]: EColorsVariants.GREEN,
        [ELogLevels.WARN]: EColorsVariants.YELLOW,
        [ELogLevels.ERROR]: EColorsVariants.RED,
        [ELogLevels.FATAL]: EColorsVariants.RED_BRIGHT
    }
};