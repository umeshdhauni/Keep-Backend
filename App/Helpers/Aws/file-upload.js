const { id, secret, bucketName } = require('../../Constants/Aws')
const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: id,
    secretAccessKey: secret
});

const fileUpload = (file) => {
    let promise = new Promise((resolve, reject) => {
        // Read content from the file

        const fileContent = fs.readFileSync(file.path);
        console.log(fileContent)
        // Setting up S3 upload parameters
        const params = {
            Bucket: bucketName,
            Key: file.filename, // File name you want to save as in S3
            Body: fileContent
        };


        // Uploading files to the bucket
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
    return promise;
}

module.exports = {
    fileUpload
}