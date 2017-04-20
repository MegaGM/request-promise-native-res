'use strict'
let
  Promise = require('bluebird'),
  request = require('request')

request.nativeRes = requestPromiseNativeRes
module.exports = request

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
