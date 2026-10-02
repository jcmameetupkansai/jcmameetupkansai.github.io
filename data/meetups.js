/*
 * ==== 開催情報（ここだけ編集すれば、ページ全体が更新されます） ====
 *
 * 【第2回を追加するとき】
 *  1. 第1回の status を 'past' に変更し、report（開催レポート）を書く
 *  2. 下の配列の先頭に、第2回のブロックをコピーして追加（status: 'upcoming'）
 *  3. formUrl に第2回用の Google フォームURLを入れる
 *  4. 写真は photos/02/ に入れて tools/build-photos.sh を実行（詳細は README.md）
 *
 * status: 'upcoming'（募集中・準備中） / 'past'（開催済み）
 * 'upcoming' が複数ある場合は、配列の先頭のものがトップに表示されます。
 */
window.JCMA_MEETUPS = [
  {
    no: 1,
    status: 'upcoming',
    title: '大阪の食の今を学び直す',
    subtitle: 'ローカルコンテンツの再発見と、インバウンド対応の現状視察',
    dateLabel: '日程調整中',   // 確定したら「2026年12月10日（木）14:00〜」のように書き換え
    dateNote: '日程は確定次第、このページでお知らせします（平日午後の開催を予定）',
    place: '大阪府羽曳野市 → 大阪市浪速区（新世界）',
    capacity: '先着20名',
    target: 'JCMA関西支部 所属企業の20〜30代（実務経験年数は不問）',
    fee: '約10,000円（予定）',
    deadline: '日程確定後にご案内します',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdaY39ZUEGqnDhUSpegOFiLtoQXDZ-ncombFjF1VRRkYg4HVA/viewform',   // Googleフォーム（satorun1009@gmail.com 所有）回答用URL
    parts: [
      {
        label: '第一部', place: '大阪府羽曳野市',
        title: '河内ワイン 見学・試飲',
        image: 'assets/part1.jpg',
        desc: '大阪にワイナリーがあることを、まず自分たちが知る。ブドウ栽培から醸造までを、生産者の言葉で直接学ぶ。',
        takeaway: '「大阪産」を語れる引き出し／実際に提案に載せられるローカルコンテンツ'
      },
      {
        label: '第二部', place: '大阪市浪速区',
        title: '新世界での懇親会 兼 フィールドワーク',
        image: 'assets/part2.jpg',
        desc: 'インバウンドで劇的に観光地化したエリアで、「大阪といえば」を凝縮した体験を共有する。',
        takeaway: 'エクスカーション候補地としてのポテンシャル検証／ナイトタイムエコノミーと多言語対応の現状把握'
      }
    ],
    program: [
      { time: '14:00', title: '近鉄 駒ヶ谷駅 集合／河内ワイン見学・試飲', desc: '約2時間・少人数グループで見学' },
      { time: '16:00', title: '質疑応答／近鉄線にて大阪市内へ移動', desc: '移動時間も自己紹介・情報交換に' },
      { time: '17:30', title: '懇親会（新世界エリアの店舗）', desc: '席替えを設計し、全員が複数社と話せる進行に' },
      { time: '19:30', title: '解散（2次会は任意）', desc: '終了時刻を明示し、参加しやすさを担保' }
    ],
    report: ''   // 開催後に、レポート文章を書く（空なら非表示）
  }

  /* ---- 第2回のひな形（コピーして使用） ----
  ,{
    no: 2, status: 'upcoming',
    title: '', subtitle: '',
    dateLabel: '', dateNote: '', place: '', capacity: '', target: '', fee: '', deadline: '',
    formUrl: '',
    parts: [ { label:'第一部', place:'', title:'', image:'', desc:'', takeaway:'' } ],
    program: [ { time:'', title:'', desc:'' } ],
    report: ''
  }
  */
];
