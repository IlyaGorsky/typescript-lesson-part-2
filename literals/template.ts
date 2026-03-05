/**
 * Шаблонный литеральный тип String
 * @name Template String
 */
type AxisX = "top" | "bottom";
type AxisY = "left" | "right";

type Sides = `${AxisX}-${AxisY}`;

type BorderRadius = `border-${Sides}-radius`;
