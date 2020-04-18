document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

function activeInput() {
    return document.activeElement.tagName == 'INPUT' ||
        document.activeElement.className == 'composer_rich_textarea'
}

var y = 150;

function handleKeydown(e) {
    switch (e.key) {


        case "SoftLeft":
            window.scroll(0, document.getScroll()[1] + 20);
            break;
        case "SoftRight":
            window.scroll(0, document.getScroll()[1] - 20);
            break;

        case "ArrowDown":
            break;
        case 'Call':
            if (
                document.activeElement.tagName == 'INPUT' ||
                document.activeElement.className == 'composer_rich_textarea'
            ) {
                var e = $.Event("keydown", {
                    keyCode: 27
                });
                $('.composer_rich_textarea').blur();
                $('input').blur();
            } else {
                window.history.back();
            }
            break;
    }
}
document.addEventListener('keydown', handleKeydown);


$(document).ready(function() {

    $("li.im_dialog_wrap").forEach(function(value, index) {
        $(this).css("display", "3px solid red")
    })
})