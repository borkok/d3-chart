import Expandable from "../components/expandable/Expandable";
import React from "react";

const sampleComplexityJson = {
    "components": [
        {
            "name": "SomeDTO.java",
            "qualifier": "FIL",
            "path": "src/main/java/pl/com/example/dtos/SomeDTO.java",
            "measures": [{"metric": "complexity", "value": "229"}]
        },
        {
            "name": "OtherService.java",
            "qualifier": "FIL",
            "path": "src/main/java/pl/com/example/others/OtherService.java",
            "measures": [{"metric": "complexity", "value": "157"}]
        }
    ]
}

export const Instruction = () => {
    return <Expandable title="How to prepare files?">
        <div style={{"font-size": "80%"}}>
            <p>
                <i>Inspired by <a
                    href="https://understandlegacycode.com/blog/focus-refactoring-with-hotspots-analysis/">Focus
                    refactoring on what matters with Hotspots Analysis</a> by Nicolas Carlo.</i>
            </p>
            <p>
                To prepare <b>Git Churn Text</b> file run following git command and upload resulting git-churn.txt:
                <pre>
                                    git log --format=format: --name-only --since=12.month
                                    | egrep -v '^$'
                                    | egrep -v '\.json$'
                                    | egrep -v '\.xml$'
                                    | egrep -v '\.properties$'
                                    | egrep -v '\.xhtml$'
                                    | sort
                                    | uniq -c
                                    | sort -nr
                                    | head -100 > git-churn.txt
                                    </pre>
            </p>
            <p>
                To retrieve <b>Sonar Complexity Json</b> use SonarQube REST API (tested on 7.9.5 version):
                <pre>
                [your-sonarqube-url]api/measures/component_tree?component=[component-key]&metricKeys=complexity&asc=false&qualifiers=FIL&s=metric&metricSort=complexity&ps=500
                </pre>
                Resulting json must have following structure (any additional attributes will be ignored):
                <pre>{JSON.stringify(sampleComplexityJson, null, 2)}</pre>
                Tip: If you don't have SonarQube you can prepare Complexity Json manually, using a class LOC number as a simplified complexity measure.
            </p>
        </div>
    </Expandable>
}
