# Typescript-School-2026 (ЧАСТЬ 2)

> **Часть 1:** [typescript-lesson-part-1](https://github.com/IlyaGorsky/typescript-lesson-part-1)

- [Typescript-School-2026 (ЧАСТЬ 2)](#typescript-school-2026-часть-2)
  - [Презентация](#презентация)
  - [Обратная связь](#обратная-связь)
  - [Домашнее задание](#домашнее-задание)
  - [Структура репозитория](#структура-репозитория)
  - [Старт](#старт)
    - [Установка](#установка)
    - [Инициализация тайпскрипта в проекте](#инициализация-тайпскрипта-в-проекте)
    - [Typescript playground](#typescript-playground)
  - [tsconfig.json](#tsconfigjson)
    - [Видео на русском c разбором каждого поля конфигурации](#видео-на-русском-c-разбором-каждого-поля-конфигурации)
    - [Статьи](#статьи)
  - [Рекомендуемые расширения VSCode](#рекомендуемые-расширения-vscode)
    - [Шрифт автора курса](#шрифт-автора-курса)
  - [Контакты](#контакты)
  - [Полезные материалы](#полезные-материалы)
    - [Документация](#документация)
    - [Практика](#практика)
    - [Шпаргалки](#шпаргалки)

## Презентация

[Открыть презентацию](https://docs.google.com/presentation/d/1drhCemlBw1qPrl4lqLq-VVJE35V5txp3/edit?usp=sharing&ouid=114002188979982635975&rtpof=true&sd=true)

## Обратная связь

Пожалуйста, оставьте отзыв о занятии — это поможет сделать курс лучше:

[Заполнить форму обратной связи](https://docs.google.com/forms/d/e/1FAIpQLSdmutBlw0QeTql4RZGazhCj5T5PPdZ_puEUjqyrqL09-VYQhg/viewform)

## Домашнее задание

[Подробное описание домашнего задания](homework/README.md)

| # | Тема | Сложность | Статус |
| - | ---- | --------- | ------ |
| 0 | [Type Challenges](https://github.com/type-challenges/type-challenges) (5 задач Easy) | ⭐ | Обязательное |
| 1 | Каталог фильмов | ⭐ | Минимум 2 на выбор |
| 2 | Система уведомлений | ⭐⭐ | Минимум 2 на выбор |
| 3 | Типизированный API-клиент | ⭐⭐⭐ | Минимум 2 на выбор |
| 4 | DomShot.d.ts | ⭐⭐ | Минимум 2 на выбор |

**Требования:** `strict: true`, ноль `any`, код компилируется через `npx tsc --noEmit`.

## Структура репозитория

| Папка | Описание |
| ----- | -------- |
| `02_function/` | Перегрузка функций (overload) и type guard |
| `02_interface/` | Интерфейсы: функции, проверки типов, merge declaration |
| `02_interscection/` | Intersection types (пересечение типов) |
| `02_narrowing/` | Сужение типов (narrowing), union, never |
| `02_generics/` | Generics: функции, интерфейсы, обобщённые типы |
| `02_assertions/` | Type assertions: as const, satisfies |
| `02_literals/` | Литеральные типы: массивы и объекты |
| `02_utilty_operators/` | Утилитарные операторы: keyof, typeof, Pick, Omit, Readonly, ReturnType |
| `02_nominal_typing/` | Номинальная типизация (branding) |
| `02_d.ts/` | Файлы деклараций (.d.ts) |
| `homework/` | Домашнее задание и материалы к нему |

## Старт

Если на проекте есть package.json, то нужно выполнить следующие команды для вашего пакетного менеджера

### Установка

```bash
npm install typescript -g
```

или

```bash
yarn install typescript -g
```

Для того, чтобы добавить typescript в проект нужны следующие команды

```bash
npm i -D typescript@5.7.2 --save-dev
```

или

```bash
yarn add typescript@5.7.2 --save-dev
```

### Инициализация тайпскрипта в проекте

```bash
npx tsc
```

### Typescript playground

Онлайн-редактор для экспериментов с TypeScript прямо в браузере — не нужно ничего устанавливать. Удобно для быстрой проверки типов, изучения ошибок компилятора и обмена примерами кода по ссылке.

<https://www.typescriptlang.org/play/>

## tsconfig.json

Файл конфигурации TypeScript — определяет параметры компиляции и какие файлы включать в проект. Создать можно командой:

```bash
npx tsc --init
```

- [Официальная документация по tsconfig](https://www.typescriptlang.org/tsconfig/)
- [Справочник всех опций компилятора](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### Видео на русском c разбором каждого поля конфигурации

<https://youtu.be/7DtZtHSJ_S4?t=8814>

### Статьи

[TypeScript: Раскладываем tsconfig по полочкам. Часть 1](https://habr.com/ru/articles/542234/)

[TypeScript: Раскладываем tsconfig по полочкам. Часть 2 — Всё про строгость](https://habr.com/ru/articles/557738/)

## Рекомендуемые расширения VSCode

При открытии проекта VSCode предложит установить рекомендуемые расширения автоматически (из `.vscode/extensions.json`).

| Расширение | Описание |
| ---------- | -------- |
| [Quokka.js](https://marketplace.visualstudio.com/items?itemName=wallabyjs.quokka-vscode) | Мгновенное выполнение кода прямо в редакторе — результат виден рядом с каждой строкой |
| [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors) | Превращает нечитаемые ошибки TS в понятный, форматированный вид |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | Показывает ошибки и предупреждения прямо в строке кода, а не только в панели проблем |
| [GitHub Theme](https://marketplace.visualstudio.com/items?itemName=github.github-vscode-theme) | Тема оформления в стиле GitHub (опционально — тема автора курса) |
| [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) | Расширенная работа с git: blame, история файлов, авторство строк |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | Автоматическое форматирование кода при сохранении |

### Шрифт автора курса

В презентации и редакторе используется шрифт **Monaspace Neon** с включёнными лигатурами — бесплатный моноширинный шрифт от GitHub.

- [Скачать Monaspace](https://monaspace.githubnext.com/)

Настройки VSCode для этого шрифта:

```json
{
  "editor.fontFamily": "Monaspace neon",
  "editor.fontSize": 14,
  "editor.fontWeight": "300",
  "editor.fontLigatures": "'calt', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'liga'"
}
```

## Контакты

Вопросы по курсу можно задать в Mattermost: **@i.gorskiy**

## Полезные материалы

### Документация

- [TypeScript Handbook (официальный)](https://www.typescriptlang.org/docs/handbook/)
- [Function Overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads)
- [Narrowing и never](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)
- [Non-null Assertion Operator](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Оператор satisfies (анонс TS 4.9)](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#hamilton)
- [Nominal typing в TypeScript](https://spin.atomicobject.com/typescript-flexible-nominal-typing/)

### Практика

- [Type Challenges](https://github.com/type-challenges/type-challenges) — задачи на систему типов

### Глоссарий

- [Глоссарий — Часть 1](glossary-part-1.md)
- [Глоссарий — Часть 2](glossary.md)

### Шпаргалки

- [TypeScript Cheatsheets](https://www.typescriptlang.org/cheatsheets/)
