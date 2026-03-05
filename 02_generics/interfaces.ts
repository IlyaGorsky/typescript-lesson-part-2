/**
 * Дженерики - обобщенные типы, способные работать с разными сущностями
 */

{
    interface IArray<T = any> {
        // Вместо T можно использовать любые имена. ItemType например
        [key: number]: T;
    }

    const array1: IArray = [1, "2", true];
    const array2: IArray<number> = [1, 2, 3];
    const _array2: IArray<number> = [1, "2", true];
}
