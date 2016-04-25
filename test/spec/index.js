'use strict';

var expect = require('chai').expect;


describe('random-coordinates: ', function () {

  var randomCoordinates = require('../../');

  it('common', function () {

    var ret   = randomCoordinates({ fixed: 2 });
    var parts = ret.split(', ');

    expect(parts[0])
      .to.be.within(-90, 90)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,2})?$/);

    expect(parts[1])
      .to.be.within(-180, 180)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,2})?$/);

    ret   = randomCoordinates();
    parts = ret.split(', ');

    expect(parts[0])
      .to.be.within(-90, 90)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);

    expect(parts[1])
      .to.be.within(-180, 180)
      .and
      .to.be.match(/^(-)?\d+(\.\d{1,5})?$/);
  });
});
