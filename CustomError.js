'use strict';

function CustomError(ErrorName) {
    var errForm = (Message) => {
        this.message = Message
    }
    function CE(message) {
        Error.captureStackTrace(this, this.constructor);
        this.message = message;
        errForm && errForm.call(this, arguments);
    }

    CE.prototype = new Error();
    CE.prototype.name = ErrorName;
    CE.prototype.constructor = CE;
    return CE;
}

module.exports = CustomError;