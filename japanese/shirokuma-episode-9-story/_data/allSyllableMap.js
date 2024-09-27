const allSyllableMap = {
    '1': {
        'character': 'リンリン感激パンダくんち！',
        'letter': "Linlin's thrilled panda!",
        'pinyin': 'りんりんかんげきぱんだくんち！',
        'definition': 'リンリン 感激 パンダ く んち',
        'pinyinSpace': 'リンリン かんげき パンダ く んち ！'
    },
    '2': {
        'character': 'お花こちらでよろしいでしょうか',
        'letter': 'Flowers here, please.',
        'pinyin': 'おはなこちらでよろしいでしょうか',
        'definition': 'お 花 こちら で よろしいでしょう か',
        'pinyinSpace': 'お はな こちら で よろしいでしょう か'
    },
    '3': {
        'character': 'ははいそれでお願いします',
        'letter': 'Yes, please!',
        'pinyin': 'ははいそれでおねがいします',
        'definition': 'は はい それで お願いします',
        'pinyinSpace': 'は はい それで おねがい·します'
    },
    '4': {
        'character': 'またいらしてくださいね',
        'letter': 'Please come again!',
        'pinyin': 'またいらしてくださいね',
        'definition': 'また いらしてください ね',
        'pinyinSpace': 'また いらして ください ね'
    },
    '5': {
        'character': 'はい！',
        'letter': 'Yes!',
        'pinyin': 'はい！',
        'definition': 'はい',
        'pinyinSpace': 'はい ！'
    },
    '6': {
        'character': 'かっこいいよね',
        'letter': "He's so cool!",
        'pinyin': 'かっこいいよね',
        'definition': 'かっこいい よね',
        'pinyinSpace': 'かっこいい よね'
    },
    '7': {
        'character': 'パンダくん',
        'letter': 'Panda!',
        'pinyin': 'ぱんだくん',
        'definition': 'パンダ くん',
        'pinyinSpace': 'パンダ くん'
    },
    '8': {
        'character': 'バイトお疲れはいこれ',
        'letter': 'Good job!',
        'pinyin': 'ばいとおつかれはいこれ',
        'definition': 'バイト お疲れ はい これ',
        'pinyinSpace': 'バイト おつかれ はい これ'
    },
    '9': {
        'character': 'まぁもらっておくけど',
        'letter': "I'll take it.",
        'pinyin': 'まぁもらっておくけど',
        'definition': 'まぁ もらっておく けど',
        'pinyinSpace': 'まぁ もらっておく けど'
    },
    '10': {
        'character': 'そんじゃお疲れ',
        'letter': 'Well, good night.',
        'pinyin': 'そんじゃおつかれ',
        'definition': 'そん じゃ お疲れ',
        'pinyinSpace': 'そん じゃ おつかれ'
    },
    '11': {
        'character': 'パンダくんつれないな',
        'letter': "Panda, you're so boring.",
        'pinyin': 'ぱんだくんつれないな',
        'definition': 'パンダ くん つれない な',
        'pinyinSpace': 'パンダ くん つれない な'
    },
    '12': {
        'character': 'あ～パンダくん仲よくなりたいのに',
        'letter': 'I want to be friends with you, Panda.',
        'pinyin': 'あ～ぱんだくんなかよくなりたいのに',
        'definition': 'あ パンダ くん 仲 よくなりたい のに',
        'pinyinSpace': 'あ ～ パンダ くん なか よくなりたい のに'
    },
    '13': {
        'character': '大丈夫きっと仲よくなれるよ',
        'letter': "Don't worry, I'm sure we'll get along.",
        'pinyin': 'だいじょうぶきっとなかよくなれるよ',
        'definition': '大丈夫 きっと 仲 よくなれる よ',
        'pinyinSpace': 'だいじょうぶ きっと なか よくなれる よ'
    },
    '14': {
        'character': 'そうだよね',
        'letter': "I'm sure we will.",
        'pinyin': 'そうだよね',
        'definition': 'そう だよね',
        'pinyinSpace': 'そう だよね'
    },
    '15': {
        'character': 'もちろんさ',
        'letter': 'Of course we will.',
        'pinyin': 'もちろんさ',
        'definition': 'もちろん さ',
        'pinyinSpace': 'もちろん さ'
    },
    '16': {
        'character': 'パンダ最高！',
        'letter': 'I love pandas!',
        'pinyin': 'ぱんださいこう！',
        'definition': 'パンダ 最高',
        'pinyinSpace': 'パンダ さいこう ！'
    },
    '17': {
        'character': 'はいフローリストリンリンです',
        'letter': "Yes, I'm Florist Lynn Lynn.",
        'pinyin': 'はいふろーりすとりんりんです',
        'definition': 'はい フローリスト リン リン です',
        'pinyinSpace': 'はい フローリスト リン リン です'
    },
    '18': {
        'character': '竹をメインにしたアレンジですか',
        'letter': 'You want to use bamboo as the main element of the arrangement?',
        'pinyin': 'たけをめいんにしたあれんじですか',
        'definition': '竹 を メイン に した アレンジ です か',
        'pinyinSpace': 'たけ を メイン に した アレンジ です か'
    },
    '19': {
        'character': 'はいできますよ',
        'letter': 'Yes, we can do that.',
        'pinyin': 'はいできますよ',
        'definition': 'はい できます よ',
        'pinyinSpace': 'はい できます よ'
    },
    '20': {
        'character': 'でお届けはどちらまで',
        'letter': 'And where do you deliver it?',
        'pinyin': 'でおとどけはどちらまで',
        'definition': 'で お届け は どちら まで',
        'pinyinSpace': 'で おとどけ は どちら まで'
    },
    '21': {
        'character': 'リンリンてさ困った人だよね',
        'letter': "You're a real pain in the ass, Ling Ling Ling, aren't you?",
        'pinyin': 'りんりんてさこまったひとだよね',
        'definition': 'リンリン て さ 困った人 だよね',
        'pinyinSpace': 'リンリン て さ こまったひと だよね'
    },
    '22': {
        'character': 'リンリンて',
        'letter': 'Ling Ling...',
        'pinyin': 'りんりんて',
        'definition': 'リンリン て',
        'pinyinSpace': 'リンリン て'
    },
    '23': {
        'character': '花屋さんの',
        'letter': 'The florist.',
        'pinyin': 'はなやさんの',
        'definition': '花屋 さん の',
        'pinyinSpace': 'はなや さん の'
    },
    '24': {
        'character': 'そう僕が通りかかるたびにさ',
        'letter': 'Yeah, every time I pass by.',
        'pinyin': 'そうぼくがとおりかかるたびにさ',
        'definition': 'そう 僕 が 通りかかる たびに さ',
        'pinyinSpace': 'そう ぼく が とおりかかる たびに さ'
    },
    '25': {
        'character': 'あげる',
        'letter': 'I give them to you.',
        'pinyin': 'あげる',
        'definition': 'あげる',
        'pinyinSpace': 'あげる'
    },
    '26': {
        'character': '好きでしょ',
        'letter': "You like it, don't you?",
        'pinyin': 'すきでしょ',
        'definition': '好き でしょ',
        'pinyinSpace': 'すき でしょ'
    },
    '27': {
        'character': 'パンダってかわいいよね',
        'letter': 'Pandas are cute.',
        'pinyin': 'ぱんだってかわいいよね',
        'definition': 'パンダ って かわいい よね',
        'pinyinSpace': 'パンダ って かわいい よね'
    },
    '28': {
        'character': 'いい人じゃない',
        'letter': "He's a nice guy.",
        'pinyin': 'いいひとじゃない',
        'definition': 'いい人 じゃない',
        'pinyinSpace': 'いいひと じゃない'
    },
    '29': {
        'character': 'あれ？でもでも',
        'letter': "What's that? But...",
        'pinyin': 'あれ？でもでも',
        'definition': 'あれ でも でも',
        'pinyinSpace': 'あれ ？ でも でも'
    },
    '30': {
        'character': 'くれるパンダグッズだって趣味悪いし',
        'letter': 'Even the panda stuff they give you is in poor taste.',
        'pinyin': 'くれるぱんだぐっずだってしゅみわるいし',
        'definition': 'くれる パンダ グッズ だって 趣味 悪い し',
        'pinyinSpace': 'くれる パンダ グッズ だって しゅみ わるい し'
    },
    '31': {
        'character': 'こんなのとか',
        'letter': 'Like this.',
        'pinyin': 'こんなのとか',
        'definition': 'こんな の とか',
        'pinyinSpace': 'こんな の とか'
    },
    '32': {
        'character': 'わ～かわいい！',
        'letter': "It's so cute!",
        'pinyin': 'わ～かわいい！',
        'definition': 'わ かわいい',
        'pinyinSpace': 'わ ～ かわいい ！'
    },
    '33': {
        'character': 'え～そうかな',
        'letter': 'I wonder if it is...',
        'pinyin': 'え～そうかな',
        'definition': 'え そうか な',
        'pinyinSpace': 'え ～ そうか な'
    },
    '34': {
        'character': 'じゃあ笹子さんにあげれば',
        'letter': 'Then give it to Sasako.',
        'pinyin': 'じゃあささごさんにあげれば',
        'definition': 'じゃあ 笹 子 さん に あげれば',
        'pinyinSpace': 'じゃあ ささ こ さん に あげれば'
    },
    '35': {
        'character': 'あげないよ',
        'letter': "I won't give it to her.",
        'pinyin': 'あげないよ',
        'definition': 'あげない よ',
        'pinyinSpace': 'あげない よ'
    },
    '36': {
        'character': '気に入ってるじゃない',
        'letter': 'She likes it.',
        'pinyin': 'きにいってるじゃない',
        'definition': '気に入ってる じゃない',
        'pinyinSpace': 'きにいってる じゃない'
    },
    '37': {
        'character': 'リンリンてホント困った人だから',
        'letter': "You're such a pain in the ass.",
        'pinyin': 'りんりんてほんとこまったひとだから',
        'definition': 'リンリン て ホント 困った人 だから',
        'pinyinSpace': 'リンリン て ホント こまったひと だ から'
    },
    '38': {
        'character': '今頃パンダくんの家に行ってたりして',
        'letter': "She's probably at Panda's right now.",
        'pinyin': 'いまごろぱんだくんのいえにいってたりして',
        'definition': '今頃 パンダ くん の 家 に 行ってたり して',
        'pinyinSpace': 'いまごろ パンダ くん の いえ/うち に おこなってたり/いってたり して'
    },
    '39': {
        'character': 'やめてよ',
        'letter': 'Stop it.',
        'pinyin': 'やめてよ',
        'definition': 'やめて よ',
        'pinyinSpace': 'やめて よ'
    },
    '40': {
        'character': 'パンダくんちだよ',
        'letter': "I'm at Panda's house.",
        'pinyin': 'ぱんだくんちだよ',
        'definition': 'パンダ く んち だ よ',
        'pinyinSpace': 'パンダ く んち だ よ'
    },
    '41': {
        'character': 'お花をお届けにあがりました',
        'letter': "I'm here to deliver flowers.",
        'pinyin': 'おはなをおとどけにあがりました',
        'definition': 'お 花 を お届け に あがりました',
        'pinyinSpace': 'お はな を おとどけ に あがりました'
    },
    '42': {
        'character': 'パンダくんは…',
        'letter': "Where's Panda?",
        'pinyin': 'ぱんだくんは…',
        'definition': 'パンダ くん は',
        'pinyinSpace': 'パンダ くん は …'
    },
    '43': {
        'character': 'この時間はしろくまカフェかな',
        'letter': "I wonder if he's at the Shirokuma Cafe this time of night.",
        'pinyin': 'このじかんはしろくまかふぇかな',
        'definition': 'この 時間 は しろくま カフェ かな',
        'pinyinSpace': 'この じかん は しろくま カフェ かな'
    },
    '44': {
        'character': 'どうもご苦労様です',
        'letter': 'Thank you very much.',
        'pinyin': 'どうもごくろうさまです',
        'definition': 'どうも ご苦労様 です',
        'pinyinSpace': 'どうも ごくろうさま です'
    },
    '45': {
        'character': 'どうしました？',
        'letter': "What's up?",
        'pinyin': 'どうしました？',
        'definition': 'どう しました',
        'pinyinSpace': 'どう しました ？'
    },
    '46': {
        'character': 'パンダだパンダママだ',
        'letter': "It's a panda.",
        'pinyin': 'ぱんだだぱんだままだ',
        'definition': 'パンダ だ パンダ ママ だ',
        'pinyinSpace': 'パンダ だ パンダ ママ だ'
    },
    '47': {
        'character': 'あねぇ',
        'letter': 'Hey, there.',
        'pinyin': 'あねぇ',
        'definition': 'あねぇ',
        'pinyinSpace': 'あねぇ'
    },
    '48': {
        'character': 'はい',
        'letter': "Yes, ma'am.",
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '49': {
        'character': 'お代は別に払うから部屋の竹も活け直してもらえないかしら',
        'letter': "I'll pay you separately, but I'd like you to rearrange the bamboo in my room.",
        'pinyin': 'おだいはべつにはらうからへやのたけもいけなおしてもらえないかしら',
        'definition': 'お代 は 別に 払う から 部屋 の 竹 も 活け 直して もらえない かしら',
        'pinyinSpace': 'おだい は べつに はらう から へや の たけ も いけ なおして もらえない かしら'
    },
    '50': {
        'character': 'お家に上がっていいんですか！',
        'letter': 'Can I come in?',
        'pinyin': 'おうちにあがっていいんですか！',
        'definition': 'お家 に 上がっていい ん です か',
        'pinyinSpace': 'おうち に あがって いい ん です か ！'
    },
    '51': {
        'character': 'リンリンのパンダ好きは相当なものらしいよ',
        'letter': "I heard Linlin's love for pandas is considerable.",
        'pinyin': 'りんりんのぱんだずきはそうとうなものらしいよ',
        'definition': 'リンリン の パンダ 好き は 相当 な もの らしい よ',
        'pinyinSpace': 'リンリン の パンダ すき は そうとう な もの らしい よ'
    },
    '52': {
        'character': 'パンダグッズもかなり集めてるそうですよ',
        'letter': 'I hear he collects a lot of panda goods.',
        'pinyin': 'ぱんだぐっずもかなりあつめてるそうですよ',
        'definition': 'パンダ グッズ も かなり 集めてる そう です よ',
        'pinyinSpace': 'パンダ グッズ も かなり あつめてる そう です よ'
    },
    '53': {
        'character': '花屋じゃなくてパンダグッズ屋やればよかったのに',
        'letter': "You should've opened a panda goods shop instead of a flower shop.",
        'pinyin': 'はなやじゃなくてぱんだぐっずややればよかったのに',
        'definition': '花屋 じゃなくて パンダ グッズ 屋 やれば よかった のに',
        'pinyinSpace': 'はなや じゃなくて パンダ グッズ や/おく やれば よかった のに'
    },
    '54': {
        'character': '事情があるんだよ',
        'letter': 'I have my reasons.',
        'pinyin': 'じじょうがあるんだよ',
        'definition': '事情 が ある ん だ よ',
        'pinyinSpace': 'じじょう が ある ん だ よ'
    },
    '55': {
        'character': 'どんな？',
        'letter': 'What kind?',
        'pinyin': 'どんな？',
        'definition': 'どんな',
        'pinyinSpace': 'どんな ？'
    },
    '56': {
        'character': '若き日のリンリンがパンダグッズを集めるため世界を旅していた頃',
        'letter': 'When the young Linlin was traveling the world to collect panda goods.',
        'pinyin': 'わかきひのりんりんがぱんだぐっずをあつめるためせかいをたびしていたころ',
        'definition': '若き日 の リンリン が パンダ グッズ を 集める ため 世界 を 旅していた 頃',
        'pinyinSpace': 'わかきひ の リンリン が パンダ グッズ を あつめる ため せかい を たび していた ころ'
    },
    '57': {
        'character': 'とある事件に巻き込まれ…',
        'letter': 'He got caught up in an incident...',
        'pinyin': 'とあるじけんにまきこまれ…',
        'definition': 'と ある 事件 に 巻き込まれ',
        'pinyinSpace': 'と ある じけん に まきこまれ …'
    },
    '58': {
        'character': '嘘ですね',
        'letter': "You're lying.",
        'pinyin': 'うそですね',
        'definition': '嘘 です ね',
        'pinyinSpace': 'うそ です ね'
    },
    '59': {
        'character': 'うん',
        'letter': 'Yes, it is.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '60': {
        'character': '何で嘘つくの？',
        'letter': 'Why are you lying?',
        'pinyin': 'なんでうそつくの？',
        'definition': '何で 嘘 つく の',
        'pinyinSpace': 'なんで うそ つく の ？'
    },
    '61': {
        'character': 'ささやかな嘘であなたの味気ない日常に彩りを',
        'letter': 'A little lie to add a little color to your dull life.',
        'pinyin': 'ささやかなうそであなたのあじけないにちじょうにいろどりを',
        'definition': 'ささやか な 嘘 で あなた の 味気ない 日常 に 彩り を',
        'pinyinSpace': 'ささやか な うそ で あなた の あじけない にちじょう に いろどり を'
    },
    '62': {
        'character': '味気ない日常で悪かったね',
        'letter': "I'm sorry it's so boring.",
        'pinyin': 'あじけないにちじょうでわるかったね',
        'definition': '味気ない 日常 で 悪かった ね',
        'pinyinSpace': 'あじけない にちじょう で わるかった ね'
    },
    '63': {
        'character': 'もうリンリンの話はいいよ',
        'letter': "Enough with the 'Lynn Lynn' talk.",
        'pinyin': 'もうりんりんのはなしはいいよ',
        'definition': 'もう リンリン の 話 は いい よ',
        'pinyinSpace': 'もう リンリン の はなし は いい よ'
    },
    '64': {
        'character': 'よしいかがです？',
        'letter': 'Okay, how do you like it?',
        'pinyin': 'よしいかがです？',
        'definition': 'よし いかが です',
        'pinyinSpace': 'よし いかが です ？'
    },
    '65': {
        'character': 'まぁステキ！',
        'letter': "Oh, my God, it's beautiful!",
        'pinyin': 'まぁすてき！',
        'definition': 'まぁ ステキ',
        'pinyinSpace': 'まぁ ステキ ！'
    },
    '66': {
        'character': '今お代を払うわ',
        'letter': "I'll pay for it.",
        'pinyin': 'いまおだいをはらうわ',
        'definition': '今 お代 を 払う わ',
        'pinyinSpace': 'いま おだい を はらう わ'
    },
    '67': {
        'character': 'ちょっと待っててね',
        'letter': "I'll be back in a minute.",
        'pinyin': 'ちょっとまっててね',
        'definition': 'ちょっと 待ってて ね',
        'pinyinSpace': 'ちょっと まってて ね'
    },
    '68': {
        'character': 'ここでパンダくんが暮らしているんだな',
        'letter': 'So this is where Mr. Panda lives.',
        'pinyin': 'ここでぱんだくんがくらしているんだな',
        'definition': 'ここ で パンダ くん が 暮らしている ん だ な',
        'pinyinSpace': 'ここ で パンダ くん が くらしている ん だ な'
    },
    '69': {
        'character': 'かわいい',
        'letter': 'Cute.',
        'pinyin': 'かわいい',
        'definition': 'かわいい',
        'pinyinSpace': 'かわいい'
    },
    '70': {
        'character': 'こんにちは',
        'letter': 'Hello, there.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '71': {
        'character': 'ママがお茶どうぞって',
        'letter': 'Mommy says have some tea.',
        'pinyin': 'ままがおちゃどうぞって',
        'definition': 'ママ が お茶 どうぞ って',
        'pinyinSpace': 'ママ が おちゃ どうぞ って'
    },
    '72': {
        'character': 'パンダだパンダ妹だ',
        'letter': 'A panda... a panda sister.',
        'pinyin': 'ぱんだだぱんだいもうとだ',
        'definition': 'パンダ だ パンダ 妹 だ',
        'pinyinSpace': 'パンダ だ パンダ いもうと だ'
    },
    '73': {
        'character': 'ここに置いとくね',
        'letter': "I'll just leave it here.",
        'pinyin': 'ここにおいとくね',
        'definition': 'ここ に 置いとく ね',
        'pinyinSpace': 'ここ に おいとく ね'
    },
    '74': {
        'character': 'ありがとう…えっと…',
        'letter': 'Thank you for... um...',
        'pinyin': 'ありがとう…えっと…',
        'definition': 'ありがとう えっと',
        'pinyinSpace': 'ありがとう … えっと …'
    },
    '75': {
        'character': 'メイメイって呼んで',
        'letter': 'Call me Mei Mei.',
        'pinyin': 'めいめいってよんで',
        'definition': 'メイメイ って 呼んで',
        'pinyinSpace': 'メイメイ って よんで'
    },
    '76': {
        'character': 'あなたリンリンでしょ？',
        'letter': "You're Ling Ling, right?",
        'pinyin': 'あなたりんりんでしょ？',
        'definition': 'あなた リンリン でしょ',
        'pinyinSpace': 'あなた リンリン でしょ ？'
    },
    '77': {
        'character': '僕のこと知ってるんだ？',
        'letter': 'You know who I am?',
        'pinyin': 'ぼくのことしってるんだ？',
        'definition': '僕 の こと 知ってる ん だ',
        'pinyinSpace': 'ぼく の こと しってる ん だ ？'
    },
    '78': {
        'character': 'イケメン花屋って街じゃ有名よ',
        'letter': "You're famous in town for being a good-looking florist.",
        'pinyin': 'いけめんはなやってまちじゃゆうめいよ',
        'definition': 'イケメン 花屋 って 街 じゃ 有名 よ',
        'pinyinSpace': 'イケメン はなや って がい/まち じゃ ゆうめい よ'
    },
    '79': {
        'character': 'そうらしいね',
        'letter': "So I've heard.",
        'pinyin': 'そうらしいね',
        'definition': 'そう らしい ね',
        'pinyinSpace': 'そう らしい ね'
    },
    '80': {
        'character': '否定しないのね…',
        'letter': "You don't deny it.",
        'pinyin': 'ひていしないのね…',
        'definition': '否定しない の ね',
        'pinyinSpace': 'ひてい しない の ね …'
    },
    '81': {
        'character': 'でも…私の好みじゃないわね',
        'letter': "But... you're not my type.",
        'pinyin': 'でも…わたしのこのみじゃないわね',
        'definition': 'でも 私 の 好み じゃない わね',
        'pinyinSpace': 'でも … わたし の このみ じゃない わね'
    },
    '82': {
        'character': 'ちょっと痩せすぎ',
        'letter': "You're a little too skinny.",
        'pinyin': 'ちょっとやせすぎ',
        'definition': 'ちょっと 痩せすぎ',
        'pinyinSpace': 'ちょっと やせすぎ'
    },
    '83': {
        'character': 'まあいいわちょっと遊んであげる',
        'letter': "Well, I don't care. I'm going to play with you.",
        'pinyin': 'まあいいわちょっとあそんであげる',
        'definition': 'まあ いい わ ちょっと 遊んで あげる',
        'pinyinSpace': 'まあ いい わ ちょっと あそんで あげる'
    },
    '84': {
        'character': '鬼ごっこね',
        'letter': 'Tag.',
        'pinyin': 'おにごっこね',
        'definition': '鬼ごっこ ね',
        'pinyinSpace': 'おにごっこ ね'
    },
    '85': {
        'character': 'ああごめんお店があるから帰らないと',
        'letter': 'Oh, sorry, I have to go back to the store.',
        'pinyin': 'ああごめんおみせがあるからかえらないと',
        'definition': 'ああ ごめん お店 が ある から 帰らない と',
        'pinyinSpace': 'ああ ごめん おみせ が ある から かえらない と'
    },
    '86': {
        'character': 'リンリンさんお待たせ',
        'letter': 'Hey, Ling Ling.',
        'pinyin': 'りんりんさんおまたせ',
        'definition': 'リンリン さん お 待たせ',
        'pinyinSpace': 'リンリン さん お またせ'
    },
    '87': {
        'character': 'あら？',
        'letter': "Hey, what's up?",
        'pinyin': 'あら？',
        'definition': 'あら',
        'pinyinSpace': 'あら ？'
    },
    '88': {
        'character': '待て！',
        'letter': 'Wait!',
        'pinyin': 'まて！',
        'definition': '待て',
        'pinyinSpace': 'まて ！'
    },
    '89': {
        'character': 'パンダを追いかける…',
        'letter': 'Chasing pandas...',
        'pinyin': 'ぱんだをおいかける…',
        'definition': 'パンダ を 追いかける',
        'pinyinSpace': 'パンダ を おいかける …'
    },
    '90': {
        'character': 'パンダと回る…',
        'letter': 'Spinning with the panda...',
        'pinyin': 'ぱんだとまわる…',
        'definition': 'パンダ と 回る',
        'pinyinSpace': 'パンダ と まわる …'
    },
    '91': {
        'character': 'パンダと転がる…',
        'letter': 'Rolling with the panda...',
        'pinyin': 'ぱんだところがる…',
        'definition': 'パンダ と 転がる',
        'pinyinSpace': 'パンダ と ころがる …'
    },
    '92': {
        'character': 'なんて幸せな時間なんだ…',
        'letter': 'What a happy time...',
        'pinyin': 'なんてしあわせなじかんなんだ…',
        'definition': 'なんて 幸せ な 時間 な ん だ',
        'pinyinSpace': 'なんて しあわせ な じかん な ん だ …'
    },
    '93': {
        'character': '次はかくれんぼね',
        'letter': 'Hide and seek...',
        'pinyin': 'つぎはかくれんぼね',
        'definition': '次 は かくれんぼ ね',
        'pinyinSpace': 'つぎ は かくれんぼ ね'
    },
    '94': {
        'character': 'パンダとかくれんぼ…',
        'letter': 'Hide and seek with panda...',
        'pinyin': 'ぱんだとかくれんぼ…',
        'definition': 'パンダ と かくれんぼ',
        'pinyinSpace': 'パンダ と かくれんぼ …'
    },
    '95': {
        'character': '１２…',
        'letter': '12...',
        'pinyin': '１２…',
        'definition': '',
        'pinyinSpace': '１２…'
    },
    '96': {
        'character': 'リンリンさん案外タフね',
        'letter': "You're tougher than I thought, Linlin.",
        'pinyin': 'りんりんさんあんがいたふね',
        'definition': 'リンリン さん 案外 タフ ね',
        'pinyinSpace': 'リンリン さん あんがい タフ ね'
    },
    '97': {
        'character': 'お～いどこだい？',
        'letter': 'Hey, where are you?',
        'pinyin': 'お～いどこだい？',
        'definition': 'お いど こだい',
        'pinyinSpace': 'お ～ いど こだい ？'
    },
    '98': {
        'character': '店に戻らないで遊んでていいのか？',
        'letter': "You sure you don't want to go back to the store?",
        'pinyin': 'みせにもどらないであそんでていいのか？',
        'definition': '店 に 戻らないで 遊んでていい のか',
        'pinyinSpace': 'みせ/てん に もどらないで あそんでて いい のか ？'
    },
    '99': {
        'character': 'いい！',
        'letter': "No, I'm a panda!",
        'pinyin': 'いい！',
        'definition': 'いい',
        'pinyinSpace': 'いい ！'
    },
    '100': {
        'character': 'だってパンダなんだも～ん！',
        'letter': "Because I'm a panda!",
        'pinyin': 'だってぱんだなんだも～ん！',
        'definition': 'だって パンダ なんだ も ん',
        'pinyinSpace': 'だって パンダ なんだ も ～ ん ！'
    },
    '101': {
        'character': '見つけた！',
        'letter': 'I found it!',
        'pinyin': 'みつけた！',
        'definition': '見つけた',
        'pinyinSpace': 'みつけた ！'
    },
    '102': {
        'character': '何奴？',
        'letter': 'What is it?',
        'pinyin': 'どいつ？',
        'definition': '何奴',
        'pinyinSpace': 'どいつ ？'
    },
    '103': {
        'character': 'どうしたの？',
        'letter': "What's going on?",
        'pinyin': 'どうしたの？',
        'definition': 'どうしたの',
        'pinyinSpace': 'どうしたの ？'
    },
    '104': {
        'character': 'あっお爺ちゃん何やってるの？',
        'letter': 'Oh, Grandpa, what are you doing?',
        'pinyin': 'あっおじいちゃんなにやってるの？',
        'definition': 'あっお 爺ちゃん 何 やってる の',
        'pinyinSpace': 'あっお じいちゃん なに やってる の ？'
    },
    '105': {
        'character': 'お爺ちゃん？',
        'letter': 'Grandpa?',
        'pinyin': 'おじいちゃん？',
        'definition': 'お 爺ちゃん',
        'pinyinSpace': 'お じいちゃん ？'
    },
    '106': {
        'character': '曲者め',
        'letter': "You're a wacko.",
        'pinyin': 'くせものめ',
        'definition': '曲者 め',
        'pinyinSpace': 'くせもの め'
    },
    '107': {
        'character': '違うわよリンリンはお花屋さんよ',
        'letter': "No, no, no, Linlin's a florist.",
        'pinyin': 'ちがうわよりんりんはおはなやさんよ',
        'definition': '違う わよ リンリン は お 花屋 さん よ',
        'pinyinSpace': 'ちがう わよ リンリン は お はなや さん よ'
    },
    '108': {
        'character': 'ニチニチコレコーニチ…',
        'letter': 'Nich nich nich nich kollektich...',
        'pinyin': 'にちにちこれこーにち…',
        'definition': 'ニチニチコレコーニチ',
        'pinyinSpace': 'ニチニチコレコーニチ …'
    },
    '109': {
        'character': 'ジョージョーシャクリョーセーコートーテー…',
        'letter': 'Joe Joe Shakuryo sei kootei...',
        'pinyin': 'じょーじょーしゃくりょーせーこーとーてー…',
        'definition': 'ジョージョー シャク リョーセーコー トー テー',
        'pinyinSpace': 'ジョージョー シャク リョーセーコー トー テー …'
    },
    '110': {
        'character': '都合が悪くなるとすぐとぼけるんだから',
        'letter': "You're always blurting it out when things go wrong.",
        'pinyin': 'つごうがわるくなるとすぐとぼけるんだから',
        'definition': '都合が悪くなる と すぐ とぼける ん だから',
        'pinyinSpace': 'つごうがわるくなる と すぐ とぼける ん だ から'
    },
    '111': {
        'character': 'アオゾラチューシャ…',
        'letter': 'Aozora Chucha...',
        'pinyin': 'あおぞらちゅーしゃ…',
        'definition': 'アオゾラチューシャ',
        'pinyinSpace': 'アオゾラチューシャ …'
    },
    '112': {
        'character': 'パンダ…だ…',
        'letter': 'Panda...',
        'pinyin': 'ぱんだ…だ…',
        'definition': 'パンダ だ',
        'pinyinSpace': 'パンダ … だ …'
    },
    '113': {
        'character': 'パンダお爺ちゃんの太極拳…だ…',
        'letter': "Grandpa Panda's tai chi...",
        'pinyin': 'ぱんだおじいちゃんのたいきょくけん…だ…',
        'definition': 'パンダ お 爺ちゃん の 太極拳 だ',
        'pinyinSpace': 'パンダ お じいちゃん の たいきょくけん … だ …'
    },
    '114': {
        'character': 'というわけで',
        'letter': 'So...',
        'pinyin': 'というわけで',
        'definition': 'という わけ で',
        'pinyinSpace': 'という わけ で'
    },
    '115': {
        'character': '彼はパンダグッズ屋ではなく',
        'letter': 'He is not a panda goods shop',
        'pinyin': 'かれはぱんだぐっずやではなく',
        'definition': '彼 は パンダ グッズ 屋 ではなく',
        'pinyinSpace': 'かれ は パンダ グッズ や/おく ではなく'
    },
    '116': {
        'character': '花屋を営むこととなりました',
        'letter': 'He is now a florist...',
        'pinyin': 'はなやをいとなむこととなりました',
        'definition': '花屋 を 営む こと と なりました',
        'pinyinSpace': 'はなや を いとなむ こと と なりました'
    },
    '117': {
        'character': '悲しすぎる…',
        'letter': 'Too sad...',
        'pinyin': 'かなしすぎる…',
        'definition': '悲しすぎる',
        'pinyinSpace': 'かなしすぎる …'
    },
    '118': {
        'character': 'ホラ話とわかってても涙が止まらない…',
        'letter': "I can't stop crying even though I know it's just a tall tale...",
        'pinyin': 'ほらはなしとわかっててもなみだがとまらない…',
        'definition': 'ホラ話 と わかってても 涙 が 止まらない',
        'pinyinSpace': 'ホラばなし と わかってても なみだ が とまらない …'
    },
    '119': {
        'character': '思わずリンリンに優しくしちゃいそうだよ',
        'letter': "I can't help but be nice to Linlin",
        'pinyin': 'おもわずりんりんにやさしくしちゃいそうだよ',
        'definition': '思わず リンリン に 優しくしちゃいそう だ よ',
        'pinyinSpace': 'おもわず リンリン に やさしくしちゃいそう だ よ'
    },
    '120': {
        'character': '事情があるんだよ',
        'letter': "There's a reason.",
        'pinyin': 'じじょうがあるんだよ',
        'definition': '事情 が ある ん だ よ',
        'pinyinSpace': 'じじょう が ある ん だ よ'
    },
    '121': {
        'character': 'それはあの眩しくも世知辛い国でのことだった',
        'letter': 'It was in that dazzling but bitter country...',
        'pinyin': 'それはあのまぶしくもせちがらいくにでのことだった',
        'definition': 'それは あの 眩しく も 世知辛い 国 で の こと だった',
        'pinyinSpace': 'それは あの まぶしく も せちがらい くに で の こと だった'
    },
    '122': {
        'character': 'いやさすがにもういい',
        'letter': "No, that's enough.",
        'pinyin': 'いやさすがにもういい',
        'definition': 'いや さすがに もういい',
        'pinyinSpace': 'いや さすがに もういい'
    },
    '123': {
        'character': 'あっ…あれ？ここは…',
        'letter': 'Ah...what is it? This place is...',
        'pinyin': 'あっ…あれ？ここは…',
        'definition': 'あっ あれ ここ は',
        'pinyinSpace': 'あっ … あれ ？ ここ は …'
    },
    '124': {
        'character': 'イテテ…あっそうか',
        'letter': 'I see...',
        'pinyin': 'いてて…あっそうか',
        'definition': 'イテテ あっそ うか',
        'pinyinSpace': 'イテテ … あっそ うか'
    },
    '125': {
        'character': 'パンダくんちに配達に来てそれで…',
        'letter': "I came to Panda's house to make a delivery...",
        'pinyin': 'ぱんだくんちにはいたつにきてそれで…',
        'definition': 'パンダ く んち に 配達 に 来て それで',
        'pinyinSpace': 'パンダ く んち に はいたつ に きて それで …'
    },
    '126': {
        'character': 'まいったな…早く店に帰らなきゃ',
        'letter': "I've got to get back to the store.",
        'pinyin': 'まいったな…はやくみせにかえらなきゃ',
        'definition': 'まいった な 早く 店 に 帰らなきゃ',
        'pinyinSpace': 'まいった な … はやく みせ/てん に かえらなきゃ'
    },
    '127': {
        'character': 'こ…これはパンダくんの…',
        'letter': "This is Panda's...",
        'pinyin': 'こ…これはぱんだくんの…',
        'definition': 'こ これ は パンダ くん の',
        'pinyinSpace': 'こ … これ は パンダ くん の …'
    },
    '128': {
        'character': 'もしかしてこの部屋は…',
        'letter': 'Could this be...',
        'pinyin': 'もしかしてこのへやは…',
        'definition': 'もしかして この 部屋 は',
        'pinyinSpace': 'もしかして この へや は …'
    },
    '129': {
        'character': 'パンダくんの部屋？',
        'letter': "Panda's room?",
        'pinyin': 'ぱんだくんのへや？',
        'definition': 'パンダ くん の 部屋',
        'pinyinSpace': 'パンダ くん の へや ？'
    },
    '130': {
        'character': 'パンダくんのベッド…パンダくんのパンダクッション',
        'letter': "Panda-kun's bed... panda cushion...",
        'pinyin': 'ぱんだくんのべっど…ぱんだくんのぱんだくっしょん',
        'definition': 'パンダ くん の ベッド パンダ くん の パンダ クッション',
        'pinyinSpace': 'パンダ くん の ベッド … パンダ くん の パンダ クッション'
    },
    '131': {
        'character': 'パンダくんのパンダスリッパ！パンダくんのシール…',
        'letter': "Panda-kun's panda slippers! Panda-kun's stickers...",
        'pinyin': 'ぱんだくんのぱんだすりっぱ！ぱんだくんのしーる…',
        'definition': 'パンダ くん の パンダ スリッパ パンダ くん の シール',
        'pinyinSpace': 'パンダ くん の パンダ スリッパ ！ パンダ くん の シール …'
    },
    '132': {
        'character': 'あっ…これ僕があげたプレゼント',
        'letter': 'Oh... this is the present I gave you.',
        'pinyin': 'あっ…これぼくがあげたぷれぜんと',
        'definition': 'あっ これ 僕 が あげた プレゼント',
        'pinyinSpace': 'あっ … これ ぼく が あげた プレゼント'
    },
    '133': {
        'character': 'なんだよ…大事にしてくれてるじゃん',
        'letter': "What... you're taking good care of it.",
        'pinyin': 'なんだよ…だいじにしてくれてるじゃん',
        'definition': 'なんだ よ 大事にしてくれてる じゃん',
        'pinyinSpace': 'なんだ よ … だいじにして くれてる じゃん'
    },
    '134': {
        'character': 'うぉ～！仔パンダ！！',
        'letter': 'Wow~! A little panda!',
        'pinyin': 'うぉ～！こぱんだ！！',
        'definition': 'うぉ 仔 パンダ',
        'pinyinSpace': 'うぉ ～！ こ パンダ ！！'
    },
    '135': {
        'character': 'うぉ～！超かわいい！！',
        'letter': "Wow~! It's so cute!",
        'pinyin': 'うぉ～！ちょうかわいい！！',
        'definition': 'うぉ 超 かわいい',
        'pinyinSpace': 'うぉ ～！ ちょう かわいい ！！'
    },
    '136': {
        'character': 'さ…触りたい',
        'letter': 'I want to touch it.',
        'pinyin': 'さ…さわりたい',
        'definition': 'さ 触りたい',
        'pinyinSpace': 'さ … さわりたい'
    },
    '137': {
        'character': 'ダメだよそれは観賞用だよ',
        'letter': "No, no, no, that's just for show.",
        'pinyin': 'だめだよそれはかんしょうようだよ',
        'definition': 'ダメ だ よ それは 観賞 用 だ よ',
        'pinyinSpace': 'ダメ だ よ それは かんしょう よう だ よ'
    },
    '138': {
        'character': 'くれるの？',
        'letter': 'Can I have it?',
        'pinyin': 'くれるの？',
        'definition': 'くれる の',
        'pinyinSpace': 'くれる の ？'
    },
    '139': {
        'character': 'かわいい！',
        'letter': 'So cute!',
        'pinyin': 'かわいい！',
        'definition': 'かわいい',
        'pinyinSpace': 'かわいい ！'
    },
    '140': {
        'character': 'お目覚め？ごめんなさいね',
        'letter': "Are you awake? I'm sorry.",
        'pinyin': 'おめざめ？ごめんなさいね',
        'definition': 'お 目覚め ごめんなさい ね',
        'pinyinSpace': 'お めざめ ？ ごめんなさい ね'
    },
    '141': {
        'character': 'うちのお爺ちゃんが…あら？',
        'letter': 'My grandpa... oh?',
        'pinyin': 'うちのおじいちゃんが…あら？',
        'definition': 'うち の お 爺ちゃん が あら',
        'pinyinSpace': 'うち の お じいちゃん が … あら ？'
    },
    '142': {
        'character': 'ありがとう！おいしいな',
        'letter': 'Oh, thank you! This is delicious.',
        'pinyin': 'ありがとう！おいしいな',
        'definition': 'ありがとう おいしい な',
        'pinyinSpace': 'ありがとう ！ おいしい な'
    },
    '143': {
        'character': 'リンリン！？それ観賞用よ',
        'letter': "Ling Ling! That's just for decoration.",
        'pinyin': 'りんりん！？それかんしょうようよ',
        'definition': 'リンリン それ 観賞 用 よ',
        'pinyinSpace': 'リンリン ！？ それ かんしょう よう よ'
    },
    '144': {
        'character': 'っていうか笹食べるの？',
        'letter': 'I mean, do you eat the bamboos?',
        'pinyin': 'っていうかささたべるの？',
        'definition': 'っていうか 笹 食べる の',
        'pinyinSpace': 'っていうか ささ たべる の ？'
    },
    '145': {
        'character': 'えぇ状況しだいでは',
        'letter': 'Yes, depending on the situation.',
        'pinyin': 'えぇじょうきょうしだいでは',
        'definition': 'えぇ 状況 し だい では',
        'pinyinSpace': 'えぇ じょうきょう し だい で·は'
    },
    '146': {
        'character': 'まぁ止めないけど…',
        'letter': "Well, I won't stop you.",
        'pinyin': 'まぁとめないけど…',
        'definition': 'まぁ 止めない けど',
        'pinyinSpace': 'まぁ とめない/やめない けど …'
    },
    '147': {
        'character': 'あの…お花代まだお支払いしてなかったでしょ？',
        'letter': "I mean... you haven't paid for the flowers yet, have you?",
        'pinyin': 'あの…おはなだいまだおしはらいしてなかったでしょ？',
        'definition': 'あの お 花代 まだ お 支払い してなかった でしょ',
        'pinyinSpace': 'あの … お はなだい まだ お しはらい してなかった でしょ ？'
    },
    '148': {
        'character': 'お代はいらないので仔パンダ抱っこさせてください！',
        'letter': "I don't want to pay for the flowers, just let me hold the panda cub.",
        'pinyin': 'おだいはいらないのでこぱんだだっこさせてください！',
        'definition': 'お代 は いらない ので 仔 パンダ 抱っこさせてください',
        'pinyinSpace': 'おだい は いらない ので こ パンダ だっこ させて ください ！'
    },
    '149': {
        'character': 'いいけど…',
        'letter': 'Okay, but...',
        'pinyin': 'いいけど…',
        'definition': 'いい けど',
        'pinyinSpace': 'いい けど …'
    },
    '150': {
        'character': 'ちゃんと払うわよ',
        'letter': "I'll pay you.",
        'pinyin': 'ちゃんとはらうわよ',
        'definition': 'ちゃんと 払う わよ',
        'pinyinSpace': 'ちゃんと はらう わよ'
    },
    '151': {
        'character': 'あら…ごめんなさい',
        'letter': "Oh, I'm sorry.",
        'pinyin': 'あら…ごめんなさい',
        'definition': 'あら ごめんなさい',
        'pinyinSpace': 'あら … ごめんなさい'
    },
    '152': {
        'character': 'うちの子人見知りで…',
        'letter': 'My baby is shy.',
        'pinyin': 'うちのこひとみしりで…',
        'definition': 'うち の 子 人見知り で',
        'pinyinSpace': 'うち の こ ひとみしり で …'
    },
    '153': {
        'character': '幸せです！',
        'letter': "I'm so happy.",
        'pinyin': 'しあわせです！',
        'definition': '幸せ です',
        'pinyinSpace': 'しあわせ です ！'
    },
    '154': {
        'character': 'お花こちらでよろしいでしょうか？',
        'letter': 'May I have the flowers here?',
        'pinyin': 'おはなこちらでよろしいでしょうか？',
        'definition': 'お 花 こちら で よろしいでしょう か',
        'pinyinSpace': 'お はな こちら で よろしいでしょう か ？'
    },
    '155': {
        'character': '厘太郎さんどうしたのかしら？',
        'letter': "Rintaro, what's wrong?",
        'pinyin': 'りんたろうさんどうしたのかしら？',
        'definition': '厘 太 郎 さん どうしたの かしら',
        'pinyinSpace': 'りん ふと ろう さん どうしたの かしら ？'
    },
    '156': {
        'character': '傷だらけね',
        'letter': "You're all scratched up.",
        'pinyin': 'きずだらけね',
        'definition': '傷 だらけ ね',
        'pinyinSpace': 'きず だらけ ね'
    },
    '157': {
        'character': 'パンダママさんや妹ちゃんとは仲よくなれたんだ',
        'letter': 'He got along well with his mommy and sister.',
        'pinyin': 'ぱんだままさんやいもうとちゃんとはなかよくなれたんだ',
        'definition': 'パンダ ママさん や 妹 ちゃんと は 仲 よくなれた ん だ',
        'pinyinSpace': 'パンダ ママさん や いもうと ちゃんと は なか よくなれた ん だ'
    },
    '158': {
        'character': '今度はパンダお爺ちゃんと仔パンダちゃんたち…',
        'letter': 'And now Grandpa Panda and the little pandas...',
        'pinyin': 'こんどはぱんだおじいちゃんとこぱんだちゃんたち…',
        'definition': '今度 は パンダ お 爺 ちゃんと 仔 パンダ ちゃん たち',
        'pinyinSpace': 'こんど は パンダ お じじ ちゃんと こ パンダ ちゃん たち …'
    },
    '159': {
        'character': 'そしていずれは…',
        'letter': 'And eventually...',
        'pinyin': 'そしていずれは…',
        'definition': 'そして いずれ は',
        'pinyinSpace': 'そして いずれ は …'
    },
    '160': {
        'character': 'ねぇねぇ半田さん',
        'letter': 'Hey, hey, Mr. Handa.',
        'pinyin': 'ねぇねぇはんでんさん',
        'definition': 'ねぇねぇ 半田 さん',
        'pinyinSpace': 'ねぇねぇ はんだ さん'
    },
    '161': {
        'character': '今日帰りにさ…',
        'letter': 'I was just on my way home today...',
        'pinyin': 'きょうかえりにさ…',
        'definition': '今 日帰り に さ',
        'pinyinSpace': 'こん/いま ひがえり に さ …'
    },
    '162': {
        'character': '今日はダメ！用事あるの',
        'letter': 'Not today! I have something to do.',
        'pinyin': 'きょうはだめ！ようじあるの',
        'definition': '今日 は ダメ 用事 ある の',
        'pinyinSpace': 'きょう は ダメ ！ ようじ ある の'
    },
    '163': {
        'character': 'ちょっとくらいいいじゃん',
        'letter': "Why don't you come over for a bit?",
        'pinyin': 'ちょっとくらいいいじゃん',
        'definition': 'ちょっと くらい いい じゃん',
        'pinyinSpace': 'ちょっと くらい いい じゃん'
    },
    '164': {
        'character': '彼女もいないし暇でしょ？',
        'letter': "You don't have a girlfriend and you're not busy.",
        'pinyin': 'かのじょもいないしひまでしょ？',
        'definition': '彼女 も いない し 暇 でしょ',
        'pinyinSpace': 'かのじょ も いない し ひま でしょ ？'
    },
    '165': {
        'character': 'もう…パンダくんより女の子に追いかけられたいよ',
        'letter': "I'd rather be chased by a girl than a panda.",
        'pinyin': 'もう…ぱんだくんよりおんなのこにおいかけられたいよ',
        'definition': 'もう パンダ くん より 女の子 に 追いかけられたい よ',
        'pinyinSpace': 'もう … パンダ くん より おんなのこ に おいかけられたい よ'
    },
    '166': {
        'character': 'あ～っ！ひどい',
        'letter': "Oh, no! That's terrible.",
        'pinyin': 'あ～っ！ひどい',
        'definition': 'あ っ ひどい',
        'pinyinSpace': 'あ ～ っ ！ ひどい'
    },
    '167': {
        'character': 'パンダくんよりだと！？',
        'letter': 'More than a panda?',
        'pinyin': 'ぱんだくんよりだと！？',
        'definition': 'パンダ くん より だ と',
        'pinyinSpace': 'パンダ くん より だ と ！？'
    },
    '168': {
        'character': 'うらやましい！',
        'letter': "I'm jealous!",
        'pinyin': 'うらやましい！',
        'definition': 'うらやましい',
        'pinyinSpace': 'うらやましい ！'
    },
    '169': {
        'character': '何か視線を感じるんだけど…',
        'letter': 'I can feel her eyes on me...',
        'pinyin': 'なにかしせんをかんじるんだけど…',
        'definition': '何か 視線 を 感じる ん だけど',
        'pinyinSpace': 'なにか しせん を かんじる ん だけど …'
    },
    '170': {
        'character': 'そう？',
        'letter': 'Yeah?',
        'pinyin': 'そう？',
        'definition': 'そう',
        'pinyinSpace': 'そう ？'
    },
    '171': {
        'character': 'ペンギンさんの告白',
        'letter': "Penguin's confession.",
        'pinyin': 'ぺんぎんさんのこくはく',
        'definition': 'ペンギン さん の 告白',
        'pinyinSpace': 'ペンギン さん の こくはく'
    },
    '172': {
        'character': 'クロワッサンもいけるね',
        'letter': 'Croissants would work too.',
        'pinyin': 'くろわっさんもいけるね',
        'definition': 'クロワッサン も いける ね',
        'pinyinSpace': 'クロワッサン も いける ね'
    },
    '173': {
        'character': 'これに竹の葉を練りこんだらもっとおいしくなるんじゃない？',
        'letter': "Wouldn't it taste even better if you kneaded bamboo leaves into this?",
        'pinyin': 'これにたけのはをねりこんだらもっとおいしくなるんじゃない？',
        'definition': 'これ に 竹 の 葉 を 練りこんだら もっと おいしくなる ん じゃない',
        'pinyinSpace': 'これ に たけ の は を ねりこんだら もっと おいしくなる ん じゃない ？'
    },
    '174': {
        'character': 'それはどうかな？',
        'letter': "I don't know about that.",
        'pinyin': 'それはどうかな？',
        'definition': 'それはどうかな',
        'pinyinSpace': 'それはどうかな ？'
    },
    '175': {
        'character': 'それよりパンダあんぱんっていうのがあるみたいだよ',
        'letter': "I heard there's something called panda anpan.",
        'pinyin': 'それよりぱんだあんぱんっていうのがあるみたいだよ',
        'definition': 'それより パンダ あん ぱん っていう の が ある みたい だ よ',
        'pinyinSpace': 'それより パンダ あん ぱん っていう の が ある みたい だ よ'
    },
    '176': {
        'character': '本当？',
        'letter': 'Really?',
        'pinyin': 'ほんとう？',
        'definition': '本当',
        'pinyinSpace': 'ほんとう ？'
    },
    '177': {
        'character': 'ねぇペンギンさん次はそのパンダあんぱんを…',
        'letter': 'Hey, Penguin, can we try the Panda Anpan next time?',
        'pinyin': 'ねぇぺんぎんさんつぎはそのぱんだあんぱんを…',
        'definition': 'ねぇ ペンギン さん 次 は その パンダ あん ぱん を',
        'pinyinSpace': 'ねぇ ペンギン さん つぎ は その パンダ あん ぱん を …'
    },
    '178': {
        'character': 'あぁもう…',
        'letter': 'Oh, no...',
        'pinyin': 'あぁもう…',
        'definition': 'あぁ もう',
        'pinyinSpace': 'あぁ もう …'
    },
    '179': {
        'character': '僕は別にパンを買うためにパン屋さんに行ってるわけじゃないんだよ！',
        'letter': "I don't go to the bakery to buy bread!",
        'pinyin': 'ぼくはべつにぱんをかうためにぱんやさんにいってるわけじゃないんだよ！',
        'definition': '僕 は 別に パン を 買う ために パン屋 さん に 行ってる わけじゃない ん だ よ',
        'pinyinSpace': 'ぼく は べつに パン を かう ために パンや さん に おこなってる/いってる わけじゃない ん だ よ ！'
    },
    '180': {
        'character': 'ペン子さんを…その…',
        'letter': 'I want to ask Penko-san out on a...',
        'pinyin': 'ぺんごさんを…その…',
        'definition': 'ペン 子 さん を その',
        'pinyinSpace': 'ペン こ さん を … その …'
    },
    '181': {
        'character': 'デートに誘いたいんだよ…',
        'letter': 'I want to ask her out on a date...',
        'pinyin': 'でーとにさそいたいんだよ…',
        'definition': 'デート に 誘いたい ん だ よ',
        'pinyinSpace': 'デート に さそいたい ん だ よ …'
    },
    '182': {
        'character': '知ってるよそんなの',
        'letter': 'I know that.',
        'pinyin': 'しってるよそんなの',
        'definition': '知ってる よ そんな の',
        'pinyinSpace': 'しってる よ そんな の'
    },
    '183': {
        'character': 'でも結局いつもパンを買って帰ってくるだけじゃない',
        'letter': 'But you always end up just buying bread',
        'pinyin': 'でもけっきょくいつもぱんをかってかえってくるだけじゃない',
        'definition': 'でも 結局 いつも パン を 買って 帰ってくる だけ じゃない',
        'pinyinSpace': 'でも けっきょく いつも パン を かって かえってくる だけ じゃない'
    },
    '184': {
        'character': 'だって…',
        'letter': 'Because...',
        'pinyin': 'だって…',
        'definition': 'だって',
        'pinyinSpace': 'だって …'
    },
    '185': {
        'character': 'いっそ告白しちゃったらどうです？',
        'letter': "Why don't you just confess your feelings to her?",
        'pinyin': 'いっそこくはくしちゃったらどうです？',
        'definition': 'いっそ 告白しちゃったら どう です',
        'pinyinSpace': 'いっそ こくはく しちゃったら どう です ？'
    },
    '186': {
        'character': 'そ…そんな！',
        'letter': 'Oh, no!',
        'pinyin': 'そ…そんな！',
        'definition': 'そ そんな',
        'pinyinSpace': 'そ … そんな ！'
    },
    '187': {
        'character': '小さな１歩を恐れるときは',
        'letter': "When you're afraid to take a small step",
        'pinyin': 'ちいさな１ほをおそれるときは',
        'definition': '小さな １歩 を 恐れる とき は',
        'pinyinSpace': 'ちいさな いっぽ を おそれる とき は'
    },
    '188': {
        'character': '大きな１歩を踏み出すときである',
        'letter': "It's time to take a big step forward.",
        'pinyin': 'おおきな１ほをふみだすときである',
        'definition': '大きな １歩 を 踏み出す とき で ある',
        'pinyinSpace': 'おおきな いっぽ を ふみだす とき で ある'
    },
    '189': {
        'character': 'フランスの古い格言だよ',
        'letter': "It's an old French saying.",
        'pinyin': 'ふらんすのふるいかくげんだよ',
        'definition': 'フランス の 古い 格言 だ よ',
        'pinyinSpace': 'フランス の ふるい かくげん だ よ'
    },
    '190': {
        'character': '大きな１歩を踏み出すとき…',
        'letter': 'When you take the first big step...',
        'pinyin': 'おおきな１ほをふみだすとき…',
        'definition': '大きな １歩 を 踏み出す とき',
        'pinyinSpace': 'おおきな いっぽ を ふみだす とき …'
    },
    '191': {
        'character': 'ウソだけど',
        'letter': "That's a lie.",
        'pinyin': 'うそだけど',
        'definition': 'ウソ だけど',
        'pinyinSpace': 'ウソ だけど'
    },
    '192': {
        'character': '小さな１歩',
        'letter': 'One small step.',
        'pinyin': 'ちいさな１ほ',
        'definition': '小さな １歩',
        'pinyinSpace': 'ちいさな いっぽ'
    },
    '193': {
        'character': '大きな１歩…',
        'letter': 'One big step...',
        'pinyin': 'おおきな１ほ…',
        'definition': '大きな １歩',
        'pinyinSpace': 'おおきな いっぽ …'
    },
    '194': {
        'character': '決めた！僕はやるよ',
        'letter': "I've made up my mind! I'm gonna do it.",
        'pinyin': 'きめた！ぼくはやるよ',
        'definition': '決めた 僕 は やる よ',
        'pinyinSpace': 'きめた ！ ぼく は やる よ'
    },
    '195': {
        'character': 'やるってまさか…',
        'letter': "You don't mean...",
        'pinyin': 'やるってまさか…',
        'definition': 'やる って まさか',
        'pinyinSpace': 'やる って まさか …'
    },
    '196': {
        'character': 'ペン子さんに告白する！',
        'letter': "I'm going to confess to Penko-san!",
        'pinyin': 'ぺんごさんにこくはくする！',
        'definition': 'ペン 子 さん に 告白する',
        'pinyinSpace': 'ペン こ さん に こくはく する ！'
    },
    '197': {
        'character': '告白？',
        'letter': 'Confess?',
        'pinyin': 'こくはく？',
        'definition': '告白',
        'pinyinSpace': 'こくはく ？'
    },
    '198': {
        'character': 'ごめん！今の僕はダジャレにつきあってる暇はないの',
        'letter': "Sorry! I don't have time for puns right now.",
        'pinyin': 'ごめん！いまのぼくはだじゃれにつきあってるひまはないの',
        'definition': 'ごめん 今 の 僕 は ダジャレ に つきあってる 暇 は ない の',
        'pinyinSpace': 'ごめん ！ いま の ぼく は ダジャレ に つきあってる ひま は ない の'
    },
    '199': {
        'character': '早速行ってくるよ！',
        'letter': "I'll be right there!",
        'pinyin': 'さっそくいってくるよ！',
        'definition': '早速 行ってくる よ',
        'pinyinSpace': 'さっそく いってくる よ ！'
    },
    '200': {
        'character': '行っちゃった…',
        'letter': "He's gone...",
        'pinyin': 'いっちゃった…',
        'definition': '行っちゃった',
        'pinyinSpace': 'おこなっちゃった/いっちゃった …'
    },
    '201': {
        'character': 'ヒャッハー！',
        'letter': 'Hooray!',
        'pinyin': 'ひゃっはー！',
        'definition': 'ヒャッハー',
        'pinyinSpace': 'ヒャッハー ！'
    },
    '202': {
        'character': 'それは極悪？',
        'letter': "That's evil?",
        'pinyin': 'それはごくあく？',
        'definition': 'それは 極悪',
        'pinyinSpace': 'それは ごくあく ？'
    },
    '203': {
        'character': 'でもどうやって言おう？',
        'letter': 'But how do I say it?',
        'pinyin': 'でもどうやっていおう？',
        'definition': 'でも どうやって 言おう',
        'pinyinSpace': 'でも どうやって いおう ？'
    },
    '204': {
        'character': 'ノープランなの？',
        'letter': 'You have no plan?',
        'pinyin': 'のーぷらんなの？',
        'definition': 'ノープラン なの',
        'pinyinSpace': 'ノープラン なの ？'
    },
    '205': {
        'character': '当たり前でしょ！',
        'letter': 'Of course not!',
        'pinyin': 'あたりまえでしょ！',
        'definition': '当たり前 でしょ',
        'pinyinSpace': 'あたりまえ でしょ ！'
    },
    '206': {
        'character': 'さっき思い立ったんだから',
        'letter': 'It just came to me a while ago.',
        'pinyin': 'さっきおもいたったんだから',
        'definition': 'さっき 思い立った ん だから',
        'pinyinSpace': 'さっき おもいたった ん だ から'
    },
    '207': {
        'character': 'どうしたらいいかな？',
        'letter': 'What should I do?',
        'pinyin': 'どうしたらいいかな？',
        'definition': 'どうしたらいい かな',
        'pinyinSpace': 'どうしたらいい かな ？'
    },
    '208': {
        'character': '例えばクジャクは羽を広げて愛の告白をするよね',
        'letter': 'For example, peacocks spread their wings to confess their love, right?',
        'pinyin': 'たとえばくじゃくははねをひろげてあいのこくはくをするよね',
        'definition': '例えば クジャク は 羽を広げて 愛 の 告白 を する よね',
        'pinyinSpace': 'たとえば クジャク は はねをひろげて あい の こくはく を する よね'
    },
    '209': {
        'character': 'なるほど！',
        'letter': 'I see!',
        'pinyin': 'なるほど！',
        'definition': 'なるほど',
        'pinyinSpace': 'なるほど ！'
    },
    '210': {
        'character': 'こんな感じ？',
        'letter': 'Like this?',
        'pinyin': 'こんなかんじ？',
        'definition': 'こんな 感じ',
        'pinyinSpace': 'こんな かんじ ？'
    },
    '211': {
        'character': '地味だね',
        'letter': "That's plain.",
        'pinyin': 'じみだね',
        'definition': '地味 だ ね',
        'pinyinSpace': 'じみ だ ね'
    },
    '212': {
        'character': 'じゃあ…他には！？',
        'letter': 'Then... what else?',
        'pinyin': 'じゃあ…ほかには！？',
        'definition': 'じゃあ 他に は',
        'pinyinSpace': 'じゃあ … ほかに は ！？'
    },
    '213': {
        'character': 'グンカンドリは赤いノド袋を膨らますらしいよ',
        'letter': 'I heard that the Ginkandori inflates its red throat pouch.',
        'pinyin': 'ぐんかんどりはあかいのどぶくろをふくらますらしいよ',
        'definition': 'グンカンドリ は 赤い ノド 袋 を 膨らます らしい よ',
        'pinyinSpace': 'グンカンドリ は あかい ノド ふくろ を ふくらます らしい よ'
    },
    '214': {
        'character': 'あんまり変わりませんね',
        'letter': "It doesn't look much different.",
        'pinyin': 'あんまりかわりませんね',
        'definition': 'あんまり 変わりません ね',
        'pinyinSpace': 'あんまり かわりません ね'
    },
    '215': {
        'character': 'もっと膨らまないの？',
        'letter': "Can't it be inflated more?",
        'pinyin': 'もっとふくらまないの？',
        'definition': 'もっと 膨らまない の',
        'pinyinSpace': 'もっと ふくらまない の ？'
    },
    '216': {
        'character': 'リクガメは甲羅アタック噛みつきマウントだよ',
        'letter': 'The tortoise is a shell-attacking, biting mount.',
        'pinyin': 'りくがめはこうらあたっくかみつきまうんとだよ',
        'definition': 'リクガメ は 甲羅 アタック 噛みつき マウント だ よ',
        'pinyinSpace': 'リクガメ は こうら アタック かみつき マウント だ よ'
    },
    '217': {
        'character': 'え～プロレス？',
        'letter': 'Wrestling?',
        'pinyin': 'え～ぷろれす？',
        'definition': 'え プロレス',
        'pinyinSpace': 'え ～ プロレス ？'
    },
    '218': {
        'character': '噛みつきは反則じゃないんですか？',
        'letter': "Isn't biting illegal?",
        'pinyin': 'かみつきははんそくじゃないんですか？',
        'definition': '噛みつき は 反則 じゃない ん です か',
        'pinyinSpace': 'かみつき は はんそく じゃない ん です か ？'
    },
    '219': {
        'character': 'ワルだねかっこいい！',
        'letter': "You're so cool!",
        'pinyin': 'わるだねかっこいい！',
        'definition': 'ワル だ ね かっこいい',
        'pinyinSpace': 'ワル だ ね かっこいい ！'
    },
    '220': {
        'character': 'あれ？でもペンギンさん甲羅ないよ',
        'letter': "Huh? But penguins don't have shells.",
        'pinyin': 'あれ？でもぺんぎんさんこうらないよ',
        'definition': 'あれ でも ペンギン さん 甲羅 ない よ',
        'pinyinSpace': 'あれ ？ でも ペンギン さん こうら ない よ'
    },
    '221': {
        'character': 'お皿付けたら？',
        'letter': "Why don't you put a plate on it?",
        'pinyin': 'おさらつけたら？',
        'definition': 'お皿 付けたら',
        'pinyinSpace': 'おさら つけたら ？'
    },
    '222': {
        'character': 'カッパ？',
        'letter': 'Kappa?',
        'pinyin': 'かっぱ？',
        'definition': 'カッパ',
        'pinyinSpace': 'カッパ ？'
    },
    '223': {
        'character': 'カッパってなんて言って告白するの？',
        'letter': 'What do you say to a kappa?',
        'pinyin': 'かっぱってなんていってこくはくするの？',
        'definition': 'カッパ って なんて 言って 告白する の',
        'pinyinSpace': 'カッパ って なんて いって こくはく する の ？'
    },
    '224': {
        'character': 'ちょっと！まじめに考えてよ！',
        'letter': 'Oh, come on! Seriously, think about it!',
        'pinyin': 'ちょっと！まじめにかんがえてよ！',
        'definition': 'ちょっと まじめ に 考えて よ',
        'pinyinSpace': 'ちょっと ！ まじめ に かんがえて よ ！'
    },
    '225': {
        'character': 'はぁ…もうどうしていいかわからないよ',
        'letter': "I don't know what to do anymore.",
        'pinyin': 'はぁ…もうどうしていいかわからないよ',
        'definition': 'はぁ もう どうして いい か わからない よ',
        'pinyinSpace': 'はぁ … もう どうして いい か わからない よ'
    },
    '226': {
        'character': '最悪だ世界の終わりだ',
        'letter': "It's the end of the world!",
        'pinyin': 'さいあくだせかいのおわりだ',
        'definition': '最悪 だ 世界 の 終わり だ',
        'pinyinSpace': 'さいあく だ せかい の おわり だ'
    },
    '227': {
        'character': 'や…やっぱり好きですってシンプルなのがいちばんですよ',
        'letter': "I think a simple 'I love you' is the best.",
        'pinyin': 'や…やっぱりすきですってしんぷるなのがいちばんですよ',
        'definition': 'や やっぱり 好き です って シンプル な の が いちばん です よ',
        'pinyinSpace': 'や … やっぱり すき です って シンプル な の が いちばん です よ'
    },
    '228': {
        'character': 'あからさますぎない？',
        'letter': "Isn't it too obvious?",
        'pinyin': 'あからさますぎない？',
        'definition': 'あからさま すぎない',
        'pinyinSpace': 'あからさま すぎない ？'
    },
    '229': {
        'character': 'それじゃあ好きってバレちゃうよ～！',
        'letter': "Then they'll know you like them!",
        'pinyin': 'それじゃあすきってばれちゃうよ～！',
        'definition': 'それ じゃあ 好き って バレ ちゃう よ',
        'pinyinSpace': 'それ じゃあ すき って バレ ちゃう よ ～！'
    },
    '230': {
        'character': '告白するんじゃないんですか？',
        'letter': "Aren't you going to confess?",
        'pinyin': 'こくはくするんじゃないんですか？',
        'definition': '告白する ん じゃない ん です か',
        'pinyinSpace': 'こくはく する ん じゃない ん です か ？'
    },
    '231': {
        'character': 'はっ…そうだった',
        'letter': "Oh... that's right.",
        'pinyin': 'はっ…そうだった',
        'definition': 'は っ そう だった',
        'pinyinSpace': 'は っ … そう だった'
    },
    '232': {
        'character': 'わかったシンプルに頑張るよ',
        'letter': "Okay, I'll try to keep it simple.",
        'pinyin': 'わかったしんぷるにがんばるよ',
        'definition': 'わかった シンプル に 頑張る よ',
        'pinyinSpace': 'わかった シンプル に がんばる よ'
    },
    '233': {
        'character': 'それじゃあ行こうか',
        'letter': "Well then, let's go.",
        'pinyin': 'それじゃあいこうか',
        'definition': 'それ じゃあ 行こう か',
        'pinyinSpace': 'それ じゃあ いこう か'
    },
    '234': {
        'character': 'ついてくる気！？',
        'letter': "You're following me!",
        'pinyin': 'ついてくるき！？',
        'definition': 'ついてくる 気',
        'pinyinSpace': 'ついてくる き ！？'
    },
    '235': {
        'character': '昔の武将はこう言った',
        'letter': 'An old warlord once said.',
        'pinyin': 'むかしのぶしょうはこういった',
        'definition': '昔 の 武将 は こう言った',
        'pinyinSpace': 'むかし の ぶしょう は こういった'
    },
    '236': {
        'character': '１本の矢なら折れるが３本の矢なら折れないと',
        'letter': 'One arrow will break, but three arrows will not.',
        'pinyin': '１ぽんのやならおれるが３ぼんのやならおれないと',
        'definition': '１ 本の 矢 なら 折れる が ３ 本の 矢 なら 折れない と',
        'pinyinSpace': 'ワン/いち ほん·の や なら おれる が さん ほん·の や なら おれない と'
    },
    '237': {
        'character': 'え～っと…三人寄れば文殊の知恵',
        'letter': "Let's see... three arrows make a wise man.",
        'pinyin': 'え～っと…さんにんよればもんじゅのちえ',
        'definition': 'え っと 三人寄れば文殊の知恵',
        'pinyinSpace': 'え ～ っと … さんにんよればもんじゅのちえ'
    },
    '238': {
        'character': 'モンキーの知恵？',
        'letter': 'Monkey wisdom?',
        'pinyin': 'もんきーのちえ？',
        'definition': 'モンキー の 知恵',
        'pinyinSpace': 'モンキー の ちえ ？'
    },
    '239': {
        'character': 'それじゃあ猿知恵になっちゃうよ',
        'letter': 'That would be monkey wisdom.',
        'pinyin': 'それじゃあさるぢえになっちゃうよ',
        'definition': 'それ じゃあ 猿知恵 に なっちゃう よ',
        'pinyinSpace': 'それ じゃあ さるぢえ に なっちゃう よ'
    },
    '240': {
        'character': '一人で大丈夫だから来ないでね！',
        'letter': "I'm fine on my own, so don't come here!",
        'pinyin': 'ひとりでだいじょうぶだからこないでね！',
        'definition': '一人で 大丈夫 だから 来ないで ね',
        'pinyinSpace': 'ひとりで だいじょうぶ だ から こないで ね ！'
    },
    '241': {
        'character': 'うまくいくといいですね',
        'letter': 'I hope it works out.',
        'pinyin': 'うまくいくといいですね',
        'definition': 'うまくいく と いいです ね',
        'pinyinSpace': 'うまくいく と いいです ね'
    },
    '242': {
        'character': 'あ…あれ？',
        'letter': 'Oh...what?',
        'pinyin': 'あ…あれ？',
        'definition': 'あ あれ',
        'pinyinSpace': 'あ … あれ ？'
    },
    '243': {
        'character': 'す…好きです！',
        'letter': 'I like you!',
        'pinyin': 'す…すきです！',
        'definition': 'す 好き です',
        'pinyinSpace': 'す … すき です ！'
    },
    '244': {
        'character': 'これ受け取ってください',
        'letter': 'Please take this.',
        'pinyin': 'これうけとってください',
        'definition': 'これ 受け取ってください',
        'pinyinSpace': 'これ うけとって ください'
    },
    '245': {
        'character': 'よ～し…言える！言えるぞ！',
        'letter': 'Okay, I can say it! I can say it!',
        'pinyin': 'よ～し…いえる！いえるぞ！',
        'definition': 'よ し 言える 言える ぞ',
        'pinyinSpace': 'よ ～ し … いえる ！ いえる ぞ ！'
    },
    '246': {
        'character': '行くぞ…よし行くぞ！',
        'letter': "Let's go... okay, let's go!",
        'pinyin': 'いくぞ…よしいくぞ！',
        'definition': '行く ぞ よし 行く ぞ',
        'pinyinSpace': 'いく ぞ … よし いく ぞ ！'
    },
    '247': {
        'character': 'す…好きです！これ受け取ってください！',
        'letter': 'I love you! Please take this!',
        'pinyin': 'す…すきです！これうけとってください！',
        'definition': 'す 好き です これ 受け取ってください',
        'pinyinSpace': 'す … すき です ！ これ うけとって ください ！'
    },
    '248': {
        'character': 'よし！',
        'letter': 'Yes!',
        'pinyin': 'よし！',
        'definition': 'よし',
        'pinyinSpace': 'よし ！'
    },
    '249': {
        'character': 'す…好きですペン子さん！',
        'letter': 'I love you, Penko!',
        'pinyin': 'す…すきですぺんごさん！',
        'definition': 'す 好き です ペン 子 さん',
        'pinyinSpace': 'す … すき です ペン こ さん ！'
    },
    '250': {
        'character': 'これ受け取ってください！',
        'letter': 'Please take this!',
        'pinyin': 'これうけとってください！',
        'definition': 'これ 受け取ってください',
        'pinyinSpace': 'これ うけとって ください ！'
    },
    '251': {
        'character': 'す…好きです！',
        'letter': 'I love you!',
        'pinyin': 'す…すきです！',
        'definition': 'す 好き です',
        'pinyinSpace': 'す … すき です ！'
    },
    '252': {
        'character': '好きですこれ受け取ってください！',
        'letter': 'Please accept this!',
        'pinyin': 'すきですこれうけとってください！',
        'definition': '好き です これ 受け取ってください',
        'pinyinSpace': 'すき です これ うけとって ください ！'
    },
    '253': {
        'character': 'あれ何？何かのおまじない？',
        'letter': 'What is that? Is it a spell?',
        'pinyin': 'あれなに？なにかのおまじない？',
        'definition': 'あれ 何 何か の おまじない',
        'pinyinSpace': 'あれ なに/なん ？ なにか の おまじない ？'
    },
    '254': {
        'character': '恋する者は',
        'letter': 'Those in love',
        'pinyin': 'こいするものは',
        'definition': '恋する 者 は',
        'pinyinSpace': 'こいする もの は'
    },
    '255': {
        'character': 'それが意味のない行為だとしても幾度となく繰り返してしまう',
        'letter': "Even if it's a meaningless act, it's repeated over and over again.",
        'pinyin': 'それがいみのないこういだとしてもいくどとなくくりかえしてしまう',
        'definition': 'それ が 意味 の ない 行為 だ としても 幾度となく 繰り返してしまう',
        'pinyinSpace': 'それ が いみ の ない こうい だ としても いくどとなく くりかえしてしまう'
    },
    '256': {
        'character': 'また古い格言？',
        'letter': 'Another old saying?',
        'pinyin': 'またふるいかくげん？',
        'definition': 'また 古い 格言',
        'pinyinSpace': 'また ふるい かくげん ？'
    },
    '257': {
        'character': 'ううんいずれペンギンさんが作る未来の格言',
        'letter': "No, it's just a saying that Penguin will make up in the future.",
        'pinyin': 'ううんいずれぺんぎんさんがつくるみらいのかくげん',
        'definition': 'ううん いずれ ペンギン さん が 作る 未来 の 格言',
        'pinyinSpace': 'ううん いずれ ペンギン さん が つくる みらい の かくげん'
    },
    '258': {
        'character': 'やっぱり僕に告白なんてムリなのかなぁ…',
        'letter': "I wonder if it's impossible for me to confess my love to her...",
        'pinyin': 'やっぱりぼくにこくはくなんてむりなのかなぁ…',
        'definition': 'やっぱり 僕 に 告白 なんて ムリ な のか なぁ',
        'pinyinSpace': 'やっぱり ぼく に こくはく なんて ムリ な のか なぁ …'
    },
    '259': {
        'character': 'もし彼女が僕の愛を受け入れてくれたら…',
        'letter': 'If she accepts my love...',
        'pinyin': 'もしかのじょがぼくのあいをうけいれてくれたら…',
        'definition': 'もし 彼女 が 僕 の 愛 を 受け入れてくれたら',
        'pinyinSpace': 'もし かのじょ が ぼく の あい を うけいれて くれたら …'
    },
    '260': {
        'character': '嬉しいよペン子さん',
        'letter': "I'd be so happy, Penko!",
        'pinyin': 'うれしいよぺんごさん',
        'definition': '嬉しい よ ペン 子 さん',
        'pinyinSpace': 'うれしい よ ペン こ さん'
    },
    '261': {
        'character': '嬉しいよペン子さん！',
        'letter': "I'm so happy, Penko!",
        'pinyin': 'うれしいよぺんごさん！',
        'definition': '嬉しい よ ペン 子 さん',
        'pinyinSpace': 'うれしい よ ペン こ さん ！'
    },
    '262': {
        'character': 'おいしいよペン子さん！',
        'letter': "It's delicious, Penko!",
        'pinyin': 'おいしいよぺんごさん！',
        'definition': 'おいしい よ ペン 子 さん',
        'pinyinSpace': 'おいしい よ ペン こ さん ！'
    },
    '263': {
        'character': '嬉しいよ…イテッ！',
        'letter': "I'm so happy... ouch!",
        'pinyin': 'うれしいよ…いてっ！',
        'definition': '嬉しい よ イテッ',
        'pinyinSpace': 'うれしい よ … イテッ ！'
    },
    '264': {
        'character': 'あ…しまった！',
        'letter': 'Oh, no!',
        'pinyin': 'あ…しまった！',
        'definition': 'あ しまった',
        'pinyinSpace': 'あ … しまった ！'
    },
    '265': {
        'character': 'いけないいけない夢の世界に浸ってしまった',
        'letter': "I shouldn't, I shouldn't, I've fallen into a dream world!",
        'pinyin': 'いけないいけないゆめのせかいにひたってしまった',
        'definition': 'いけない いけない 夢 の 世界 に 浸ってしまった',
        'pinyinSpace': 'いけない いけない ゆめ の せかい に ひたってしまった'
    },
    '266': {
        'character': 'でも夢が現実になる可能性はある！',
        'letter': "But there's a chance that dream can become reality!",
        'pinyin': 'でもゆめがげんじつになるかのうせいはある！',
        'definition': 'でも 夢 が 現実 に なる 可能性 は ある',
        'pinyinSpace': 'でも ゆめ が げんじつ に なる かのうせい は ある ！'
    },
    '267': {
        'character': 'そのためにも頑張らなくっちゃ！',
        'letter': 'I have to work hard for that!',
        'pinyin': 'そのためにもがんばらなくっちゃ！',
        'definition': 'その ために も 頑張ら な くっちゃ',
        'pinyinSpace': 'その ために も がんばら な くっちゃ ！'
    },
    '268': {
        'character': 'あ～よかった行ったよ',
        'letter': "Oh, thank goodness it's gone!",
        'pinyin': 'あ～よかったいったよ',
        'definition': 'あ よかった 行った よ',
        'pinyinSpace': 'あ ～ よかった おこなった/いった よ'
    },
    '269': {
        'character': 'うんよかった',
        'letter': "I'm so glad!",
        'pinyin': 'うんよかった',
        'definition': 'うん よかった',
        'pinyinSpace': 'うん よかった'
    },
    '270': {
        'character': '僕は言う言うよ！',
        'letter': "I'll tell you what I'll tell you!",
        'pinyin': 'ぼくはいういうよ！',
        'definition': '僕 は 言う 言う よ',
        'pinyinSpace': 'ぼく は いう いう よ ！'
    },
    '271': {
        'character': 'ペン子さ…',
        'letter': 'Penko...',
        'pinyin': 'ぺんごさ…',
        'definition': 'ペン 子 さ',
        'pinyinSpace': 'ペン こ さ …'
    },
    '272': {
        'character': 'ペンギンさんなかなか起きないね',
        'letter': "Penguins don't wake up very often.",
        'pinyin': 'ぺんぎんさんなかなかおきないね',
        'definition': 'ペンギン さん なかなか 起きない ね',
        'pinyinSpace': 'ペンギン さん なかなか おきない ね'
    },
    '273': {
        'character': 'もう帰ろうかな',
        'letter': "I think I'd better go home.",
        'pinyin': 'もうかえろうかな',
        'definition': 'もう 帰ろう かな',
        'pinyinSpace': 'もう かえろう かな'
    },
    '274': {
        'character': 'あれ？僕…',
        'letter': "What? I'm...",
        'pinyin': 'あれ？ぼく…',
        'definition': 'あれ 僕',
        'pinyinSpace': 'あれ ？ ぼく …'
    },
    '275': {
        'character': 'そうだ！ペン子さんに告白！',
        'letter': "That's it! Confess to Penko-san!",
        'pinyin': 'そうだ！ぺんごさんにこくはく！',
        'definition': 'そう だ ペン 子 さん に 告白',
        'pinyinSpace': 'そう だ ！ ペン こ さん に こくはく ！'
    },
    '276': {
        'character': 'でも今日はやっぱやめとこうかな',
        'letter': "But maybe I shouldn't do that today.",
        'pinyin': 'でもこんにちはやっぱやめとこうかな',
        'definition': 'でも 今日 は やっぱ やめとこう かな',
        'pinyinSpace': 'でも きょう は やっぱ やめとこう かな'
    },
    '277': {
        'character': 'なんか空回りしてる感じだし…',
        'letter': "I feel like I'm spinning my wheels...",
        'pinyin': 'なんかからまわりしてるかんじだし…',
        'definition': 'なんか 空回りしてる 感じ だ し',
        'pinyinSpace': 'なんか からまわり してる かんじ だ し …'
    },
    '278': {
        'character': 'いや！思い立ったが吉日！',
        'letter': 'No! The first day I think of it is the best day of the week!',
        'pinyin': 'いや！おもいたったがきちじつ！',
        'definition': 'いや 思い立ったが吉日',
        'pinyinSpace': 'いや ！ おもいたったがきちじつ ！'
    },
    '279': {
        'character': 'けどなぁなんか調子悪い気もするしな…',
        'letter': "But... I feel like I'm not doing well...",
        'pinyin': 'けどなぁなんかちょうしわるいきもするしな…',
        'definition': 'けど なぁ なんか 調子 悪い 気 も する し な',
        'pinyinSpace': 'けど なぁ なんか ちょうし わるい き も する し な …'
    },
    '280': {
        'character': 'いやいやそんなこと言ってちゃダメだ！',
        'letter': "No, no, no, don't say that!",
        'pinyin': 'いやいやそんなこといってちゃだめだ！',
        'definition': 'いやいや そんな こと 言ってちゃ ダメ だ',
        'pinyinSpace': 'いやいや そんな こと いってちゃ ダメ だ ！'
    },
    '281': {
        'character': 'でもなぁ…',
        'letter': 'But...',
        'pinyin': 'でもなぁ…',
        'definition': 'でも なぁ',
        'pinyinSpace': 'でも なぁ …'
    },
    '282': {
        'character': 'ねぇまだ？',
        'letter': 'Hey, where are you?',
        'pinyin': 'ねぇまだ？',
        'definition': 'ねぇ まだ',
        'pinyinSpace': 'ねぇ まだ ？'
    },
    '283': {
        'character': '待ちくたびれたよ',
        'letter': "I'm tired of waiting.",
        'pinyin': 'まちくたびれたよ',
        'definition': '待ちくたびれた よ',
        'pinyinSpace': 'まちくたびれた よ'
    },
    '284': {
        'character': 'えっ！？なんで２人ともいるの？',
        'letter': 'What? Why are you both here?',
        'pinyin': 'えっ！？なんで２にんともいるの？',
        'definition': 'え っ なんで ２人とも いる の',
        'pinyinSpace': 'え っ ！？ なんで ふたりとも いる の ？'
    },
    '285': {
        'character': '来ないでって言ったのに！',
        'letter': 'I told you not to come!',
        'pinyin': 'こないでっていったのに！',
        'definition': '来ないでって 言った のに',
        'pinyinSpace': 'こないでって いった のに ！'
    },
    '286': {
        'character': '早くしてよ僕もうお腹すいたよ',
        'letter': "Hurry up, I'm hungry.",
        'pinyin': 'はやくしてよぼくもうおなかすいたよ',
        'definition': '早く して よ 僕 もう お腹 すいた よ',
        'pinyinSpace': 'はやく して よ ぼく もう おなか すいた よ'
    },
    '287': {
        'character': '知らないよ！',
        'letter': "I don't know!",
        'pinyin': 'しらないよ！',
        'definition': '知らない よ',
        'pinyinSpace': 'しらない よ ！'
    },
    '288': {
        'character': 'しないの？告白',
        'letter': "You don't? Confession.",
        'pinyin': 'しないの？こくはく',
        'definition': 'しない の 告白',
        'pinyinSpace': 'しない の ？ こくはく'
    },
    '289': {
        'character': 'そ…それは…',
        'letter': "Well... that's...",
        'pinyin': 'そ…それは…',
        'definition': 'そ それは',
        'pinyinSpace': 'そ … それは …'
    },
    '290': {
        'character': '古きローマの詩人は言った',
        'letter': 'As the old Roman poet said.',
        'pinyin': 'ふるきろーまのしじんはいった',
        'definition': '古き ローマ の 詩人 は 言った',
        'pinyinSpace': 'ふるき ローマ の しじん は いった'
    },
    '291': {
        'character': '幸運と愛は勇者とともにあり',
        'letter': 'Fortune and love are with the brave.',
        'pinyin': 'こううんとあいはゆうしゃとともにあり',
        'definition': '幸運 と 愛 は 勇者 とともに あり',
        'pinyinSpace': 'こううん と あい は ゆうしゃ とともに あり'
    },
    '292': {
        'character': '勇者とともに？',
        'letter': 'With the brave?',
        'pinyin': 'ゆうしゃとともに？',
        'definition': '勇者 とともに',
        'pinyinSpace': 'ゆうしゃ とともに ？'
    },
    '293': {
        'character': '幸運も愛もその勇者って人のところにあるってことだね',
        'letter': 'You mean that luck and love are with that brave man.',
        'pinyin': 'こううんもあいもそのゆうしゃってひとのところにあるってことだね',
        'definition': '幸運 も 愛 も その 勇者 って 人 の ところ に ある って こと だ ね',
        'pinyinSpace': 'こううん も あい も その ゆうしゃ って ひと の ところ に ある って こと だ ね'
    },
    '294': {
        'character': '今から行こう',
        'letter': "Let's go now!",
        'pinyin': 'いまからいこう',
        'definition': '今から 行こう',
        'pinyinSpace': 'いまから いこう'
    },
    '295': {
        'character': '行くのはペン子さんのところ！',
        'letter': "We're going to Penko's!",
        'pinyin': 'いくのはぺんごさんのところ！',
        'definition': '行く の は ペン 子 さん の ところ',
        'pinyinSpace': 'いく の は ペン こ さん の ところ ！'
    },
    '296': {
        'character': 'そうなの？',
        'letter': 'Really?',
        'pinyin': 'そうなの？',
        'definition': 'そう なの',
        'pinyinSpace': 'そう なの ？'
    },
    '297': {
        'character': 'よ～しいくぞ！',
        'letter': "Okay, let's go!",
        'pinyin': 'よ～しいくぞ！',
        'definition': 'よ しいく ぞ',
        'pinyinSpace': 'よ ～ しいく ぞ ！'
    },
    '298': {
        'character': '…って２人ともついてこないで！',
        'letter': "Don't you two follow me!",
        'pinyin': '…って２にんともついてこないで！',
        'definition': 'って ２人とも ついてこないで',
        'pinyinSpace': '… って ふたりとも ついてこないで ！'
    },
    '299': {
        'character': '言うぞ言うぞ！',
        'letter': "I'll tell you! I'll tell you!",
        'pinyin': 'いうぞいうぞ！',
        'definition': '言う ぞ 言 う ぞ',
        'pinyinSpace': 'いう ぞ げん う ぞ ！'
    },
    '300': {
        'character': 'なんでいざっていうとき邪魔するの！？',
        'letter': 'Why are you interrupting me when I need you?',
        'pinyin': 'なんでいざっていうときじゃまするの！？',
        'definition': 'なんで いざ っていう とき 邪魔する の',
        'pinyinSpace': 'なんで いざ っていう とき じゃま する の ！？'
    },
    '301': {
        'character': 'パンダあんパンが気になっちゃって',
        'letter': "I'm just worried about the panda buns.",
        'pinyin': 'ぱんだあんぱんがきになっちゃって',
        'definition': 'パンダ あんパン が 気になっちゃって',
        'pinyinSpace': 'パンダ あんパン が きになっちゃって'
    },
    '302': {
        'character': 'わかったよ！買ってきてあげるよ！',
        'letter': "I'll get you some! I'll get you some!",
        'pinyin': 'わかったよ！かってきてあげるよ！',
        'definition': 'わかった よ 買ってきて あげる よ',
        'pinyinSpace': 'わかった よ ！ かってきて あげる よ ！'
    },
    '303': {
        'character': 'だから帰ってよ！ほら帰って帰って！',
        'letter': 'So go home! Go home!',
        'pinyin': 'だからかえってよ！ほらかえってかえって！',
        'definition': 'だから 帰って よ ほら 帰って 帰って',
        'pinyinSpace': 'だ·から かえって よ ！ ほら かえって かえって ！'
    },
    '304': {
        'character': 'あの…',
        'letter': 'Um...',
        'pinyin': 'あの…',
        'definition': 'あの',
        'pinyinSpace': 'あの …'
    },
    '305': {
        'character': 'あっあの…',
        'letter': 'Oh, um...',
        'pinyin': 'あっあの…',
        'definition': 'あっあ の',
        'pinyinSpace': 'あっあ の …'
    },
    '306': {
        'character': '大丈夫かな？ペンギンさん',
        'letter': 'Are you okay? Hey, Penguin.',
        'pinyin': 'だいじょうぶかな？ぺんぎんさん',
        'definition': '大丈夫 かな ペンギン さん',
        'pinyinSpace': 'だいじょうぶ かな ？ ペンギン さん'
    },
    '307': {
        'character': 'お～い！',
        'letter': 'Hey!',
        'pinyin': 'お～い！',
        'definition': 'お い',
        'pinyinSpace': 'お ～ い ！'
    },
    '308': {
        'character': 'やった！やったよ～！',
        'letter': 'I did it! We did it!',
        'pinyin': 'やった！やったよ～！',
        'definition': 'やった やった よ',
        'pinyinSpace': 'やった ！ やった よ ～！'
    },
    '309': {
        'character': 'おめでとうペンギンさん',
        'letter': 'Congratulations, Penguin!',
        'pinyin': 'おめでとうぺんぎんさん',
        'definition': 'おめでとう ペンギン さん',
        'pinyinSpace': 'おめでとう ペンギン さん'
    },
    '310': {
        'character': 'へぇ～じゃあうまくいったんですね',
        'letter': 'Well, I guess it all worked out.',
        'pinyin': 'へぇ～じゃあうまくいったんですね',
        'definition': 'へぇ じゃあ うまくいった ん です ね',
        'pinyinSpace': 'へぇ ～ じゃあ うまくいった ん です ね'
    },
    '311': {
        'character': 'いやぁホントまいっちゃう',
        'letter': "I'm really blown away!",
        'pinyin': 'いやぁほんとまいっちゃう',
        'definition': 'いやぁ ホント まいっちゃう',
        'pinyinSpace': 'いやぁ ホント まいっちゃう'
    },
    '312': {
        'character': 'それでペン子さんは何て？',
        'letter': 'So, what did Penko say?',
        'pinyin': 'それでぺんごさんはなんて？',
        'definition': 'それで ペン 子 さん は 何て',
        'pinyinSpace': 'それで ペン こ さん は なんて ？'
    },
    '313': {
        'character': 'うん？知りたい？',
        'letter': 'You want to know? You want to know?',
        'pinyin': 'うん？しりたい？',
        'definition': 'うん 知りたい',
        'pinyinSpace': 'うん ？ しりたい ？'
    },
    '314': {
        'character': 'もう詳しく教えてくださいよ',
        'letter': 'Please tell me more!',
        'pinyin': 'もうくわしくおしえてくださいよ',
        'definition': 'もう 詳しく 教えてください よ',
        'pinyinSpace': 'もう くわしく おしえて ください よ'
    },
    '315': {
        'character': '実はねペン子さん僕の顔を覚えててくれたみたいでね',
        'letter': 'Actually, Penko-san seems to have remembered my face.',
        'pinyin': 'じつはねぺんごさんぼくのかおをおぼえててくれたみたいでね',
        'definition': '実は ね ペン 子 さん 僕 の 顔 を 覚えててくれた みたい で ね',
        'pinyinSpace': 'じつは ね ペン こ さん ぼく の かお を おぼえてて くれた みたい で ね'
    },
    '316': {
        'character': '「よかったらどうぞ」ってこれ！',
        'letter': "He said, 'Here you go, if you like.'",
        'pinyin': '「よかったらどうぞ」ってこれ！',
        'definition': 'よかったら どうぞ って これ',
        'pinyinSpace': '「 よかったら どうぞ 」 って これ ！'
    },
    '317': {
        'character': 'なんとサービス券もらったの！',
        'letter': 'What a gift! I got a service coupon!',
        'pinyin': 'なんとさーびすけんもらったの！',
        'definition': 'なんと サービス 券 もらった の',
        'pinyinSpace': 'なんと サービス けん もらった の ！'
    },
    '318': {
        'character': 'ちょっと多めにって３枚も',
        'letter': 'I got three coupons, just to have a little extra!',
        'pinyin': 'ちょっとおおめにって３まいも',
        'definition': 'ちょっと 多め に って ３枚 も',
        'pinyinSpace': 'ちょっと おおめ に って さんまい も'
    },
    '319': {
        'character': 'ねっサービス券をサービスだよ！',
        'letter': 'Service coupons for free!',
        'pinyin': 'ねっさーびすけんをさーびすだよ！',
        'definition': 'ね っサー ビス 券 を サービス だ よ',
        'pinyinSpace': 'ね っサー ビス けん を サービス だ よ ！'
    },
    '320': {
        'character': 'あの…告白は？',
        'letter': 'What about your confession?',
        'pinyin': 'あの…こくはくは？',
        'definition': 'あの 告白 は',
        'pinyinSpace': 'あの … こくはく は ？'
    },
    '321': {
        'character': 'それどころじゃないよ！',
        'letter': "I'm not here for that!",
        'pinyin': 'それどころじゃないよ！',
        'definition': 'それどころじゃない よ',
        'pinyinSpace': 'それどころじゃない よ ！'
    },
    '322': {
        'character': 'なんと受け取るときにちょっと手が触れちゃったんだよ',
        'letter': 'I just touched them when I was getting them!',
        'pinyin': 'なんとうけとるときにちょっとてがさわれちゃったんだよ',
        'definition': 'なんと 受け取る とき に ちょっと 手 が 触れちゃった ん だ よ',
        'pinyinSpace': 'なんと うけとる とき に ちょっと て が さわれちゃった/ふれちゃった ん だ よ'
    },
    '323': {
        'character': 'どうしようもう手洗わない！',
        'letter': "I'm not going to wash my hands!",
        'pinyin': 'どうしようもうてあらわない！',
        'definition': 'どうしよう もう 手 洗わない',
        'pinyinSpace': 'どうしよう もう て あらわない ！'
    },
    '324': {
        'character': '洗えないよ！洗いたくないよ！',
        'letter': "I can't wash my hands! I don't want to!",
        'pinyin': 'あらえないよ！あらいたくないよ！',
        'definition': '洗えない よ 洗いたくない よ',
        'pinyinSpace': 'あらえない よ ！ あらいたくない よ ！'
    },
    '325': {
        'character': '１枚のサービス券はサービス券だが',
        'letter': 'One service ticket is a service ticket.',
        'pinyin': '１まいのさーびすけんはさーびすけんだが',
        'definition': '１枚 の サービス 券 は サービス 券 だが',
        'pinyinSpace': 'いちまい の サービス けん は サービス けん だが'
    },
    '326': {
        'character': '３枚なら…やっぱりサービス券だ',
        'letter': 'But three... is still a service coupon.',
        'pinyin': '３まいなら…やっぱりさーびすけんだ',
        'definition': '３枚 なら やっぱり サービス 券 だ',
        'pinyinSpace': 'さんまい なら … やっぱり サービス けん だ'
    },
    '327': {
        'character': 'それを言っちゃダメですよ',
        'letter': "You can't say that.",
        'pinyin': 'それをいっちゃだめですよ',
        'definition': 'それ を 言っちゃ ダメ です よ',
        'pinyinSpace': 'それ を いっちゃ ダメ です よ'
    },
    '328': {
        'character': 'パンダくん聞いてる？',
        'letter': 'Panda, are you listening to me?',
        'pinyin': 'ぱんだくんきいてる？',
        'definition': 'パンダ くん 聞いてる',
        'pinyinSpace': 'パンダ くん きいてる ？'
    },
    '329': {
        'character': '聞いてるよ',
        'letter': "I'm listening.",
        'pinyin': 'きいてるよ',
        'definition': '聞いてる よ',
        'pinyinSpace': 'きいてる よ'
    },
    '330': {
        'character': '笹子さんほら！',
        'letter': 'Sasago!',
        'pinyin': 'ささごさんほら！',
        'definition': '笹 子 さん ほら',
        'pinyinSpace': 'ささ こ さん ほら ！'
    },
    '331': {
        'character': 'もう幸せ！',
        'letter': "I'm so happy!",
        'pinyin': 'もうしあわせ！',
        'definition': 'もう 幸せ',
        'pinyinSpace': 'もう しあわせ ！'
    },
    '332': {
        'character': 'ペンギンさんペンギンさんペンギンさん',
        'letter': 'Penguin! Penguin! Penguin!',
        'pinyin': 'ぺんぎんさんぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん ペンギン さん'
    },
    '333': {
        'character': 'いつもは二回呼ぶのに今日はどうしたの？',
        'letter': "You usually call me twice, but what's wrong with you today?",
        'pinyin': 'いつもはにかいよぶのにきょうはどうしたの？',
        'definition': 'いつも は 二回 呼ぶ のに 今日 は どうしたの',
        'pinyinSpace': 'いつも は にかい よぶ のに きょう は どうしたの ？'
    },
    '334': {
        'character': 'どうもしないよ',
        'letter': 'Nothing.',
        'pinyin': 'どうもしないよ',
        'definition': 'どうも しない よ',
        'pinyinSpace': 'どうも しない よ'
    },
    '335': {
        'character': 'ペンギンさんとの退屈な時間に少しだけでも刺激が欲しかったんだよ',
        'letter': 'I just wanted a little excitement in my boring time with Mr. Penguin.',
        'pinyin': 'ぺんぎんさんとのたいくつなじかんにすこしだけでもしげきがほしかったんだよ',
        'definition': 'ペンギン さん と の 退屈 な 時間 に 少し だけ でも 刺激 が 欲しかった ん だ よ',
        'pinyinSpace': 'ペンギン さん と の たいくつ な じかん に すこし だけ でも しげき が ほしかった ん だ よ'
    },
    '336': {
        'character': '君結構言うね',
        'letter': 'You say that a lot.',
        'pinyin': 'きみけっこういうね',
        'definition': '君 結構 言う ね',
        'pinyinSpace': 'きみ/くん けっこう いう ね'
    },
    '337': {
        'character': 'ペンギンさんといるとどうして退屈するか考えてみようよ',
        'letter': "Let's see if you can figure out why you're so bored with Mr. Penguin.",
        'pinyin': 'ぺんぎんさんといるとどうしてたいくつするかかんがえてみようよ',
        'definition': 'ペンギン さん と いる と どうして 退屈する か 考えて みよう よ',
        'pinyinSpace': 'ペンギン さん と いる と どうして たいくつ する か かんがえて みよう よ'
    },
    '338': {
        'character': 'いいよそれは白熊君終わって',
        'letter': "Okay, polar bear, you're done.",
        'pinyin': 'いいよそれはしろくまくんおわって',
        'definition': 'いい よ それは 白熊 君 終わって',
        'pinyinSpace': 'いい よ それは しろくま/はぐま きみ/くん おわって'
    },
    '339': {
        'character': '次回のしろくまカフェは',
        'letter': 'Next time at the Shirokuma Cafe.',
        'pinyin': 'じかいのしろくまかふぇは',
        'definition': '次回 の しろくま カフェ は',
        'pinyinSpace': 'じかい の しろくま カフェ は'
    },
    '340': {
        'character': '30秒に縮小してお送りします',
        'letter': "I'm going to cut it down to 30 seconds.",
        'pinyin': '30びょうにしゅくしょうしておおくりします',
        'definition': '秒 に 縮小して お 送り します',
        'pinyinSpace': 'さんじゅうびょう に しゅくしょう して お おくり します'
    },
    '341': {
        'character': '30分やろう',
        'letter': "Let's do 30 minutes.",
        'pinyin': '30ふんやろう',
        'definition': '分 やろう',
        'pinyinSpace': 'さんじゅっぷん やろう'
    },
    '342': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'おたのしみに',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
    }
}