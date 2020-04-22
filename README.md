# jsLibrary
**Usefull and customizable library of js functions**
## Modals
Creating modal windows, that pop up after some trigger or on time.
With and without background.
**html and css markup**

html elements:

1. background element (example of css styles)
```
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: *number*;
    background-color: rgba(255, 255, 255, .5);
```

2. modal window (necessary css styles)
`z-index: more than *number*`

3. close button

4. trigger button (not necessary)

**Create js function with constructor ModalUnit**

4 required arguments and 3 additional
```
let modalEx = new ModalUnit('.modal_trigger', '.modal_bg', '.modal_window', '.close_modal',true, false, false);
```
1. *.modal_trigger*
Trigger to call modal window, if not required leave ''.

2. *.modal_bg*
Background of modal, if not required leave ''.

3. *.modal_window*
Modal window.

4. *.close_modal*
Element to click in order to close window

5. closeOnBg (default true)
To close window on clicking outside modal.

6. showOnTime (default false)
To make window appear in some time put amount of ms.

7. bg (default true)
To have background appear along with modal window.
