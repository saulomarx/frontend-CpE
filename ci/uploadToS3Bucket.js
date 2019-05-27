const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const BUCKET_NAME = 'ciencia-para-educacao';

AWS.config.update({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_REGION || process.env.AWS_REGION_CODE,
});

const uploadDir = (s3Path, bucketName) => {
  const s3 = new AWS.S3();

  function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach((name) => {
      const filePath = path.join(currentDirPath, name);
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath, stat);
      } else if (stat.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  }

  walkSync(s3Path, (filePath) => {
    const bucketPath = filePath.substring(s3Path.length + 1);
    const params = { Bucket: bucketName, Key: bucketPath, Body: fs.readFileSync(filePath) };
    s3.putObject(params, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Successfully uploaded ${bucketPath} to ${bucketName}`);
      }
    });
  });
};

uploadDir('public', BUCKET_NAME);
