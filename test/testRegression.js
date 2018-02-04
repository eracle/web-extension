import { assert, expect } from 'chai';
import { TimeWarp, listFixtures, loadFixture, loadPayload } from './utils';

import { scrape, scrapePermalink } from '../src/scrape';

describe("Regressions", function () {
    const fixtures = listFixtures('regression/');
    const timeWarp = new TimeWarp();

    afterEach(() => {
        timeWarp.reset();
    });

    fixtures.forEach((path) => {
        const fixture = loadFixture(path);

        it(`passes regression test "${path}"`, function () {
            timeWarp.set(2016, 5, 6, 15, 0, 10, -120);
            expect(scrape, fixture).to.not.throw(TypeError);

        });
    });

});

