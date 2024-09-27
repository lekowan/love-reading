const allSyllableMap = {
    '1': {
        'character': 'ペンギンさんの失恋',
        'letter': "Penguin's broken heart",
        'pinyin': 'ぺんぎんさんのしつれん',
        'definition': 'ペンギン さん の 失恋',
        'pinyinSpace': 'ペンギン さん の しつれん'
    },
    '2': {
        'character': 'はい',
        'letter': "Yes, ma'am.",
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '3': {
        'character': '頼んでないよ',
        'letter': "I didn't order anything.",
        'pinyin': 'たのんでないよ',
        'definition': '頼んでない よ',
        'pinyinSpace': 'たのんでない よ'
    },
    '4': {
        'character': '新メニューのホットケーキ味見してみて',
        'letter': 'Taste the new pancakes on the menu.',
        'pinyin': 'しんめにゅーのほっとけーきあじみしてみて',
        'definition': '新メニュー の ホットケーキ 味見して みて',
        'pinyinSpace': 'しんメニュー の ホットケーキ あじみ して みて'
    },
    '5': {
        'character': '笹が入ってないよ',
        'letter': "There's no bamboo grass in them.",
        'pinyin': 'ささがはいってないよ',
        'definition': '笹 が 入ってない よ',
        'pinyinSpace': 'ささ が はいってない/いってない よ'
    },
    '6': {
        'character': '普通入れないから',
        'letter': "I don't usually put it in.",
        'pinyin': 'ふつういれないから',
        'definition': '普通 入れない から',
        'pinyinSpace': 'ふつう はいれない/いれない から'
    },
    '7': {
        'character': 'なんかしょっぱい',
        'letter': "It's too salty.",
        'pinyin': 'なんかしょっぱい',
        'definition': 'なんか しょっぱい',
        'pinyinSpace': 'なんか しょっぱい'
    },
    '8': {
        'character': 'シャケ入れてみた',
        'letter': 'I added salmon.',
        'pinyin': 'しゃけいれてみた',
        'definition': 'シャケ 入れて みた',
        'pinyinSpace': 'シャケ いれて/はいれて みた'
    },
    '9': {
        'character': '笹子さんも食べてみてよ',
        'letter': 'Try some, Sasago!',
        'pinyin': 'ささごさんもたべてみてよ',
        'definition': '笹 子 さん も 食べて みて よ',
        'pinyinSpace': 'ささ こ さん も たべて みて よ'
    },
    '10': {
        'character': 'あ…はい',
        'letter': 'Yes...',
        'pinyin': 'あ…はい',
        'definition': 'あ はい',
        'pinyinSpace': 'あ … はい'
    },
    '11': {
        'character': 'やっぱりしょっぱいです',
        'letter': "It's still too salty.",
        'pinyin': 'やっぱりしょっぱいです',
        'definition': 'やっぱり しょっぱいです',
        'pinyinSpace': 'やっぱり しょっぱいです'
    },
    '12': {
        'character': 'はぁ…',
        'letter': 'Oh, no...',
        'pinyin': 'はぁ…',
        'definition': 'はぁ',
        'pinyinSpace': 'はぁ …'
    },
    '13': {
        'character': 'あれ？ペンギンさんいつからいたの？',
        'letter': 'Huh? How long have you been here, Penguin?',
        'pinyin': 'あれ？ぺんぎんさんいつからいたの？',
        'definition': 'あれ ペンギン さんいつ から いた の',
        'pinyinSpace': 'あれ ？ ペンギン さんいつ から いた の ？'
    },
    '14': {
        'character': 'ずっといるでしょ！',
        'letter': "You've been here all along!",
        'pinyin': 'ずっといるでしょ！',
        'definition': 'ずっと いる でしょ',
        'pinyinSpace': 'ずっと いる でしょ ！'
    },
    '15': {
        'character': 'ちゃんと気づいてたよ',
        'letter': "I've noticed.",
        'pinyin': 'ちゃんときづいてたよ',
        'definition': 'ちゃんと 気づいてた よ',
        'pinyinSpace': 'ちゃんと きづいてた よ'
    },
    '16': {
        'character': 'でも何か話しかけちゃいけないのかと思って',
        'letter': "But I thought I shouldn't talk to you.",
        'pinyin': 'でもなにかはなしかけちゃいけないのかとおもって',
        'definition': 'でも 何か 話しかけちゃ いけない のか と 思って',
        'pinyinSpace': 'でも なにか はなしかけちゃ いけない のか と おもって'
    },
    '17': {
        'character': '話しかけてよ！',
        'letter': 'Talk to me!',
        'pinyin': 'はなしかけてよ！',
        'definition': '話しかけて よ',
        'pinyinSpace': 'はなしかけて よ ！'
    },
    '18': {
        'character': 'シャケ入りホットケーキ食べる？',
        'letter': 'Do you want some pancakes with salmon?',
        'pinyin': 'しゃけいりほっとけーきたべる？',
        'definition': 'シャケ 入り ホットケーキ 食べる',
        'pinyinSpace': 'シャケ いり ホットケーキ たべる ？'
    },
    '19': {
        'character': '僕は今食欲なんかないの',
        'letter': "I don't have much of an appetite right now.",
        'pinyin': 'ぼくはいましょくよくなんかないの',
        'definition': '僕 は 今 食欲 なんか ない の',
        'pinyinSpace': 'ぼく は いま しょくよく なんか ない の'
    },
    '20': {
        'character': 'どうしたんですか？',
        'letter': "What's the matter?",
        'pinyin': 'どうしたんですか？',
        'definition': 'どうしたん です か',
        'pinyinSpace': 'どうしたん です か ？'
    },
    '21': {
        'character': '見てわからない？',
        'letter': "Can't you see?",
        'pinyin': 'みてわからない？',
        'definition': '見て わからない',
        'pinyinSpace': 'みて わからない ？'
    },
    '22': {
        'character': 'わかんないよ',
        'letter': "I don't know.",
        'pinyin': 'わかんないよ',
        'definition': 'わかんない よ',
        'pinyinSpace': 'わかんない よ'
    },
    '23': {
        'character': '僕はね…僕はね…',
        'letter': "I'm...",
        'pinyin': 'ぼくはね…ぼくはね…',
        'definition': '僕 は ね 僕 は ね',
        'pinyinSpace': 'ぼく は ね … ぼく は ね …'
    },
    '24': {
        'character': '失恋したんだよ！',
        'letter': "I'm heartbroken!",
        'pinyin': 'しつれんしたんだよ！',
        'definition': '失恋した ん だ よ',
        'pinyinSpace': 'しつれん した ん だ よ ！'
    },
    '25': {
        'character': '失恋？',
        'letter': 'Heartbroken?',
        'pinyin': 'しつれん？',
        'definition': '失恋',
        'pinyinSpace': 'しつれん ？'
    },
    '26': {
        'character': 'それは七輪！',
        'letter': "That's a tricycle!",
        'pinyin': 'それはしちりん！',
        'definition': 'それは 七輪',
        'pinyinSpace': 'それは しちりん ！'
    },
    '27': {
        'character': 'それは一輪車！',
        'letter': "That's a unicycle!",
        'pinyin': 'それはいちりんしゃ！',
        'definition': 'それは 一輪車',
        'pinyinSpace': 'それは いちりんしゃ ！'
    },
    '28': {
        'character': 'それは三輪車！',
        'letter': "That's a tricycle!",
        'pinyin': 'それはさんりんしゃ！',
        'definition': 'それは 三輪車',
        'pinyinSpace': 'それは さんりんしゃ ！'
    },
    '29': {
        'character': 'だから僕は失恋してツッコむ気力もないの！',
        'letter': "That's why I'm so heartbroken, I don't even have the energy to pick up a finger!",
        'pinyin': 'だからぼくはしつれんしてつっこむきりょくもないの！',
        'definition': 'だから 僕 は 失恋して ツッコむ 気力 も ない の',
        'pinyinSpace': 'だ·から ぼく は しつれん して ツッコむ きりょく も ない の ！'
    },
    '30': {
        'character': 'ツッコんでるじゃない',
        'letter': "You're playing with it!",
        'pinyin': 'つっこんでるじゃない',
        'definition': 'ツッコんでる じゃない',
        'pinyinSpace': 'ツッコんでる じゃない'
    },
    '31': {
        'character': '失恋ってペン子さん？',
        'letter': 'Heartbroken, Penko?',
        'pinyin': 'しつれんってぺんごさん？',
        'definition': '失恋 って ペン 子 さん',
        'pinyinSpace': 'しつれん って ペン こ さん ？'
    },
    '32': {
        'character': '決まってるじゃない！',
        'letter': 'Of course!',
        'pinyin': 'きまってるじゃない！',
        'definition': '決まってる じゃない',
        'pinyinSpace': 'きまってる じゃない ！'
    },
    '33': {
        'character': 'あ…あの…なんて言ったらいいか…',
        'letter': "Um... um, I don't know what to say...",
        'pinyin': 'あ…あの…なんていったらいいか…',
        'definition': 'あ あの なんて 言ったら いい か',
        'pinyinSpace': 'あ … あの … なんて いったら いい か …'
    },
    '34': {
        'character': '何も言わないでほっておいてよ',
        'letter': "Don't say anything, just leave me alone",
        'pinyin': 'なにもいわないでほっておいてよ',
        'definition': '何も 言わないで ほって おいて よ',
        'pinyinSpace': 'なにも いわないで ほって おいて よ'
    },
    '35': {
        'character': 'パンダくん駅前のベーグル屋さんおいしいらしいよ',
        'letter': 'Panda, I heard the bagel shop in front of the station is delicious',
        'pinyin': 'ぱんだくんえきまえのべーぐるやさんおいしいらしいよ',
        'definition': 'パンダ くん 駅前 の ベーグル 屋 さん おいしい らしい よ',
        'pinyinSpace': 'パンダ くん えきまえ の ベーグル や/おく さん おいしい らしい よ'
    },
    '36': {
        'character': '聞いてよ！',
        'letter': 'Listen to me!',
        'pinyin': 'きいてよ！',
        'definition': '聞いて よ',
        'pinyinSpace': 'きいて よ ！'
    },
    '37': {
        'character': '聞いてほしいんですか？',
        'letter': 'You want me to listen?',
        'pinyin': 'きいてほしいんですか？',
        'definition': '聞いて ほしい ん です か',
        'pinyinSpace': 'きいて ほしい ん です か ？'
    },
    '38': {
        'character': '当たり前じゃない！',
        'letter': 'Of course I do!',
        'pinyin': 'あたりまえじゃない！',
        'definition': '当たり前 じゃない',
        'pinyinSpace': 'あたりまえ じゃない ！'
    },
    '39': {
        'character': '話せば楽になるぞ',
        'letter': "It'll be easier if you just talk to me.",
        'pinyin': 'はなせばらくになるぞ',
        'definition': '話せば 楽 に なる ぞ',
        'pinyinSpace': 'はなせば らく に なる ぞ'
    },
    '40': {
        'character': '刑事さん実は…',
        'letter': 'Detective, actually...',
        'pinyin': 'けいじさんじつは…',
        'definition': '刑事 さん 実は',
        'pinyinSpace': 'けいじ さん じつは …'
    },
    '41': {
        'character': 'って…僕は犯人じゃないから！',
        'letter': "I'm not the murderer!",
        'pinyin': 'って…ぼくははんにんじゃないから！',
        'definition': 'って 僕 は 犯人 じゃない から',
        'pinyinSpace': 'って … ぼく は はんにん じゃない から ！'
    },
    '42': {
        'character': 'で…どうしたの？',
        'letter': 'So... what happened?',
        'pinyin': 'で…どうしたの？',
        'definition': 'で どうしたの',
        'pinyinSpace': 'で … どうしたの ？'
    },
    '43': {
        'character': '見ちゃったんだよ',
        'letter': 'I saw it.',
        'pinyin': 'みちゃったんだよ',
        'definition': '見ちゃった ん だ よ',
        'pinyinSpace': 'みちゃった ん だ よ'
    },
    '44': {
        'character': '何を？',
        'letter': 'Saw what?',
        'pinyin': 'なにを？',
        'definition': '何 を',
        'pinyinSpace': 'なに を ？'
    },
    '45': {
        'character': 'ペン子さんがデートしてるところ…',
        'letter': 'I saw Penko-san on a date...',
        'pinyin': 'ぺんごさんがでーとしてるところ…',
        'definition': 'ペン 子 さん が デートしてる ところ',
        'pinyinSpace': 'ペン こ さん が デート してる ところ …'
    },
    '46': {
        'character': 'だ…誰とですか？',
        'letter': 'With who?',
        'pinyin': 'だ…だれとですか？',
        'definition': 'だ 誰 と です か',
        'pinyinSpace': 'だ … だれ と です か ？'
    },
    '47': {
        'character': 'それがなんと驚いたことに…',
        'letter': 'And to my surprise...',
        'pinyin': 'それがなんとおどろいたことに…',
        'definition': 'それ が なんと 驚いたことに',
        'pinyinSpace': 'それ が なんと おどろいたことに …'
    },
    '48': {
        'character': '絶対にありえない相手で…',
        'letter': 'It was with someone absolutely impossible...',
        'pinyin': 'ぜったいにありえないあいてで…',
        'definition': '絶対に ありえない 相手 で',
        'pinyinSpace': 'ぜったいに ありえない あいて で …'
    },
    '49': {
        'character': '本当に信じられない…',
        'letter': "I really can't believe it...",
        'pinyin': 'ほんとうにしんじられない…',
        'definition': '本当に 信じられない',
        'pinyinSpace': 'ほんとうに しんじられない …'
    },
    '50': {
        'character': '誰なんですか？',
        'letter': 'Who is it?',
        'pinyin': 'だれなんですか？',
        'definition': '誰 なんです か',
        'pinyinSpace': 'だれ なんです か ？'
    },
    '51': {
        'character': 'まさかと思うくらいの…',
        'letter': "I can't believe it...",
        'pinyin': 'まさかとおもうくらいの…',
        'definition': 'まさか と 思う くらい の',
        'pinyinSpace': 'まさか と おもう くらい の …'
    },
    '52': {
        'character': 'いいから早く吐け',
        'letter': 'Just tell me, just tell me!',
        'pinyin': 'いいからはやくはけ',
        'definition': 'いいから 早く 吐け',
        'pinyinSpace': 'いいから はやく はけ/つけ'
    },
    '53': {
        'character': 'って…僕犯人じゃないから！',
        'letter': "I'm not the murderer!",
        'pinyin': 'って…ぼくはんにんじゃないから！',
        'definition': 'って 僕 犯人 じゃない から',
        'pinyinSpace': 'って … ぼく はんにん じゃない から ！'
    },
    '54': {
        'character': 'さっき公園で目撃しちゃったんだ',
        'letter': 'I just saw him in the park.',
        'pinyin': 'さっきこうえんでもくげきしちゃったんだ',
        'definition': 'さっき 公園 で 目撃しちゃった ん だ',
        'pinyinSpace': 'さっき こうえん で もくげき しちゃった ん だ'
    },
    '55': {
        'character': 'ペン子さん！',
        'letter': 'Penko!',
        'pinyin': 'ぺんごさん！',
        'definition': 'ペン 子 さん',
        'pinyinSpace': 'ペン こ さん ！'
    },
    '56': {
        'character': 'こんなところでめぐり会うなんて',
        'letter': "I can't believe we ran into each other here.",
        'pinyin': 'こんなところでめぐりあうなんて',
        'definition': 'こんな ところで めぐり会う なんて',
        'pinyinSpace': 'こんな ところ·で めぐりあう なんて'
    },
    '57': {
        'character': '運命感じちゃうな！',
        'letter': "I feel like it's fate",
        'pinyin': 'うんめいかんじちゃうな！',
        'definition': '運命 感じちゃう な',
        'pinyinSpace': 'うんめい かんじちゃう な ！'
    },
    '58': {
        'character': 'やぁ！偶然ですねペン…',
        'letter': 'Hey! What a coincidence...',
        'pinyin': 'やぁ！ぐうぜんですねぺん…',
        'definition': 'やぁ 偶然 です ね ペン',
        'pinyinSpace': 'やぁ ！ ぐうぜん です ね ペン …'
    },
    '59': {
        'character': 'お待たせ～',
        'letter': 'Here you go.',
        'pinyin': 'おまたせ～',
        'definition': 'お 待たせ',
        'pinyinSpace': 'お またせ ～'
    },
    '60': {
        'character': 'じゃあ行きましょう',
        'letter': "Let's go.",
        'pinyin': 'じゃあいきましょう',
        'definition': 'じゃあ 行きましょう',
        'pinyinSpace': 'じゃあ いきましょう'
    },
    '61': {
        'character': 'ゾウガメさん？',
        'letter': 'Mr. Elephant Turtle?',
        'pinyin': 'ぞうがめさん？',
        'definition': 'ゾウガメ さん',
        'pinyinSpace': 'ゾウガメ さん ？'
    },
    '62': {
        'character': '本当に？',
        'letter': 'Really?',
        'pinyin': 'ほんとうに？',
        'definition': '本当に',
        'pinyinSpace': 'ほんとうに ？'
    },
    '63': {
        'character': 'ゾウガメさんが？',
        'letter': 'Mr. giant tortoise?',
        'pinyin': 'ぞうがめさんが？',
        'definition': 'ゾウガメ さん が',
        'pinyinSpace': 'ゾウガメ さん が ？'
    },
    '64': {
        'character': 'そう…ペン子さんと待ち合わせてデートしてたんだ',
        'letter': 'Yes... she met up with Penko and had a date.',
        'pinyin': 'そう…ぺんごさんとまちあわせてでーとしてたんだ',
        'definition': 'そう ペン 子 さん と 待ち合わせて デートしてた ん だ',
        'pinyinSpace': 'そう … ペン こ さん と まちあわせて デート してた ん だ'
    },
    '65': {
        'character': 'ステキなカフェですね',
        'letter': 'This is a nice cafe.',
        'pinyin': 'すてきなかふぇですね',
        'definition': 'ステキ な カフェ です ね',
        'pinyinSpace': 'ステキ な カフェ です ね'
    },
    '66': {
        'character': '僕…ここに甲羅干しに来るんです～',
        'letter': 'I... come here to dry my shell.',
        'pinyin': 'ぼく…ここにこうらぼしにくるんです～',
        'definition': '僕 ここ に 甲羅干し に 来る ん です',
        'pinyinSpace': 'ぼく … ここ に こうらぼし に くる ん です ～'
    },
    '67': {
        'character': 'まぁ！',
        'letter': 'Oh, my!',
        'pinyin': 'まぁ！',
        'definition': 'まぁ',
        'pinyinSpace': 'まぁ ！'
    },
    '68': {
        'character': '僕も食べたいな～',
        'letter': 'I want some too!',
        'pinyin': 'ぼくもたべたいな～',
        'definition': '僕 も 食べたい な',
        'pinyinSpace': 'ぼく も たべたい な ～'
    },
    '69': {
        'character': 'はい',
        'letter': "I'd love to eat it too!",
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '70': {
        'character': 'いい天気',
        'letter': "It's a beautiful day.",
        'pinyin': 'いいてんき',
        'definition': 'いい天気',
        'pinyinSpace': 'いいてんき'
    },
    '71': {
        'character': 'だね～',
        'letter': "It's a beautiful day.",
        'pinyin': 'だね～',
        'definition': 'だ ね',
        'pinyinSpace': 'だ ね ～'
    },
    '72': {
        'character': '２人で楽しそうにお茶飲んだり',
        'letter': 'They were having a nice cup of tea.',
        'pinyin': '２にんでたのしそうにおちゃのんだり',
        'definition': '２人 で 楽しそう に お茶 飲んだり',
        'pinyinSpace': 'ふたり で たのしそう に おちゃ のんだり'
    },
    '73': {
        'character': 'あ～んってしたりボートに乗ってたんだよ！',
        'letter': 'They were having a cup of tea, oohing and ahhing, and going on a boat ride!',
        'pinyin': 'あ～んってしたりぼーとにのってたんだよ！',
        'definition': 'あ ん って したり ボート に 乗ってた ん だ よ',
        'pinyinSpace': 'あ ～ ん って したり ボート に のってた ん だ よ ！'
    },
    '74': {
        'character': 'それどこで聞いてたの？',
        'letter': 'Where did you hear that?',
        'pinyin': 'それどこできいてたの？',
        'definition': 'それ どこ で 聞いてた の',
        'pinyinSpace': 'それ どこ で きいてた の ？'
    },
    '75': {
        'character': 'そりゃ…',
        'letter': "That's...",
        'pinyin': 'そりゃ…',
        'definition': 'そりゃ',
        'pinyinSpace': 'そりゃ …'
    },
    '76': {
        'character': 'なんだか涙ぐましいね',
        'letter': "That's kind of tearful.",
        'pinyin': 'なんだかなみだぐましいね',
        'definition': 'なんだか 涙ぐましい ね',
        'pinyinSpace': 'なんだか なみだぐましい ね'
    },
    '77': {
        'character': 'でもそれだけじゃ',
        'letter': "But that's not enough to tell if they're lovers or not.",
        'pinyin': 'でもそれだけじゃ',
        'definition': 'でも それだけ じゃ',
        'pinyinSpace': 'でも それだけ じゃ'
    },
    '78': {
        'character': '恋人同士かどうかわかんないんじゃない？',
        'letter': "I don't know if they're lovers or not.",
        'pinyin': 'こいびとどうしかどうかわかんないんじゃない？',
        'definition': '恋人同士 かどうか わかんない ん じゃない',
        'pinyinSpace': 'こいびとどうし かどうか わかんない ん じゃない ？'
    },
    '79': {
        'character': 'それが決定的なことに…',
        'letter': "That's the deciding factor...",
        'pinyin': 'それがけっていてきなことに…',
        'definition': 'それ が 決定的 な こと に',
        'pinyinSpace': 'それ が けっていてき な こと に …'
    },
    '80': {
        'character': '私…大好きなんですよね',
        'letter': 'I... love them.',
        'pinyin': 'わたし…だいすきなんですよね',
        'definition': '私 大好き なんです よね',
        'pinyinSpace': 'わたし … だいすき なんです よね'
    },
    '81': {
        'character': 'カメ…',
        'letter': 'Turtle...',
        'pinyin': 'かめ…',
        'definition': 'カメ',
        'pinyinSpace': 'カメ …'
    },
    '82': {
        'character': 'そんな～っ！',
        'letter': 'Oh no!',
        'pinyin': 'そんな～っ！',
        'definition': 'そんな っ',
        'pinyinSpace': 'そんな ～ っ ！'
    },
    '83': {
        'character': '知らなかった…ペン子さんカメが大好きだったなんて…',
        'letter': "I didn't know... that Penko-san loves turtles...",
        'pinyin': 'しらなかった…ぺんごさんかめがだいすきだったなんて…',
        'definition': '知らなかった ペン 子 さん カメ が 大好き だった なんて',
        'pinyinSpace': 'しらなかった … ペン こ さん カメ が だいすき だった なんて …'
    },
    '84': {
        'character': 'カメのどこがいいんだろう？',
        'letter': 'What do I like about turtles?',
        'pinyin': 'かめのどこがいいんだろう？',
        'definition': 'カメ の どこ が いい ん だろう',
        'pinyinSpace': 'カメ の どこ が いい ん だろう ？'
    },
    '85': {
        'character': 'ねぇどこがいいんだと思う？',
        'letter': 'What do you think is so good about turtles?',
        'pinyin': 'ねぇどこがいいんだとおもう？',
        'definition': 'ねぇ どこ が いい ん だ と 思う',
        'pinyinSpace': 'ねぇ どこ が いい ん だ と おもう ？'
    },
    '86': {
        'character': 'はっきり言ってよ！',
        'letter': 'Speak up!',
        'pinyin': 'はっきりいってよ！',
        'definition': 'はっきり言って よ',
        'pinyinSpace': 'はっきりいって よ ！'
    },
    '87': {
        'character': 'こ…甲羅があるとこですかね？',
        'letter': 'Is it the shell?',
        'pinyin': 'こ…こうらがあるとこですかね？',
        'definition': 'こ 甲羅 が ある とこ です かね',
        'pinyinSpace': 'こ … こうら が ある とこ です かね ？'
    },
    '88': {
        'character': '首とか手足が引っ込むところもキュートかも',
        'letter': 'Or the way its neck and arms and legs tuck in?',
        'pinyin': 'くびとかてあしがひっこむところもきゅーとかも',
        'definition': '首 とか 手足 が 引っ込む ところ も キュート かも',
        'pinyinSpace': 'くび とか てあし が ひっこむ ところ も キュート かも'
    },
    '89': {
        'character': '千年生きるのはすごいよね',
        'letter': "It's amazing that they live for 1,000 years.",
        'pinyin': 'せんねんいきるのはすごいよね',
        'definition': '千年生 きる の は すごい よね',
        'pinyinSpace': 'せんねんせい きる の は すごい よね'
    },
    '90': {
        'character': 'ペ…ペンギンにだっていいとこあるでしょ？',
        'letter': "Penguins have their good points, too, don't they?",
        'pinyin': 'ぺ…ぺんぎんにだっていいとこあるでしょ？',
        'definition': 'ペ ペンギン に だって いいとこ ある でしょ',
        'pinyinSpace': 'ペ … ペンギン に だって いいとこ ある でしょ ？'
    },
    '91': {
        'character': 'ないの！？',
        'letter': 'No!',
        'pinyin': 'ないの！？',
        'definition': 'ない の',
        'pinyinSpace': 'ない の ！？'
    },
    '92': {
        'character': '負けてる…完璧に負けてるよ',
        'letter': "You're losing... you're totally losing.",
        'pinyin': 'まけてる…かんぺきにまけてるよ',
        'definition': '負けてる 完璧 に 負けてる よ',
        'pinyinSpace': 'まけてる … かんぺき に まけてる よ'
    },
    '93': {
        'character': '僕はどうしてペンギンに生まれたんだろう',
        'letter': 'Why was I born a penguin?',
        'pinyin': 'ぼくはどうしてぺんぎんにうまれたんだろう',
        'definition': '僕 は どうして ペンギン に 生まれた ん だろう',
        'pinyinSpace': 'ぼく は どうして ペンギン に うまれた ん だろう'
    },
    '94': {
        'character': 'お母さん！どうして僕をカメに生んでくれなかったの！？',
        'letter': "Mom! Why didn't you make me a turtle?",
        'pinyin': 'おかあさん！どうしてぼくをかめにうんでくれなかったの！？',
        'definition': 'お母さん どうして 僕 を カメ に 生んでくれなかった の',
        'pinyinSpace': 'おかあさん ！ どうして ぼく を カメ に うんで くれなかった の ！？'
    },
    '95': {
        'character': 'ペンギンさんあのね',
        'letter': 'Penguins... you know what?',
        'pinyin': 'ぺんぎんさんあのね',
        'definition': 'ペンギン さん あのね',
        'pinyinSpace': 'ペンギン さん あのね'
    },
    '96': {
        'character': 'ペンギンからカメは生まれないんだよ',
        'letter': "Penguins don't make turtles.",
        'pinyin': 'ぺんぎんからかめはうまれないんだよ',
        'definition': 'ペンギン から カメ は 生まれない ん だ よ',
        'pinyinSpace': 'ペンギン から カメ は うまれない ん だ よ'
    },
    '97': {
        'character': 'わかってるよ！',
        'letter': 'I know!',
        'pinyin': 'わかってるよ！',
        'definition': 'わかってる よ',
        'pinyinSpace': 'わかってる よ ！'
    },
    '98': {
        'character': 'あ～あ…こんなことなら思い切って',
        'letter': "If it's going to be like this, I should've gone out on a limb and asked",
        'pinyin': 'あ～あ…こんなことならおもいきって',
        'definition': 'あ あ こんな こと なら 思い切って',
        'pinyinSpace': 'あ ～ あ … こんな こと なら おもいきって'
    },
    '99': {
        'character': 'ペン子さんをドライブに誘っとくんだった',
        'letter': 'I should have taken Penko-san for a drive!',
        'pinyin': 'ぺんごさんをどらいぶにさそっとくんだった',
        'definition': 'ペン 子 さん を ドライブ に 誘っとく ん だった',
        'pinyinSpace': 'ペン こ さん を ドライブ に さそっとく ん だった'
    },
    '100': {
        'character': 'い…今からでも遅くないですよ',
        'letter': "It's not too late...",
        'pinyin': 'い…いまからでもおそくないですよ',
        'definition': 'い 今から でも 遅くないです よ',
        'pinyinSpace': 'い … いまから でも おそくないです よ'
    },
    '101': {
        'character': 'せっかく免許も取ったんだし…',
        'letter': "I just got my driver's license...",
        'pinyin': 'せっかくめんきょもとったんだし…',
        'definition': 'せっかく 免許 も 取った ん だ し',
        'pinyinSpace': 'せっかく めんきょ も とった ん だ し …'
    },
    '102': {
        'character': 'そ…そうだよね！',
        'letter': "That's right!",
        'pinyin': 'そ…そうだよね！',
        'definition': 'そ そう だよね',
        'pinyinSpace': 'そ … そう だよね ！'
    },
    '103': {
        'character': 'ペン子さんカメ好きなら',
        'letter': 'If you like turtles...',
        'pinyin': 'ぺんごさんかめすきなら',
        'definition': 'ペン 子 さん カメ 好き なら',
        'pinyinSpace': 'ペン こ さん カメ すき なら'
    },
    '104': {
        'character': '速い乗り物は好きじゃないかもね',
        'letter': "Maybe you don't like fast rides",
        'pinyin': 'はやいのりものはすきじゃないかもね',
        'definition': '速い 乗り物 は 好き じゃない かも ね',
        'pinyinSpace': 'はやい のりもの は すき じゃない かも ね'
    },
    '105': {
        'character': 'ゆっくりじゃないとダメなのか～！',
        'letter': "It's got to be slow!",
        'pinyin': 'ゆっくりじゃないとだめなのか～！',
        'definition': 'ゆっくり じゃない と ダメ な のか',
        'pinyinSpace': 'ゆっくり じゃない と ダメ な のか ～！'
    },
    '106': {
        'character': 'やっぱダメだ…',
        'letter': "I can't do it...",
        'pinyin': 'やっぱだめだ…',
        'definition': 'やっぱ ダメ だ',
        'pinyinSpace': 'やっぱ ダメ だ …'
    },
    '107': {
        'character': 'もうきっぱりペン子さんのことは諦めよう',
        'letter': "Let's give up on Penko once and for all",
        'pinyin': 'もうきっぱりぺんごさんのことはあきらめよう',
        'definition': 'もう きっぱり ペン 子 さん の こと は 諦めよう',
        'pinyinSpace': 'もう きっぱり ペン こ さん の こと は あきらめよう'
    },
    '108': {
        'character': 'そうですね',
        'letter': 'I agree.',
        'pinyin': 'そうですね',
        'definition': 'そうですね',
        'pinyinSpace': 'そうですね'
    },
    '109': {
        'character': 'またステキな子が現れるよ',
        'letter': "There'll be another nice girl.",
        'pinyin': 'またすてきなこがあらわれるよ',
        'definition': 'また ステキ な 子 が 現れる よ',
        'pinyinSpace': 'また ステキ な こ が あらわれる よ'
    },
    '110': {
        'character': 'そうだよねいつまでも引きずってちゃダメだよね',
        'letter': "That's right... we can't keep dragging it out forever.",
        'pinyin': 'そうだよねいつまでもひきずってちゃだめだよね',
        'definition': 'そう だよね いつまでも 引きずってちゃ ダメ だよね',
        'pinyinSpace': 'そう だよね いつまでも ひきずってちゃ ダメ だよね'
    },
    '111': {
        'character': 'そうですよ',
        'letter': "That's right.",
        'pinyin': 'そうですよ',
        'definition': 'そう です よ',
        'pinyinSpace': 'そう です よ'
    },
    '112': {
        'character': 'やっぱ諦めちゃダメでしょ！',
        'letter': "You can't give up on her after all!",
        'pinyin': 'やっぱあきらめちゃだめでしょ！',
        'definition': 'やっぱ 諦めちゃ ダメ でしょ',
        'pinyinSpace': 'やっぱ あきらめちゃ ダメ でしょ ！'
    },
    '113': {
        'character': 'どっちなの？',
        'letter': 'Which is it?',
        'pinyin': 'どっちなの？',
        'definition': 'どっち なの',
        'pinyinSpace': 'どっち なの ？'
    },
    '114': {
        'character': 'でもペン子さんにはゾウガメさんが…',
        'letter': 'But Penko-san has a giant tortoise...',
        'pinyin': 'でもぺんごさんにはぞうがめさんが…',
        'definition': 'でも ペン 子 さん には ゾウガメ さん が',
        'pinyinSpace': 'でも ペン こ さん には ゾウガメ さん が …'
    },
    '115': {
        'character': 'ペンギンがゾウガメなんかに負けてたまるか～っ！',
        'letter': "Penguins can't lose to a giant tortoise!",
        'pinyin': 'ぺんぎんがぞうがめなんかにまけてたまるか～っ！',
        'definition': 'ペンギン が ゾウガメ なんか に 負けて たまる か っ',
        'pinyinSpace': 'ペンギン が ゾウガメ なんか に まけて たまる か ～ っ ！'
    },
    '116': {
        'character': 'あっゾウガメさん',
        'letter': 'Ah, Mr. Tortoise!',
        'pinyin': 'あっぞうがめさん',
        'definition': 'あっゾウ ガメ さん',
        'pinyinSpace': 'あっゾウ ガメ さん'
    },
    '117': {
        'character': 'こんにちは～',
        'letter': 'Hello!',
        'pinyin': 'こんにちは～',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは ～'
    },
    '118': {
        'character': 'ライバル登場だよ',
        'letter': 'Here comes the rival!',
        'pinyin': 'らいばるとうじょうだよ',
        'definition': 'ライバル 登場 だ よ',
        'pinyinSpace': 'ライバル とうじょう だ よ'
    },
    '119': {
        'character': 'ペン子さんの彼氏来た',
        'letter': "Penko's boyfriend's here!",
        'pinyin': 'ぺんごさんのかれしきた',
        'definition': 'ペン 子 さん の 彼氏 来た',
        'pinyinSpace': 'ペン こ さん の かれし きた'
    },
    '120': {
        'character': 'ダメだよそんなこと言っちゃ',
        'letter': "Don't say that!",
        'pinyin': 'だめだよそんなこといっちゃ',
        'definition': 'ダメ だ よ そんな こと 言っちゃ',
        'pinyinSpace': 'ダメ だ よ そんな こと いっちゃ'
    },
    '121': {
        'character': 'これから決闘するの？',
        'letter': 'Are you going to duel?',
        'pinyin': 'これからけっとうするの？',
        'definition': 'これから 決闘する の',
        'pinyinSpace': 'これから けっとう する の ？'
    },
    '122': {
        'character': 'しないよ',
        'letter': "No, we're not.",
        'pinyin': 'しないよ',
        'definition': 'しない よ',
        'pinyinSpace': 'しない よ'
    },
    '123': {
        'character': 'えっとこういうのたしか…',
        'letter': 'I mean...',
        'pinyin': 'えっとこういうのたしか…',
        'definition': 'えっと こういう の たしか',
        'pinyinSpace': 'えっと こういう の たしか …'
    },
    '124': {
        'character': 'シャバダバ？',
        'letter': 'Shabadaba?',
        'pinyin': 'しゃばだば？',
        'definition': 'シャバ ダバ',
        'pinyinSpace': 'シャバ ダバ ？'
    },
    '125': {
        'character': '修羅場だよ',
        'letter': "It's a battlefield.",
        'pinyin': 'しゅらばだよ',
        'definition': '修羅場 だ よ',
        'pinyinSpace': 'しゅらば だ よ'
    },
    '126': {
        'character': 'ちょっと黙っててよ！',
        'letter': 'Shut up!',
        'pinyin': 'ちょっとだまっててよ！',
        'definition': 'ちょっと 黙ってて よ',
        'pinyinSpace': 'ちょっと だまってて よ ！'
    },
    '127': {
        'character': 'とにかくペン子さんとどういうおつきあいなのか',
        'letter': 'Anyway, what kind of a relationship do you have with Penko?',
        'pinyin': 'とにかくぺんごさんとどういうおつきあいなのか',
        'definition': 'とにかく ペン 子 さん と どういう お つきあい な のか',
        'pinyinSpace': 'とにかく ペン こ さん と どういう お つきあい な のか'
    },
    '128': {
        'character': 'はっきりさせないと',
        'letter': 'I need to know what kind of a relationship you have with Penko.',
        'pinyin': 'はっきりさせないと',
        'definition': 'はっきりさせない と',
        'pinyinSpace': 'はっきり させない と'
    },
    '129': {
        'character': 'ゾ…ゾウガメ君！',
        'letter': 'Zo... zoogame!',
        'pinyin': 'ぞ…ぞうがめくん！',
        'definition': 'ゾ ゾウガメ 君',
        'pinyinSpace': 'ゾ … ゾウガメ きみ/くん ！'
    },
    '130': {
        'character': 'なに～？',
        'letter': 'What?',
        'pinyin': 'なに～？',
        'definition': 'なに',
        'pinyinSpace': 'なに ～？'
    },
    '131': {
        'character': 'あ…いや…',
        'letter': "It's a... no...",
        'pinyin': 'あ…いや…',
        'definition': 'あ いや',
        'pinyinSpace': 'あ … いや …'
    },
    '132': {
        'character': 'いい天気だね',
        'letter': "It's a beautiful day.",
        'pinyin': 'いいてんきだね',
        'definition': 'いい天気 だ ね',
        'pinyinSpace': 'いいてんき だ ね'
    },
    '133': {
        'character': 'ペンギンさんはっきりさせるんじゃなかったの？',
        'letter': 'Penguin, I thought we were clear.',
        'pinyin': 'ぺんぎんさんはっきりさせるんじゃなかったの？',
        'definition': 'ペンギン さん はっきりさせる ん じゃなかった の',
        'pinyinSpace': 'ペンギン さん はっきり させる ん じゃなかった の ？'
    },
    '134': {
        'character': 'わかってるよ！',
        'letter': 'I know, I know!',
        'pinyin': 'わかってるよ！',
        'definition': 'わかってる よ',
        'pinyinSpace': 'わかってる よ ！'
    },
    '135': {
        'character': 'どうかした～？',
        'letter': "What's wrong?",
        'pinyin': 'どうかした～？',
        'definition': 'どうかした',
        'pinyinSpace': 'どうかした ～？'
    },
    '136': {
        'character': 'あ…いや…あのさ！この間さ公園で…',
        'letter': 'Uh... no... you know what? The other day at the park...',
        'pinyin': 'あ…いや…あのさ！このあいださこうえんで…',
        'definition': 'あ いや あのさ この間 さ 公園 で',
        'pinyinSpace': 'あ … いや … あのさ ！ このあいだ さ こうえん で …'
    },
    '137': {
        'character': 'すごくおいしいマイワシを食べたんだよね～',
        'letter': 'I ate some really tasty sardines in the park.',
        'pinyin': 'すごくおいしいまいわしをたべたんだよね～',
        'definition': 'すごく おいしい マイワシ を 食べた ん だよね',
        'pinyinSpace': 'すごく おいしい マイワシ を たべた ん だよね ～'
    },
    '138': {
        'character': 'おいしかった～',
        'letter': 'It was delicious!',
        'pinyin': 'おいしかった～',
        'definition': 'おいしかった',
        'pinyinSpace': 'おいしかった ～'
    },
    '139': {
        'character': '違うでしょ？',
        'letter': "It wasn't, was it?",
        'pinyin': 'ちがうでしょ？',
        'definition': '違う でしょ',
        'pinyinSpace': 'ちがう でしょ ？'
    },
    '140': {
        'character': 'わかってるよ！',
        'letter': 'I know!',
        'pinyin': 'わかってるよ！',
        'definition': 'わかってる よ',
        'pinyinSpace': 'わかってる よ ！'
    },
    '141': {
        'character': '話には順序ってものが…',
        'letter': "There's an order to things...",
        'pinyin': 'はなしにはじゅんじょってものが…',
        'definition': '話 には 順序 って もの が',
        'pinyinSpace': 'はなし には じゅんじょ って もの が …'
    },
    '142': {
        'character': 'そういえばあの公園でさ',
        'letter': 'Oh, by the way, at the park...',
        'pinyin': 'そういえばあのこうえんでさ',
        'definition': 'そういえば あの 公園 で さ',
        'pinyinSpace': 'そういえば あの こうえん で さ'
    },
    '143': {
        'character': '女の子のペンギンと一緒にいたじゃない？',
        'letter': 'You know, the one with the little penguins?',
        'pinyin': 'おんなのこのぺんぎんといっしょにいたじゃない？',
        'definition': '女の子 の ペンギン と 一緒に いた じゃない',
        'pinyinSpace': 'おんなのこ の ペンギン と いっしょに いた じゃない ？'
    },
    '144': {
        'character': 'あの公園気持いいよね',
        'letter': "It's so nice there, isn't it?",
        'pinyin': 'あのこうえんきもちいいよね',
        'definition': 'あの 公園 気持 いい よね',
        'pinyinSpace': 'あの こうえん きもち いい よね'
    },
    '145': {
        'character': 'でゾウガメさんとペン子さんはどういう関係？',
        'letter': "So, what's the story with the elephant tortoise and the penguins?",
        'pinyin': 'でぞうがめさんとぺんごさんはどういうかんけい？',
        'definition': 'で ゾウガメ さん と ペン 子 さん は どういう 関係',
        'pinyinSpace': 'で ゾウガメ さん と ペン こ さん は どういう かんけい ？'
    },
    '146': {
        'character': 'あからさまに聞かないでよ！',
        'letter': "Don't ask so bluntly!",
        'pinyin': 'あからさまにきかないでよ！',
        'definition': 'あからさま に 聞かないで よ',
        'pinyinSpace': 'あからさま に きかないで よ ！'
    },
    '147': {
        'character': 'それでゾウガメさんはどうして一緒に？',
        'letter': 'So, how did you get together with Mr. Tortoise?',
        'pinyin': 'それでぞうがめさんはどうしていっしょに？',
        'definition': 'それで ゾウガメ さん は どうして 一緒に',
        'pinyinSpace': 'それで ゾウガメ さん は どうして いっしょに ？'
    },
    '148': {
        'character': '笹子さんまで！？',
        'letter': 'Even Sasago-san!',
        'pinyin': 'ささごさんまで！？',
        'definition': '笹 子 さん まで',
        'pinyinSpace': 'ささ こ さん まで ！？'
    },
    '149': {
        'character': 'なんで公園に一緒にいたの？',
        'letter': 'Why were you in the park together?',
        'pinyin': 'なんでこうえんにいっしょにいたの？',
        'definition': 'なんで 公園 に 一緒に いた の',
        'pinyinSpace': 'なんで こうえん に いっしょに いた の ？'
    },
    '150': {
        'character': '誘われて～',
        'letter': 'I was invited...',
        'pinyin': 'さそわれて～',
        'definition': '誘われて',
        'pinyinSpace': 'さそわれて ～'
    },
    '151': {
        'character': 'ペン子さんに誘われた！？',
        'letter': 'Penko-san asked me out!',
        'pinyin': 'ぺんごさんにさそわれた！？',
        'definition': 'ペン 子 さん に 誘われた',
        'pinyinSpace': 'ペン こ さん に さそわれた ！？'
    },
    '152': {
        'character': '好きだって～',
        'letter': 'She said she likes me~!',
        'pinyin': 'すきだって～',
        'definition': '好き だって',
        'pinyinSpace': 'すき だって ～'
    },
    '153': {
        'character': 'カ…メ…',
        'letter': 'Ka...me...',
        'pinyin': 'か…め…',
        'definition': 'カ メ',
        'pinyinSpace': 'カ … メ …'
    },
    '154': {
        'character': 'ゾウガメさんペン子さんとお幸せに！うわ～ん！',
        'letter': 'I wish you and Penko-san all the best, Mr. Elephant Tortoise! Woah~!',
        'pinyin': 'ぞうがめさんぺんごさんとおしあわせに！うわ～ん！',
        'definition': 'ゾウガメ さん ペン 子 さん とお 幸せ に うわ ん',
        'pinyinSpace': 'ゾウガメ さん ペン こ さん とお しあわせ に ！ うわ ～ ん ！'
    },
    '155': {
        'character': 'ラ…',
        'letter': 'La...',
        'pinyin': 'ら…',
        'definition': 'ラ',
        'pinyinSpace': 'ラ …'
    },
    '156': {
        'character': 'ラ？',
        'letter': 'La?',
        'pinyin': 'ら？',
        'definition': 'ラ',
        'pinyinSpace': 'ラ ？'
    },
    '157': {
        'character': 'いや待てよ',
        'letter': 'No, wait!',
        'pinyin': 'いやまてよ',
        'definition': 'いや 待て よ',
        'pinyinSpace': 'いや まて よ'
    },
    '158': {
        'character': 'ペン子さんがそんなにカメ好きなら…',
        'letter': 'If Penko-san likes turtles so much...',
        'pinyin': 'ぺんごさんがそんなにかめすきなら…',
        'definition': 'ペン 子 さん が そんなに カメ 好き なら',
        'pinyinSpace': 'ペン こ さん が そんなに カメ すき なら …'
    },
    '159': {
        'character': 'いらっしゃい',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃい',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '160': {
        'character': 'こんにちは',
        'letter': 'Hello.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '161': {
        'character': '何やってるのペンギンさん',
        'letter': 'What are you doing here, Penguin?',
        'pinyin': 'なにやってるのぺんぎんさん',
        'definition': '何 やってる の ペンギン さん',
        'pinyinSpace': 'なに やってる の ペンギン さん'
    },
    '162': {
        'character': 'どこから持ってきたんですか？その甲羅',
        'letter': 'Where did you get that from? That shell',
        'pinyin': 'どこからもってきたんですか？そのこうら',
        'definition': 'どこ から 持ってきた ん です か その 甲羅',
        'pinyinSpace': 'どこ から もってきた ん です か ？ その こうら'
    },
    '163': {
        'character': 'かたい',
        'letter': "It's so hard!",
        'pinyin': 'かたい',
        'definition': 'かたい',
        'pinyinSpace': 'かたい'
    },
    '164': {
        'character': 'ペン子さんはカメが大好き',
        'letter': 'Penko-san loves turtles',
        'pinyin': 'ぺんごさんはかめがだいすき',
        'definition': 'ペン 子 さん は カメ が 大好き',
        'pinyinSpace': 'ペン こ さん は カメ が だいすき'
    },
    '165': {
        'character': 'ああペン子さんはね',
        'letter': 'Yes, Penko-san does.',
        'pinyin': 'ああぺんごさんはね',
        'definition': 'ああ ペン 子 さん は ね',
        'pinyinSpace': 'ああ ペン こ さん は ね'
    },
    '166': {
        'character': 'カメじゃなくて',
        'letter': 'Not turtles.',
        'pinyin': 'かめじゃなくて',
        'definition': 'カメ じゃなくて',
        'pinyinSpace': 'カメ じゃなくて'
    },
    '167': {
        'character': '大好きなのはカメラ',
        'letter': 'What he loves is cameras',
        'pinyin': 'だいすきなのはかめら',
        'definition': '大好き な の は カメラ',
        'pinyinSpace': 'だいすき な の は カメラ'
    },
    '168': {
        'character': '最近カメラが趣味らしいよ',
        'letter': "He's been into cameras lately.",
        'pinyin': 'さいきんかめらがしゅみらしいよ',
        'definition': '最近 カメラ が 趣味 らしい よ',
        'pinyinSpace': 'さいきん カメラ が しゅみ らしい よ'
    },
    '169': {
        'character': 'ゾウガメさんも同じ趣味みたいで',
        'letter': 'Mr. Elephant Tortoise seems to have the same hobby.',
        'pinyin': 'ぞうがめさんもおなじしゅみみたいで',
        'definition': 'ゾウガメ さん も 同じ 趣味 みたい で',
        'pinyinSpace': 'ゾウガメ さん も おなじ/どうじ しゅみ みたい で'
    },
    '170': {
        'character': '大好きなのはねカメじゃなくてカメラだよ',
        'letter': 'I love cameras, not turtles.',
        'pinyin': 'だいすきなのはねかめじゃなくてかめらだよ',
        'definition': '大好き な の はね カメ じゃなくて カメラ だ よ',
        'pinyinSpace': 'だいすき な の はね カメ じゃなくて カメラ だ よ'
    },
    '171': {
        'character': '出直してきます',
        'letter': "I'll come back later.",
        'pinyin': 'でなおしてきます',
        'definition': '出直してきます',
        'pinyinSpace': 'でなおしてきます'
    },
    '172': {
        'character': 'パンダくんの夜遊び',
        'letter': "Panda's night out",
        'pinyin': 'ぱんだくんのよあそび',
        'definition': 'パンダ くん の 夜遊び',
        'pinyinSpace': 'パンダ くん の よあそび'
    },
    '173': {
        'character': 'お疲れさまでした',
        'letter': 'Thank you for your hard work.',
        'pinyin': 'おつかれさまでした',
        'definition': 'お疲れさま でした',
        'pinyinSpace': 'おつかれさま でした'
    },
    '174': {
        'character': 'お疲れさま',
        'letter': 'Thank you.',
        'pinyin': 'おつかれさま',
        'definition': 'お疲れさま',
        'pinyinSpace': 'おつかれさま'
    },
    '175': {
        'character': 'パンダくん閉店なんだけど',
        'letter': "Panda, we're closed.",
        'pinyin': 'ぱんだくんへいてんなんだけど',
        'definition': 'パンダ くん 閉店 な ん だけど',
        'pinyinSpace': 'パンダ くん へいてん な ん だけど'
    },
    '176': {
        'character': 'パンダくん？',
        'letter': 'Panda?',
        'pinyin': 'ぱんだくん？',
        'definition': 'パンダ くん',
        'pinyinSpace': 'パンダ くん ？'
    },
    '177': {
        'character': 'ああおはよう',
        'letter': 'Good morning.',
        'pinyin': 'ああおはよう',
        'definition': 'ああ おはよう',
        'pinyinSpace': 'ああ おはよう'
    },
    '178': {
        'character': 'もう夜だよ',
        'letter': "It's almost night.",
        'pinyin': 'もうよるだよ',
        'definition': 'もう 夜 だ よ',
        'pinyinSpace': 'もう よる だ よ'
    },
    '179': {
        'character': 'グリズリーくん',
        'letter': 'Hey, grizzly.',
        'pinyin': 'ぐりずりーくん',
        'definition': 'グリズリー くん',
        'pinyinSpace': 'グリズリー くん'
    },
    '180': {
        'character': 'ようちょっと遊びに行こうぜ',
        'letter': "Hey, let's go have a little fun.",
        'pinyin': 'ようちょっとあそびにいこうぜ',
        'definition': 'よう ちょっと 遊びに行こう ぜ',
        'pinyinSpace': 'よう ちょっと あそびにいこう ぜ'
    },
    '181': {
        'character': 'いいよ',
        'letter': 'Yeah, sure.',
        'pinyin': 'いいよ',
        'definition': 'いい よ',
        'pinyinSpace': 'いい よ'
    },
    '182': {
        'character': '遊びに行くの？',
        'letter': 'You wanna go hang out?',
        'pinyin': 'あそびにいくの？',
        'definition': '遊びに行く の',
        'pinyinSpace': 'あそびにいく の ？'
    },
    '183': {
        'character': '僕も行きたい！',
        'letter': 'I want to go, too!',
        'pinyin': 'ぼくもいきたい！',
        'definition': '僕 も 行きたい',
        'pinyinSpace': 'ぼく も いきたい ！'
    },
    '184': {
        'character': 'ガキの行くところじゃねぇんだよ',
        'letter': "It's not for kids.",
        'pinyin': 'がきのいくところじゃねぇんだよ',
        'definition': 'ガキ の 行く ところ じゃねぇ ん だ よ',
        'pinyinSpace': 'ガキ の いく ところ じゃねぇ ん だ よ'
    },
    '185': {
        'character': '大人の夜遊びだ',
        'letter': "It's a night out for adults.",
        'pinyin': 'おとなのよあそびだ',
        'definition': '大人 の 夜遊び だ',
        'pinyinSpace': 'おとな の よあそび だ'
    },
    '186': {
        'character': '夜遊び？',
        'letter': 'Nightlife?',
        'pinyin': 'よあそび？',
        'definition': '夜遊び',
        'pinyinSpace': 'よあそび ？'
    },
    '187': {
        'character': 'なんかすごくおもしろそう',
        'letter': 'Sounds like a lot of fun.',
        'pinyin': 'なんかすごくおもしろそう',
        'definition': 'なんか すごく おもしろそう',
        'pinyinSpace': 'なんか すごく おもしろそう'
    },
    '188': {
        'character': '何でついてくるんだよ',
        'letter': 'Why are you following me?',
        'pinyin': 'なんでついてくるんだよ',
        'definition': '何で ついてくる ん だ よ',
        'pinyinSpace': 'なんで ついてくる ん だ よ'
    },
    '189': {
        'character': 'グリズリーくんが誘ったんじゃない',
        'letter': "Mr. Grizzly didn't ask me to go out with him.",
        'pinyin': 'ぐりずりーくんがさそったんじゃない',
        'definition': 'グリズリー くん が 誘った ん じゃない',
        'pinyinSpace': 'グリズリー くん が さそった ん じゃない'
    },
    '190': {
        'character': 'お前じゃねぇよ',
        'letter': "It wasn't you.",
        'pinyin': 'おまえじゃねぇよ',
        'definition': 'お前 じゃねぇ よ',
        'pinyinSpace': 'おまえ じゃねぇ よ'
    },
    '191': {
        'character': 'コイツだよ',
        'letter': "It's him.",
        'pinyin': 'こいつだよ',
        'definition': 'コイツ だ よ',
        'pinyinSpace': 'コイツ だ よ'
    },
    '192': {
        'character': 'どこ行くの？',
        'letter': 'Where are you going?',
        'pinyin': 'どこいくの？',
        'definition': 'どこ 行く の',
        'pinyinSpace': 'どこ いく の ？'
    },
    '193': {
        'character': 'というわけでパンダくん',
        'letter': 'So, Mr. Panda.',
        'pinyin': 'というわけでぱんだくん',
        'definition': 'という わけ で パンダ くん',
        'pinyinSpace': 'という わけ で パンダ くん'
    },
    '194': {
        'character': '今日は残念だけど中止だから帰ろう',
        'letter': "I'm sorry, but we're cancelling today. Let's go home.",
        'pinyin': 'きょうはざんねんだけどちゅうしだからかえろう',
        'definition': '今日 は 残念 だけど 中止 だから 帰ろう',
        'pinyinSpace': 'きょう は ざんねん だけど ちゅうし だ から かえろう'
    },
    '195': {
        'character': '残念',
        'letter': 'Too bad.',
        'pinyin': 'ざんねん',
        'definition': '残念',
        'pinyinSpace': 'ざんねん'
    },
    '196': {
        'character': '何でそうなるんだ！',
        'letter': 'What the hell is wrong with you?',
        'pinyin': 'なんでそうなるんだ！',
        'definition': '何 でそう なる ん だ',
        'pinyinSpace': 'なん でそう なる ん だ ！'
    },
    '197': {
        'character': 'ちょっと待て！',
        'letter': 'Wait a minute!',
        'pinyin': 'ちょっとまて！',
        'definition': 'ちょっと 待て',
        'pinyinSpace': 'ちょっと まて ！'
    },
    '198': {
        'character': 'やっぱり行くの？',
        'letter': 'Are you still going?',
        'pinyin': 'やっぱりいくの？',
        'definition': 'やっぱり 行く の',
        'pinyinSpace': 'やっぱり いく の ？'
    },
    '199': {
        'character': '行くに決まってんだろ！',
        'letter': "Of course we're going!",
        'pinyin': 'いくにきまってんだろ！',
        'definition': '行く に 決まって ん だろ',
        'pinyinSpace': 'いく に きまって ん だろ ！'
    },
    '200': {
        'character': 'すごいここ何？',
        'letter': 'What is this place?',
        'pinyin': 'すごいここなに？',
        'definition': 'すごい ここ 何',
        'pinyinSpace': 'すごい ここ なに/なん ？'
    },
    '201': {
        'character': 'バッティングセンター',
        'letter': 'What is this place? The batting cage.',
        'pinyin': 'ばってぃんぐせんたー',
        'definition': 'バッティング センター',
        'pinyinSpace': 'バッティング センター'
    },
    '202': {
        'character': '来たことねぇのか',
        'letter': "You've never been here before?",
        'pinyin': 'きたことねぇのか',
        'definition': '来 たこ とねぇ のか',
        'pinyinSpace': 'らい/き たこ とねぇ のか'
    },
    '203': {
        'character': '何やってんだよ！',
        'letter': 'What the hell are you doing?',
        'pinyin': 'なにやってんだよ！',
        'definition': '何 やって ん だ よ',
        'pinyinSpace': 'なに やって ん だ よ ！'
    },
    '204': {
        'character': 'ぶら下がって遊ぶとこじゃねぇんだよ！',
        'letter': 'This is not a place to hang out!',
        'pinyin': 'ぶらさがってあそぶとこじゃねぇんだよ！',
        'definition': 'ぶら下がって 遊ぶ とこ じゃねぇ ん だ よ',
        'pinyinSpace': 'ぶらさがって あそぶ とこ じゃねぇ ん だ よ ！'
    },
    '205': {
        'character': 'そうなの？',
        'letter': 'Is that so?',
        'pinyin': 'そうなの？',
        'definition': 'そう なの',
        'pinyinSpace': 'そう なの ？'
    },
    '206': {
        'character': 'ったく…',
        'letter': 'Oh, man...',
        'pinyin': 'ったく…',
        'definition': 'ったく',
        'pinyinSpace': 'ったく …'
    },
    '207': {
        'character': 'これ気持いいね',
        'letter': 'This feels good.',
        'pinyin': 'これきもちいいね',
        'definition': 'これ 気持 いいね',
        'pinyinSpace': 'これ きもち いいね'
    },
    '208': {
        'character': 'だからそうじゃねぇんだよ',
        'letter': "That's not what I meant.",
        'pinyin': 'だからそうじゃねぇんだよ',
        'definition': 'だから そう じゃねぇ ん だ よ',
        'pinyinSpace': 'だ·から そう じゃねぇ ん だ よ'
    },
    '209': {
        'character': '結構凝りがほぐれるね',
        'letter': 'It loosens me up a lot.',
        'pinyin': 'けっこうこりがほぐれるね',
        'definition': '結構 凝り が ほぐれる ね',
        'pinyinSpace': 'けっこう しこり が ほぐれる ね'
    },
    '210': {
        'character': 'お前までやってんじゃねぇ！',
        'letter': "Don't do it to me, too!",
        'pinyin': 'おまえまでやってんじゃねぇ！',
        'definition': 'お前 まで やって ん じゃねぇ',
        'pinyinSpace': 'おまえ まで やって ん じゃねぇ ！'
    },
    '211': {
        'character': 'じゃあここで何して遊ぶの？',
        'letter': 'What do you do here?',
        'pinyin': 'じゃあここでなにしてあそぶの？',
        'definition': 'じゃあ ここ で 何 して 遊ぶ の',
        'pinyinSpace': 'じゃあ ここ で なに して あそぶ の ？'
    },
    '212': {
        'character': '向こうから来た球を打ち返すんだよ',
        'letter': 'You hit the ball back from the other side.',
        'pinyin': 'むこうからきたたまをうちかえすんだよ',
        'definition': '向こう から 来た 球 を 打ち返す ん だ よ',
        'pinyinSpace': 'むこう から きた きゅう を うちかえす ん だ よ'
    },
    '213': {
        'character': 'こうやるんだ',
        'letter': 'Like this.',
        'pinyin': 'こうやるんだ',
        'definition': 'こう やる ん だ',
        'pinyinSpace': 'こう やる ん だ'
    },
    '214': {
        'character': 'ナイスキャッチ',
        'letter': 'Nice catch!',
        'pinyin': 'ないすきゃっち',
        'definition': 'ナイス キャッチ',
        'pinyinSpace': 'ナイス キャッチ'
    },
    '215': {
        'character': 'シロクマくんすご～い！',
        'letter': "That's great, Polar Bear!",
        'pinyin': 'しろくまくんすご～い！',
        'definition': 'シロクマ くんす ご い',
        'pinyinSpace': 'シロクマ くんす ご ～ い ！'
    },
    '216': {
        'character': 'ピッチャーライナーだね',
        'letter': "That's a pitcher's liner.",
        'pinyin': 'ぴっちゃーらいなーだね',
        'definition': 'ピッチャー ライナー だ ね',
        'pinyinSpace': 'ピッチャー ライナー だ ね'
    },
    '217': {
        'character': '何やってんだよ！！',
        'letter': 'What are you doing?',
        'pinyin': 'なにやってんだよ！！',
        'definition': '何 やって ん だ よ',
        'pinyinSpace': 'なに やって ん だ よ ！！'
    },
    '218': {
        'character': '僕もやる',
        'letter': "I'll do it too.",
        'pinyin': 'ぼくもやる',
        'definition': '僕 も やる',
        'pinyinSpace': 'ぼく も やる'
    },
    '219': {
        'character': 'やらなくていいんだよ！',
        'letter': "You don't have to!",
        'pinyin': 'やらなくていいんだよ！',
        'definition': 'やらなくていい ん だ よ',
        'pinyinSpace': 'やらなくて いい ん だ よ ！'
    },
    '220': {
        'character': '大当たり！',
        'letter': 'You hit the jackpot!',
        'pinyin': 'おおあたり！',
        'definition': '大当たり',
        'pinyinSpace': 'おおあたり ！'
    },
    '221': {
        'character': 'グリズリーさんやったね！',
        'letter': 'You did it, Grizzly!',
        'pinyin': 'ぐりずりーさんやったね！',
        'definition': 'グリズリー さん やった ね',
        'pinyinSpace': 'グリズリー さん やった ね ！'
    },
    '222': {
        'character': 'なんかもうやる気なくなったぜ',
        'letter': "I don't feel like doing it anymore.",
        'pinyin': 'なんかもうやるきなくなったぜ',
        'definition': 'なんか もう やる気 なくなった ぜ',
        'pinyinSpace': 'なんか もう やるき なくなった ぜ'
    },
    '223': {
        'character': 'じゃあ僕がお手本を',
        'letter': "I'll set the example.",
        'pinyin': 'じゃあぼくがおてほんを',
        'definition': 'じゃあ 僕 が お手本 を',
        'pinyinSpace': 'じゃあ ぼく が おてほん を'
    },
    '224': {
        'character': 'さあ来い！',
        'letter': 'Come on!',
        'pinyin': 'さあこい！',
        'definition': 'さあ 来い',
        'pinyinSpace': 'さあ こい ！'
    },
    '225': {
        'character': 'バット持ちすぎだろう！',
        'letter': "You're holding the bat too high!",
        'pinyin': 'ばっともちすぎだろう！',
        'definition': 'バット 持ち すぎ だろう',
        'pinyinSpace': 'バット もち すぎ だろう ！'
    },
    '226': {
        'character': 'じゃあ改めてお手本を',
        'letter': "Well, let me show you how it's done.",
        'pinyin': 'じゃああらためておてほんを',
        'definition': 'じゃあ 改めて お手本 を',
        'pinyinSpace': 'じゃあ あらためて おてほん を'
    },
    '227': {
        'character': 'バット使えよ！',
        'letter': 'Use the bat!',
        'pinyin': 'ばっとつかえよ！',
        'definition': 'バット 使え よ',
        'pinyinSpace': 'バット つかえ よ ！'
    },
    '228': {
        'character': 'もういい…パンダとにかくやってみろ',
        'letter': 'All right, Panda, just do it.',
        'pinyin': 'もういい…ぱんだとにかくやってみろ',
        'definition': 'もういい パンダ とにかく やってみろ',
        'pinyinSpace': 'もういい … パンダ とにかく やってみろ'
    },
    '229': {
        'character': 'パンダくんバットを構えてよ～く球を見るんだよ',
        'letter': 'Panda, hold up the bat and look at the ball.',
        'pinyin': 'ぱんだくんばっとをかまえてよ～くたまをみるんだよ',
        'definition': 'パンダ くん バット を 構えて よ く 球 を 見る ん だ よ',
        'pinyinSpace': 'パンダ くん バット を かまえて よ ～ く きゅう を みる ん だ よ'
    },
    '230': {
        'character': 'いやそうじゃなくてな…',
        'letter': 'No, no, no, I mean...',
        'pinyin': 'いやそうじゃなくてな…',
        'definition': 'いや そうじゃなくて な',
        'pinyinSpace': 'いや そうじゃなくて な …'
    },
    '231': {
        'character': 'ボールをしっかり見て',
        'letter': 'Watch the ball.',
        'pinyin': 'ぼーるをしっかりみて',
        'definition': 'ボール を しっかり 見て',
        'pinyinSpace': 'ボール を しっかり みて'
    },
    '232': {
        'character': 'じ～～～',
        'letter': 'Look at the ball.',
        'pinyin': 'じ～～～',
        'definition': 'じ',
        'pinyinSpace': 'じ ～～～'
    },
    '233': {
        'character': 'こう？',
        'letter': 'Like this?',
        'pinyin': 'こう？',
        'definition': 'こう',
        'pinyinSpace': 'こう ？'
    },
    '234': {
        'character': '打てよ',
        'letter': 'Hit it.',
        'pinyin': 'うてよ',
        'definition': '打て よ',
        'pinyinSpace': 'うて よ'
    },
    '235': {
        'character': 'やっぱり？',
        'letter': 'Like I knew it?',
        'pinyin': 'やっぱり？',
        'definition': 'やっぱり',
        'pinyinSpace': 'やっぱり ？'
    },
    '236': {
        'character': 'やっぱりじゃねぇ！バットで当てろ！！',
        'letter': 'I knew it! Hit it with the bat!',
        'pinyin': 'やっぱりじゃねぇ！ばっとであてろ！！',
        'definition': 'やっぱり じゃねぇ バット で 当てろ',
        'pinyinSpace': 'やっぱり じゃねぇ ！ バット で あてろ ！！'
    },
    '237': {
        'character': 'ナイスショット',
        'letter': 'Nice shot.',
        'pinyin': 'ないすしょっと',
        'definition': 'ナイスショット',
        'pinyinSpace': 'ナイスショット'
    },
    '238': {
        'character': 'やったぁ！',
        'letter': 'Yeah!',
        'pinyin': 'やったぁ！',
        'definition': 'や ったぁ',
        'pinyinSpace': 'や ったぁ ！'
    },
    '239': {
        'character': 'ゴルフじゃねぇ！！',
        'letter': "This ain't golf!",
        'pinyin': 'ごるふじゃねぇ！！',
        'definition': 'ゴルフ じゃねぇ',
        'pinyinSpace': 'ゴルフ じゃねぇ ！！'
    },
    '240': {
        'character': '積み木じゃねぇ！',
        'letter': "It's not a block!",
        'pinyin': 'つみきじゃねぇ！',
        'definition': '積み木 じゃねぇ',
        'pinyinSpace': 'つみき じゃねぇ ！'
    },
    '241': {
        'character': 'ビリヤードじゃねぇ！',
        'letter': "It's not billiards!",
        'pinyin': 'びりやーどじゃねぇ！',
        'definition': 'ビリヤード じゃねぇ',
        'pinyinSpace': 'ビリヤード じゃねぇ ！'
    },
    '242': {
        'character': 'ああおもしろかった',
        'letter': 'Yeah, it was fun.',
        'pinyin': 'ああおもしろかった',
        'definition': 'ああ おもしろかった',
        'pinyinSpace': 'ああ おもしろかった'
    },
    '243': {
        'character': '全然バッティングしてねぇけどな',
        'letter': "We're not batting at all, though.",
        'pinyin': 'ぜんぜんばってぃんぐしてねぇけどな',
        'definition': '全然 バッティング して ねぇ けど な',
        'pinyinSpace': 'ぜんぜん バッティング して ねぇ けど な'
    },
    '244': {
        'character': '次いくぞ',
        'letter': "Let's go next time.",
        'pinyin': 'つぎいくぞ',
        'definition': '次 いく ぞ',
        'pinyinSpace': 'つぎ いく ぞ'
    },
    '245': {
        'character': 'またどこか行くの？',
        'letter': 'Are we going somewhere else?',
        'pinyin': 'またどこかいくの？',
        'definition': 'また どこか 行く の',
        'pinyinSpace': 'また どこか いく の ？'
    },
    '246': {
        'character': '夜はこれからだからな',
        'letter': "We're going on a night out.",
        'pinyin': 'よるはこれからだからな',
        'definition': '夜 は これから だから な',
        'pinyinSpace': 'よる は これから だ から な'
    },
    '247': {
        'character': 'これからなんだ…',
        'letter': "We're just getting started...",
        'pinyin': 'これからなんだ…',
        'definition': 'これから な ん だ',
        'pinyinSpace': 'これから な ん だ …'
    },
    '248': {
        'character': '次はどこかな？',
        'letter': "Where's next?",
        'pinyin': 'つぎはどこかな？',
        'definition': '次 は どこか な',
        'pinyinSpace': 'つぎ は どこか な ？'
    },
    '249': {
        'character': '風呂だ！',
        'letter': 'Bathroom!',
        'pinyin': 'ふろだ！',
        'definition': '風呂 だ',
        'pinyinSpace': 'ふろ だ ！'
    },
    '250': {
        'character': '広い！',
        'letter': "It's huge!",
        'pinyin': 'ひろい！',
        'definition': '広い',
        'pinyinSpace': 'ひろい ！'
    },
    '251': {
        'character': 'すごいね！',
        'letter': 'Oh, my God!',
        'pinyin': 'すごいね！',
        'definition': 'すごい ね',
        'pinyinSpace': 'すごい ね ！'
    },
    '252': {
        'character': 'すげぇだろう？',
        'letter': "Isn't it amazing?",
        'pinyin': 'すげぇだろう？',
        'definition': 'すげぇ だろう',
        'pinyinSpace': 'すげぇ だろう ？'
    },
    '253': {
        'character': '本当だ！',
        'letter': 'It is!',
        'pinyin': 'ほんとうだ！',
        'definition': '本当 だ',
        'pinyinSpace': 'ほんとう だ ！'
    },
    '254': {
        'character': 'すごいよ！！',
        'letter': "It's awesome!",
        'pinyin': 'すごいよ！！',
        'definition': 'すごい よ',
        'pinyinSpace': 'すごい よ ！！'
    },
    '255': {
        'character': 'そういうすげぇじゃねぇんだけどな…',
        'letter': "It's not that awesome...",
        'pinyin': 'そういうすげぇじゃねぇんだけどな…',
        'definition': 'そういう すげぇ じゃねぇ ん だけど な',
        'pinyinSpace': 'そういう すげぇ じゃねぇ ん だけど な …'
    },
    '256': {
        'character': 'ほらほら',
        'letter': 'Come on, come on, come on.',
        'pinyin': 'ほらほら',
        'definition': 'ほらほら',
        'pinyinSpace': 'ほらほら'
    },
    '257': {
        'character': 'まずはちゃんと体洗えよ',
        'letter': 'Wash yourself first.',
        'pinyin': 'まずはちゃんとからだあらえよ',
        'definition': 'まず は ちゃんと 体 洗え よ',
        'pinyinSpace': 'まず は ちゃんと からだ あらえ よ'
    },
    '258': {
        'character': '背中流してあげようか？',
        'letter': 'Do you want me to wash your back?',
        'pinyin': 'せなかながしてあげようか？',
        'definition': '背中 流して あげよう か',
        'pinyinSpace': 'せなか ながして あげよう か ？'
    },
    '259': {
        'character': 'うん頼むよ',
        'letter': 'Yes, please.',
        'pinyin': 'うんたのむよ',
        'definition': 'うん 頼む よ',
        'pinyinSpace': 'うん たのむ よ'
    },
    '260': {
        'character': '背中流してあげようか？',
        'letter': 'Do you want me to wash your back?',
        'pinyin': 'せなかながしてあげようか？',
        'definition': '背中 流して あげよう か',
        'pinyinSpace': 'せなか ながして あげよう か ？'
    },
    '261': {
        'character': 'おうお前もちったぁ気が利くじゃねぇか',
        'letter': "Oh, you're so thoughtful.",
        'pinyin': 'おうおまえもちったぁきがきくじゃねぇか',
        'definition': 'おう お前 もち ったぁ 気が利く じゃねぇ か',
        'pinyinSpace': 'おう おまえ もち ったぁ きがきく じゃねぇ か'
    },
    '262': {
        'character': 'やめろ何かこそばゆいぞ',
        'letter': "Stop it, you're making me nervous.",
        'pinyin': 'やめろなにかこそばゆいぞ',
        'definition': 'やめろ 何か こそばゆい ぞ',
        'pinyinSpace': 'やめろ なにか こそばゆい ぞ'
    },
    '263': {
        'character': 'パンダくんもっと強くこするんだよ',
        'letter': 'Panda, rub harder.',
        'pinyin': 'ぱんだくんもっとつよくこするんだよ',
        'definition': 'パンダ くん もっと 強く こする ん だ よ',
        'pinyinSpace': 'パンダ くん もっと つよく こする ん だ よ'
    },
    '264': {
        'character': 'イテーッ！！ツメ立てんなツメ！',
        'letter': "Ouch! Don't get your claws in my face!",
        'pinyin': 'いてーっ！！つめたてんなつめ！',
        'definition': 'イテーッ ツメ 立てん な ツメ',
        'pinyinSpace': 'イテーッ ！！ ツメ たてん な ツメ ！'
    },
    '265': {
        'character': 'あっごめん',
        'letter': "Oh, I'm sorry.",
        'pinyin': 'あっごめん',
        'definition': 'あっご めん',
        'pinyinSpace': 'あっご めん'
    },
    '266': {
        'character': '目に染みるよ',
        'letter': "It's stinging my eyes.",
        'pinyin': 'めにしみるよ',
        'definition': '目に染みる よ',
        'pinyinSpace': 'めにしみる よ'
    },
    '267': {
        'character': '早く流せ',
        'letter': 'Get it out of my eyes.',
        'pinyin': 'はやくながせ',
        'definition': '早く 流せ',
        'pinyinSpace': 'はやく ながせ'
    },
    '268': {
        'character': 'グリズリーさん…',
        'letter': 'Mr. Grizzly...',
        'pinyin': 'ぐりずりーさん…',
        'definition': 'グリズリー さん',
        'pinyinSpace': 'グリズリー さん …'
    },
    '269': {
        'character': '誰？',
        'letter': "Who's there?",
        'pinyin': 'だれ？',
        'definition': '誰',
        'pinyinSpace': 'だれ ？'
    },
    '270': {
        'character': 'ハア…すっきり',
        'letter': "Oh, that's so refreshing.",
        'pinyin': 'はあ…すっきり',
        'definition': 'ハア すっきり',
        'pinyinSpace': 'ハア … すっきり'
    },
    '271': {
        'character': 'グリズリーさんも流してあげるよ',
        'letter': "I'll flush you, too, Mr. Grizzly.",
        'pinyin': 'ぐりずりーさんもながしてあげるよ',
        'definition': 'グリズリー さん も 流して あげる よ',
        'pinyinSpace': 'グリズリー さん も ながして あげる よ'
    },
    '272': {
        'character': 'おう頼むぜ',
        'letter': 'Oh, come on.',
        'pinyin': 'おうたのむぜ',
        'definition': 'おう 頼む ぜ',
        'pinyinSpace': 'おう たのむ ぜ'
    },
    '273': {
        'character': 'アチーッ！！熱いじゃねえか！',
        'letter': "Atch! That's hot!",
        'pinyin': 'あちーっ！！あついじゃねえか！',
        'definition': 'アチーッ 熱い じゃねえ か',
        'pinyinSpace': 'アチーッ ！！ あつい じゃねえ か ！'
    },
    '274': {
        'character': 'ごめんなさい…',
        'letter': "I'm sorry...",
        'pinyin': 'ごめんなさい…',
        'definition': 'ごめんなさい',
        'pinyinSpace': 'ごめんなさい …'
    },
    '275': {
        'character': '赤いほうを回すとお湯で',
        'letter': "You turn the red one, it's hot water.",
        'pinyin': 'あかいほうをまわすとおゆで',
        'definition': '赤い ほう を 回す と お湯 で',
        'pinyinSpace': 'あかい ほう を まわす と おゆ で'
    },
    '276': {
        'character': '青いほうが水だからな',
        'letter': 'The blue one is water.',
        'pinyin': 'あおいほうがみずだからな',
        'definition': '青い ほう が 水 だから な',
        'pinyinSpace': 'あおい ほう が みず だ から な'
    },
    '277': {
        'character': 'わかった',
        'letter': 'I get it.',
        'pinyin': 'わかった',
        'definition': 'わかった',
        'pinyinSpace': 'わかった'
    },
    '278': {
        'character': '冷てぇ！！ちゃんと調節しろよ！',
        'letter': "It's cold! You've got to adjust the settings!",
        'pinyin': 'ひやてぇ！！ちゃんとちょうせつしろよ！',
        'definition': '冷 てぇ ちゃんと 調節しろ よ',
        'pinyinSpace': 'れい/ひや てぇ ！！ ちゃんと ちょうせつ しろ よ ！'
    },
    '279': {
        'character': 'ごめんなさい…',
        'letter': "I'm sorry, I'm sorry, I'm sorry.",
        'pinyin': 'ごめんなさい…',
        'definition': 'ごめんなさい',
        'pinyinSpace': 'ごめんなさい …'
    },
    '280': {
        'character': 'アチーッ！！',
        'letter': 'Aah!',
        'pinyin': 'あちーっ！！',
        'definition': 'アチーッ',
        'pinyinSpace': 'アチーッ ！！'
    },
    '281': {
        'character': '冷てぇ！！',
        'letter': "It's cold!",
        'pinyin': 'ひやてぇ！！',
        'definition': '冷 てぇ',
        'pinyinSpace': 'れい/ひや てぇ ！！'
    },
    '282': {
        'character': 'アチーッ！！',
        'letter': 'Achy!',
        'pinyin': 'あちーっ！！',
        'definition': 'アチーッ',
        'pinyinSpace': 'アチーッ ！！'
    },
    '283': {
        'character': '冷てぇ！！',
        'letter': "It's cold!",
        'pinyin': 'ひやてぇ！！',
        'definition': '冷 てぇ',
        'pinyinSpace': 'れい/ひや てぇ ！！'
    },
    '284': {
        'character': 'えっと…えっと…',
        'letter': 'Uh... uh...',
        'pinyin': 'えっと…えっと…',
        'definition': 'えっと えっと',
        'pinyinSpace': 'えっと … えっと …'
    },
    '285': {
        'character': 'パンダ…もういい気持だけもらっとく',
        'letter': 'Panda... just take the good feelings already.',
        'pinyin': 'ぱんだ…もういいきもちだけもらっとく',
        'definition': 'パンダ もう いい気持 だけ もらっとく',
        'pinyinSpace': 'パンダ … もう いいきもち だけ もらっとく'
    },
    '286': {
        'character': 'いいニオイになったね',
        'letter': 'You got a nice smell now.',
        'pinyin': 'いいにおいになったね',
        'definition': 'いい ニオイ に なった ね',
        'pinyinSpace': 'いい ニオイ に なった ね'
    },
    '287': {
        'character': '何の香りだ？ここのシャンプー',
        'letter': "What's that smell? Shampoo.",
        'pinyin': 'なにのかおりだ？ここのしゃんぷー',
        'definition': '何の 香り だ ここ の シャンプー',
        'pinyinSpace': 'なんの かおり だ ？ ここ の シャンプー'
    },
    '288': {
        'character': 'うんすごくおいしそうなニオイ',
        'letter': 'It smells so good.',
        'pinyin': 'うんすごくおいしそうなにおい',
        'definition': 'うん すごく おいしそう な ニオイ',
        'pinyinSpace': 'うん すごく おいしそう な ニオイ'
    },
    '289': {
        'character': 'これ',
        'letter': 'Here.',
        'pinyin': 'これ',
        'definition': 'これ',
        'pinyinSpace': 'これ'
    },
    '290': {
        'character': 'クマザサシャンプーだね',
        'letter': 'Kumazasa shampoo.',
        'pinyin': 'くまざさしゃんぷーだね',
        'definition': 'クマザサ シャンプー だ ね',
        'pinyinSpace': 'クマザサ シャンプー だ ね'
    },
    '291': {
        'character': '飲めないかな？',
        'letter': 'Can I drink it?',
        'pinyin': 'のめないかな？',
        'definition': '飲めない かな',
        'pinyinSpace': 'のめない かな ？'
    },
    '292': {
        'character': '飲むんじゃねぇぞ',
        'letter': "Don't drink it!",
        'pinyin': 'のむんじゃねぇぞ',
        'definition': '飲む ん じゃねぇ ぞ',
        'pinyinSpace': 'のむ ん じゃねぇ ぞ'
    },
    '293': {
        'character': 'というわけでパンダくんお風呂に入れてみよう',
        'letter': "So, let's give him a bath, panda.",
        'pinyin': 'というわけでぱんだくんおふろにいれてみよう',
        'definition': 'という わけ で パンダ くん お風呂に入れて みよう',
        'pinyinSpace': 'という わけ で パンダ くん おふろにはいれて みよう'
    },
    '294': {
        'character': 'いいね',
        'letter': "That's good.",
        'pinyin': 'いいね',
        'definition': 'いいね',
        'pinyinSpace': 'いいね'
    },
    '295': {
        'character': 'よくねぇやめろ',
        'letter': 'No, no, no, no, no, no, no, no, no, no, no, no, no.',
        'pinyin': 'よくねぇやめろ',
        'definition': 'よくねぇ やめろ',
        'pinyinSpace': 'よくねぇ やめろ'
    },
    '296': {
        'character': 'わ～い！わ～い飛んだ飛んだ！',
        'letter': 'Oh, wow! Yay, it flew!',
        'pinyin': 'わ～い！わ～いとんだとんだ！',
        'definition': 'わ い わ い 飛んだ 飛んだ',
        'pinyinSpace': 'わ ～ い ！ わ ～ い とんだ とんだ ！'
    },
    '297': {
        'character': 'そうそううまいうまい',
        'letter': "Oh, yeah, that's good, that's good, that's good, that's good.",
        'pinyin': 'そうそううまいうまい',
        'definition': 'そうそう うまい うまい',
        'pinyinSpace': 'そうそう うまい うまい'
    },
    '298': {
        'character': 'あれどうやるの？',
        'letter': 'How do you do that?',
        'pinyin': 'あれどうやるの？',
        'definition': 'あれ どう やる の',
        'pinyinSpace': 'あれ どう やる の ？'
    },
    '299': {
        'character': 'こうだよ',
        'letter': 'Like this.',
        'pinyin': 'こうだよ',
        'definition': 'こう だ よ',
        'pinyinSpace': 'こう だ よ'
    },
    '300': {
        'character': 'やめろ！',
        'letter': 'Stop it!',
        'pinyin': 'やめろ！',
        'definition': 'やめろ',
        'pinyinSpace': 'やめろ ！'
    },
    '301': {
        'character': 'ったく！',
        'letter': 'Oh, shit!',
        'pinyin': 'ったく！',
        'definition': 'ったく',
        'pinyinSpace': 'ったく ！'
    },
    '302': {
        'character': 'どこ行くの？',
        'letter': 'Where are you going?',
        'pinyin': 'どこいくの？',
        'definition': 'どこ 行く の',
        'pinyinSpace': 'どこ いく の ？'
    },
    '303': {
        'character': '俺はサウナが好きなんだ',
        'letter': 'I like saunas.',
        'pinyin': 'おれはさうながすきなんだ',
        'definition': '俺 は サウナ が 好き な ん だ',
        'pinyinSpace': 'おれ は サウナ が すき な ん だ'
    },
    '304': {
        'character': 'それは魚！',
        'letter': "That's a fish!",
        'pinyin': 'それはさかな！',
        'definition': 'それは 魚',
        'pinyinSpace': 'それは さかな ！'
    },
    '305': {
        'character': 'それはアンテナ！',
        'letter': "It's an antenna!",
        'pinyin': 'それはあんてな！',
        'definition': 'それは アンテナ',
        'pinyinSpace': 'それは アンテナ ！'
    },
    '306': {
        'character': 'それは手品！',
        'letter': "It's a magic trick!",
        'pinyin': 'それはてじな！',
        'definition': 'それは 手品',
        'pinyinSpace': 'それは てじな ！'
    },
    '307': {
        'character': 'サウナって何？',
        'letter': "What's a sauna?",
        'pinyin': 'さうなってなに？',
        'definition': 'サウナ って 何',
        'pinyinSpace': 'サウナ って なに/なん ？'
    },
    '308': {
        'character': 'ふぅ～なんかすごい汗出るよ',
        'letter': 'It makes you sweat like crazy.',
        'pinyin': 'ふぅ～なんかすごいあせでるよ',
        'definition': 'ふぅ なんか すごい 汗 出る よ',
        'pinyinSpace': 'ふぅ ～ なんか すごい あせ でる よ'
    },
    '309': {
        'character': 'それがサウナのいいところだ',
        'letter': "That's the beauty of a sauna.",
        'pinyin': 'それがさうなのいいところだ',
        'definition': 'それ が サウナ の いい ところ だ',
        'pinyinSpace': 'それ が サウナ の いい ところ だ'
    },
    '310': {
        'character': '蒸されてる感じ',
        'letter': "It's like being steamed.",
        'pinyin': 'むされてるかんじ',
        'definition': '蒸されてる 感じ',
        'pinyinSpace': 'むされてる かんじ'
    },
    '311': {
        'character': 'これが体にいいんだよ！',
        'letter': "It's good for you!",
        'pinyin': 'これがからだにいいんだよ！',
        'definition': 'これ が 体 に いい ん だ よ',
        'pinyinSpace': 'これ が からだ に いい ん だ よ ！'
    },
    '312': {
        'character': 'もう限界…',
        'letter': "I'm at my limit...",
        'pinyin': 'もうげんかい…',
        'definition': 'もう 限界',
        'pinyinSpace': 'もう げんかい …'
    },
    '313': {
        'character': '情けねぇな',
        'letter': "I'm so pathetic...",
        'pinyin': 'なさけねぇな',
        'definition': '情けねぇ な',
        'pinyinSpace': 'なさけねぇ な'
    },
    '314': {
        'character': '僕ももうダメ…',
        'letter': "I can't take it anymore either...",
        'pinyin': 'ぼくももうだめ…',
        'definition': '僕 ももう ダメ',
        'pinyinSpace': 'ぼく ももう ダメ …'
    },
    '315': {
        'character': '辛抱が足りねぇな',
        'letter': "I'm running out of patience.",
        'pinyin': 'しんぼうがたりねぇな',
        'definition': '辛抱 が 足りねぇ な',
        'pinyinSpace': 'しんぼう が たりねぇ な'
    },
    '316': {
        'character': '今日はやけに時間が長く感じるぜ',
        'letter': 'Time seems to be taking longer than usual today...',
        'pinyin': 'きょうはやけにじかんがながくかんじるぜ',
        'definition': '今日 は やけに 時間 が 長く 感じる ぜ',
        'pinyinSpace': 'きょう は やけに じかん が ながく かんじる ぜ'
    },
    '317': {
        'character': '俺ももう限界…',
        'letter': "I'm at my limit too...",
        'pinyin': 'おれももうげんかい…',
        'definition': '俺 ももう 限界',
        'pinyinSpace': 'おれ ももう げんかい …'
    },
    '318': {
        'character': '出よう',
        'letter': "Let's get out of here.",
        'pinyin': 'でよう',
        'definition': '出よう',
        'pinyinSpace': 'でよう'
    },
    '319': {
        'character': 'テメエらの仕業か！',
        'letter': 'You did this to me!',
        'pinyin': 'てめえらのしぎょうか！',
        'definition': 'テメエら の 仕業 か',
        'pinyinSpace': 'テメエら の しわざ か ！'
    },
    '320': {
        'character': 'おもしろかった！',
        'letter': 'That was fun.',
        'pinyin': 'おもしろかった！',
        'definition': 'おもしろかった',
        'pinyinSpace': 'おもしろかった ！'
    },
    '321': {
        'character': '夜遊びっておもしろいね',
        'letter': 'The nightlife is fun.',
        'pinyin': 'よあそびっておもしろいね',
        'definition': '夜遊び って おもしろい ね',
        'pinyinSpace': 'よあそび って おもしろい ね'
    },
    '322': {
        'character': '小腹も空いたしちょっと一杯やってくか',
        'letter': "I'm feeling a little hungry. I think I'm gonna grab a drink.",
        'pinyin': 'こばらもあいたしちょっといっぱいやってくか',
        'definition': '小腹 も 空いた し ちょっと 一杯やってく か',
        'pinyinSpace': 'こばら も すいた し ちょっと いっぱいやってく か'
    },
    '323': {
        'character': 'いいね',
        'letter': 'Yeah, that sounds good.',
        'pinyin': 'いいね',
        'definition': 'いいね',
        'pinyinSpace': 'いいね'
    },
    '324': {
        'character': 'えっ？なになに？',
        'letter': 'What? What is it?',
        'pinyin': 'えっ？なになに？',
        'definition': 'え っ なになに',
        'pinyinSpace': 'え っ ？ なになに ？'
    },
    '325': {
        'character': 'へいらっしゃい！',
        'letter': 'Come here!',
        'pinyin': 'へいらっしゃい！',
        'definition': 'へ いらっしゃい',
        'pinyinSpace': 'へ いらっしゃい ！'
    },
    '326': {
        'character': 'おや今日は新顔さんもご一緒で',
        'letter': 'Well, we have a newcomer with us today.',
        'pinyin': 'おやきょうはしんがおさんもごいっしょで',
        'definition': 'おや 今日 は 新顔 さん も ご一緒 で',
        'pinyinSpace': 'おや きょう は しんがお さん も ごいっしょ で'
    },
    '327': {
        'character': '親父とりあえず生２つ',
        'letter': "Dad, I'll just have two drafts for now.",
        'pinyin': 'おやじとりあえずなま２つ',
        'definition': '親父 とりあえず 生 ２つ',
        'pinyinSpace': 'おやじ とりあえず なま ふたつ'
    },
    '328': {
        'character': 'あとアイスコーヒーください',
        'letter': 'And an iced coffee, please.',
        'pinyin': 'あとあいすこーひーください',
        'definition': 'あと アイスコーヒー ください',
        'pinyinSpace': 'あと アイスコーヒー ください'
    },
    '329': {
        'character': 'カフェじゃねぇんだぞ',
        'letter': "This ain't no cafe!",
        'pinyin': 'かふぇじゃねぇんだぞ',
        'definition': 'カフェ じゃねぇ ん だ ぞ',
        'pinyinSpace': 'カフェ じゃねぇ ん だ ぞ'
    },
    '330': {
        'character': 'ああおいしそう！',
        'letter': 'Looks delicious!',
        'pinyin': 'ああおいしそう！',
        'definition': 'ああ おいしそう',
        'pinyinSpace': 'ああ おいしそう ！'
    },
    '331': {
        'character': '串ごと食うなよ',
        'letter': "Don't eat the whole skewer!",
        'pinyin': 'くしごとくうなよ',
        'definition': '串 ごと 食う な よ',
        'pinyinSpace': 'くし ごと くう な よ'
    },
    '332': {
        'character': 'おいしい！',
        'letter': 'Delicious!',
        'pinyin': 'おいしい！',
        'definition': 'おいしい',
        'pinyinSpace': 'おいしい ！'
    },
    '333': {
        'character': 'まぁぐいっと！',
        'letter': 'Take a big gulp!',
        'pinyin': 'まぁぐいっと！',
        'definition': 'まぁ ぐいっと',
        'pinyinSpace': 'まぁ ぐいっと ！'
    },
    '334': {
        'character': 'ああすみません',
        'letter': "Oh, I'm sorry.",
        'pinyin': 'ああすみません',
        'definition': 'ああ すみません',
        'pinyinSpace': 'ああ すみません'
    },
    '335': {
        'character': '夜遊びって最高だね！',
        'letter': 'I love a good night out!',
        'pinyin': 'よあそびってさいこうだね！',
        'definition': '夜遊び って 最高 だ ね',
        'pinyinSpace': 'よあそび って さいこう だ ね ！'
    },
    '336': {
        'character': 'だろ！',
        'letter': "It's great!",
        'pinyin': 'だろ！',
        'definition': 'だろ',
        'pinyinSpace': 'だろ ！'
    },
    '337': {
        'character': '人生はな昼もあれば夜もある',
        'letter': "There's day and there's night.",
        'pinyin': 'じんせいはなひるもあればよるもある',
        'definition': '人生 は な 昼 も あれば 夜 も ある',
        'pinyinSpace': 'じんせい は な ひる も あれば よる も ある'
    },
    '338': {
        'character': '明るいときもあれば暗いときもある',
        'letter': 'There are light times and dark times.',
        'pinyin': 'あかるいときもあればくらいときもある',
        'definition': '明るい とき も あれば 暗い とき も ある',
        'pinyinSpace': 'あかるい とき も あれば くらい とき も ある'
    },
    '339': {
        'character': '暗いときにも楽しいことはたくさんあるんだよ',
        'letter': "There's a lot of fun in the dark times, too.",
        'pinyin': 'くらいときにもたのしいことはたくさんあるんだよ',
        'definition': '暗い とき にも 楽しい こと は たくさん ある ん だ よ',
        'pinyinSpace': 'くらい とき にも たのしい こと は たくさん ある ん だ よ'
    },
    '340': {
        'character': 'どっちもあるからいいんだよね',
        'letter': "It's good to have both, isn't it?",
        'pinyin': 'どっちもあるからいいんだよね',
        'definition': 'どっちも ある から いい ん だよね',
        'pinyinSpace': 'どっちも ある から いい ん だよね'
    },
    '341': {
        'character': 'お客さん深いね',
        'letter': "You're a deep customer.",
        'pinyin': 'おきゃくさんふかいね',
        'definition': 'お客さん 深い ね',
        'pinyinSpace': 'おきゃくさん ふかい ね'
    },
    '342': {
        'character': 'そうだよね',
        'letter': "That's right.",
        'pinyin': 'そうだよね',
        'definition': 'そう だよね',
        'pinyinSpace': 'そう だよね'
    },
    '343': {
        'character': 'パンダも白いとこと黒いとこ両方あるからいいんだもんね',
        'letter': 'Pandas are good because they have both white and black parts.',
        'pinyin': 'ぱんだもしろいとことくろいとこりょうほうあるからいいんだもんね',
        'definition': 'パンダ も 白い とこ と 黒い とこ 両方 ある から いい ん だ もん ね',
        'pinyinSpace': 'パンダ も しろい とこ と くろい とこ りょうほう ある から いい ん だ もん ね'
    },
    '344': {
        'character': 'おおそうだな！そのとおりだ！',
        'letter': "Oh, yes! That's right!",
        'pinyin': 'おおそうだな！そのとおりだ！',
        'definition': 'お おそう だ な そのとおり だ',
        'pinyinSpace': 'お おそう だ な ！ そのとおり だ ！'
    },
    '345': {
        'character': 'だね',
        'letter': "That's right.",
        'pinyin': 'だね',
        'definition': 'だ ね',
        'pinyinSpace': 'だ ね'
    },
    '346': {
        'character': 'グリズリーくん',
        'letter': 'Grizzly bear.',
        'pinyin': 'ぐりずりーくん',
        'definition': 'グリズリー くん',
        'pinyinSpace': 'グリズリー くん'
    },
    '347': {
        'character': 'すっかり寝ちゃったねパンダくん',
        'letter': "You're all tuckered out, panda.",
        'pinyin': 'すっかりねちゃったねぱんだくん',
        'definition': 'すっかり 寝ちゃった ね パンダ くん',
        'pinyinSpace': 'すっかり ねちゃった ね パンダ くん'
    },
    '348': {
        'character': 'なんで俺がコイツをおぶって帰んなきゃなんねぇんだよ',
        'letter': 'Why do I have to carry him home?',
        'pinyin': 'なんでおれがこいつをおぶってかえんなきゃなんねぇんだよ',
        'definition': 'なんで 俺 が コイツ を お ぶって 帰ん なきゃ なん ねぇ んだ よ',
        'pinyinSpace': 'なんで おれ が コイツ を お ぶって 帰ん なきゃ なん ねぇ んだ よ'
    },
    '349': {
        'character': '楽しかった…',
        'letter': 'It was fun...',
        'pinyin': 'たのしかった…',
        'definition': '楽しかった',
        'pinyinSpace': 'たのしかった …'
    },
    '350': {
        'character': '楽しかったって',
        'letter': 'It was fun...',
        'pinyin': 'たのしかったって',
        'definition': '楽しかった って',
        'pinyinSpace': 'たのしかった って'
    },
    '351': {
        'character': 'まっまた連れてきてやってもいいかな',
        'letter': "I'll bring him back again.",
        'pinyin': 'まっまたつれてきてやってもいいかな',
        'definition': 'まっまた 連れてきて やってもいい かな',
        'pinyinSpace': 'まっまた つれてきて やって もいい かな'
    },
    '352': {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Penguin! Penguin!',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '353': {
        'character': '何？パンダ君',
        'letter': 'What? Mr. Panda.',
        'pinyin': 'なに？ぱんだくん',
        'definition': '何 パンダ 君',
        'pinyinSpace': 'なに/なん ？ パンダ きみ/くん'
    },
    '354': {
        'character': '自分が格好いいなと思った瞬間の話して',
        'letter': 'Tell me about a moment when you thought you were cool.',
        'pinyin': 'じぶんがかっこいいなとおもったしゅんかんのはなして',
        'definition': '自分 が 格好いい な と 思った 瞬間 の 話して',
        'pinyinSpace': 'じぶん が かっこいい な と おもった しゅんかん の はなして'
    },
    '355': {
        'character': 'そうだなぁ',
        'letter': "I don't know.",
        'pinyin': 'そうだなぁ',
        'definition': 'そう だ なぁ',
        'pinyinSpace': 'そう だ なぁ'
    },
    '356': {
        'character': 'ないならいいよ',
        'letter': "If you don't have one, that's okay.",
        'pinyin': 'ないならいいよ',
        'definition': 'ない なら いい よ',
        'pinyinSpace': 'ない なら いい よ'
    },
    '357': {
        'character': '二秒も考えさせてもらえないんだね',
        'letter': "You're not gonna give me two seconds to think about it.",
        'pinyin': 'にびょうもかんがえさせてもらえないんだね',
        'definition': '二秒 も 考えさせてもらえない ん だ ね',
        'pinyinSpace': 'にびょう も かんがえさせて もらえない ん だ ね'
    },
    '358': {
        'character': 'ないならいいよ',
        'letter': "If you don't have one, that's okay.",
        'pinyin': 'ないならいいよ',
        'definition': 'ない なら いい よ',
        'pinyinSpace': 'ない なら いい よ'
    },
    '359': {
        'character': '探したかったな',
        'letter': 'I wish I could have found it.',
        'pinyin': 'さがしたかったな',
        'definition': '探したかった な',
        'pinyinSpace': 'さがしたかった な'
    },
    '360': {
        'character': 'ないならいいよ',
        'letter': "If you don't have it, it's fine.",
        'pinyin': 'ないならいいよ',
        'definition': 'ない なら いい よ',
        'pinyinSpace': 'ない なら いい よ'
    },
    '361': {
        'character': '白熊君頼んだ',
        'letter': "Polar Bear, you're on.",
        'pinyin': 'しろくまくんたのんだ',
        'definition': '白熊 君 頼んだ',
        'pinyinSpace': 'しろくま/はぐま きみ/くん たのんだ'
    },
    '362': {
        'character': '次回しろくまカフェ',
        'letter': 'Next time at the Shirokuma Cafe.',
        'pinyin': 'じかいしろくまかふぇ',
        'definition': '次回 しろくま カフェ',
        'pinyinSpace': 'じかい しろくま カフェ'
    },
    '363': {
        'character': '生放送でお送りします',
        'letter': "We'll be broadcasting live.",
        'pinyin': 'なまほうそうでおおくりします',
        'definition': '生放送 で お 送り します',
        'pinyinSpace': 'なまほうそう で お おくり します'
    },
    '364': {
        'character': 'いつもどおりやるよ',
        'letter': "We'll be doing what we always do.",
        'pinyin': 'いつもどおりやるよ',
        'definition': 'いつもどおり やる よ',
        'pinyinSpace': 'いつもどおり やる よ'
    },
    '365': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'お楽しみに',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
    }
}