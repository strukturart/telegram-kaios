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



$(document).ready(function() {

    setTimeout(test, 6000);

    function test() {


        function handleKeydown(e) {
            switch (e.key) {


                case "SoftLeft":
                    window.scroll(0, document.getScroll()[1] + 20);
                    break;
                case "SoftRight":
                    window.scroll(0, document.getScroll()[1] - 20);
                    break;

                case 'ArrowDown':
                    nav("+1");
                    setTabindex()
                    break;


                case 'ArrowUp':
                    nav("-1");
                    getAttr();
                    break;

                case 'Enter':
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

        function setTabindex() {
            $('li.im_dialog_wrap').each(function(index, obj) {
                $(this).attr("tabIndex", index);
                $(this).find('a').attr("ng-keypress", "dialogSelect(dialogMessage.peerString, dialogMessage.unreadCount == -1 && dialogMessage.mid)");
            });

        }
        setTabindex()

        $('li.im_dialog_wrap:first').focus();






        //up - down

        function nav(param) {


            let focused = $(':focus').attr('tabindex');
            let siblings = $(':focus').parent().children(':visible');
            let siblingsLength = $(':focus').parent().children(':visible').length;


            if (param == "+1" && focused < siblingsLength - 1) {
                focused++
                siblings[focused].focus();



                let focusedElement = $(':focus')[0].offsetTop;

                window.scrollTo({
                    top: focusedElement - 20,
                    behavior: 'smooth'
                });



            }

            if (param == "-1" && focused > 0) {
                focused--
                siblings[focused].focus();
                let focusedElement = $(':focus')[0].offsetTop;



                window.scrollTo({
                    top: focusedElement - 35,
                    behavior: 'smooth'
                });

            }



        }






    }

})