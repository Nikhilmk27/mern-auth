export const errorHandler = (statuscode,message) =>{
    const error = new error()
    error.statuscode = statuscode;
    error.message = message;
    return error;
}