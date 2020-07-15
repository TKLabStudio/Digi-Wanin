// var imgArray = [
//   "https://images.unsplash.com/photo-1592707463561-fb388ffc7c66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1593286795554-deece94f015b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1593926365770-264bc6bec223?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1592197859139-1a4034a76c59?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1594570885125-8bc04167a4ce?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
//   "https://images.unsplash.com/photo-1594612129911-d6903495cfe4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixlib=rb-1.2.1&q=80&w=200",
// ];

function init() {
  axios
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050") //抓資料
    .then(function (res) {
      // handle success
      console.log(res.data.img);
      var imgArray = res.data.img;
      loadImage(imgArray, function () {
        //console.log("Load OK")
        setImageSrc(imgArray);
        document.getElementsByClassName("loading")[0].style.display = "none";
      });
    })
    .catch(function (err) {
      // handle error
      console.log(err);
    })
    .then(function () {
      // always executed
    });
}

function setImageSrc(imgArr) {
  var html = "";
  for (var s = 0; s < imgArr.length; s++) {
    //document.getElementById("img" + (s + 1)).src = imgArr[s];
    // html += "<div>";
    // html += '<img src="' + imgArr[s] + '" alt="" />';
    // html += "</div>";

    html += `
      <div>
        <img src="${imgArr[s]}" alt="" />
      </div>
    `;
    console.log(s);
  }
  document.getElementById("app").innerHTML = html;
}

init();
