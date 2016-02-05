/* jshint node: true */

"use strict";

module.exports = {};

module.exports.a2n = function(a) {
  return (parseInt(a.join('')));
};

module.exports.a2s = function(a) {
  return a.join('');
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

module.exports.array_inc = function(a) {
  // NOTE: This function mutates array 'a'.
  var changed = 0;
  var n = 1;
  for (var i = a.length - 1; i >=0; i--) {
    a[i] += n;
    changed += n;
    if (a[i] < 10) { n = 0; } else { a[i] -= 10; }
  }
  if (n === 1) {
    a.unshift(n);
    ++changed;
  }
  return changed;
};

module.exports.array_max = function(a) {
  return Math.max.apply(null, a);
};

module.exports.array_min = function(a) {
  return Math.min.apply(null, a);
};

module.exports.array_mult = function(a, n) {
  var p = a.slice(0);
  var carry = 0;
  var start = a.length - 1;
  for (var i = start; i >= 0; i--) {
    p[i] *= n;
    if (carry !== 0) {
      p[i] += carry;
      carry = 0;
    }
    if (p[i] > 9) {
      if (i === 0) {
        while (p[0] >= 10) {
          p.unshift(Math.floor(p[0] / 10));
          p[1] %= 10;
        }
      } else {
        carry = Math.floor(p[i] / 10);
        p[i] %= 10;
      }
    }
  }
  return p;
};

module.exports.array_pow = function(a, exponent) {
  var base = [1];
  var n = module.exports.a2n(a);
  for (var i = 0; i < exponent; i++) {
    base = module.exports.array_mult(base, n);
  }
  return base;
};

module.exports.array_product = function(a) {
  return (a.reduce(function(m, e) { return m * e; }, 1));
};

module.exports.array_sum = function(a) {
  return (a.reduce(function(m, e) { return m + e; }, 0));
};

module.exports.array_trunc = function(a, digits) {
  if (a.length > digits) return a.slice(a.length - digits);
  return a;
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

module.exports.hypotenuse = function(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

module.exports.is_hexagon_number = function(n) {
  return module.exports.is_geometric_number(2, -1, -n);
};

module.exports.is_geometric_number = function(a, b, c) {
  var test = function(n) {
    return n > 0 && module.exports.is_integral(n);
  };
  var roots = module.exports.quadratic_roots(a, b, c);
  for (var i = 0; i < 2; i++) {
    var root = roots[i];
    if (root > 0 && root === Math.floor(root)) {
      return true;
    }
  }
  return false;
};

module.exports.is_integral = function(n) {
  return n === Math.floor(n);
};

module.exports.is_pandigital = function(x, n) {
  n = n === undefined ? 9 : n;
  var digits = module.exports.range(1, n);
  var a = typeof x === 'number' ? module.exports.n2a(x) : x.slice(0);
  a.sort();
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== digits[i]) return false;
  }
  return true;
};

module.exports.is_pentagon_number = function(n) {
  return module.exports.is_geometric_number(3, -1, -n *2);
};

module.exports.is_prime = function(n) {
  if ((n & 1) === 0) return false;
  for (var i = 3; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

module.exports.is_square = function(n) {
  var r = Math.sqrt(n);
  return r === Math.floor(r);
};

module.exports.is_triangle_number = function(n) {
  return module.exports.is_geometric_number(1, 1, -n * 2);
};

module.exports.log10 = function(n) {
  return Math.log(n) / Math.log(10);
};

module.exports.n2a = function(n) {
  return module.exports.n2a_common(n, 10);
};

module.exports.n2a_binary = function(n) {
  return module.exports.n2a_common(n, 2);
};

module.exports.n2a_common = function(n, base) {
  var a = [];
  while (n > 0) {
    a.unshift(n % base);
    n = Math.floor(n / base);
  }
  return a;
};

module.exports.ndigits = function(n) {
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
};

module.exports.permutations = function(n, a, fn) {
  // https://en.wikipedia.org/wiki/Heap%27s_algorithm
  if (n === 1) {
    fn(a);
  } else {
    for (var i = 0; i < n - 1; i++) {
      module.exports.permutations(n - 1, a, fn);
      var tmp = a[n - 1];
      if (n % 2 === 0) {
        a[n - 1] = a[i];
        a[i] = tmp;
      } else {
        a[n - 1] = a[0];
        a[0] = tmp;
      }
    }
    module.exports.permutations(n - 1, a, fn);
  }
};

module.exports.permarray = function(a) {
  var p = [];
  var fn = function(x) { p.push(x.slice()); };
  module.exports.permutations(a.length, a, fn);
  return p;
};

module.exports.prime_factorization = function(n, primes_less_than_n) {
  var factors = [];
  for (var i = 0; i < primes_less_than_n.length; i++) {
    var p = primes_less_than_n[i];
    while (n % p === 0) {
      factors.push(p);
      n /= p;
    }
    if (n === 1) break;
  }
  if (factors.length === 0) {
    primes_less_than_n.push(n);
    factors.push(n);
  }
  return factors;
};

module.exports.primes_map = function(limit) {
  var primes = {};
  for (var i = 2; i <= limit; i++) {
    if (primes[i] === false) continue;
    primes[i] = true;
    for (var j = i + i; j <= limit; j += i) {
      primes[j] = false;
    }
  }
  return primes;
};

module.exports.primes = function(lo, hi, return_map) {
  var pm = module.exports.primes_map(hi);
  for (var i = lo, primes = []; i <= hi; i++) {
    if (pm[i]) primes.push(i);
  }
  if (return_map) return [primes, pm];
  return primes;
};

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

module.exports.quadratic_roots = function(a, b, c) {
  var x0 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  var x1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  return [x0, x1];
};

module.exports.range = function(lo, hi) {
  var a = [];
  for (var i = lo; i <= hi; i++) {
    a.push(i);
  }
  return a;
};

module.exports.readfile = function(f, alt) {
  try {
    var data = require('fs').readFileSync(f, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return alt;
  }
};

module.exports.sum_of_proper_divisors = function(n) {
  return module.exports.array_sum(module.exports.proper_divisors(n));
};

module.exports.uniques = function(a, sort) {
  if (sort === true) {
    a = a.sort(function(e1, e2) { return e1 - e2; });
  }
  var u = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== u[u.length - 1]) {
      u.push(a[i]);
    }
  }
  return u;
};

module.exports.word_sum = function(name) {
  return name.split('').reduce(function(sum, chr) {
    return sum + chr.charCodeAt(0) - 64;
  }, 0);
};

module.exports.writefile = function(f, data) {
  require('fs').writeFileSync(f, JSON.stringify(data), 'utf8');
};
