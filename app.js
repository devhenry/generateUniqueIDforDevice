generateID = () => {

     let nav_info = window.navigator;
     let myScreen = window.screen;
     let devId = nav_info.mimeTypes.length;
     devId += navigator.userAgent.replace(/\D+/g, '');
     devId += navigator.plugins.length;
     devId += myScreen.height || '';
     devId += myScreen.width || '';
     devId += myScreen.pixelDepth || '';

     document.getElementById("deviceId").innerHTML = `${devId}`; 
    
   
}