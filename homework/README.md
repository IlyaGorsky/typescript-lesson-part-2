# Домашнее задание: TypeScript Part 2

## Общие требования

- Весь код строго типизирован — **ноль `any`**
- Код компилируется без ошибок с `strict: true`
- Результат — один `.ts` файл
- Компиляция: `npx tsc --noEmit --strict homework.ts`

---

## Задание 0: Type Challenges (обязательное)

Перед выполнением основных заданий пройдите задачи на [Type Challenges](https://github.com/type-challenges/type-challenges).

Решать можно прямо в браузере через [TypeScript Playground](https://www.typescriptlang.org/play/).

Видео-разбор формата и подхода к решению: <https://www.youtube.com/watch?v=KFWJGVDYZaw>

### Минимум — 5 задач

| # | Задача | Ссылка |
| - | ------ | ------ |
| 1 | Pick | [Решать](https://tsch.js.org/4/play) |
| 2 | Readonly | [Решать](https://tsch.js.org/7/play) |
| 3 | Exclude | [Решать](https://tsch.js.org/43/play) |
| 4 | ReturnType | [Решать](https://tsch.js.org/2/play) |
| 5 | Parameters | [Решать](https://tsch.js.org/3312/play) |

### Критерии приёмки

- [ ] Все 5 задач решены (скриншот или ссылка на playground)

---

## Основные задания

**Минимум 2 задания на выбор.** Каждое дополнительное задание — плюс к оценке.

### Подсказка: mapped types

В заданиях встречается конструкция **mapped type** — `{ [key in Union]: Type }`. Это способ создать объектный тип, где ключи берутся из union. Именно так под капотом работают `Pick`, `Readonly` и другие utility types.

Файлы из урока для повторения:

- `02_utilty_operators/pick.ts` — Pick
- `02_utilty_operators/omit.ts` — Omit
- `02_utilty_operators/readonly.ts` — Readonly
- `02_utilty_operators/keyof.ts` — keyof
- `02_assertions/satisfies.ts` — satisfies
- `02_function/overload.ts` — перегрузка функций
- `02_function/guard.ts` — type guard
- `02_narrowing/never.ts` — exhaustiveness checking

Документация: [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

---

## Задание 1: Каталог фильмов ⭐

### Легенда

Вы описываете типы для каталога фильмов — модели, фильтры, вывод карточек.

### Что нужно сделать

1. **Модели** — опишите `interface Movie` с полями: id, title, year, rating, genre, description, director. Поля `description` и `director` — опциональные
2. **Жанры** — создайте массив жанров (comedy, drama, action, horror, sci-fi) с помощью `as const` и выведите из него тип `Genre`
3. **Фильтры** — создайте union-тип `SortBy` для сортировки по year, rating, title
4. **Карточка и превью** — с помощью utility types создайте:
   - `MovieCard` — только id, title, year, rating из `Movie`
   - `MovieFull` — все поля `Movie`, но readonly
5. **Функции** (3 штуки):
   - `filterByGenre(movies: Movie[], genre: Genre): Movie[]`
   - `sortMovies(movies: Movie[], by: SortBy): Movie[]`
   - `toCard(movie: Movie): MovieCard`
6. **Маппинг жанров на emoji** — создайте объект, который сопоставляет каждому жанру emoji. Используйте mapped type, `as const` или `satisfies` — на выбор. Забытый жанр должен вызывать ошибку компиляции

### Критерии приёмки

- [ ] `GENRES` — `readonly ["comedy", "drama", ...]`, не `string[]`
- [ ] `filterByGenre(movies, "romance")` — ошибка компиляции (жанра нет в списке)
- [ ] `GENRE_EMOJI` проверяется на полноту — забытый жанр = ошибка компиляции
- [ ] `MovieFull` — все поля readonly

---

## Задание 2: Система уведомлений ⭐⭐

### Легенда

Вы описываете типы для системы уведомлений — разные виды, обработка, рендер.

### Что нужно сделать

1. **Виды уведомлений** — создайте discriminated union `Notification` из трёх типов (success, error, warning). Дискриминант — поле `type`. Каждый тип имеет свои уникальные поля:
   - success: message, duration
   - error: message, retry (boolean), errorCode
   - warning: message

2. **Конфиг** — создайте объект-маппинг: для каждого типа уведомления — иконка и цвет. Используйте mapped type, `as const` или `satisfies` — на выбор

3. **Exhaustiveness** — напишите функцию `renderNotification`, которая обрабатывает все типы уведомлений через switch. При добавлении нового типа в union компилятор должен показать ошибку

4. **Type Guard** — напишите функцию-предикат `isErrorNotification`, которая сужает тип `Notification` до `ErrorNotification`

5. **Utility types** — создайте:
   - `NotificationPreview` — только type и message из `Notification`
   - `NotificationWithoutMeta` — `ErrorNotification` без errorCode

6. **Intersection** — создайте тип `TrackedNotification`, который добавляет к `Notification` метаданные: id, дата создания, дата прочтения (опциональная)

7. **Функции** (3 штуки):
   - `renderNotification(n: Notification): string`
   - `isErrorNotification(n: Notification): n is ErrorNotification`
   - `getUnread(notifications: TrackedNotification[]): TrackedNotification[]`

### Критерии приёмки

- [ ] При добавлении `InfoNotification` в union — компилятор ругается в `renderNotification`
- [ ] `isErrorNotification` корректно сужает тип — после проверки доступны `retry` и `errorCode`
- [ ] `NOTIFICATION_CONFIG` сохраняет literal types (`"#4caf50"`, не `string`)
- [ ] `getUnread` возвращает только уведомления без `readAt`

---

---

## Задание 3: Типизированный API-клиент ⭐⭐⭐

### Легенда

Вы описываете типобезопасную обёртку для работы с REST API списка задач (todo).

### Что нужно сделать

1. **Модели** — опишите через `interface`:
   - `Todo` — id, title, completed, priority, createdAt
   - `User` — id, name, email

2. **Branded types** — создайте типы `TodoId` и `UserId` так, чтобы нельзя было случайно передать один вместо другого, хотя оба основаны на `number`

3. **API-ответ** — создайте generic discriminated union `ApiResult<T>` с двумя вариантами: успех (с данными типа `T`) и ошибка (с сообщением)

4. **Exhaustiveness** — напишите generic-функцию `handleResult`, которая обрабатывает все варианты `ApiResult` через switch. При добавлении нового статуса компилятор должен показать ошибку

5. **Приоритеты** — создайте массив приоритетов (low, medium, high, critical) с помощью `as const` и выведите из него тип `Priority`

6. **Маппинг приоритетов** — создайте объект-маппинг приоритетов на цвета. Используйте mapped type, `as const` или `satisfies` — на выбор. Забытый приоритет должен вызывать ошибку компиляции

7. **Utility types** — создайте:
   - `TodoPreview` — только id, title, completed из `Todo`
   - `TodoCreate` — `Todo` без id и createdAt
   - `ReadonlyTodo` — все поля `Todo` readonly

8. **Generic-функция**:
   - `apiRequest<T>(url: string): ApiResult<T>`

9. **Overload** — функция `getTodos` с двумя перегрузками:
   - `getTodos(): ApiResult<TodoPreview[]>`
   - `getTodos(id: TodoId): ApiResult<Todo>`

### Критерии приёмки

- [ ] `TodoId` нельзя передать туда, где ожидается `UserId`
- [ ] `handleResult` при новом `status` в union — ошибка компиляции
- [ ] `PRIORITY_COLORS` — забытый приоритет = ошибка компиляции
- [ ] `PRIORITIES[0]` имеет тип `"low"`, не `string`
- [ ] `getTodos()` и `getTodos(todoId)` возвращают разные типы

---

## Как сдавать

- **Минимум 2 задания** на выбор из 4
- Каждое дополнительное задание — плюс к оценке
- Один `.ts` файл на каждое задание (+ `DomShot.d.ts` если делаете задание 4)
- `tsconfig.json` с `strict: true`
- Код компилируется через `npx tsc --noEmit`

---

## Задание 4: DomShot.d.ts ⭐⭐

### Легенда

Вам дан JS-файл `DomShot.js` — утилита для создания скриншотов DOM-элементов. Типов нет. Ваша задача — написать файл деклараций, чтобы использовать библиотеку в TypeScript без `any`.

### Что нужно сделать

1. Изучите `DomShot.js` — прочитайте JSDoc-комментарии, поймите API
2. Создайте файл `DomShot.d.ts` — опишите все типы, интерфейсы и сигнатуры методов так, чтобы библиотеку можно было использовать в TypeScript без `any`
3. Создайте файл `example.ts` с примером использования библиотеки

### Критерии приёмки

- [ ] `import DomShot from "./DomShot"` — без ошибок
- [ ] `DomShot.capture(el)` — возвращает `Promise<string>`
- [ ] `DomShot.capture(el, { scale: "two" })` — ошибка компиляции
- [ ] `DomShot.capture(el, { format: "bmp" })` — ошибка компиляции (`"bmp"` не входит в `ImageFormat`)
- [ ] `DomShot.capture("not element")` — ошибка компиляции
- [ ] `DomShot.download(el, "screenshot")` — возвращает `Promise<void>`
- [ ] `DomShot.version` — тип `string`
- [ ] Все поля `DomShotOptions` опциональные

---

Удачи! Если что-то непонятно — пишите в Mattermost: **@i.gorskiy**
