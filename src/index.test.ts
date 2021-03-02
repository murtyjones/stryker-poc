import { shiftCoordinates } from '.';

describe('shiftCoordinates', () => {
  it('should shift x and y', () => {
    const { x } = shiftCoordinates({ x: 1, y: 1 }, { x: 10, y: 10 });
    expect(x).toBe(11);
  });
});
