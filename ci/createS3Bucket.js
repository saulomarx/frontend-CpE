// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_REGION,
});

const BUCKET_NAME = 'ciencia-para-educacao';
  
// Create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create params JSON for S3.createBucket
const bucketParams = {
  Bucket: BUCKET_NAME,
  ACL: 'public-read',
};

// Create params JSON for S3.setBucketWebsite
const staticHostParams = {
  Bucket: BUCKET_NAME,
  WebsiteConfiguration: {
    ErrorDocument: {
      Key: 'error.html',
    },
    IndexDocument: {
      Suffix: 'index.html',
    },
  },
};

// Call S3 to create the bucket
s3.createBucket(bucketParams, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log(`Bucket URL is ${data.Location}`);
    // Set the new policy on the newly created bucket
    s3.putBucketWebsite(staticHostParams, (errPolicy, dataPolicy) => {
      if (errPolicy) {
        // Display error message
        console.log('Error', errPolicy);
      } else {
        // Update the displayed policy for the selected bucket
        console.log('Success', dataPolicy);
      }
    });
  }
});
