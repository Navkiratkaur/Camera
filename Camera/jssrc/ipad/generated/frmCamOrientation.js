function addWidgetsfrmCamOrientation() {
    var camPortrait = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "camPortrait",
        "isVisible": true,
        "onCapture": p2kwiet1296439488910_camPortrait_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "sknCameraNormal",
        "text": "PORTRAIT"
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
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_PORTRAIT,
        "enableOverlay": false,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "referenceImageToCrop": frmCamOverlaid.image21927419382155502
        }
    });
    var camLandscape = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "camLandscape",
        "isVisible": true,
        "onCapture": p2kwiet1296439488910_camLandscape_onCapture_seq0,
        "scaleFactor": 80,
        "skin": "sknCameraNormal",
        "text": "LANDSCAPE"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [5, 21, 5, 21],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "captureOrientation": constants.CAMERA_CAPTURE_ORIENTATION_LANDSCAPE,
        "enableOverlay": false,
        "imageFormat": constants.CAMERA_IMAGE_FORMAT_PNG,
        "nativeUserInterface": true,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "referenceImageToCrop": frmCamOverlaid.image21927419382155502
        }
    });
    var hbox121141612661998 = new kony.ui.Box({
        "id": "hbox121141612661998",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [4, 2, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": true,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var imgPortrait = new kony.ui.Image2({
        "id": "imgPortrait",
        "isVisible": true
    }, {
        "containerWeight": 50,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 2, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var imgLandscape = new kony.ui.Image2({
        "id": "imgLandscape",
        "isVisible": true
    }, {
        "containerWeight": 50,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [2, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    hbox121141612661998.add(imgPortrait, imgLandscape);
    var lblOrientation = new kony.ui.Label({
        "id": "lblOrientation",
        "isVisible": true,
        "skin": "sknlblNormal"
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
    frmCamOrientation.add(camPortrait, camLandscape, hbox121141612661998, lblOrientation);
};

function frmCamOrientationGlobals() {
    frmCamOrientation = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOrientation,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmCamOrientation",
        "needAppMenu": true,
        "skin": "sknFrmFormBgImg",
        "title": "Camera Orientationn"
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
    frmCamOrientation.info = {
        "kuid": "p2kwiet1296439488910"
    };
};