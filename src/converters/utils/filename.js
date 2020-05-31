export const getFilenameFromPath = path => {
    const elements = path.split("/");
    const lastIndex = elements.length - 1;
    return elements[lastIndex];
}