function calculateLove() {
  var name1 = document.getElementById("name1").value.toLowerCase();
  var name2 = document.getElementById("name2").value.toLowerCase();
  var loveScore = 0;

  for (var i = 0; i < name1.length; i++) {
    for (var j = 0; j < name2.length; j++) {
      if (name1[i] === name2[j]) {
        loveScore += 10;
      }
    }
  }

  var result = Math.min(loveScore, 100);
  document.getElementById("result").innerHTML = "Love Percentage: " + result + "%";
}
