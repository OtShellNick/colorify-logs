# scolog

`scolog` — это библиотека для логирования сообщений с использованием различных цветов и уровней логирования в консоли. Она позволяет легко настроить отображение времени и уровней логирования, а также использовать пользовательские цвета для различных уровней.

## Установка

Для установки библиотеки используйте npm:

```
npm install scolog
```

## Использование

### Основные возможности

- **Цветное логирование**: Логируйте сообщения с использованием различных цветов.
- **Уровни логирования**: Используйте уровни логирования, такие как DEBUG, INFO, WARN, ERROR, FATAL.
- **Отображение времени**: Включите отображение времени в логах.
- **Пользовательские настройки**: Настройте цвета и уровни логирования по своему усмотрению.

### Примеры

#### Пример 1: Логирование с использованием цвета
```typescript
const logger = new Logger();
const log = logger.log(EColorsVariants.RED);
log("Это сообщение будет красным");
```
**Вывод (красный текст):**
```
Это сообщение будет красным
```

#### Пример 2: Логирование с указанием уровня логирования
```typescript
const logger = new Logger({ enableLogLevels: true });
const log = logger.log(undefined, ELogLevels.INFO);
log("Это сообщение будет с уровнем INFO");
```
**Вывод (с уровнем INFO):**
```
[INFO] Это сообщение будет с уровнем INFO
```

#### Пример 3: Логирование с отображением времени
```typescript
const logger = new Logger({ showTime: true });
const log = logger.log(EColorsVariants.GREEN);
log("Это сообщение будет с текущим временем");
```
**Вывод (зеленый текст с временем):**
```
12:34:56 Это сообщение будет с текущим временем
```

#### Пример 4: Логирование с пользовательскими настройками
```typescript
const customConfig = {
  showTime: true,
  enableLogLevels: true,
  levelColors: {
    [ELogLevels.DEBUG]: EColorsVariants.CYAN,
    [ELogLevels.INFO]: EColorsVariants.MAGENTA,
    [ELogLevels.WARN]: EColorsVariants.YELLOW,
    [ELogLevels.ERROR]: EColorsVariants.RED,
    [ELogLevels.FATAL]: EColorsVariants.RED_BRIGHT,
  },
};
const logger = new Logger(customConfig);
const log = logger.log(undefined, ELogLevels.DEBUG);
log("Это сообщение будет с пользовательскими настройками");
```
**Вывод (циан текст с уровнем DEBUG):**
```
[DEBUG] Это сообщение будет с пользовательскими настройками
```

## Лицензия

MIT