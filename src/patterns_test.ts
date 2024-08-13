 import * as assert from 'assert';
 import { qnil, qcons, Square, Row, rcons, rnil, STRAIGHT, ROUND, NW, NE, SW, SE, RED, GREEN} from './quilt';
 import { PatternA, PatternB, PatternC, PatternD, PatternE } from './patterns';


describe('patterns', function() {

  // Feel free to use these in your tests (though it's not required)
  // and create any other consts you find useful:
  
   const nw_rnd_grn: Square = {shape: ROUND, color: GREEN, corner: NW};
   const nw_rnd_red: Square = {shape: ROUND, color: RED, corner: NW};
   const nw_strt_grn: Square = {shape: STRAIGHT, color: GREEN, corner: NW};
   const nw_strt_red: Square = {shape: STRAIGHT, color: RED, corner: NW};

   const ne_rnd_grn: Square = {shape: ROUND, color: GREEN, corner: NE};
   const ne_rnd_red: Square = {shape: ROUND, color: RED, corner: NE};
   const ne_strt_grn: Square = {shape: STRAIGHT, color: GREEN, corner: NE};
   const ne_strt_red: Square = {shape: STRAIGHT, color: RED, corner: NE};

   const se_rnd_grn: Square = {shape: ROUND, color: GREEN, corner: SE};
   const se_rnd_red: Square = {shape: ROUND, color: RED, corner: SE};
   const se_strt_grn: Square = {shape: STRAIGHT, color: GREEN, corner: SE};
   const se_strt_red: Square = {shape: STRAIGHT, color: RED, corner: SE};

   const sw_rnd_grn: Square = {shape: ROUND, color: GREEN, corner: SW};
   const sw_rnd_red: Square = {shape: ROUND, color: RED, corner: SW};
   const sw_strt_grn: Square = {shape: STRAIGHT, color: GREEN, corner: SW};
   const sw_strt_red: Square = {shape: STRAIGHT, color: RED, corner: SW};

  it('PatternA', function() {
    // TODO: Uncomment these example tests and add more tests in problem 1g
    const gr_rnd_row: Row = rcons(ne_rnd_grn, rcons(ne_rnd_grn, rnil));
    const rd_rnd_row: Row = rcons(ne_rnd_red, rcons(ne_rnd_red, rnil));
    // Test case for 0 recursive calls
    assert.deepStrictEqual(PatternA(0n, GREEN), []);
    // Test case for 1 recursive call
    assert.deepStrictEqual(PatternA(1n, GREEN), [gr_rnd_row]);
    assert.deepStrictEqual(PatternA(1n, RED), [rd_rnd_row]);
    // Test case for 2+ recursive calls
    assert.deepStrictEqual(PatternA(4n, undefined),
      qcons(gr_rnd_row, qcons(gr_rnd_row, qcons(gr_rnd_row, qcons(gr_rnd_row, qnil)))));
     
    assert.deepStrictEqual(PatternA(4n, RED),  
      qcons(rd_rnd_row, qcons(rd_rnd_row, qcons(rd_rnd_row, qcons(rd_rnd_row, qnil)))));
    // Test case for error handling
    assert.throws(() => PatternA(-1n, GREEN), Error);
    assert.throws(() => PatternA(-1n, RED), Error);
  });


  it('PatternB', function() {
    const gr_strt_row: Row = rcons(ne_strt_grn, rcons(sw_strt_grn, rnil));
    const rd_strt_row: Row = rcons(ne_strt_red, rcons(ne_strt_red, rnil));
    // Test case for 0 recursive calls
    assert.deepStrictEqual(PatternB(0n, GREEN), []);
    // Test case for 1 recursive call
    assert.deepStrictEqual(PatternB(1n, GREEN), [gr_strt_row]);
    assert.deepStrictEqual(PatternB(1n, RED), [rd_strt_row]);
    // Test case for 2+ recursive calls
    assert.deepStrictEqual(PatternB(3n, GREEN),
      qcons(gr_strt_row, qcons(gr_strt_row, qcons(gr_strt_row, qnil))));
    assert.deepStrictEqual(PatternB(3n, RED),
      qcons(rd_strt_row, qcons(rd_strt_row, qcons(rd_strt_row, qnil))));
    // Test case for error handling
    assert.throws(() => PatternB(-1n, GREEN), Error);
    assert.throws(() => PatternB(-1n, RED), Error);
  });

  it('PatternC', function() {
    const gr_rnd_row1: Row = rcons(se_rnd_grn, rcons(sw_rnd_grn, rnil));
    const gr_rnd_row2: Row = rcons(ne_rnd_grn, rcons(nw_rnd_grn, rnil));
    const rd_rnd_row1: Row = rcons(se_rnd_red, rcons(sw_rnd_red, rnil));
    const rd_rnd_row2: Row = rcons(ne_rnd_red, rcons(nw_rnd_red, rnil));
    // Test case for 2 rows (base case)
    assert.deepStrictEqual(PatternC(2n, GREEN),
      qcons(gr_rnd_row1, qcons(gr_rnd_row2, qnil)));
    assert.deepStrictEqual(PatternC(2n, RED),
      qcons(rd_rnd_row1, qcons(rd_rnd_row2, qnil)));
    // Test case for 2+ recursive calls
    assert.deepStrictEqual(PatternC(6n, GREEN),
      qcons(gr_rnd_row1, qcons(gr_rnd_row2, qcons(gr_rnd_row1, qcons(gr_rnd_row2, qcons(gr_rnd_row1, qcons(gr_rnd_row2, qnil)))))));
    assert.deepStrictEqual(PatternC(6n, RED),
      qcons(rd_rnd_row1, qcons(rd_rnd_row2, qcons(rd_rnd_row1, qcons(rd_rnd_row2, qcons(rd_rnd_row1, qcons(rd_rnd_row2, qnil)))))));

    // Test case for odd rows error handling
    assert.throws(() => PatternC(3n, RED), Error);
    // Test case for negative rows error handling
    assert.throws(() => PatternC(-2n, RED), Error);
  });

  it('PatternD', function() {
    const gr_rnd_row1: Row = rcons(nw_rnd_grn, rcons(ne_rnd_grn, rnil));
    const gr_rnd_row2: Row = rcons(sw_rnd_grn, rcons(se_rnd_grn, rnil));
    const rd_rnd_row1: Row = rcons(nw_rnd_red, rcons(ne_rnd_red, rnil));
    const rd_rnd_row2: Row = rcons(sw_rnd_red, rcons(se_rnd_red, rnil));
    // Test case for 2 rows (base case)
    assert.deepStrictEqual(PatternD(2n, GREEN),
      qcons(gr_rnd_row1, qcons(gr_rnd_row2, qnil)));
    assert.deepStrictEqual(PatternD(2n, RED),
      qcons(rd_rnd_row1, qcons(rd_rnd_row2, qnil)));
    // Test case for 2+ recursive calls
    assert.deepStrictEqual(PatternD(6n, GREEN),
      qcons(gr_rnd_row1, qcons(gr_rnd_row2, qcons(gr_rnd_row1, qcons(gr_rnd_row2, qcons(gr_rnd_row1, qcons(gr_rnd_row2, qnil)))))));
      assert.deepStrictEqual(PatternD(6n, RED),
      qcons(rd_rnd_row1, qcons(rd_rnd_row2, qcons(rd_rnd_row1, qcons(rd_rnd_row2, qcons(rd_rnd_row1, qcons(rd_rnd_row2, qnil)))))));
    // Test case for odd rows error handling
    assert.throws(() => PatternD(3n, RED), Error);
    // Test case for negative rows error handling
    assert.throws(() => PatternD(-2n, RED), Error);
  });

  it('PatternE', function() {
    const gr_strt_row1: Row = rcons(ne_strt_grn, rcons(sw_strt_grn, rnil));
    const gr_strt_row2: Row = rcons(se_strt_grn, rcons(ne_strt_grn, rnil));
    const rd_strt_row1: Row = rcons(ne_strt_red, rcons(sw_strt_red, rnil));
    const rd_strt_row2: Row = rcons(se_strt_red, rcons(ne_strt_red, rnil));
    // Test case for 2 rows (base case)
    assert.deepStrictEqual(PatternE(2n, GREEN),
      qcons(gr_strt_row1, qcons(gr_strt_row2, qnil)));
    assert.deepStrictEqual(PatternE(2n, RED),
      qcons(gr_strt_row1, qcons(rd_strt_row2, qnil)));
    // Test case for 2+ recursive calls
    assert.deepStrictEqual(PatternE(4n, GREEN),
      qcons(gr_strt_row1, qcons(gr_strt_row2, qcons(gr_strt_row1, qcons(gr_strt_row2, qnil)))));
    assert.deepStrictEqual(PatternE(4n, RED),
      qcons(rd_strt_row1, qcons(rd_strt_row2, qcons(rd_strt_row1, qcons(rd_strt_row2, qnil)))));
    // Test case for odd rows error handling
    assert.throws(() => PatternE(3n, RED), Error);
    // Test case for negative rows error handling
    assert.throws(() => PatternE(-2n, RED), Error);
  });
});
