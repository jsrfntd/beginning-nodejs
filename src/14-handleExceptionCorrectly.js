// We need to notify the callback about success and failure. This is why Node.js has a convention of calling callbacks
// with the first argument of error if there is an error. If there is no error, we call back with the error set to null.
// As a result, a getConnection function designed for the Node.js ecosystem would be something like what is shown in Listing 2-47.
// Having the error as the first argument ensures consistency in error checking. This is the convention followed by
// all Node.js functions that have an error condition. A good example of this is the file system API, which we cover in
// Chapter 3. Also note that developers tend to use the falsy nature of null to check for errors.

function getConnection(callback) {
    var connection;
    try {
// Lets assume that the connection failed
        throw new Error('connection failed');
// Notify callback that connection succeeded?
        callback(null, connection);
    }
    catch (error) {
// Notify callback about error?
        callback(error, null);
    }
}
// Usage
getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    }
    else {
        console.log('Connection succeeded:', connection);
    }
});