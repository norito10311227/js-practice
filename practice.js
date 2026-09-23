var Works = [
    {title:"薫る花は凛と咲く",year:2025,studio:"CloverWorks",genre:["ラブコメ"],rating:100},
    {title:"王様ランキング",year:2021,studio:"WIT STUDIO",genre:["アクション"],rating:95},
    {title:"転生したらスライムだった件",year:2018,studio:"エイトビット",genre:["異世界","アクション"],rating:85},
    {title:"七つの大罪",year:2016,studio:"A-1 Pictures",genre:["アクション"],rating:76},
    {title:"暗殺教室",year:2015,studio:"Lerche",genre:["学校","アクション"],rating:96},
    {title:"からかい上手の高木さん",year:2018,studio:"シンエイ動画",genre:["ラブコメ"],rating:97},
    {title:"アンデット・アンラック",year:2023,studio:"トムス・エンタテイメント",genre:["アクション"],rating:90}
]

var After_2010 = Works.filter(function(value){
    return value.year >= 2020
})

console.log(After_2010)