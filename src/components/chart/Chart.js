import React, {memo, useEffect, useRef} from "react";
import {draw} from "./draw";

const Chart = ({data, xLabel, yLabel}) => {
    const canvas = useRef();
    useEffect(() => draw(data, xLabel, yLabel, canvas.current), [canvas, data, xLabel, yLabel]);

    const showCanvas = () => {
        if (!data || data.length === 0) {
            return <h2>No data uploaded</h2>;
        }
        return <svg ref={canvas}/>;
    }

    return (
        <div>
            {showCanvas()}
        </div>
    );
};

export default memo(Chart);