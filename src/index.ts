export interface Coords {
  x: number;
  y: number;
}

export const shiftCoordinates = (target: Coords, toApply: Coords): Coords => ({
  x: target.x + toApply.x,
  y: target.y + toApply.y,
});
