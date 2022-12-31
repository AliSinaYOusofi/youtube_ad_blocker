setInterval( function() {
    let skip_ads_button = document.getElementsByClassName("ytp-ad-skip-button");
    if (skip_ads_button != 'undefined' && skip_ads_button.length > 0) {
        console.log("ad detected");
        skip_ads_button[0].click();
    }
})