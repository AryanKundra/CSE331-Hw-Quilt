import { Square, Row, rconcat, Quilt, qnil, qcons, qconcat, Corner, NE,SW,NW,SE } from './quilt';


/** Returns the same square but flipped vertically. */
export const sflip_vert = (s: Square): Square => {
  const flippedCorner: Corner = s.corner === NW ? SW :
  s.corner === NE ? SE :
  s.corner === SW ? NW :
  s.corner === SE ? NE : s.corner;

  return { shape: s.shape, color: s.color, corner: flippedCorner };
}

/** Returns the same row but flipped vertically. */
export const rflip_vert = (r: Row): Row => {
  return r;  // TODO: replace
}

/** Returns the same quilt but flipped vertically. */
export const qflip_vert = (q: Quilt): Quilt => {
  return q;  // TODO: replace
}


/** Returns the same square but flipped horizontally. */
export const sflip_horz = (s: Square): Square => {
  return s;  // TODO: replace
}

/** Returns the same row but flipped horizontally. */
export const rflip_horz = (r: Row): Row => {
  return r;  // TODO: replace
}

/** Returns the same quilt but flipped horizontally. */
export const qflip_horz = (q: Quilt): Quilt => {
  return q;  // TODO: replace
}


/**
 * Returns the result of sewing together q1 and q2 horizontally, i.e.,
 * concatenating each of their rows. Throws an exception if they are not the
 * same length.
 */
export const sew = (q1: Quilt, q2: Quilt): Quilt => {
  if (q1.kind === "qnil") {
    if (q2.kind === "qnil") {
      return qnil;
    } else {
      throw new Error("bad q2 argument: q1 has none rows but q2 has some");
    }
  } else {
    if (q2.kind === "qnil") {
      throw new Error("bad q1 argument: q2 has none rows but q1 has some");
    } else {
      return qcons(rconcat(q1.hd, q2.hd), sew(q1.tl, q2.tl));
    }
  }
};


/**
 * Returns the result of symmetrizing this quilt first vertically, by sewing it
 * together with its horizontally flipped version, and then horizontally, by
 * concatenating its rows with those of its vertically flipped version.
 */
export const symmetrize = (q: Quilt): Quilt => {
  const r = sew(q, qflip_horz(q));
  return qconcat(r, qflip_vert(r));
};