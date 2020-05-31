const doNothing = () => {};

const checkIfHasYAndPushTo = result => (value) => value.y ? result.push(value) : doNothing();

export const aggregate = (complexity, churn) => {
    if (complexity.length === 0 || churn.length === 0) {
        return [];
    }
    const resultMap = new Map();
    complexity.forEach(({filename, complexity}) => resultMap.set(filename, {"x": complexity, "label": filename}));
    churn.forEach(({filename, churn}) => {
        const element = resultMap.get(filename);
        element ? element["y"]=churn : doNothing();
    });

    const result = [];
    resultMap.forEach(checkIfHasYAndPushTo(result));

    return result;
}