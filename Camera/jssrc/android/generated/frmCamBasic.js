function addWidgetsfrmCamBasic() {
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
    var cameraBasic = new kony.ui.Camera({
        "compressionLevel": 0,
        "focusSkin": "sknCameraFocus",
        "id": "cameraBasic",
        "isVisible": true,
        "onCapture": p2kwiet1296439488828_cameraBasic_onCapture_seq0,
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
        "enableOverlay": false,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "tapAnywhere": false
        }
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
        "margin": [4, 2, 4, 1],
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgRaw = new kony.ui.Image2({
        "id": "imgRaw",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 1, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 90,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var lblBase64 = new kony.ui.Label({
        "id": "lblBase64",
        "isVisible": true,
        "skin": "sknlblNormal",
        "text": "Image in Base64 :"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [4, 2, 4, 1],
        "marginInPixel": false,
        "padding": [6, 15, 6, 15],
        "paddingInPixel": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var imgBase64 = new kony.ui.Image2({
        "id": "imgBase64",
        "isVisible": true
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "margin": [4, 1, 4, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "referenceHeight": 120,
        "referenceWidth": 90,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmCamBasic.add(hbxHeaderWindows, cameraBasic, lblRaw, imgRaw, lblBase64, imgBase64);
};

function frmCamBasicGlobals() {
    frmCamBasic = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCamBasic,
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