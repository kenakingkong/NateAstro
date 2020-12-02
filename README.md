
# Poetry by Thomas Kaar
This is a dating app / blog / collection / personal site for Tommy.

## How does it work?
* The site is built with JS and **Gatsby**.
* Poems are pulled from Tommy's Medium Feed with **gatsby-medium-rss-feed** plugin.
* Hosted in an AWS S3 bucket

## Deploy Changes
AWS_ACCESS_KEY_ID=xxxx (save in env)

AWS_SECRET_ACCESS_KEY=xxxx (save in env)

npm run build && npm run deploy

## Links
[Site](http://poems-by-thomas-kaar.s3-website.us-east-2.amazonaws.com/)

[Designing the App](https://medium.com/@makenakong/case-study-designing-a-unique-poetry-reading-experience-8c858b92133b)

[Developing the App](https://medium.com/@makenakong/building-a-poetry-site-with-gatsby-and-a-medium-feed-a481951855a0)

[Dev Help](./README_GATSBY.md)