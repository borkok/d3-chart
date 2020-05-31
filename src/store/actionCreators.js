import {LOAD} from "./actions";
import {convertSonar} from "../converters/complexity/complexity";
import {convertGit} from "../converters/churn/churn";
import {aggregate} from "../converters/aggregator/aggregate";

export const load = (dispatch, project, sonarJson, gitChurnText) => {
    const sonarComplexityData = convertSonar(sonarJson);
    const gitChurnData = convertGit(gitChurnText);
    const aggregatedData = aggregate(sonarComplexityData, gitChurnData);

    dispatch({"type": LOAD, "payload": { "data": aggregatedData, "project": project}});
}