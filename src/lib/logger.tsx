export const log = (message?: any, ...optionalParams: any[]) => {
    console.log(message, ...optionalParams);
};

export const error = (message?: any, ...optionalParams: any[]) => {
    log("[ERROR]" + message, ...optionalParams);
};
