import $ from 'jquery';

$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    console.log(tabs);
    $("#url").text(tabs[0].url);
  });
});
