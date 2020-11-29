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

1. [Introduction](#introduction)
    1. [TypeScript-First](#typescript-first)
    1. [Code examples](#code-examples)
1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
        1. [TypeScript](#typescript)
        1. [JavaScript](#javascript)
    1. [Usage example](#usage-example)
1. [Detect methodology](#detect-methodology)
    1. [Detect method](#detect-method)
    1. [Detect version](#detect-version)
1. [API](#api)
    1. [Methods](#methods)
    	1. [browserizr.detect()](#browserizrdetect)
    	1. [browserizr.classNames()](#browserizrclassnames)
    	1. [browserizr.setUA()](#browserizrsetua)
1. [Built-in detects](#built-in-detects)
    1. [Browsers](#browsers)
        1. [isChrome](#ischrome)
        1. [isChromeIOS](#ischromeios)
        1. [isChromeVersion](#ischromeversion)
        1. [isChromium](#ischromeversion)
1. [Custom detects](#custom-detects)
    1. [Simple example](#simple-example)
1. [Contributing](#contributing)
1. [License](#licence)

---




## Introduction

THIS LIBRARY IS IN BETA VERSION! DO NOT USE THIS IN YOUR PRODUCTION CODE!
This library is not stable yet. We can change some API or behaviors.

### TypeScript-First

We use TypeScript as the primary language for developing our library and distribute the source code "as is" by default. This feature allows you to import a clean codebase, without many portable additional constructs, fallbacks and polyfills.

### Code examples

_We use TypeScript for most of the examples. Even if you don't work with TypeScript - these examples are easy to understand, but if you run into problems or not understanding of this code, please feel free to [submit issue](https://github.com/WezomCompany/browserizr/issues). For your convenience, we will supplement our examples._

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## Usage

### Install npm package

```bash
npm i @wezom/browserizr
```

### Import to your codebase

#### TypeScript

As stated earlier, we use TypeScript as main development language and  
 by default distribute our lib "AS IS", in original TypeScript files.

```ts
// Import original ts code
// but requires to be not exclude in `node_modules`.
// Check your `tsconfig.json`
import browserizr from '@wezom/browserizr';
```

#### JavaScript

You can import compiled files from special folders.

```js
// ES6: const, let, spread, rest and other modern JavaScript features
// but requires to be not exclude in `node_modules`.
// Check your `babebl-loader` (if your use webpack as bandler)
import browserizr from '@wezom/browserizr/dist/es-6';

// or ES5: no ES6 features but ready for use as is, without transpiling
import browserizr from '@wezom/browserizr/dist/es-5';
```

_In all examples bellow, we will import from TypeScript folder. So if your work with JavaScript, just change parent folder. En example_

```
// ts
import { isIE } from '@wezom/browserizr/detects/ie';

// js
import { isIE } from '@wezom/browserizr/dist/es-6/detects/ie';
// or
import { isIE } from '@wezom/browserizr/dist/es-5/detects/ie';
```

### Usage example

```ts
import browserizr from '@wezom/browserizr';
import { MORE_THEN_OR_EQUAL } from '@wezom/browserizr/utils';
import { isIE } from '@wezom/browserizr/detects/ie';
import { isChromeVersion } from '@wezom/browserizr/detects/chrome-version';

// Detect Internet Explorer
if (browserizr.detect(isIE)) {
    // your code ...
}

// Detect Google Chrome 87+
const isChrome87vOrHigher = isChromeVersion(87, MORE_THEN_OR_EQUAL);
if (browserizr.detect(isChrome87vOrHigher)) {
    // your code ...
}
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## Detect methodology

### Detect method

_description in progress..._

### Detect version

_description in progress..._

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## API

### Methods

#### browserizr.detect()

_Signature:_

```js
/**
 * Detection by given function
 * @param {string} fn - function that receive userAgent string
 * @returns boolean
 */
detect(fn)
```

You can use one of the [built-in methods](#built-in-detects) or write [custom detects](#custom-detects)

*TypeScript example*

```ts
import browserizr from '@wezom/browserizr';
import { isChrome } from '@wezom/browserizr/detect/browsers/is-chrome';
import { isMobile } from '@weomz/browserizr/detect/device/is-mobile';

if (browserizr.detect(isChrome)) {
    console.log('Yeah! Thats Chrome!');
}

if (browserizr.detect(isMobile)) {
    console.log('Yeah! Thats is Mobile device');
}
```

*JavaScript example*

```ts
import browserizr from '@wezom/browserizr/es-6/core';
import { isChrome } from '@wezom/browserizr/es-6/detect/browsers/is-chrome';
import { isMobile } from '@weomz/browserizr/es-6/detect/device/is-mobile';

if (browserizr.detect(isChrome)) {
    console.log('Yeah! Thats Chrome!');
}

if (browserizr.detect(isMobile)) {
    console.log('Yeah! Thats is Mobile device');
}
```

#### browserizr.setUA()

_Signature:_

```js
/**
 * Set custom `userAgent` string 
 * @param {string} ua - `userAgent` string
 * @returns undefined
 */
setUA(ua)
```

By default, `browserizr` trying to resolve global object `navigator` and get `userAgent` field from that.
Global object `navigator` exist only in a browser environment.

So if you work in another environment - you may use `.setUA()` method to set custom string:

```ts
// working with express server on Node.js
browserizr.setUA(req.headers['user-agent']);
```

Also, method `setUA` will help you with tests [your own detection methods](#custom-detects)

```ts
browserizr.setUA('My custom userAgent string');
browserizr.detect(isMyCustomDetectMethod);
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## Built-in detects

We had often used detects ready for use.  
You can import each of them separately and only those which need in your project.

### Browsers

#### isChrome

```ts
import browserizr from '@wezom/browserizr';
import { isChrome } from '@wezom/browserizr/detect/browsers/chrome';
if (browserizr.detect(isChrome)) {
    // code
}
``` 

#### isChromeIOS

```ts
import browserizr from '@wezom/browserizr';
import { isChromeIOS } from '@wezom/browserizr/detect/browsers/chrome';
if (browserizr.detect(isChromeIOS)) {
    // code
}
``` 

#### isChromeVersion

Detect Google Chrome browser and wanted version

```ts
import browserizr from '@wezom/browserizr';
import { MORE_THEN_OR_EQUAL, EQUAL, LESS_THEN_OR_EQUAL } from '@wezom/browserizr/utils';
import { isChromeVersion } from '@wezom/browserizr/detect/browsers/chrome-version';

const chrome86 = isChromeVersion(86, EQUAL);
const chrome86OrHigher = isChromeVersion(86, MORE_THEN_OR_EQUAL);
const chrome86OrLater = isChromeVersion(86, LESS_THEN_OR_EQUAL);
if (browserizr.detect(chrome86OrHigher)) {
    // code
}
``` 

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## Custom detects

You can write your own methods to detect what you want in your own way.

### Simple example

We need simple pure function that receive current userAgent string and must return boolean as detection result.

Let's assume, we need to detect some browser with name "My X Super Browser".  
So we can expect that name-value like `MXSBrowser`  in userAgent string:

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 MXSBrowser/75.0.4280.66 Safari/537.36"
```

We can write regular expression for test this string and return result.

*TypeScript example*

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

*JavaScript example*

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

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---



## Contributing

Please fill free to create [issues](https://github.com/WezomCompany/browserizr/issues) or send [PR](https://github.com/WezomCompany/browserizr/pulls)

## Licence

[BSD-3-Clause License](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)

---
