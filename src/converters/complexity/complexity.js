const isFile = a => a.qualifier === "FIL";

const mapElementToResult = element => {
    const complexity = element.measures.filter(m => m.metric === "complexity")[0].value;
    return {"complexity": complexity, "filename": element.name}; //, "path": element.path
}

export const convertSonar = input => {
    if (!input.components) return [];
    const a = [...input.components];
    return a.filter(isFile).map(mapElementToResult);
};
