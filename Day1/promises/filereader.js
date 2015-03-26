var getFile = functoin getFile(fname) {
    return new Promise(function (resolve, reject) {
        getFile(fname, function (err, data) {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};


getFile('filename.js')
    .then(
        function (data) {
            // process data
        },
        function (err) {
            // process error
            getBackupFile();
        }
    )
    .then(
        function (data) {
            // again !!!
        },
        function (err) {
            // this also
            getsEcondBackupFile();
        }
    );
