// Collab with david lym and justin dong
import { GREEN, NW, Quilt, STRAIGHT, qnil, ROUND, Square, Row, qcons, rcons, rnil, SE, SW, NE, Color} from './quilt';


/** Returns a quilt in pattern "A". */
export const PatternA = (rows: number, color?: Color): Quilt => {
  if(rows < 0){
    throw new Error("There are no number of rows passed in")
  } else if (rows === 0){
    return qnil;
  } else{
      const square: Square = {shape: ROUND, color: color ?? GREEN, corner: NW}
      const row: Row = rcons(square, rcons(square, rnil));
      return qcons(row, PatternA(rows - 1, color));
  }
  }
 // return qnil;  TODO: replace

/** Returns a quilt in pattern "B". */
export const PatternB = (rows: number, color?: Color): Quilt => {
  if(rows < 0){
    throw new Error("There are no number of rows passed in")
  } if (rows === 0){
    return qnil;
  } else {
      const squareOne: Square = {shape: STRAIGHT, color: color ?? GREEN, corner: SE}
      const squareTwo: Square = {shape: STRAIGHT, color: color ?? GREEN, corner: NW}
      const rowOne: Row = rcons(squareOne, rcons(squareTwo, rnil));
      // const rowTwo: Row = rcons(squareTwo, rcons(squareOne, rnil));
      return qcons(rowOne, PatternB(rows - 1, color));
  }
}

/** Returns a quilt in pattern "C". */
export const PatternC = (rows: number, color?: Color): Quilt => {
  // return qnil; TODO: replace
  if (rows % 2 === 1){
    throw new Error("There is an odd number of rows passed in")
  } else if(rows < 0){
    throw new Error("There are no rows passed in")
  } else if (rows === 0){
    return qnil;
  } else {
        const squareOne: Square = {shape: ROUND, color: color ?? GREEN, corner: NE}
        const squareTwo: Square = {shape: ROUND, color: color ?? GREEN, corner: NW}
        const rowOne: Row = rcons(squareOne, rcons(squareTwo, rnil));
        const squareThree: Square = {shape: ROUND, color: color ?? GREEN, corner: SE}
        const squareFour: Square = {shape:ROUND, color: color ?? GREEN, corner: SW}
        const rowTwo: Row = rcons(squareThree, rcons(squareFour, rnil));
        return qcons(rowOne, qcons(rowTwo, PatternC(rows - 2, color)));
    }
  }

/** Returns a quilt in pattern "D". */
export const PatternD = (rows: number, color?: Color): Quilt => {
  //return qnil;  TODO: replace
  if (rows % 2 === 1){
    throw new Error("There is an odd number of rows passed in")
  } else if(rows < 0){
    throw new Error("There are no rows passed in")
  } else if (rows === 0){
    return qnil;
  } else {
      const squareOne: Square = {shape: ROUND, color: color ?? GREEN, corner: SE}
      const squareTwo: Square = {shape:ROUND, color: color ?? GREEN, corner: SW}
      const rowOne: Row = rcons(squareOne, rcons(squareTwo, rnil));
      const squareThree: Square = {shape: ROUND, color: color ?? GREEN, corner: NE}
      const squareFour: Square = {shape: ROUND, color: color ?? GREEN, corner: NW}
      const rowTwo: Row = rcons(squareThree, rcons(squareFour, rnil));
      return qcons(rowOne, qcons(rowTwo, PatternD(rows - 2, color)));
    }
  }

/** Returns a quilt in pattern "E". */
export const PatternE = (rows : number, color ?: Color): Quilt => {
  if(rows< 0){
  throw new Error("Number of rows was negative");
}
 if(rows === 0){
  return qnil;
} else if(rows === 1){
  const squareOne: Square = {shape: STRAIGHT, color: color ?? GREEN, corner: NW};
  const squareTwo: Square = {shape: STRAIGHT, color: color ?? GREEN , corner: SE};
  const rowOne: Row = rcons(squareOne, rcons(squareTwo, rnil));
  return qcons(rowOne, qnil);
}else {
  const squareOne: Square = {shape: STRAIGHT, color: color ?? GREEN, corner: NW};
  const squareTwo: Square = {shape: STRAIGHT, color: color ?? GREEN , corner: SE};
  const rowOne: Row = rcons(squareOne, rcons(squareTwo, rnil));
  const squareThree: Square = {shape: STRAIGHT, color:color ?? GREEN , corner: SE};
  const squareFour: Square = {shape: STRAIGHT, color:color ?? GREEN , corner: NW};
  const rowTwo: Row = rcons(squareThree,rcons(squareFour, rnil));
  return qcons(rowOne, qcons(rowTwo,PatternE(rows - 2, color)));
}
}
