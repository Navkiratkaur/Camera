function addWidgetsfrmCamOptions() {
    var hbxHeaderWindows = new kony.ui.Box({
        "id": "hbxHeaderWindows",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
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
    hbxHeaderWindows.add();
    var btnBasicCam = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnBasicCam",
        "isVisible": true,
        "onClick": p2kwiet1296439488837_btnBasicCam_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Basic Camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 6, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnOverlay = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnOverlay",
        "isVisible": true,
        "onClick": p2kwiet1296439488837_btnOverlay_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Camera with form overlay"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var btnAccMode = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnAccMode",
        "isVisible": true,
        "onClick": p2kwiet1296439488837_btnAccMode_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Camera access modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmCamOptions.add(hbxHeaderWindows, btnBasicCam, btnOverlay, btnAccMode);
};

function frmCamOptionsGlobals() {
    frmCamOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOptions,
        "enabledForIdleTimeout": false,
        "id": "frmCamOptions",
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Options"
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
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};