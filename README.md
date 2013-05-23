External Exec
==============

External exec is an extension for chrome that executes an
external program given a javascript customEvent (execute).

To trigger the event, do it in the following way:

var evt = document.createEvent("CustomEvent");
evt.initCustomEvent(
    "execute",
    true,
    true,
    {
        "command":'/usr/bin/notify-send',
        "args":"FooBarBaz"
    }
);
document.dispatchEvent(evt); // Nice notify in your linux desktop

I've done this to try and integrate external tools, like scratch, with
3D printers via OctoPrint. I do not recommend its use for almost anything.

This extension uses SimpleGet plugin, by Roque Pinel.
You'll find SimpleGet here: https://github.com/repinel/SimpleGet

Note that this is my first extension and it's just 12
fucking  lines of code, coded at 3am, with not enough beer.
I can't guarantee it's compatible between chrome versions, nor OSes, nor
anything. Works for me, if it does not for you, fork me and send me pull reqs
;-)
