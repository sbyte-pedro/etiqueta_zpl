export const DOTS_PER_MM = 8.03;

export const mmToDots = (mm: number): number => Math.round(mm * DOTS_PER_MM);

/** Returns dots as mm with one decimal place (e.g. 80.3). */
export const dotsToMm = (dots: number): number =>
  parseFloat((dots / DOTS_PER_MM).toFixed(1));
