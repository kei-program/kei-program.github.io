// 1. HTMLの中の「ボタン」と「タイトル」を、JavaScriptの世界に連れてきます
const btn = document.getElementById('boot-btn');
const title = document.getElementById('title');

// 2. ボタンがクリックされたときの「動き」を登録します
btn.addEventListener('click', function() {
    // 3. タイトルの文字（innerHTML）を、OS起動風に書き換えます
    title.innerHTML = "何もありませんーー <br> 何かあると思いました？<br> 残念！";
    title.style.color = "#7ee787"; /* ついでに文字色を緑にします */
    btn.innerHTML = "もう押せないよ"; /* ボタンの文字も変えます */
    btn.style.opacity = "0.5";       /* ボタンを半透明にして、もう押せないっぽくします */
});