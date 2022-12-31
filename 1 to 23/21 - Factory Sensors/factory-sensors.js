export class ArgumentError extends Error {}

export class OverheatingError extends Error {
    constructor(temperature) {
        super(`The temperature is ${temperature} ! Overheating !`);
        this.temperature = temperature;
    }
}

export function checkHumidityLevel(humidityPercentage) {
    if(humidityPercentage > 70) throw new Error('Oops');
}

export function reportOverheating(temperature) {
    if(temperature === null) throw new ArgumentError();
    if(temperature > 500) throw new OverheatingError(temperature);
}

export function monitorTheMachine(actions) {
    try {
        actions.check();
    } catch (error){
        switch(error.constructor){
        case ArgumentError:
            actions.alertDeadSensor();
            break;
        case OverheatingError:
            if(error.temperature > 600) return actions.shutdown();
            if(error.temperature > 500) return actions.alertOverheating();
            break;
        default:
            throw error;
        }
    }
}