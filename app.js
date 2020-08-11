// function myFunction() {
//   var copyText = document.getElementById("content11");
//   copyText.select();
//   copyText.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   alert("Copied the text: " + copyText.innerHTML);
// }
function copy() {
  // copied from https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById("copyinput"));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("copyinput"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    // confirm("Text Copied");
  }
}
