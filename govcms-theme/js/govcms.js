function startCounter(e){jQuery(e).prop("Counter",0).animate({Counter:jQuery(e).text()},{duration:1300,easing:"swing",step:function(t){jQuery(e).text(Math.ceil(t))},complete:function(){jQuery(e).addClass("counted"),jQuery(e).removeClass("counting")}})}function isElementVisible(e){var t=jQuery(window).scrollTop(),n=t+jQuery(window).height(),i=jQuery(e).offset().top,o=i+jQuery(e).height();return o<=n&&i>=t||!(o<=t)&&!(i>=n)}jQuery(document).ready(function(){function e(e){this.element=e,this.mainNavigation=this.element.find(".main-nav"),this.mainNavigationItems=this.mainNavigation.find(".has-dropdown"),this.dropdownList=this.element.find(".dropdown-list"),this.dropdownWrappers=this.dropdownList.find(".dropdown"),this.dropdownItems=this.dropdownList.find(".dd-content"),this.dropdownBg=this.dropdownList.find(".bg-layer"),this.mq=this.checkMq(),this.bindEvents()}function t(){n.forEach(function(e){e.resetDropdown()}),i=!1}jQuery(".move-to-top").appendTo("#top-and-first-wrapper"),jQuery(".move-into-top").appendTo("section#about > div.container > div.row"),jQuery("#search-api-page-search-form").wrap("<div class='col-md-10 col-md-offset-1'></div>"),jQuery("#block-workbench-block").addClass("container"),jQuery("ul.tabs.primary").addClass("nav nav-tabs").removeClass("tabs").removeClass("primary"),jQuery(".drupal-version-list").toggleClass("sr-only"),jQuery(".drupal-version-checkbox").change(function(){jQuery(".drupal-version-list").toggleClass("sr-only")}),jQuery(".site-info-add").click(function(){var e=jQuery(".site-info")[0].outerHTML,t=jQuery(".site-info").length,n=t+1;return e=e.replace(/1\"/g,n+'"'),jQuery(".site-info").last().after(e),!1}),jQuery(".split").each(function(){jQuery(window).width()>993&&(height1=jQuery(".section-one",this).height(),height2=jQuery(".section-two",this).height(),height1>height2?(rightHeight=jQuery(".section-one",this).height(),jQuery(".section-two",this).height(rightHeight)):(rightHeight=jQuery(".section-two",this).height(),jQuery(".section-one",this).height(rightHeight)))}),jQuery(".fancyCounter").each(function(){var e=isElementVisible(jQuery(this));!e||jQuery(this).hasClass("counted")||jQuery(this).hasClass("counting")||(jQuery(this).addClass("counting"),startCounter(this))}),jQuery('div.region-content [class^="icon-"], div.region-content .fancyCounter').each(function(){jQuery(this).addClass("do-fade");var e=isElementVisible(jQuery(this));e&&!jQuery(this).hasClass("faded")&&jQuery(this).addClass("faded")}),jQuery("a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).append('<span class="sr-only"> external resource</span>'),jQuery(window).scroll(function(){jQuery(".fancyCounter").each(function(){var e=isElementVisible(jQuery(this));!e||jQuery(this).hasClass("counted")||jQuery(this).hasClass("counting")||(jQuery(this).addClass("counting"),startCounter(this))}),jQuery('div.region-content [class^="icon-"], div.region-content .fancyCounter').each(function(){var e=isElementVisible(jQuery(this));e&&!jQuery(this).hasClass("faded")&&jQuery(this).addClass("faded")})}),e.prototype.checkMq=function(){var e=this;return window.getComputedStyle(e.element.get(0),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"").split(", ")},e.prototype.bindEvents=function(){var e=this;this.mainNavigationItems.mouseenter(function(t){e.showDropdown(jQuery(this))}).mouseleave(function(){setTimeout(function(){0==e.mainNavigation.find(".has-dropdown:hover").length&&0==e.element.find(".dropdown-list:hover").length&&e.hideDropdown()},50)}),this.dropdownList.mouseleave(function(){setTimeout(function(){0==e.mainNavigation.find(".has-dropdown:hover").length&&0==e.element.find(".dropdown-list:hover").length&&e.hideDropdown()},50)}),this.mainNavigationItems.on("touchstart",function(t){var n=e.dropdownList.find("#"+jQuery(this).data("content"));e.element.hasClass("is-dropdown-visible")&&n.hasClass("dd-active")||(t.preventDefault(),e.showDropdown(jQuery(this)))}),this.element.on("click",".nav-trigger",function(t){t.preventDefault(),e.element.toggleClass("nav-open")})},e.prototype.showDropdown=function(e){if(this.mq=this.checkMq(),"desktop"==this.mq){var t=this,n=this.dropdownList.find("#"+e.data("content")),i=n.innerHeight(),o=n.children(".dd-content").innerWidth(),s=e.offset().left-e.parent().offset().left-115+e.innerWidth()/2;this.updateDropdown(n,parseInt(i),o,parseInt(s)),this.element.find(".dd-active").removeClass("dd-active"),n.addClass("dd-active").removeClass("move-left move-right").prevAll().addClass("move-left").end().nextAll().addClass("move-right"),e.addClass("dd-active"),this.element.hasClass("is-dropdown-visible")||setTimeout(function(){t.element.addClass("is-dropdown-visible")},10)}},e.prototype.updateDropdown=function(e,t,n,i){this.dropdownList.css({"-moz-transform":"translateX("+i+"px)","-webkit-transform":"translateX("+i+"px)","-ms-transform":"translateX("+i+"px)","-o-transform":"translateX("+i+"px)",transform:"translateX("+i+"px)",width:n+"px",height:t+"px"}),this.dropdownBg.css({"-moz-transform":"scaleX("+n+") scaleY("+t+")","-webkit-transform":"scaleX("+n+") scaleY("+t+")","-ms-transform":"scaleX("+n+") scaleY("+t+")","-o-transform":"scaleX("+n+") scaleY("+t+")",transform:"scaleX("+n+") scaleY("+t+")"})},e.prototype.hideDropdown=function(){this.mq=this.checkMq(),"desktop"==this.mq&&this.element.removeClass("is-dropdown-visible").find(".dd-active").removeClass("dd-active").end().find(".move-left").removeClass("move-left").end().find(".move-right").removeClass("move-right")},e.prototype.resetDropdown=function(){this.mq=this.checkMq(),"mobile"==this.mq&&this.dropdownList.removeAttr("style")};var n=[];if(jQuery(".cd-morph-dropdown").length>0){jQuery(".cd-morph-dropdown").each(function(){n.push(new e(jQuery(this)))});var i=!1;t(),jQuery(window).on("resize",function(){i||(i=!0,window.requestAnimationFrame?window.requestAnimationFrame(t):setTimeout(t,300))})}$(function(){$('nav a[href^="/'+location.pathname.split("/")[1]+'"]').parent().addClass("active")}),$.fn.extend({animateCss:function(e){var t="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";this.addClass("animated "+e).one(t,function(){$(this).removeClass("animated "+e)})}}),$(location).attr("pathname").indexOf("knowledge-base")!=-1&&($(".navbar-form").submit(function(){return!1}),$(".navbar-form button").click(function(){$(".search-for").animateCss("pulse")}),$(".media").each(function(){$(this).attr("data-search-term",$(this).text().toLowerCase())}),$("#s").on("keyup",function(){var e=$(this).val(),t=e.toLowerCase();$(".media").each(function(){$(this).filter("[data-search-term *= "+t+"]").length>0||t.length<1?$(this).show():$(this).hide()});var n=$(".col-md-4 .media:visible").length;"&nbsp;"==$("#about .search-for").html()?$("#about .search-for").html('Showing matches for &quot;<span class="search-for-string">'+e+"</span>&quot;"):0==e.length?$("#about .search-for").html("&nbsp;"):$("#about .search-for-string").text(e),0==n?$(".no-results").text("No matches found."):$(".no-results").text("")}))});