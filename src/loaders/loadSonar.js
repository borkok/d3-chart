import sonarCore from "../resources/sonar-core-service.json";
import {SAMPLE} from "./projects";

export const loadSonar = (project) => {
    if (project === SAMPLE)       return sonarCore;
    return "";
};