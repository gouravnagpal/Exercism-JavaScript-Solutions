export class TranslationService {
    constructor(api) {
        this.api = api;
    }
    free(text) {
        return this.api.fetch(text).then((result) => result.translation);
    }

    async batch(texts) {
        if (texts.length === 0) throw new BatchIsEmpty();

        let response = new Array();

        try {
            for(let i of texts){
                response.push(await this.free(i));
            }
        } catch (error) {
            throw error;
        }
        
        return response;
    }

    request(text) {
        const ApiResponse = (txt) => {
            return new Promise((resolve, reject) => {
                this.api.request(txt, (err) => err ? reject(err) : resolve(undefined));
            })
        }
        
        return ApiResponse(text)
        .catch(() => ApiResponse(text))
        .catch(() => ApiResponse(text))
    }

    premium(text, minimumQuality) {
        return this.api.fetch(text)
        .catch(() => {
            return this.request(text).then(() => this.api.fetch(text))
        })
        .then((result) => {
            if(result.quality < minimumQuality) throw new QualityThresholdNotMet()
            return result.translation;
        })
    }
}

export class QualityThresholdNotMet extends Error {
    constructor(text) {
        super(`The translation of ${text} does not meet the requested quality threshold.`.trim());
        this.text = text;
    }
}

export class BatchIsEmpty extends Error {
    constructor() {
        super(`Requested a batch translation, but there are no texts in the batch.`.trim());
    }
}