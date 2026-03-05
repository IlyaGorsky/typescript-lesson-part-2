/**
 * @module union.ts
 * @description Объединения описывает значение, которое может быть одним из нескольких типов
 * Использую вертикальную черту number | string | boolean
 */


/**
 * Можем объявлять переменую объяденив с примитивами
 */
{
    let userId: number | string;
    userId = 149;
    userId = "149fff";
    // userId = false;
}

/**
 * Алисас с объядением строковых литералов
 * @alias Directions
 */
{
    type Directions = "up" | "down" | "left" | "right";

    let operatorMove: Directions = "up";

    // operatorMove = 'top';
}

/**
 * Заполняет строку слева пробелами или новой строкой
 */
{
    function padLeft(value: string, padding: number | string) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
    console.log(padLeft("Hello world", 4));
    console.log(padLeft("Hello world", " :) "));
    // console.log(padLeft("Hello world", {}));
}

/**
 * Литерал с объединением
 *
 * @name Shape
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
    let SomeShape: SimpleSquare | Rectangle | Circle;

    SomeShape = {
        kind: "circle",
        radius: 10,
    };

    SomeShape.radius;
}

/**
 * Алиас c объединением интерфейсов
 * @alias Shape
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

    type TypeShape = SimpleSquare | Rectangle | Circle;

    const figure: TypeShape = {
        kind: "circle",
        radius: 10,
    };

    function getFigureWidth(fig: TypeShape): number {
        switch (fig.kind) {
            case "rectangle":
                return fig.width;
            case "circle":
                return fig.radius;
            case "square":
                return Math.sqrt(fig.size);
        }
    }

    getFigureWidth({ kind: "circle", radius: 10 });
}
