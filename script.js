const btn = document.getElementById('boot-btn');
const title = document.getElementById('title');
const terminal = document.getElementById('terminal-box');
const logContainer = document.getElementById('log-container');

// 表示したいログのリスト（OS自作っぽい内容に！）
const logs = [
    "こ",
    "ん",
    "に",
    "ち",
    "は"
];

btn.addEventListener('click', function() {
    // 1. ターミナルを表示する
    terminal.style.display = "block";
    btn.disabled = true; // 連打できないようにする
    btn.innerHTML = "Booting...";

    // 2. ログを1行ずつ表示する（再帰的な処理）
    let i = 0;
    function showNextLog() {
        if (i < logs.length) {
            const p = document.createElement('p');
            p.className = 'log-line';
            p.innerText = "> " + logs[i];
            logContainer.appendChild(p);
            
            // ログが増えたら自動で一番下までスクロール
            terminal.scrollTop = terminal.scrollHeight;
            
            i++;
            setTimeout(showNextLog, 600); // 0.6秒ごとに次の行を表示
        } else {
            // 全部終わったらタイトルを変える
            title.innerHTML = "OS is Successfully Booted!";
            btn.innerHTML = "System Running";
        }
    }

    showNextLog();
});