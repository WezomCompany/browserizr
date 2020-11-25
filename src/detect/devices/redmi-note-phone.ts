import { DetectMethod } from '../../core';

export const isRedmiNotePhone: DetectMethod = (ua) =>
	/Android\s.*Redmi.*\sNote\s/i.test(ua);
