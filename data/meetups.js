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
    dateLabel: '2027年1月13日（水）',   // 開催日
    dateNote: '14:45 集合・19:30 頃解散',
    meet: '近鉄 駒ヶ谷駅（14:45 集合）',
    place: '大阪府羽曳野市 → 大阪市浪速区（新世界）',
    capacity: '先着20名',
    target: 'JCMA関西支部 所属企業の20〜30代（実務経験年数は不問）',
    fee: '約10,000円（予定）',
    deadline: '定員（先着20名）に達し次第締切',
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
      { time: '14:45', title: '近鉄 駒ヶ谷駅 集合', desc: '時間までに駅にお集まりください' },
      { time: '15:00', title: 'ワイナリー見学ツアー（試飲つき）', desc: '〜16:30 ／ 河内ワインの生産現場を、生産者の言葉で学ぶ' },
      { time: '16:30', title: 'バス移動', desc: '〜17:00 ／ 移動時間も自己紹介・情報交換に' },
      { time: '17:30', title: '新世界で飲み会', desc: '〜19:30 ／ お店は決まり次第お知らせします' }
    ],
    report: ''   // 開催後に、レポート文章を書く（空なら非表示）
  }

  /* ---- 第2回のひな形（コピーして使用） ----
  ,{
    no: 2, status: 'upcoming',
    title: '', subtitle: '',
    dateLabel: '', dateNote: '', meet: '', place: '', capacity: '', target: '', fee: '', deadline: '',
    formUrl: '',
    parts: [ { label:'第一部', place:'', title:'', image:'', desc:'', takeaway:'' } ],
    program: [ { time:'', title:'', desc:'' } ],
    report: ''
  }
  */
];
