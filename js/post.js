$(function(){"use strict";function t(t){return t>1e3?Math.round(t/1e3)+"k":t}var n=encodeURIComponent(document.location.href.split("?")[0].split("#")[0]);$.getJSON("http://free.sharedcount.com/?apikey=d730c518430eabcabc46ab79528c744067afa17e&url="+n,function(n){0!==n.GooglePlusOne&&$(".count-googleplus").html(t(n.GooglePlusOne)).fadeIn(),0!==n.StumbleUpon&&$(".count-stumbleupon").html(t(n.StumbleUpon)).fadeIn()}),$.getJSON("http://urls.api.twitter.com/1/urls/count.json?callback=?&url="+n,function(n){var o=n.count;o>0&&$(".count-twitter").html(t(o)).fadeIn()}),$.getJSON("https://api.facebook.com/method/links.getStats?format=json&urls="+n,function(n){var o=n[0].total_count;o>0&&$(".count-facebook").html(t(o)).fadeIn()}),$.getJSON("https://www.linkedin.com/countserv/count/share?format=jsonp&callback=?&url="+n,function(n){var o=n.count;o>0&&$(".count-linkedin").html(t(o)).fadeIn()}),$.getJSON("http://www.reddit.com/api/info.json?jsonp=?&url="+n,function(n){var o=n.data.children.length;o>0&&$(".count-reddit").html(t(o)).fadeIn()}),$.getJSON("http://feeds.delicious.com/v2/json/urlinfo/data?url="+n+"&callback=?",function(n){var o=0;n.length>0&&(o=n[0].total_posts),0!==o&&$(".count-delicious").html(t(n[0].total_posts)).fadeIn()})}),$(function(){"use strict";$(".button").click(function(t){t.preventDefault();var n=$(this);window.open(n.attr("href"),n.attr("title"),"width=640,height=300")}),$("h2").each(function(t,n){var o=$(n),e=o.attr("id");e&&o.append($("<a/>").addClass("link").attr("href","#"+e).append('<i class="icon icon-link"></i>'))})});