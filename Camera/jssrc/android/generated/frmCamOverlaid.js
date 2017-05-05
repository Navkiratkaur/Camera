function addWidgetsfrmCamOverlaid() {
    var hbox103976675071738 = new kony.ui.Box({
        "id": "hbox103976675071738",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "skin": "sknhbxWhiteSampleApp"
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgOverlay = new kony.ui.Image2({
        "id": "imgOverlay",
        "isVisible": true,
        "src": "header.png"
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox103976675071738.add(imgOverlay);
    frmCamOverlaid.add(hbox103976675071738);
};

function frmCamOverlaidGlobals() {
    frmCamOverlaid = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOverlaid,
        "enabledForIdleTimeout": false,
        "id": "frmCamOverlaid",
        "needAppMenu": true,
        "skin": "sknTrans"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};