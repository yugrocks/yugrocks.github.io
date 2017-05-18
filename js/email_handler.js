var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',send,false);
function send(e) {
      e.preventDefault();
      var target = e.target || e.srcElement;
      var i = 0;
      var message = '';
      for(i = 0; i < target.length-1; ++i) {
         message += target[i].name + ': ' + target[i].value + "\r\n";
      }
      target.elements[target.elements.length-1].value = message;
      this.submit();
   }