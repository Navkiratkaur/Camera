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
        "padding": [1, 4, 1, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "overlayForm": frmCamOverlaid,
            "tapAnywhere": false
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
    }, {});
    frmCamOverlay.add(cameraOverlay, imgCapturedOverlay);
};

function frmCamOverlayGlobals() {
    frmCamOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamOverlay,
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