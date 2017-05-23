if (typeof(Storage) !== "undefined" && window.location = "https://parmesanio.github.io/todo-app/") {
  document.getElementById("submit").addEventListener('click', function() {
    if (document.getElementById("input").value == '') {
      // Do Nothing
    }else {
      localStorage.setItem(localStorage.length,document.getElementById("input").value);
    }
  });
  var itemList = document.getElementById("items");
  for (var i = 0; i < localStorage.length && localStorage.key(i).value !== ''; i++) {
      console.log(localStorage.getItem(i));
      itemList.innerHTML += '<p data-itemId='+i+'>'+localStorage.getItem(i)+'</p>';
  }
  var pTags = document.querySelectorAll("p");
  console.log(pTags);
  var id;
  for (var i = 0; i < pTags.length; i++) {
    pTags[i].addEventListener('click', function() {
      id = this.getAttribute("data-itemId");
        console.log(id);
        localStorage.setItem(id, '');
        this.parentNode.removeChild(this);
    });
  }
  document.getElementById("clear").addEventListener('click', function() {
    localStorage.clear();
  });
} else {
    document.getElementById("items").innerHTML = "Local Storage not supported in your browser version.";
}
