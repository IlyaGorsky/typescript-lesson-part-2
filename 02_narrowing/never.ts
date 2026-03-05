/**
 * Exhaustiveness checking
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
 */
{
  interface SimpleSquare {
    kind: "square";
    size: number;
  }

  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }

  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Foo {
    kind: "foo";
    radius: number;
  }

  type TypeShape = SimpleSquare | Rectangle | Circle | Foo;

  const figure: TypeShape = {
    kind: "rectangle",
    width: 10,
    height: 10,
  };

  function getFigureWidth(fig: TypeShape): number {
    switch (fig.kind) {
      case "rectangle":
        return fig.width;
      case "circle":
        return fig.radius;
      case "square":
        return Math.sqrt(fig.size);
      default:
        const _exhaustiveCheck: never = fig;
        return _exhaustiveCheck;
    }
  }

  getFigureWidth({ kind: "circle", radius: 10 });
}
