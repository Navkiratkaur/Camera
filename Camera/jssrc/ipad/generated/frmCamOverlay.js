function addWidgetsfrmCamOverlay() {
    var cameraOverlay = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "cameraOverlay",
        "isVisible": true,
        "onCapture": p2kwiet1296439488921_cameraOverlay_onCapture_seq0,
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
        "enableOverlay": true,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid
        }
    });
    var imgCapturedOverlay = new kony.ui.Image2({
        "id": "imgCapturedOverlay",
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
    var lblFrmOverlay = new kony.ui.Label({
        "id": "lblFrmOverlay",
        "isVisible": true,
        "skin": "sknlblNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [6, 10, 6, 10],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmCamOverlay.add(cameraOverlay, imgCapturedOverlay, lblFrmOverlay);
};

function frmCamOverlayGlobals() {
    frmCamOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOverlay,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCamOverlay",
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera overlay"
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
    frmCamOverlay.info = {
        "kuid": "p2kwiet1296439488921"
    };
};