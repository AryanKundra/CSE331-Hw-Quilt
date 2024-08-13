import { Quilt, qnil, qconcat, Color, qcons, Square, Row, rcons, rnil, STRAIGHT, ROUND, NW, NE, SW, SE, RED} from './quilt';


/** Returns a quilt in pattern "A". */
export const PatternA = (rows: bigint, color: Color | undefined): Quilt => {
  if (rows < 1n) {
    throw new Error("Pattern A: Number of rows can't be negative");
  }

  const shape = ROUND;
  const square1: Square = { shape, color: color ?? RED, corner: NE };
  const square2: Square = { shape, color: color ?? RED, corner: NE };
  const row: Row = rcons(square1, rcons(square2, rnil));

  return rows === 1n
    ? qcons(row, qnil)
    : qcons(row, PatternA(rows - 1n, color));
};

/** Returns a quilt in pattern "B". */
export const PatternB = (rows: bigint, color : Color | undefined): Quilt => {
  if (rows < 1n){
    throw new Error("Pattern B: Number of rows can't be negative")
  }
  const shape = STRAIGHT;
  
  const square1: Square = { shape, color: color ?? RED, corner: NE };
  const square2: Square = { shape, color: color ?? RED, corner: SW };
  const row: Row = rcons(square1, rcons(square2, rnil));

  return rows === 1n
    ? qcons(row, qnil)
    : qcons(row, PatternB(rows - 1n, color));
}

/** Returns a quilt in pattern "C". */
export const PatternC = (rows : bigint, color : Color): Quilt => {
  if (rows % 2n !== 0n || rows < 1n) {
    throw new Error("Pattern C: number of rows must be even and positive");
  }
  const shape = ROUND;
  const square1: Square = { shape, color: color ?? RED, corner: SE };
  const square2: Square = { shape, color: color ?? RED, corner: SW };
  const square3: Square = { shape, color: color ?? RED, corner: NE };
  const square4: Square = { shape, color: color ?? RED, corner: NW };
  
  const row: Row = rcons(square1, rcons(square2, rnil));
  const row2 : Row = rcons(square3, rcons(square4, rnil));

  return rows === 2n
    ?qconcat(qcons(row, qnil), qcons(row2, qnil))
    :qcons(row,qcons(row2, PatternC(rows - 2n, color)));
}

/** Returns a quilt in pattern "D". */
export const PatternD = (rows: bigint, color : Color): Quilt => {
  if (rows % 2n !== 0n || rows < 1n) {
    throw new Error("Pattern D: number of rows must be even and positive");
  }
  const shape = ROUND;

  const square1: Square = { shape, color: color ?? RED, corner: NW };
  const square2: Square = { shape, color: color ?? RED, corner: NE };
  const square3: Square = { shape, color: color ?? RED, corner: SW };
  const square4: Square = { shape, color: color ?? RED, corner: SE };
  const row: Row = rcons(square1, rcons(square2, rnil));
  const row2 : Row = rcons(square3, rcons(square4, rnil));

  return rows === 2n
    ?qconcat(qcons(row, qnil), qcons(row2, qnil))
    :qcons(row,qcons(row2, PatternD(rows - 2n, color)));
}


/** Returns a quilt in pattern "E". */
export const PatternE = (rows: bigint, color: Color | undefined): Quilt => {
  if (rows % 2n !== 0n || rows < 1n) {
    throw new Error("Pattern E: number of rows must be even and positive");
  }

  const shape = STRAIGHT;

  const square1: Square = { shape, color: color ?? RED, corner: NE };
  const square2: Square = { shape, color: color ?? RED, corner: NW };
  const square3: Square = { shape, color: color ?? RED, corner: SE };
  const square4: Square = { shape, color: color ?? RED, corner: SW };

  const row1: Row = rcons(square1, rcons(square4, rnil));
  const row2: Row = rcons(square3, rcons(square2, rnil));

  return rows === 2n
    ? qcons(row1, qcons(row2, qnil))
    : qconcat(qcons(row1, qcons(row2, qnil)), PatternE(rows - 2n, color));
};
