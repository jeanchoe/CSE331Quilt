// Collab with david lym and justin dong
import * as assert from 'assert';
import { NW, NE, SW, SE, GREEN, RED, ROUND, Square, Row, rnil, rcons, qnil, qcons, STRAIGHT } from './quilt';
import { sew, symmetrize, qflip_horz, rflip_horz, rflip_vert, sflip_vert, sflip_horz, qflip_vert } from './quilt_ops';
// import { PatternE } from './patterns';


describe('quilt_ops', function() {

  it('sflip_vert', function() {
    // TODO: implement]
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };

    assert.deepStrictEqual(sflip_vert(greenStraightNW), greenStraightSW)

    // 0-1-many heuristic, call (2nd)
    assert.deepStrictEqual(sflip_vert(greenStraightSE), greenStraightNE)

    // 0-1-many heuristic, call red (1st)
    assert.deepStrictEqual(sflip_vert(redRoundNW), redRoundSW)

    // 0-1-many heuristic, call red (2nd)
    assert.deepStrictEqual(sflip_vert(redRoundSE), redRoundNE)
  });

  it('rflip_vert', function() {
    // TODO: implement
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };

    const row_greenNW: Row = rcons(greenStraightNW, rcons(greenStraightSW, rnil));
    const row_greenNE: Row = rcons(greenStraightNE, rcons(greenStraightSE, rnil));
    const row_greenSW: Row = rcons(greenStraightSW, rcons(greenStraightNW, rnil));
    const row_greenSE: Row = rcons(greenStraightSE, rcons(greenStraightNE, rnil));
    const one_greenNW: Row =  rcons(greenStraightNW, rnil);
    const one_greenNE: Row = rcons(greenStraightNE, rnil);
    const one_greenSW: Row =  rcons(greenStraightSW, rnil);
    const one_greenSE: Row = rcons(greenStraightSE, rnil);
    const row_redNW: Row = rcons(redRoundNW, rcons(redRoundSW, rnil));
    const row_redNE: Row = rcons(redRoundNE, rcons(redRoundSE, rnil));
    const row_redSE: Row = rcons(redRoundSE, rcons(redRoundNE, rnil));
    const row_redSW: Row = rcons(redRoundSW, rcons(redRoundNW, rnil));
    const one_redNW: Row =  rcons(redRoundNW, rnil);
    const one_redNE: Row = rcons(redRoundNE, rnil);
    const one_redSW: Row =  rcons(redRoundSW, rnil);
    const one_redSE: Row = rcons(redRoundSE, rnil);
    // tests 1+ recursive calls
    assert.deepStrictEqual(rflip_vert(row_greenNE), row_greenSE);
    assert.deepStrictEqual(rflip_vert(row_greenSW), row_greenNW);
    // tests 1 call
    assert.deepStrictEqual(rflip_vert(one_greenSE), one_greenNE);
    assert.deepStrictEqual(rflip_vert(one_greenNW), one_greenSW);
    // tests 1+ red
    assert.deepStrictEqual(rflip_vert(row_redNE), row_redSE);
    assert.deepStrictEqual(rflip_vert(row_redNW), row_redSW);
    // tests 1 red
    assert.deepStrictEqual(rflip_vert(one_redSE), one_redNE);
    assert.deepStrictEqual(rflip_vert(one_redNW), one_redSW);
    // tests base
    assert.deepStrictEqual(rflip_vert(rnil), rnil);


  });

  it('qflip_vert', function() {
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };

    const row_greenNW: Row = rcons(greenStraightNW, rcons(greenStraightSW, rnil));
    const row_greenNE: Row = rcons(greenStraightNE, rcons(greenStraightSE, rnil));
    const row_greenSW: Row = rcons(greenStraightSW, rcons(greenStraightNW, rnil));
    const row_greenSE: Row = rcons(greenStraightSE, rcons(greenStraightNE, rnil));
    const one_greenNW: Row =  rcons(greenStraightNW, rnil);
    const one_greenNE: Row = rcons(greenStraightNE, rnil);
    const one_greenSW: Row =  rcons(greenStraightSW, rnil);
    const one_greenSE: Row = rcons(greenStraightSE, rnil);
    const row_redNW: Row = rcons(redRoundNW, rcons(redRoundSW, rnil));
    const row_redNE: Row = rcons(redRoundNE, rcons(redRoundSE, rnil));
    const row_redSE: Row = rcons(redRoundSE, rcons(redRoundNE, rnil));
    const row_redSW: Row = rcons(redRoundSW, rcons(redRoundNW, rnil));
    const one_redNW: Row =  rcons(redRoundNW, rnil);
    const one_redNE: Row = rcons(redRoundNE, rnil);
    const one_redSW: Row =  rcons(redRoundSW, rnil);
    const one_redSE: Row = rcons(redRoundSE, rnil);
    // tests 1+ recursive
    assert.deepStrictEqual(qflip_vert(qcons(row_greenNE, qcons(row_greenNE, qnil))), qcons(row_greenSE, qcons(row_greenSE, qnil)));
    assert.deepStrictEqual(qflip_vert(qcons(row_greenSW, qcons(row_greenSW, qnil))), qcons(row_greenNW, qcons(row_greenNW, qnil)));
    // tests 1 call
    assert.deepStrictEqual(qflip_vert(qcons(one_greenSE, qnil)), qcons(one_greenNE, qnil));
    assert.deepStrictEqual(qflip_vert(qcons(one_greenNW, qnil)), qcons(one_greenSW, qnil));
    // tests 1+ recursive red
    assert.deepStrictEqual(qflip_vert(qcons(row_redNE, qcons(row_redNE, qnil))), qcons(row_redSE, qcons(row_redSE, qnil)));
    assert.deepStrictEqual(qflip_vert(qcons(row_redSW, qcons(row_redSW, qnil))), qcons(row_redNW, qcons(row_redNW, qnil)));
    // tests 1 call red
    assert.deepStrictEqual(qflip_vert(qcons(one_redSE, qnil)), qcons(one_redNE, qnil));
    assert.deepStrictEqual(qflip_vert(qcons(one_redNW, qnil)), qcons(one_redSW, qnil));
    // tests base case
    assert.deepStrictEqual(qflip_vert(qnil), qnil);
  });

  it('sflip_horz', function() {
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };
    //base case green
    assert.deepStrictEqual(sflip_horz(greenStraightNW), greenStraightNE);
    assert.deepStrictEqual(sflip_horz(greenStraightSE), greenStraightSW);
    // base case red
    assert.deepStrictEqual(sflip_horz(redRoundNW), redRoundNE);
    assert.deepStrictEqual(sflip_horz(redRoundSE), redRoundSW);



  });

  it('rflip_horz', function() {
    // TODO: implement
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };

    const row_greenNWSE: Row = rcons(greenStraightNW, rcons(greenStraightSE, rnil));
    const row_greenSWNE: Row = rcons(greenStraightSW, rcons(greenStraightNE, rnil));
    const one_greenNW: Row =  rcons(greenStraightNW, rnil);
    const one_greenNE: Row = rcons(greenStraightNE, rnil);
    const one_greenSW: Row =  rcons(greenStraightSW, rnil);
    const one_greenSE: Row = rcons(greenStraightSE, rnil);

    const row_redNWSE: Row = rcons(redRoundNW, rcons(redRoundSE, rnil));
    const row_redSWNE: Row = rcons(redRoundSW, rcons(redRoundNE, rnil));
    const one_redNW: Row =  rcons(redRoundNW, rnil);
    const one_redNE: Row = rcons(redRoundNE, rnil);
    const one_redSW: Row =  rcons(redRoundSW, rnil);
    const one_redSE: Row = rcons(redRoundSE, rnil);

    // tests 1+ recursive calls
    assert.deepStrictEqual(rflip_horz(row_greenNWSE), row_greenSWNE);
    assert.deepStrictEqual(rflip_horz(row_greenSWNE), row_greenNWSE);
    // 1 recursive call
    assert.deepStrictEqual(rflip_horz(one_greenSE), one_greenSW);
    assert.deepStrictEqual(rflip_horz(one_greenNW), one_greenNE);
    // tests 1+ recursive calls red
    assert.deepStrictEqual(rflip_horz(row_redNWSE), row_redSWNE);
    assert.deepStrictEqual(rflip_horz(row_redSWNE), row_redNWSE);
    // tests 1 recursive call red
    assert.deepStrictEqual(rflip_horz(one_redSE), one_redSW);
    assert.deepStrictEqual(rflip_horz(one_redNW), one_redNE);
    // tests base case
    assert.deepStrictEqual(rflip_horz(rnil), rnil);

  });

  it('qflip_horz', function() {
    // TODO: implement
    const greenStraightNW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NW,
    };

    const greenStraightSW: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SW,
    };

    const greenStraightNE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: NE,
    };

    const greenStraightSE: Square = {
      shape: STRAIGHT,
      color: GREEN,
      corner: SE,
    };

    const redRoundNE: Square = {
      shape: ROUND,
      color: RED,
      corner: NE,
    };

    const redRoundNW: Square = {
      shape: ROUND,
      color: RED,
      corner: NW,
    };

    const redRoundSE: Square = {
      shape: ROUND,
      color: RED,
      corner: SE,
    };

    const redRoundSW: Square = {
      shape: ROUND,
      color: RED,
      corner: SW,
    };

    const row_greenNW: Row = rcons(greenStraightNW, rcons(greenStraightNW, rnil));
    const row_greenNE: Row = rcons(greenStraightNE, rcons(greenStraightNE, rnil));
    const row_greenSW: Row = rcons(greenStraightSW, rcons(greenStraightSW, rnil));
    const row_greenSE: Row = rcons(greenStraightSE, rcons(greenStraightSE, rnil));
    const one_greenNW: Row =  rcons(greenStraightNW, rnil);
    const one_greenNE: Row = rcons(greenStraightNE, rnil);
    const one_greenSW: Row =  rcons(greenStraightSW, rnil);
    const one_greenSE: Row = rcons(greenStraightSE, rnil);
    const row_redNW: Row = rcons(redRoundNW, rcons(redRoundNW, rnil));
    const row_redNE: Row = rcons(redRoundNE, rcons(redRoundNE, rnil));
    const row_redSE: Row = rcons(redRoundSE, rcons(redRoundSE, rnil));
    const row_redSW: Row = rcons(redRoundSW, rcons(redRoundSW, rnil));
    const one_redNW: Row =  rcons(redRoundNW, rnil);
    const one_redNE: Row = rcons(redRoundNE, rnil);
    const one_redSW: Row =  rcons(redRoundSW, rnil);
    const one_redSE: Row = rcons(redRoundSE, rnil);

    // tests 1+ recursive call
    assert.deepStrictEqual(qflip_horz(qcons(row_greenNE, qcons(row_greenNW, qnil))), qcons(row_greenNW, qcons(row_greenNE, qnil)));
    assert.deepStrictEqual(qflip_horz(qcons(row_greenSW, qcons(row_greenSW, qnil))), qcons(row_greenSE, qcons(row_greenSE, qnil)));
    // tests 1 recursive call
    assert.deepStrictEqual(qflip_horz(qcons(one_greenSE, qnil)), qcons(one_greenSW, qnil));
    assert.deepStrictEqual(qflip_horz(qcons(one_greenNW, qnil)), qcons(one_greenNE, qnil));
    // tests 1+ recursive calls red
    assert.deepStrictEqual(qflip_horz(qcons(row_redNE, qcons(row_redNW, qnil))), qcons(row_redNW, qcons(row_redNE, qnil)));
    assert.deepStrictEqual(qflip_horz(qcons(row_redSW, qcons(row_redSW, qnil))), qcons(row_redSE, qcons(row_redSE, qnil)));
    // tests 1 recursive call red
    assert.deepStrictEqual(qflip_horz(qcons(one_redSE, qnil)), qcons(one_redSW, qnil));
    assert.deepStrictEqual(qflip_horz(qcons(one_redNW, qnil)), qcons(one_redNE, qnil));



  });

  const nw_sq: Square = {corner: NW, color: GREEN, shape: ROUND};
  const ne_sq: Square = {corner: NE, color: GREEN, shape: ROUND};
  const se_sq: Square = {corner: SE, color: GREEN, shape: ROUND};
  const sw_sq: Square = {corner: SW, color: GREEN, shape: ROUND};

  it('sew', function() {
    const r1 = rcons(nw_sq, rcons(ne_sq, rnil));
    const r12 = rcons(se_sq, rcons(sw_sq, rnil));
    const r2 = rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil))));
    const r22 = rcons(se_sq, rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rnil))));

    // invalid case: (qnil, !qnil)
    assert.throws(() => sew(qnil, qcons(r1, qnil)), Error);
    assert.throws(() => sew(qnil, qcons(r1, qcons(r1, qnil))), Error);

    // invalid case: (!qnil, qnil)
    assert.throws(() => sew(qcons(r1, qnil), qnil), Error);
    assert.throws(() => sew(qcons(r1, qcons(r1, qnil)), qnil), Error);

    // 0-1-many: base case
    assert.deepStrictEqual(sew(qnil, qnil), qnil);

    // 0-1-many: one recursive call
    assert.deepStrictEqual(sew(qcons(r1, qnil), qcons(r1, qnil)), qcons(r2, qnil));
    assert.deepStrictEqual(sew(qcons(r12, qnil), qcons(r12, qnil)), qcons(r22, qnil));

    // 0-1-many: many recursive calls
    assert.deepStrictEqual(
        sew(qcons(r1, qcons(r1, qnil)), qcons(r1, qcons(r1, qnil))),
        qcons(r2, qcons(r2, qnil)));
    assert.deepStrictEqual(
        sew(qcons(r12, qcons(r12, qcons(r12, qnil))),
            qcons(r12, qcons(r12, qcons(r12, qnil)))),
        qcons(r22, qcons(r22, qcons(r22, qnil))));
  });

  it('symmetrize', function() {
    // 0-1-many: base case
    assert.deepStrictEqual(symmetrize(qnil), qnil);
    assert.deepStrictEqual(symmetrize(qcons(rcons(nw_sq, rnil), qnil)),
        qcons(rcons(nw_sq, rcons(ne_sq, rnil)),
            qcons(rcons(sw_sq, rcons(se_sq, rnil)), qnil)));

    // 0-1-many: one recursive call
    assert.deepStrictEqual(symmetrize(qcons(rcons(nw_sq, rnil), qnil)),
        qcons(rcons(nw_sq, rcons(ne_sq, rnil)),
            qcons(rcons(sw_sq, rcons(se_sq, rnil)), qnil)));
    assert.deepStrictEqual(symmetrize(qcons(rcons(se_sq, rnil), qnil)),
        qcons(rcons(se_sq, rcons(sw_sq, rnil)),
            qcons(rcons(ne_sq, rcons(nw_sq, rnil)), qnil)));

    // 0-1-many: many recursive calls
    const r1 = rcons(nw_sq, rcons(ne_sq, rnil));
    assert.deepStrictEqual(symmetrize(qcons(r1, qnil)),
        qcons(
            rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
            qcons(
                rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                qnil)));
    const r2 = rcons(sw_sq, rcons(se_sq, rnil));
    assert.deepStrictEqual(symmetrize(qcons(r1, qcons(r2, qnil))),
        qcons(
            rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
            qcons(
                rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                qcons(
                    rcons(nw_sq, rcons(ne_sq, rcons(nw_sq, rcons(ne_sq, rnil)))),
                    qcons(
                        rcons(sw_sq, rcons(se_sq, rcons(sw_sq, rcons(se_sq, rnil)))),
                        qnil)))));
  });

});
