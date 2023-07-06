<p align="center">
  <a href="https://github.com/Celtian/fifadate" target="blank"><img src="assets/logo.svg?sanitize=true" alt="" width="120"></a>
  <h1 align="center">fifadate</h1>
</p>

[![npm version](https://badge.fury.io/js/fifadate.svg)](https://badge.fury.io/js/fifadate)
[![Package License](https://img.shields.io/npm/l/fifadate.svg)](https://www.npmjs.com/fifadate)
[![NPM Downloads](https://img.shields.io/npm/dm/fifadate.svg)](https://www.npmjs.com/fifadate)
[![Build & Publish](https://github.com/celtian/fifadate/workflows/Build%20&%20Publish/badge.svg)](https://github.com/celtian/fifadate/actions)
[![stars](https://badgen.net/github/stars/celtian/fifadate)](https://github.com/celtian/fifadate/)
[![forks](https://badgen.net/github/forks/celtian/fifadate)](https://github.com/celtian/fifadate/)
[![HitCount](http://hits.dwyl.com/celtian/fifadate.svg)](http://hits.dwyl.com/celtian/fifadate)

> Utils for Fifa Soccer Game dates

## Install

_Nodejs 12 or higher need to be installed first_

```terminal
npm install fifadate
```

or

```terminal
yarn add fifadate
```

## Quick start

_Type this into your ts file._

```typescript
import 'fifadate';

console.log(new Date('1970-01-01').toFifaDate()); // 141428
console.log(new Date('1970-01-01').addYear(1));
console.log(new Date('1970-01-01').age());
console.log(new Date('1970-01-01T03:00:00.000Z').normalize());
console.log(Date.fromFifaDate(141428)); // 1970-01-01
```

## License

Copyright &copy; 2023 [Dominik Hladik](https://github.com/Celtian)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
