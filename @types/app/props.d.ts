export {}

declare global {
    interface IMarketCapCardProps {
        value: number | string
        percent: number
        graphAttr: {
            type: 'area' | 'line' | 'bar'
            data: {x: string | number , y : string | number}[]
        }
    }

}