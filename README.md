
# `browserizr`

![Typescript first](https://img.shields.io/badge/TypeScript-First-blue)
[![BSD-3-Clause License badge](https://img.shields.io/github/license/WezomCompany/browserizr)](https://github.com/WezomCompany/browserizr/blob/master/LICENSE)
[![NPM package badge](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/@wezom/browserizr)
![Test and Build status badge](https://github.com/WezomCompany/browserizr/workflows/Test%20and%20Build/badge.svg)

_Description_

## Coverage

| Statements                | Branches                | Functions                | Lines                |
| ------------------------- | ----------------------- | ------------------------ | -------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-39.58%25-red.svg) | ![Branches](https://img.shields.io/badge/Coverage-90%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-41.67%25-red.svg) | ![Lines](https://img.shields.io/badge/Coverage-46.88%25-red.svg) |

## Table of Content:

1. [Usage](#usage)
    1. [Install npm package](#install-npm-package)
    1. [Import to your codebase](#import-to-your-codebase)
1. [API](#api)
    1. [Properties](#properties)
    1. [Methods](#methods)

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

### Properties

_describe_

### Methods

_describe_
