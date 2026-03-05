/**
 * Alias
 * @module alias.ts
 * @description Псевдомиы могут иминовать примитивы, использовать объяедения, кортежи и пересечения.
 *              Создаются с помощью ключевого слова type
 */

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName2(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  }

  return n();
}

// Алиасы могут быть анотированы структурно
type UserProfile = {
  name: string;
  id: number;
  fullName?: string;
};

type ErrorCode = {
  code: 400;
};

type Data = {
  data: number[];
};

type ResponseData = Data & ErrorCode;

function someResolever2(data: ResponseData) {
  if (data.code === 400) {
    throw new Error("Bad request");
  }
  return data.data;
}

{
  type Point2d = {
    x: number;
    y: number;
  };

  type Point3d = {
    x: number;
    y: number;
    z: number;
  };

  let point2d: Point2d = {
    x: 1,
    y: 2,
  };

  let point3d: Point3d = {
    x: 1,
    y: 2,
    z: 0,
  };

  point2d = point3d;
  // point3d = point2d
}
