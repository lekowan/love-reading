const allSyllableMap = {
    '1': {
        'character': 'パンダくん張り切る',
        'letter': "Panda, you're all worked up.",
        'pinyin': 'ぱんだくんはりきる',
        'definition': 'パンダ くん 張り切る',
        'pinyinSpace': 'パンダ くん はりきる'
    },
    '2': {
        'character': 'どうしたの？パンダくん',
        'letter': "What's wrong? Panda.",
        'pinyin': 'どうしたの？ぱんだくん',
        'definition': 'どうしたの パンダ くん',
        'pinyinSpace': 'どうしたの ？ パンダ くん'
    },
    '3': {
        'character': '元気ないですね',
        'letter': "You don't seem well.",
        'pinyin': 'げんきないですね',
        'definition': '元気 ないです ね',
        'pinyinSpace': 'げんき ないです ね'
    },
    '4': {
        'character': '実はさ…常勤パンダさんが',
        'letter': 'Actually... my full-time panda...',
        'pinyin': 'じつはさ…じょうきんぱんださんが',
        'definition': '実は さ 常勤 パンダ さん が',
        'pinyinSpace': 'じつは さ … じょうきん パンダ さん が'
    },
    '5': {
        'character': '親戚の結婚式でしばらく実家の中国に帰るんだって',
        'letter': "He's going back to his parents' home in China for a while for a relative's wedding.",
        'pinyin': 'しんせきのけっこんしきでしばらくじっかのちゅうごくにかえるんだって',
        'definition': '親戚 の 結婚式 で しばらく 実家 の 中国 に 帰る ん だって',
        'pinyinSpace': 'しんせき の けっこんしき で しばらく じっか の ちゅうごく に かえる ん だって'
    },
    '6': {
        'character': 'なんでそれで元気ないの？',
        'letter': 'Why are you so down?',
        'pinyin': 'なんでそれでげんきないの？',
        'definition': 'なんで それで 元気 ない の',
        'pinyinSpace': 'なんで それで げんき ない の ？'
    },
    '7': {
        'character': 'それがね…',
        'letter': 'Because...',
        'pinyin': 'それがね…',
        'definition': 'それ が ね',
        'pinyinSpace': 'それ が ね …'
    },
    '8': {
        'character': '１週間留守にするからって',
        'letter': "She's going away for a week.",
        'pinyin': '１しゅうかんるすにするからって',
        'definition': '１ 週間 留守 に する から って',
        'pinyinSpace': 'ワン/いち しゅうかん るす に する から って'
    },
    '9': {
        'character': '代わりにバイトフルに入ることになっちゃったんだよ',
        'letter': "I'm going away for a week, so I'm going to get a full time job instead.",
        'pinyin': 'かわりにばいとふるにはいることになっちゃったんだよ',
        'definition': '代わり に バイト フル に 入る ことになっちゃった ん だ よ',
        'pinyinSpace': 'かわり に バイト フル に はいる/いる ことになっちゃった ん だ よ'
    },
    '10': {
        'character': '動物園のバイト？',
        'letter': 'The zoo job?',
        'pinyin': 'どうぶつえんのばいと？',
        'definition': '動物園 の バイト',
        'pinyinSpace': 'どうぶつえん の バイト ？'
    },
    '11': {
        'character': 'そう',
        'letter': 'Yes.',
        'pinyin': 'そう',
        'definition': 'そう',
        'pinyinSpace': 'そう'
    },
    '12': {
        'character': 'でもたった１週間でしょ？',
        'letter': "But it's only a week, right?",
        'pinyin': 'でもたった１しゅうかんでしょ？',
        'definition': 'でも たった １ 週間 でしょ',
        'pinyinSpace': 'でも たった ワン/いち しゅうかん でしょ ？'
    },
    '13': {
        'character': '１週間もだよ～',
        'letter': 'For a week?',
        'pinyin': '１しゅうかんもだよ～',
        'definition': '１ 週間 も だ よ',
        'pinyinSpace': 'ワン/いち しゅうかん も だ よ ～'
    },
    '14': {
        'character': '早起きできるかな…しかも毎日',
        'letter': "I don't know if I can get up early... and every day.",
        'pinyin': 'はやおきできるかな…しかもまいにち',
        'definition': '早起きできる かな しかも 毎日',
        'pinyinSpace': 'はやおき できる かな … しかも まいにち'
    },
    '15': {
        'character': '自信がないよ',
        'letter': "I'm not sure.",
        'pinyin': 'じしんがないよ',
        'definition': '自信 が ない よ',
        'pinyinSpace': 'じしん が ない よ'
    },
    '16': {
        'character': '大変なのは早起きじゃなくて満員電車じゃない？',
        'letter': "It's not the getting up early that's hard. It's the crowded train.",
        'pinyin': 'たいへんなのははやおきじゃなくてまんいんでんしゃじゃない？',
        'definition': '大変 な の は 早起き じゃなくて 満員電車 じゃない',
        'pinyinSpace': 'たいへん な の は はやおき じゃなくて まんいんでんしゃ じゃない ？'
    },
    '17': {
        'character': '満員電車？',
        'letter': 'Crowded train?',
        'pinyin': 'まんいんでんしゃ？',
        'definition': '満員電車',
        'pinyinSpace': 'まんいんでんしゃ ？'
    },
    '18': {
        'character': '朝会社に行く人たちで電車がいっぱいになるのが',
        'letter': 'The train is full of people going to work in the morning.',
        'pinyin': 'あさかいしゃにいくひとたちででんしゃがいっぱいになるのが',
        'definition': '朝 会社 に 行く 人たち で 電車 が いっぱい に なる の が',
        'pinyinSpace': 'あさ かいしゃ に いく ひとたち で でんしゃ が いっぱい に なる の が'
    },
    '19': {
        'character': '満員電車だよ',
        'letter': "It's a crowded train.",
        'pinyin': 'まんいんでんしゃだよ',
        'definition': '満員電車 だ よ',
        'pinyinSpace': 'まんいんでんしゃ だ よ'
    },
    '20': {
        'character': '僕らコウテイペンギンは慣れてるからいいけど…',
        'letter': 'We penguins are used to it.',
        'pinyin': 'ぼくらこうていぺんぎんはなれてるからいいけど…',
        'definition': '僕ら コウテイペンギン は 慣れてる から いい けど',
        'pinyinSpace': 'ぼくら コウテイペンギン は なれてる から いい けど …'
    },
    '21': {
        'character': 'え？ペンギンさんも電車乗るの？',
        'letter': 'What? Do penguins take the train too?',
        'pinyin': 'え？ぺんぎんさんもでんしゃのるの？',
        'definition': 'え ペンギン さん も 電車 乗る の',
        'pinyinSpace': 'え ？ ペンギン さん も でんしゃ のる の ？'
    },
    '22': {
        'character': '違うよ',
        'letter': "No, they don't.",
        'pinyin': 'ちがうよ',
        'definition': '違う よ',
        'pinyinSpace': 'ちがう よ'
    },
    '23': {
        'character': '南極じゃみんな集まって子育てするから',
        'letter': 'In Antarctica, penguins gather together to raise their young.',
        'pinyin': 'なんきょくじゃみんなあつまってこそだてするから',
        'definition': '南極 じゃ みんな 集まって 子育てする から',
        'pinyinSpace': 'なんきょく じゃ みんな あつまって こそだて する から'
    },
    '24': {
        'character': 'もう満員電車並みの混雑だよ',
        'letter': "It's as crowded as a crowded train.",
        'pinyin': 'もうまんいんでんしゃなみのこんざつだよ',
        'definition': 'もう 満員電車 並み の 混雑 だ よ',
        'pinyinSpace': 'もう まんいんでんしゃ なみ の こんざつ だ よ'
    },
    '25': {
        'character': 'みんなおしくらまんじゅう状態だもんね',
        'letter': "It's like a big joke.",
        'pinyin': 'みんなおしくらまんじゅうじょうたいだもんね',
        'definition': 'みんな おしくらまんじゅう 状態 だ もん ね',
        'pinyinSpace': 'みんな おしくらまんじゅう じょうたい だ もん ね'
    },
    '26': {
        'character': 'おしくらまんじゅう？',
        'letter': 'A ball and chain?',
        'pinyin': 'おしくらまんじゅう？',
        'definition': 'おしくらまんじゅう',
        'pinyinSpace': 'おしくらまんじゅう ？'
    },
    '27': {
        'character': '楽しそうだね',
        'letter': 'Sounds like fun. ^#)',
        'pinyin': 'たのしそうだね',
        'definition': '楽しそう だ ね',
        'pinyinSpace': 'たのしそう だ ね'
    },
    '28': {
        'character': 'なんだか楽しみになってきたよ',
        'letter': "I'm starting to look forward to it.",
        'pinyin': 'なんだかたのしみになってきたよ',
        'definition': 'なんだか 楽しみ に なってきた よ',
        'pinyinSpace': 'なんだか たのしみ に なってきた よ'
    },
    '29': {
        'character': '早く帰って明日に備えなくちゃ',
        'letter': "I'd better go home and get ready for tomorrow.",
        'pinyin': 'はやくかえってあしたにそなえなくちゃ',
        'definition': '早く 帰って 明日 に 備えなくちゃ',
        'pinyinSpace': 'はやく かえって あした に そなえなくちゃ'
    },
    '30': {
        'character': 'じゃあ…ごちそうさま',
        'letter': 'Well then... thanks for the food.',
        'pinyin': 'じゃあ…ごちそうさま',
        'definition': 'じゃあ ごちそうさま',
        'pinyinSpace': 'じゃあ … ごちそうさま'
    },
    '31': {
        'character': '大丈夫かな…',
        'letter': "I hope you're okay...",
        'pinyin': 'だいじょうぶかな…',
        'definition': '大丈夫 かな',
        'pinyinSpace': 'だいじょうぶ かな …'
    },
    '32': {
        'character': 'あ…早く早く',
        'letter': 'Hurry up, hurry up, hurry up.',
        'pinyin': 'あ…はやくはやく',
        'definition': 'あ 早く 早く',
        'pinyinSpace': 'あ … はやく はやく'
    },
    '33': {
        'character': '急がないと満員電車に乗れないよ',
        'letter': "Hurry up or you'll miss the crowded train.",
        'pinyin': 'いそがないとまんいんでんしゃにのれないよ',
        'definition': '急がない と 満員電車 に 乗れない よ',
        'pinyinSpace': 'いそがない と まんいんでんしゃ に のれない よ'
    },
    '34': {
        'character': 'おはようパンダくん',
        'letter': 'Good morning, panda.',
        'pinyin': 'おはようぱんだくん',
        'definition': 'おはよう パンダ くん',
        'pinyinSpace': 'おはよう パンダ くん'
    },
    '35': {
        'character': 'おはようございま～す',
        'letter': 'Good morning.',
        'pinyin': 'おはようございま～す',
        'definition': 'おはよう ござ いま す',
        'pinyinSpace': 'おはよう ござ いま ～ す'
    },
    '36': {
        'character': 'バイト？頑張ってね～',
        'letter': 'Part-time job? Good luck.',
        'pinyin': 'ばいと？がんばってね～',
        'definition': 'バイト 頑張って ね',
        'pinyinSpace': 'バイト ？ がんばって ね ～'
    },
    '37': {
        'character': '行ってきま～す',
        'letter': "I'm off.",
        'pinyin': 'いってきま～す',
        'definition': '行ってき ま す',
        'pinyinSpace': 'おこなってき/いってき ま ～ す'
    },
    '38': {
        'character': 'すみませ～ん',
        'letter': 'Sorry.',
        'pinyin': 'すみませ～ん',
        'definition': 'すみ ませ ん',
        'pinyinSpace': 'すみ ませ ～ ん'
    },
    '39': {
        'character': 'いらっしゃいませ',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃいませ',
        'definition': 'いらっしゃいませ',
        'pinyinSpace': 'いらっしゃいませ'
    },
    '40': {
        'character': 'お花選んでいただけますか？',
        'letter': 'Would you please choose some flowers?',
        'pinyin': 'おはなえらんでいただけますか？',
        'definition': 'お 花 選んでいただけます か',
        'pinyinSpace': 'お はな えらんで いただけます か ？'
    },
    '41': {
        'character': 'おしくらまんじゅうだね～',
        'letter': "You've got a bun in your head.",
        'pinyin': 'おしくらまんじゅうだね～',
        'definition': 'おしくらまんじゅう だ ね',
        'pinyinSpace': 'おしくらまんじゅう だ ね ～'
    },
    '42': {
        'character': 'ドアが閉まりますご注意くださいドアが閉まります',
        'letter': 'Please be careful... the doors are closing...',
        'pinyin': 'どあがしまりますごちゅういくださいどあがしまります',
        'definition': 'ドア が 閉まります ご注意ください ドア が 閉まります',
        'pinyinSpace': 'ドア が しまります ごちゅういください ドア が しまります'
    },
    '43': {
        'character': 'すみませんパンダ専用車両はどこですか？',
        'letter': 'Excuse me, where is the panda car?',
        'pinyin': 'すみませんぱんだせんようしゃりょうはどこですか？',
        'definition': 'すみません パンダ 専用 車両 は どこ です か',
        'pinyinSpace': 'すみません パンダ せんよう しゃりょう は どこ です か ？'
    },
    '44': {
        'character': 'ないと思います…',
        'letter': "I don't think so...",
        'pinyin': 'ないとおもいます…',
        'definition': 'ない と 思います',
        'pinyinSpace': 'ない と おもいます …'
    },
    '45': {
        'character': 'ど…どこか…空いてるところは…',
        'letter': "I don't think there's... anywhere... that's open...",
        'pinyin': 'ど…どこか…あいてるところは…',
        'definition': 'ど どこか 空いてる ところ は',
        'pinyinSpace': 'ど … どこか … すいてる ところ は …'
    },
    '46': {
        'character': 'きついよ…',
        'letter': "It's tight...",
        'pinyin': 'きついよ…',
        'definition': 'きつい よ',
        'pinyinSpace': 'きつい よ …'
    },
    '47': {
        'character': 'この先揺れますのでご注意ください',
        'letter': "Please be careful, it's going to be bumpy.",
        'pinyin': 'このさきゆれますのでごちゅういください',
        'definition': 'この先 揺れます ので ご注意ください',
        'pinyinSpace': 'このさき ゆれます ので ごちゅういください'
    },
    '48': {
        'character': 'パンダく～ん',
        'letter': 'Panda!',
        'pinyin': 'ぱんだく～ん',
        'definition': 'パンダ く ん',
        'pinyinSpace': 'パンダ く ～ ん'
    },
    '49': {
        'character': 'ごはんだよ？',
        'letter': "I'm going to eat.",
        'pinyin': 'ごはんだよ？',
        'definition': 'ご はんだ よ',
        'pinyinSpace': 'ご はんだ よ ？'
    },
    '50': {
        'character': 'そこ置いといて',
        'letter': 'Leave it there.',
        'pinyin': 'そこおいといて',
        'definition': 'そこ 置いといて',
        'pinyinSpace': 'そこ おいといて'
    },
    '51': {
        'character': 'うん…',
        'letter': "I know it's hard...",
        'pinyin': 'うん…',
        'definition': 'うん',
        'pinyinSpace': 'うん …'
    },
    '52': {
        'character': '朝からバイトで大変なのはわかるけどさ',
        'letter': "I know you've had a hard morning's work.",
        'pinyin': 'あさからばいとでたいへんなのはわかるけどさ',
        'definition': '朝 から バイト で 大変 な の は わかる けど さ',
        'pinyinSpace': 'あさ から バイト で たいへん な の は わかる けど さ'
    },
    '53': {
        'character': 'もう少しお客さんにサービスしてよ',
        'letter': 'But you should serve the customers a little better.',
        'pinyin': 'もうすこしおきゃくさんにさーびすしてよ',
        'definition': 'もう少し お客さん に サービスして よ',
        'pinyinSpace': 'もうすこし おきゃくさん に サービス して よ'
    },
    '54': {
        'character': 'もう満員電車やだ…',
        'letter': "I don't want to be on a crowded train anymore...",
        'pinyin': 'もうまんいんでんしゃやだ…',
        'definition': 'もう 満員電車 や だ',
        'pinyinSpace': 'もう まんいんでんしゃ や だ …'
    },
    '55': {
        'character': '半田さん朝代わってよ',
        'letter': 'Mr. Handa, take over this morning.',
        'pinyin': 'はんでんさんあさかわってよ',
        'definition': '半田 さん 朝 代わって よ',
        'pinyinSpace': 'はんだ さん あさ かわって よ'
    },
    '56': {
        'character': 'やだって言ったって仕方ないでしょう？',
        'letter': "I don't have a choice.",
        'pinyin': 'やだっていったってしかたないでしょう？',
        'definition': 'や だって 言ったって 仕方ないでしょう',
        'pinyinSpace': 'や だって いったって しかたないでしょう ？'
    },
    '57': {
        'character': '僕もう少し遅く来るから朝だけパンダ代わって',
        'letter': "I'll come a little later, so please cover for Panda in the morning.",
        'pinyin': 'ぼくもうすこしおそくくるからあさだけぱんだかわって',
        'definition': '僕 もう少し 遅く 来る から 朝 だけ パンダ 代わって',
        'pinyinSpace': 'ぼく もうすこし おそく くる から あさ だけ パンダ かわって'
    },
    '58': {
        'character': '代われって言われても無理だし',
        'letter': "I can't do that.",
        'pinyin': 'かわれっていわれてもむりだし',
        'definition': '代われ って 言われても 無理 だ し',
        'pinyinSpace': 'かわれ って いわれても むり だ し'
    },
    '59': {
        'character': '大丈夫体型似てるから',
        'letter': "Don't worry. We have the same body type.",
        'pinyin': 'だいじょうぶたいけいにてるから',
        'definition': '大丈夫 体型 似てる から',
        'pinyinSpace': 'だいじょうぶ たいけい にてる から'
    },
    '60': {
        'character': 'いやいや…',
        'letter': 'No, no, no, no, no, no, no, no, no, no, no, no, no, no, no.',
        'pinyin': 'いやいや…',
        'definition': 'いやいや',
        'pinyinSpace': 'いやいや …'
    },
    '61': {
        'character': 'ありえないから頑張ってよ約束でしょ',
        'letter': 'No, no, no, no, no, no, no, no, no, no, no, no, no, no, no, no.',
        'pinyin': 'ありえないからがんばってよやくそくでしょ',
        'definition': 'ありえない から 頑張って よ 約束 でしょ',
        'pinyinSpace': 'ありえない から がんばって よ やくそく でしょ'
    },
    '62': {
        'character': 'ごはんここ置いとくからね',
        'letter': "I'll leave your food right here.",
        'pinyin': 'ごはんここおいとくからね',
        'definition': 'ごはん ここ 置いとく から ね',
        'pinyinSpace': 'ごはん ここ おいとく から ね'
    },
    '63': {
        'character': 'チェッ',
        'letter': 'Okay.',
        'pinyin': 'ちぇっ',
        'definition': 'チェ ッ',
        'pinyinSpace': 'チェ ッ'
    },
    '64': {
        'character': 'あ～満員電車のこと考えると',
        'letter': "Oh, I can't stop thinking about the train.",
        'pinyin': 'あ～まんいんでんしゃのことかんがえると',
        'definition': 'あ 満員電車 の こと 考える と',
        'pinyinSpace': 'あ ～ まんいんでんしゃ の こと かんがえる と'
    },
    '65': {
        'character': '食欲が出ないよ',
        'letter': "I'm not hungry.",
        'pinyin': 'しょくよくがでないよ',
        'definition': '食欲 が 出ない よ',
        'pinyinSpace': 'しょくよく が でない よ'
    },
    '66': {
        'character': 'パンダくん',
        'letter': 'Panda!',
        'pinyin': 'ぱんだくん',
        'definition': 'パンダ くん',
        'pinyinSpace': 'パンダ くん'
    },
    '67': {
        'character': 'パンダくんにお届け物です',
        'letter': 'Delivery for you, Mr. Panda.',
        'pinyin': 'ぱんだくんにおとどけものです',
        'definition': 'パンダ くん に お 届け物 です',
        'pinyinSpace': 'パンダ くん に お とどけもの です'
    },
    '68': {
        'character': '花？',
        'letter': 'Flowers?',
        'pinyin': 'はな？',
        'definition': '花',
        'pinyinSpace': 'はな ？'
    },
    '69': {
        'character': 'いつも見てますお仕事頑張ってね',
        'letter': "I'm always watching you, good luck with your work.",
        'pinyin': 'いつもみてますおしごとがんばってね',
        'definition': 'いつも 見てます お仕事 頑張って ね',
        'pinyinSpace': 'いつも みてます おしごと がんばって ね'
    },
    '70': {
        'character': 'あなたのファンよりリンリン',
        'letter': 'From your fan, Rin Rin Rin.',
        'pinyin': 'あなたのふぁんよりりんりん',
        'definition': 'あなた の ファン より リンリン',
        'pinyinSpace': 'あなた の ファン より リンリン'
    },
    '71': {
        'character': '僕のファン！？',
        'letter': 'My fan!',
        'pinyin': 'ぼくのふぁん！？',
        'definition': '僕 の ファン',
        'pinyinSpace': 'ぼく の ファン ！？'
    },
    '72': {
        'character': 'リンリンちゃん',
        'letter': 'Hey, Linlin...',
        'pinyin': 'りんりんちゃん',
        'definition': 'リンリン ちゃん',
        'pinyinSpace': 'リンリン ちゃん'
    },
    '73': {
        'character': '僕頑張るよ！',
        'letter': "I'll do my best!",
        'pinyin': 'ぼくがんばるよ！',
        'definition': '僕 頑張る よ',
        'pinyinSpace': 'ぼく がんばる よ ！'
    },
    '74': {
        'character': 'ママパンダさん立った！',
        'letter': "Mama Panda, you're up!",
        'pinyin': 'ままぱんださんたった！',
        'definition': 'ママ パンダ さん 立った',
        'pinyinSpace': 'ママ パンダ さん たった ！'
    },
    '75': {
        'character': 'すごいわね',
        'letter': "That's great!",
        'pinyin': 'すごいわね',
        'definition': 'すごい わね',
        'pinyinSpace': 'すごい わね'
    },
    '76': {
        'character': 'リンリンちゃん',
        'letter': 'Hey, Linlin.',
        'pinyin': 'りんりんちゃん',
        'definition': 'リンリン ちゃん',
        'pinyinSpace': 'リンリン ちゃん'
    },
    '77': {
        'character': 'いってきます！',
        'letter': "I'm off!",
        'pinyin': 'いってきます！',
        'definition': 'いってきます',
        'pinyinSpace': 'いってきます ！'
    },
    '78': {
        'character': 'もしかしてリンリンちゃん？',
        'letter': 'Is that you, little ringtone?',
        'pinyin': 'もしかしてりんりんちゃん？',
        'definition': 'もしかして リンリン ちゃん',
        'pinyinSpace': 'もしかして リンリン ちゃん ？'
    },
    '79': {
        'character': 'もしもし',
        'letter': 'Hello?',
        'pinyin': 'もしもし',
        'definition': 'もしもし',
        'pinyinSpace': 'もしもし'
    },
    '80': {
        'character': 'リンリンちゃん僕頑張るからね！',
        'letter': "I'll do my best, Lin-Lin!",
        'pinyin': 'りんりんちゃんぼくがんばるからね！',
        'definition': 'リンリン ちゃん 僕 頑張る から ね',
        'pinyinSpace': 'リンリン ちゃん ぼく がんばる から ね ！'
    },
    '81': {
        'character': 'リンリンちゃんが見ててくれるんだから',
        'letter': "I know you're watching over me.",
        'pinyin': 'りんりんちゃんがみててくれるんだから',
        'definition': 'リンリン ちゃん が 見ててくれる ん だから',
        'pinyinSpace': 'リンリン ちゃん が みてて くれる ん だ から'
    },
    '82': {
        'character': 'きっと…あのなかにリンリンちゃんが…',
        'letter': "I'm sure she's in there...",
        'pinyin': 'きっと…あのなかにりんりんちゃんが…',
        'definition': 'きっと あの なか に リンリン ちゃん が',
        'pinyinSpace': 'きっと … あの なか に リンリン ちゃん が …'
    },
    '83': {
        'character': 'ここんとこ張り切ってるなパンダくん',
        'letter': "You've been working so hard lately, panda.",
        'pinyin': 'ここんとこはりきってるなぱんだくん',
        'definition': 'ここんとこ 張り切ってる な パンダ くん',
        'pinyinSpace': 'ここんとこ はりきってる な パンダ くん'
    },
    '84': {
        'character': 'でもどうして？',
        'letter': 'But why?',
        'pinyin': 'でもどうして？',
        'definition': 'でも どうして',
        'pinyinSpace': 'でも どうして ？'
    },
    '85': {
        'character': 'お疲れ様',
        'letter': 'Thanks for your hard work.',
        'pinyin': 'おつかれさま',
        'definition': 'お疲れ様',
        'pinyinSpace': 'おつかれさま'
    },
    '86': {
        'character': '今日常勤パンダさん戻って来たんでしょ？',
        'letter': "You're back full time today, right, Panda?",
        'pinyin': 'きょうじょうきんぱんださんもどってきたんでしょ？',
        'definition': '今日 常勤 パンダ さん 戻って来た ん でしょ',
        'pinyinSpace': 'きょう じょうきん パンダ さん もどってきた ん でしょ ？'
    },
    '87': {
        'character': 'うん',
        'letter': 'Yes, I did.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '88': {
        'character': 'お土産もらった',
        'letter': 'I got you a souvenir.',
        'pinyin': 'おみやげもらった',
        'definition': 'お土産 もらった',
        'pinyinSpace': 'おみやげ もらった'
    },
    '89': {
        'character': 'パンダくん１日も遅刻しなかったんだってね',
        'letter': "I heard you weren't late even for one day.",
        'pinyin': 'ぱんだくん１にちもちこくしなかったんだってね',
        'definition': 'パンダ くん １日 も 遅刻しなかった ん だって ね',
        'pinyinSpace': 'パンダ くん ついたち/いちにち も ちこく しなかった ん だって ね'
    },
    '90': {
        'character': 'すごいじゃない',
        'letter': "That's great.",
        'pinyin': 'すごいじゃない',
        'definition': 'すごい じゃない',
        'pinyinSpace': 'すごい じゃない'
    },
    '91': {
        'character': '大切な人が見ててくれるから',
        'letter': 'Someone important is watching over you.',
        'pinyin': 'たいせつなひとがみててくれるから',
        'definition': '大切な人 が 見ててくれる から',
        'pinyinSpace': 'たいせつなひと が みてて くれる から'
    },
    '92': {
        'character': 'それにしてもなんかすごく疲れてない？',
        'letter': "But still, don't you look tired?",
        'pinyin': 'それにしてもなんかすごくつかれてない？',
        'definition': 'それにしても なんか すごく 疲れてない',
        'pinyinSpace': 'それにしても なんか すごく つかれてない ？'
    },
    '93': {
        'character': 'なんだかあちこちボロボロで汚れてるし',
        'letter': "You're all dirty and torn up.",
        'pinyin': 'なんだかあちこちぼろぼろでよごれてるし',
        'definition': 'なんだか あちこち ボロボロ で 汚れてる し',
        'pinyinSpace': 'なんだか あちこち ボロボロ で よごれてる し'
    },
    '94': {
        'character': '頑張りすぎなんじゃない',
        'letter': "I think you're working too hard.",
        'pinyin': 'がんばりすぎなんじゃない',
        'definition': '頑張り すぎ な ん じゃない',
        'pinyinSpace': 'がんばり すぎ な ん じゃない'
    },
    '95': {
        'character': 'ゆっくり休んだほうがいいと思うよ',
        'letter': 'I think you should get some rest.',
        'pinyin': 'ゆっくりやすんだほうがいいとおもうよ',
        'definition': 'ゆっくり 休んだ ほうがいい と 思う よ',
        'pinyinSpace': 'ゆっくり やすんだ ほうがいい と おもう よ'
    },
    '96': {
        'character': 'うんあの子にこんな格好見せられないし',
        'letter': "I can't let her see me like this.",
        'pinyin': 'うんあのこにこんなかっこうみせられないし',
        'definition': 'うん あの子 に こんな 格好 見せられない し',
        'pinyinSpace': 'うん あのこ に こんな かっこう みせられない し'
    },
    '97': {
        'character': 'あの子？',
        'letter': 'That girl?',
        'pinyin': 'あのこ？',
        'definition': 'あの子',
        'pinyinSpace': 'あのこ ？'
    },
    '98': {
        'character': '今日はもう帰るね',
        'letter': "I'm going home tonight.",
        'pinyin': 'こんにちはもうかえるね',
        'definition': '今日 は もう 帰る ね',
        'pinyinSpace': 'きょう は もう かえる ね'
    },
    '99': {
        'character': 'あ忘れてるよ天津甘栗チョコレート！',
        'letter': 'You forgot... chocolate.',
        'pinyin': 'あわすれてるよてんしんあまぐりちょこれーと！',
        'definition': 'あ 忘れてる よ 天津 甘栗 チョコレート',
        'pinyinSpace': 'あ わすれてる よ てんしん あまぐり チョコレート ！'
    },
    '100': {
        'character': '昨日もステキ今日も頑張ってね',
        'letter': 'Yesterday was great.',
        'pinyin': 'きのうもすてききょうもがんばってね',
        'definition': '昨日 も ステキ 今日 も 頑張って ね',
        'pinyinSpace': 'きのう も ステキ きょう も がんばって ね'
    },
    '101': {
        'character': 'リンリンちゃん１週間僕頑張ったよ',
        'letter': 'I worked hard all week, Linlin.',
        'pinyin': 'りんりんちゃん１しゅうかんぼくがんばったよ',
        'definition': 'リンリン ちゃん １ 週間 僕 頑張った よ',
        'pinyinSpace': 'リンリン ちゃん ワン/いち しゅうかん ぼく がんばった よ'
    },
    '102': {
        'character': '急がなくっちゃ',
        'letter': "I've got to hurry.",
        'pinyin': 'いそがなくっちゃ',
        'definition': '急 が な くっちゃ',
        'pinyinSpace': 'きゅう が な くっちゃ'
    },
    '103': {
        'character': 'リンリンちゃん今日も僕が朝からいるって思ってないかな',
        'letter': "I hope you didn't think I'd be here all morning.",
        'pinyin': 'りんりんちゃんきょうもぼくがあさからいるっておもってないかな',
        'definition': 'リンリン ちゃん 今日 も 僕 が 朝 から いる って 思ってない かな',
        'pinyinSpace': 'リンリン ちゃん きょう も ぼく が あさ から いる って おもってない かな'
    },
    '104': {
        'character': 'すれ違いになったら大変',
        'letter': "We'd be in trouble if we passed each other.",
        'pinyin': 'すれちがいになったらたいへん',
        'definition': 'すれ違い に なったら 大変',
        'pinyinSpace': 'すれちがい に なったら たいへん'
    },
    '105': {
        'character': 'おはようパンダくん',
        'letter': 'Good morning, Panda.',
        'pinyin': 'おはようぱんだくん',
        'definition': 'おはよう パンダ くん',
        'pinyinSpace': 'おはよう パンダ くん'
    },
    '106': {
        'character': 'おはようございます',
        'letter': 'Good morning, Mr. Panda.',
        'pinyin': 'おはようございます',
        'definition': 'おはようございます',
        'pinyinSpace': 'おはようございます'
    },
    '107': {
        'character': '今日から通常勤務じゃないの？',
        'letter': "I thought you'd start your regular work today.",
        'pinyin': 'きょうからつうじょうきんむじゃないの？',
        'definition': '今日 から 通常 勤務 じゃない の',
        'pinyinSpace': 'きょう から つうじょう きんむ じゃない の ？'
    },
    '108': {
        'character': 'えっ？ああ…うん…',
        'letter': 'What? Oh... yeah...',
        'pinyin': 'えっ？ああ…うん…',
        'definition': 'え っ ああ うん',
        'pinyinSpace': 'え っ ？ ああ … うん …'
    },
    '109': {
        'character': 'だよねドキッとしちゃったよ',
        'letter': "I know, I'm so excited.",
        'pinyin': 'だよねどきっとしちゃったよ',
        'definition': 'だよね ドキッとしちゃった よ',
        'pinyinSpace': 'だよね ドキッと しちゃった よ'
    },
    '110': {
        'character': '僕が選んだ花気に入ってくれた？',
        'letter': 'Did you like the flowers I chose?',
        'pinyin': 'ぼくがえらんだはなきにいってくれた？',
        'definition': '僕 が 選んだ 花 気に入ってくれた',
        'pinyinSpace': 'ぼく が えらんだ はな きにいって くれた ？'
    },
    '111': {
        'character': 'えっ？ああリンリンちゃんのお花？大切にしてるよ',
        'letter': 'What? Oh, your flowers? I treasure them.',
        'pinyin': 'えっ？あありんりんちゃんのおはな？たいせつにしてるよ',
        'definition': 'え っ ああ リンリン ちゃん の お 花 大切にしてる よ',
        'pinyinSpace': 'え っ ？ ああ リンリン ちゃん の お はな ？ たいせつにしてる よ'
    },
    '112': {
        'character': 'あっそうだちょっと見せたいものがあるんだ',
        'letter': 'Oh, I want to show you something.',
        'pinyin': 'あっそうだちょっとみせたいものがあるんだ',
        'definition': 'あっそ う だ ちょっと 見せたい ものがある ん だ',
        'pinyinSpace': 'あっそ う だ ちょっと みせたい ものがある ん だ'
    },
    '113': {
        'character': '待ってて',
        'letter': 'Wait here.',
        'pinyin': 'まってて',
        'definition': '待ってて',
        'pinyinSpace': 'まってて'
    },
    '114': {
        'character': 'はい',
        'letter': 'Okay.',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '115': {
        'character': '今日はリンリンちゃん来てないの？',
        'letter': "Isn't Rin-ling here today?",
        'pinyin': 'きょうはりんりんちゃんきてないの？',
        'definition': '今日 は リンリン ちゃん 来てない の',
        'pinyinSpace': 'きょう は リンリン ちゃん きてない の ？'
    },
    '116': {
        'character': 'ああリンリンって僕のことね',
        'letter': "Oh, by 'Ling Ling' you mean me.",
        'pinyin': 'あありんりんってぼくのことね',
        'definition': 'ああ リンリン って 僕 の こと ね',
        'pinyinSpace': 'ああ リンリン って ぼく の こと ね'
    },
    '117': {
        'character': '林厘太郎',
        'letter': 'Rintaro.',
        'pinyin': 'はやしりんたろう',
        'definition': '林 厘 太 郎',
        'pinyinSpace': 'はやし りん ふと ろう'
    },
    '118': {
        'character': 'パンダ大好きなんだ',
        'letter': 'I love pandas.',
        'pinyin': 'ぱんだだいすきなんだ',
        'definition': 'パンダ 大好き な ん だ',
        'pinyinSpace': 'パンダ だいすき な ん だ'
    },
    '119': {
        'character': 'あっパンダくんはその中でも別格だよ',
        'letter': 'Oh, pandas are special among pandas.',
        'pinyin': 'あっぱんだくんはそのなかでもべっかくだよ',
        'definition': 'あっパンダ くん は その中 でも 別格 だ よ',
        'pinyinSpace': 'あっパンダ くん は そのなか でも べっかく だ よ'
    },
    '120': {
        'character': 'リンリンズベストショットはこれ',
        'letter': "Here's my best shot of Rin-Rin.",
        'pinyin': 'りんりんずべすとしょっとはこれ',
        'definition': 'リン リン ズベ スト ショット は これ',
        'pinyinSpace': 'リン リン ズベ スト ショット は これ'
    },
    '121': {
        'character': 'お気に入りだから大きくしてみたんだ',
        'letter': "I made it big because it's my favorite.",
        'pinyin': 'おきにいりだからおおきくしてみたんだ',
        'definition': 'お気に入り だから 大きく して みた ん だ',
        'pinyinSpace': 'おきにいり だ·から おおきく して みた ん だ'
    },
    '122': {
        'character': 'パンダくんにもあげるね',
        'letter': "I'll give it to Mr. Panda too.",
        'pinyin': 'ぱんだくんにもあげるね',
        'definition': 'パンダ くん にも あげる ね',
        'pinyinSpace': 'パンダ くん にも あげる ね'
    },
    '123': {
        'character': 'いらない…',
        'letter': "I don't want it...",
        'pinyin': 'いらない…',
        'definition': 'いらない',
        'pinyinSpace': 'いらない …'
    },
    '124': {
        'character': 'これ返す…',
        'letter': "I'll give it back...",
        'pinyin': 'これかえす…',
        'definition': 'これ 返す',
        'pinyinSpace': 'これ かえす …'
    },
    '125': {
        'character': 'なんで？',
        'letter': 'Why?',
        'pinyin': 'なんで？',
        'definition': 'なんで',
        'pinyinSpace': 'なんで ？'
    },
    '126': {
        'character': 'ウワーン！',
        'letter': 'Oh, no!',
        'pinyin': 'うわーん！',
        'definition': 'ウワーン',
        'pinyinSpace': 'ウワーン ！'
    },
    '127': {
        'character': 'あっパンダくん！',
        'letter': 'Oh, panda!',
        'pinyin': 'あっぱんだくん！',
        'definition': 'あっパンダ くん',
        'pinyinSpace': 'あっパンダ くん ！'
    },
    '128': {
        'character': 'みんなのパフェ',
        'letter': 'Parfaits for everyone!',
        'pinyin': 'みんなのぱふぇ',
        'definition': 'みんな の パフェ',
        'pinyinSpace': 'みんな の パフェ'
    },
    '129': {
        'character': 'こんにちは',
        'letter': 'Hello, there.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '130': {
        'character': 'シロクマくん？',
        'letter': 'Polar bear?',
        'pinyin': 'しろくまくん？',
        'definition': 'シロクマ くん',
        'pinyinSpace': 'シロクマ くん ？'
    },
    '131': {
        'character': 'どうしたの？何か考え事？',
        'letter': "What's wrong? Something on your mind?",
        'pinyin': 'どうしたの？なにかかんがえごと？',
        'definition': 'どうしたの 何か 考え事',
        'pinyinSpace': 'どうしたの ？ なにか かんがえごと ？'
    },
    '132': {
        'character': 'これ',
        'letter': 'Here.',
        'pinyin': 'これ',
        'definition': 'これ',
        'pinyinSpace': 'これ'
    },
    '133': {
        'character': 'おだんご？',
        'letter': 'A dumpling?',
        'pinyin': 'おだんご？',
        'definition': 'お だんご',
        'pinyinSpace': 'お だんご ？'
    },
    '134': {
        'character': 'なんで信号って赤青黄色の３色なのか考えてた',
        'letter': 'I was thinking about why traffic lights are red, blue and yellow.',
        'pinyin': 'なんでしんごうってあかあおきいろの３しょくなのかかんがえてた',
        'definition': 'なんで 信号 って 赤 青 黄色 の ３色 な のか 考えてた',
        'pinyinSpace': 'なんで しんごう って あか あお きいろ の さんしょく な のか かんがえてた'
    },
    '135': {
        'character': 'そうなんだ',
        'letter': 'I see.',
        'pinyin': 'そうなんだ',
        'definition': 'そう なんだ',
        'pinyinSpace': 'そう なんだ'
    },
    '136': {
        'character': '違うよパンダくん',
        'letter': 'No, panda.',
        'pinyin': 'ちがうよぱんだくん',
        'definition': '違う よ パンダ くん',
        'pinyinSpace': 'ちがう よ パンダ くん'
    },
    '137': {
        'character': 'シロクマさんカフェのスペシャルメニューを考えてるんだよ',
        'letter': "I'm thinking of a special menu for the Polar Bear Cafe.",
        'pinyin': 'しろくまさんかふぇのすぺしゃるめにゅーをかんがえてるんだよ',
        'definition': 'シロクマ さん カフェ の スペシャル メニュー を 考えてる ん だ よ',
        'pinyinSpace': 'シロクマ さん カフェ の スペシャル メニュー を かんがえてる ん だ よ'
    },
    '138': {
        'character': 'スペシャルメニュー？',
        'letter': 'Special menu?',
        'pinyin': 'すぺしゃるめにゅー？',
        'definition': 'スペシャル メニュー',
        'pinyinSpace': 'スペシャル メニュー ？'
    },
    '139': {
        'character': 'また実技落とされちゃったよ…!!',
        'letter': "I'm failing my practical again...",
        'pinyin': 'またじつぎおとされちゃったよ...!!',
        'definition': 'また 実技 落とされちゃった よ',
        'pinyinSpace': 'また じつぎ おとされちゃった よ …!!'
    },
    '140': {
        'character': '実技？',
        'letter': 'Practical test?',
        'pinyin': 'じつぎ？',
        'definition': '実技',
        'pinyinSpace': 'じつぎ ？'
    },
    '141': {
        'character': 'ああ自動車教習所ね',
        'letter': 'Oh, the driving school.',
        'pinyin': 'ああじどうしゃきょうしゅうじょね',
        'definition': 'ああ 自動車教習所 ね',
        'pinyinSpace': 'ああ じどうしゃきょうしゅうじょ ね'
    },
    '142': {
        'character': '大体あの教官細かすぎなんだよ！',
        'letter': 'That instructor is way too detailed!',
        'pinyin': 'だいたいあのきょうかんこまかすぎなんだよ！',
        'definition': '大体 あの 教官 細かすぎ なんだ よ',
        'pinyinSpace': 'だいたい あの きょうかん こまかすぎ なんだ よ ！'
    },
    '143': {
        'character': 'どう細かいんですか？',
        'letter': 'How is he too detailed?',
        'pinyin': 'どうこまかいんですか？',
        'definition': 'どう 細かい ん です か',
        'pinyinSpace': 'どう こまかい ん です か ？'
    },
    '144': {
        'character': 'いやねキョロキョロしないでまっすぐ前を見ろ！とか',
        'letter': "Don't look around, look straight ahead! Or something like that.",
        'pinyin': 'いやねきょろきょろしないでまっすぐまえをみろ！とか',
        'definition': 'いや ね キョロキョロしないで まっすぐ 前 を 見ろ とか',
        'pinyinSpace': 'いや ね キョロキョロ しないで まっすぐ ぜん/まえ を みろ ！ とか'
    },
    '145': {
        'character': '慌てすぎるな！とか',
        'letter': "Don't panic too much! or 'Don't be in too much of a hurry!",
        'pinyin': 'あわてすぎるな！とか',
        'definition': '慌て すぎる な とか',
        'pinyinSpace': 'あわて すぎる な ！ とか'
    },
    '146': {
        'character': 'ハンドルを握るときには手をパタパタさせるな！とか',
        'letter': "Don't flap your hands when you steer! and so on.",
        'pinyin': 'はんどるをにぎるときにはてをぱたぱたさせるな！とか',
        'definition': 'ハンドルを握る ときには 手 を パタパタ させる な とか',
        'pinyinSpace': 'ハンドルをにぎる ときには て を パタパタ させる な ！ とか'
    },
    '147': {
        'character': 'それはダメなんじゃないですか？',
        'letter': "Isn't that no good?",
        'pinyin': 'それはだめなんじゃないですか？',
        'definition': 'それは ダメ な ん じゃないです か',
        'pinyinSpace': 'それは ダメ な ん じゃないです か ？'
    },
    '148': {
        'character': 'あの教官のおかげで',
        'letter': 'Thanks to that instructor.',
        'pinyin': 'あのきょうかんのおかげで',
        'definition': 'あの 教官 の おかげで',
        'pinyinSpace': 'あの きょうかん の おかげで'
    },
    '149': {
        'character': 'いつまでたってもペン子さんをドライブデートに誘えないよ',
        'letter': "I'll never be able to ask Penko-san out on a date.",
        'pinyin': 'いつまでたってもぺんごさんをどらいぶでーとにさそえないよ',
        'definition': 'いつまでたっても ペン 子 さん を ドライブ デート に 誘えない よ',
        'pinyinSpace': 'いつまでたっても ペン こ さん を ドライブ デート に さそえない よ'
    },
    '150': {
        'character': 'デート？',
        'letter': 'A date?',
        'pinyin': 'でーと？',
        'definition': 'デート',
        'pinyinSpace': 'デート ？'
    },
    '151': {
        'character': 'それはテント',
        'letter': "That's a tent",
        'pinyin': 'それはてんと',
        'definition': 'それは テント',
        'pinyinSpace': 'それは テント'
    },
    '152': {
        'character': 'それは弁当',
        'letter': "That's a lunch box",
        'pinyin': 'それはべんとう',
        'definition': 'それは 弁当',
        'pinyinSpace': 'それは べんとう'
    },
    '153': {
        'character': 'それは電灯',
        'letter': "That's a light.",
        'pinyin': 'それはでんとう',
        'definition': 'それは 電灯',
        'pinyinSpace': 'それは でんとう'
    },
    '154': {
        'character': 'それは剣道',
        'letter': "That's kendo.",
        'pinyin': 'それはけんどう',
        'definition': 'それは 剣道',
        'pinyinSpace': 'それは けんどう'
    },
    '155': {
        'character': 'デートだってば！！',
        'letter': "It's a date!",
        'pinyin': 'でーとだってば！！',
        'definition': 'デート だ ってば',
        'pinyinSpace': 'デート だ ってば ！！'
    },
    '156': {
        'character': 'どうやったら彼女のハートを射止めることができるんだろう？',
        'letter': 'How can I win her heart?',
        'pinyin': 'どうやったらかのじょのはーとをいとめることができるんだろう？',
        'definition': 'どうやったら 彼女 の ハート を 射止める ことができる ん だろう',
        'pinyinSpace': 'どうやったら かのじょ の ハート を いとめる ことができる ん だろう ？'
    },
    '157': {
        'character': '射止める…',
        'letter': 'Win her heart...',
        'pinyin': 'いとめる…',
        'definition': '射止める',
        'pinyinSpace': 'いとめる …'
    },
    '158': {
        'character': 'シロクマくんならどうする？',
        'letter': 'What would you do, Polar Bear?',
        'pinyin': 'しろくまくんならどうする？',
        'definition': 'シロクマ くん なら どう する',
        'pinyinSpace': 'シロクマ くん なら どう する ？'
    },
    '159': {
        'character': '待つ',
        'letter': 'Wait.',
        'pinyin': 'まつ',
        'definition': '待つ',
        'pinyinSpace': 'まつ'
    },
    '160': {
        'character': '待つの？',
        'letter': 'Wait?',
        'pinyin': 'まつの？',
        'definition': '待つ の',
        'pinyinSpace': 'まつ の ？'
    },
    '161': {
        'character': 'うんひたすら待つね',
        'letter': "Yeah, I'd just wait and wait.",
        'pinyin': 'うんひたすらまつね',
        'definition': 'うん ひたすら 待つ ね',
        'pinyinSpace': 'うん ひたすら まつ ね'
    },
    '162': {
        'character': 'へえ～っなんか大人だね',
        'letter': "Wow, you're so mature.",
        'pinyin': 'へえ～っなんかおとなだね',
        'definition': 'へ え っな ん か 大人 だ ね',
        'pinyinSpace': 'へ え ～ っな ん か おとな だ ね'
    },
    '163': {
        'character': 'そうこれができないと大人になれない',
        'letter': "If you can't do this, you can't be an adult.",
        'pinyin': 'そうこれができないとおとなになれない',
        'definition': 'そう これ が できない と 大人になれない',
        'pinyinSpace': 'そう これ が できない と おとなになれない'
    },
    '164': {
        'character': 'なれない？',
        'letter': "You can't?",
        'pinyin': 'なれない？',
        'definition': 'なれない',
        'pinyinSpace': 'なれない ？'
    },
    '165': {
        'character': 'ひたすら待って待って待って',
        'letter': 'Just wait and wait and wait.',
        'pinyin': 'ひたすらまってまってまって',
        'definition': 'ひたすら 待って 待って 待って',
        'pinyinSpace': 'ひたすら まって まって まって'
    },
    '166': {
        'character': '出てきたところを…',
        'letter': 'Wait, wait, wait, wait, wait, wait, wait, wait.',
        'pinyin': 'でてきたところを…',
        'definition': '出てきた ところを',
        'pinyinSpace': 'でてきた ところ·を …'
    },
    '167': {
        'character': '射止めてないよ！それじゃ仕留めちゃうよ！',
        'letter': "I didn't shoot him! You're gonna get him!",
        'pinyin': 'いとめてないよ！それじゃしとめちゃうよ！',
        'definition': '射止めてない よ それ じゃ 仕留めちゃう よ',
        'pinyinSpace': 'いとめてない よ ！ それ じゃ しとめちゃう よ ！'
    },
    '168': {
        'character': 'シロクマくんちゃんと考えてよ！',
        'letter': "Polar bear, you've got to think!",
        'pinyin': 'しろくまくんちゃんとかんがえてよ！',
        'definition': 'シロクマ くん ちゃんと 考えて よ',
        'pinyinSpace': 'シロクマ くん ちゃんと かんがえて よ ！'
    },
    '169': {
        'character': 'ペンギンさん見てて思ったんだけど…',
        'letter': 'I was just looking at the penguins and I thought...',
        'pinyin': 'ぺんぎんさんみてておもったんだけど…',
        'definition': 'ペンギン さん 見てて 思った ん だけど',
        'pinyinSpace': 'ペンギン さん みてて おもった ん だけど …'
    },
    '170': {
        'character': 'えっ何？',
        'letter': 'What?',
        'pinyin': 'えっなに？',
        'definition': 'え っ 何',
        'pinyinSpace': 'え っ なに/なん ？'
    },
    '171': {
        'character': '笹子さんパフェフェアーはどうかな？',
        'letter': 'Sasago, how about a parfait?',
        'pinyin': 'ささごさんぱふぇふぇあーはどうかな？',
        'definition': '笹 子 さん パフェ フェアー は どうかな',
        'pinyinSpace': 'ささ こ さん パフェ フェアー は どうかな ？'
    },
    '172': {
        'character': 'パフェですかいいですね',
        'letter': 'Parfait? That sounds good!',
        'pinyin': 'ぱふぇですかいいですね',
        'definition': 'パフェ です か いいです ね',
        'pinyinSpace': 'パフェ です か いいです ね'
    },
    '173': {
        'character': '何それ？デートと全然関係ないよね',
        'letter': "What's that? It has nothing to do with the date.",
        'pinyin': 'なにそれ？でーととぜんぜんかんけいないよね',
        'definition': '何それ デート と 全然 関係ない よね',
        'pinyinSpace': 'なにそれ ？ デート と ぜんぜん かんけいない よね'
    },
    '174': {
        'character': 'どこをどうすればそうなるの？',
        'letter': 'How can it be?',
        'pinyin': 'どこをどうすればそうなるの？',
        'definition': 'どこをどう すれば そう なる の',
        'pinyinSpace': 'どこをどう すれば そう なる の ？'
    },
    '175': {
        'character': 'さっきまでスペシャルメニューの話をしてたんですけど',
        'letter': 'We were talking about the special menu earlier.',
        'pinyin': 'さっきまですぺしゃるめにゅーのはなしをしてたんですけど',
        'definition': 'さっき まで スペシャル メニュー の 話をしてた ん です けど',
        'pinyinSpace': 'さっき まで スペシャル メニュー の はなしをしてた ん です けど'
    },
    '176': {
        'character': 'なかなか決まらなくて',
        'letter': "But we couldn't decide on anything.",
        'pinyin': 'なかなかきまらなくて',
        'definition': 'なかなか 決まらなくて',
        'pinyinSpace': 'なかなか きまらなくて'
    },
    '177': {
        'character': 'スペシャルメニューでパフェ？',
        'letter': 'Parfaits on the special menu?',
        'pinyin': 'すぺしゃるめにゅーでぱふぇ？',
        'definition': 'スペシャル メニュー で パフェ',
        'pinyinSpace': 'スペシャル メニュー で パフェ ？'
    },
    '178': {
        'character': '僕パフェ好き',
        'letter': 'I like parfaits.',
        'pinyin': 'ぼくぱふぇずき',
        'definition': '僕 パフェ 好き',
        'pinyinSpace': 'ぼく パフェ すき'
    },
    '179': {
        'character': 'パフェはいいですけど',
        'letter': 'Parfait is fine.',
        'pinyin': 'ぱふぇはいいですけど',
        'definition': 'パフェ は いいです けど',
        'pinyinSpace': 'パフェ は いいです けど'
    },
    '180': {
        'character': 'パフェフェアーってなんか言いづらいですよね',
        'letter': "But 'parfait' is hard to say, isn't it?",
        'pinyin': 'ぱふぇふぇあーってなんかいいづらいですよね',
        'definition': 'パフェ フェアー って なんか 言いづらいです よね',
        'pinyinSpace': 'パフェ フェアー って なんか いいづらいです よね'
    },
    '181': {
        'character': 'いや全然大丈夫',
        'letter': "No, it's totally fine.",
        'pinyin': 'いやぜんぜんだいじょうぶ',
        'definition': 'いや 全然 大丈夫',
        'pinyinSpace': 'いや ぜんぜん だいじょうぶ'
    },
    '182': {
        'character': 'よし決まり',
        'letter': "Okay, it's decided!",
        'pinyin': 'よしきまり',
        'definition': 'よし 決まり',
        'pinyinSpace': 'よし きまり'
    },
    '183': {
        'character': 'パヘヘアーにしよう',
        'letter': "Let's say 'parfait hair.",
        'pinyin': 'ぱへへあーにしよう',
        'definition': 'パヘ ヘアー に しよう',
        'pinyinSpace': 'パヘ ヘアー に しよう'
    },
    '184': {
        'character': '言えてないよね',
        'letter': "You didn't say it!",
        'pinyin': 'いえてないよね',
        'definition': '言えてない よね',
        'pinyinSpace': 'いえてない よね'
    },
    '185': {
        'character': 'イチゴパフェバナナパフェチョコパフェ',
        'letter': 'Strawberry parfait, banana parfait, chocolate parfait...',
        'pinyin': 'いちごぱふぇばななぱふぇちょこぱふぇ',
        'definition': 'イチゴ パフェ バナナ パフェ チョコ パフェ',
        'pinyinSpace': 'イチゴ パフェ バナナ パフェ チョコ パフェ'
    },
    '186': {
        'character': '間違いはないけどフェアなのに定番だけじゃつまらない',
        'letter': "I'm sure there's no mistake, but it's a fair, and it's boring to just have the standard stuff.",
        'pinyin': 'まちがいはないけどふぇあなのにていばんだけじゃつまらない',
        'definition': '間違い は ない けど フェア な のに 定番 だけ じゃ つまらない',
        'pinyinSpace': 'まちがい は ない けど フェア な のに ていばん だけ じゃ つまらない'
    },
    '187': {
        'character': 'う～んスペシャルなパフェか',
        'letter': 'A special parfait...',
        'pinyin': 'う～んすぺしゃるなぱふぇか',
        'definition': 'う ん スペシャル な パフェ か',
        'pinyinSpace': 'う ～ ん スペシャル な パフェ か'
    },
    '188': {
        'character': 'シロクマさん',
        'letter': 'Polar bear!',
        'pinyin': 'しろくまさん',
        'definition': 'シロクマ さん',
        'pinyinSpace': 'シロクマ さん'
    },
    '189': {
        'character': 'パフェフェアー',
        'letter': "You do parfait fairs, don't you?",
        'pinyin': 'ぱふぇふぇあー',
        'definition': 'パフェ フェアー',
        'pinyinSpace': 'パフェ フェアー'
    },
    '190': {
        'character': 'をするんですよね？メニューは決まりましたか？',
        'letter': "You're having a parfait fair, right? Have you decided on the menu?",
        'pinyin': 'をするんですよね？めにゅーはきまりましたか？',
        'definition': 'を する ん です よね メニュー は 決まりました か',
        'pinyinSpace': 'を する ん です よね ？ メニュー は きまりました か ？'
    },
    '191': {
        'character': '今検討中',
        'letter': "I'm thinking about it now.",
        'pinyin': 'いまけんとうちゅう',
        'definition': '今 検討中',
        'pinyinSpace': 'いま けんとうちゅう'
    },
    '192': {
        'character': 'だったらマンドリルパフェはどうですか？',
        'letter': 'Then how about a mandoril parfait?',
        'pinyin': 'だったらまんどりるぱふぇはどうですか？',
        'definition': 'だったら マンドリル パフェ は どう です か',
        'pinyinSpace': 'だったら マンドリル パフェ は どう です か ？'
    },
    '193': {
        'character': 'それ何？',
        'letter': "What's that?",
        'pinyin': 'それなに？',
        'definition': 'それ 何',
        'pinyinSpace': 'それ なに/なん ？'
    },
    '194': {
        'character': 'マンドリルなパフェです',
        'letter': "It's a mandrill parfait!",
        'pinyin': 'まんどりるなぱふぇです',
        'definition': 'マンドリル な パフェ です',
        'pinyinSpace': 'マンドリル な パフェ です'
    },
    '195': {
        'character': 'それはもうすごい迫力なんです！',
        'letter': "It's so powerful!",
        'pinyin': 'それはもうすごいはくりょくなんです！',
        'definition': 'それは もう すごい 迫力 なんです',
        'pinyinSpace': 'それは もう すごい はくりょく なんです ！'
    },
    '196': {
        'character': 'パフェに迫力はいらないかな',
        'letter': "I don't think parfaits need to be powerful.",
        'pinyin': 'ぱふぇにはくりょくはいらないかな',
        'definition': 'パフェ に 迫力 は いらない かな',
        'pinyinSpace': 'パフェ に はくりょく は いらない かな'
    },
    '197': {
        'character': 'う～んスペシャルなパフェね',
        'letter': 'A very special parfait!',
        'pinyin': 'う～んすぺしゃるなぱふぇね',
        'definition': 'う ん スペシャル な パフェ ね',
        'pinyinSpace': 'う ～ ん スペシャル な パフェ ね'
    },
    '198': {
        'character': 'シロクマさんじゃないですか',
        'letter': "Isn't that a polar bear?",
        'pinyin': 'しろくまさんじゃないですか',
        'definition': 'シロクマ さん じゃないです か',
        'pinyinSpace': 'シロクマ さん じゃないです か'
    },
    '199': {
        'character': 'ああラマさん',
        'letter': 'Llama!',
        'pinyin': 'ああらまさん',
        'definition': 'ああ ラマ さん',
        'pinyinSpace': 'ああ ラマ さん'
    },
    '200': {
        'character': 'こんにちは',
        'letter': 'Hello, Mr. Llama.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '201': {
        'character': '聞きましたよ',
        'letter': 'I heard.',
        'pinyin': 'ききましたよ',
        'definition': '聞きました よ',
        'pinyinSpace': 'ききました よ'
    },
    '202': {
        'character': '何を？',
        'letter': 'Heard what?',
        'pinyin': 'なにを？',
        'definition': '何 を',
        'pinyinSpace': 'なに を ？'
    },
    '203': {
        'character': 'パフェフェアーをやるんですよね？',
        'letter': "You're having a parfait event, aren't you?",
        'pinyin': 'ぱふぇふぇあーをやるんですよね？',
        'definition': 'パフェ フェアー を やる ん です よね',
        'pinyinSpace': 'パフェ フェアー を やる ん です よね ？'
    },
    '204': {
        'character': 'ステキなパフェを思いついたんですよ',
        'letter': 'I came up with a great idea for a parfait.',
        'pinyin': 'すてきなぱふぇをおもいついたんですよ',
        'definition': 'ステキ な パフェ を 思いついた ん です よ',
        'pinyinSpace': 'ステキ な パフェ を おもいついた ん です よ'
    },
    '205': {
        'character': 'パフェなのにとってもヘルシーなんです',
        'letter': "It's a parfait, but it's healthy.",
        'pinyin': 'ぱふぇなのにとってもへるしーなんです',
        'definition': 'パフェ な の にとって も ヘルシー なんです',
        'pinyinSpace': 'パフェ な の にとって も ヘルシー なんです'
    },
    '206': {
        'character': 'いいねどんなの？',
        'letter': 'What kind of parfait?',
        'pinyin': 'いいねどんなの？',
        'definition': 'いいね どんな の',
        'pinyinSpace': 'いいね どんな の ？'
    },
    '207': {
        'character': '自信作ですよ',
        'letter': "I'm very proud of it!",
        'pinyin': 'じしんさくですよ',
        'definition': '自信作 です よ',
        'pinyinSpace': 'じしんさく です よ'
    },
    '208': {
        'character': '草大盛りパフェです',
        'letter': "It's a parfait with a big bowl of grass!",
        'pinyin': 'くさおおもりぱふぇです',
        'definition': '草 大盛り パフェ です',
        'pinyinSpace': 'くさ おおもり パフェ です'
    },
    '209': {
        'character': 'どんなパフェかというとですね',
        'letter': 'What kind of parfait is it?',
        'pinyin': 'どんなぱふぇかというとですね',
        'definition': 'どんな パフェ か というと です ね',
        'pinyinSpace': 'どんな パフェ か というと です ね'
    },
    '210': {
        'character': 'お皿の上に草がのっていてですね',
        'letter': "It's a plate with grass on it.",
        'pinyin': 'おさらのうえにくさがのっていてですね',
        'definition': 'お皿 の 上 に 草 が のっていて です ね',
        'pinyinSpace': 'おさら の うえ/かみ/じょう に くさ が のっていて です ね'
    },
    '211': {
        'character': 'お皿？',
        'letter': 'A plate?',
        'pinyin': 'おさら？',
        'definition': 'お皿',
        'pinyinSpace': 'おさら ？'
    },
    '212': {
        'character': 'その上に水煮の草がのっていていてですね',
        'letter': 'On top of that, there is boiled grass!',
        'pinyin': 'そのうえにみずにのくさがのっていていてですね',
        'definition': 'その上 に 水煮 の 草 が の って いていて です ね',
        'pinyinSpace': 'そのかみ に みずに の くさ が の って いていて です ね'
    },
    '213': {
        'character': '更にその上に覆いかぶさるように産地直送の草がのるんです',
        'letter': "And on top of that, there's grass directly from the farm!",
        'pinyin': 'さらにそのうえにおおいかぶさるようにさんちちょくそうのくさがのるんです',
        'definition': '更に その上 に 覆いかぶさる ように 産地直送 の 草 が のる ん です',
        'pinyinSpace': 'さらに そのかみ に おおいかぶさる ように さんちちょくそう の くさ が のる ん です'
    },
    '214': {
        'character': 'いやそれすでにパフェじゃないしどっちかっていうとサラダかな',
        'letter': "No, it's not a parfait, it's more like a salad!",
        'pinyin': 'いやそれすでにぱふぇじゃないしどっちかっていうとさらだかな',
        'definition': 'いや それ すでに パフェ じゃない し どっち か っていう と サラダ かな',
        'pinyinSpace': 'いや それ すでに パフェ じゃない し どっち か っていう と サラダ かな'
    },
    '215': {
        'character': 'う～んスペシャルなパフェ…',
        'letter': 'A special parfait...',
        'pinyin': 'う～んすぺしゃるなぱふぇ…',
        'definition': 'う ん スペシャル な パフェ',
        'pinyinSpace': 'う ～ ん スペシャル な パフェ …'
    },
    '216': {
        'character': 'シロクマさ～んここです！',
        'letter': 'Polar bear!',
        'pinyin': 'しろくまさ～んここです！',
        'definition': 'シロクマ さ ん ここ です',
        'pinyinSpace': 'シロクマ さ ～ ん ここ です ！'
    },
    '217': {
        'character': '待って～！',
        'letter': "Wait~! I'll be right back!",
        'pinyin': 'まって～！',
        'definition': '待って',
        'pinyinSpace': 'まって ～！'
    },
    '218': {
        'character': 'は…話があるから…',
        'letter': 'I need to talk to you...',
        'pinyin': 'は…はなしがあるから…',
        'definition': 'は 話 が ある から',
        'pinyinSpace': 'は … はなし が ある から …'
    },
    '219': {
        'character': 'どうしたの？ゾウガメさん',
        'letter': "What's wrong? Mr. Elephant Turtle!",
        'pinyin': 'どうしたの？ぞうがめさん',
        'definition': 'どうしたの ゾウガメ さん',
        'pinyinSpace': 'どうしたの ？ ゾウガメ さん'
    },
    '220': {
        'character': 'パフェ…フェ…',
        'letter': 'Parfait... fe...',
        'pinyin': 'ぱふぇ…ふぇ…',
        'definition': 'パフェ フェ',
        'pinyinSpace': 'パフェ … フェ …'
    },
    '221': {
        'character': 'パフェフェアー？',
        'letter': 'Parfait?',
        'pinyin': 'ぱふぇふぇあー？',
        'definition': 'パフェ フェアー',
        'pinyinSpace': 'パフェ フェアー ？'
    },
    '222': {
        'character': '甲羅パフェは？',
        'letter': 'Shell parfait?',
        'pinyin': 'こうらぱふぇは？',
        'definition': '甲羅 パフェ は',
        'pinyinSpace': 'こうら パフェ は ？'
    },
    '223': {
        'character': '甲羅パフェ？',
        'letter': 'Shell parfait?',
        'pinyin': 'こうらぱふぇ？',
        'definition': '甲羅 パフェ',
        'pinyinSpace': 'こうら パフェ ？'
    },
    '224': {
        'character': '食べづらいかな',
        'letter': 'Is it hard to eat?',
        'pinyin': 'たべづらいかな',
        'definition': '食べ づらい かな',
        'pinyinSpace': 'たべ づらい かな'
    },
    '225': {
        'character': 'う～んスペシャルなパフェ…',
        'letter': 'Special parfait...',
        'pinyin': 'う～んすぺしゃるなぱふぇ…',
        'definition': 'う ん スペシャル な パフェ',
        'pinyinSpace': 'う ～ ん スペシャル な パフェ …'
    },
    '226': {
        'character': '何がいいかな？',
        'letter': 'What would you like?',
        'pinyin': 'なにがいいかな？',
        'definition': '何 が いい かな',
        'pinyinSpace': 'なに が いい かな ？'
    },
    '227': {
        'character': 'シロクマさん！',
        'letter': 'Polar bear!',
        'pinyin': 'しろくまさん！',
        'definition': 'シロクマ さん',
        'pinyinSpace': 'シロクマ さん ！'
    },
    '228': {
        'character': 'あっ！コアリクイくん',
        'letter': 'Ah! A core-eater!',
        'pinyin': 'あっ！こありくいくん',
        'definition': 'あっ コ アリクイ くん',
        'pinyinSpace': 'あっ ！ コ アリクイ くん'
    },
    '229': {
        'character': 'すごいパフェを…',
        'letter': "I've come up with an amazing parfait...",
        'pinyin': 'すごいぱふぇを…',
        'definition': 'すごい パフェ を',
        'pinyinSpace': 'すごい パフェ を …'
    },
    '230': {
        'character': 'すごいパフェを考えました',
        'letter': "I've come up with an amazing parfait!",
        'pinyin': 'すごいぱふぇをかんがえました',
        'definition': 'すごい パフェ を 考えました',
        'pinyinSpace': 'すごい パフェ を かんがえました'
    },
    '231': {
        'character': 'どんなパフェ？',
        'letter': 'What kind of parfait?',
        'pinyin': 'どんなぱふぇ？',
        'definition': 'どんな パフェ',
        'pinyinSpace': 'どんな パフェ ？'
    },
    '232': {
        'character': 'それはもうすごいトッピングで！',
        'letter': 'With amazing toppings!',
        'pinyin': 'それはもうすごいとっぴんぐで！',
        'definition': 'それは もう すごい トッピング で',
        'pinyinSpace': 'それは もう すごい トッピング で ！'
    },
    '233': {
        'character': 'ビジュアルは黒ゴマ的ですが…',
        'letter': 'It looks like a black sesame seed...',
        'pinyin': 'びじゅあるはくろごまてきですが…',
        'definition': 'ビジュアル は 黒ゴマ 的 ですが',
        'pinyinSpace': 'ビジュアル は くろゴマ てき/まと ですが …'
    },
    '234': {
        'character': 'すごくうごめいている！',
        'letter': "It's very moaning!",
        'pinyin': 'すごくうごめいている！',
        'definition': 'すごく うごめいている',
        'pinyinSpace': 'すごく うごめいている ！'
    },
    '235': {
        'character': 'いやそれはいいかな',
        'letter': "No, that's okay.",
        'pinyin': 'いやそれはいいかな',
        'definition': 'いや それは いい かな',
        'pinyinSpace': 'いや それは いい かな'
    },
    '236': {
        'character': 'だからめちゃくちゃ生き生きとうごめいている黒ゴマ的トッピングの…',
        'letter': 'So lively and lively with black sesame-like toppings...',
        'pinyin': 'だからめちゃくちゃいきいきとうごめいているくろごまてきとっぴんぐの…',
        'definition': 'だから めちゃくちゃ 生き生き と うごめいている 黒ゴマ 的 トッピング の',
        'pinyinSpace': 'だ·から めちゃくちゃ いきいき と うごめいている くろゴマ てき/まと トッピング の …'
    },
    '237': {
        'character': 'う～ん和のテイストもいいけど…',
        'letter': 'I like the Japanese taste, but...',
        'pinyin': 'う～んわのていすともいいけど…',
        'definition': 'う ん 和 の テイスト も いい けど',
        'pinyinSpace': 'う ～ ん わ の テイスト も いい けど …'
    },
    '238': {
        'character': 'どうしたの？シロクマくん',
        'letter': "What's wrong? Polar bear!",
        'pinyin': 'どうしたの？しろくまくん',
        'definition': 'どうしたの シロクマ くん',
        'pinyinSpace': 'どうしたの ？ シロクマ くん'
    },
    '239': {
        'character': '早くパフェフェアーのメニュー考えないとみんなが暴走してるから',
        'letter': "We need to think of a menu for the parfait event, otherwise everyone's going to run out of control.",
        'pinyin': 'はやくぱふぇふぇあーのめにゅーかんがえないとみんながぼうそうしてるから',
        'definition': '早く パフェ フェアー の メニュー 考えない と みんな が 暴走してる から',
        'pinyinSpace': 'はやく パフェ フェアー の メニュー かんがえない と みんな が ぼうそう してる から'
    },
    '240': {
        'character': '暴走?',
        'letter': 'Runaway? (;P-please!)!',
        'pinyin': 'ぼうそう?',
        'definition': '暴走',
        'pinyinSpace': 'ぼうそう ?'
    },
    '241': {
        'character': 'スペシャルメニューだけにみんな結構楽しみにしてるんだね',
        'letter': "Everyone's looking forward to the special menu, huh?",
        'pinyin': 'すぺしゃるめにゅーだけにみんなけっこうたのしみにしてるんだね',
        'definition': 'スペシャル メニュー だけ に みんな 結構 楽しみにしてる ん だ ね',
        'pinyinSpace': 'スペシャル メニュー だけ に みんな けっこう たのしみにしてる ん だ ね'
    },
    '242': {
        'character': 'はいは～い！僕にいいアイディア',
        'letter': 'Yes, yes! I have a great idea!',
        'pinyin': 'はいは～い！ぼくにいいあいでぃあ',
        'definition': 'はい は い 僕 に いい アイディア',
        'pinyinSpace': 'はい は ～ い ！ ぼく に いい アイディア'
    },
    '243': {
        'character': 'はい',
        'letter': 'Here you go!',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '244': {
        'character': 'これこれ！竹パフェ',
        'letter': 'This is it! Bamboo parfait!',
        'pinyin': 'これこれ！たけぱふぇ',
        'definition': 'これこれ 竹 パフェ',
        'pinyinSpace': 'これこれ ！ たけ パフェ'
    },
    '245': {
        'character': 'パンダくんに聞いて作ってみました',
        'letter': 'I made it after asking Mr. Panda!',
        'pinyin': 'ぱんだくんにきいてつくってみました',
        'definition': 'パンダ くん に 聞いて 作って みました',
        'pinyinSpace': 'パンダ くん に きいて つくって みました'
    },
    '246': {
        'character': 'すごいでしょ？',
        'letter': "Isn't it amazing?",
        'pinyin': 'すごいでしょ？',
        'definition': 'すごい でしょ',
        'pinyinSpace': 'すごい でしょ ？'
    },
    '247': {
        'character': '竹ゼリーに笹クリームをのせて新鮮な笹とタケノコをトッピングした上に',
        'letter': 'Bamboo jelly topped with bamboo cream and fresh bamboo grass and bamboo shoots.',
        'pinyin': 'たけぜりーにささくりーむをのせてしんせんなささとたけのこをとっぴんぐしたうえに',
        'definition': '竹 ゼリー に 笹 クリーム を のせて 新鮮 な 笹 と タケノコ を トッピングした 上 に',
        'pinyinSpace': 'たけ ゼリー に ささ クリーム を のせて しんせん な ささ と タケノコ を トッピング した うえ/かみ/じょう に'
    },
    '248': {
        'character': '刻んだ竹がいっぱいのっかってるの',
        'letter': 'topped with fresh bamboo grass and bamboo shoots!',
        'pinyin': 'きざんだたけがいっぱいのっかってるの',
        'definition': '刻んだ 竹 が いっぱい のっかってる の',
        'pinyinSpace': 'きざんだ たけ が いっぱい のっかってる の'
    },
    '249': {
        'character': 'すごく緑色なパフェだね',
        'letter': "It's a very green parfait!",
        'pinyin': 'すごくみどりいろなぱふぇだね',
        'definition': 'すごく 緑色 な パフェ だ ね',
        'pinyinSpace': 'すごく みどりいろ な パフェ だ ね'
    },
    '250': {
        'character': 'パンダくん以外食べないかも',
        'letter': 'Only Mr. Panda would eat it!',
        'pinyin': 'ぱんだくんいがいたべないかも',
        'definition': 'パンダ くん 以外 食べない かも',
        'pinyinSpace': 'パンダ くん いがい たべない かも'
    },
    '251': {
        'character': 'そう？こんなにおいしそうなのに？',
        'letter': 'Is that so? Even though it looks so delicious?',
        'pinyin': 'そう？こんなにおいしそうなのに？',
        'definition': 'そう こんなに おいしそう な のに',
        'pinyinSpace': 'そう ？ こんなに おいしそう な のに ？'
    },
    '252': {
        'character': '刻んだ竹が口に刺さりそうだよ',
        'letter': 'The chopped bamboo is sticking in my mouth!',
        'pinyin': 'きざんだたけがくちにささりそうだよ',
        'definition': '刻んだ 竹 が 口 に 刺さりそう だ よ',
        'pinyinSpace': 'きざんだ たけ が くち に ささりそう だ よ'
    },
    '253': {
        'character': 'パンダくん…パフェって言えばなんでもパフェだと思ってるでしょ',
        'letter': 'Panda... you think anything that says parfait is parfait.',
        'pinyin': 'ぱんだくん…ぱふぇっていえばなんでもぱふぇだとおもってるでしょ',
        'definition': 'パンダ くん パフェ って 言えば なんでも パフェ だ と 思ってる でしょ',
        'pinyinSpace': 'パンダ くん … パフェ って いえば なんでも パフェ だ と おもってる でしょ'
    },
    '254': {
        'character': '任せておけないよ',
        'letter': "I won't leave it to you.",
        'pinyin': 'まかせておけないよ',
        'definition': '任せておけない よ',
        'pinyinSpace': 'まかせておけない よ'
    },
    '255': {
        'character': 'よしここは僕のアイディアを…',
        'letter': "Okay, here's my idea...",
        'pinyin': 'よしここはぼくのあいでぃあを…',
        'definition': 'よし ここ は 僕 の アイディア を',
        'pinyinSpace': 'よし ここ は ぼく の アイディア を …'
    },
    '256': {
        'character': 'イワシパフェ',
        'letter': 'Sardine parfait.',
        'pinyin': 'いわしぱふぇ',
        'definition': 'イワシ パフェ',
        'pinyinSpace': 'イワシ パフェ'
    },
    '257': {
        'character': 'ＤＨＡたっぷり頭もよくなる',
        'letter': "Full of DHA... and it'll make you smarter.",
        'pinyin': 'ＤＨＡたっぷりあたまもよくなる',
        'definition': 'たっぷり 頭 も よくなる',
        'pinyinSpace': 'ＤＨＡ たっぷり あたま も よくなる'
    },
    '258': {
        'character': 'ダメ？',
        'letter': 'No?',
        'pinyin': 'だめ？',
        'definition': 'ダメ',
        'pinyinSpace': 'ダメ ？'
    },
    '259': {
        'character': 'じゃあ今からだと旬なアジとかでもいいと思うよ',
        'letter': "Well, I think we could try some horse mackerels. They're in season now.",
        'pinyin': 'じゃあいまからだとしゅんなあじとかでもいいとおもうよ',
        'definition': 'じゃあ 今から だ と 旬 な アジ とか でもいい と 思う よ',
        'pinyinSpace': 'じゃあ いまから だ と しゅん な アジ とか で もいい と おもう よ'
    },
    '260': {
        'character': '魚から離れようよ',
        'letter': "Let's get away from the fish.",
        'pinyin': 'さかなからはなれようよ',
        'definition': '魚 から 離れよう よ',
        'pinyinSpace': 'さかな から はなれよう よ'
    },
    '261': {
        'character': 'なんていうかそれパフェっていうより…',
        'letter': "That's not really a parfait, it's more like...",
        'pinyin': 'なんていうかそれぱふぇっていうより…',
        'definition': 'なん ていうか それ パフェ っていう より',
        'pinyinSpace': 'なん ていうか それ パフェ っていう より …'
    },
    '262': {
        'character': 'オシャレなお刺身？',
        'letter': 'Stylish sashimi?',
        'pinyin': 'おしゃれなおさしみ？',
        'definition': 'オシャレ な お 刺身',
        'pinyinSpace': 'オシャレ な お さしみ ？'
    },
    '263': {
        'character': 'あっ！こういうのはどうでしょうか？',
        'letter': 'Ah! How about this?',
        'pinyin': 'あっ！こういうのはどうでしょうか？',
        'definition': 'あっ こういう の は どう でしょうか',
        'pinyinSpace': 'あっ ！ こういう の は どう でしょうか ？'
    },
    '264': {
        'character': 'パンダパフェ',
        'letter': 'Panda Parfait',
        'pinyin': 'ぱんだぱふぇ',
        'definition': 'パンダ パフェ',
        'pinyinSpace': 'パンダ パフェ'
    },
    '265': {
        'character': 'パンダの頭はバニラアイスで耳や顔はチョコレートです',
        'letter': "The panda's head is vanilla ice cream, and its ears and face are chocolate!",
        'pinyin': 'ぱんだのあたまはばにらあいすでみみやかおはちょこれーとです',
        'definition': 'パンダ の 頭 は バニラ アイス で 耳 や 顔 は チョコレート です',
        'pinyinSpace': 'パンダ の あたま は バニラ アイス で みみ や かお は チョコレート です'
    },
    '266': {
        'character': 'わぁ～！パフェになってもパンダってやっぱりかわいいね',
        'letter': 'Wow! Pandas are so cute even as parfaits!',
        'pinyin': 'わぁ～！ぱふぇになってもぱんだってやっぱりかわいいね',
        'definition': 'わぁ パフェ に なっても パンダ って やっぱり かわいい ね',
        'pinyinSpace': 'わぁ ～！ パフェ に なっても パンダ って やっぱり かわいい ね'
    },
    '267': {
        'character': 'クマクマパフェ',
        'letter': 'Kumakuma Parfait',
        'pinyin': 'くまくまぱふぇ',
        'definition': 'クマ クマ パフェ',
        'pinyinSpace': 'クマ クマ パフェ'
    },
    '268': {
        'character': 'バニラとコーヒーアイスで作ってみました',
        'letter': 'I made it with vanilla and coffee ice cream!',
        'pinyin': 'ばにらとこーひーあいすでつくってみました',
        'definition': 'バニラ と コーヒー アイス で 作って みました',
        'pinyinSpace': 'バニラ と コーヒー アイス で つくって みました'
    },
    '269': {
        'character': 'いいね！',
        'letter': 'So good!',
        'pinyin': 'いいね！',
        'definition': 'いいね',
        'pinyinSpace': 'いいね ！'
    },
    '270': {
        'character': '南極パフェ',
        'letter': 'Antarctic Parfait',
        'pinyin': 'なんきょくぱふぇ',
        'definition': '南極 パフェ',
        'pinyinSpace': 'なんきょく パフェ'
    },
    '271': {
        'character': 'かき氷で氷山をイメージしました',
        'letter': 'I made it with shaved ice to resemble an iceberg!',
        'pinyin': 'かきごおりでひょうざんをいめーじしました',
        'definition': 'かき氷 で 氷山 を イメージしました',
        'pinyinSpace': 'かきごおり で ひょうざん を イメージ しました'
    },
    '272': {
        'character': 'すご～い！かわいい！新商品ですか？',
        'letter': 'Amazing! So cute! Is this a new product?',
        'pinyin': 'すご～い！かわいい！しんしょうひんですか？',
        'definition': 'す ご い かわいい 新商品 です か',
        'pinyinSpace': 'す ご ～ い ！ かわいい ！ しんしょうひん です か ？'
    },
    '273': {
        'character': 'あ…いえ試作品です',
        'letter': "Oh...no, it's just a prototype.",
        'pinyin': 'あ…いえしさくひんです',
        'definition': 'あ いえ 試作品 です',
        'pinyinSpace': 'あ … いえ しさくひん です'
    },
    '274': {
        'character': 'よかったらどうぞ',
        'letter': 'Please try it if you like.',
        'pinyin': 'よかったらどうぞ',
        'definition': 'よかったら どうぞ',
        'pinyinSpace': 'よかったら どうぞ'
    },
    '275': {
        'character': 'えっ！？いいんですか？',
        'letter': "What? You don't mind?",
        'pinyin': 'えっ！？いいんですか？',
        'definition': 'え っ いい ん です か',
        'pinyinSpace': 'え っ ！？ いい ん です か ？'
    },
    '276': {
        'character': 'では…いただきます！',
        'letter': "Then...let's eat!",
        'pinyin': 'では…いただきます！',
        'definition': 'では いただきます',
        'pinyinSpace': 'で·は … いただきます ！'
    },
    '277': {
        'character': 'まずはパンダさんから！',
        'letter': "Let's start with the panda!",
        'pinyin': 'まずはぱんださんから！',
        'definition': 'まず は パンダ さん から',
        'pinyinSpace': 'まず は パンダ さん から ！'
    },
    '278': {
        'character': 'じゃあペンギンさんも！',
        'letter': 'Then the penguins!',
        'pinyin': 'じゃあぺんぎんさんも！',
        'definition': 'じゃあ ペンギン さん も',
        'pinyinSpace': 'じゃあ ペンギン さん も ！'
    },
    '279': {
        'character': 'じゃあシロクマさんも！',
        'letter': 'Then the polar bear!',
        'pinyin': 'じゃあしろくまさんも！',
        'definition': 'じゃあ シロクマ さん も',
        'pinyinSpace': 'じゃあ シロクマ さん も ！'
    },
    '280': {
        'character': 'この鼻のとこ食べちゃおうかな！',
        'letter': "I think I'll eat his nose!",
        'pinyin': 'このはなのとこたべちゃおうかな！',
        'definition': 'この 鼻 の とこ 食べちゃおう かな',
        'pinyinSpace': 'この はな の とこ たべちゃおう かな ！'
    },
    '281': {
        'character': 'アハハハハ！ひどい！！私もえい！',
        'letter': "Hahahahaha! That's terrible! Me too Ei!",
        'pinyin': 'あはははは！ひどい！！わたしもえい！',
        'definition': 'アハハハハ ひどい 私 も え い',
        'pinyinSpace': 'アハハハハ ！ ひどい ！！ わたし も え い ！'
    },
    '282': {
        'character': 'これ絶対お店で出してくださいね',
        'letter': 'Please serve this at the restaurant for sure!',
        'pinyin': 'これぜったいおみせでだしてくださいね',
        'definition': 'これ 絶対 お店 で 出してください ね',
        'pinyinSpace': 'これ ぜったい おみせ で だして ください ね'
    },
    '283': {
        'character': 'よかった！大人気です',
        'letter': "Thank goodness! It's a big hit!",
        'pinyin': 'よかった！だいにんきです',
        'definition': 'よかった 大人気 です',
        'pinyinSpace': 'よかった ！ おとなげ/だいにんき です'
    },
    '284': {
        'character': 'そ…そうだね',
        'letter': 'Well... yes.',
        'pinyin': 'そ…そうだね',
        'definition': 'そ そうだね',
        'pinyinSpace': 'そ … そうだね'
    },
    '285': {
        'character': 'ちょっと聞いてよ！また今日も落とされたよ',
        'letter': 'Hey, listen up! You dropped me again today.',
        'pinyin': 'ちょっときいてよ！またきょうもおとされたよ',
        'definition': 'ちょっと 聞いて よ また 今日 も 落とされた よ',
        'pinyinSpace': 'ちょっと きいて よ ！ また きょう も おとされた よ'
    },
    '286': {
        'character': 'すみませんお水ください',
        'letter': 'Excuse me, can I have a glass of water, please?',
        'pinyin': 'すみませんおみずください',
        'definition': 'すみません お水 ください',
        'pinyinSpace': 'すみません おみず ください'
    },
    '287': {
        'character': 'いつも以上に大繁盛じゃないどうしたの？',
        'letter': "What's going on?",
        'pinyin': 'いつもいじょうにだいはんじょうじゃないどうしたの？',
        'definition': 'いつも 以上 に 大 繁盛 じゃない どうしたの',
        'pinyinSpace': 'いつも いじょう に おお/だい はんじょう じゃない どうしたの ？'
    },
    '288': {
        'character': '新メニューのフェアが大人気らしいよ',
        'letter': "What's going on? I heard the new menu is very popular at the fair.",
        'pinyin': 'しんめにゅーのふぇあがだいにんきらしいよ',
        'definition': '新メニュー の フェア が 大人気 らしい よ',
        'pinyinSpace': 'しんメニュー の フェア が おとなげ/だいにんき らしい よ'
    },
    '289': {
        'character': 'あぁパフェフェアー？',
        'letter': 'Oh, the parfait fair?',
        'pinyin': 'あぁぱふぇふぇあー？',
        'definition': 'あぁ パフェ フェアー',
        'pinyinSpace': 'あぁ パフェ フェアー ？'
    },
    '290': {
        'character': 'ワンプレートランチフェア',
        'letter': 'One-plate lunch fair.',
        'pinyin': 'わんぷれーとらんちふぇあ',
        'definition': 'ワンプレートランチ フェア',
        'pinyinSpace': 'ワンプレートランチ フェア'
    },
    '291': {
        'character': 'パフェじゃないんだ？',
        'letter': 'Not a parfait?',
        'pinyin': 'ぱふぇじゃないんだ？',
        'definition': 'パフェ じゃない ん だ',
        'pinyinSpace': 'パフェ じゃない ん だ ？'
    },
    '292': {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Penguin, penguin, penguin.',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '293': {
        'character': 'どうしたのパンダ君',
        'letter': "What's the matter, panda?",
        'pinyin': 'どうしたのぱんだくん',
        'definition': 'どうしたの パンダ 君',
        'pinyinSpace': 'どうしたの パンダ きみ/くん'
    },
    '294': {
        'character': '何も言わないで預金通帳もらえるかな',
        'letter': 'Can I have my bank book without saying anything?',
        'pinyin': 'なにもいわないでよきんつうちょうもらえるかな',
        'definition': '何も 言わないで 預金通帳 もらえる かな',
        'pinyinSpace': 'なにも いわないで よきんつうちょう もらえる かな'
    },
    '295': {
        'character': '嫌だってこといいかな',
        'letter': "Can I tell you what I don't want to do?",
        'pinyin': 'いやだってこといいかな',
        'definition': '嫌 だって こと いい かな',
        'pinyinSpace': 'いや だって こと いい かな'
    },
    '296': {
        'character': '白熊君まとめて',
        'letter': 'Polar Bear, put it all together.',
        'pinyin': 'しろくまくんまとめて',
        'definition': '白熊 君 まとめて',
        'pinyinSpace': 'しろくま/はぐま きみ/くん まとめて'
    },
    '297': {
        'character': '次回のしろくまカフェは',
        'letter': 'Next time at the Shirokuma Cafe.',
        'pinyin': 'じかいのしろくまかふぇは',
        'definition': '次回 の しろくま カフェ は',
        'pinyinSpace': 'じかい の しろくま カフェ は'
    },
    '298': {
        'character': 'ボルトがル語でお送りします',
        'letter': 'Bolt will be speaking in Japanese.',
        'pinyin': 'ぼるとがるごでおおくりします',
        'definition': 'ボルト が ル 語 で お 送り します',
        'pinyinSpace': 'ボルト が ル ご で お おくり します'
    },
    '299': {
        'character': '日本語で行こう',
        'letter': "Let's go in Japanese!",
        'pinyin': 'にほんごでいこう',
        'definition': '日本語 で 行こう',
        'pinyinSpace': 'にほんご で いこう'
    },
    '300': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'おたのしみにY',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
    }
}