import template from 'template/app.html';
import styles from 'style/app.css';
import search from 'script/search.js';

document.getElementById("app").innerHTML = template({
    search: search.template
});
