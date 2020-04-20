function start() {
  var GET=[];
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){GET[name]=value;});
  console.log(GET);
  if (typeof GET['APIkey'] !== 'undefined' || GET['APIkey'] !== null) {
    document.getElementById('APIkey').value = GET['APIkey'];
  }
}
