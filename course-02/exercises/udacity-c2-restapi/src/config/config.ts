export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME/*"udagramrotimidev"*/,
    "password": process.env.POSTGRES_PASSWORD/*"Samuel20685"*/,
    "database": process.env.POSTGRES_DATABASE/*"udagramrotimidev"*/,
    "host": process.env.POSTGRES_HOST /*"udagramrotimidev.cqkxe2flyf9x.us-east-1.rds.amazonaws.com"*/,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION/*"us-east-1"*/,
    "aws_profile": process.env.AWS_PROFILE/*"default"*/,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET/*"udagram-adebiyi-dev"*/
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
