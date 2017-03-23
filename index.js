'use strict'
let
  Promise = require('bluebird'),
  request = require('request')

function requestPromiseNativeRes(requestOptions) {
  return new Promise((resolve, reject) => {
    request(requestOptions, (err, res, body) => {
      if (err)
        return reject(err)
      else
        return resolve(res)
    })
  })
}

module.exports = requestPromiseNativeRes
