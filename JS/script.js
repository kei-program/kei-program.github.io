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

// --- 香水ノート計算機の関数 ---
function calculatePerfume() {
    // 入力された値を取得し、カンマで区切って配列にする
    const top = document.getElementById('topNotes').value.split(',').filter(x => x.trim());
    const middle = document.getElementById('middleNotes').value.split(',').filter(x => x.trim());
    const last = document.getElementById('lastNotes').value.split(',').filter(x => x.trim());
    
    const resultArea = document.getElementById('resultArea');

    // 全ての入力欄に何か入っているかチェック
    if (top.length === 0 || middle.length === 0 || last.length === 0) {
        alert("すべてのノートに香料を入力してね！");
        return;
    }

    // 合計数と割合の計算（CSの基本：算術演算）
    const total = top.length + middle.length + last.length;
    const topP = Math.round((top.length / total) * 100);
    const middleP = Math.round((middle.length / total) * 100);
    const lastP = Math.round((last.length / total) * 100);

    // 結果の表示
    resultArea.style.display = 'block';
    resultArea.innerHTML = `
        <h3 style="color: #58a6ff;">📊 香りの構成比</h3>
        <p>
            🍋 トップ: ${topP}% <br>
            🌹 ミドル: ${middleP}% <br>
            🌲 ラスト: ${lastP}%
        </p>
        <p><strong>【エンジニアの分析】</strong><br>
        ${topP > 40 ? "揮発性の高い香料が多く、付けた瞬間のインパクトが強い「軽やか」なタイプです。" : 
          lastP > 40 ? "ベースが重厚で、時間が経つほどに「深み」が増すリッチな構成ですね。" : 
          "非常にバランスが取れた、香りの移り変わりを長く楽しめる設計です。"}
        </p>
    `;
}

function resetForm() {
    // 1. 各入力欄の値を空に
    document.getElementById('topNotes').value = "";
    document.getElementById('middleNotes').value = "";
    document.getElementById('lastNotes').value = "";

    // 2. 結果表示エリアを隠す
    const resultArea = document.getElementById('resultArea');
    resultArea.style.display = 'none';
    resultArea.innerHTML = "";
}