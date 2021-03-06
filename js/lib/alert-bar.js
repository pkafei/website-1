var $ = require('jquery')
var callData = require('./communityCall.json')

function shouldShowBanner (date, startTimeString, startDay) {
  var now = date.getUTCHours()
  var startTime = parseInt(startTimeString, 10)
  var dayOfWeek = date.getUTCDay()

  if ((startTime - now <= 2 && startTime - now >= parseFloat(-0.5) && (dayOfWeek === startDay))) {
    return true
  }
  return false
}

module.exports.shouldShowBanner = shouldShowBanner

function callTime () {
  var reminder = $('.alert-bar')
  if (shouldShowBanner(new Date(), callData.time, callData.day)) {
    $('.alert-bar-message').append('<span>The IPFS community call will start at ' + callData.time + '. Join us <a href=' + callData.callPage + ' style="color: #0073b5; text-decoration: underline">here</a></span>')
    reminder.show()
  } else {
    reminder.hide()
  }
}
callTime()
