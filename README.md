# `browserizr`

![Typescript first](https://img.shields.io/badge/TypeScript-First-blue)
[![BSD-3-Clause License badge](https://img.shields.io/github/license/WezomCompany/browserizr)](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)
[![NPM package badge](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/@wezom/browserizr)
![Test and Build status badge](https://github.com/WezomCompany/browserizr/workflows/Test%20and%20Build/badge.svg)


**THIS LIBRARY IS IN BETA VERSION! DO NOT USE THIS IN YOUR PRODUCTION CODE!**  
_This library is not stable yet. We can change some API or behaviors._

## Coverage

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-96.55%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-83.33%25-yellow.svg) | ![Functions](https://img.shields.io/badge/Coverage-95.16%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

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
        1. [isEdge](#isedge)
        1. [isEdgeAndroid](#isedgeandroid)
        1. [isEdgeIOS](#isedgeios)
        1. [isFirefox](#isfirefox)
        1. [isFirefoxIOS](#isfirefoxios)
        1. [isIE](#isie)
        1. [isIEVersion](#isieversion)
        1. [isOpera](#isopera)
        1. [isSafari](#issafari)
        1. [isVivaldi](#isvivaldi)
        1. [isYandex](#isyandex)
    1. [Devices](#devices)
        1. [isDesktop](#isdesktop)
        1. [isMobile](#ismobile)
        1. [isIPad](#isipad)
        1. [isIPod](#isipod)
        1. [isIPhone](#isiphone)
1. [Custom detects](#custom-detects)
    1. [Simple example](#simple-example)
1. [Contributing](#contributing)
1. [License](#licence)

---




## Introduction

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

```ts
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

```ts
/** Detection by given function */
detect(fn: DetectMethod): boolen
```

You can use one of the [built-in methods](#built-in-detects) or write [custom detects](#custom-detects)

```ts
import browserizr from '@wezom/browserizr';
import { isChrome } from '@wezom/browserizr/detect/browsers/chrome';
import { isMobile } from '@wezom/browserizr/detect/device/mobile';

if (browserizr.detect(isChrome)) {
    console.log('Yeah! Thats Chrome!');
}

if (browserizr.detect(isMobile)) {
    console.log('Yeah! Thats is Mobile device');
}
```

#### browserizr.classNames()

_Signature:_

```ts
/** Generate CSS class names string */
classNames(classes: {
    is: string;
    not: string;
    fn: DetectMethod;
}[]): string
```

A little example for explanation: 

```ts
import browserizr, { DetectClassNameMethod } from '@wezom/browserizr';
import { isSafari } from '@wezom/browserizr/detect/browsers/safari';
import { isMobile } from '@weomz/browserizr/detect/device/mobile';

const classes: DetectClassNameMethod[] = [
    {
        is: 'is-mobile-device',   // You can use
        not: 'not-like-mobile',   // your own class names like you want
        fn: isMobile
    },
    {
        is: 'is-safari',
        not: 'is-not-safari',
        fn: isSafari
    }
];

// if mobile Safari browser
console.log(browserizr.classNames(classes)); // => "is-mobile-device is-safari"

// if mobile but not Safari browser
console.log(browserizr.classNames(classes)); // => "is-mobile-device is-not-safari"

// if not mobile and not Safari browser
console.log(browserizr.classNames(classes)); // => "not-like-mobile is-not-safari"
```

You can do what you want with this string. Like this:

```ts
// Add classes in browser
document.body.classList.add(browserizr.classNames(classes));
```

```tsx
// Render JSX components
<div className={browserizr.classNames(classes)}>
    ...
</div>
```

#### browserizr.setUA()

_Signature:_

```ts
/** Set custom `userAgent` string  */
setUA(ua: string): void
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

Detect Google Chrome browser

```ts
import browserizr from '@wezom/browserizr';
import { isChrome } from '@wezom/browserizr/detect/browsers/chrome';
if (browserizr.detect(isChrome)) {
    // code
}
``` 

#### isChromeIOS

Detect Google Chrome browser on iPad, iPod or iPhone device.

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

const chrome86v = isChromeVersion(86, EQUAL);
const chrome86vOrHigher = isChromeVersion(86, MORE_THEN_OR_EQUAL);
const chrome86vOrLater = isChromeVersion(86, LESS_THEN_OR_EQUAL);
if (browserizr.detect(chrome86vOrHigher)) {
    // code
}
// ...
``` 

#### isChromium

Detect browsers that based on Chromium.

```ts
import browserizr from '@wezom/browserizr';
import { isChromium } from '@wezom/browserizr/detect/browsers/chromium';
if (browserizr.detect(isChromium)) {
    // code
}
``` 

#### isEdge

Detect Microsoft Edge browser.

```ts
import browserizr from '@wezom/browserizr';
import { isEdge } from '@wezom/browserizr/detect/browsers/edge';
if (browserizr.detect(isEdge)) {
    // code
}
```

#### isEdgeAndroid

Detect Microsoft Edge browser on Android.

```ts
import browserizr from '@wezom/browserizr';
import { isEdgeAndroid } from '@wezom/browserizr/detect/browsers/edge-android';
if (browserizr.detect(isEdgeAndroid)) {
    // code
}
```

#### isEdgeIOS

Detect Microsoft Edge browser on iOS.

```ts
import browserizr from '@wezom/browserizr';
import { isEdgeIOS } from '@wezom/browserizr/detect/browsers/edge-ios';
if (browserizr.detect(isEdgeIOS)) {
    // code
}
```

#### isFirefox

Detect Mozilla Firefox browser.

```ts
import browserizr from '@wezom/browserizr';
import { isFirefox } from '@wezom/browserizr/detect/browsers/firefox';
if (browserizr.detect(isFirefox)) {
    // code
}
```

#### isFirefoxIOS

Detect Mozilla Firefox browser on iOS.

```ts
import browserizr from '@wezom/browserizr';
import { isFirefoxIOS } from '@wezom/browserizr/detect/browsers/firefox-ios';
if (browserizr.detect(isFirefoxIOS)) {
    // code
}
```

#### isIE

Detect Internet Explorer browser

```ts
import browserizr from '@wezom/browserizr';
import { isIE } from '@wezom/browserizr/detect/browsers/ie';
if (browserizr.detect(isIE)) {
    // code
}
```

#### isIEVersion

Detect Internet Explorer browser and wanted version

```ts
import browserizr from '@wezom/browserizr';
import { EQUAL } from '@wezom/browserizr/utils';
import { isIEVersion } from '@wezom/browserizr/detect/browsers/ie-version';

const ie8 = isIEVersion(8, EQUAL);
const ie9 = isIEVersion(9, EQUAL);
const ie10 = isIEVersion(10, EQUAL);
const ie11 = isIEVersion(11, EQUAL);
if (browserizr.detect(ie8)) {
    // code
}
// ...
``` 

#### isOpera

Detect Opera browser

```ts
import browserizr from '@wezom/browserizr';
import { isOpera } from '@wezom/browserizr/detect/browsers/opera';
if (browserizr.detect(isOpera)) {
    // code
}
```

#### isSafari

Detect Apple Safari browser

```ts
import browserizr from '@wezom/browserizr';
import { isSafari } from '@wezom/browserizr/detect/browsers/safari';
if (browserizr.detect(isSafari)) {
    // code
}
```

#### isVivaldi

Detect Vivaldi browser

```ts
import browserizr from '@wezom/browserizr';
import { isVivaldi } from '@wezom/browserizr/detect/browsers/vivaldi';
if (browserizr.detect(isVivaldi)) {
    // code
}
```

#### isYandex

Detect Yandex browser

```ts
import browserizr from '@wezom/browserizr';
import { isYandex } from '@wezom/browserizr/detect/browsers/yandex';
if (browserizr.detect(isYandex)) {
    // code
}
```

### Devices

#### isDesktop

Detect desktop browser

```ts
import browserizr from '@wezom/browserizr';
import { isDesktop } from '@wezom/browserizr/detect/devices/desktop';
if (browserizr.detect(isDesktop)) {
    // code
}
```

#### isMobile

Detect mobile browser

```ts
import browserizr from '@wezom/browserizr';
import { isMobile } from '@wezom/browserizr/detect/devices/mobile';
if (browserizr.detect(isMobile)) {
    // code
}
```

#### isIPad

Detect the browser on iPad device

```ts
import browserizr from '@wezom/browserizr';
import { isIPad } from '@wezom/browserizr/detect/devices/ipad';
if (browserizr.detect(isIPad)) {
    // code
}
```

#### isIPod

Detect a browser on iPod device

```ts
import browserizr from '@wezom/browserizr';
import { isIPod } from '@wezom/browserizr/detect/devices/ipod';
if (browserizr.detect(isIPod)) {
    // code
}
```

#### isiPhone

Detect a browser on iPhone device

```ts
import browserizr from '@wezom/browserizr';
import { isiPhone } from '@wezom/browserizr/detect/devices/iphone';
if (browserizr.detect(isiPhone)) {
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
