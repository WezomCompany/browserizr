# `browserizr`

![types](https://img.shields.io/badge/types-TypeScript-blue)
[![BSD-3-Clause License badge](https://img.shields.io/github/license/WezomCompany/browserizr)](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)
[![NPM package badge](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/@wezom/browserizr)
![Test and Build status badge](https://github.com/WezomCompany/browserizr/workflows/Test%20and%20Build/badge.svg)

## Coverage

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-98.33%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

---

## Features

🌟 Fully treeshackable  
🌟 Types included  
🌟 [ESNext distribute](#esnext)  
🌟 [CommonJS version available](#commonjs-version)  
🌟 [SSR support](#browserizrsetua)  
🌟 [Custom detects available](#custom-detects)


---

## Table of Content:

1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
        - [ESNext](#esnext)
        - [CommonJS Version](#commonjs-version)
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
        - [isOperaVersion](#isoperaversion)
        - [isSafari](#issafari)
        - [isSafariVersion](#issafariversion)
        - [isSafariIOS](#issafariios)
        - [isSafariIOSVersion](#issafariiosversion)
        - [isVivaldi](#isvivaldi)
        - [isVivaldiVersion](#isvivaldiversion)
        - [isYandex](#isyandex)
        - [isYandexVersion](#isyandexversion)
    1. [Devices](#devices)
        - [isDesktop](#isdesktop)
        - [isMobile](#ismobile)
        - [isIPad](#isipad)
        - [isIPhone](#isiphone)
        - [isIPod](#isipod)
    1. [OS](#os)
        - [isAndroid](#isandroid)
        - [isAndroidVersion](#isandroidversion)
        - [isIOS](#isios)
        - [isIOSVersion](#isiosversion)
        - [isWindows](#iswindows)
        - [isWindowsVersion](#iswindowsversion)
1. [Custom detects](#custom-detects)
    1. [Simple example](#simple-example)
1. [Contributing](#contributing)
1. [License](#licence)

---




## Usage

### Install npm package

```bash
npm i @wezom/browserizr
```

### Import to your codebase

#### ESNext

We use TypeScript as main development language and distribute our lib in the maximum compliance with modern JavaScript specifications. 
You project bundler (webpack or something else) must not exclude this installed package from `node_modules` folder.

_The package [`babel-loader-exclude-node-modules-except`](https://www.npmjs.com/package/babel-loader-exclude-node-modules-except) can help you with this_

#### CommonJS Version

If you cannot change your bundler config or if you don not want to include _esnext_ code version into your project - for this we have compiled CommonJS version of each library file and you can import `*.cjs.js` files. They ready to use without excluding `node_modules` and else. These files may have redundant code that is necessary for them to work "out of the box". And they will also be deprived of all the features of the _ESNext_ specifications.


```js
// no ES6 features but ready for use as is, without transpiling
import browserizr, { isSafari } from '@wezom/browserizr/dist/index.cjs';
```

### Usage example

```js
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

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `fn` | `function` | Function that will accept string argument userAgent and must return boolean result of detect
 
_Return type:_ `boolean`

You can use one of the [built-in methods](#built-in-detects) or write [custom detects](#custom-detects)

```js
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
classNames(
    classes: {
        is: string;
        not: string;
        fn: DetectMethod;
    }[]
): string[]
```

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `classes` | `Array` | Array of options
 `classes[N]` | `Object` | Options for generating class name
 `classes[N].is` | `string` | Class name for positive detects result
 `classes[N].not` | `string` | Class name for negative detects result
 `classes[N].fn` | `function` | Function for detect method, see [browserizr.detect()](#browserizrdetect)
 
_Return type:_ `string[]`

A little example for the explanation: 

```js
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
console.log(browserizr.classNames(classes)); // => ['is-mobile-device', 'is-safari']

// if mobile but not Safari browser
console.log(browserizr.classNames(classes)); // => ['is-mobile-device', 'is-not-safari']

// if not mobile and not Safari browser
console.log(browserizr.classNames(classes)); // => ['not-like-mobile', 'is-not-safari']
```

You can do what you want with this array of strings. Like this:

```js
// Add classes in browser
document.body.classList.add(...browserizr.classNames(classes));
```

```jsx
// Render JSX components
<div className={browserizr.classNames(classes).join(' ')}>
    ...
</div>
```

#### browserizr.setUA()

_Signature:_

```ts
/** Set custom `userAgent` string  */
setUA(ua: string): void
```

_Parameters:_

Name | Data type | Description
 --- | --- | ---
 `ua` | `string` | Custom `userAgent` string
 
_Return type:_ `undefined`

By default, `browserizr` trying to resolve global object `navigator` and get `userAgent` field from that.
Global object `navigator` exist only in the browser environment.

So if you work in the another environment - you may use `.setUA()` method to set custom string:

```js
// working with express server on Node.js
browserizr.setUA(req.headers['user-agent']);
```

Also, method `setUA` will help you with tests [your own detection methods](#custom-detects)

```js
browserizr.setUA('My custom userAgent string');
browserizr.detect(isMyCustomDetectMethod);
```

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




## Built-in detects

We have prepared a list of commonly used detects:

### Browsers

#### isChrome

<details>
<summary><em>Detect Google Chrome browser</em></summary>
<div>

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

<details>
<summary><em>Detect Mozilla Firefox browser.</em></summary>
<div>

```js
import browserizr, { isFirefox } from '@wezom/browserizr';
if (browserizr.detect(isFirefox)) {
    // code
}
```

</div>
</details>

#### isFirefoxVersion

<details>
<summary><em>Detect Mozilla Firefox browser and wanted version.</em></summary>
<div>

```js
import browserizr, {
    isFirefoxVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const ffx83 = isFirefoxVersion(EQUAL, 83);
const ffx83orHigher = isFirefoxVersion(MORE_THEN_OR_EQUAL, 83);
const ffx83orLater = isFirefoxVersion(LESS_THEN_OR_EQUAL, 83);
if (browserizr.detect(ffx83)) {
    // code
}
// ...
``` 

</div>
</details>

#### isFirefoxAndroid

<details>
<summary><em>Detect Mozilla Firefox browser on Android OS.</em></summary>
<div>

```js
import browserizr, { isFirefoxAndroid } from '@wezom/browserizr';
if (browserizr.detect(isFirefoxAndroid)) {
    // code
}
```

</div>
</details>

#### isFirefoxAndroidVersion

<details>
<summary><em>Detect Mozilla Firefox browser and wanted version on Android OS.</em></summary>
<div>

```js
import browserizr, {
    isFirefoxAndroidVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const ffxAndroid83 = isFirefoxAndroidVersion(EQUAL, 83);
const ffxAndroid83orHigher = isFirefoxAndroidVersion(MORE_THEN_OR_EQUAL, 83);
const ffxAndroid83orLater = isFirefoxAndroidVersion(LESS_THEN_OR_EQUAL, 83);
if (browserizr.detect(ffx83Android)) {
    // code
}
// ...
``` 

</div>
</details>

#### isFirefoxIOS

<details>
<summary><em>Detect Mozilla Firefox browser on iOS.</em></summary>
<div>

```js
import browserizr, { isFirefoxIOS } from '@wezom/browserizr';
if (browserizr.detect(isFirefoxIOS)) {
    // code
}
```

</div>
</details>

#### isFirefoxIOSVersion

<details>
<summary><em>Detect Mozilla Firefox browser and wanted version on iOS.</em></summary>
<div>

```js
import browserizr, {
    isFirefoxIOSVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const ffxIOS29 = isFirefoxIOSVersion(EQUAL, 29);
const ffxIOS29orHigher = isFirefoxIOSVersion(MORE_THEN_OR_EQUAL, 29);
const ffxIOS29orLater = isFirefoxIOSVersion(LESS_THEN_OR_EQUAL, 29);
if (browserizr.detect(ffx29IOS)) {
    // code
}
// ...
``` 

</div>
</details>

#### isIE

<details>
<summary><em>Detect Internet Explorer browser.</em></summary>
<div>

```js
import browserizr, { isIE } from '@wezom/browserizr';
if (browserizr.detect(isIE)) {
    // code
}
```

</div>
</details>

#### isIEVersion

<details>
<summary><em>Detect Internet Explorer browser and wanted version.</em></summary>
<div>

```js
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

</div>
</details>

#### isOpera

<details>
<summary><em>Detect Opera browser.</em></summary>
<div>

```js
import browserizr, { isOpera } from '@wezom/browserizr';
if (browserizr.detect(isOpera)) {
    // code
}
```

</div>
</details>

#### isOperaVersion

<details>
<summary><em>Detect Opera browser and wanted version.</em></summary>
<div>

```js
import browserizr, {
    isOperaVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const opera60 = isOperaVersion(EQUAL, 60);
const opera60orHigher = isOperaVersion(MORE_THEN_OR_EQUAL, 60);
const opera60orLater = isOperaVersion(LESS_THEN_OR_EQUAL, 60);
if (browserizr.detect(opera60)) {
    // code
}
// ...
``` 

</div>
</details>

#### isSafari

<details>
<summary><em>Detect Apple Safari browser.</em></summary>
<div>

```js
import browserizr, { isSafari } from '@wezom/browserizr';
if (browserizr.detect(isSafari)) {
    // code
}
``` 

</div>
</details>

#### isSafariVersion

<details>
<summary><em>Detect Apple Safari browser and wanted version.</em></summary>
<div>

```js
import browserizr, {
    isSafariVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const safari14 = isSafariVersion(EQUAL, 14);
const safari14orHigher = isSafariVersion(MORE_THEN_OR_EQUAL, 14);
const safari14orLater = isSafariVersion(LESS_THEN_OR_EQUAL, 14);
if (browserizr.detect(safari14)) {
    // code
}
// ...
``` 

</div>
</details>

#### isSafariIOS

<details>
<summary><em>Detect Apple Safari browser on iOS.</em></summary>
<div>

```js
import browserizr, { isSafariIOS } from '@wezom/browserizr';
if (browserizr.detect(isSafariIOS)) {
    // code
}
``` 

</div>
</details>

#### isSafariIOSVersion

<details>
<summary><em>Detect Apple Safari browser and wanted version on iOS.</em></summary>
<div>

```js
import browserizr, {
    isSafariIOSVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const safarIOSi14 = isSafariIOSVersion(EQUAL, 14);
const safarIOSi14orHigher = isSafariIOSVersion(MORE_THEN_OR_EQUAL, 14);
const safarIOSi14orLater = isSafariIOSVersion(LESS_THEN_OR_EQUAL, 14);
if (browserizr.detect(safariIOS14)) {
    // code
}
// ...
``` 

</div>
</details>

#### isVivaldi

<details>
<summary><em>Detect Vivaldi browser.</em></summary>
<div>

```js
import browserizr, { isVivaldi } from '@wezom/browserizr';
if (browserizr.detect(isVivaldi)) {
    // code
}
```

</div>
</details>

#### isVivaldiVersion

<details>
<summary><em>Detect Vivaldi browser and wanted version.</em></summary>
<div>

```js
import browserizr, {
    isVivaldiVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const vivaldi3dot4 = isVivaldiVersion(EQUAL, 3.4);
const vivaldi3dot4orHigher = isVivaldiVersion(MORE_THEN_OR_EQUAL, 3.4);
const vivaldi3dot4orLater = isVivaldiVersion(LESS_THEN_OR_EQUAL, 3.5);
if (browserizr.detect(vivaldi3dot4)) {
    // code
}
// ...
``` 

</div>
</details>

#### isYandex

<details>
<summary><em>Detect Yandex browser.</em></summary>
<div>

```js
import browserizr, { isYandex } from '@wezom/browserizr';
if (browserizr.detect(isYandex)) {
    // code
}
```

</div>
</details>

#### isYandexVersion

<details>
<summary><em>Detect Yandex browser and wanted version</em></summary>
<div>

```js
import browserizr, {
    isYandexVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const yandex20 = isYandexVersion(EQUAL, 20);
const yandex20orHigher = isYandexVersion(MORE_THEN_OR_EQUAL, 20);
const yandex20orLater = isYandexVersion(LESS_THEN_OR_EQUAL, 20);
if (browserizr.detect(vivaldi3dot4)) {
    // code
}
// ...
``` 

</div>
</details>

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




### Devices

#### isDesktop

<details>
<summary><em>Detect desktop browser.</em></summary>
<div>

```js
import browserizr, { isDesktop } from '@wezom/browserizr';
if (browserizr.detect(isDesktop)) {
    // code
}
```

</div>
</details>

#### isMobile

<details>
<summary><em>Detect mobile browser.</em></summary>
<div>

```js
import browserizr, { isMobile } from '@wezom/browserizr';
if (browserizr.detect(isMobile)) {
    // code
}
```

</div>
</details>

#### isIPad

<details>
<summary><em>Detect the browser on iPad device.</em></summary>
<div>

```js
import browserizr, { isIPad } from '@wezom/browserizr';
if (browserizr.detect(isIPad)) {
    // code
}
```

</div>
</details>

#### isIPhone

<details>
<summary><em>Detect a browser on iPhone device.</em></summary>
<div>

```js
import browserizr, { isIPhone } from '@wezom/browserizr';
if (browserizr.detect(isiPhone)) {
    // code
}
```

</div>
</details>

#### isIPod

<details>
<summary><em>Detect a browser on iPod device.</em></summary>
<div>

```js
import browserizr, { isIPod } from '@wezom/browserizr';
if (browserizr.detect(isIPod)) {
    // code
}
```

</div>
</details>

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---




### OS

#### isAndroid

<details>
<summary><em>Detect Android OS.</em></summary>
<div>

```js
import browserizr, { isAndroid } from '@wezom/browserizr';
if (browserizr.detect(isAndroid)) {
    // code
}
```

</div>
</details>

#### isAndroidVersion

<details>
<summary><em>Detect Android and wanted OS version</em></summary>
<div>

```js
import browserizr, {
    isAndroidVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const android11 = isAndroidVersion(EQUAL, 11);
const android9orHigher = isAndroidVersion(MORE_THAN_OR_EQUAL, 9);
if (browserizr.detect(android11)) {
    // code
}
// ...
```

</div>
</details>

#### isIOS

<details>
<summary><em>Detect the iOS</em></summary>
<div>

```js
import browserizr, { isIOS } from '@wezom/browserizr';
if (browserizr.detect(isIOS)) {
    // code
}
```

</div>
</details>

#### isIOSVersion

<details>
<summary><em>Detect iOS and wanted OS version</em></summary>
<div>

```js
import browserizr, {
    isIOSVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const iOS14 = isIOSVersion(EQUAL, 14);
const iOS11orHigher = isIOSVersion(MORE_THAN_OR_EQUAL, 11);
if (browserizr.detect(iOS14)) {
    // code
}
// ...
```

</div>
</details>

#### isWindows

<details>
<summary><em>Detect Windows OS.</em></summary>
<div>

```js
import browserizr, { isWindows } from '@wezom/browserizr';
if (browserizr.detect(isWindows)) {
    // code
}
```

</div>
</details>

#### isWindowsVersion

<details>
<summary><em>Detect Windows and wanted OS version</em></summary>
<div>

```js
import browserizr, {
    isWindowVersion,
    MORE_THEN_OR_EQUAL,
    EQUAL,
    LESS_THEN_OR_EQUAL
} from '@wezom/browserizr';

const windowXP = isWindowVersion(EQUAL, 'XP');
const windowsVista = isWindowVersion(EQUAL, 'Vista');
const window7 = isWindowVersion(EQUAL, 7);
const window8 = isWindowVersion(EQUAL, 8);
const window8dot1 = isWindowVersion(EQUAL, 8.1);
const window10 = isWindowVersion(EQUAL, 10);

if (browserizr.detect(windowXP)) {
    // code
}
// ...
```

</div>
</details>

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

_TypeScript example_

```ts
// my-detects/is-mxs.ts
export default function isMXSBrowser(ua: string): boolean {
    return /\sMXSBrowser\/[\d.]+\s/.test(ua);
};
```

```ts
// app.ts
import browserizr from '@wezom/browserizr';
import isMXSBrowser from 'my-detects/is-mxs';

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
