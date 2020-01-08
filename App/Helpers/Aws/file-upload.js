const { id, secret, bucketName } = require('../../Constants/Aws')
const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
    accessKeyId: id,
    secretAccessKey: secret
});

const fileUpload = (file) => {
    // Read content from the file
    const fileContent = fs.readFileSync(file);

    // Setting up S3 upload parameters
    const params = {
        Bucket: bucketName,
        Key: file, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
}

module.exports = {
    fileUpload
}