export class Series {
    constructor(series) {
        this.series = series;
    }

    slices(sliceLength) {
        if(sliceLength < 0) throw new Error('slice length cannot be negative')
        if(sliceLength === 0) throw new Error('slice length cannot be zero')
        if(!this.series) throw new Error('series cannot be empty')

        let NewSeries = this.series.split('');
        let len = NewSeries.length;

        if(sliceLength > len) throw new Error('slice length cannot be greater than series length')

        let result = new Array();
        NewSeries = NewSeries.map(Number);

        for(let i = 0; i < len; i++){
            if(len - i >= sliceLength) result.push(NewSeries.slice(i, i + sliceLength));
        }
        return result;
    }
}