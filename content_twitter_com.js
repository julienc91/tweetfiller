var limit = 140;

$('body').on("mousedown", "button.tweet-action", function() {

    var button = $(this);
    
    chrome.storage.local.get('enable', function(item) {
        enabled = item.enable;
        if (!enabled)
            return;
            
        chrome.storage.local.get('text', function(item) {
            filler = item.text;
            if (!filler)
                return;
            
            var tweetbox = button.closest("form").find(".tweet-box");
            var text_to_add = "";
            var fill_to = limit - tweetbox.text().length;
            for (var i = 0; i < fill_to; i++) {
                text_to_add += filler[i % filler.length];
            }
            tweetbox.text(tweetbox.text() + text_to_add);
        });
    });
});

