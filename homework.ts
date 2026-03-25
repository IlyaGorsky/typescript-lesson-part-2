// homework.ts

// =========================
// Задание 1: Каталог фильмов
// =========================

const GENRES = ["comedy", "drama", "action", "horror", "sci-fi"] as const;
type Genre = (typeof GENRES)[number];

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: Genre;
  description?: string;
  director?: string;
}

type SortBy = "year" | "rating" | "title";

type MovieCard = Pick<Movie, "id" | "title" | "year" | "rating">;
type MovieFull = Readonly<Movie>;

const GENRE_EMOJI = {
  comedy: "😂",
  drama: "🎭",
  action: "💥",
  horror: "👻",
  "sci-fi": "🚀",
} as const satisfies { readonly [K in Genre]: string };

function filterByGenre(movies: Movie[], genre: Genre): Movie[] {
  return movies.filter((movie) => movie.genre === genre);
}

function sortMovies(movies: Movie[], by: SortBy): Movie[] {
  const sorted = [...movies];

  switch (by) {
    case "year":
      return sorted.sort((a, b) => a.year - b.year);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return assertNever(by);
  }
}

function toCard(movie: Movie): MovieCard {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    rating: movie.rating,
  };
}

// ================================
// Задание 2: Система уведомлений
// ================================

interface SuccessNotification {
  type: "success";
  message: string;
  duration: number;
}

interface ErrorNotification {
  type: "error";
  message: string;
  retry: boolean;
  errorCode: string;
}

interface WarningNotification {
  type: "warning";
  message: string;
}

type AppNotification =
  | SuccessNotification
  | ErrorNotification
  | WarningNotification;

const NOTIFICATION_CONFIG = {
  success: { icon: "✅", color: "#4caf50" },
  error: { icon: "❌", color: "#f44336" },
  warning: { icon: "⚠️", color: "#ff9800" },
} as const satisfies {
  readonly [K in AppNotification["type"]]: {
    readonly icon: string;
    readonly color: string;
  };
};

type NotificationPreview = Pick<AppNotification, "type" | "message">;
type NotificationWithoutMeta = Omit<ErrorNotification, "errorCode">;
type TrackedNotification = AppNotification & {
  id: string;
  createdAt: Date;
  readAt?: Date;
};

function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${String(value)}`);
}

function renderNotification(n: AppNotification): string {
  const config = NOTIFICATION_CONFIG[n.type];

  switch (n.type) {
    case "success":
      return `${config.icon} ${n.message} (hide in ${n.duration}ms) [${config.color}]`;
    case "error":
      return `${config.icon} ${n.message} (retry: ${n.retry ? "yes" : "no"}, code: ${n.errorCode}) [${config.color}]`;
    case "warning":
      return `${config.icon} ${n.message} [${config.color}]`;
    default:
      return assertNever(n);
  }
}

function isErrorNotification(n: AppNotification): n is ErrorNotification {
  return n.type === "error";
}

function getUnread(notifications: TrackedNotification[]): TrackedNotification[] {
  return notifications.filter((notification) => notification.readAt === undefined);
}

// =====================================
// Задание 3: Типизированный API-клиент
// =====================================

type Brand<T, B extends string> = T & { readonly __brand: B };

type TodoItemId = Brand<number, "TodoItemId">;
type UserId = Brand<number, "UserId">;

const PRIORITIES = ["low", "medium", "high", "critical"] as const;
type Priority = (typeof PRIORITIES)[number];

interface TodoItem {
  id: TodoItemId;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
}

interface AppUser {
  id: UserId;
  name: string;
  email: string;
}

type ApiSuccess<T> = {
  status: "success";
  data: T;
};

type ApiError = {
  status: "error";
  message: string;
};

type ApiResult<T> = ApiSuccess<T> | ApiError;

const PRIORITY_COLORS = {
  low: "#9e9e9e",
  medium: "#2196f3",
  high: "#ff9800",
  critical: "#f44336",
} as const satisfies { readonly [K in Priority]: string };

type TodoItemPreview = Pick<TodoItem, "id" | "title" | "completed">;
type TodoItemCreate = Omit<TodoItem, "id" | "createdAt">;
type ReadonlyTodoItem = Readonly<TodoItem>;

function handleResult<T>(result: ApiResult<T>): string {
  switch (result.status) {
    case "success":
      return `Success: ${JSON.stringify(result.data)}`;
    case "error":
      return `Error: ${result.message}`;
    default:
      return assertNever(result);
  }
}

function apiRequest<T>(url: string): ApiResult<T> {
  if (url.length === 0) {
    return {
      status: "error",
      message: "URL cannot be empty",
    };
  }

  return {
    status: "error",
    message: `No mock implementation for ${url}`,
  };
}

function getTodoItems(): ApiResult<TodoItemPreview[]>;
function getTodoItems(id: TodoItemId): ApiResult<TodoItem>;
function getTodoItems(id?: TodoItemId): ApiResult<TodoItemPreview[] | TodoItem> {
  if (id === undefined) {
    return apiRequest<TodoItemPreview[]>("/TodoItems");
  }

  return apiRequest<TodoItem>(`/TodoItems/${id}`);
}

// =========================
// Примеры использования
// =========================

const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "sci-fi",
    director: "Christopher Nolan",
  },
  {
    id: 2,
    title: "The Shining",
    year: 1980,
    rating: 8.4,
    genre: "horror",
  },
  {
    id: 3,
    title: "The Mask",
    year: 1994,
    rating: 6.9,
    genre: "comedy",
    description: "Comedy classic",
  },
];

const sciFiMovies = filterByGenre(movies, "sci-fi");
const sortedByTitle = sortMovies(movies, "title");
const movieCard = toCard(movies[0]);
const readonlyMovie: MovieFull = movies[0];

const notifications: TrackedNotification[] = [
  {
    id: "n1",
    type: "success",
    message: "Saved successfully",
    duration: 3000,
    createdAt: new Date("2026-03-25T10:00:00Z"),
  },
  {
    id: "n2",
    type: "error",
    message: "Request failed",
    retry: true,
    errorCode: "E500",
    createdAt: new Date("2026-03-25T11:00:00Z"),
    readAt: new Date("2026-03-25T11:05:00Z"),
  },
  {
    id: "n3",
    type: "warning",
    message: "Password expires soon",
    createdAt: new Date("2026-03-25T12:00:00Z"),
  },
];

const unreadNotifications = getUnread(notifications);
const rendered = renderNotification(notifications[0]);

const maybeError: AppNotification = notifications[1];
if (isErrorNotification(maybeError)) {
  const canRetry: boolean = maybeError.retry;
  const code: string = maybeError.errorCode;
  void canRetry;
  void code;
}

const preview: NotificationPreview = {
  type: "warning",
  message: "Be careful",
};

const errorWithoutMeta: NotificationWithoutMeta = {
  type: "error",
  message: "Network error",
  retry: false,
};

const TodoItemId = 1 as TodoItemId;
const userId = 1 as UserId;

const TodoItemCreate: TodoItemCreate = {
  title: "Write homework",
  completed: false,
  priority: "high",
};

const readonlyTodoItem: ReadonlyTodoItem = {
  id: TodoItemId,
  title: "Check types",
  completed: false,
  priority: "critical",
  createdAt: "2026-03-25T12:00:00Z",
};

const TodoItemsResult = getTodoItems();
const singleTodoItemResult = getTodoItems(TodoItemId);

const handledTodoItems = handleResult(TodoItemsResult);
const handledSingleTodoItem = handleResult(singleTodoItemResult);

const firstPriority: "low" = PRIORITIES[0];
const successColor: "#4caf50" = NOTIFICATION_CONFIG.success.color;

void sciFiMovies;
void sortedByTitle;
void movieCard;
void readonlyMovie;
void unreadNotifications;
void rendered;
void preview;
void errorWithoutMeta;
void userId;
void TodoItemCreate;
void readonlyTodoItem;
void handledTodoItems;
void handledSingleTodoItem;
void firstPriority;
void successColor;

// Проверки для ручной валидации:
//
// const wrongAssignment: UserId = TodoItemId; // ошибка компиляции
// const invalidGenreMovies = filterByGenre(movies, "romance"); // ошибка компиляции