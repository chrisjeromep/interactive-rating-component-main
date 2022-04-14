import React from "react";
import  "./main.css";

function myFunction() {
  var x = document.getElementById("thank");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

