export const promisify = (callback) => {
    return function fun1(param) {
        return new Promise((resolve, reject) => {
            callback(param, (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(param);
            })
        });
    };
};

export const all = (arr) => {
    if (arr) {
        return Promise.all(arr);
    }
    return Promise.resolve();
};

export const allSettled = (arr) => {
    if (arr && arr.length > 0) {
        return new Promise(async (resolve, reject) => {
            let result = [],
                data;
            for (let promise of arr) {
                try {
                    data = await promise;
                } catch (err) {
                    data = err;
                }
                result.push(data);
            }
            resolve(result);
        });
    } else if (arr && arr.length == 0) {
        return Promise.resolve([]);
    }
    return Promise.resolve();
};

export const race = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
        return Promise.race(arr);
    } else if (Array.isArray(arr)) {
        return Promise.resolve([]);
    }
    return Promise.resolve();
};

export const any = (arr) => {
    if (arr) {
        return new Promise((resolve, reject) => {
            let fails = [];
            for (let promise of arr) {
                promise.then((data) => {
                    resolve(data);
                }).catch((err) => {
                    fails.push(err);
                    if (fails.length == arr.length) {
                        reject(fails);
                    }
                });
            }
        });
    }
    return Promise.resolve();
};