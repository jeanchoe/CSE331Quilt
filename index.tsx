// Collab with david lym and justin dong
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Color, RED, GREEN, Quilt } from './quilt';
import { PatternA, PatternB, PatternC, PatternD, PatternE } from './patterns';
import { QuiltElem } from './quilt_draw';
import {symmetrize} from './quilt_ops';
import {QuiltTableElem} from './quilt_draw_table';
import { QuiltForm } from './quilt_form';


// Returns the pattern number, which must be A-E, or undefined if it was not
// provided or is not in the valid range.
const getPattern = (params: URLSearchParams): string|undefined => {
  if (!params.has("pattern"))
    return undefined;

  switch (params.get("pattern")) {
    case "A": return "A";
    case "B": return "B";
    case "C": return "C";
    case "D": return "D";
    case "E": return "E";
    default:  return undefined;
  }
}


// Returns the color requested or undefined if none was specified.
const getColor = (params: URLSearchParams): Color|undefined => {
  const colorStr = params.get("color");
  if (colorStr === null) {
    return undefined;
  } else {
    const color = colorStr.toLowerCase();
    if (color === "red") {
      return RED;
    } else if (color === "green") {
      return GREEN;
    } else {
      return undefined;
    }
  }
}


// Returns the number of rows, which must be a natural number. Defaults to 4.
const getRows = (params: URLSearchParams): number => {
  const rowStr = params.get("rows");
  if (rowStr === null) {
    return 4;
  } else {
    const rows = parseInt(rowStr);
    return !isNaN(rows) ? rows : 4;
  }
};


// Returns the quilt with the given pattern.
// Throws an exception if the pattern is not A-E.
const getQuilt = (rowNum: number, pattern: string, color: Color| undefined): Quilt => {
  if(typeof color === undefined){
    if(params.has("symmetrize")){
      switch (pattern) {
        case "A": return symmetrize(PatternA(rowNum, GREEN));
        case "B": return symmetrize(PatternB(rowNum, GREEN));
        case "C": return symmetrize(PatternC(rowNum, GREEN));
        case "D": return symmetrize(PatternD(rowNum, GREEN));
        case "E": return symmetrize(PatternE(rowNum, GREEN));
        default:  throw new Error('impossible');
      }
    } else  {
      switch (pattern) {
        case "A": return PatternA(rowNum, GREEN);
        case "B": return PatternB(rowNum, GREEN);
        case "C": return PatternC(rowNum, GREEN);
        case "D": return PatternD(rowNum, GREEN);
        case "E": return PatternE(rowNum, GREEN);
        default:  throw new Error('impossible');
      }
    }
  } else {
  if(params.has("symmetrize")){
    switch (pattern) {
      case "A": return symmetrize(PatternA(rowNum, color));
      case "B": return symmetrize(PatternB(rowNum, color));
      case "C": return symmetrize(PatternC(rowNum, color));
      case "D": return symmetrize(PatternD(rowNum, color));
      case "E": return symmetrize(PatternE(rowNum, color));
      default:  throw new Error('impossible');
    }
  } else  {
    switch (pattern) {
      case "A": return PatternA(rowNum, color);
      case "B": return PatternB(rowNum, color);
      case "C": return PatternC(rowNum, color);
      case "D": return PatternD(rowNum, color);
      case "E": return PatternE(rowNum, color);
      default:  throw new Error('impossible');
    }
  }
}
};

// Parse the arguments to the page, which can indicate the color and number of
// rows in the quilt.
const params: URLSearchParams = new URLSearchParams(window.location.search);
const color: undefined | Color = getColor(params);
// const sym: symmetrize =
const rowNum: number = getRows(params);
getColor(params);  // not used yet
getRows(params);   // not used yet


// Create a root in which to show the quilt.
const main: HTMLElement|null = document.getElementById('main');
if (main === null)
  throw new Error('missing main element');
const root: Root = createRoot(main);

// Invoke the function for the pattern given in the query params.
const pattern: string|undefined = getPattern(params);
if (pattern === undefined) {
  // window.location.replace("/?pattern=A");  // redirect with default pattern
  root.render(
    <React.StrictMode><QuiltForm/></React.StrictMode>);

} else {
  // Display the quilt in the page.
  try {
    const result =  getQuilt(rowNum, pattern, color);
      if(params.has('table')){
      const table = QuiltTableElem({quilt: result});
      root.render(<React.StrictMode>{table}</React.StrictMode>);
    } else {
      root.render(
        <React.StrictMode><QuiltElem quilt = { result}/></React.StrictMode>
      );
    }

  } catch (e: unknown) {
    if (e instanceof Error) {
      root.render(<p><b>Error</b>: {e.message}</p>);
    } else {
      throw e;
    }
  }
}



