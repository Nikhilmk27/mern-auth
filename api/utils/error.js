const errorHandler = (statuscode,message) =>{
    const err = new Error(message);
    err.statuscode = statuscode;
    err.message = message;
    return err;
}
export default errorHandler