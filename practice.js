const animeData = [
  { title: "薫る花は凛と咲く", year: 2025, studio: "CloverWorks", genre: ["ラブコメ"], rating: 100 },
  { title: "王様ランキング", year: 2021, studio: "WIT STUDIO", genre: ["アクション"], rating: 95 },
  { title: "転生したらスライムだった件", year: 2018, studio: "エイトビット", genre: ["異世界", "アクション"], rating: 85 },
  { title: "七つの大罪", year: 2016, studio: "A-1 Pictures", genre: ["アクション"], rating: 76 },
  { title: "暗殺教室", year: 2015, studio: "Lerche", genre: ["学校", "アクション"], rating: 96 },
  { title: "からかい上手の高木さん", year: 2018, studio: "シンエイ動画", genre: ["ラブコメ"], rating: 97 },
  { title: "アンデッド・アンラック", year: 2023, studio: "トムス・エンタテイメント", genre: ["アクション"], rating: 90 },
  { title: "進撃の巨人", year: 2013, studio: "WIT STUDIO", genre: ["アクション", "ダークファンタジー"], rating: 98 },
  { title: "鬼滅の刃", year: 2019, studio: "ufotable", genre: ["アクション", "ファンタジー"], rating: 97 },
  { title: "呪術廻戦", year: 2020, studio: "MAPPA", genre: ["アクション", "ダークファンタジー"], rating: 96 },
  { title: "僕のヒーローアカデミア", year: 2016, studio: "ボンズ", genre: ["アクション", "学校"], rating: 92 },
  { title: "ワンパンマン", year: 2015, studio: "マッドハウス", genre: ["アクション", "コメディ"], rating: 93 },
  { title: "鋼の錬金術師 FULLMETAL ALCHEMIST", year: 2009, studio: "ボンズ", genre: ["アクション", "ファンタジー"], rating: 99 },
  { title: "STEINS;GATE", year: 2011, studio: "WHITE FOX", genre: ["SF", "サスペンス"], rating: 98 },
  { title: "コードギアス 反逆のルルーシュ", year: 2006, studio: "サンライズ", genre: ["SF", "アクション"], rating: 95 },
  { title: "DEATH NOTE", year: 2006, studio: "マッドハウス", genre: ["サスペンス", "ミステリー"], rating: 96 },
  { title: "カウボーイビバップ", year: 1998, studio: "サンライズ", genre: ["SF", "アクション"], rating: 96 },
  { title: "NARUTO -ナルト- 疾風伝", year: 2007, studio: "ぴえろ", genre: ["アクション"], rating: 90 },
  { title: "BLEACH", year: 2004, studio: "ぴえろ", genre: ["アクション"], rating: 87 },
  { title: "ONE PIECE", year: 1999, studio: "東映アニメーション", genre: ["アクション", "冒険"], rating: 92 },
  { title: "ドラゴンボールZ", year: 1989, studio: "東映アニメーション", genre: ["アクション"], rating: 90 },
  { title: "HUNTER×HUNTER", year: 2011, studio: "マッドハウス", genre: ["アクション", "冒険"], rating: 97 },
  { title: "幽☆遊☆白書", year: 1992, studio: "ぴえろ", genre: ["アクション"], rating: 88 },
  { title: "るろうに剣心", year: 1996, studio: "スタジオぎゃろっぷ", genre: ["アクション"], rating: 87 },
  { title: "東京喰種 トーキョーグール", year: 2014, studio: "ぴえろ", genre: ["アクション", "ホラー"], rating: 82 },
  { title: "約束のネバーランド", year: 2019, studio: "CloverWorks", genre: ["サスペンス", "ホラー"], rating: 88 },
  { title: "Dr.STONE", year: 2019, studio: "トムス・エンタテイメント", genre: ["SF", "冒険"], rating: 89 },
  { title: "五等分の花嫁", year: 2019, studio: "手塚プロダクション", genre: ["ラブコメ"], rating: 88 },
  { title: "かぐや様は告らせたい", year: 2019, studio: "A-1 Pictures", genre: ["ラブコメ"], rating: 93 },
  { title: "ぼっち・ざ・ろっく!", year: 2022, studio: "CloverWorks", genre: ["音楽", "コメディ"], rating: 95 },
  { title: "リコリス・リコイル", year: 2022, studio: "A-1 Pictures", genre: ["アクション"], rating: 90 },
  { title: "SPY×FAMILY", year: 2022, studio: "WIT STUDIO", genre: ["アクション", "コメディ"], rating: 94 },
  { title: "チェンソーマン", year: 2022, studio: "MAPPA", genre: ["アクション", "ダークファンタジー"], rating: 90 },
  { title: "葬送のフリーレン", year: 2023, studio: "マッドハウス", genre: ["ファンタジー", "冒険"], rating: 98 },
  { title: "【推しの子】", year: 2023, studio: "動画工房", genre: ["ドラマ", "サスペンス"], rating: 91 },
  { title: "ヴァイオレット・エヴァーガーデン", year: 2018, studio: "京都アニメーション", genre: ["ドラマ"], rating: 95 },
  { title: "CLANNAD", year: 2007, studio: "京都アニメーション", genre: ["ドラマ", "恋愛"], rating: 92 },
  { title: "けいおん!", year: 2009, studio: "京都アニメーション", genre: ["音楽", "日常"], rating: 90 },
  { title: "涼宮ハルヒの憂鬱", year: 2006, studio: "京都アニメーション", genre: ["SF", "学校"], rating: 89 },
  { title: "氷菓", year: 2012, studio: "京都アニメーション", genre: ["ミステリー", "学校"], rating: 88 },
  { title: "響け!ユーフォニアム", year: 2015, studio: "京都アニメーション", genre: ["音楽", "ドラマ"], rating: 90 },
  { title: "君の名は。", year: 2016, studio: "コミックス・ウェーブ・フィルム", genre: ["恋愛", "ドラマ"], rating: 96 },
  { title: "天気の子", year: 2019, studio: "コミックス・ウェーブ・フィルム", genre: ["恋愛", "ファンタジー"], rating: 88 },
  { title: "千と千尋の神隠し", year: 2001, studio: "スタジオジブリ", genre: ["ファンタジー", "冒険"], rating: 99 },
  { title: "となりのトトロ", year: 1988, studio: "スタジオジブリ", genre: ["ファンタジー"], rating: 96 },
  { title: "もののけ姫", year: 1997, studio: "スタジオジブリ", genre: ["ファンタジー", "アクション"], rating: 97 },
  { title: "ソードアート・オンライン", year: 2012, studio: "A-1 Pictures", genre: ["異世界", "アクション"], rating: 84 },
  { title: "Re:ゼロから始める異世界生活", year: 2016, studio: "WHITE FOX", genre: ["異世界", "ファンタジー"], rating: 91 },
  { title: "この素晴らしい世界に祝福を!", year: 2016, studio: "スタジオディーン", genre: ["異世界", "コメディ"], rating: 90 },
  { title: "オーバーロード", year: 2015, studio: "マッドハウス", genre: ["異世界", "アクション"], rating: 87 },
  { title: "無職転生", year: 2021, studio: "スタジオバインド", genre: ["異世界", "ファンタジー"], rating: 92 },
  { title: "盾の勇者の成り上がり", year: 2019, studio: "キネマシトラス", genre: ["異世界", "アクション"], rating: 83 },
  { title: "幼女戦記", year: 2017, studio: "NUT", genre: ["異世界", "アクション"], rating: 85 },
  { title: "東京リベンジャーズ", year: 2021, studio: "ライデンフィルム", genre: ["アクション", "サスペンス"], rating: 84 },
  { title: "青春ブタ野郎はバニーガール先輩の夢を見ない", year: 2018, studio: "CloverWorks", genre: ["ラブコメ", "サスペンス"], rating: 91 },
  { title: "とらドラ!", year: 2008, studio: "J.C.STAFF", genre: ["ラブコメ"], rating: 92 },
  { title: "ラブライブ!", year: 2013, studio: "サンライズ", genre: ["音楽", "学校"], rating: 85 },
  { title: "四月は君の嘘", year: 2014, studio: "A-1 Pictures", genre: ["音楽", "恋愛"], rating: 92 },
  { title: "あの日見た花の名前を僕達はまだ知らない。", year: 2011, studio: "A-1 Pictures", genre: ["ドラマ"], rating: 92 },
  { title: "化物語", year: 2009, studio: "シャフト", genre: ["サスペンス", "恋愛"], rating: 90 },
  { title: "魔法少女まどか☆マギカ", year: 2011, studio: "シャフト", genre: ["ファンタジー", "サスペンス"], rating: 94 },
  { title: "PSYCHO-PASS サイコパス", year: 2012, studio: "Production I.G", genre: ["SF", "サスペンス"], rating: 91 },
  { title: "攻殻機動隊 STAND ALONE COMPLEX", year: 2002, studio: "Production I.G", genre: ["SF", "アクション"], rating: 93 },
  { title: "サマータイムレンダ", year: 2022, studio: "OLM", genre: ["サスペンス", "SF"], rating: 88 },
  { title: "名探偵コナン", year: 1996, studio: "トムス・エンタテイメント", genre: ["ミステリー"], rating: 87 },
  { title: "ジョジョの奇妙な冒険", year: 2012, studio: "david production", genre: ["アクション", "冒険"], rating: 93 },
  { title: "ヴィンランド・サガ", year: 2019, studio: "WIT STUDIO", genre: ["アクション", "ドラマ"], rating: 93 },
  { title: "宝石の国", year: 2017, studio: "オレンジ", genre: ["ファンタジー", "ドラマ"], rating: 89 },
  { title: "メイドインアビス", year: 2017, studio: "キネマシトラス", genre: ["冒険", "ファンタジー"], rating: 92 },
  { title: "天元突破グレンラガン", year: 2007, studio: "ガイナックス", genre: ["SF", "アクション"], rating: 94 },
  { title: "新世紀エヴァンゲリオン", year: 1995, studio: "ガイナックス", genre: ["SF", "アクション"], rating: 96 },
  { title: "ゆるキャン△", year: 2018, studio: "C-Station", genre: ["日常"], rating: 90 },
  { title: "宇宙よりも遠い場所", year: 2018, studio: "マッドハウス", genre: ["ドラマ", "冒険"], rating: 92 },
  { title: "銀魂", year: 2006, studio: "サンライズ", genre: ["コメディ", "アクション"], rating: 92 },
  { title: "モブサイコ100", year: 2016, studio: "ボンズ", genre: ["アクション", "コメディ"], rating: 93 },
  { title: "Angel Beats!", year: 2010, studio: "P.A.WORKS", genre: ["ドラマ", "ファンタジー"], rating: 88 },
  { title: "SHIROBAKO", year: 2014, studio: "P.A.WORKS", genre: ["ドラマ", "日常"], rating: 89 },
  { title: "ハイキュー!!", year: 2014, studio: "Production I.G", genre: ["スポーツ"], rating: 95 },
  { title: "黒子のバスケ", year: 2012, studio: "Production I.G", genre: ["スポーツ"], rating: 87 },
  { title: "SLAM DUNK", year: 1993, studio: "東映アニメーション", genre: ["スポーツ"], rating: 92 },
  { title: "ユーリ!!! on ICE", year: 2016, studio: "MAPPA", genre: ["スポーツ"], rating: 88 },
  { title: "Free!", year: 2013, studio: "京都アニメーション", genre: ["スポーツ"], rating: 84 },
  { title: "ダイヤのA", year: 2013, studio: "マッドハウス", genre: ["スポーツ"], rating: 84 },
  { title: "ちはやふる", year: 2011, studio: "マッドハウス", genre: ["スポーツ", "ドラマ"], rating: 88 },
  { title: "食戟のソーマ", year: 2015, studio: "J.C.STAFF", genre: ["学校", "コメディ"], rating: 84 },
  { title: "とある魔術の禁書目録", year: 2008, studio: "J.C.STAFF", genre: ["アクション", "SF"], rating: 82 },
  { title: "ダンジョン飯", year: 2024, studio: "トリガー", genre: ["ファンタジー", "冒険"], rating: 92 },
  { title: "キルラキル", year: 2013, studio: "トリガー", genre: ["アクション", "コメディ"], rating: 90 },
  { title: "リトルウィッチアカデミア", year: 2017, studio: "トリガー", genre: ["ファンタジー", "学校"], rating: 86 },
  { title: "聲の形", year: 2016, studio: "京都アニメーション", genre: ["ドラマ"], rating: 92 },
  { title: "時をかける少女", year: 2006, studio: "マッドハウス", genre: ["SF", "恋愛"], rating: 90 },
  { title: "サマーウォーズ", year: 2009, studio: "マッドハウス", genre: ["SF"], rating: 89 },
  { title: "甲鉄城のカバネリ", year: 2016, studio: "WIT STUDIO", genre: ["アクション"], rating: 82 },
  { title: "憂国のモリアーティ", year: 2020, studio: "Production I.G", genre: ["サスペンス"], rating: 82 },
  { title: "花咲くいろは", year: 2011, studio: "P.A.WORKS", genre: ["ドラマ", "日常"], rating: 84 },
  { title: "凪のあすから", year: 2013, studio: "P.A.WORKS", genre: ["ドラマ", "恋愛"], rating: 86 },
  { title: "WORKING!!", year: 2010, studio: "A-1 Pictures", genre: ["コメディ", "日常"], rating: 83 },
  { title: "魔法使いの嫁", year: 2017, studio: "WIT STUDIO", genre: ["ファンタジー"], rating: 84 },
  { title: "ブルーロック", year: 2022, studio: "エイトビット", genre: ["スポーツ"], rating: 88 },
  { title: "地縛少年花子くん", year: 2020, studio: "Lerche", genre: ["ファンタジー", "学校"], rating: 85 }
];

//課題１
const animeDataAfter2010 = animeData.filter(value => value.year >= 2010).map(work => work.title)

//課題２ 
const countStudio = animeData.reduce((count,work) => {
    return work.studio in count ? {...count, [work.studio]: count[work.studio] + 1} : {...count, [work.studio]: 1}
}, {})

//課題３
const ratingMeanBBB = Math.round(animeData.reduce((sum,work) => {
    return work.rating + sum
},0)/animeData.length * 10) / 10

//課題４
const filterGenre = (works,genre) => {
    return works.filter(work => 
        work.genre.includes(genre)
    )
}

console.log(filterGenre(animeData,"ラブコメ"))
console.log(filterGenre(animeData,"うんち"))

//課題５
const formatWork = (work) => {
    const {title,year} = work
    return title+'('+year+')'
}
console.log(formatWork({ title: "薫る花は凛と咲く", year: 2025, studio: "CloverWorks", genre: ["ラブコメ"], rating: 100 }))

//課題６

const makeWatchCounter = (title) => {
    var count = 0
    const countUp = () => {
        count++
        return `${title}: ${count}回目`
    }
    return countUp
}

const counterA = makeWatchCounter("アニメA")
counterA()
counterA()
counterA()

const counterB = makeWatchCounter("アニメB")
counterB()
counterB()
counterB()
console.log(counterA())