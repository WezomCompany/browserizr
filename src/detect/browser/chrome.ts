import { DetectMethod } from '../../core';
import { isOpera } from './opera';
import { isSafari } from './safari';
import { isEdge } from './edge';
import { isEdgeAndroid } from '../platform/edge-android';
import { isEdgeIOS } from '../platform/edge-ios';

export const isChrome: DetectMethod = (ua, platform) =>
	/ Chrome\/\d/i.test(ua) &&
	!isOpera(ua, platform) &&
	!isSafari(ua, platform) &&
	!isEdge(ua, platform) &&
	!isEdgeAndroid(ua, platform) &&
	!isEdgeIOS(ua, platform);
