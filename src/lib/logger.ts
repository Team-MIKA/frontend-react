export const log: (message?: any, ...optionalParams: any[]) => void =
    process.env.NODE_ENV == "development" ? console.log : () => null;

export const error = (message?: any, ...optionalParams: any[]) => {
    log("[ERROR]" + message, ...optionalParams);
};
