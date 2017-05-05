//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "camera",
    appName: "Camera",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "camera",
    isMFApp: false,
    eventTypes: [],
    url: "http://kh2147.kitspl.com:8086/admin/camera/MWServlet",
    secureurl: "http://kh2147.kitspl.com:8086/admin/camera/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    setAppHeadersAndFooters();
    frmCamAccessModeGlobals();
    frmCamBasicGlobals();
    frmCamOptionsGlobals();
    frmCamOrientationGlobals();
    frmCamOverlaidGlobals();
    frmCamOverlayGlobals();
    frmIntroGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmIntro.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;