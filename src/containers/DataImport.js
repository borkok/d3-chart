import React, {useState} from 'react';
import FileUploader from "../components/uploader/FileUploader";
import {useDispatch, useSelector} from "react-redux";
import {UPLOAD} from "../loaders/projects";
import {Button} from "@material-ui/core";
import {load} from "../store/actionCreators";
import {Instruction} from "./Instruction";

const DataImport = () => {
    const [complexityJson, setComplexityJson] = useState('');
    const [churnText, setChurnText] = useState('');

    const dispatch = useDispatch();

    const project = useSelector(state => state.project);
    if (project !== UPLOAD) return null;

    const handleComplexityUpload = file => file.text().then(text => setComplexityJson(JSON.parse(text)));
    const handleChurnUpload = file => file.text().then(text => setChurnText(text));

    const handleClick = () => {
        load(dispatch, UPLOAD, complexityJson, churnText);
    };

    return (
        <>
            <table>
                <tr>
                    <td style={{width: "500px"}}>
                        <FileUploader upload={handleComplexityUpload} label="Sonar Complexity Json"/>
                    </td>
                    <td style={{width: "500px"}}>
                        <FileUploader upload={handleChurnUpload} label="Git Churn Text"/>
                    </td>
                    <td>
                        <Button variant="contained" color="secondary" onClick={handleClick}>
                            Show chart
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <Instruction/>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default DataImport;