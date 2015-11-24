/* jshint node: true */

"use strict";

module.exports = {};

module.exports.a2s = function(a) {
  return (a.reduce(function(m, e) { return m + e; }, ''));
};

module.exports.array_add = function(a1, a2) {
  var zero_pad = function(a, n) {
    for (var i = 0; i < n; i++) {
      a.unshift(0);
    }
  };
  var a3, carry, i;
  zero_pad((a1.length > a2.length ? a2 : a1), Math.abs(a1.length - a2.length));
  for (a3 = [], carry = false, i = a1.length - 1; i >= 0; i--) {
    a3[i] = a1[i] + a2[i];
    if (carry) {
      a3[i]++;
      carry = false;
    }
    if (a3[i] >= 10) {
      a3[i] -= 10;
      carry = true;
    }
    if (i === 0 && carry) a3.unshift(1);
  }
  return a3;
};

module.exports.array_mult = function(a, n) {
  var carry = 0;
  for (var i = a.length-1; i >= 0; i--) {
    a[i] *= n;
    if (carry !== 0) {
      a[i] += carry;
      carry = 0;
    }
    if (a[i] > 9) {
      if (i === 0) {
        while (a[0] >= 10) {
          a.unshift(Math.floor(a[0] / 10));
          a[1] %= 10;
        }
      } else {
        carry = Math.floor(a[i] / 10);
        a[i] %= 10;
      }
    }
  }
};

module.exports.array_product = function array_product(a) {
  return (a.reduce(function(m, e) { return m * e; }, 1));
};

module.exports.array_sum = function(a) {
  return (a.reduce(function(m, e) { return m + e; }, 0));
};

module.exports.bisearch = function(a, n) {
  var lo = 0, hi = a.length - 1;
  while (true) {
    if (a[lo] === n) return lo;
    if (a[hi] === n) return hi;
    if (hi - lo < 2) return undefined;
    var mid = lo + (Math.floor((hi - lo) / 2));
    if (a[mid] < n) { lo = mid; } else { hi = mid; }
  }
};

module.exports.factorial = function(n) {
  for (var i = n, f = 1; i > 1; i--) f *= i;
  return f;
};

module.exports.log = function(n) {
  return Math.log(n) / Math.log(10);
};

module.exports.n2a = function(n, base) {
  var a = [];
  while (n > 0) {
    a.unshift(n % base);
    n = Math.floor(n / base);
  }
  return a;
};

module.exports.n2a_binary = function(n) {
  return module.exports.n2a(n, 2);
}

module.exports.n2a_decimal = function(n) {
  return module.exports.n2a(n, 10);
}

module.exports.ndigits = function(n) {
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
};

module.exports.primes_up_to = function(limit) {
  var composites = [], primes = [];
  for (var i = 2; i < limit; i++) {
    if (composites[i] === undefined) {
      primes.push(i);
      for (var j = i; j < limit; j += i) {
        composites[j] = true;
      }
    }
  }
  return primes;
}


module.exports.proper_divisors = function(n) {
  var pds = [1];
  for (var d = 2; d <= Math.sqrt(n); d++) {
    if (n % d === 0) {
      pds.push(d);
      if (n / d !== d) {
        pds.push(n / d);
      }
    }
  }
  return pds;
};

module.exports.readfile = function(f, alt) {
  try {
    var data = require('fs').readFileSync(f, 'utf8');
  } catch (err) {
    return alt;
  }
  return JSON.parse(data);
}
              
module.exports.sum_of_proper_divisors = function(n) {
  return module.exports.array_sum(module.exports.proper_divisors(n));
};
