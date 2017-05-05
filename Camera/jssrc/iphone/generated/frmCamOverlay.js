function addWidgetsfrmCamOverlay() {
    var cameraOverlay = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "cameraOverlay",
        "isVisible": true,
        "onCapture": p2kwiet1296439488856_cameraOverlay_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "sknCameraNormal",
        "text": "Camera"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [4, 5, 4, 2],
        "marginInPixel": false,
        "padding": [3, 12, 3, 12],
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
        "margin": [4, 1, 4, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 90,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    frmCamOverlay.add(cameraOverlay, imgCapturedOverlay);
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
        "extendBottom": false,
        "extendTop": false,
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
        "kuid": "p2kwiet1296439488856"
    };
};