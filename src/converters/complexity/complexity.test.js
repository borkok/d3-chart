import input from "./sonar-test-input.json";
import expectedOutput from "./sonar-test-output.json";
import {convertSonar} from "./complexity";

describe('should convert json from sonar to array of complexity-filename pairs', () => {
    it('expected three output objects',() => {
        const result = convertSonar(input);
        expect(result).toEqual(expectedOutput);
    })

    it('expected empty output',() => {
        const result = convertSonar([]);
        expect(result).toEqual([]);
    })
})