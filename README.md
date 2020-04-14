# devjob-redflag

inspired by https://mobile.twitter.com/mgoldst/status/1231234970968109057 - plus more red flags

## What it does

Helps you identify common developer job posts that may be a waste of time applying for.

## Why?

- Some job posts are there just to harvest developer resumes for future use
- Some are just exploitative roles and toxic companies.
  ...

## How to use

run

```
npm i devpost-redflag
```

find a specific job post that you would like to check. Get the url to that post, then in your project:

```
const checkRedflag = require('devpost-redflag')

checkRedflag('https://www.indeed.com/q-Rockstar-Java-Developer-jobs.html?vjk=c788c338e737283f')
.them(result => {
  console.log(result) // { flagsFound: [ 'rockstar' ], rate: '8.333333333333332%' }
})
```

## todo

[] global install using cli args
[] browser extension
