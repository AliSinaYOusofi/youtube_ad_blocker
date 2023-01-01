setInterval( function() {
    let skip_ads_button = document.getElementsByClassName("ytp-ad-skip-button");
    let ad_button = document.getElementsByClassName("yt-spec-touch-feedback-shape__fill")
    let action_companion = document.getElementById("action-companion-click-target.ytd-action-companion-ad-renderer");
    let banner = document.getElementsByClassName("ytd-video-masthead-ad-advertiser-info-renderer.channel-banner")[0];
    if (skip_ads_button != 'undefined' && skip_ads_button.length > 0) {
        console.log("ad detected");
        skip_ads_button[0].click();
    }

    if (ad_button) {
        ad_button.style.display = "none";
        console.log("big ad");
    }
    if (banner && banner.length > 0) {
        banner.style.display = "none";
    }
    if (action_companion) {
        action_companion.style.display = "none";
    }
})