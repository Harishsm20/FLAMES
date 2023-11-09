<script>
function calculate() {
    var name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    var name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');
  
    var flames = "flames";
    var count = name1.length + name2.length;
  
    for (var i = 0; i < name1.length; i++) {
      for (var j = 0; j < name2.length; j++) {
        if (name1[i] == name2[j]) {
          count -= 2;
          name2 = name2.slice(0, j) + name2.slice(j + 1);
          break;
        }
      }
    }
  
    while (flames.length > 1) {
      var index = count % flames.length;
      if (index == 0) {
        flames = flames.slice(0, flames.length - 1);
      } else {
        flames = flames.slice(index) + flames.slice(0, index - 1);
      }
    }
  
    var result = "";
    switch (flames) {
      case "f":
        result = "Friends";
        break;
      case "l":
        result = "Lovers";
        break;
      case "a":
        result = "Affectionate";
        break;
      case "m":
        result = "Married";
        break;
      case "e":
        result = "Enemies";
        break;
      case "s":
        result = "Siblings";
        break;
    }
  
    document.getElementById("result").innerHTML = result;
  }
</script>