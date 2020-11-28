
# `browserizr`

![Typescript first](https://img.shields.io/badge/TypeScript-First-blue)
[![BSD-3-Clause License badge](https://img.shields.io/github/license/WezomCompany/browserizr)](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)
[![NPM package badge](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/@wezom/browserizr)
![Test and Build status badge](https://github.com/WezomCompany/browserizr/workflows/Test%20and%20Build/badge.svg)

_Description_

## Coverage

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-96.92%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-75%25-red.svg) | ![Functions](https://img.shields.io/badge/Coverage-95.74%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
1. [API](#api)
    1. [Methods](#methods)
    	1. [browserizr.setUA()](#browserizr-setua)
1. [Custom detects](#custom-detects)
    1. [Simple example](#simple-example)

## Usage

### Install npm package

```bash
npm i @wezom/browserizr
```

### Import to your codebase

By default, we distribute our lib as is - original TypeScript files, without transpiling to ES5 or ES6.

```ts
// Import original ts code
// but requires to be not exclude in `node_modules`.
// Check your `tsconfig.json`
import browserizr from '@wezom/browserizr';
```

You can import compiled files from special folders.

```js
// ES6: const, let, spread, rest and other modern JavaScript features
// but requires to be not exclude in `node_modules`.
// Check your `babebl-loader` (if your use webpack as bandler)
import browserizr from '@wezom/browserizr/dist/es-6';

// or ES5: no ES6 features but ready for use as is, without transpiling
import browserizr from '@wezom/browserizr/dist/es-5';
```

---

## API

### Methods

#### browserizr.setUA()

_Signature:_

```ts
/**
 * Set custom `userAgent` string 
 * @param {string} ua - `userAgent` string
 */
setUA(ua: string): void
```

By default, `browserizr` trying to resolve global object `navigator` and get `userAgent` field from that.
Global object `navigator` exist only in a browser environment.

So if you work in another environment - you may use `.setUA()` method to set custom string:

```ts
// working with express server on Node.js
browserizr.setUA(req.headers['user-agent']);
```

Also method `setUA` will help you with tests [your own detection methods](#custom-detects)

```ts
browserizr.setUA('My custom userAgent string');
browserizr.detect(isMyCustomDetectMethod);
```

---

## Custom detects

You can write your own methods to detect what you want in your own way.

### Simple example

We need simple pure function that receive current userAgent string and must return boolean as detection result.

Let's assume, we need detect some browser with name "My X Super Browser".  
And we expect that name-value like `MXSBrowser`  in userAgent string:

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 MXSBrowser/75.0.4280.66 Safari/537.36"
```

We can write regular expression for test this string and return result.

**TypeSript example**

```js
// my-detects/is-mxs.ts
import { DetectMethod } from '@wezom/browserizr';
export const isMXSBrowser: DetectMethod = (ua) => /\sMXSBrowser\/[\d.]+\s/.test(ua);

// app.ts
import browserizr from '@wezom/browserizr';
import { isMXSBrowser } from 'my-detects/is-mxs';

if (browserizr.detect(isMXSBrowser)) {
    console.log('Yeah! Thats it!');
}
```

**JavaScript example**

```js
// my-detects/is-mxs.js
export const isMXSBrowser = (ua) => /\sMXSBrowser\/[\d.]+\s/.test(ua);

// app.js
import browserizr from '@wezom/browserizr/es-6/core';
import { isMXSBrowser } from 'my-detects/is-mxs';

if (browserizr.detect(isMXSBrowser)) {
    console.log('Yeah! Thats it!');
}
```


