import {getFilenameFromPath} from "../utils/filename";

export const convertGit = text => {
    if (!text || text.trim().length === 0) {
        return [];
    }
    const gitText = "" + text.trim();
    const regex = /\s+/;
    let gitArray = gitText.split(regex);
    const result = [];

    for (let i = 0; i < gitArray.length; i = i + 2) {
        const element = {"churn": parseInt(gitArray[i]), "filename": getFilenameFromPath(gitArray[i+1])};
        result.push(element);
    }

    return result;
};
