function cartSum(cart) {
  // Sans la librairie underscorejs les deux premières conditions s'écrivent ainsi
  /*if(!Array.isArray(cart) && typeof cart !== 'object') {
    return null;
  } else if (( Array.isArray(cart) && cart.length === 0) || Object.keys(cart).length === 0) {
    return 0;
  }*/

  // mais avec underscorejs c'est plus concis
  if (!_.isArray(cart) && !_.isObject(cart)) {
    return null;
  } else if (_.isEmpty(cart)) {
    return 0;
  } else if (_.isArray(cart)) {
    var total = 0;
    cart.forEach(function(item) {
      var q = _.isNumber(item.q) ? item.q : 1;
      total += item.price * q;
    });
    return total;
  } else {
    var q = 1;
    if (typeof cart.q !== "undefined") {
      q = cart.q;
    }
    return cart.price * q;
  }
}
