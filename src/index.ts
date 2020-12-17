export { default } from './core';
export { EQUAL, LESS_THEN_OR_EQUAL, MORE_THEN_OR_EQUAL, matchVersion } from './utils';
export type { DetectVersionOperator } from './utils';
// Chrome
export { default as isChrome } from './detect/browsers/chrome';
export { default as isChromeVersion } from './detect/browsers/chrome-version';
export { default as isChromeAndroid } from './detect/browsers/chrome-android';
export { default as isChromeAndroidVersion } from './detect/browsers/chrome-android-version';
export { default as isChromeIOS } from './detect/browsers/chrome-ios';
export { default as isChromeIOSVersion } from './detect/browsers/chrome-ios-version';
// Edge
export { default as isEdge } from './detect/browsers/edge';
export { default as isEdgeVersion } from './detect/browsers/edge-version';
export { default as isEdgeAndroid } from './detect/browsers/edge-android';
export { default as isEdgeAndroidVersion } from './detect/browsers/edge-android-version';
export { default as isEdgeIOS } from './detect/browsers/edge-ios';
export { default as isEdgeIOSVersion } from './detect/browsers/edge-ios-version';
// Firefox
export { default as isFirefox } from './detect/browsers/firefox';
export { default as isFirefoxVersion } from './detect/browsers/firefox-version';
export { default as isFirefoxAndroid } from './detect/browsers/firefox-android';
export { default as isFirefoxAndroidVersion } from './detect/browsers/firefox-android-version';
export { default as isFirefoxIOS } from './detect/browsers/firefox-ios';
export { default as isFirefoxIOSVersion } from './detect/browsers/firefox-ios-version';
// IE
export { default as isIE } from './detect/browsers/ie';
export { default as isIEVersion } from './detect/browsers/ie-version';
// Opera
export { default as isOpera } from './detect/browsers/opera';
export { default as isOperaVersion } from './detect/browsers/opera-version';
// Safari
export { default as isSafari } from './detect/browsers/safari';
export { default as isSafariVersion } from './detect/browsers/safari-version';
export { default as isSafariIOS } from './detect/browsers/safari-ios';
export { default as isSafariIOSVersion } from './detect/browsers/safari-ios-version';
// Vivaldi
export { default as isVivaldi } from './detect/browsers/vivaldi';
export { default as isVivaldiVersion } from './detect/browsers/vivaldi-version';
// Yandex
export { default as isYandex } from './detect/browsers/yandex';
export { default as isYandexVersion } from './detect/browsers/yandex-version';
// Desktop
export { default as isDesktop } from './detect/devices/desktop';
// Mobile
export { default as isMobile } from './detect/devices/mobile';
// IPad
export { default as isIPad } from './detect/devices/ipad';
// IPhone
export { default as isIPhone } from './detect/devices/iphone';
// IPod
export { default as isIPod } from './detect/devices/ipod';
// Android
export { default as isAndroid } from './detect/os/android';
export { default as isAndroidVersion } from './detect/os/android-version';
// iOS
export { default as isIOS } from './detect/os/ios';
export { default as isIOSVersion } from './detect/os/ios-version';
// Android
export { default as isWindows } from './detect/os/windows';
export { default as isWindowsVersion } from './detect/os/windows-version';
