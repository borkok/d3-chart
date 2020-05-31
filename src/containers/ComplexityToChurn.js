import React from 'react';
import Chart from "../components/chart/Chart";
import {useSelector} from "react-redux";

const ComplexityToChurn = () => {
    const data = useSelector(state => state.data);

    return (
        <Chart data={data} xLabel="complexity" yLabel="churn"/>
    );
};

export default ComplexityToChurn;