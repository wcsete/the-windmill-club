/*! chedda-codes 19-04-2015 */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(){"use strict";function a(){$(".nav-link").on("click",d)}function b(){$(".owl-carousel").owlCarousel({loop:!0,margin:10,responsiveClass:!0,navText:['<span class="icon-left-open-big"></span>','<span class="icon-right-open-big"></span>'],responsive:{0:{items:1},480:{items:2,nav:!0},780:{items:3,nav:!0},1400:{items:4,nav:!0}}})}function c(){var a=$(".chart-button"),b=$(".chart");b.each(function(a,b){$(b).hide()}),a.on("click",function(){var a=$(this).attr("data-chart");$("#"+a).slideToggle(200),$(this).toggleClass("active")})}function d(a){a.preventDefault();var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top},500)}function e(){var a=a||[];a.push(["_setAccount","UA-18419850-2"]),a.push(["_trackPageview"]);var b=document.createElement("script");b.type="text/javascript",b.async=!0,b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}$(".size").dropkick(),a(),b(),e(),c();{var f=new ScrollMagic.Controller,g=TweenMax.fromTo("#header",1,{css:{backgroundPositionY:"50%"}},{css:{backgroundPositionY:"120%"}}),h=(new ScrollMagic.Scene({triggerElement:"#header",duration:"160%"}).setTween(g).addIndicators({name:"2 (duration: 100%)"}).addTo(f),new ScrollMagic.Scene({triggerElement:"#looks"}).setClassToggle("#nav","stick").addIndicators({name:"1 - add a class"}).addTo(f),TweenMax.staggerFromTo(".western",2,{y:400,opacity:0},{y:0,opacity:1},.4)),i=TweenMax.staggerFromTo(".polo",2,{y:400,opacity:0},{y:0,opacity:1},.4);new ScrollMagic.Scene({triggerElement:"#trigger-western",duration:460}).setTween(h).addIndicators({name:"stagger westerns"}).addTo(f),new ScrollMagic.Scene({triggerElement:"#trigger-polo",duration:460}).setTween(i).addIndicators({name:"stagger polos"}).addTo(f)}},{}]},{},[1]);