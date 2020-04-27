# jsLibrary
**Usefull and customizable library of js functions**
## Modals
Creating modal windows, that pop up after some trigger or on time.
With and without background.

### html elements with css:

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

### Create js object with constructor ModalUnit:

4 required arguments and 3 additional(example):
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

## Sliders
Creating sliders, with different amount slides to show and to slide.

**html and css markup**

### html elements with css:

1. prev arrow

2. slides

3. next arrow

### Use function slidesGo():

3 required arguments and 4 additional(example):
```
slidesGo('.slider_item', '.prev_arr', '.next_arr', 1, 3, true, true);
```

argument | description | default
---------|-------------|--------
.slider_item | slider image | -
.prev_arr | arrow for previous image | -
.next_arr | arrow for next image | -
slidesToSlide | amount of elements to slide | 1
slidesToShow | amount of elements to show | 1
arrows | using arrows or not | true
auto | to automaticaly change element, input amount of ms or false | 3000

## Timers
Creating timer

**html and css markup**

### html elements with css:

1.Timer background

2.ids for days, hours, minutes, seconds

### Use function setClock():

2 required arguments:
```
setClock('.timer_bg', '2020-07-04');
```
argument | description | default
---------|-------------|--------
.timer_bg | background for timer | -
.deadline | date in format 'yyyy-mm-dd'| -
