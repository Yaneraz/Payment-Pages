'use strict';

// Add a prototypical inheritance function. Note that this will need es5-sham
// in older browsers to provide Object.create().
module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false
        }
    });
};