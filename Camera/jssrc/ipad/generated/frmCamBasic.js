function addWidgetsfrmCamBasic() {
    var cameraBasic = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "cameraBasic",
        "isVisible": true,
        "onCapture": p2kwiet1296439488894_cameraBasic_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "sknCameraNormal",
        "text": "Camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [4, 10, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_DEFAULT,
        "enableOverlay": false,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "overlayConfig": {}
    });
    var lblRaw = new kony.ui.Label({
        "id": "lblRaw",
        "isVisible": true,
        "skin": "sknlblNormal",
        "text": "Image in RawBytes :"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [10, 18, 10, 18],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgRaw = new kony.ui.Image2({
        "id": "imgRaw",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 240,
        "referenceWidth": 180,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lblBase64 = new kony.ui.Label({
        "id": "lblBase64",
        "isVisible": true,
        "skin": "sknlblNormal",
        "text": "Image in Base64 :"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 4, 4, 2],
        "marginInPixel": false,
        "padding": [10, 18, 10, 18],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var imgBase64 = new kony.ui.Image2({
        "id": "imgBase64",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 240,
        "referenceWidth": 180,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    frmCamBasic.add(cameraBasic, lblRaw, imgRaw, lblBase64, imgBase64);
};

function frmCamBasicGlobals() {
    frmCamBasic = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamBasic,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCamBasic",
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera basic"
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
    frmCamBasic.info = {
        "kuid": "p2kwiet1296439488894"
    };
};