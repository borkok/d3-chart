import {gitChurn} from "../resources/git-core-churn-top100";
import {SAMPLE} from "./projects";

export const loadChurn = (project) => {
    if (project === SAMPLE)        return gitChurn;
    return "";
}