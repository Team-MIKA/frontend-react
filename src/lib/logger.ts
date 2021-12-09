export const log: (message?: any, ...optionalParams: any[]) => void =
    process.env.NODE_ENV != "production" ? console.log : () => null;

export const error = (message?: any, ...optionalParams: any[]) => {
    log("[ERROR]" + message, ...optionalParams);
};
