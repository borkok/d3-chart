import React, {useRef, useState} from 'react';
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";

const FileUploader = ({upload, label}) => {
    const [file, setFile] = useState();
    const hiddenFileInput = useRef(null);

    const handleUpload = (event) => {
        if (event.target.files.length > 0) {
            const selected = event.target.files[0];
            setFile(selected);
            upload(selected);
            console.log(selected);
        }
    }

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <table>
            <tbody>
            <tr>
                <td>
                    <Button variant="contained" color="default" onClick={handleClick}>
                        {label}
                    </Button>
                    <input ref={hiddenFileInput} type='file' onChange={handleUpload} style={{display:'none'}}/>
                </td>
                <td>
                    <InputLabel id="filename">{file ? file.name : ''}</InputLabel>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default FileUploader;