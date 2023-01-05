import { describe, it, expect } from 'vitest';

import parse from '.';
import { Combo } from './models/Combo';

const SAMPLE_NOTATION = 'd/f2;4,4;3,1,4';

describe('parser', () => {
    it('creates a combo instance', () => {
        expect(parse(SAMPLE_NOTATION) instanceof Combo).toBe(true);
    });
});
