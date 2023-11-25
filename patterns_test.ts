// Collab with david lym and justin dong
import * as assert from 'assert';
import { NW, GREEN, RED, ROUND, Square, Row, rnil, rcons, qnil, qcons, STRAIGHT, NE, SW, SE} from './quilt';
import { PatternA, PatternB, PatternC, PatternD, PatternE} from './patterns';


describe('patterns', function() {


  it('PatternA', function() {
    const nw_round_green: Square = {shape: ROUND, color: GREEN, corner: NW};
    const nw_round_red: Square = {shape: ROUND, color: RED, corner: NW};
    const row_green: Row = rcons(nw_round_green, rcons(nw_round_green, rnil));
    const row_red: Row = rcons(nw_round_red, rcons(nw_round_red, rnil));
    assert.deepStrictEqual(PatternA(4),
         qcons(row_green, qcons(row_green, qcons(row_green, qcons(row_green, qnil)))));

    // TODO: uncomment this for part (g). This checks that the function throws
    // an exception when the first argument (a function) is called.
    // tests negative and error
    assert.throws(() => PatternA(-1, GREEN), Error);
    //tests edge case, color green
    assert.deepStrictEqual(PatternA(0, GREEN), qnil);
    // cases for even num  and base case testing different colors
    assert.deepEqual(PatternA(2, RED), qcons(row_red, qcons(row_red, qnil)));
    assert.deepStrictEqual(PatternA(2, GREEN), qcons(row_green, qcons(row_green, qnil)));
    assert.deepStrictEqual(PatternA(2), qcons(row_green, qcons(row_green, qnil)));
    assert.deepStrictEqual(PatternA(4, RED), qcons(row_red, qcons(row_red, qcons(row_red, qcons(row_red, qnil)))));
    assert.deepStrictEqual(PatternA(4, GREEN), qcons(row_green, qcons(row_green, qcons(row_green, qcons(row_green, qnil)))));
    assert.deepStrictEqual(PatternA(4), qcons(row_green, qcons(row_green, qcons(row_green, qcons(row_green, qnil)))));
  });

  // tests the north position, green color, and line curvature for patternB


  it('PatternB', function() {
    const se_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: SE};
    const nw_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: NW};
    const se_round_red: Square = {shape: STRAIGHT, color: RED, corner: SE};
    const nw_round_red: Square = {shape: STRAIGHT, color: RED, corner: NW};

    const row_green: Row = rcons(se_straight_green, rcons(nw_straight_green, rnil));
    const row_red: Row = rcons(se_round_red, rcons(nw_round_red, rnil));
    assert.deepStrictEqual(PatternB(4), qcons(row_green, qcons(row_green, qcons(row_green, qcons(row_green, qnil)))));


    //tests if the value is less than 0
    assert.throws(() => PatternB(-1, GREEN), Error);
    assert.throws(() => PatternB(-2, GREEN), Error);


    //test base case and the color green
    assert.deepStrictEqual(PatternB(0,GREEN),qnil);
    //tests color green
    assert.deepStrictEqual(PatternB(1, GREEN), qcons(row_green, qnil));
    assert.deepStrictEqual(PatternB(2, GREEN), qcons(row_green, qcons(row_green, qnil)));
    //tests color red
    assert.deepStrictEqual(PatternB(3, RED),qcons(row_red, qcons(row_red,qcons(row_red, qnil) ) ));
    assert.deepStrictEqual(PatternB(4, RED),qcons(row_red, qcons(row_red,qcons(row_red, qcons(row_red, qnil)) ) ));
  });


  it('PatternC', function(){
    const ne_round_green: Square = {shape: ROUND, color: GREEN, corner: NE};
    const nw_round_green: Square = {shape: ROUND, color: GREEN, corner: NW};
    const se_round_green: Square = {shape: ROUND, color: GREEN, corner: SE};
    const sw_round_green: Square = {shape: ROUND, color: GREEN, corner: SW};
    const ne_round_red: Square = {shape: ROUND, color: RED, corner: NE};
    const nw_round_red: Square = {shape: ROUND, color: RED, corner: NW};
    const se_round_red: Square = {shape: ROUND, color: RED, corner: SE};
    const sw_round_red: Square = {shape: ROUND, color: RED, corner: SW};
    const row_greenOne: Row = rcons(ne_round_green, rcons(nw_round_green, rnil));
    const row_greenTwo: Row = rcons(se_round_green, rcons(sw_round_green, rnil));
    const row_redOne: Row = rcons(ne_round_red, rcons(nw_round_red, rnil));
    const row_redTwo: Row = rcons(se_round_red, rcons(sw_round_red, rnil));
    assert.deepEqual(PatternC(4),
         qcons(row_greenOne, qcons(row_greenTwo, qcons(row_greenOne, qcons(row_greenTwo, qnil)))));

    //tests if the value is less than 0
    assert.throws(() => PatternC(-1, GREEN), Error);
    assert.throws(() => PatternC(-2, GREEN), Error);


    //test base case and the color green
    assert.deepStrictEqual(PatternC(0,GREEN),qnil);
    //tests odd numbers and red and green
    assert.throws(() => PatternC(1, GREEN), Error);
    assert.throws(() => PatternC(3, RED), Error);
    // tests even numbers
    assert.deepStrictEqual(PatternC(2, GREEN), qcons(row_greenOne, qcons(row_greenTwo, qnil)));
    assert.deepStrictEqual(PatternC(4, RED),qcons(row_redOne, qcons(row_redTwo,qcons(row_redOne, qcons(row_redTwo, qnil)) ) ));
  });

  it('PatternD', function(){
    const ne_round_green: Square = {shape: ROUND, color: GREEN, corner: NE};
    const nw_round_green: Square = {shape: ROUND, color: GREEN, corner: NW};
    const se_round_green: Square = {shape: ROUND, color: GREEN, corner: SE};
    const sw_round_green: Square = {shape: ROUND, color: GREEN, corner: SW};
    const ne_round_red: Square = {shape: ROUND, color: RED, corner: NE};
    const nw_round_red: Square = {shape: ROUND, color: RED, corner: NW};
    const se_round_red: Square = {shape: ROUND, color: RED, corner: SE};
    const sw_round_red: Square = {shape: ROUND, color: RED, corner: SW};
    const row_greenOne: Row = rcons(ne_round_green, rcons(nw_round_green, rnil));
    const row_greenTwo: Row = rcons(se_round_green, rcons(sw_round_green, rnil));
    const row_redOne: Row = rcons(ne_round_red, rcons(nw_round_red, rnil));
    const row_redTwo: Row = rcons(se_round_red, rcons(sw_round_red, rnil));
    assert.deepEqual(PatternD(4),
         qcons(row_greenTwo, qcons(row_greenOne, qcons(row_greenTwo, qcons(row_greenOne, qnil)))));
          //tests if the value is less than 0
          assert.throws(() => PatternD(-1, GREEN), Error);
          assert.throws(() => PatternD(-2, GREEN), Error);
          //test base case and the color green
          assert.deepStrictEqual(PatternD(0,GREEN),qnil);
          //tests odd numbers and red and green
          assert.throws(() => PatternD(1, GREEN), Error);
          assert.throws(() => PatternD(3, RED), Error);
          // tests even numbers
          assert.deepStrictEqual(PatternD(2, GREEN), qcons(row_greenTwo, qcons(row_greenOne, qnil)));
          assert.deepStrictEqual(PatternD(4, RED),qcons(row_redTwo, qcons(row_redOne,qcons(row_redTwo, qcons(row_redOne, qnil)) ) ));
    });


    it('PatternE', function(){
      const se_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: SE};
      const nw_straight_green: Square = {shape: STRAIGHT, color: GREEN, corner: NW};
      const se_round_red: Square = {shape: STRAIGHT, color: RED, corner: SE};
      const nw_round_red: Square = {shape: STRAIGHT, color: RED, corner: NW};
  const row_greenTwo: Row = rcons(se_straight_green, rcons(nw_straight_green, rnil));
  const row_green: Row = rcons(nw_straight_green, rcons(se_straight_green, rnil));
  const row_redTwo: Row = rcons(se_round_red, rcons(nw_round_red, rnil));
  const row_red: Row = rcons(nw_round_red, rcons(se_round_red, rnil));
  assert.deepEqual(PatternE(4),
       qcons(row_green, qcons(row_greenTwo, qcons(row_green, qcons(row_greenTwo, qnil)))));

    //tests if the value is less than 0
    assert.throws(() => PatternE(-1, GREEN), Error);
    assert.throws(() => PatternE(-2, GREEN), Error);


    //test base case and the color green
    assert.deepStrictEqual(PatternE(0, GREEN), qnil);
    assert.deepStrictEqual(PatternE(0, RED), qnil)
    //tests color green
    assert.deepStrictEqual(PatternE(2, GREEN), qcons(row_green, qcons(row_greenTwo, qnil)));
    assert.deepStrictEqual(PatternE(8, GREEN), qcons(row_green, qcons(row_greenTwo, qcons(row_green, qcons(row_greenTwo,qcons(row_green, qcons(row_greenTwo,qcons(row_green, qcons(row_greenTwo, qnil)))))))));
    //tests color red
    assert.deepStrictEqual(PatternE(6, RED),qcons(row_red, qcons(row_redTwo,qcons(row_red, qcons(row_redTwo,qcons(row_red, qcons(row_redTwo, qnil)))))));
    assert.deepStrictEqual(PatternE(4, RED),qcons(row_red, qcons(row_redTwo,qcons(row_red, qcons(row_redTwo, qnil)) ) ));
  });
});

