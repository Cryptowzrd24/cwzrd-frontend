export const getPositiveNegativeIcon = (number: number) => {
    const message = number > 0 ? "+" : number < 0 ? "-" : "";
    return message;
}

export const getGraphColor = (number: number) => {
    const color = number >= 0 ? 'green' : 'red';
    return color;
}
