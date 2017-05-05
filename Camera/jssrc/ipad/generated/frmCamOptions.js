function addWidgetsfrmCamOptions() {
    var btnBasicCam = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnBasicCam",
        "isVisible": true,
        "onClick": p2kwiet1296439488901_btnBasicCam_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Basic Camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 8, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnOverlay = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnOverlay",
        "isVisible": true,
        "onClick": p2kwiet1296439488901_btnOverlay_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Camera with form overlay"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnAccMode = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnAccMode",
        "isVisible": true,
        "onClick": p2kwiet1296439488901_btnAccMode_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Camera access modes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnOrientation = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnOrientation",
        "isVisible": true,
        "onClick": p2kwiet1296439488901_btnOrientation_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Capture orientation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmCamOptions.add(btnBasicCam, btnOverlay, btnAccMode, btnOrientation);
};

function frmCamOptionsGlobals() {
    frmCamOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOptions,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
    frmCamOptions.info = {
        "kuid": "p2kwiet1296439488901"
    };
};