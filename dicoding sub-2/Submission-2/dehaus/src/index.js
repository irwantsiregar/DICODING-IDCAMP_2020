
import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";

import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./styles/main.css";

import main from "./script/viewdrinks/main.js";
document.addEventListener("DOMContentLoaded", main);

import category from "./script/dataorigin/data-category.js";
category();
