// Configuration
const localStorageKey = "japanese" + "Episode1Part2Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep1 Part 2 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    '1':
    {
        'character': 'パンダ君の就職',
        'letter': "Mr. Panda's employment",
        'pinyin': 'ぱんだくんのしゅうしょく',
        'definition': 'パンダ 君 の 就職',
        'pinyinSpace': 'パンダ　きみ/くん　の　しゅうしょく'
    },
    '2':
    {
        'character': 'はい、しろくまカフェです',
        'letter': 'Yes, this is Shirokuma Cafe.',
        'pinyin': 'はい、しろくまかふぇです',
        'definition': 'はい しろくま カフェ です',
        'pinyinSpace': 'はい 、 しろくま カフェ です'
    },
    '3':
    {
        'character': 'あこんにちは先日面接にいった、パンダですよ',
        'letter': "Hi, I'm Panda, I had an interview the other day.",
        'pinyin': 'あこんにちはせんじつめんせつにいった、ぱんだですよ',
        'definition': 'あ こんにちは 先日 面接 に いった パンダ です よ',
        'pinyinSpace': 'あ　こんにちは　せんじつ　めんせつ　に　いった 、 です　よ'
    },
    '4':
    {
        'character': 'ああ不合格の～',
        'letter': "Oh, no, I didn't get in.",
        'pinyin': 'ああふごうかくの～',
        'definition': 'ああ 不合格 の',
        'pinyinSpace': 'ああ　ふごうかく　の ～'
    },
    '5':
    {
        'character': '出前をお願いしたいんです',
        'letter': "I'd like to order delivery.",
        'pinyin': 'でまえをおねがいしたいんです',
        'definition': '出前 を お願いしたい ん です',
        'pinyinSpace': 'でまえ　を　おねがい したい　ん　です'
    },
    '6':
    {
        'character': '出前はやってないですが',
        'letter': "I don't do delivery.",
        'pinyin': 'でまえはやってないですが',
        'definition': '出前 は やってないです が',
        'pinyinSpace': 'でまえ　は　やってない です　が'
    },
    '7':
    {
        'character': 'え？！となりなのに',
        'letter': "What? I'm right next to you.",
        'pinyin': 'え？！と',
        'definition': 'え となり な のに',
        'pinyinSpace': 'え ？！ となり　な のに'
    },
    '8':
    {
        'character': '今忙しいし',
        'letter': "I'm busy.",
        'pinyin': 'いまいそがしいし',
        'definition': '今 忙しい し',
        'pinyinSpace': 'いま　いそがしい　し'
    },
    '9':
    {
        'character': 'どうすれば出前してくれるの？',
        'letter': 'How can I get a delivery?',
        'pinyin': 'どうすればでまえしてくれるの？',
        'definition': 'どうすれば 出前してくれる の',
        'pinyinSpace': 'どうすれば　でまえしてくれる　の ？'
    },
    '10':
    {
        'character': 'ちょっと',
        'letter': 'Excuse me.',
        'pinyin': 'ちょっと',
        'definition': 'ちょっと',
        'pinyinSpace': 'ちょっと'
    },
    '11':
    {
        'character': 'お母さん',
        'letter': 'Mother.',
        'pinyin': 'おかあさん',
        'definition': 'お母さん',
        'pinyinSpace': 'おかあさん'
    },
    '12':
    {
        'character': '今仕事探してたの',
        'letter': "I'm looking for a job right now.",
        'pinyin': 'いましごとさがしてたの',
        'definition': '今 仕事探てた の',
        'pinyinSpace': 'いま　しごと さがしてた の'
    },
    '13':
    {
        'character': 'ねえねえ家近いんだから、出前してよ',
        'letter': 'Hey, hey, hey, you live close by. You should deliver.',
        'pinyin': 'ねえねえいえちかいんだから、でまえしてよ',
        'definition': 'ねえねえ 家 近い ん だから 出前して よ',
        'pinyinSpace': 'ねえねえ　いえ/け/うち　ちかい　ん　だ から 、 でまえ して　よ'
    },
    '14':
    {
        'character': 'お願い～～～',
        'letter': 'Please! Please!',
        'pinyin': 'おねがい～～～',
        'definition': 'お願い',
        'pinyinSpace': 'おねがい ～～～'
    },
    '15':
    {
        'character': 'あああ～～～～吸わないで～～～',
        'letter': "Ohhhh ～～～～ don't smoke~~",
        'pinyin': 'あああ～～～～すわないで～～～',
        'definition': 'あああ 吸わないで',
        'pinyinSpace': 'あああ ～～～～ すわないで ～～～'
    },
    '16':
    {
        'character': 'こんにちは',
        'letter': 'Hello. - Hello.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '17':
    {
        'character': '何しますか？',
        'letter': 'What can I do for you?',
        'pinyin': 'なにしますか？',
        'definition': 'なに します か ?',
        'pinyinSpace': 'なに　します　か ？'
    },
    '18':
    {
        'character': 'ペンギンさん、何にする？',
        'letter': 'What can I get you, Penguin?',
        'pinyin': 'ぺんぎんさん、なににする？',
        'definition': 'ペンギン さん 何 に する ?',
        'pinyinSpace': 'ペンギン　 、 なに　に　する ？'
    },
    '19':
    {
        'character': 'そうだね',
        'letter': 'Yeah.',
        'pinyin': 'そうだね',
        'definition': 'そうだね',
        'pinyinSpace': 'そうだね'
    },
    '20':
    {
        'character': 'いつものやつ',
        'letter': 'The usual.',
        'pinyin': 'いつものやつ',
        'definition': 'いつも の やつ',
        'pinyinSpace': 'いつも　の　やつ'
    },
    '21':
    {
        'character': 'えっ？！いつものやつって言われたんですけど',
        'letter': 'What? I was told it was the usual one.',
        'pinyin': 'えっ？！いつものやつっていわれたんですけど',
        'definition': 'え っ いつも  やつ って 言われた ん です けど',
        'pinyinSpace': 'え　っ ？！ いつも　の　やつ　って　いわれた　ん　で　けど'
    },
    '22':
    {
        'character': '任せて',
        'letter': 'Got it.',
        'pinyin': 'まかせて',
        'definition': '任せて',
        'pinyinSpace': 'まか'
    },
    '23':
    {
        'character': 'カレーライスです。。。。',
        'letter': 'Curry and rice. 。。。。',
        'pinyin': 'かれーらいすです。。。。',
        'definition': 'カレーライス です',
        'pinyinSpace': 'カレーライス　です 。。。。'
    },
    '24':
    {
        'character': '違ったみたいですよ',
        'letter': "I don't think it's the same.",
        'pinyin': 'ちがったみたいですよ',
        'definition': '違った みたいです よ',
        'pinyinSpace': 'ちがった　みたいです　よ'
    },
    '25':
    {
        'character': 'やっぱりね',
        'letter': 'I knew it.',
        'pinyin': 'やっぱりね',
        'definition': 'やっぱり ね',
        'pinyinSpace': 'やっぱり　ね'
    },
    '26':
    {
        'character': 'あの、竹か笹はないんですか',
        'letter': 'Um, do you have any bamboo or bamboo grass?',
        'pinyin': 'あの、たけかささはないんですか',
        'definition': 'あの 竹 か 笹 は ない ん です か',
        'pinyinSpace': ' 、 たけ　か　ささ　は　ない　ん　です　か'
    },
    '27':
    {
        'character': 'ないです',
        'letter': "I don't have any.",
        'pinyin': 'ないです',
        'definition': 'ないです',
        'pinyinSpace': 'ないです'
    },
    '28':
    {
        'character': 'じゃ～アイスコーヒー',
        'letter': 'Okay, iced coffee.',
        'pinyin': 'じゃ～あいすこーひー',
        'definition': 'じゃ アイスコーヒー',
        'pinyinSpace': 'じゃ ～ アイスコーヒー'
    },
    '29':
    {
        'character': 'あ、君バイト探してたよね',
        'letter': 'Oh, you were looking for a part-time job.',
        'pinyin': 'あ、きみバイトさがしてたよね',
        'definition': 'あ 君 バイト 探してた よね',
        'pinyinSpace': 'あ、きみ　バイト さがしてた　よね'
    },
    '30':
    {
        'character': 'こんなのあるよ',
        'letter': "Here's one.",
        'pinyin': 'こんなのあるよ',
        'definition': 'こんな の ある よ',
        'pinyinSpace': '　の　ある　よ'
    },
    '31':
    {
        'character': 'マグロ船船員大募集',
        'letter': 'Tuna Boat Crew Wanted!',
        'pinyin': 'マグロふねせんいんだいぼしゅう',
        'definition': 'マグロ 船 船員 大募集',
        'pinyinSpace': 'マグロ　ふね　せんいん　だいぼしゅう'
    },
    '32':
    {
        'character': '経験者大歓迎激しく重労働',
        'letter': 'Experienced people are welcome. Intensely hard work.',
        'pinyin': 'けいけんしゃだいかんげい、はげしくじゅうろうどう',
        'definition': '経験者 大歓迎 激しく 重労働',
        'pinyinSpace': 'けいけんしゃ　だいかんげい 、 はげしく　じゅうろうどう'
    },
    '33':
    {
        'character': 'どう？',
        'letter': 'What do you think?',
        'pinyin': 'どう？',
        'definition': 'どう',
        'pinyinSpace': 'どう ？'
    },
    '34':
    {
        'character': '嫌だよ、僕泳げないし',
        'letter': "I don't like it. I can't swim.",
        'pinyin': 'いやだよ、ぼくおよげないし',
        'definition': '嫌 だ よ 僕 泳げない し',
        'pinyinSpace': 'いや　だ　よ 、 ぼく　およげない　し'
    },
    '35':
    {
        'character': 'こっ',
        'letter': 'This is better.',
        'pinyin': 'こっちのがいいじやない？',
        'definition': 'こっち の がい いじ や ない',
        'pinyinSpace': '　の　がい　いじ　や　ない ？'
    },
    '36':
    {
        'character': '動物園未経験者歓迎',
        'letter': 'No zoo experience welcome',
        'pinyin': 'どうぶつえんみけいけんしゃかんげい',
        'definition': '動物園 未経験者 歓迎',
        'pinyinSpace': 'どうぶつえん　みけいけ　かんげい'
    },
    '37':
    {
        'character': '呼び相談におします',
        'letter': 'I will call you for advice.',
        'pinyin': 'よびそうだんにおします',
        'definition': '呼び 相談 に おします',
        'pinyinSpace': 'よび　そうだん　に　おします'
    },
    '38':
    {
        'character': '先ずはお電話くださいフリアイ動物園',
        'letter': 'Call us first, Friday Zoo.',
        'pinyin': 'まずはおでんわくださいふりあいどうぶつえん',
        'definition': '先ずは お電話 ください フリアイ 動物園',
        'pinyinSpace': 'まずは　おでんわ　ください　フリアイ　どうぶつ'
    },
    '39':
    {
        'character': 'マグロ船にしなよ',
        'letter': 'You should take the tuna boat.',
        'pinyin': 'まぐろせんにしなよ',
        'definition': 'マグロ 船 に しな よ',
        'pinyinSpace': 'マグロ　ふね　に　しな　よ'
    },
    '40':
    {
        'character': 'しろくまさん',
        'letter': 'polar bear (Ursus maritimus)',
        'pinyin': 'しろくまさん',
        'definition': 'しろ くまさん',
        'pinyinSpace': 'しろ　くまさん'
    },
    '41':
    {
        'character': '動物園か面白そう',
        'letter': 'A zoo. Sounds interesting.',
        'pinyin': 'どうぶつえんかおもしろそう',
        'definition': '動物園 か 面白そう',
        'pinyinSpace': 'どうぶつえん　か　おもしろそう'
    },
    '42':
    {
        'character': 'えっと週二日の勤務希望ですか？',
        'letter': 'Well, do you want to work two days a week?',
        'pinyin': 'えっとしゅうふつかのきんむきぼうですか？',
        'definition': ' 週二日 の 勤務 希望 です か',
        'pinyinSpace': 'えっと　しゅうふつか　の　きんむ　きぼう　です　か ？'
    },
    '43':
    {
        'character': 'では、パンダの仕事はどうでしょう？',
        'letter': 'So how about a panda job?',
        'pinyin': 'では、ぱんだのしごとはどう',
        'definition': 'では パンダ の 仕事 は どう でしょう',
        'pinyinSpace': 'で·は 、 パンダ　の　しごと　は　どう　でしょう ？'
    },
    '44':
    {
        'character': '常勤パンダさんが一頭いるですが',
        'letter': 'We have one full-time panda.',
        'pinyin': 'じょうき',
        'definition': '常勤 パンダ さん が 一頭 いる ですが',
        'pinyinSpace': 'じょうきん　パンダ　さん　が　いっとう　いる　ですが'
    },
    '45':
    {
        'character': '非常勤でもう一頭募集してるんです',
        'letter': "We're looking for another one on a part-time basis.",
        'pinyin': 'ひじょうきんでもういっとうぼしゅうしてるんです',
        'definition': '非常勤 で もう 一頭 募集してる ん です',
        'pinyinSpace': 'ひじょうきん　で　もう　いっとう　ぼしゅう してる　ん　です'
    },
    '46':
    {
        'character': 'パンダって',
        'letter': 'Panda. That panda, right?',
        'pinyin': 'ぱんだってあのぱんだですよね',
        'definition': 'パンダ って あの パンダ です よね',
        'pinyinSpace': 'パンダ　って　あの　パンダ　です　よね'
    },
    '47':
    {
        'character': '気が進みませんか？',
        'letter': "Wouldn't you like to be a part of it?",
        'pinyin': 'きがすすみませんか？',
        'definition': '気 が 進みません か',
        'pinyinSpace': '　が　すすみません　か ？'
    },
    '48':
    {
        'character': 'でしたら月の輪熊とゴリラも募集していますよ',
        'letter': 'If so, we are also looking for a moon bear and a gorilla!',
        'pinyin': 'でしたらつきのわぐまとごりらもぼしゅうしていますよ',
        'definition': 'でしたら 月の輪熊 と ゴリラ も 募集しています よ',
        'pinyinSpace': 'でしたら　つきのわぐま　と　ゴリラ　も　ぼしゅう よ'
    },
    '49':
    {
        'character': 'パンダでいいです',
        'letter': "I'm fine with pandas.",
        'pinyin': 'ぱんだでいいです',
        'definition': 'パンダ で いいです',
        'pinyinSpace': 'パンダ　で　いいです'
    },
    '50':
    {
        'character': 'そうですか、では、来週から来てください',
        'letter': 'Okay, well, come back next week.',
        'pinyin': 'そうですか、では、らいしゅうからきてください',
        'definition': 'そう です か では 来週 から 来てください',
        'pinyinSpace': 'そう　です　か 、 で·は 、 らいしゅう　から　きて ください'
    },
    '51':
    {
        'character': '僕、バイト決まったよ',
        'letter': 'I got a part-time job.',
        'pinyin': 'ぼく、ばいときまったよ',
        'definition': '僕 バ 決まった よ',
        'pinyinSpace': 'ぼく 、 バイト　きまった　よ'
    },
    '52':
    {
        'character': '良かったですね',
        'letter': 'Good for you.',
        'pinyin': 'よかったですね',
        'definition': '良かったです ね',
        'pinyinSpace': 'よかったです　ね'
    },
    '53':
    {
        'character': 'まぐ',
        'letter': 'Tuna boat?',
        'pinyin': 'まぐろせん？',
        'definition': 'まぐろ 船',
        'pinyinSpace': 'まぐろ　ふね ？'
    },
    '54':
    {
        'character': '違うよ動物園～',
        'letter': 'No, the zoo.',
        'pinyin': 'ちがうよどうぶつえん～',
        'definition': '違う よ 動物園',
        'pinyinSpace': 'ちがう　よ　どうぶつえん ～'
    },
    '55':
    {
        'character': '動物園のバイトって、何やるんですか',
        'letter': 'What kind of work do you do at the zoo?',
        'pinyin': 'どうぶつえんのばいとって、なにやるんですか',
        'definition': '動物園 の バイト って 何 やる ん です か',
        'pinyinSpace': 'どうぶつえん　の　バイト　って 、 なに　やる　ん　です　か'
    },
    '56':
    {
        'character': 'えへへまだ内緒',
        'letter': "Don't tell me yet.",
        'pinyin': 'えへへまだないしょ',
        'definition': 'えへへ まだ 内緒',
        'pinyinSpace': 'えへへ　まだ　ないしょ'
    },
    '57':
    {
        'character': 'なんで照れてんの',
        'letter': 'Why are you so shy?',
        'pinyin': 'なんでてれ',
        'definition': 'なんで 照れて ん の',
        'pinyinSpace': 'なんで　てれて　ん　の'
    },
    '58':
    {
        'character': 'いよいよ今日からバイトかドキドキしちゃうなぁ',
        'letter': "I'm so excited to finally start working today!",
        'pinyin': 'いよいよきょうからばいとかどきどきしちゃうなぁ',
        'definition': 'いよいよ 今日 から バイト か ドキドキしちゃう なぁ',
        'pinyinSpace': 'いよいよ　きょう　から　バイト　か　ドキドキ しちゃう　なぁ'
    },
    '59':
    {
        'character': '改めまして、半田と申します',
        'letter': 'Hello again, my name is Handa.',
        'pinyin': 'あらためまして、はんでんともうします',
        'definition': '改めまして 半田 と 申します',
        'pinyinSpace': 'あらためまして 、 はんだ　と　もうします'
    },
    '60':
    {
        'character': '今日は幼稚園から園児たちが来ます',
        'letter': 'Today we have children from a kindergarten coming to visit us.',
        'pinyin': 'きょうはようちえんからえんじたちがきます',
        'definition': '今日 は 幼稚園 から 園児 たち が 来ます',
        'pinyinSpace': 'きょう　は　ようちえん　から　えんじ　たち　が　きます'
    },
    '61':
    {
        'character': '',
        'letter': 'Give him a little service.',
        'pinyin': 'すこしさーびすしてあげてください',
        'definition': '少し サービスして あげてください',
        'pinyinSpace': 'すこし　サービス して　あげて ください'
    },
    '62':
    {
        'character': 'はい～～～～～',
        'letter': 'Yes. ～～～～～',
        'pinyin': 'はい～～～～～',
        'definition': 'はい',
        'pinyinSpace': 'はい ～～～～～'
    },
    '63':
    {
        'character': 'サービスですね分かりました',
        'letter': 'Service.',
        'pinyin': 'さーびすですねわかりました',
        'definition': 'サービス です ね 分かりました',
        'pinyinSpace': 'サービス　です　ね　わかりました'
    },
    '64':
    {
        'character': 'それ以外の時間はどんな感じで？',
        'letter': 'What about the rest of the time?',
        'pinyin': 'それいがいのじかんはどんなかんじで？',
        'definition': 'それ 以外 の 時間 は どんな 感じ で',
        'pinyinSpace': 'それ　いがい　の　じかん　は　どんな　かんじ　で ？'
    },
    '65':
    {
        'character': '自然態でいいで',
        'letter': 'Just be spontaneous.',
        'pinyin': 'しぜんざまでいいです',
        'definition': '自然 態 で いいです',
        'pinyinSpace': 'しぜん　たい　で　いいです'
    },
    '66':
    {
        'character': 'ねしろくま君',
        'letter': 'Hey, polar bear.',
        'pinyin': 'ねしろくまくん',
        'definition': 'ね しろくま 君',
        'pinyinSpace': 'ね　しろくま　きみ/くん'
    },
    '67':
    {
        'character': 'パンダ君うまくやってるかなぁ～',
        'letter': "I hope you're doing well, panda!",
        'pinyin': 'ぱんだくんうまくやってるかなぁ～',
        'definition': 'パンダ 君 うまくやっ か なぁ',
        'pinyinSpace': 'パンダ　きみ/くん　うまくやってる　か　なぁ ～'
    },
    '68':
    {
        'character': 'きっと大漁だよ、まぐろ船',
        'letter': "You're gonna catch a lot of fish, tuna boat.",
        'pinyin': 'きっとたいりょうだよ、まぐろせん',
        'definition': 'き 大漁 だ よ まぐろ 船',
        'pinyinSpace': 'きっと　たいりょう　だ　よ 、 まぐろ　ふね'
    },
    '69':
    {
        'character': '引っ張る',
        'letter': "You're pulling my leg!",
        'pinyin': 'ひっぱるねぇ～',
        'definition': '引っ張る ねぇ',
        'pinyinSpace': 'ひっぱる　ねぇ ～'
    },
    '70':
    {
        'character': 'あっ、カフェモカちょうだい',
        'letter': 'Oh, give me a café mocha.',
        'pinyin': 'あっ、かふぇもかちょうだい',
        'definition': 'あっ カフェ モカ ちょうだい',
        'pinyinSpace': 'あっ 、 カフェ　モカ　ちょうだい'
    },
    '71':
    {
        'character': 'って、それは影武者、いいから、そういうの',
        'letter': "That's a shadow warrior.",
        'pinyin': 'って、それはかげむしゃ、いいから、そう',
        'definition': 'って それは 影武者 いいから そういう の',
        'pinyinSpace': 'って 、 それは　かげむしゃ 、 いいから 、 そういう　の'
    },
    '72':
    {
        'character': 'え一週七日も',
        'letter': 'Seven days a week.',
        'pinyin': 'えいっしゅうなのかも',
        'definition': 'え  週七日 も',
        'pinyinSpace': 'え　いち/ひと　しゅうなのか　も'
    },
    '73':
    {
        'character': '休みはないんですか？',
        'letter': "You don't have any time off?",
        'pinyin': 'やすみはないんですか？',
        'definition': '休み は ない ん です か',
        'pinyinSpace': 'やすみ　は　ない　ん　です　か ？'
    },
    '74':
    {
        'character': 'あたしは常勤パンダですからね',
        'letter': "I'm a full-time panda.",
        'pinyin': 'あたしはじょうきんぱんだですからね',
        'definition': 'あたし は 常勤 パンダ ですから ね',
        'pinyinSpace': 'あたし　は　じょうきん　パンダ　ですから　ね'
    },
    '75':
    {
        'character': 'でも月に二日くらいは休みますよ',
        'letter': 'But I do take a couple of days off a month.',
        'pinyin': 'でもつきにふつかくらいはやすみますよ',
        'definition': 'でも 月 に 二日 くらい は 休みます よ',
        'pinyinSpace': 'でも　つき　に　ふつか　くらい　は　やすみます　よ'
    },
    '76':
    {
        'character': '非常勤でよかった',
        'letter': "I'm glad I'm part-time.",
        'pinyin': 'ひじょうきんでよかった',
        'definition': '非常勤 で よかった',
        'pinyinSpace': 'ひじょうきん　で　よかった'
    },
    '77':
    {
        'character': 'ハハハハまぁ今日からよろしくお願いします',
        'letter': "Hahahahaha well, I'm looking forward to working with you starting today.",
        'pinyin': 'ははははまぁきょうからよろしくおねがいします',
        'definition': 'ハハハ ハまぁ 今日 から よろしくお願いします',
        'pinyinSpace': 'ハハハ　ハまぁ　きょう　から　よろしくおねがいします'
    },
    '78':
    {
        'character': 'はい～！',
        'letter': 'Yes~!',
        'pinyin': 'はい～！',
        'definition': 'はい',
        'pinyinSpace': 'はい ～！'
    },
    '79':
    {
        'character': 'あっそういえば',
        'letter': 'Oh, by the way...',
        'pinyin': 'あっそういえば',
        'definition': 'あっそ う え ば',
        'pinyinSpace': 'あっそ　うい　え　ば'
    },
    '80':
    {
        'character': 'どうしました？',
        'letter': "What's wrong?",
        'pinyin': 'どうしました？',
        'definition': 'どう しました',
        'pinyinSpace': 'どう　しました ？'
    },
    '81':
    {
        'character': '半田さんから',
        'letter': 'From Mr. Handa.',
        'pinyin': 'はんでんさんから',
        'definition': '半田 さん から',
        'pinyinSpace': 'はんだ　さん　か'
    },
    '82':
    {
        'character': '自然態でって言われたんです',
        'letter': 'I was told to be natural.',
        'pinyin': 'しぜんざまでっていわれたんです',
        'definition': '自然 態 で って 言われた ん です',
        'pinyinSpace': 'しぜん　たい　で　って　いわれた　ん　です'
    },
    '83':
    {
        'character': 'こんな感じでしょうか？自然と一体的な？',
        'letter': 'Like this? At one with nature?',
        'pinyin': 'こんなかんじでしょうか？しぜんといったいてきな？',
        'definition': 'こんな 感じ でしょうか 自然 と 一体的 な',
        'pinyinSpace': 'こんな　かんじ　でしょうか ？ しぜん　と　いったいてき　な ？'
    },
    '84':
    {
        'character': '多分違うと思うというかすごく不自然',
        'letter': "Maybe not, or maybe it's just very unnatural.",
        'pinyin': 'たぶんちがうとおもうというかすごくふしぜん',
        'definition': '多分 違う と 思う というか すごく 不自然',
        'pinyinSpace': 'たぶん　ちがう　と　おもう　というか　すごく　'
    },
    '85':
    {
        'character': 'まぁ～難しく考えずに普通にしてれば大丈夫ですよ',
        'letter': "Well~ don't think too hard, just act normally and you'll be fine.",
        'pinyin': 'まぁ～むずかしくかんがえずにふつうにしてればだいじょうぶですよ',
        'definition': 'まぁ 難しく 考えず に 普通に してれば 大丈夫 です よ',
        'pinyinSpace': 'まぁ ～ むずかしく　かんがえず　に　ふつうに　してれば　だ　です　よ'
    },
    '86':
    {
        'character': 'あ～～パンダさん～～～',
        'letter': 'Ah~~ Mr. Panda~!',
        'pinyin': 'あ～～ぱんださん～～～',
        'definition': 'あ パンダ さん',
        'pinyinSpace': 'あ ～～ パンダ　さん ～～～'
    },
    '87':
    {
        'character': 'はい皆パンダさんですよ',
        'letter': "Yes, we're all pandas.",
        'pinyin': 'はいみんなぱんださんですよ',
        'definition': 'はい 皆 パンダ さん です よ',
        'pinyinSpace': 'はい　みんな　パンダ　さん　です　よ'
    },
    '88':
    {
        'character': 'あ園児が来ましたね',
        'letter': 'Oh, here come the preschoolers.',
        'pinyin': 'あえんじがきましたね',
        'definition': 'あ 園児 が 来ました ね',
        'pinyinSpace': 'あ　えんじ　が　きました　ね'
    },
    '89':
    {
        'character': 'さ～頑張りましょう',
        'letter': "Come on, let's go for it.",
        'pinyin': 'さ～がんばりましょう',
        'definition': 'さ 頑張りましょう',
        'pinyinSpace': 'さ ～ がんばりましょう'
    },
    '90':
    {
        'character': 'はい！',
        'letter': 'Yes, sir!',
        'pinyin': 'はい！',
        'definition': 'はい',
        'pinyinSpace': 'はい ！'
    },
    '91':
    {
        'character': 'パンダさんは食べているよ',
        'letter': 'Panda is eating.',
        'pinyin': 'ぱんださんはたべているよ',
        'definition': 'パンダ さん は 食べている よ',
        'pinyinSpace': 'パ　さん　は　たべている　よ'
    },
    '92':
    {
        'character': 'そうね～',
        'letter': "That's right.",
        'pinyin': 'そうね～',
        'definition': 'そう ね',
        'pinyinSpace': 'そう　ね ～'
    },
    '93':
    {
        'character': 'はは～パンダさんは滑り台滑ってるの',
        'letter': 'Ha-ha~ Panda is sliding down the slide.',
        'pinyin': 'はは～ぱんださんはすべりだいすべってるの',
        'definition': 'は は パンダ さん は 滑り台 滑ってる の',
        'pinyinSpace': 'は　は ～ パンダ　さん　は　すべりだい　すべってる　の'
    },
    '94':
    {
        'character': 'パンダさんが転がってるよ',
        'letter': 'Panda is rolling.',
        'pinyin': 'ぱんださんがころがってるよ',
        'definition': 'パンダ さん が 転がってる よ',
        'pinyinSpace': 'パンダ　さん　が　ころがってる　よ'
    },
    '95':
    {
        'character': 'これでサービスになってるんですか？',
        'letter': 'Is this supposed to be a service?',
        'pinyin': 'これでさーびすになってるんですか？',
        'definition': 'これで  に なってる ん です か',
        'pinyinSpace': 'これで　サービス　に　なってる　ん　です　か ？'
    },
    '96':
    {
        'character': 'もうちょっとの辛抱ですよ～',
        'letter': 'Just a little more patience.',
        'pinyin': 'もうちょっとのしんぼうですよ～',
        'definition': 'もうちょっと の 辛抱 です よ',
        'pinyinSpace': 'もうちょっと　の　しんぼう　です　よ ～'
    },
    '97':
    {
        'character': 'あ～もう一サービスしましょう',
        'letter': "Oh, let's have another service!",
        'pinyin': 'あ～もういちさーびすしましょう',
        'definition': 'あ もう 一 サービスしましょう',
        'pinyinSpace': 'あ ～ もう　いち/ひと　サービス しましょう'
    },
    '98':
    {
        'character': 'は',
        'letter': 'Ha, yes!',
        'pinyin': 'は、はい！',
        'definition': 'は はい',
        'pinyinSpace': 'は 、 はい ！'
    },
    '99':
    {
        'character': 'サービス～サービス～～',
        'letter': 'Service~Service~Service~Service',
        'pinyin': 'さーびす～さーびす～～',
        'definition': 'サービス サー',
        'pinyinSpace': 'サービス ～ サービス ～～'
    },
    '100':
    {
        'character': '皆、次はキリンさんを見ましょう',
        'letter': "Okay, everybody, let's see Mr. Giraffe next.",
        'pinyin': 'みんな、つぎはきりんさんをみましょう',
        'definition': '皆 次 は キリン さん を 見ましょう',
        'pinyinSpace': 'みんな 、 つぎ　は　キリン　さん　を　みましょう'
    },
    '101':
    {
        'character': 'はい～～～',
        'letter': 'Yes~~~',
        'pinyin': 'はい～～～',
        'definition': 'はい',
        'pinyinSpace': 'はい ～～～'
    },
    '102':
    {
        'character': 'こっちにしよう',
        'letter': "Let's go this way.",
        'pinyin': 'こっちにしよう',
        'definition': 'こっち に しよう',
        'pinyinSpace': 'こっち　に　しよう'
    },
    '103':
    {
        'character': 'サービス～サー～ビス～',
        'letter': 'Service~service~service',
        'pinyin': 'さーびす～さー～びす～',
        'definition': 'サービス サー ビス',
        'pinyinSpace': 'サービス ～ サー ～ ビス ～'
    },
    '104':
    {
        'character': 'は！爆睡してた！',
        'letter': 'Ha! I was sleeping like a bomb!',
        'pinyin': 'は！ばくすいしてた！',
        'definition': 'は 爆睡してた',
        'pinyinSpace': 'は ！ ばくすい してた ！'
    },
    '105':
    {
        'character': 'なんで起こしてくれないんですか、常勤パンダさん、え！',
        'letter': "Why don't you wake me up, full-time panda?",
        'pinyin': 'なんでおこしてくれないんですか、じょうきんぱんださん、え！',
        'definition': 'なんで 起こしてくれない ん です か 常勤 パンダ さん え',
        'pinyinSpace': 'なんで　おこして くれない　ん　です　か 、 じょうきん　パンダ　さん 、 え ！'
    },
    '106':
    {
        'character': '閉園の時間になりましたまたのご来園をお待ちしております',
        'letter': 'It is now time to close the park, and we look forward to seeing you again.',
        'pinyin': 'へいえんのじかんになりましたまたのごらいえんをおまちしております',
        'definition': '閉園 の 時間 に なりました また の ご 来園 を お 待ち して おります',
        'pinyinSpace': 'へいえん　の　じかん　に　なりました　また　の　ご　らいえん　を　お　まち　して　おります'
    },
    '107':
    {
        'character': 'お疲れ様でした',
        'letter': 'Thank you for your hard work.',
        'pinyin': 'おつかれさまでした',
        'definition': 'お疲れ様 でした',
        'pinyinSpace': 'おつかれさま　でした'
    },
    '108':
    {
        'character': 'お先です',
        'letter': 'After you.',
        'pinyin': 'おさきです',
        'definition': 'お先 です',
        'pinyinSpace': 'おさき　です'
    },
    '109':
    {
        'character': 'あ～パンダ君',
        'letter': 'Oh, Mr. Panda.',
        'pinyin': 'あ～ぱんだくん',
        'definition': 'あ パンダ 君',
        'pinyinSpace': 'あ ～ パンダ　きみ/くん'
    },
    '110':
    {
        'character': 'あれ皆来てたの',
        'letter': "Oh, my God, they're all here.",
        'pinyin': 'あれみんなこてたの',
        'definition': 'あれ 皆 来てた の',
        'pinyinSpace': 'あれ　みんな　きてた　の'
    },
    '111':
    {
        'character': 'お知り合いなんですか',
        'letter': 'You know each other?',
        'pinyin': 'お',
        'definition': 'お 知り合い なんです か',
        'pinyinSpace': 'お　しりあい　なんです　か'
    },
    '112':
    {
        'character': '僕たちも動物園でバイトしてるんですよ',
        'letter': 'We work part-time at the zoo, too.',
        'pinyin': 'ぼくたちもどうぶつえんでばいとしてるんで',
        'definition': '僕たち も 動物園 で バイトしてる ん です よ',
        'pinyinSpace': 'ぼくたち　も　どうぶつえん　で　バイト してる　ん　です　よ'
    },
    '113':
    {
        'character': 'パンダ君こっちこっち',
        'letter': 'Hey, panda, over here, over here.',
        'pinyin': 'ぱんだくんこっちこっち',
        'definition': 'パンダ 君 こっち こっち',
        'pinyinSpace': 'パンダ　きみ/くん　こっち　こっち'
    },
    '114':
    {
        'character': '今日は園児が可愛かったね',
        'letter': 'The kids were so cute today.',
        'pinyin': 'きょうはえんじがかわいかったね',
        'definition': '今日 は 園児 が 可愛かった ね',
        'pinyinSpace': 'きょう　は　えんじ　が　かわいかった　ね'
    },
    '115':
    {
        'character': '僕張り切り過ぎでて途中でばてちゃった',
        'letter': 'I was working too hard, and I got tired halfway through.',
        'pinyin': 'ぼくはりきりすぎでてとちゅうでばてちゃった',
        'definition': '僕 張り切り 過ぎ で て 途中 で ばてちゃった',
        'pinyinSpace': 'ぼく　はりきり　すぎ　で　て　とちゅう　で　ばてちゃった'
    },
    '116':
    {
        'character': 'わかりますわかります',
        'letter': 'I know, I know.',
        'pinyin': 'わかりますわかります',
        'definition': 'わかります わかります',
        'pinyinSpace': 'わかります　わかります'
    },
    '117':
    {
        'character': '今日は一日真面目に働いたなぁ',
        'letter': "I've worked hard all day.",
        'pinyin': 'きょうはいちにちまじめにはたらいたなぁ',
        'definition': '今日 は 一日 真面目 に 働いた なぁ',
        'pinyinSpace': 'きょう　は　いちにち/ついたち　まじめ　に　はたらいた　なぁ'
    },
    '118':
    {
        'character': 'そうですね',
        'letter': 'Yes, it is.',
        'pinyin': 'そうですね',
        'definition': 'そうですね',
        'pinyinSpace': 'そうですね'
    },
    '119':
    {
        'character': 'すごいやりきったかおだけどぱんだくんとちゅうからずっとねてたらしいよ',
        'letter': "You look like you've done all you can do, but I heard you've been sleeping through the whole thing.",
        'pinyin': 'すごいやりきったかおだけどぱんだくんとちゅうからずっとねてたらしいよ',
        'definition': 'すごい やりきった 顔 だけど パンダ 君 途中 から ずっと 寝てたらしい よ',
        'pinyinSpace': 'すごい　やりきった　かお　だけど　パンダ　きみ/くん　とちゅう　から　ずっと　ねてたらしい　よ'
    },
    '120':
    {
        'character': 'パンダ君の自然態なんだねぇきっと',
        'letter': "I guess it's just your natural state.",
        'pinyin': 'パンダくんのしぜんたいなんだねぇきっと',
        'definition': 'パンダ 君 の 自然 態 な ん だ ねぇ きっと',
        'pinyinSpace': 'パンダ きみ/くん の しぜん　たい　な　ん　だ　ねぇ　きっと'
    },
    '121':
    {
        'character': 'パンダ君って割りと図々しいよね',
        'letter': "Pandas are rather brazen, aren't they?",
        'pinyin': 'ぱんだくんってわりとずうずうしいよね',
        'definition': 'パンダ 君 って 割り と 図々しい よね',
        'pinyinSpace': 'パンダ　きみ/くん　って　わり　と　ずうずうしい　よね'
    },
    '122':
    {
        'character': 'パンダ君一先何か頼みませんか？',
        'letter': 'Panda, would you like to order something first?',
        'pinyin': 'ぱんだくんひとまずなにかたのみませんか？',
        'definition': 'パンダ 君 一先 何か 頼みません か',
        'pinyinSpace': 'パンダ　きみ/くん　ひとまず　なにか　たのみません　か ？'
    },
    '123':
    {
        'character': 'どうしようかな～～～',
        'letter': "I don't know what to do~~~",
        'pinyin': 'どうしようかな～～～',
        'definition': 'どうしよう かな',
        'pinyinSpace': 'どうしよう　かな ～～～'
    },
    '124':
    {
        'character': '何にする？',
        'letter': 'What do you want?',
        'pinyin': 'なににする？',
        'definition': '何 に する',
        'pinyinSpace': 'なに　に　する ？'
    },
    '125':
    {
        'character': '竹！大盛りで',
        'letter': 'Bamboo! A big one.',
        'pinyin': 'たけ！おおもりで',
        'definition': '竹 大盛り で',
        'pinyinSpace': 'たけ ！ おおもり　で'
    },
    '126':
    {
        'character': 'しろくま君それは守宮！',
        'letter': "Shikuma-kun, that's Morimiya!",
        'pinyin': 'しろくまくんそれはやもり！',
        'definition': 'しろくま 君 それは 守宮',
        'pinyinSpace': 'しろくま　きみ/くん　それは　やもり/しゅく ！'
    },
    '127':
    {
        'character': 'オーよちよち～',
        'letter': 'O-Yo-chi-chi~!',
        'pinyin': 'おーよちよち～',
        'definition': 'オー よちよち',
        'pinyinSpace': 'オー　よちよち ～'
    },
    '128':
    {
        'character': 'それは子守！',
        'letter': "That's a babysitter!",
        'pinyin': 'それはこもり！',
        'definition': 'それは 子守',
        'pinyinSpace': 'それは　こもり ！'
    },
    '129':
    {
        'character': '笹子さんが突っ込み',
        'letter': 'Sasago-san rushes in!',
        'pinyin': 'ささごさんがつっこみを！',
        'definition': '笹 子 さん が 突っ込み を',
        'pinyinSpace': 'ささ　こ　さん　が　つっこみ　を ！'
    },
    '130':
    {
        'character': 'それはハモリ',
        'letter': "It's a hummingbird",
        'pinyin': 'それははもり',
        'definition': 'それは ハモ リ',
        'pinyinSpace': 'それは　ハモ　リ'
    },
    '131':
    {
        'character': 'ね～早',
        'letter': 'Give it to me quickly!',
        'pinyin': 'ね～はやくちょうだい～',
        'definition': 'ね 早く 頂戴',
        'pinyinSpace': 'ね ～ はや　ちょうだい ～'
    },
    '132':
    {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Penguin, penguin, penguin.',
        'pinyin': 'ぺんぎん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン　さん　ペンギン　さん'
    },
    '133':
    {
        'character': '僕が全部毛を剃るとどうなってると思う？',
        'letter': 'What do you think happens when I shave it all off?',
        'pinyin': 'ぼくがぜんぶけ',
        'definition': '僕 が 全部 毛 を 剃る と どう なってる と 思う',
        'pinyinSpace': 'ぼく　が　ぜんぶ　け　を　そ　と　どう　なってる　と　おもう ？'
    },
    '134':
    {
        'character': '今はいいかな予告しなきゃいけないから',
        'letter': 'Not now, because I have to give you a warning.',
        'pinyin': 'いまはいいかなよこくしなきゃいけないから',
        'definition': '今 は いい か 予告し なきゃいけない から',
        'pinyinSpace': 'いま　は　いい　かな　よこく し　なきゃいけない　から'
    },
    '135':
    {
        'character': 'じゃ～さペンギンさんのだめな部分三つ教えて',
        'letter': 'Okay, now tell me three things that are wrong with you, Penguin.',
        'pinyin': 'じゃ～さぺんぎんさんのだめなぶぶんみっつおしえて',
        'definition': 'じゃ さ ペンギン さん の だめ な 部分 三つ 教えて',
        'pinyinSpace': 'じゃ ～ さ　ペンギン　さん　の　だめ　な　ぶぶん　みっつ　おしえて'
    },
    '136':
    {
        'character': 'それもいいかなテンション下がっちゃうから',
        'letter': "Well, that's okay, too, 'cause it's kind of depressing.",
        'pinyin': 'それもいいかなてんしょんさがっちゃうから',
        'definition': 'それ も いい かな テンション 下がっちゃう から',
        'pinyinSpace': 'それ　も　いい　かな　テンション　さがっちゃう　から'
    },
    '137':
    {
        'character': 'しろくま君しゃべろう',
        'letter': "Come on, polar bear, let's talk.",
        'pinyin': 'しろくまくんしゃべろう',
        'definition': 'しろくま 君 しゃべろう',
        'pinyinSpace': 'しろくま　きみ/くん　しゃべろう'
    },
    '138':
    {
        'character': 'ペンギンさんのダメなところはお金にだらしないところ',
        'letter': "The only thing wrong with Mr. Penguin is that he's sloppy with his money.",
        'pinyin': 'ぺんぎんさんのだめなところはおかねにだらしな',
        'definition': 'ペンギン さん の ダメ な ところ は お金 に だらしない ところ',
        'pinyinSpace': 'ペンギン　さん　の　ダ　な　ところ　は　おかね　に　だらしない　ところ'
    },
    '139':
    {
        'character': 'やめて！もう終わって！',
        'letter': "Stop it! That's enough!",
        'pinyin': 'やめて！もうおわって！',
        'definition': 'やめて もう 終わって',
        'pinyinSpace': 'やめて ！ もう　おわって ！'
    },
    '140':
    {
        'character': 'はい！次回しろくまカフェ最終回お楽しみに',
        'letter': 'Yes, sir! Please look forward to the next and final installment of Shirokuma Cafe!',
        'pinyin': 'はい！じかいしろくまかふぇさいしゅうかいおたのしみに',
        'definition': 'はい 次回 しろくま カフェ 最終回 お 楽しみ に',
        'pinyinSpace': 'はい ！ じかい　しろくま　カフェ　さいしゅうかい　お　たのしみ　に'
    },
    '141':
    {
        'character': '終わらせないよしろくまカフェ第二話お楽しみに',
        'letter': "We won't let you finish... enjoy the second episode of Shirokuma Cafe!",
        'pinyin': 'おわらせないよしろくまかふぇだいにばなしおたのしみに',
        'definition': '終わらせない よ しろくま カフェ 第二 話 お 楽しみ に',
        'pinyinSpace': 'おわらせない　よ　しろくま　カフェ　だ　はなし　お　たのしみ　に'
    }
}


function getCharacter(n){
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;