import {gitChurn} from "./git-churn-test-input";
import expectedOutput from "./git-churn-test-output.json";
import {convertGit} from "./churn";

describe('should convert text from git cli to array of churn-filename pairs', () => {
    it('expected two output objects',() => {
        const result = convertGit(gitChurn);
        expect(result).toEqual(expectedOutput);
    })

    it('expected empty output',() => {
        const result = convertGit("");
        expect(result).toEqual([]);
    })

    it('expected empty output',() => {
        const result = convertGit("\n  \t");
        expect(result).toEqual([]);
    })
})