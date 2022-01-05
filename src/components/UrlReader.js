
const addStateFromUrl = (url) => {
    let perCounter = 0;
    let path = ''
    for (let char of url) {
        if (perCounter === 2) {
            path += char
        }
        if (char === '/') {
            perCounter++;
        }
        
    }
    return path
}

export default addStateFromUrl;