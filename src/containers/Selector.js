import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {loadSonar} from "../loaders/loadSonar";
import {loadChurn} from "../loaders/loadChurn";
import {load} from "../store/actionCreators";
import {MenuItem, MenuList} from '@material-ui/core';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {SAMPLE, UPLOAD} from "../loaders/projects";

const theme = createMuiTheme({
    overrides: {
        MuiMenuItem: {
            root: {
                '&$selected': {
                    backgroundColor: "#69b3a2",
                },
            },
        },
    },
});

const Selector = () => {
    const [project, setProject] = useState(SAMPLE);

    const dispatch = useDispatch();

    useEffect(() => {
        const sonar = loadSonar(project);
        const gitChurn = loadChurn(project);
        load(dispatch, project, sonar, gitChurn);
    }, [dispatch, project])

    return (
        <MuiThemeProvider theme={theme}>
            <MenuList>
                <MenuItem selected={project === SAMPLE} onClick={() => setProject(SAMPLE)}>SAMPLE</MenuItem>
                <MenuItem selected={project === UPLOAD} onClick={() => setProject(UPLOAD)}>UPLOAD</MenuItem>
            </MenuList>
        </MuiThemeProvider>
    );
};

export default Selector;