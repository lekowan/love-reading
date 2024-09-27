// Configuration
const localStorageKey = "japanese" + "Episode1Part1" + "Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep1 Part 1 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap = {
    '1': {
        'character': 'しろくまカフェへようこそ',
        'letter': 'Welcome to Shirokuma Cafe',
        'pinyin': 'しろくまかふぇへようこそ',
        'definition': 'しろくま カフェ へ ようこそ',
        'pinyinSpace': 'しろくま カフェ へ ようこそ'
    },
    '2': {
        'character': '笹を食べながらのんびりするのは最高だなぁ',
        'letter': 'I love relaxing while eating bamboo grass.',
        'pinyin': 'ささをたべながらのんびりするのはさいこうだなぁ',
        'definition': '笹 を 食べ ながら のんびりする の は 最高 だ なぁ',
        'pinyinSpace': 'ささ を たべ ながら のんびり する の は さいこ だ なぁ'
    },
    '3': {
        'character': 'ちょっとまたこの子は昼間からゴロゴロして',
        'letter': 'Look at you, being so lazy so early in the day',
        'pinyin': 'ちょっとまたこのこはひるまからごろご',
        'definition': 'ちょっと また この 子 は 昼間 から ゴロゴロして',
        'pinyinSpace': 'ちょっと また この こ は ひるま から ゴロゴロ して'
    },
    '4': {
        'character': '掃除の邪魔よどきなさい',
        'letter': "You're interrupting my cleaning, so get out of my way.",
        'pinyin': 'そうじのじゃまよどきなさい',
        'definition': '掃除 の 邪魔 よ どきなさい',
        'pinyinSpace': 'そうじ の じゃま よ どきなさい'
    },
    '5': {
        'character': 'はいー',
        'letter': 'Okay',
        'pinyin': 'はいー',
        'definition': 'はい ー',
        'pinyinSpace': 'はい ー'
    },
    '6': {
        'character': 'お母さんおかわり',
        'letter': 'Seconds, please Mum',
        'pinyin': 'おかあさんおかわり',
        'definition': 'お母さん おかわり',
        'pinyinSpace': 'おかあさん おかわり'
    },
    '7': {
        'character': 'どうするのあなた将来は',
        'letter': 'Exactly what do you have planned for your future?',
        'pinyin': 'どうするのあなたしょうらいは',
        'definition': 'どう する の あなた 将来 は',
        'pinyinSpace': 'ど する の あなた しょうらい は'
    },
    '8': {
        'character': 'もうゴロゴロしてるときに将来の話なんかしないでよ',
        'letter': "Could we not talk about my future when I'm relaxing?",
        'pinyin': 'もうごろごろしてるときにしょうらいのはなしなんかしないでよ',
        'definition': 'もう ゴロゴロしてる とき に 将来 の 話 なんか しないで よ',
        'pinyinSpace': 'もう ゴロゴロ してる とき に しょうらい の はなし なんか しないで よ'
    },
    '9': {
        'character': '暇があるならちょっとはバイトでも探しなさい',
        'letter': "If you've got time to kill, why don't you get a part-time job?",
        'pinyin': 'ひまがあるならちょっとはばいとでもさがしなさい',
        'definition': '暇 が ある なら ちょっと は バイト でも 探しなさい',
        'pinyinSpace': 'ひま が ある なら ちょっと は バイト でも さがしなさい'
    },
    '10': {
        'character': 'ええゴロゴロするのに忙しいから後にするよ',
        'letter': "I'm too busy relaxing, so I'll do it later.",
        'pinyin': 'ええごろごろするのにいそがしいからあとにするよ',
        'definition': 'ええ ゴロゴロする のに 忙しい から 後にする よ',
        'pinyinSpace': 'ええ ゴロゴロ する のに いそがしい から あとにする よ'
    },
    '11': {
        'character': 'ああー吸わないで',
        'letter': "Don't try to suck me up!",
        'pinyin': 'ああーすわないで',
        'definition': 'あ あー 吸わないで',
        'pinyinSpace': 'あ あー すわないで'
    },
    '12': {
        'character': 'もう',
        'letter': 'Jeez',
        'pinyin': 'もう',
        'definition': 'もう',
        'pinyinSpace': 'もう'
    },
    '13': {
        'character': 'どうしてお母さんはゴロゴロする忙しさが分かんないんだろな',
        'letter': "I wonder why Mom can't understand how much time relaxing takes up",
        'pinyin': 'どうしておかあさんはごろごろするいそがしさがわかん',
        'definition': 'どうして お母さん は ゴロゴロする 忙しさ が 分かんない ん だろ な',
        'pinyinSpace': 'どうして おかあさん は ゴロゴロ する いそがしさ が わかんない ん だろ な'
    },
    '14': {
        'character': 'えーと働かないでお金がもらえる仕事が載っているのはどれですか',
        'letter': 'Excuse me, which ones of these will have jobs where I can get paid to do nothing?',
        'pinyin': 'えーとはたらかないでおかねがもらえるしごとがのっているのはどれですか',
        'definition': 'えー と 働かないで お金 が もらえる 仕事 が 載っている の は どれ です か',
        'pinyinSpace': 'えー と はたらかないで おかね が もらえる しごと が のっている の は どれ です か'
    },
    '15': {
        'character': 'ないと',
        'letter': "I don't think there is one",
        'pinyin': 'ないとおもいます',
        'definition': 'ない と 思います',
        'pinyinSpace': 'ない と おもいます'
    },
    '16': {
        'character': 'え',
        'letter': 'What?',
        'pinyin': 'え',
        'definition': 'え',
        'pinyinSpace': 'え'
    },
    '17': {
        'character': 'どうせならお洒落なバイトがいいなぁ',
        'letter': "I'd like a stylish job anyway.",
        'pinyin': 'どうせならおしゃれなばいとがいいなぁ',
        'definition': 'どうせなら お洒落 な バイト が いい なぁ',
        'pinyinSpace': 'どうせなら おしゃれ な バイト が いい なぁ'
    },
    '18': {
        'character': 'あこれいいな',
        'letter': 'Oh, this looks good',
        'pinyin': 'あこれいいな',
        'definition': 'あ これ いい な',
        'pinyinSpace': 'あ これ いい な'
    },
    '19': {
        'character': 'はい',
        'letter': 'Yes?',
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '20': {
        'character': 'あもしもしパンダと申しますが',
        'letter': 'Hello, my name is Panda.',
        'pinyin': 'あもしもしぱんだともうしますが',
        'definition': 'あ もしもし パンダ と 申します が',
        'pinyinSpace': 'あ もしもし パンダ と もうします が'
    },
    '21': {
        'character': 'そちらでデザインな',
        'letter': "You're looking for a part-time designer, right?",
        'pinyin': 'そちらででざいんなーでざいなーのあるばいとぼしゅうしてますよね',
        'definition': 'そちら で デザイン なー デザイナー の アルバイト 募集してます よね',
        'pinyinSpace': 'そちら で デザイン なー デザイナー の アルバイト ぼしゅう してます よね'
    },
    '22': {
        'character': 'ええそう',
        'letter': 'Do you have any experience?',
        'pinyin': 'ええそうですよけいけんは？',
        'definition': 'え えそう です よ 経験 は',
        'pinyinSpace': 'え えそう です よ けいけん は ？'
    },
    '23': {
        'character': 'ありません',
        'letter': 'Not at all',
        'pinyin': 'ありません',
        'definition': 'ありません',
        'pinyinSpace': 'ありません'
    },
    '24': {
        'character': 'パソコンのマウスは使えますか',
        'letter': 'Can you use a computer mouse?',
        'pinyin': 'ぱそこんのまうすはつかえますか',
        'definition': 'パソコン の マウス は 使えます か',
        'pinyinSpace': 'パソコン の マウ は つかえます か'
    },
    '25': {
        'character': '使えないですあんまり細かい作業はできません',
        'letter': "I'm not very good with detailed work",
        'pinyin': 'つかえないですあんまりこまかいさぎょうはできません',
        'definition': '使えないです あんまり 細かい 作業 は できません',
        'pinyinSpace': 'つかえない です あんまり こまかい さぎょう は できません'
    },
    '26': {
        'character': 'そうですか得意なことはありますか',
        'letter': "Is there anything you're good at?",
        'pinyin': 'そうですかとくいなことはありますか',
        'definition': 'そう です か 得意 な こと は あります か',
        'pinyinSpace': 'そう です か とくい な こと は あります か'
    },
    '27': {
        'character': 'あります',
        'letter': 'Yes, there is',
        'pinyin': 'あります',
        'definition': 'あります',
        'pinyinSpace': 'あります'
    },
    '28': {
        'character': '笹を食べたり寝ながらぼんやりするのが得意です',
        'letter': "I'm good at eating bamboo grass and zoning out while lying down",
        'pinyin': 'ささをたべたりねながらぼんやりするのがとくいです',
        'definition': '笹 を 食べたり 寝 ながら ぼんやりする の が 得意 です',
        'pinyinSpace': 'ささ を たべたり ね ながら ぼんやり する の が とくい です'
    },
    '29': {
        'character': 'あれもしもーし',
        'letter': 'Oh, hello?',
        'pinyin': 'あれもしもーし',
        'definition': 'あれ もし  し',
        'pinyinSpace': 'あれ もし もー し'
    },
    '30': {
        'character': 'もしもしそちらでインテリアコーディネーターも募集してますよね',
        'letter': "Hello? You're also looking for an interior decorator, right?",
        'pinyin': 'もしもしそちらでいんてりあこーでぃねーたーもぼしゅうしてますよね',
        'definition': 'もしもし そちら で インテリア コーディネーター も 募集してます よね',
        'pinyinSpace': 'もしもし そちら で インテリア コーディネーター も ぼしゅう してます よね'
    },
    '31': {
        'character': 'インテリアコーディネーターってなんですか',
        'letter': "What's an interior decorator?",
        'pinyin': 'いんてりあこーでぃねーたーってなんですか',
        'definition': 'インテリア コーディネーター って なんです か',
        'pinyinSpace': 'インテリア コーディネーター って なんです か'
    },
    '32': {
        'character': 'またゴロゴロして',
        'letter': 'There you are being lazy again',
        'pinyin': 'またごろごろして',
        'definition': 'また ゴロゴロして',
        'pinyinSpace': 'また ゴロゴロ して'
    },
    '33': {
        'character': 'アルバイト見つかったの',
        'letter': 'Did you find a part-time job?',
        'pinyin': 'あるばいとみつかったの',
        'definition': 'アルバイト 見つかった の',
        'pinyinSpace': 'アルバイト みつかった の'
    },
    '34': {
        'character': '全然ないよ',
        'letter': "There aren't any!",
        'pinyin': 'ぜんぜんないよ',
        'definition': '全然 ない ',
        'pinyinSpace': 'ぜんぜん ない よ'
    },
    '35': {
        'character': '確かコンビニで募集してたでしょう',
        'letter': "I'm pretty sure there was an opening at the convenience store.",
        'pinyin': '',
        'definition': '確か コンビニ で 募集してた でしょう',
        'pinyinSpace': 'たしか コンビニ で ぼしゅう してた でしょう'
    },
    '36': {
        'character': 'コンビニ',
        'letter': 'Convenience store',
        'definition': 'コンビニ',
        'pinyin': 'こんびに',
        'pinyinSpace': 'コンビニ'
    },
    '37': {
        'character': '品数多過ぎるよ覚えられないよ',
        'letter': "They have too many thins, I won't be able to remember them all!",
        'pinyin': 'しなかずおおすぎるよおぼえられないよ',
        'definition': '品数 多 過ぎる よ 覚えられない よ',
        'pinyinSpace': 'しなかず た すぎる よ おぼえられない よ'
    },
    '38': {
        'character': 'あー吸わないで',
        'letter': "Don't try to suck me up!",
        'definition': 'あー 吸わないで',
        'pinyin': 'あーすわないで',
        'pinyinSpace': 'あー すわないで'
    },
    '39': {
        'character': 'もう外でだらだらしようっと',
        'letter': "I think I'll wander outside",
        'pinyin': 'もうそとでだらだらしようっと',
        'definition': 'もう 外 で だらだらしよう っと',
        'pinyinSpace': 'もう そと で だらだら しよう っと'
    },
    '40': {
        'character': 'はははあら糸屑',
        'letter': 'Huh?  A string',
        'pinyin': 'はははあらいとくず',
        'definition': 'ははは あら 糸屑',
        'pinyinSpace': 'ははは あら いとくず'
    },
    '41': {
        'character': 'あ取って',
        'letter': 'Could you get it?',
        'pinyin': 'あとって',
        'definition': 'あ 取って',
        'pinyinSpace': 'あ とって'
    },
    '42': {
        'character': 'うん取れた',
        'letter': 'Yeah, I got it.',
        'pinyin': 'うんとれた',
        'definition': 'うん 取れた',
        'pinyinSpace': 'うん とれた'
    },
    '43': {
        'character': 'ありが',
        'letter': 'Thank you.',
        'pinyin': 'ありがとう',
        'definition': 'ありがとう',
        'pinyinSpace': 'ありがとう'
    },
    '44': {
        'character': 'じっとしてて',
        'letter': 'Stay right there',
        'pinyin': 'じっと',
        'definition': 'じっとしてて',
        'pinyinSpace': 'じっと してて'
    },
    '45': {
        'character': 'あ待って',
        'letter': 'Oh, wait.',
        'pinyin': 'あ まって',
        'definition': 'あ 待って',
        'pinyinSpace': 'あ まって'
    },
    '46': {
        'character': 'へぇーこんな所にカフェがあったんだ',
        'letter': "Wow, I didn't know there was a cafe here.",
        'pinyin': 'へぇーこんなところにかふぇがあったんだ',
        'definition': 'へぇー こんな 所 に カフェ が あった ん だ',
        'pinyinSpace': 'へぇー こんな ところ に カフェ が あった ん だ'
    },
    '47': {
        'character': 'いらっしゃいませ',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃいませ',
        'definition': 'いらっしゃいませ',
        'pinyinSpace': 'いらっしゃいませ'
    },
    '48': {
        'character': 'ようこそしろくまカフェへ',
        'letter': 'Welcome to the Shirokuma Cafe.',
        'pinyin': 'ようこそしろくまかふぇへ',
        'definition': 'ようこそ しろくま カフェ へ',
        'pinyinSpace': 'ようこそ しろくま カフェ へ'
    },
    '49': {
        'character': 'お客様お一人様ですか',
        'letter': 'Table for one, sir?',
        'pinyin': 'おきゃくさま おひとり さま です か',
        'definition': 'お客様 お一人様 です か',
        'pinyinSpace': 'おきゃくさま おひとりさま です か'
    },
    '50': {
        'character': 'あ別に僕は',
        'letter': "Oh, I'm not really a customer",
        'pinyin': 'あべつにぼくは',
        'definition': 'あ 別に 僕 は',
        'pinyinSpace': 'あ べつに ぼく は'
    },
    '51': {
        'character': 'お好きな席へどうぞ',
        'letter': 'Please have a seat anywhere you like',
        'pinyin': 'おすきなせきへどうぞ',
        'definition': 'お 好き な 席 へ どうぞ',
        'pinyinSpace': 'お すき な せき へ どうぞ'
    },
    '52': {
        'character': 'ご注文は',
        'letter': 'May I take your order?',
        'pinyin': 'ごちゅうもんは',
        'definition': 'ご注文 は',
        'pinyinSpace': 'ごちゅうもん は'
    },
    '53': {
        'character': 'えーと竹はありますか',
        'letter': 'Uh, do you have bamboo?',
        'pinyin': 'えーとたけはありますか',
        'definition': 'えー と 竹 は あります か',
        'pinyinSpace': 'えー と たけ は あります か'
    },
    '54': {
        'character': '竹はないです',
        'letter': "We don't have bamboo.",
        'pinyin': 'たけ は ない です',
        'definition': '竹 は ないです',
        'pinyinSpace': 'たけ は ないです'
    },
    '55': {
        'character': 'じゃ笹ください',
        'letter': "Then I'll have some bamboo grass, please.",
        'pinyin': 'じゃささください',
        'definition': 'じゃ 笹 ください',
        'pinyinSpace': 'じゃ ささ ください'
    },
    '56': {
        'character': '笹もないです',
        'letter': "We don't have any bamboo grass either.",
        'pinyin': 'ささもないです',
        'definition': '笹 も ないです',
        'pinyinSpace': 'ささ も ないです'
    },
    '57': {
        'character': 'じゃアイスコーヒー',
        'letter': 'Iced coffee, then.',
        'pinyin': 'じゃあいすこーひー',
        'definition': 'じゃ アイスコー',
        'pinyinSpace': 'じゃ アイスコーヒー'
    },
    '58': {
        'character': 'ねえ白熊くん',
        'letter': 'Hey, polar bear.',
        'pinyin': 'ねえしろくまくん',
        'definition': 'ね え 白熊 くん',
        'pinyinSpace': ' え しろくま/はぐま くん'
    },
    '59': {
        'character': '財布のポイントカードって増えすぎちゃわない',
        'letter': "Don't you have too many loyalty cards in your wallet?",
        'pinyin': 'さいふのぽいんとかーどってふえすぎちゃわない',
        'definition': '財布 の ポイント カード って 増え すぎちゃわない',
        'pinyinSpace': 'さいふ の ポイント カード って ふえ す'
    },
    '60': {
        'character': 'ペンギンさんポイント貯める派',
        'letter': 'You collect points, Mr. Penguin?',
        'pinyin': 'ぺんぎんさんぽいんとためるは',
        'definition': 'ペンギン さん ポイント 貯める 派',
        'pinyinSpace': 'ペンギン さん ポイント ためる は'
    },
    '61': {
        'character': 'うん',
        'letter': 'Yeah. - Mm-hm.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '62': {
        'character': 'あカフェモカお願いおかわり',
        'letter': 'Yep.  Oh, could I get another café mocha?',
        'pinyin': 'あかふぇもかおねがいおかわり',
        'definition': 'あ カフェ モカ お願い おかわ',
        'pinyinSpace': 'あ カフェ モカ おねがい おかわり'
    },
    '63': {
        'character': 'それはひまわり',
        'letter': "That's a sunflower.",
        'pinyin': 'それはひまわり',
        'definition': 'それは ひまわり',
        'pinyinSpace': 'それは ひまわり'
    },
    '64': {
        'character': 'それは日替わり',
        'letter': "That's the daily special",
        'pinyin': 'それはひがわり',
        'definition': 'それは 日替わり',
        'pinyinSpace': 'それは ひがわり'
    },
    '65': {
        'character': 'それは薪割り',
        'letter': 'It is chopping wood',
        'pinyin': 'それはまきわり',
        'definition': 'それは 薪割り',
        'pinyinSpace': 'それは まきわり'
    },
    '66': {
        'character': 'それは西瓜割り',
        'letter': "That's watermelon splitting",
        'pinyin': 'それはすいかわり',
        'definition': 'それは 西瓜割り',
        'pinyinSpace': 'それは すいか'
    },
    '67': {
        'character': '「おかわり」ね',
        'letter': 'Another one.',
        'pinyin': '「おかわり」ね',
        'definition': 'おかわり ね',
        'pinyinSpace': '「 おかわり 」 ね'
    },
    '68': {
        'character': 'はいカフェモカ',
        'letter': 'Yes, Cafe Mocha',
        'pinyin': 'はいかふぇもか',
        'definition': 'はい カフェ モカ',
        'pinyinSpace': 'はい カフェ モカ'
    },
    '69': {
        'character': 'このカフェダジャレがなければなぁ',
        'letter': "You know, if it weren't for all the puns in this café...",
        'pinyin': 'このかふぇだじゃれがなければなぁ',
        'definition': 'この カフェ ダジャレ が なければ なぁ',
        'pinyinSpace': 'こ カフェ ダジャレ が なければ なぁ'
    },
    '70': {
        'character': 'そういえばアルバイト募集してるんだって',
        'letter': 'By the way, I heard you were looking for a part-timer?',
        'pinyin': 'そういえばあるばいとぼしゅうしてるんだって',
        'definition': 'そういえば アルバイト 募集してる ん だって',
        'pinyinSpace': 'そういえば アルバイト ぼしゅう してる ん だって'
    },
    '71': {
        'character': 'うん人手が足りなくて',
        'letter': "Yeah, we're short-staffed",
        'pinyin': 'うんひとでがたりなくて',
        'definition': 'うん 人手 が 足りなくて',
        'pinyinSpace': 'うん ひとで が たりなくて'
    },
    '72': {
        'character': 'ペンギンさんどう',
        'letter': 'Are you interested, Mr. Penguin?',
        'pinyin': 'ぺんぎんさんどう',
        'definition': 'ペンギン さんどう',
        'pinyinSpace': 'ペンギン さんどう'
    },
    '73': {
        'character': 'え？ぼくお客とバイトの両立できるかな',
        'letter': 'I wonder if I could handle being a customer and a part-timer',
        'pinyin': 'え？ぼくおきゃくとばいとのりょうりつできるかな',
        'definition': 'え ぼく お 客 と バイト の 両立できる かな',
        'pinyinSpace': 'え ？ ぼく お きゃく と バイト の りょうりつ できる かな'
    },
    '74': {
        'character': 'ウーソこれから四名ほど面接に来るんだよ',
        'letter': 'Just kidding. I have about four interviews lined up',
        'pinyin': 'うーそこれからよんめいほどめんせつにくるんだよ',
        'definition': 'ウーソ これから 四名 ほど 面接 に 来る ん だ よ',
        'pinyinSpace': 'ウーソ これから よんめい ほど めんせつ に くる ん だ よ'
    },
    '75': {
        'character': 'なんだちょっと考えちゃったよ',
        'letter': 'And here I was actually considering it',
        'pinyin': 'なんだちょっとかんがえちゃったよ',
        'definition': 'な ん だ ちょっと  よ',
        'pinyinSpace': 'な ん だ ちょっと かんがえちゃった よ'
    },
    '76': {
        'character': '僕もいいですか',
        'letter': 'Can I get an interview too?',
        'pinyin': 'ぼくもいいです',
        'definition': '僕 も いいです か',
        'pinyinSpace': 'ぼく も いいです か'
    },
    '77': {
        'character': '僕もアルバイトしたいと思って',
        'letter': ',I was also thinking of working part-time',
        'pinyin': 'ぼくもあるばいとしたいとおもって',
        'definition': '僕 も アルバイトしたい と 思って',
        'pinyinSpace': 'ぼく も アルバイト したい と おもって'
    },
    '78': {
        'character': '受けてみる面接',
        'letter': "I'll take it.",
        'pinyin': 'うけてみるめんせつ',
        'definition': '受けて みる 面接',
        'pinyinSpace': 'うけて みる めんせつ'
    },
    '79': {
        'character': 'あ',
        'letter': 'Oh.',
        'pinyin': 'あ',
        'definition': 'あ',
        'pinyinSpace': 'あ'
    },
    '80': {
        'character': 'では最初の方どうぞ',
        'letter': 'Okay, first one, please.',
        'pinyin': 'ではさいしょのかたどうぞ',
        'definition': 'では 最初 の 方 どうぞ',
        'pinyinSpace': 'で·は さいしょ の ほう/かた どうぞ'
    },
    '81': {
        'character': '穴熊です',
        'letter': "I'm Badger",
        'pinyin': 'あなぐまです',
        'definition': '穴熊 です',
        'pinyinSpace': 'あなぐま です'
    },
    '82': {
        'character': 'えーとホール係やれますか',
        'letter': 'Well, would you be able to work the hall?',
        'pinyin': 'えーとほーるかかりやれますか',
        'definition': 'えー と ホール 係 やれます か',
        'pinyinSpace': 'えー と ホール かかり やれます か'
    },
    '83': {
        'character': 'はいホールなら任せてください',
        'letter': 'Yes! You can leave the holes to me!',
        'pinyin': 'はいほーるならまかせてください',
        'definition': 'はい ホール なら 任せて ください',
        'pinyinSpace': 'はい ホール なら まかせて ください'
    },
    '84': {
        'character': '穴を掘るの得意なんです',
        'letter': "I'm a pro at digging holes!",
        'pinyin': 'あなをほるのとくいなんです',
        'definition': '穴 を 掘る の 得意 なんです',
        'pinyinSpace': 'あな を ほる の とくい なんです'
    },
    '85': {
        'character': 'いやそのホールは違うし',
        'letter': 'Hall not hole.',
        'pinyin': 'いやそのほーるはちがうし',
        'definition': 'いや その ホール は 違う し',
        'pinyinSpace': 'いや その ホール は ちがう し'
    },
    '86': {
        'character': '次の方',
        'letter': 'Next.',
        'pinyin': 'つぎのほう',
        'definition': '次 の 方',
        'pinyinSpace': 'つぎ の ほう/かた'
    },
    '87': {
        'character': 'ゾウガメです',
        'letter': "I'm... Giant... Tortoise...",
        'pinyin': 'ぞうがめです',
        'definition': 'ゾウガメ です',
        'pinyinSpace': 'ゾウガメ です'
    },
    '88': {
        'character': '料理とか運べますか',
        'letter': 'Are you able to carry orders?',
        'pinyin': 'りょうりとかはこべますか',
        'definition': '料理 とか 運べます か',
        'pinyinSpace': 'りょうり とか はこべます か'
    },
    '89': {
        'character': 'は～い～',
        'letter': 'Yes, yes, yes.',
        'pinyin': 'は～い～',
        'definition': 'は い',
        'pinyinSpace': 'は ～ い ～'
    },
    '90': {
        'character': 'ヨ～イ～ショー',
        'letter': 'Here we go...',
        'pinyin': 'よ～い～しょー',
        'definition': 'ヨ イ ショー',
        'pinyinSpace': 'ヨ ～ イ ～ ショー'
    },
    '91': {
        'character': 'ゆっくりだね',
        'letter': 'Definitely taking his time',
        'pinyin': 'ゆっくりだね',
        'definition': 'ゆっくり だ ね',
        'pinyinSpace': 'ゆっくり だ ね'
    },
    '92': {
        'character': '百年くらい働かせて～',
        'letter': 'Please let me work about a hundred years',
        'pinyin': 'ひゃくねんくらいはたらかせて～',
        'definition': '百年 くらい 働かせて',
        'pinyinSpace': 'ひゃくねん くらい はたらかせて ～'
    },
    '93': {
        'character': 'いえそんなには',
        'letter': "Er, I don't think that'll be possible",
        'pinyin': 'いえそんなには',
        'definition': 'いえ そんなに は',
        'pinyinSpace': 'いえ そんなに は'
    },
    '94': {
        'character': 'マンドリルです',
        'letter': 'Mandrill.',
        'pinyin': 'まんどりるです',
        'definition': 'マンドリル です',
        'pinyinSpace': 'マンドリル '
    },
    '95': {
        'character': '食べるのが得意です',
        'letter': "I'm good at eating",
        'pinyin': 'たべるのがとくいです',
        'definition': '食べる の が 得意 です',
        'pinyinSpace': 'たべる の が とくい です'
    },
    '96': {
        'character': 'ちょっとそれは',
        'letter': "Hey, that's...",
        'pinyin': 'ちょっとそれは',
        'definition': 'ちょっと それは',
        'pinyinSpace': 'ちょっと それは'
    },
    '97': {
        'character': '小蟻食です',
        'letter': "I'm Little Anteater.",
        'pinyin': 'しょうありくいです',
        'definition': '小 蟻食 です',
        'pinyinSpace': 'しょう/こ ありくい です'
    },
    '98': {
        'character': '威嚇ができます',
        'letter': 'I can intimidate.',
        'pinyin': 'いかくができます',
        'definition': '威嚇 が できます',
        'pinyinSpace': 'いかく が できます'
    },
    '99': {
        'character': '',
        'letter': 'Wow.',
        'pinyin': 'うんわぁ',
        'definition': 'うん わぁ',
        'pinyinSpace': 'うん わぁ'
    },
    '100': {
        'character': 'それだけ',
        'letter': "That's it.",
        'pinyin': 'それだけ',
        'definition': 'それだけ',
        'pinyinSpace': 'それだけ'
    },
    '101': {
        'character': 'みたいだね',
        'letter': 'Sounds like it.',
        'pinyin': 'みたいだね',
        'definition': 'みたい だ ね',
        'pinyinSpace': 'みたい だ ね'
    },
    '102': {
        'character': '最後の方どうぞ',
        'letter': 'Last one, please.',
        'pinyin': 'さいごのかたどうぞ',
        'definition': '最後 の 方 どうぞ',
        'pinyinSpace': 'さいご の ほう/かた どうぞ'
    },
    '103': {
        'character': 'パンダと申します',
        'letter': 'My name is Panda.',
        'pinyin': 'ぱんだともうします',
        'definition': 'パンダ と 申します',
        'pinyinSpace': 'パンダ と もうします'
    },
    '104': {
        'character': 'よろしくです',
        'letter': 'Nice to meet you.',
        'pinyin': 'よろしくです',
        'definition': 'よろしく です',
        'pinyinSpace': 'よろしく です'
    },
    '105': {
        'character': 'やっとまともな人が来たね',
        'letter': 'Finally, someone decent.',
        'pinyin': 'やっとまともなひとがきたね',
        'definition': 'やっと まとも な 人 が 来た ね',
        'pinyinSpace': 'やっと まとも な ひと が きた ね'
    },
    '106': {
        'character': 'パンダ君何か得意なことはありますか',
        'letter': "Panda, is there anything you're good at?",
        'pinyin': 'ぱんだくんなにかとくいなことはありますか',
        'definition': 'パンダ 君 何か 得意 な こと は あります か',
        'pinyinSpace': 'パンダ きみ/くん なにか とくい な こと は あります か'
    },
    '107': {
        'character': 'はいゴロゴロしながら笹を食べることです',
        'letter': "I'm very good at lying around and eating bamboo grass",
        'pinyin': 'はいごろごろしながらささをたべることです',
        'definition': 'はい ゴロゴロし ながら 笹 を 食べる こと です',
        'pinyinSpace': 'はい ゴロゴロ し ながら ささ を たべる こと です'
    },
    '108': {
        'character': 'あれ',
        'letter': "That's...",
        'pinyin': 'あれ',
        'definition': 'あれ',
        'pinyinSpace': 'あれ'
    },
    '109': {
        'character': 'えーと条件に希望はありますか',
        'letter': "Are there any specific conditions you'd like to request?",
        'pinyin': 'えーとじょうけんにきぼうはありますか',
        'definition': 'えー と 条件 に 希望 は あります か',
        'pinyinSpace': 'えー と じょうけん に きぼう は あります か'
    },
    '110': {
        'character': '週二日希望です',
        'letter': 'Two days a week.',
        'pinyin': 'しゅうふつかきぼうです',
        'definition': '週二日 希望 です',
        'pinyinSpace': 'しゅう きぼう です'
    },
    '111': {
        'character': 'うん週二日ですか',
        'letter': 'Two days a week?',
        'pinyin': 'うんしゅうふつかですか',
        'definition': 'うん 週二日 です か',
        'pinyinSpace': 'うん しゅうふつか です か'
    },
    '112': {
        'character': 'え週一日でいいんですか',
        'letter': 'What? One day a week is fine?',
        'pinyin': 'えしゅういちにちでいいんですか',
        'definition': 'え 週 でいい ん です か',
        'pinyinSpace': 'え しゅういちにち で いい ん です か'
    },
    '113': {
        'character': 'いやせめて週四日くらい',
        'letter': 'No, at least four days a week.',
        'pinyin': 'いやせめてしゅうよっかくらい',
        'definition': 'いや せめて 週四日 くらい',
        'pinyinSpace': 'いや せめて しゅうよっか くらい'
    },
    '114': {
        'character': 'そんなの無理です',
        'letter': "I can't do that.",
        'pinyin': 'そんなのむりです',
        'definition': 'そんな の 無理 です',
        'pinyinSpace': 'そんな の むり です'
    },
    '115': {
        'character': 'あけど',
        'letter': 'Oh, but...',
        'pinyin': 'あけど',
        'definition': 'あ けど',
        'pinyinSpace': 'あ けど'
    },
    '116': {
        'character': '呼びに来てくれたらすぐ行きます',
        'letter': "I'll be there as soon as you call me.",
        'pinyin': 'よびにきてくれたらすぐいきます',
        'definition': '呼び に 来てくれたら すぐ 行きます',
        'pinyinSpace': 'よび に きて くれたら すぐ いきます'
    },
    '117': {
        'character': '僕が呼びに行くんですか',
        'letter': "I'm going to go get him?",
        'pinyin': 'ぼくがよびにいくんですか',
        'definition': '僕 が 呼び に 行く ん です か',
        'pinyinSpace': 'ぼく が よび に いく ん です か'
    },
    '118': {
        'character': 'あそんなそんな',
        'letter': 'Oh, no, no, no, no.',
        'pinyin': 'あそんなそんな',
        'definition': 'あそん な そんな',
        'pinyinSpace': 'あそん な そんな'
    },
    '119': {
        'character': '遅刻した場合だけですよ',
        'letter': "Only if I'm late.",
        'pinyin': 'ちこくしたばあいだけですよ',
        'definition': '遅刻した 場合 だけ です よ',
        'pinyinSpace': 'ちこく した ばあい だけ です よ'
    },
    '120': {
        'character': '遅刻する気満々だね',
        'letter': "You're going to be late.",
        'pinyin': 'ちこくするきまんまんだ',
        'definition': '遅刻する 気 満々 だ ね',
        'pinyinSpace': 'ちこく する き まんまん だ ね'
    },
    '121': {
        'character': 'ちなみにやる気はありますか',
        'letter': 'By the way, are you willing to do it?',
        'pinyin': 'ちなみにやるきはありますか',
        'definition': 'ちなみに やる気 は あります か',
        'pinyinSpace': 'ちなみに やるき は あります か'
    },
    '122': {
        'character': 'そんなにありません',
        'letter': 'Not so much.',
        'pinyin': 'そんなにありません',
        'definition': 'そんなに ありません',
        'pinyinSpace': 'そんなに ありません'
    },
    '123': {
        'character': '発表します',
        'letter': 'Announcement.',
        'pinyin': 'はっぴょうします',
        'definition': '発表します',
        'pinyinSpace': 'はっぴょう します'
    },
    '124': {
        'character': '全員不合格',
        'letter': 'Failed all of them',
        'pinyin': 'ぜんいんふごうかく',
        'definition': '全員 不合格',
        'pinyinSpace': 'ぜんいん ふごうかく'
    },
    '125': {
        'character': 'えー????',
        'letter': 'What????',
        'pinyin': 'ええー????',
        'definition': 'え ー',
        'pinyinSpace': 'え ー ????'
    },
    '126': {
        'character': 'そこ驚くとこ',
        'letter': "That's the part that surprises me.",
        'pinyin': 'そこおどろくとこ',
        'definition': 'そこ 驚く と',
        'pinyinSpace': 'そこ おどろく とこ'
    },
    '127': {
        'character': '結局バイトの人',
        'letter': 'A part-timer after all.',
        'pinyin': 'けっきょくばいとのひと',
        'definition': '結局 バイト の 人',
        'pinyinSpace': 'けっきょく バイト の じん/ひと/にん'
    },
    '128': {
        'character': '見つからなかったね',
        'letter': "You didn't find him.",
        'pinyin': 'みつからなかったね',
        'definition': '見つからなかった ね',
        'pinyinSpace': 'みつからなかった ね'
    },
    '129': {
        'character': '残念だね',
        'letter': "That's too bad.",
        'pinyin': 'ざんねんだね',
        'definition': '残念 だ ね',
        'pinyinSpace': 'ざんねん だ ね'
    },
    '130': {
        'character': 'まだいたの',
        'letter': "You're still here.",
        'pinyin': 'まだいたの',
        'definition': 'まだ いた の',
        'pinyinSpace': 'まだ いた の'
    },
    '131': {
        'character': '家に帰るとお母さんに吸われるし',
        'letter': 'If I go home, my mom will try to suck me up',
        'pinyin': 'いえにかえるとおかあさんにすわれるし',
        'definition': '家 に 帰る と お母さん に 吸われる し',
        'pinyinSpace': 'いえ/うち に かえる と おかあさん に すわれる し'
    },
    '132': {
        'character': '吸われる',
        'letter': 'Suck you up?',
        'pinyin': 'すわれる',
        'definition': '吸われる',
        'pinyinSpace': 'すわれる'
    },
    '133': {
        'character': 'うんゴーって',
        'letter': 'Yep.  Like whirrr',
        'pinyin': 'うんごーって',
        'definition': 'うん ゴーって',
        'pinyinSpace': 'うん ゴーって'
    },
    '134': {
        'character': 'あのう面接中すみません',
        'letter': 'I hate to interrupt you during your interviews',
        'pinyin': 'あのうめんせつちゅうすみません',
        'definition': 'あのう 面接 中 すみません',
        'pinyinSpace': 'あのう めんせつ ちゅう/じゅう すみません'
    },
    '135': {
        'character': '住み込み希望でーす',
        'letter': "I'd like to live here.",
        'pinyin': 'すみこみきぼうでーす',
        'definition': '住み込み 希望 でーす',
        'pinyinSpace': 'すみこみ きぼう でーす'
    },
    '136': {
        'character': '不合格',
        'letter': 'Rejected.',
        'pinyin': 'ふごうかく',
        'definition': '不合格',
        'pinyinSpace': 'ふごうかく'
    },
    '137': {
        'character': 'あのうアルバイト希望じゃないみたいですよ',
        'letter': "I don't think he wants a part-time job.",
        'pinyin': 'あのうあるばいときぼうじゃないみたいですよ',
        'definition': 'あのう アルバイト 希望 じゃない みたいです よ',
        'pinyinSpace': 'あのう アルバイト きぼう じゃない みたいです よ'
    },
    '138': {
        'character': '庭に住み込みたいんですー',
        'letter': 'I want to live in your yard.',
        'pinyin': 'にわにすみこみたいんですー',
        'definition': '庭 に 住み込みたい ん です ー',
        'pinyinSpace': 'にわ に すみこみたい ん です ー'
    },
    '139': {
        'character': 'ここまで運んで欲しいって頼まれちゃいまして',
        'letter': 'He asked me to bring him here.',
        'pinyin': 'ここまではこんでほしいってたのまれちゃいまして',
        'definition': 'ここ まで 運んで 欲しい って 頼まれちゃいまして',
        'pinyinSpace': 'ここ まで はこんで ほしい って たのまれちゃいまして'
    },
    '140': {
        'character': 'あなたお名前は',
        'letter': "What's your name?",
        'pinyin': 'あなたおなまえは',
        'definition': 'あなた お 名前 は',
        'pinyinSpace': 'あなた お なまえ は'
    },
    '141': {
        'character': 'え私ですか',
        'letter': 'Oh, is that me?',
        'pinyin': 'えわたしですか',
        'definition': 'え 私 です か',
        'pinyinSpace': 'え わたし です か'
    },
    '142': {
        'character': '笹子ですけど',
        'letter': "I'm Sasako.",
        'pinyin': 'ささこですけど',
        'definition': '笹 子 です けど',
        'pinyinSpace': 'ささ こ です けど'
    },
    '143': {
        'character': '笹子さん合格',
        'letter': 'Miss Sasako passed.',
        'pinyin': 'ささごさんごうかく',
        'definition': '笹 子 さん 合格',
        'pinyinSpace': 'ささ こ さん ごうかく'
    },
    '144': {
        'character': 'ねぇお母さん',
        'letter': 'Hey, Mom.',
        'pinyin': 'ねぇおかあさん',
        'definition': 'ねぇ お母さん',
        'pinyinSpace': 'ねぇ おかあさん'
    },
    '145': {
        'character': '僕今日、すごくいい感じのカフェ見つけちゃったよ',
        'letter': 'I found a really nice cafe today!',
        'pinyin': 'ぼくきょう、すごくいいかんじのかふぇみつけちゃったよ',
        'definition': '僕 今日 すごく いい感じ の カフェ 見つけちゃった よ',
        'pinyinSpace': 'ぼく きょう 、 すごく いいかんじ の カフェ みつけちゃった よ'
    },
    '146': {
        'character': 'しろくまカフェって言うんだけど',
        'letter': "It's called the Polar Bear Cafe.",
        'pinyin': 'しろくまかふぇっていうんだけど',
        'definition': 'しろくま カフェって 言う ん だけど',
        'pinyinSpace': 'しろくま カフェって いう ん だけど'
    },
    '147': {
        'character': 'なんに言ってるの？知ってるわよ',
        'letter': 'What are you talking about? Of course I know about it',
        'pinyin': 'なんにいってるの？しってるわよ',
        'definition': 'なん に 言ってる の 知ってる わよ',
        'pinyinSpace': 'なん に いってる の ？ しってる わよ'
    },
    '148': {
        'character': 'へ？！そうなの？',
        'letter': 'What? Really?',
        'pinyin': 'へ？！そうなの？',
        'definition': 'へ そう なの',
        'pinyinSpace': 'へ ？！ そう なの ？'
    },
    '149': {
        'character': 'ずっと前からあるじゃない？',
        'letter': "It's been around for a long time, hasn't it?",
        'pinyin': 'ずっとまえからあるじゃない？',
        'definition': 'ずっと 前 から ある じゃない',
        'pinyinSpace': 'ずっと ぜん/まえ から ある じゃない ？'
    },
    '150': {
        'character': 'あ？',
        'letter': 'Huh?',
        'pinyin': 'あ？',
        'definition': 'あ',
        'pinyinSpace': 'あ ？'
    },
    '151': {
        'character': 'うちの隣りに～',
        'letter': 'Right next door to us',
        'pinyin': 'うちのとなりに～',
        'definition': 'うち の 隣り に',
        'pinyinSpace': 'うち の となり に ～'
    },
    '152': {
        'character': 'へーーーーーーーー！！！！',
        'letter': 'Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ！！！！',
        'pinyin': 'へーーーーーーーー！！！！',
        'definition': 'へーーーーーーーー',
        'pinyinSpace': 'へーーーーーーーー ！！！！'
    }
}


function getCharacter(n) {
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