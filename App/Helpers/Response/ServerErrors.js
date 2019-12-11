// 2xx, if everything was okay,
// 3xx, if the resource was moved,
// 4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
// 46x, Custom Client Errors
// 5xx, if something went wrong on the API side (like an exception happened).

const InternalError = (res, message) => res.status(500).json({ message: message || "Something happened Internally", code: "E500" });


const StandardErrCodes = {
    "E500": "Internal Server Error",
}

const CustomErrCodes = {
}


module.exports = {
    InternalError
}