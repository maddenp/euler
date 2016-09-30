/* jshint node: true */
/* jshint esversion: 6 */

"use strict";

module.exports = {};

module.exports.a2n = function (a) {
  return (parseInt(a.join('')));
};

module.exports.a2s = function (a) {
  return a.join('');
};

module.exports.array_add = function (a1, a2) {
  var zero_pad = function (a, n) {
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

module.exports.are_permutations = function (n1, n2) {
  if ((n1 - n2) % 9 !== 0) return false;
  const c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (n1) {
    c[n1 % 10]++;
    n1 = Math.floor(n1 / 10);
  }
  while (n2) {
    c[n2 % 10]--;
    n2 = Math.floor(n2 / 10);
  }
  for (var i = 0; i < 10; i++) {
    if (c[i] !== 0) return false;
  }
  return true;
};

module.exports.array_equal = function (a1, a2) {
  if (a1.length !== a2.length) return false;
  for (var i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};

module.exports.array_exp = function (b, n) {
  var a = [1];
  while (n > 0) {
    var b_int = module.exports.a2n(b);
    if ((n & 1) === 0) {
      b = module.exports.array_times_int(b, b_int);
      n /= 2;
    } else {
      a = module.exports.array_times_int(a, b_int);
      n -= 1;
    }
  }
  return a;
};

module.exports.array_exp_trunc = function (b, n, max) {
  var a = [1];
  while (n > 0) {
    var b_int = module.exports.a2n(b);
    if ((n & 1) === 0) {
      b = module.exports.array_trunc(module.exports.array_times_int(b, b_int), max);
      n /= 2;
    } else {
      a = module.exports.array_trunc(module.exports.array_times_int(a, b_int), max);
      n -= 1;
    }
  }
  return a;
};

module.exports.array_inc = function (a, base) {
  // NOTE: This function mutates array 'a'.
  base = base || 10;
  var changed = 0;
  var n = 1;
  for (var i = a.length - 1; i >=0; i--) {
    a[i] += n;
    changed += n;
    if (a[i] < base) { n = 0; } else { a[i] -= base; }
  }
  if (n === 1) {
    a.unshift(n);
    ++changed;
  }
  return changed;
};

module.exports.array_max = function (a) {
  return Math.max.apply(null, a);
};

module.exports.array_min = function (a) {
  return Math.min.apply(null, a);
};

module.exports.array_n_sort = function (a, reverse) {
  if (reverse) return a.sort(function (e1, e2) { return e2 - e1; });
  return a.sort(function (e1, e2) { return e1 - e2; });
};

module.exports.array_product = function (a) {
  return (a.reduce(function (m, e) { return m * e; }, 1));
};

module.exports.array_reverse = function (a) {
  var b = [];
  for (var i = a.length - 1; i >= 0; i--) b.push(a[i]);
  return b;
};

module.exports.array_sum = function (a) {
  return (a.reduce(function (m, e) { return m + e; }, 0));
};

module.exports.array_times_array = function (a1, a2) {
  var p = [0];
  for (var i = a2.length - 1; i >= 0; i--) {
    var term = module.exports.array_times_int(a1, a2[i]);
    var padding_zeros = a2.length - (i + 1);
    for (var j = 0; j < padding_zeros; j++) {
      term.push(0);
    }
    p = module.exports.array_add(p, term);
  }
  return p;
};

module.exports.array_times_int = function (a, n) {
  var p = a.slice();
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

module.exports.array_trunc = function (a, digits) {
  if (a.length > digits) return a.slice(a.length - digits);
  return a;
};

module.exports.bisearch = function (a, n) {
  var lo = 0, hi = a.length - 1;
  while (true) {
    if (a[lo] === n) return lo;
    if (a[hi] === n) return hi;
    if (hi - lo < 2) return undefined;
    var mid = lo + (Math.floor((hi - lo) / 2));
    if (a[mid] < n) { lo = mid; } else { hi = mid; }
  }
};

module.exports.factorial = function (n) {
  for (var i = n, f = 1; i > 1; i--) f *= i;
  return f;
};

module.exports.hypotenuse = function (a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

module.exports.is_figurate = function (a, b, c) {
  var test = function (n) {
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

module.exports.is_figurate_3 = function (n) {
  return module.exports.is_figurate(1, 1, -n * 2);
};

module.exports.is_figurate_5 = function (n) {
  return module.exports.is_figurate(3, -1, -n *2);
};

module.exports.is_figurate_6 = function (n) {
  return module.exports.is_figurate(2, -1, -n);
};

module.exports.is_integral = function (n) {
  return n === Math.floor(n);
};

module.exports.is_palindrome = function (a) {
  for (var i = 0; i < Math.floor(a.length / 2); i++) {
    if (a[i] !== a[a.length - (i + 1)]) return false;
  }
  return true;
};

module.exports.is_pandigital = function (x, n) {
  n = n === undefined ? 9 : n;
  var digits = module.exports.range(1, n);
  var a = typeof x === 'number' ? module.exports.n2a(x) : x.slice(0);
  a = module.exports.array_n_sort(a);
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== digits[i]) return false;
  }
  return true;
};

module.exports.is_power_of = function (n, b) {
  var x = Math.log(n) / Math.log(b);
  return x === Math.floor(x);
};

module.exports.prime = (() => {

  var known = {2: true, 3: true};
  var primes = [2, 3];

  const check = n => {
    if (n < 2) return false;
    if (known[n]) return true;
    if ((n & 1) === 0) return false;
    for (var m = primes[primes.length - 1] + 2; m <= Math.sqrt(n); m += 2) {
      if (check(m)) {
        known[m] = true;
        primes.push(m);
      }
    }
    for (var i = 0; i < primes.length && primes[i] <= Math.sqrt(n); i++) {
      if (n % primes[i] === 0) return false;
    }
    known[n] = true;
    return true;
  };

  const index_of = n => {
    while (top() < n) at(primes.length);
    return primes.indexOf(n);
  };

  const at = i => {
    while (i > primes.length - 1) {
      var n = primes[primes.length - 1] + 2;
      while (!check(n)) n += 2;
      known[n] = true;
      primes.push(n);
    }
    return primes[i];
  };

  const top = () => (
    primes[primes.length - 1]
  );

  return {check, index_of, known, at, primes, top};

})();

module.exports.is_square = function (n) {
  var r = Math.sqrt(n);
  return r === Math.floor(r);
};

module.exports.log10 = function (n) {
  return Math.log(n) / Math.log(10);
};

module.exports.miller_rabin = function (n) {
  // https://goo.gl/ZBJ09T
  if (n < 2) return false;
  const limit = 3215031751;
  const witnesses = [2, 3, 5, 7];
  if (witnesses.indexOf(n) !== -1) return true;
  if ((n & 1) === 0) return false;
  if (n > limit) throw 'Current Miller-Rabin limit ' + limit + ' exceeded';
  var d = n - 1;
  var r = 0;
  while (true) {
    var o = d / 2;
    if (o !== Math.floor(o)) break;
    ++r;
    d = o;
  }
  witnesses: for (var i = 0; i < witnesses.length; i++) {
    var a = witnesses[i];
    var x = module.exports.modexp(a, d, n);
    if (x === 1 || x === n - 1) continue witnesses;
    for (var j = 0; j < r - 1; j++) {
      x = module.exports.modexp(x, 2, n);
      if (x === 1) {
        return false;
      }
      if (x === n - 1) continue witnesses;
    }
    return false;
  }
  return true;
};

module.exports.modexp = function (b, e, m) {
  // https://goo.gl/ldzssx
  const limit = Math.floor(Math.sqrt(Number.MAX_SAFE_INTEGER));
  if (m - 1 > limit) throw 'modexp will overflow with modulus ' + m;
  if (m === 1) return 0;
  var r = 1;
  b = b % m;
  while (e > 0) {
    if ((e & 1) === 1) r = (r * b) % m;
    e >>= 1;
    b = (b * b) % m;
  }
  return r;
};

module.exports.n2a = function (n) {
  return module.exports.n2a_common(n, 10);
};

module.exports.n2a_binary = function (n) {
  return module.exports.n2a_common(n, 2);
};

module.exports.n2a_common = function (n, base) {
  var a = [];
  while (n > 0) {
    a.unshift(n % base);
    n = Math.floor(n / base);
  }
  return a;
};

module.exports.ndigits = function (n) {
  return Math.floor(Math.log(n) / Math.log(10)) + 1;
};

module.exports.ordered_insert = function (a, n) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    if (n && a[i] >= n) {
      if (a[i] > n) b.push(n);
      n = false;
    }
    b.push(a[i]);
  }
  if (n) b.push(n);
  return b;
};

module.exports.ordered_insert_in_place = function (a, n) {
  // NOTE: This function mutates array 'a'.
  if (a.length === 0) {
    a.push(n);
  } else {
    for (var i = 0; i < a.length && a[i] <= n; i++) {
      if (a[i] === n) return;
    }
    a.splice(i, 0, n);
  }
};

module.exports.partitions = (() => {

  const memo = {};

  const lookup = function (n, high) {
    if (memo[n] && memo[n][high]) return memo[n][high];
    return false;
  };

  const memoize = function (n, high, count) {
    memo[n] = memo[n] || {};
    memo[n][high] = count;
  };

  const count = function (n, parts, idx) {
    // See e.g. https://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.2
    if (n === 0) return 1;
    if (parts[idx] === parts[0]) return n % parts[0] === 0 ? 1 : 0;
    if (n < parts[idx]) return count(n, parts, idx - 1);
    const s0 = count(n, parts, idx - 1);
    const s1 = count(n - parts[idx], parts, idx);
    return s0 + s1;
  };

  return { count };

})();

module.exports.permutations_map = function (a, fn, n) {
  // https://en.wikipedia.org/wiki/Heap%27s_algorithm
  n = n || a.length;
  if (n === 1) {
    fn(a);
  } else {
    for (var i = 0; i < n - 1; i++) {
      module.exports.permutations_map(a, fn, n - 1);
      var tmp = a[n - 1];
      if (n % 2 === 0) {
        a[n - 1] = a[i];
        a[i] = tmp;
      } else {
        a[n - 1] = a[0];
        a[0] = tmp;
      }
    }
    module.exports.permutations_map(a, fn, n - 1);
  }
};

module.exports.permarray = function (a) {
  var p = [];
  var fn = function (x) { p.push(x.slice()); };
  module.exports.permutations_map(a, fn);
  return p;
};

module.exports.prime_factorization = function (n, primes_less_than_n, uniques) {
  var factors = [];
  for (var i = 0; i < primes_less_than_n.length; i++) {
    var added = false;
    var p = primes_less_than_n[i];
    while (n % p === 0) {
      if (!uniques || !added) {
        factors.push(p);
        added = true;
      }
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

module.exports.primes_map = function (limit) {
  var primes = [];
  for (var i = 2; i <= limit; i++) {
    if (primes[i] === false) continue;
    primes[i] = true;
    for (var j = i + i; j <= limit; j += i) {
      primes[j] = false;
    }
  }
  return primes;
};

module.exports.primes = function (lo, hi, return_map) {
  const pm = module.exports.primes_map(hi);
  for (var i = lo, primes = []; i <= hi; i++) {
    if (pm[i]) primes.push(i);
  }
  if (return_map) return [primes, pm];
  return primes;
};

module.exports.proper_divisors = function (n) {
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

module.exports.quadratic_roots = function (a, b, c) {
  var x0 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  var x1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  return [x0, x1];
};

module.exports.random_int_between = function (lo, hi) {
  // Note: Bounds are inclusive.
  return Math.floor(Math.random() * ((hi + 1) - lo) + lo);
};
  
module.exports.range = function (lo, hi) {
  var a = [];
  for (var i = lo; i <= hi; i++) {
    a.push(i);
  }
  return a;
};

module.exports.readfile = function (f, alt) {
  try {
    var data = require('fs').readFileSync(f, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return alt;
  }
};

module.exports.sum_of_proper_divisors = function (n) {
  return module.exports.array_sum(module.exports.proper_divisors(n));
};

module.exports.uniques = function (a, sort) {
  if (sort === true) {
    a = module.exports.array_n_sort(a);
  }
  var u = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== u[u.length - 1]) {
      u.push(a[i]);
    }
  }
  return u;
};

module.exports.word_sum = function (name) {
  return name.split('').reduce(function (sum, chr) {
    return sum + chr.charCodeAt(0) - 64;
  }, 0);
};

module.exports.writefile = function (f, data) {
  require('fs').writeFileSync(f, JSON.stringify(data), 'utf8');
};
