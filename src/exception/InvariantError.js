const ClientError = require('./ClientError');

class InvariantError extends ClientError {
    constructor(messsage){
        super(Message);
        this.name = 'InvariantError';
    }
}
module.exports = InvariantError;