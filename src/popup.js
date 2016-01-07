chrome.storage.local.get('text', function(item) {
    $("#tweetfiller-text").val(item.text);
});

chrome.storage.local.get('enable', function(item) {
    $("#tweetfiller-enable").prop("checked", item.enable);
});

$("#tweetfiller-text").on("keyup", function() {
    chrome.storage.local.set({"text": $("#tweetfiller-text").val()});
});

$("#tweetfiller-enable").on("change", function() {
    chrome.storage.local.set({"enable": $("#tweetfiller-enable").prop("checked")});
});

