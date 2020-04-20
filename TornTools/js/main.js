function start() {
  var GET=[];
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){GET[name]=value;});
  console.log(GET);
}
