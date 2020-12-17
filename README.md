# `browserizr`

![Typescript first](https://img.shields.io/badge/TypeScript-First-blue)
[![BSD-3-Clause License badge](https://img.shields.io/github/license/WezomCompany/browserizr)](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)
[![NPM package badge](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/@wezom/browserizr)
![Test and Build status badge](https://github.com/WezomCompany/browserizr/workflows/Test%20and%20Build/badge.svg)

## Coverage

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-99.67%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-96.43%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-99.6%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Introduction](#introduction)
    1. [TypeScript-First](#typescript-first)
    1. [Code examples](#code-examples)
1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
        - [TypeScript](#typescript)
        - [JavaScript](#javascript)
    1. [Usage example](#usage-example)
1. [API](#api)
    1. [Methods](#methods)
    	- [browserizr.detect()](#browserizrdetect)
    	- [browserizr.classNames()](#browserizrclassnames)
    	- [browserizr.setUA()](#browserizrsetua)
1. [Built-in detects](#built-in-detects)
    1. [Browsers](#browsers)
        - [isChrome](#ischrome)
        - [isChromeVersion](#ischromeversion)
        - [isChromeAndroid](#ischromeandroid)
        - [isChromeAndroidVersion](#ischromeandroidversion)
        - [isChromeIOS](#ischromeios)
        - [isChromeIOSVersion](#ischromeiosversion)
        - [isEdge](#isedge)
        - [isEdgeVersion](#isedgeversion)
        - [isEdgeAndroid](#isedgeandroid)
        - [isEdgeAndroidVersion](#isedgeandroidversion)
        - [isEdgeIOS](#isedgeios)
        - [isEdgeIOSVersion](#isedgeiosversion)
        - [isFirefox](#isfirefox)
        - [isFirefoxVersion](#isfirefoxversion)
        - [isFirefoxAndroid](#isfirefoxandroid)
        - [isFirefoxAndroidVersion](#isfirefoxandroidversion)
        - [isFirefoxIOS](#isfirefoxios)
        - [isFirefoxIOSVersion](#isfirefoxiosversion)
        - [isIE](#isie)
        - [isIEVersion](#isieversion)
        - [isOpera](#isopera)
        - [isSafari](#issafari)
        - [isVivaldi](#isvivaldi)
        - [isYandex](#isyandex)
    1. [Devices](#devices)
        - [isDesktop](#isdesktop)
        - [isMobile](#ismobile)
        - [isIPad](#isipad)
        - [isIPod](#isipod)
        - [isIPhone](#isiphone)
    1. [OS](#os)
        - [isAndroid](#isandroid)
        - [isAndroidVersion](#isandroidversion)
        - [isWindows](#iswindows)
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
import browserizr, { isSafari } from '@wezom/browserizr';
```

#### JavaScript

You can import compiled files from special folders.

```js
// ES6: const, let, spread, rest and other modern JavaScript features
// but requires to be not exclude in `node_modules`.
// Check your `babebl-loader` (if your use webpack as bandler)
import browserizr, { isSafari } from '@wezom/browserizr/dist/es-6';

// or ES5: no ES6 features but ready for use as is, without transpiling
import browserizr, { isSafari } from '@wezom/browserizr/dist/es-5';
```

### Usage example

```ts
import browserizr, { 
    isIE,
    isChromeVersion,
    MORE_THEN_OR_EQUAL
} from '@wezom/browserizr';

// Detect Internet Explorer
if (browserizr.detect(isIE)) {
    // your code ...
}

// Detect Google Chrome 87+
const isChrome87orHigher = isChromeVersion(87, MORE_THEN_OR_EQUAL);
if (browserizr.detect(isChrome87orHigher)) {
    // your code ...
}
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## API

### Methods

#### browserizr.detect()

_Signature:_

```ts
/** Detection by given function */
detect(fn: (ua: string) => boolean): boolen
```

You can use one of the [built-in methods](#built-in-detects) or write [custom detects](#custom-detects)

```ts
import browserizr, { isChrome, isMobile } from '@wezom/browserizr';

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
import browserizr, { DetectClassNameMethod, isSafari, isMobile } from '@wezom/browserizr';

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

<details>
<summary><em>Detect Google Chrome browser</em></summary>
<div>

```ts
import browserizr, { isChrome } from '@wezom/browserizr';
if (browserizr.detect(isChrome)) {
    // code
}
``` 

</div>
</details>

#### isChromeVersion

<details>
<summary><em>Detect Google Chrome browser and wanted version</em></summary>
<div>

```ts
import browserizr, {
    isChromeVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const chrome86 = isChromeVersion(EQUAL, 86);
const chrome86orHigher = isChromeVersion(MORE_THEN_OR_EQUAL, 86);
const chrome86orLater = isChromeVersion(LESS_THEN_OR_EQUAL, 86);
if (browserizr.detect(chrome86orHigher)) {
    // code
}
// ...
``` 

</div>
</details>

#### isChromeAndroid

<details>
<summary><em>Detect Google Chrome browser on Android OS</em></summary>
<div>

```ts
import browserizr, { isChromeAndroid } from '@wezom/browserizr';
if (browserizr.detect(isChromeAndroid)) {
    // code
}
``` 

</div>
</details>

#### isChromeAndroidVersion

<details>
<summary><em>Detect Google Chrome browser and wanted version on Android OS</em></summary>
<div>

```ts
import browserizr, {
    isChromeAndroidVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const chromeAndroid86 = isChromeAndroidVersion(EQUAL, 86);
const chromeAndroid86orHigher = isChromeAndroidVersion(MORE_THEN_OR_EQUAL, 86);
const chromeAndroid86orLater = isChromeAndroidVersion(LESS_THEN_OR_EQUAL, 86);
if (browserizr.detect(chromeAndroid86orHigher)) {
    // code
}
// ...
``` 

</div>
</details>

#### isChromeIOS

<details>
<summary><em>Detect Google Chrome browser on iPad, iPod or iPhone device.</em></summary>
<div>

```ts
import browserizr, { isChromeIOS } from '@wezom/browserizr';
if (browserizr.detect(isChromeIOS)) {
    // code
}
``` 

</div>
</details>

#### isChromeIOSVersion

<details>
<summary><em>Detect Google Chrome browser and wanted version on iOS.</em></summary>
<div>

```ts
import browserizr, {
    isChromeIOSVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const chromeIOS86 = isChromeIOSVersion(EQUAL, 86);
const chromeIOS86orHigher = isChromeIOSVersion(MORE_THEN_OR_EQUAL, 86);
const chromeIOS86orLater = isChromeIOSVersion(LESS_THEN_OR_EQUAL, 86);
if (browserizr.detect(chromeIOS86orHigher)) {
    // code
}
// ...
``` 

</div>
</details>

#### isEdge

<details>
<summary><em>Detect Microsoft Edge browser.</em></summary>
<div>

```ts
import browserizr, { isEdge } from '@wezom/browserizr';
if (browserizr.detect(isEdge)) {
    // code
}
```

</div>
</details>


#### isEdgeVersion

<details>
<summary><em>Detect Microsoft Edge browser and wanted version.</em></summary>
<div>

```ts
import browserizr, {
    isEdgeVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const edge86 = isEdgeVersion(EQUAL, 86);
const edge86orHigher = isEdgeVersion(MORE_THEN_OR_EQUAL, 86);
const edge86orLater = isEdgeVersion(LESS_THEN_OR_EQUAL, 86);
if (browserizr.detect(edge86orHigher)) {
    // code
}
// ...
``` 

</div>
</details>

#### isEdgeAndroid

<details>
<summary><em>Detect Microsoft Edge browser on Android.</em></summary>
<div>

```ts
import browserizr, { isEdgeAndroid } from '@wezom/browserizr';
if (browserizr.detect(isEdgeAndroid)) {
    // code
}
```

</div>
</details>

#### isEdgeAndroidVersion

<details>
<summary><em>Detect Microsoft Edge browser and wanted version on Android.</em></summary>
<div>

```ts
import browserizr, {
    isEdgeAndroidVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const edgeAndroid45 = isEdgeAndroidVersion(EQUAL, 45);
const edgeAndroid45orHigher = isEdgeAndroidVersion(MORE_THEN_OR_EQUAL, 45);
const edgeAndroid45orLater = isEdgeAndroidVersion(LESS_THEN_OR_EQUAL, 45);
if (browserizr.detect(edgeAndroid45orHigher)) {
    // code
}
// ...
```

</div>
</details>

#### isEdgeIOS

<details>
<summary><em>Detect Microsoft Edge browser on iOS.</em></summary>
<div>

```ts
import browserizr, { isEdgeIOS } from '@wezom/browserizr';
if (browserizr.detect(isEdgeIOS)) {
    // code
}
```

</div>
</details>

#### isEdgeIOSVersion

<details>
<summary><em>Detect Microsoft Edge browser and wanted version on iOS.</em></summary>
<div>

```ts
import browserizr, {
    isEdgeIOSVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const edgeIOS45 = isEdgeIOSVersion(EQUAL, 45);
const edgeIOS45orHigher = isEdgeIOSVersion(MORE_THEN_OR_EQUAL, 45);
const edgeIOS45orLater = isEdgeIOSVersion(LESS_THEN_OR_EQUAL, 45);
if (browserizr.detect(edgeIOS45orHigher)) {
    // code
}
// ...
```

</div>
</details>

#### isFirefox

Detect Mozilla Firefox browser.

```ts
import browserizr, { isFirefox } from '@wezom/browserizr';
if (browserizr.detect(isFirefox)) {
    // code
}
```

#### isFirefoxVersion

Detect Mozilla Firefox browser and wanted version

```ts
import browserizr, { MORE_THEN_OR_EQUAL, EQUAL, LESS_THEN_OR_EQUAL } from '@wezom/browserizr';
import { isFirefoxVersion } from '@wezom/browserizr';

const ffx83 = isFirefoxVersion(EQUAL, 83);
const ffx83orHigher = isFirefoxVersion(MORE_THEN_OR_EQUAL, 83);
const ffx83orLater = isFirefoxVersion(LESS_THEN_OR_EQUAL, 83);
if (browserizr.detect(ffx83)) {
    // code
}
// ...
``` 

#### isFirefoxAndroid

Detect Mozilla Firefox browser.

```ts
import browserizr, { isFirefoxAndroid } from '@wezom/browserizr';
if (browserizr.detect(isFirefoxAndroid)) {
    // code
}
```

#### isFirefoxAndroidVersion

Detect Mozilla Firefox browser and wanted version

```ts
import browserizr, { MORE_THEN_OR_EQUAL, EQUAL, LESS_THEN_OR_EQUAL } from '@wezom/browserizr';
import { isFirefoxAndroidVersion } from '@wezom/browserizr';

const ffxAndroid83 = isFirefoxAndroidVersion(EQUAL, 83);
const ffxAndroid83orHigher = isFirefoxAndroidVersion(MORE_THEN_OR_EQUAL, 83);
const ffxAndroid83orLater = isFirefoxAndroidVersion(LESS_THEN_OR_EQUAL, 83);
if (browserizr.detect(ffx83Android)) {
    // code
}
// ...
``` 

#### isFirefoxIOS

Detect Mozilla Firefox browser on iOS.

```ts
import browserizr, { isFirefoxIOS } from '@wezom/browserizr';
if (browserizr.detect(isFirefoxIOS)) {
    // code
}
```

#### isFirefoxIOSVersion

Detect Mozilla Firefox browser and wanted version on iOS

```ts
import browserizr, { MORE_THEN_OR_EQUAL, EQUAL, LESS_THEN_OR_EQUAL } from '@wezom/browserizr';
import { isFirefoxIOSVersion } from '@wezom/browserizr';

const ffxIOS29 = isFirefoxIOSVersion(EQUAL, 29);
const ffxIOS29orHigher = isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29);
const ffxIOS29orLater = isFirefoxIOSVersion(LESS_THEN_OR_EQUAL, 29);
if (browserizr.detect(ffx29IOS)) {
    // code
}
// ...
``` 

#### isIE

Detect Internet Explorer browser

```ts
import browserizr, { isIE } from '@wezom/browserizr';
if (browserizr.detect(isIE)) {
    // code
}
```

#### isIEVersion

Detect Internet Explorer browser and wanted version

```ts
import browserizr, { EQUAL } from '@wezom/browserizr';
import { isIEVersion } from '@wezom/browserizr';

const ie8 = isIEVersion(EQUAL, 8);
const ie9 = isIEVersion(EQUAL, 9);
const ie10 = isIEVersion(EQUAL, 10);
const ie11 = isIEVersion(EQUAL, 11);
if (browserizr.detect(ie8)) {
    // code
}
// ...
``` 

#### isOpera

Detect Opera browser

```ts
import browserizr, { isOpera } from '@wezom/browserizr';
if (browserizr.detect(isOpera)) {
    // code
}
```

#### isSafari

Detect Apple Safari browser

```ts
import browserizr, { isSafari } from '@wezom/browserizr';
if (browserizr.detect(isSafari)) {
    // code
}
```

#### isVivaldi

Detect Vivaldi browser

```ts
import browserizr, { isVivaldi } from '@wezom/browserizr';
if (browserizr.detect(isVivaldi)) {
    // code
}
```

#### isYandex

Detect Yandex browser

```ts
import browserizr, { isYandex } from '@wezom/browserizr';
if (browserizr.detect(isYandex)) {
    // code
}
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




### Devices

#### isDesktop

Detect desktop browser

```ts
import browserizr, { isDesktop } from '@wezom/browserizr';
if (browserizr.detect(isDesktop)) {
    // code
}
```

#### isMobile

Detect mobile browser

```ts
import browserizr, { isMobile } from '@wezom/browserizr';
if (browserizr.detect(isMobile)) {
    // code
}
```

#### isIPad

Detect the browser on iPad device

```ts
import browserizr, { isIPad } from '@wezom/browserizr';
if (browserizr.detect(isIPad)) {
    // code
}
```

#### isIPod

Detect a browser on iPod device

```ts
import browserizr, { isIPod } from '@wezom/browserizr';
if (browserizr.detect(isIPod)) {
    // code
}
```

#### isIPhone

Detect a browser on iPhone device

```ts
import browserizr, { isIPhone } from '@wezom/browserizr';
if (browserizr.detect(isiPhone)) {
    // code
}
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




### OS

#### isAndroid

Detect Android OS

```ts
import browserizr, { isAndroid } from '@wezom/browserizr';
if (browserizr.detect(isAndroid)) {
    // code
}
```

#### isAndroidVersion

```ts
import browserizr, { EQUAL, MORE_THAN_OR_EQUAL } from '@wezom/browserizr';
import { isAndroidVersion } from '@wezom/browserizr';

const android11 = isAndroidVersion(EQUAL, 11);
const android9orHigher = isAndroidVersion(MORE_THAN_OR_EQUAL, 9);
if (browserizr.detect(android11)) {
    // code
}
// ...
```

#### isWindows

Detect Windows OS

```ts
import browserizr, { isWindows } from '@wezom/browserizr';
if (browserizr.detect(isWindows)) {
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
import browserizr, { isMXSBrowser } from 'my-detects/is-mxs';

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
