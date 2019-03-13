var lastScroll = 0;
var scrollToOffset = function(off, ms) 
{
    lastScroll = $(window).scrollTop();
    $('html, body').animate({ scrollTop: off }, ms);
};
var scrollTo = function(item) { scrollToOffset(item.offset().top, 1000); }
var scrollToLast = function() { scrollToOffset(lastScroll, 200); }

var onClickScrollTo = function(clickTarget, scrollTarget)
{
    var clicker = $(clickTarget);
    var scroller = $(scrollTarget);
    var scrollerId = scroller.attr('id');

    clicker.click(function(e)
    {
        // Don't scroll if the item is currently hidden (has any hidden parents).
        if (scroller.parents(':hidden').length > 0) return;
        
        if (scrollerId)
        {
            // set hash for linking
            var href = window.location.pathname + '#' + scrollerId;
            history.replaceState(undefined, undefined, href);
        }
        else if (window.location.hash)
        {
            // clear hash if it was set
            history.replaceState(undefined, undefined, window.location.pathname);
        }

        // Scroll to item.
        scrollTo(scroller);

        // don't actually navigate, if the user clicked a link
        e.preventDefault();
    });
};

$(document).ready(function()
{
    // All links use smooth scrolling, if on current page.
    $('a').each(function()
    {
        var href = $(this).attr('href');
        if (href)
        {
            var parts = href.split('#');
            if (parts[0] == "" || parts[0] == window.location.pathname)
            {
                onClickScrollTo(this, parts.length > 1 ? '#' + parts[1] : 'body');
            }
        }
    });
    
    // Header fix/float behavior.
    var header = $('.container-head').addClass('float');
    var topSpace = header.offset().top;  // measure space now that header is floating
    $(window).scroll(function()
    {
        // handle scroll events, potentially fix header
        var topScroll = $(window).scrollTop();
        var shouldFix = topScroll >= topSpace;
        header.toggleClass('float', !shouldFix);
    });

    // Hook up show/hide of "back to top"
    var main = $('.content-main');
    var btt = $('.back-to-top');
    onClickScrollTo(btt, 'body');

    var showLast = false;
    $(window).scroll(function()
    {
        var topScroll = $(window).scrollTop();
        var showBtt = topScroll > 400;
        if (showBtt != showLast)
        {
            showLast = showBtt;
            btt.fadeToggle();
        }
    });
});