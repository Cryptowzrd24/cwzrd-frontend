export const getPositiveNegativeIcon = (number: number) => {
    const message = number > 0 ? "+" : number < 0 ? "-" : "";
    return message;
}

export const getGraphColor = (number: number) => {
    const color = number >= 0 ? '69, 202, 148' : '245, 109, 109';
    return color;
}

export const getTimeAgoText = (value: Date | number) => {
    if(typeof value === 'number') {
        return value + ' Minutes Ago';
    }
    return ' Minutes Ago'
}