# jsLibrary
**Usefull and customizable library of js functions**
## Modals
Creating modal windows, that pop up after some trigger or on time.
With and without background.
**html and css markup**

### html elements:

1. background element 

(example of css styles)
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

2. modal window 

(necessary css styles)
`z-index: more than *number*`

3. close button

4. trigger button 

(not necessary)

### Create js function with constructor ModalUnit:

4 required arguments and 3 additional
```
let modalEx = new ModalUnit('.modal_trigger', '.modal_bg', '.modal_window', '.close_modal',true, false, false);
```

argument | description | default
---------|-------------|--------
.modal_trigger | trigger to call modal window, if not required leave ''| -
.modal_bg | background of modal, if not required leave '' | -
.modal_window | modal window | -
.close_modal | element to click in order to close window | -
closeOnBg | to close window on clicking outside modal | true
showOnTime | To make window appear in some time put amount of ms | false
bg | To have background appear along with modal window | true 
