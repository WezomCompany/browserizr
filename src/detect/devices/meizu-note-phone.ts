import { DetectMethod } from '../../core';

export const isMeizuNotePhone: DetectMethod = (ua) =>
	/Android\s.*MZ(-)?.*\snote\s/i.test(ua);
