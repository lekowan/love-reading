const allSyllableMap = {
    '1': {
        'character': 'グリズリー さん 旅立つ',
        'pinyin': 'ぐりずりー さん たびだつ',
        'letter': 'Mr. Grizzly Goes on an Adventure.',
        'definition': 'グリズリー さん 旅立つ',
        'pinyinSpace': 'グリズリー  さん  たびだつ'
    },
    '2': {
        'character': 'シロクマ が おいしい 季節 で やん す よ',
        'pinyin': 'しろくま が おいしい きせつ で やん す よ',
        'letter': "It's the season when polar bears are delicious. ",
        'definition': 'シロクマ が おいしい 季節 で やん す よ',
        'pinyinSpace': 'シロクマ  が  おいしい  きせつ  で  やん  す  よ'
    },
    '3': {
        'character': 'お前 … シロクマ 食った こと あん の か ？',
        'pinyin': 'おまえ … しろくま くった こと あん の か ？',
        'letter': " that you've eaten a polar bear before?",
        'definition': 'お前 シロクマ 食った こと あん の か',
        'pinyinSpace': 'おまえ … シロクマ  くった  こと  あん  の  か ？'
    },
    '4': {
        'character': 'え ぇ 今日 も 昼 に 食べ まし た よ',
        'pinyin': 'え ぇ きょう も ひる に たべ まし た よ',
        'letter': 'Yes, I even had one this afternoon.',
        'definition': 'え ぇ 今日 も 昼 に 食べ まし た よ',
        'pinyinSpace': 'え  ぇ  きょう  も  ひる  に  たべ  まし  た  よ'
    },
    '5': {
        'character': '夏 は おいしい ん だ',
        'pinyin': 'なつ は おいしい ん だ',
        'letter': 'During the summer, polar bears... ',
        'definition': '夏 は おいしい ん だ',
        'pinyinSpace': 'なつ  は  おいしい  ん  だ'
    },
    '6': {
        'character': 'シロクマ ！',
        'pinyin': 'しろくま ！',
        'letter': 'are especially delicious.',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '7': {
        'character': 'カワウソ が シロクマ を ！ ？',
        'pinyin': 'かわうそ が しろくま を ！ ？',
        'letter': 'An otter ate Polar Bear?!',
        'definition': 'カワウソ が シロクマ を',
        'pinyinSpace': 'カワウソ  が  シロクマ  を ！ ？'
    },
    '8': {
        'character': 'ありえ ねえ ！ お前 １人 で やった の か ？',
        'pinyin': 'ありえ ねえ ！ おまえ １にん で やった の か ？',
        'letter': 'Impossible! You did it yourself?!',
        'definition': 'あり え ねえ お前 １人 で やった の か',
        'pinyinSpace': 'あり え  ねえ ！ おまえ  ひとり  で  やった  の  か ？'
    },
    '9': {
        'character': 'いや いや … 仲間 と 一緒 に',
        'pinyin': 'いや いや … なかま と いっしょ に',
        'letter': 'Oh no, there was a whole group of us.',
        'definition': 'いや いや 仲間 と 一緒 に',
        'pinyinSpace': 'いや  いや … なかま  と  いっしょ  に'
    },
    '10': {
        'character': 'えっ ！ ？ 仲間 と シロクマ を ？',
        'pinyin': 'えっ ！ ？ なかま と しろくま を ？',
        'letter': ' A group of you ate Polar Bear?',
        'definition': 'え っ 仲間 と シロクマ を',
        'pinyinSpace': 'え っ ！ ？ なかま  と  シロクマ  を ？'
    },
    '11': {
        'character': 'クマ 食う ヤツ が 俺 の 店 に 来る ん じゃ ねえ ！',
        'pinyin': 'くま くう やつ が おれ の みせ に くる ん じゃ ねえ ！',
        'letter': 'How dare someone who eats bears eat here! ',
        'definition': 'クマ 食う ヤツ が 俺 の 店 に 来る ん じゃ ねえ',
        'pinyinSpace': 'クマ  くう  ヤツ  が  おれ  の  みせ/てん  に  くる  ん  じゃ  ねえ ！'
    },
    '12': {
        'character': 'ふざけ や がって ！',
        'pinyin': 'ふざけ や がって ！',
        'letter': " It can't be!",
        'definition': 'ふざけ や が って',
        'pinyinSpace': 'ふざけ  や  が って ！'
    },
    '13': {
        'character': 'シロクマ が あんな ヤロウ ども に 食われる か よ ！',
        'pinyin': 'しろくま が あんな やろう ども に くわれる か よ ！',
        'letter': 'Polar Bear would never be eaten by the likes of them! ',
        'definition': 'シロクマ が あんな ヤロウ ども に 食われる か よ',
        'pinyinSpace': 'シロクマ  が  あんな  ヤロウ  ども  に  くわれる  か  よ ！'
    },
    '14': {
        'character': '今日 の 昼',
        'pinyin': 'きょう の ひる',
        'letter': ' This afternoon.',
        'definition': '今日 の 昼',
        'pinyinSpace': 'きょう  の  ひる'
    },
    '15': {
        'character': '白くま はじめ まし た ？',
        'pinyin': 'しろくま はじめ まし た ？',
        'letter': 'Try Our New Polar Bear?',
        'definition': '白 くま はじめ まし た',
        'pinyinSpace': 'しろ くま  はじめ  まし  た ？'
    },
    '16': {
        'character': 'いらっしゃい',
        'pinyin': 'いらっしゃい',
        'letter': 'Welcome. ',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '17': {
        'character': 'シロクマ くん ごめん ね',
        'pinyin': 'しろくま くん ごめん ね',
        'letter': "I'm sorry, Polar Bear. ",
        'definition': 'シロクマ くん ごめん ね',
        'pinyinSpace': 'シロクマ  くん  ごめん  ね'
    },
    '18': {
        'character': '何 ？ パンダ くん',
        'pinyin': 'なに ？ ぱんだ くん',
        'letter': 'About what, Panda? ',
        'definition': '何 パンダ くん',
        'pinyinSpace': 'なに/なん ？ パンダ  くん'
    },
    '19': {
        'character': '僕 … 今まで シロクマ くん の こと シロクマ だ と 思って い た けど',
        'pinyin': 'ぼく … いままで しろくま くん の こと しろくま だ と おもって い た けど',
        'letter': 'All this time I thought that you were a polar bear,',
        'definition': '僕 今まで シロクマ くん の こと シロクマ だ と 思って い た けど',
        'pinyinSpace': 'ぼく … いままで  シロクマ  くん  の  こと  シロクマ  だ  と  おもって  い  た  けど'
    },
    '20': {
        'character': 'まだ シロクマ じゃ なかった ん だ ね',
        'pinyin': 'まだ しろくま じゃ なかった ん だ ね',
        'letter': "but I guess you weren't a polar bear yet.",
        'definition': 'まだ シロクマ じゃ なかった ん だ ね',
        'pinyinSpace': 'まだ  シロクマ  じゃ  なかった  ん  だ  ね'
    },
    '21': {
        'character': 'パンダ くん … 何 言ってる の ？',
        'pinyin': 'ぱんだ くん … なに いってる の ？',
        'letter': 'What are you talking about, Panda?',
        'definition': 'パンダ くん 何 言ってる の',
        'pinyinSpace': 'パンダ  くん … なに/なん  いってる  の ？'
    },
    '22': {
        'character': '表 に 「 白くま はじめ まし た 」 って',
        'pinyin': 'ひょう に 「 しろくま はじめ まし た 」 って',
        'letter': 'The sign out front said, Try Our New Polar Bear. ',
        'definition': '表 に 白 くま はじめ まし た って',
        'pinyinSpace': 'おもて/ひょう  に 「 しろ くま  はじめ  まし  た 」 って'
    },
    '23': {
        'character': 'いや あれ は さ …',
        'pinyin': 'いや あれ は さ …',
        'letter': 'No, that says... So were you just white up until now?',
        'definition': 'いや あれ は さ',
        'pinyinSpace': 'いや  あれ  は  さ …'
    },
    '24': {
        'character': 'だったら 今まで は ただ の シロ ？ ただ の クマ ？',
        'pinyin': 'だったら いままで は ただ の しろ ？ ただ の くま ？',
        'letter': 'Or just a bear? ',
        'definition': 'だったら 今まで は ただ の シロ ただ の クマ',
        'pinyinSpace': 'だったら  いままで  は  ただ  の  シロ ？ ただ  の  クマ ？'
    },
    '25': {
        'character': '白くま って いう の は かき氷 の 名前 だ よ',
        'pinyin': 'しろくま って いう の は かきごおり の なまえ だ よ',
        'letter': 'No, Polar Bear is the name of a shaved ice dessert.',
        'definition': '白 くま って いう の は かき氷 の 名前 だ よ',
        'pinyinSpace': 'しろ くま  って  いう  の  は  かきごおり  の  なまえ  だ  よ'
    },
    '26': {
        'character': 'かき氷 な の ？',
        'pinyin': 'かきごおり な の ？',
        'letter': "So it's shaved ice?",
        'definition': 'かき氷 な の',
        'pinyinSpace': 'かきごおり  な  の ？'
    },
    '27': {
        'character': 'そう 練乳 かけ て フルーツ を のせ た やつ だ よ',
        'letter': 'Yes. It has condensed milk and fruits on it.',
        'definition': 'そう 練乳 か け て フルーツ を のせ た やつ だ よ',
        'pinyinSpace': 'そう  れんにゅう  か け  て  フルーツ  を  のせ  た  やつ  だ  よ'
    },
    '28': {
        'character': 'なんでも 上 に のせ た フルーツ が シロクマ の 顔 に 見え た の が 由来 とか',
        'pinyin': 'なんでも うえ に のせ た ふるーつ が しろくま の かお に みえ た の が ゆらい とか',
        'letter': "The name came from how the fruits are arranged. It looks like a polar bear's face.",
        'definition': 'なんでも 上 に のせ た フルーツ が シロクマ の 顔 に 見え た の が 由来 とか',
        'pinyinSpace': 'なんでも  うえ/かみ/じょう  に  のせ  た  フルーツ  が  シロクマ  の  かお  に  みえ  た  の  が  ゆらい  とか'
    },
    '29': {
        'character': 'ペンギン さん の 退屈 な 話 は いい から',
        'pinyin': 'ぺんぎん さん の たいくつ な はなし は いい から',
        'letter': "I don't need your boring explanation, Mr. Penguin,",
        'definition': 'ペンギン さん の 退屈 な 話 は いい から',
        'pinyinSpace': 'ペンギン  さん  の  たいくつ  な  はなし  は  いい  から'
    },
    '30': {
        'character': 'それ 食べ て み たい ！',
        'pinyin': 'それ たべ て み たい ！',
        'letter': 'I just want to eat it. How about listening to the whole explanation',
        'definition': 'それ 食べ て み たい',
        'pinyinSpace': 'それ  たべ  て  み  たい ！'
    },
    '31': {
        'character': '退屈 か どうか は 最後 まで 聞い て から 判断 し て ほしい ね',
        'pinyin': 'たいくつ か どうか は さいご まで きい て から はんだん し て ほしい ね',
        'letter': "How about listening to the whole explanation before determining that it's boring.",
        'definition': '退屈 か どうか は 最後 まで 聞い て から 判断 し て ほしい ね',
        'pinyinSpace': 'たいくつ  か  どうか  は  さいご  まで  聞い  て  から  はんだん  し  て  ほしい  ね'
    },
    '32': {
        'character': 'これ が 白くま だ よ',
        'pinyin': 'これ が しろくま だ よ',
        'letter': 'This is the Polar Bear.',
        'definition': 'これ が 白 くま だ よ',
        'pinyinSpace': 'これ  が  しろ くま  だ  よ'
    },
    '33': {
        'character': '上 から 見 て ね',
        'pinyin': 'うえ から み て ね',
        'letter': 'Look at it from above.',
        'definition': '上 から 見 て ね',
        'pinyinSpace': 'うえ/かみ/じょう  から  み  て  ね'
    },
    '34': {
        'character': '本当 だ ！',
        'pinyin': 'ほんとう だ ！',
        'letter': "It's true!",
        'definition': '本当 だ',
        'pinyinSpace': 'ほんとう  だ ！'
    },
    '35': {
        'character': 'シロクマ だ ！',
        'pinyin': 'しろくま だ ！',
        'letter': "It's a polar bear!",
        'definition': 'シロクマ だ',
        'pinyinSpace': 'シロクマ  だ ！'
    },
    '36': {
        'character': 'しろくま カフェ で 白くま を …',
        'pinyin': 'しろくま かふぇ で しろくま を …',
        'letter': "Eating a Polar Bear at Polar Bear's Café? ",
        'definition': 'しろくま カフェ で 白 くま を',
        'pinyinSpace': 'しろくま  カフェ  で  しろ くま  を …'
    },
    '37': {
        'character': 'とって も 涼しい 感じ ？',
        'pinyin': 'とって も すずしい かんじ ？',
        'letter': 'My, how cool. ',
        'definition': 'とって も 涼しい 感じ',
        'pinyinSpace': 'とって  も  すずしい  かんじ ？'
    },
    '38': {
        'character': 'ものすごく 涼しい よ',
        'pinyin': 'ものすごく すずしい よ',
        'letter': 'Yeah, really cool...',
        'definition': 'ものすごく 涼しい よ',
        'pinyinSpace': 'ものすごく  すずしい  よ'
    },
    '39': {
        'character': 'そして 現在',
        'pinyin': 'そして げんざい',
        'letter': 'And currently...',
        'definition': 'そして 現在',
        'pinyinSpace': 'そして  げんざい'
    },
    '40': {
        'character': 'ウソ だろ ！ ？ シロクマ ！',
        'pinyin': 'うそ だろ ！ ？ しろくま ！',
        'letter': "Say it ain't so, Polar Bear! ",
        'definition': 'ウソ だろ シロクマ',
        'pinyinSpace': 'ウソ  だろ ！ ？ シロクマ ！'
    },
    '41': {
        'character': 'ほら ！ ガセ だ ガセ',
        'pinyin': 'ほら ！ がせ だ がせ',
        'letter': 'See? It was a complete lie. ',
        'definition': 'ほら ガセ だ ガセ',
        'pinyinSpace': 'ほら ！ ガセ  だ  ガセ'
    },
    '42': {
        'character': 'シロクマ さん …',
        'pinyin': 'しろくま さん …',
        'letter': 'Polar Bear',
        'definition': 'シロクマ さん',
        'pinyinSpace': 'シロクマ  さん …'
    },
    '43': {
        'character': 'マジ か ！ マジ だった の か ！ ！',
        'pinyin': 'まじ か ！ まじ だった の か ！ ！',
        'letter': "It can't be! It's true?! ",
        'definition': 'マジ か マジ だった の か',
        'pinyinSpace': 'マジ  か ！ マジ  だった  の  か ！ ！'
    },
    '44': {
        'character': 'ごちそうさま でし た',
        'pinyin': 'ごちそうさま でし た',
        'letter': "Thank you for the meal! I-It can't be!",
        'definition': 'ごちそうさま で し た',
        'pinyinSpace': 'ごちそうさま  で し  た'
    },
    '45': {
        'character': 'あぁ … そんな ！',
        'pinyin': 'あぁ … そんな ！',
        'letter': "I-It can't be!",
        'definition': 'あぁ そんな',
        'pinyinSpace': 'あぁ … そんな ！'
    },
    '46': {
        'character': '「 白くま はじめ まし た 」',
        'pinyin': '「 しろくま はじめ まし た 」',
        'letter': 'Try Our New Polar Bear.',
        'definition': '白 くま はじめ まし た',
        'pinyinSpace': '「 しろ くま  はじめ  まし  た 」'
    },
    '47': {
        'character': '「 はじめ まし た 」 じゃ ねえ だろ お前 ！',
        'pinyin': '「 はじめ まし た 」 じゃ ねえ だろ おまえ ！',
        'letter': "Whaddya mean you've begun?!",
        'definition': 'はじめ まし た じゃ ねえ だろ お前',
        'pinyinSpace': '「 はじめ  まし  た 」 じゃ  ねえ  だろ  おまえ ！'
    },
    '48': {
        'character': '人生 終わっちまっ てん じゃ ねえ か よ ！',
        'pinyin': 'じんせい おわっちまっ てん じゃ ねえ か よ ！',
        'letter': 'That means your life has ended! ',
        'definition': '人生 終わ っちまっ てん じゃ ねえ か よ',
        'pinyinSpace': 'じんせい  しまわ っちまっ  てん  じゃ  ねえ  か  よ ！'
    },
    '49': {
        'character': 'やっぱり ムリ です よ ！ ハバネロ は … 辛 すぎ ます',
        'pinyin': 'やっぱり むり です よ ！ はばねろ は … から すぎ ます',
        'letter': "Habaneros are a good idea. They're entirely too hot!",
        'definition': 'やっぱり ムリ です よ ハバネロ は 辛 すぎ ます',
        'pinyinSpace': 'やっぱり  ムリ  です  よ ！ ハバネロ  は … かのと  すぎ  ます'
    },
    '50': {
        'character': 'そう ？ 結構 クセ に なる よ ハバネロ',
        'pinyin': 'そう ？ けっこう くせ に なる よ はばねろ',
        'letter': ' Habaneros get addicting after a while.',
        'definition': 'そう 結構 クセ に なる よ ハバネロ',
        'pinyinSpace': 'そう ？ けっこう  クセ  に  なる  よ  ハバネロ'
    },
    '51': {
        'character': 'シロクマ … お前 と は ガキ の 頃 から の つきあい だった よな',
        'pinyin': 'しろくま … おまえ と は がき の ころ から の つきあい だった よな',
        'letter': " We've been hanging out since we were kids.",
        'definition': 'シロクマ お前 と は ガキ の 頃 から の つきあい だった よな',
        'pinyinSpace': 'シロクマ … おまえ  と  は  ガキ  の  ころ  から  の  つきあい  だった  よな'
    },
    '52': {
        'character': 'ハ … ハチミツ 食べ たい ！',
        'pinyin': 'は … はちみつ たべ たい ！',
        'letter': ' I wanna eat honey!',
        'definition': 'ハ ハチミツ 食べ たい',
        'pinyinSpace': 'ハ … ハチミツ  たべ  たい ！'
    },
    '53': {
        'character': '大丈夫 か よ ？ シロクマ ！',
        'pinyin': 'だいじょうぶ か よ ？ しろくま ！',
        'letter': "You sure that's a good idea, Polar Bear?",
        'definition': '大丈夫 か よ シロクマ',
        'pinyinSpace': 'だいじょうぶ  か  よ ？ シロクマ ！'
    },
    '54': {
        'character': '頑張れ ！',
        'pinyin': 'がんばれ ！',
        'letter': 'You can do it! ',
        'definition': '頑張れ',
        'pinyinSpace': 'がんばれ ！'
    },
    '55': {
        'character': 'ワカサギ 食べ たい ！',
        'pinyin': 'わかさぎ たべ たい ！',
        'letter': 'I wanna eat some smelts!',
        'definition': 'ワカサギ 食べ たい',
        'pinyinSpace': 'ワカサギ  たべ  たい ！'
    },
    '56': {
        'character': '大丈夫 か よ ？ シロクマ …',
        'pinyin': 'だいじょうぶ か よ ？ しろくま …',
        'letter': "You sure that's a good idea, Polar Bear?",
        'definition': '大丈夫 か よ シロクマ',
        'pinyinSpace': 'だいじょうぶ  か  よ ？ シロクマ …'
    },
    '57': {
        'character': 'キノコ 食べ たい ！',
        'pinyin': 'きのこ たべ たい ！',
        'letter': 'I wanna eat mushrooms!',
        'definition': 'キノコ 食べ たい',
        'pinyinSpace': 'キノコ  たべ  たい ！'
    },
    '58': {
        'character': '大丈夫 か よ ？ シロクマ ！',
        'pinyin': 'だいじょうぶ か よ ？ しろくま ！',
        'letter': "You sure that's a good idea, Polar Bear?! ",
        'definition': '大丈夫 か よ シロクマ',
        'pinyinSpace': 'だいじょうぶ  か  よ ？ シロクマ ！'
    },
    '59': {
        'character': 'なんか ろくな 思い出 が ねえ な …',
        'pinyin': 'なんか ろくな おもいで が ねえ な …',
        'letter': "I don't...Hey, wait! seem to have too many good memories.",
        'definition': 'なんか ろくな 思い出 が ねえ な',
        'pinyinSpace': 'なんか  ろくな  おもいで  が  ねえ  な …'
    },
    '60': {
        'character': 'とはいえ 懐かしい 思い出 だ ぜ',
        'pinyin': 'とはいえ なつかしい おもいで だ ぜ',
        'letter': "But they're nostalgic.",
        'definition': 'とはいえ 懐かしい 思い出 だ ぜ',
        'pinyinSpace': 'とはいえ  なつかしい  おもいで  だ  ぜ'
    },
    '61': {
        'character': 'あぁ … ダメ だ ！ こうして いる と お前 の こと ばかり 思い出し ちまう',
        'pinyin': 'あぁ … だめ だ ！ こうして いる と おまえ の こと ばかり おもいだし ちまう',
        'letter': "This ain't good. I keep thinking about you. ",
        'definition': 'あぁ ダメ だ こうして いる と お前 の こと ばかり 思い出し ちまう',
        'pinyinSpace': 'あぁ … ダメ  だ ！ こうして  いる  と  おまえ  の  こと  ばかり  おもいだし  ちまう'
    },
    '62': {
        'character': 'シロクマ ！',
        'pinyin': 'しろくま ！',
        'letter': ' Polar Bear!',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '63': {
        'character': 'いらっしゃい ませ',
        'pinyin': 'いらっしゃい ませ',
        'letter': 'Welcome. ',
        'definition': 'いらっしゃい ませ',
        'pinyinSpace': 'いらっしゃい  ませ'
    },
    '64': {
        'character': 'シロクマ ！',
        'pinyin': 'しろくま ！',
        'letter': 'Polar Bear! ',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '65': {
        'character': 'ビール 買う ？',
        'pinyin': 'びーる かう ？',
        'letter': 'Wanna buy a beer (bi-ru)?',
        'definition': 'ビール 買う',
        'pinyinSpace': 'ビール  かう ？'
    },
    '66': {
        'character': '持って き た よ ほい',
        'pinyin': 'もって き た よ ほい',
        'letter': 'See? ',
        'definition': '持って き た よ ほい',
        'pinyinSpace': 'もって  き  た  よ  ほい'
    },
    '67': {
        'character': 'それ は リール',
        'pinyin': 'それ は りーる',
        'letter': 'That would be a reel (ri-ru). ',
        'definition': 'それ は リール',
        'pinyinSpace': 'それ  は  リール'
    },
    '68': {
        'character': 'ダジャレ ！',
        'pinyin': 'だじゃれ ！',
        'letter': 'Puns?! ',
        'definition': 'ダジャレ',
        'pinyinSpace': 'ダジャレ ！'
    },
    '69': {
        'character': 'シロクマ ！',
        'pinyin': 'しろくま ！',
        'letter': 'P-P-Polar Bear! ',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ ！'
    },
    '70': {
        'character': '孤独 よ … 俺 の 悲しみ を 癒やし て くれ',
        'pinyin': 'こどく よ … おれ の かなしみ を いやし て くれ',
        'letter': 'Oh, solitude... help to sooth my sadness!',
        'definition': '孤独 よ 俺 の 悲しみ を 癒やし て くれ',
        'pinyinSpace': 'こどく  よ … おれ  の  かなしみ  を  いやし  て  くれ'
    },
    '71': {
        'character': 'クマ だ ！ かわいい ！',
        'pinyin': 'くま だ ！ かわいい ！',
        'letter': "It's a bear! How cute! What are you doing?",
        'definition': 'クマ だ かわいい',
        'pinyinSpace': 'クマ  だ ！ かわいい ！'
    },
    '72': {
        'character': '何 し てる の ～ ？',
        'pinyin': 'なに し てる の ～ ？',
        'letter': 'What are you doing? Look over here!',
        'definition': '何 し てる の',
        'pinyinSpace': 'なに/なん  し  てる  の ～ ？'
    },
    '73': {
        'character': 'こっち 向い て ～',
        'pinyin': 'こっち むい て ～',
        'letter': 'Look over here! ',
        'definition': 'こっち 向い て',
        'pinyinSpace': 'こっち  むかい  て ～'
    },
    '74': {
        'character': 'ねぇ グリズリー さん の お店 ずっと お休み し てる って ホント ？',
        'pinyin': 'ねぇ ぐりずりー さん の おみせ ずっと おやすみ し てる って ほんと ？',
        'letter': "Hey, is it true that Mr. Grizzly's place has been closed for a while?",
        'definition': 'ねぇ グリズリー さん の お店 ずっと お休み し てる って ホント',
        'pinyinSpace': 'ねぇ  グリズリー  さん  の  おみせ  ずっと  おやすみ  し  てる  って  ホント ？'
    },
    '75': {
        'character': '旅行 に でも 行ってる の かも',
        'pinyin': 'りょこう に でも いってる の かも',
        'letter': 'He could be on a trip somewhere. ',
        'definition': '旅行 に でも 行ってる の かも',
        'pinyinSpace': 'りょこう  に  でも  おこなってる/いってる  の  かも'
    },
    '76': {
        'character': '旅 かぁ … やっぱり ワイルド な 旅 な ん だろ う ね',
        'pinyin': 'たび かぁ … やっぱり わいるど な たび な ん だろ う ね',
        'letter': "I bet it's a really wild trip. ",
        'definition': '旅 かぁ やっぱり ワイルド な 旅 な ん だろ う ね',
        'pinyinSpace': 'たび  かぁ … やっぱり  ワイルド  な  たび  な  ん  だろ  う  ね'
    },
    '77': {
        'character': 'おそらく',
        'pinyin': 'おそらく',
        'letter': 'Probably.',
        'definition': 'おそらく',
        'pinyinSpace': 'おそらく'
    },
    '78': {
        'character': 'あて も なく 北 へ と 向かう グリズリー',
        'pinyin': 'あて も なく きた へ と むかう ぐりずりー',
        'letter': ' Grizzly heads aimlessly to the north.',
        'definition': 'あて も なく 北 へ と 向かう グリズリー',
        'pinyinSpace': 'あて  も  なく  きた  へ  と  むかう  グリズリー'
    },
    '79': {
        'character': 'ふと 立ち寄った 居酒屋 で …',
        'pinyin': 'ふと たちよった いざかや で …',
        'letter': 'He stops by a small bar.',
        'definition': 'ふと 立ち寄った 居酒屋 で',
        'pinyinSpace': 'ふと  たちよった  いざかや  で …'
    },
    '80': {
        'character': 'どうぞ',
        'pinyin': 'どうぞ',
        'letter': 'There you go.',
        'definition': 'どうぞ',
        'pinyinSpace': 'どうぞ'
    },
    '81': {
        'character': '頼ん で ねえ ぜ ？',
        'pinyin': 'たのん で ねえ ぜ ？',
        'letter': "I didn't order that. It's on the house.",
        'definition': '頼 ん で ねえ ぜ',
        'pinyinSpace': '頼 ん  で  ねえ  ぜ ？'
    },
    '82': {
        'character': 'サービス です よ',
        'pinyin': 'さーびす です よ',
        'letter': "It's on the house. ",
        'definition': 'サービス です よ',
        'pinyinSpace': 'サービス  です  よ'
    },
    '83': {
        'character': 'お客さん 旅 の 方 でしょ ？',
        'pinyin': 'おきゃくさん たび の ほう でしょ ？',
        'letter': " You're traveling, aren't you?",
        'definition': 'お客さん 旅 の 方 でしょ',
        'pinyinSpace': 'おきゃくさん  たび  の  ほう/かた  でしょ ？'
    },
    '84': {
        'character': 'わかる かい ？',
        'pinyin': 'わかる かい ？',
        'letter': 'Can you tell?',
        'definition': 'わかる かい',
        'pinyinSpace': 'わかる  かい ？'
    },
    '85': {
        'character': '都会 の ニオイ が し ます よ',
        'pinyin': 'とかい の におい が し ます よ',
        'letter': 'You smell of the city. ',
        'definition': '都会 の ニオイ が し ます よ',
        'pinyinSpace': 'とかい  の  ニオイ  が  し  ます  よ'
    },
    '86': {
        'character': '… と そこ へ 現れる 人相 の 悪い 男',
        'pinyin': '… と そこ へ あらわれる にんそう の わるい おとこ',
        'letter': 'And then a bad-looking man appears. ',
        'definition': 'と そこ へ 現れる 人相 の 悪い 男',
        'pinyinSpace': '… と  そこ  へ  あらわれる  にんそう  の  わるい  おとこ'
    },
    '87': {
        'character': 'よう 女将 ！ 今日 も 来 て やった ぜ',
        'pinyin': 'よう おかみ ！ きょう も き て やった ぜ',
        'letter': 'Hey there, Foxy, I decided to stop by again. ',
        'definition': 'よう 女将 今日 も 来 て やった ぜ',
        'pinyinSpace': 'よう  おかみ ！ きょう  も  らい/き  て  やった  ぜ'
    },
    '88': {
        'character': '帰っと くれ ！ アンタ が 来る おかげ で 他の お客さん が 寄りつきゃ し ない よ',
        'pinyin': 'かえっと くれ ！ あんた が くる おかげ で ほかの おきゃくさん が よりつきゃ し ない よ',
        'letter': "other customers won't come here anymore! ",
        'definition': '帰っと くれ アンタ が 来る おかげ で 他 の お客さん が 寄りつきゃ し ない よ',
        'pinyinSpace': '帰っと  くれ ！ アンタ  が  くる  おかげ  で  た/ほか の  おきゃくさん  が  よりつきゃ  し  ない  よ'
    },
    '89': {
        'character': '生意気 な 口 を きく と タダ じゃ …',
        'pinyin': 'なまいき な くち を きく と ただ じゃ …',
        'letter': ' Better watch your tone or else...',
        'definition': '生意気 な 口 を きく と タダ じゃ',
        'pinyinSpace': 'なまいき  な  くち  を  きく  と  タダ  じゃ …'
    },
    '90': {
        'character': '出 て いき な 文句 が ある なら 俺 が 相手 に なる ぜ',
        'pinyin': 'で て いき な もんく が ある なら おれ が あいて に なる ぜ',
        'letter': "Leave. If you have a problem, you'll have to deal with me.",
        'definition': '出 て いき な 文句 が ある なら 俺 が 相手 に なる ぜ',
        'pinyinSpace': 'で  て  いき  な  もんく  が  ある  なら  おれ  が  あいて  に  なる  ぜ'
    },
    '91': {
        'character': 'すみません ！',
        'pinyin': 'すみません ！',
        'letter': 'Sorry!',
        'definition': 'すみません',
        'pinyinSpace': 'すみません ！'
    },
    '92': {
        'character': 'ありがとう ござい ます',
        'pinyin': 'ありがとう ござい ます',
        'letter': 'Thank you so much.',
        'definition': 'ありがとう ご ざい ます',
        'pinyinSpace': 'ありがとう  ご ざい  ます'
    },
    '93': {
        'character': 'サケ の お礼 さ',
        'pinyin': 'さけ の おれい さ',
        'letter': ' Thanks for the salmon.',
        'definition': 'サケ の お礼 さ',
        'pinyinSpace': 'サケ  の  おれい  さ'
    },
    '94': {
        'character': 'それ が きっかけ で グリズリー は 居酒屋 の 用心棒 に なった',
        'pinyin': 'それ が きっかけ で ぐりずりー は いざかや の ようじんぼう に なった',
        'letter': "And so, Grizzly became the bar's bouncer.",
        'definition': 'それ が きっかけ で グリズリー は 居酒屋 の 用心棒 に なった',
        'pinyinSpace': 'それ  が  きっかけ  で  グリズリー  は  いざかや  の  ようじんぼう  に  なった'
    },
    '95': {
        'character': '女将 の 幼い 子供たち も 懐き …',
        'pinyin': 'おかみ の おさない こどもたち も なつき …',
        'letter': "The Fox's young children also took a liking to Grizzly.",
        'definition': '女将 の 幼い 子供たち も 懐き',
        'pinyinSpace': 'おかみ  の  おさない  こどもたち  も  なつき/いだき …'
    },
    '96': {
        'character': 'グリズリー おじちゃん',
        'pinyin': 'ぐりずりー おじちゃん',
        'letter': 'Uncle Grizzly! ',
        'definition': 'グリズリー おじちゃん',
        'pinyinSpace': 'グリズリー  おじちゃん'
    },
    '97': {
        'character': '近所 の お年寄り たち と も 馴染み …',
        'pinyin': 'きんじょ の おとしより たち と も なじみ …',
        'letter': 'He also got along with the elderly in the area. ',
        'definition': '近所 の お 年寄り たち と も 馴染み',
        'pinyinSpace': 'きんじょ  の  お としより  たち  と  も  なじみ …'
    },
    '98': {
        'character': '悪い ね',
        'pinyin': 'わるい ね',
        'letter': 'Sorry for the trouble.',
        'definition': '悪い ね',
        'pinyinSpace': 'わるい  ね'
    },
    '99': {
        'character': '気 に すん なって',
        'pinyin': 'き に すん なって',
        'letter': 'Not a problem! ',
        'definition': '気 に すん なって',
        'pinyinSpace': 'き  に  すん  なって'
    },
    '100': {
        'character': 'いつしか グリズリー は なくてはならない 存在 に なって い た',
        'pinyin': 'いつしか ぐりずりー は なくてはならない そんざい に なって い た',
        'letter': ' Before they knew it, life was unimaginable without Grizzly.',
        'definition': 'いつしか グリズリー は なくてはならない 存在 に なって い た',
        'pinyinSpace': 'いつしか  グリズリー  は  なくてはならない  そんざい  に  なって  い  た'
    },
    '101': {
        'character': 'パンダ くん そんな リアリティー の ない 話 を 本気 に し ちゃ ダメ だ よ',
        'pinyin': 'ぱんだ くん そんな りありてぃー の ない はなし を ほんき に し ちゃ だめ だ よ',
        'letter': "Panda, you can't take stories with no sense of reality seriously.",
        'definition': 'パンダ くん そんな リアリティー の ない 話 を 本気 に し ちゃ ダメ だ よ',
        'pinyinSpace': 'パンダ  くん  そんな  リアリティー  の  ない  はなし  を  ほんき  に  し  ちゃ  ダメ  だ  よ'
    },
    '102': {
        'character': 'まさか こんな 展開 に なる と はな',
        'pinyin': 'まさか こんな てんかい に なる と はな',
        'letter': 'Who knew things would come to this.',
        'definition': 'まさか こんな 展開 に なる と は な',
        'pinyinSpace': 'まさか  こんな  てんかい  に  なる  と  は な'
    },
    '103': {
        'character': 'グリ の 兄貴 も 一緒 に どう っす か ？',
        'pinyin': 'ぐり の あにき も いっしょ に どう っす か ？',
        'letter': 'How bout a cup, Mr. Griz?',
        'definition': 'グリ の 兄貴 も 一緒 に どう っす か',
        'pinyinSpace': 'グリ  の  あにき  も  いっしょ  に  どう  っす  か ？'
    },
    '104': {
        'character': 'シャケ を サカナ に お シャケ を 一杯 … なん つって ！',
        'pinyin': 'しゃけ を さかな に お しゃけ を いっぱい … なん つって ！',
        'letter': "How 'bout some salmon (shake) to go with that sake? ",
        'definition': 'シャケ を サカナ に お シャケ を 一杯 な ん つって',
        'pinyinSpace': 'シャケ  を  サカナ  に  お  シャケ  を  いっぱい … な ん  つって ！'
    },
    '105': {
        'character': 'シロクマ …',
        'pinyin': 'しろくま …',
        'letter': 'Polar... Bear... I told you, no puns!',
        'definition': 'シロクマ',
        'pinyinSpace': 'シロクマ …'
    },
    '106': {
        'character': 'ちょっと ！ ダジャレ は ダメ だって 言った でしょ',
        'pinyin': 'ちょっと ！ だじゃれ は だめ だって いった でしょ',
        'letter': 'I told you, no puns! Sorry...',
        'definition': 'ちょっと ダジャレ は ダメ だって 言った でしょ',
        'pinyinSpace': 'ちょっと ！ ダジャレ  は  ダメ  だって  いった  でしょ'
    },
    '107': {
        'character': 'すみません …',
        'pinyin': 'すみません …',
        'letter': 'Sorry... ',
        'definition': 'すみません',
        'pinyinSpace': 'すみません …'
    },
    '108': {
        'character': 'しょせん 俺たち は 弱肉強食 の 世界 を 生きる 者',
        'pinyin': 'しょせん おれたち は じゃくにくきょうしょく の せかい を いきる もの',
        'letter': ' In the end, we live in a dog-eat-dog world.',
        'definition': 'しょせん 俺たち は 弱肉強食 の 世界 を 生きる 者',
        'pinyinSpace': 'しょせん  おれたち  は  じゃくにくきょうしょく  の  せかい  を  いきる  もの'
    },
    '109': {
        'character': 'もう 俺 は 泣か ない ぜ ！',
        'pinyin': 'もう おれ は なか ない ぜ ！',
        'letter': "I'm not gonna cry anymore!",
        'definition': 'もう 俺 は 泣か ない ぜ',
        'pinyinSpace': 'もう  おれ  は  なか  ない  ぜ ！'
    },
    '110': {
        'character': 'また いつ でも おいで おじちゃん バイ バーイ ！',
        'pinyin': 'また いつ でも おいで おじちゃん ばい ばーい ！',
        'letter': 'Take of yourself!Bye-bye! Take of yourself!',
        'definition': 'また いつ でも おいで おじちゃん バイ バー イ',
        'pinyinSpace': 'また  いつ  でも  おいで  おじちゃん  バイ  バー イ ！'
    },
    '111': {
        'character': 'あばよ シロクマ ！',
        'pinyin': 'あばよ しろくま ！',
        'letter': 'So long, Polar Bear!',
        'definition': 'あばよ シロクマ',
        'pinyinSpace': 'あばよ  シロクマ ！'
    },
    '112': {
        'character': 'この 店 は 俺 が 引き継ぐ ！',
        'pinyin': 'この みせ は おれ が ひきつぐ ！',
        'letter': "I'm going to take over this café!",
        'definition': 'この 店 は 俺 が 引き継ぐ',
        'pinyinSpace': 'この  みせ/てん  は  おれ  が  ひきつぐ ！'
    },
    '113': {
        'character': 'どう し た ん です か ？ 急に',
        'pinyin': 'どう し た ん です か ？ きゅうに',
        'letter': 'What brought this on all of a sudden?',
        'definition': 'どう し た ん です か 急に',
        'pinyinSpace': 'どう  し  た  ん  です  か ？ きゅうに'
    },
    '114': {
        'character': 'アイツ の 代わり が 務まる の は 親友 の 俺 しか い ねえ だろ',
        'pinyin': 'あいつ の かわり が つとまる の は しんゆう の おれ しか い ねえ だろ',
        'letter': 'The only one that can take his place is me, his best friend.',
        'definition': 'アイツ の 代わり が 務まる の は 親友 の 俺 しか い ねえ だろ',
        'pinyinSpace': 'アイツ  の  かわり  が  つとまる  の  は  しんゆう  の  おれ  しか  い  ねえ  だろ'
    },
    '115': {
        'character': '俺 が シロクマ 始める ！',
        'pinyin': 'おれ が しろくま はじめる ！',
        'letter': "I'll be the polar bear! ",
        'definition': '俺 が シロクマ 始める',
        'pinyinSpace': 'おれ  が  シロクマ  はじめる ！'
    },
    '116': {
        'character': 'しろくま カフェ の 店長 やる の ？',
        'pinyin': 'しろくま かふぇ の てんちょう やる の ？',
        'letter': "So you're gonna be the owner of Polar Bear Café? ",
        'definition': 'しろくま カフェ の 店長 やる の',
        'pinyinSpace': 'しろくま  カフェ  の  てんちょう  やる  の ？'
    },
    '117': {
        'character': '今日 から マスター と 呼び な',
        'pinyin': 'きょう から ますたー と よび な',
        'letter': 'Starting today, call me the manager. ',
        'definition': '今日 から マスター と 呼び な',
        'pinyinSpace': 'きょう  から  マスター  と  よび  な'
    },
    '118': {
        'character': 'グリズリー バー は ？',
        'pinyin': 'ぐりずりー ばー は ？',
        'letter': "What about Grizzly's Bar? I'll do it!",
        'definition': 'グリズリー バー は',
        'pinyinSpace': 'グリズリー  バー  は ？'
    },
    '119': {
        'character': 'やる ！ 昼 も 夜 も 働く ！',
        'pinyin': 'やる ！ ひる も よる も はたらく ！',
        'letter': "I'll do it! I'll work day and night!",
        'definition': 'やる 昼 も 夜 も 働く',
        'pinyinSpace': 'やる ！ ひる  も  よる  も  はたらく ！'
    },
    '120': {
        'character': 'いつ 寝る ん です か ？',
        'pinyin': 'いつ ねる ん です か ？',
        'letter': 'When will you sleep? ',
        'definition': 'いつ 寝る ん です か',
        'pinyinSpace': 'いつ  ねる  ん  です  か ？'
    },
    '121': {
        'character': '合間 に 寝る',
        'pinyin': 'あいま に ねる',
        'letter': 'In between. ',
        'definition': '合間 に 寝る',
        'pinyinSpace': 'あいま  に  ねる'
    },
    '122': {
        'character': 'ダジャレ だって やる ぜ ！ 何 しろ 俺 が この 店 の …',
        'pinyin': 'だじゃれ だって やる ぜ ！ なに しろ おれ が この みせ の …',
        'letter': "I'll even make puns! Since that's what makes this place...",
        'definition': 'ダジャレ だって やる ぜ 何 しろ 俺 が この 店 の',
        'pinyinSpace': 'ダジャレ  だって  やる  ぜ ！ なに/なん  しろ  おれ  が  この  みせ/てん  の …'
    },
    '123': {
        'character': 'シスター だろ ！',
        'pinyin': 'しすたー だろ ！',
        'letter': 'That would be sister (sisuta)!',
        'definition': 'シスター だろ',
        'pinyinSpace': 'シスター  だろ ！'
    },
    '124': {
        'character': 'それじゃあ …',
        'pinyin': 'それじゃあ …',
        'letter': 'Then... ',
        'definition': 'それ じゃあ',
        'pinyinSpace': 'それ じゃあ …'
    },
    '125': {
        'character': 'イースター だろ ！',
        'pinyin': 'いーすたー だろ ！',
        'letter': 'That would be Easter (I-suta)! ',
        'definition': 'イースター だろ',
        'pinyinSpace': 'イースター  だろ ！'
    },
    '126': {
        'character': 'それじゃあ これ で どう だ ？',
        'pinyin': 'それじゃあ これ で どう だ ？',
        'letter': 'Then how about this?! ',
        'definition': 'それ じゃあ これ で どう だ',
        'pinyinSpace': 'それ じゃあ  これ  で  どう  だ ？'
    },
    '127': {
        'character': 'ポスター だろ ！',
        'pinyin': 'ぽすたー だろ ！',
        'letter': 'That would be a poster (posuta)! ',
        'definition': 'ポスター だろ',
        'pinyinSpace': 'ポスター  だろ ！'
    },
    '128': {
        'character': 'これ は ダスター',
        'pinyin': 'これ は だすたー',
        'letter': ' That would be a duster!',
        'definition': 'これ は ダスター',
        'pinyinSpace': 'これ  は  ダスター'
    },
    '129': {
        'character': 'ダスター で 顔 拭く ん じゃ ねえ ！',
        'pinyin': 'だすたー で かお ふく ん じゃ ねえ ！',
        'letter': "Don't wipe my face with a duster! ",
        'definition': 'ダスター で 顔 拭く ん じゃ ねえ',
        'pinyinSpace': 'ダスター  で  かお  ふく  ん  じゃ  ねえ ！'
    },
    '130': {
        'character': 'テメエ なんで 生き てる ん だ よ ！',
        'pinyin': 'てめえ なんで いき てる ん だ よ ！',
        'letter': 'Why the hell are you alive?! ',
        'definition': 'テメエ なんで 生き てる ん だ よ',
        'pinyinSpace': 'テメエ  なんで  いき  てる  ん  だ  よ ！'
    },
    '131': {
        'character': 'お母さん が 産ん だ から',
        'pinyin': 'おかあさん が うん だ から',
        'letter': 'Because my mom gave birth to me.',
        'definition': 'お母さん が 産 ん だ から',
        'pinyinSpace': 'おかあさん  が  うぶ/さん ん  だ  から'
    },
    '132': {
        'character': 'そう じゃ ねえ ！',
        'pinyin': 'そう じゃ ねえ ！',
        'letter': "That's not what I meant!",
        'definition': 'そう じゃ ねえ',
        'pinyinSpace': 'そう  じゃ  ねえ ！'
    },
    '133': {
        'character': 'お前 カワウソ に 食われ た ん じゃ ！ ？',
        'pinyin': 'おまえ かわうそ に くわれ た ん じゃ ！ ？',
        'letter': 'I thought the otters ate you!',
        'definition': 'お前 カワウソ に 食われ た ん じゃ',
        'pinyinSpace': 'おまえ  カワウソ  に  くわれ  た  ん  じゃ ！ ？'
    },
    '134': {
        'character': 'ち は ～ 今日 も 白くま 食べ に き た で やん す',
        'pinyin': 'ち は ～ きょう も しろくま たべ に き た で やん す',
        'letter': 'Hey! Came by to eat the Polar Bear again.',
        'definition': 'ち は 今日 も 白 くま 食べ に き た で やん す',
        'pinyinSpace': 'ち  は ～ きょう  も  しろ くま  たべ  に  き  た  で  やん  す'
    },
    '135': {
        'character': 'どういう こと だ ！',
        'pinyin': 'どういう こと だ ！',
        'letter': 'What the hell is going on?! ',
        'definition': 'どういう こと だ',
        'pinyinSpace': 'どういう  こと  だ ！'
    },
    '136': {
        'character': 'まぎらわしい 名前 つけ てん じゃ ねえ',
        'pinyin': 'まぎらわしい なまえ つけ てん じゃ ねえ',
        'letter': "Y-You shouldn't have given it such a misleading name! ",
        'definition': 'まぎらわしい 名前 つけ てん じゃ ねえ',
        'pinyinSpace': 'まぎらわしい  なまえ  つけ  てん  じゃ  ねえ'
    },
    '137': {
        'character': 'ったく … 驚かせ や がって',
        'pinyin': 'ったく … おどろかせ や がって',
        'letter': 'Damn it, you scared me. ',
        'definition': 'ったく 驚かせ や が って',
        'pinyinSpace': 'ったく … おどろかせ  や  が って'
    },
    '138': {
        'character': '悲しみ に くれ た 俺 の 時間 は いったい …',
        'pinyin': 'かなしみ に くれ た おれ の じかん は いったい …',
        'letter': 'How are you going to repay the time I spent in sadne— ',
        'definition': '悲しみ に くれ た 俺 の 時間 は いったい',
        'pinyinSpace': 'かなしみ  に  くれ  た  おれ  の  じかん  は  いったい …'
    },
    '139': {
        'character': '思い出す と 泣い ちゃう ほど ショック だった の ？',
        'pinyin': 'おもいだす と ない ちゃう ほど しょっく だった の ？',
        'letter': 'Was it such a shock that it brings you to tears just thinking about it?',
        'definition': '思い出す と 泣い ちゃう ほど ショック だった の',
        'pinyinSpace': 'おもいだす  と  泣い  ちゃう  ほど  ショック  だった  の ？'
    },
    '140': {
        'character': 'キーン ！ って なって ん だ よ ！',
        'pinyin': 'きーん ！ って なって ん だ よ ！',
        'letter': " I've got brain freeze!",
        'definition': 'キー ン って なって ん だ よ',
        'pinyinSpace': 'キー ン ！ って  なって  ん  だ  よ ！'
    },
    '141': {
        'character': '見知らぬ お店',
        'pinyin': 'みしらぬ おみせ',
        'letter': 'A Strange Restaurant. ',
        'definition': '見知らぬ お店',
        'pinyinSpace': 'みしらぬ  おみせ'
    },
    '142': {
        'character': '私 が 仕事 で その 街 を 訪れ た の は',
        'pinyin': 'わたし が しごと で その まち を おとずれ た の は',
        'letter': 'It was on a hot summer day,',
        'definition': '私 が 仕事 で その 街 を 訪れ た の は',
        'pinyinSpace': 'わたし  が  しごと  で  その  がい/まち  を  おとずれ  た  の  は'
    },
    '143': {
        'character': 'とある 暑い 夏 の 日 の こと だった',
        'pinyin': 'とある あつい なつ の ひ の こと だった',
        'letter': 'when my work first brought me to that town. ',
        'definition': 'と ある 暑い 夏 の 日 の こと だった',
        'pinyinSpace': 'と ある  あつい  なつ  の  ひ/にち  の  こと  だった'
    },
    '144': {
        'character': 'まとわりつく 熱気 も さることながら',
        'pinyin': 'まとわりつく ねっき も さることながら',
        'letter': 'The thing that irritated me most',
        'definition': 'まとわりつく 熱気 も さることながら',
        'pinyinSpace': 'まとわりつく  ねっき  も  さることながら'
    },
    '145': {
        'character': '何より も 私 の 心 を ささくれ させ た の は',
        'pinyin': 'なにより も わたし の こころ を ささくれ させ た の は',
        'letter': 'in the undying heat and humidity ',
        'definition': '何より も 私 の 心 を ささくれ させ た の は',
        'pinyinSpace': 'なにより  も  わたし  の  こころ/しん  を  ささくれ  させ  た  の  は'
    },
    '146': {
        'character': '昼 に 入った 駅前 の 中華 屋 だ',
        'pinyin': 'ひる に はいった えきまえ の ちゅうか や だ',
        'letter': 'was the Chinese restaurant by the station I went to for lunch. ',
        'definition': '昼 に 入った 駅前 の 中華 屋 だ',
        'pinyinSpace': 'ひる  に  はいった/いった  えきまえ  の  ちゅうか  や/おく  だ'
    },
    '147': {
        'character': '蒸し暑い 店内',
        'pinyin': 'むしあつい てんない',
        'letter': 'The humid interior. ',
        'definition': '蒸し暑い 店内',
        'pinyinSpace': 'むしあつい  てんない'
    },
    '148': {
        'character': '生ぬるい 冷やし 中華 の 麺 は',
        'pinyin': 'なまぬるい ひやし ちゅうか の めん は',
        'letter': "The cold noodles weren't cold, ",
        'definition': '生ぬるい 冷やし 中華 の 麺 は',
        'pinyinSpace': 'なまぬるい  ひやし  ちゅうか  の  めん  は'
    },
    '149': {
        'character': 'みごと に のび きって い た',
        'pinyin': 'みごと に のび きって い た',
        'letter': 'and had been sitting too long. ',
        'definition': 'みごと に のび きって い た',
        'pinyinSpace': 'みごと  に  のび  きって  い  た'
    },
    '150': {
        'character': 'しかし 頼ん だ もの を 残す の は 私 の プライド が 許さ ない',
        'pinyin': 'しかし たのん だ もの を のこす の は わたし の ぷらいど が ゆるさ ない',
        'letter': 'not to finish something I had ordered. ',
        'definition': 'しかし 頼 ん だ もの を 残す の は 私 の プライド が 許さ ない',
        'pinyinSpace': 'しかし  頼 ん  だ  もの  を  のこす  の  は  わたし  の  プライド  が  ゆるさ  ない'
    },
    '151': {
        'character': 'が 胃 は まだ もたれ て いる',
        'pinyin': 'が い は まだ もたれ て いる',
        'letter': 'My stomach was still heavy. ',
        'definition': 'が 胃 は まだ もたれ て いる',
        'pinyinSpace': 'が  い  は  まだ  もたれ  て  いる'
    },
    '152': {
        'character': 'リフレッシュ せ ね ば',
        'pinyin': 'りふれっしゅ せ ね ば',
        'letter': 'I must refresh myself.',
        'definition': 'リフレッシュ せ ね ば',
        'pinyinSpace': 'リフレッシュ  せ  ね  ば'
    },
    '153': {
        'character': '見知らぬ 街 で 見知らぬ 店 に 入る の は',
        'pinyin': 'みしらぬ まち で みしらぬ みせ に はいる の は',
        'letter': 'There are a lot of risks in going into an unknown café',
        'definition': '見知らぬ 街 で 見知らぬ 店 に 入る の は',
        'pinyinSpace': 'みしらぬ  がい/まち  で  みしらぬ  みせ/てん  に  はいる/いる  の  は'
    },
    '154': {
        'character': '当たり ハズレ が 大きい',
        'pinyin': 'あたり はずれ が おおきい',
        'letter': 'in an unknown town. ',
        'definition': '当たり ハズレ が 大きい',
        'pinyinSpace': 'あたり  ハズレ  が  おおきい'
    },
    '155': {
        'character': '生き返る',
        'pinyin': 'いきかえる',
        'letter': 'I feel alive again!',
        'definition': '生き返る',
        'pinyinSpace': 'いきかえる'
    },
    '156': {
        'character': 'いらっしゃい ませ お好き な 席 へ どうぞ',
        'pinyin': 'いらっしゃい ませ おすき な せき へ どうぞ',
        'letter': "Please sit anywhere you'd like. ",
        'definition': 'いらっしゃい ませ お 好き な 席 へ どうぞ',
        'pinyinSpace': 'いらっしゃい  ませ  お すき  な  せき  へ  どうぞ'
    },
    '157': {
        'character': 'あれ は …',
        'pinyin': 'あれ は …',
        'letter': "That's... ",
        'definition': 'あれ は',
        'pinyinSpace': 'あれ  は …'
    },
    '158': {
        'character': 'シロクマ さん です',
        'pinyin': 'しろくま さん です',
        'letter': "Oh, that's Mr. Polar Bear. Yes, I can see that.",
        'definition': 'シロクマ さん です',
        'pinyinSpace': 'シロクマ  さん  です'
    },
    '159': {
        'character': 'そ それ は わかり ます',
        'pinyin': 'そ それ は わかり ます',
        'letter': 'Yes, I can see that. ',
        'definition': 'そ それ は わかり ます',
        'pinyinSpace': 'そ  それ  は  わかり  ます'
    },
    '160': {
        'character': '店長 な ん です',
        'pinyin': 'てんちょう な ん です',
        'letter': "He's the owner.",
        'definition': '店長 な ん です',
        'pinyinSpace': 'てんちょう  な  ん  です'
    },
    '161': {
        'character': 'シロクマ が 店長 な ん です か',
        'pinyin': 'しろくま が てんちょう な ん です か',
        'letter': 'A polar bear is the owner?',
        'definition': 'シロクマ が 店長 な ん です か',
        'pinyinSpace': 'シロクマ  が  てんちょう  な  ん  です  か'
    },
    '162': {
        'character': 'ええ しろくま カフェ です から',
        'pinyin': 'ええ しろくま かふぇ です から',
        'letter': "Indeed. It is Polar Bear's Café, after all. ",
        'definition': 'ええ しろくま カフェ です から',
        'pinyinSpace': 'ええ  しろくま  カフェ  です  から'
    },
    '163': {
        'character': 'そ そうです か',
        'pinyin': 'そ そうです か',
        'letter': 'I-I see... ',
        'definition': 'そ そう です か',
        'pinyinSpace': 'そ  そう です  か'
    },
    '164': {
        'character': 'いらっしゃい ませ',
        'pinyin': 'いらっしゃい ませ',
        'letter': 'Welcome.',
        'definition': 'いらっしゃい ませ',
        'pinyinSpace': 'いらっしゃい  ませ'
    },
    '165': {
        'character': 'お決まり の 頃 おうかがい し ます',
        'pinyin': 'おきまり の ころ おうかがい し ます',
        'letter': "I'll be happy to take your order whenever you're ready. T-Thank you.",
        'definition': 'お 決まり の 頃 お うかがい し ます',
        'pinyinSpace': 'お きまり  の  ころ  お うかがい  し  ます'
    },
    '166': {
        'character': 'あ … はい',
        'pinyin': 'あ … はい',
        'letter': 'T-Thank you. ',
        'definition': 'あ はい',
        'pinyinSpace': 'あ … はい'
    },
    '167': {
        'character': 'チャック など は 見つから ない',
        'pinyin': 'ちゃっく など は みつから ない',
        'letter': "I don't see a zipper. ",
        'definition': 'チャック など は 見つから ない',
        'pinyinSpace': 'チャック  など  は  みつから  ない'
    },
    '168': {
        'character': 'やはり 着ぐるみ で は なく 本物',
        'pinyin': 'やはり きぐるみ で は なく ほんもの',
        'letter': "Apparently, it's not a costume, but rather the real deal. ",
        'definition': 'やはり 着ぐるみ で は なく 本物',
        'pinyinSpace': 'やはり  きぐるみ  で  は  なく  ほんもの'
    },
    '169': {
        'character': 'この 街 は 動物 が 多い と 聞い て い た が',
        'pinyin': 'この まち は どうぶつ が おおい と きい て い た が',
        'letter': 'I heard that there were a lot of animals in this town',
        'definition': 'この 街 は 動物 が 多い と 聞い て い た が',
        'pinyinSpace': 'この  がい/まち  は  どうぶつ  が  おおい  と  聞い  て  い  た  が'
    },
    '170': {
        'character': 'こうして 働く 動物 を 見 た の は 初めて だ',
        'pinyin': 'こうして はたらく どうぶつ を み た の は はじめて だ',
        'letter': "but this is the first time I've seen a working animal. ",
        'definition': 'こうして 働く 動物 を 見 た の は 初めて だ',
        'pinyinSpace': 'こうして  はたらく  どうぶつ  を  み  た  の  は  はじめて  だ'
    },
    '171': {
        'character': '大きい あんな 手 で 料理 を する の だろ う か',
        'pinyin': 'おおきい あんな て で りょうり を する の だろ う か',
        'letter': 'Does he cook with those huge hands? ',
        'definition': '大きい あんな 手 で 料理 を する の だろ う か',
        'pinyinSpace': 'おおきい  あんな  て  で  りょうり  を  する  の  だろ  う  か'
    },
    '172': {
        'character': 'カフェ なのに 輪切り ありえ ない',
        'pinyin': 'かふぇ なのに わぎり ありえ ない',
        'letter': "Inconceivable! But that's all I can think of.",
        'definition': 'カフェ な のに 輪切り あり え ない',
        'pinyinSpace': 'カフェ  な のに  わぎり  あり え  ない'
    },
    '173': {
        'character': 'でも そんな 想像 しか でき ない',
        'pinyin': 'でも そんな そうぞう しか でき ない',
        'letter': "But that's all I can think of. ",
        'definition': 'でも そんな 想像 しか でき ない',
        'pinyinSpace': 'でも  そんな  そうぞう  しか  でき  ない'
    },
    '174': {
        'character': 'ムダ が なく しかも 美しい 動き',
        'pinyin': 'むだ が なく しかも うつくしい うごき',
        'letter': 'Such flawless and elegant movement!',
        'definition': 'ムダ が なく しかも 美しい 動き',
        'pinyinSpace': 'ムダ  が  なく  しかも  うつくしい  うごき'
    },
    '175': {
        'character': '疑って すま ない',
        'pinyin': 'うたがって すま ない',
        'letter': 'I take back any doubts.',
        'definition': '疑って すま ない',
        'pinyinSpace': 'うたがって  すま  ない'
    },
    '176': {
        'character': 'さ ぁ もはや 偏見 は 捨て て 注文 する ぞ',
        'pinyin': 'さ ぁ もはや へんけん は すて て ちゅうもん する ぞ',
        'letter': "Now, I'm going to throw away any prejudices and order.",
        'definition': 'さ ぁ もはや 偏見 は 捨て て 注文 する ぞ',
        'pinyinSpace': 'さ  ぁ  もはや  へんけん  は  すて  て  ちゅうもん  する  ぞ'
    },
    '177': {
        'character': 'メニュー が 動物用 だ なんてこと は …',
        'pinyin': 'めにゅー が どうぶつよう だ なんてこと は …',
        'letter': "What if the menu's only for animals?! ",
        'definition': 'メニュー が 動物 用 だ なんてこと は',
        'pinyinSpace': 'メニュー  が  どうぶつ よう  だ  なんてこと  は …'
    },
    '178': {
        'character': 'あ～ さすがに 普通 か',
        'pinyin': 'あ～ さすがに ふつう か',
        'letter': "Oh, it's rather normal. ",
        'definition': 'あ さすがに 普通 か',
        'pinyinSpace': 'あ ～ さすがに  ふつう  か'
    },
    '179': {
        'character': 'これ は 竹 …',
        'pinyin': 'これ は たけ …',
        'letter': 'Bamboo?! ',
        'definition': 'これ は 竹',
        'pinyinSpace': 'これ  は  たけ …'
    },
    '180': {
        'character': 'いや 待て もしかすると 竹 を モチーフ に し た スイーツ かも しれ ん',
        'pinyin': 'いや まて もしかすると たけ を もちーふ に し た すいーつ かも しれ ん',
        'letter': 'it could just mean some dessert made to look like bamboo. ',
        'definition': 'いや 待て もしかすると 竹 を モチーフ に し た スイーツ かも しれ ん',
        'pinyinSpace': 'いや  まて  もしかすると  たけ  を  モチーフ  に  し  た  スイーツ  かも  しれ  ん'
    },
    '181': {
        'character': 'しかし 正真正銘 の 竹 で ある こと も 否定 でき ない',
        'pinyin': 'しかし しょうしんしょうめい の たけ で ある こと も ひてい でき ない',
        'letter': "But I can't rule out the possibility that it's actually bamboo...",
        'definition': 'しかし 正真正銘 の 竹 で ある こと も 否定 でき ない',
        'pinyinSpace': 'しかし  しょうしんしょうめい  の  たけ  で  ある  こと  も  ひてい  でき  ない'
    },
    '182': {
        'character': 'お決まり ですか ？',
        'pinyin': 'おきまり ですか ？',
        'letter': 'Are you ready to order? ',
        'definition': 'お 決まり です か',
        'pinyinSpace': 'お きまり  です か ？'
    },
    '183': {
        'character': 'あ えっと … アイス コーヒー',
        'pinyin': 'あ えっと … あいす こーひー',
        'letter': 'U-Uh... Iced coffee.',
        'definition': 'あ えっと アイス コーヒー',
        'pinyinSpace': 'あ  えっと … アイス  コーヒー'
    },
    '184': {
        'character': 'アイス コーヒー を お ひとつ で よろしい ですか',
        'pinyin': 'あいす こーひー を お ひとつ で よろしい ですか',
        'letter': 'Does one iced coffee complete your order? ',
        'definition': 'アイス コーヒー を お ひとつ で よろしい です か',
        'pinyinSpace': 'アイス  コーヒー  を  お  ひとつ  で  よろしい  です か'
    },
    '185': {
        'character': 'はい いえ …',
        'pinyin': 'はい いえ …',
        'letter': 'No! ',
        'definition': 'はい いえ',
        'pinyinSpace': 'はい  いえ …'
    },
    '186': {
        'character': '竹 を',
        'pinyin': 'たけ を',
        'letter': 'Bamboo.',
        'definition': '竹 を',
        'pinyinSpace': 'たけ  を'
    },
    '187': {
        'character': '竹 ですか ？',
        'pinyin': 'たけ ですか ？',
        'letter': 'Did you say bamboo?',
        'definition': '竹 です か',
        'pinyinSpace': 'たけ  です か ？'
    },
    '188': {
        'character': 'はい',
        'pinyin': 'はい',
        'letter': 'Yes.',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '189': {
        'character': '大盛り も でき ます が',
        'pinyin': 'おおもり も でき ます が',
        'letter': "We have a larger serving, if you'd like. What?!",
        'definition': '大盛り も でき ます が',
        'pinyinSpace': 'おおもり  も  でき  ます  が'
    },
    '190': {
        'character': 'じゃ それで',
        'pinyin': 'じゃ それで',
        'letter': "I'll uh, take that, then. Yes, sir.",
        'definition': 'じゃ それで',
        'pinyinSpace': 'じゃ  それで'
    },
    '191': {
        'character': 'はい',
        'pinyin': 'はい',
        'letter': 'Yes, sir.',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '192': {
        'character': '注文 し て しまった しかも 大盛り',
        'pinyin': 'ちゅうもん し て しまった しかも おおもり',
        'letter': 'I ended up ordering it. And I made it a larger serving!',
        'definition': '注文 し て しまった しかも 大盛り',
        'pinyinSpace': 'ちゅうもん  し  て  しまった  しかも  おおもり'
    },
    '193': {
        'character': 'この 選択 吉 と 出る か 凶 と 出る か',
        'pinyin': 'この せんたく きち と でる か きょう と でる か',
        'letter': 'Will this decision turn out good or bad? ',
        'definition': 'この 選択 吉 と 出る か 凶 と 出る か',
        'pinyinSpace': 'この  せんたく  きち/よ  と  でる  か  きょう  と  でる  か'
    },
    '194': {
        'character': 'お待たせ し まし た',
        'pinyin': 'おまたせ し まし た',
        'letter': 'Here you go. ',
        'definition': 'お 待たせ し まし た',
        'pinyinSpace': 'お またせ  し  まし  た'
    },
    '195': {
        'character': 'やっぱ 凶 か ！',
        'pinyin': 'やっぱ きょう か ！',
        'letter': 'It was bad!',
        'definition': 'やっぱ 凶 か',
        'pinyinSpace': 'やっぱ  きょう  か ！'
    },
    '196': {
        'character': 'あ いや 待て 今まで 食べる 機会 が なかった だけ で',
        'pinyin': 'あ いや まて いままで たべる きかい が なかった だけ で',
        'letter': "Maybe it's just no one's ever tried to eat it before",
        'definition': 'あ いや 待て 今まで 食べる 機会 が なかった だけ で',
        'pinyinSpace': 'あ  いや  まて  いままで  たべる  きかい  が  なかった  だけ  で'
    },
    '197': {
        'character': '案外 おいしい の かも しれ ない',
        'pinyin': 'あんがい おいしい の かも しれ ない',
        'letter': "and it's actually pretty good. Yeah, that's gotta be it!",
        'definition': '案外 おいしい の かも しれ ない',
        'pinyinSpace': 'あんがい  おいしい  の  かも  しれ  ない'
    },
    '198': {
        'character': 'そうだ きっと そうだ',
        'pinyin': 'そうだ きっと そうだ',
        'letter': "Yeah, that's gotta be it! ",
        'definition': 'そう だ きっと そう だ',
        'pinyinSpace': 'そう だ  きっと  そう だ'
    },
    '199': {
        'character': '竹 の 香り が だんだん と 青臭 さ に 変わり',
        'pinyin': 'たけ の かおり が だんだん と あおくさ さ に かわり',
        'letter': 'The bamboo aroma is slowly turning bitter',
        'definition': '竹 の 香り が だんだん と 青臭 さ に 変わり',
        'pinyinSpace': 'たけ  の  かおり  が  だんだん  と  あおくさ  さ  に  かわり'
    },
    '200': {
        'character': '噛み切れ ない 筋 と ともに 口の中 に 広 がって くる',
        'pinyin': 'かみきれ ない すじ と ともに くちのなか に ひろ がって くる',
        'letter': "and filling my mouth, along with the fibers that I can't chew through.",
        'definition': '噛み切れ ない 筋 と ともに 口 の 中 に 広 が って くる',
        'pinyinSpace': 'かみきれ  ない  すじ  と  ともに  くち の なか/ちゅう/じゅう  に  ひろ  が って  くる'
    },
    '201': {
        'character': 'やっぱ ただ の 竹 だ',
        'pinyin': 'やっぱ ただ の たけ だ',
        'letter': "It's just ordinary bamboo. ",
        'definition': 'やっぱ ただ の 竹 だ',
        'pinyinSpace': 'やっぱ  ただ  の  たけ  だ'
    },
    '202': {
        'character': 'どう する こっそり 出し ちゃお う か',
        'pinyin': 'どう する こっそり だし ちゃお う か',
        'letter': 'Should I just quietly spit it out? ',
        'definition': 'どう する こっそり 出し ちゃ お う か',
        'pinyinSpace': 'どう  する  こっそり  だし  ちゃ お  う  か'
    },
    '203': {
        'character': 'しかし 一度 口 に 入れ た もの を 出す など 言語道断',
        'pinyin': 'しかし いちど くち に いれ た もの を だす など ごんごどうだん',
        'letter': "something I've already put in my mouth. ",
        'definition': 'しかし 一度 口 に 入れ た もの を 出す など 言語道断',
        'pinyinSpace': 'しかし  いちど  くち  に  はいれ/いれ  た  もの  を  だす  など  ごんごどうだん'
    },
    '204': {
        'character': 'う～ だが 意識 が 飲み込め と 命令 し て も 体 が 拒否 する',
        'pinyin': 'う～ だが いしき が のみこめ と めいれい し て も からだ が きょひ する',
        'letter': 'But even if I try to will myself to eat it, my body is resisting!',
        'definition': 'う だが 意識 が 飲み込め と 命令 し て も 体 が 拒否 する',
        'pinyinSpace': 'う ～ だが  いしき  が  のみこめ  と  めいれい  し  て  も  からだ  が  きょひ  する'
    },
    '205': {
        'character': '水 水 だ …',
        'pinyin': 'みず みず だ …',
        'letter': 'Water! I need water! ',
        'definition': '水 水 だ',
        'pinyinSpace': 'みず  みず  だ …'
    },
    '206': {
        'character': 'う わ ～ しまった ！',
        'pinyin': 'う わ ～ しまった ！',
        'letter': 'Oh, no! I drank it all earlier!',
        'definition': 'う わ しまった',
        'pinyinSpace': 'う  わ ～ しまった ！'
    },
    '207': {
        'character': 'さっき 全部 飲み干し て しまった',
        'pinyin': 'さっき ぜんぶ のみほし て しまった',
        'letter': 'I drank it all earlier!',
        'definition': 'さっき 全部 飲み干し て しまった',
        'pinyinSpace': 'さっき  ぜんぶ  のみほし  て  しまった'
    },
    '208': {
        'character': 'もはや 限界 …',
        'pinyin': 'もはや げんかい …',
        'letter': "I've reached my limit! ",
        'definition': 'もはや 限界',
        'pinyinSpace': 'もはや  げんかい …'
    },
    '209': {
        'character': 'アイス コーヒー です',
        'pinyin': 'あいす こーひー です',
        'letter': "Here's your iced coffee. ",
        'definition': 'アイス コーヒー です',
        'pinyinSpace': 'アイス  コーヒー  です'
    },
    '210': {
        'character': '天 の 助け',
        'pinyin': 'てん の たすけ',
        'letter': 'Saved from above! ',
        'definition': '天 の 助け',
        'pinyinSpace': 'てん  の  たすけ'
    },
    '211': {
        'character': '戦い は まだ 始まった ばかり',
        'pinyin': 'たたかい は まだ はじまった ばかり',
        'letter': 'The battle has only begun...',
        'definition': '戦い は まだ 始まった ばかり',
        'pinyinSpace': 'たたかい  は  まだ  はじまった  ばかり'
    },
    '212': {
        'character': 'こんにちは',
        'pinyin': 'こんにちは',
        'letter': 'Hello!',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '213': {
        'character': 'パンダ ！',
        'pinyin': 'ぱんだ ！',
        'letter': 'A panda! There we go.',
        'definition': 'パンダ',
        'pinyinSpace': 'パンダ ！'
    },
    '214': {
        'character': 'よいしょ',
        'pinyin': 'よいしょ',
        'letter': 'There we go.',
        'definition': 'よいしょ',
        'pinyinSpace': 'よいしょ'
    },
    '215': {
        'character': 'パンダ だ',
        'pinyin': 'ぱんだ だ',
        'letter': "It's a panda. ",
        'definition': 'パンダ だ',
        'pinyinSpace': 'パンダ  だ'
    },
    '216': {
        'character': '子供 の 頃 動物園 に 行った とき は',
        'pinyin': 'こども の ころ どうぶつえん に いった とき は',
        'letter': 'I saw just the head of a panda once, when I went to the zoo as a kid...',
        'definition': '子供 の 頃 動物園 に 行った とき は',
        'pinyinSpace': 'こども  の  ころ  どうぶつえん  に  おこなった/いった  とき  は'
    },
    '217': {
        'character': '人 の 頭 しか 見え なかった パンダ が',
        'pinyin': 'ひと の あたま しか みえ なかった ぱんだ が',
        'letter': 'I saw just the head of a panda once, when I went to the zoo as a kid... ',
        'definition': '人 の 頭 しか 見え なかった パンダ が',
        'pinyinSpace': 'じん/ひと/にん  の  あたま/とう  しか  みえ  なかった  パンダ  が'
    },
    '218': {
        'character': '今 まさに こんな 近く に',
        'pinyin': 'いま まさに こんな ちかく に',
        'letter': 'and now one is sitting right next to me!',
        'definition': '今 まさに こんな 近く に',
        'pinyinSpace': 'いま  まさに  こんな  ちかく  に'
    },
    '219': {
        'character': 'しかし 至近 距離 過ぎ て 見る の が 気まずい',
        'pinyin': 'しかし しきん きょり すぎ て みる の が きまずい',
        'letter': "But he's sitting so close that it'd be awkward to look!",
        'definition': 'しかし 至近 距離 過ぎ て 見る の が 気まずい',
        'pinyinSpace': 'しかし  しきん  きょり  すぎ  て  みる  の  が  きまずい'
    },
    '220': {
        'character': 'どう し た もの か',
        'pinyin': 'どう し た もの か',
        'letter': 'What should I do? ',
        'definition': 'どう し た もの か',
        'pinyinSpace': 'どう  し  た  もの  か'
    },
    '221': {
        'character': 'そうだ まわり を 見る ふり し て',
        'pinyin': 'そうだ まわり を みる ふり し て',
        'letter': "I'll pretend I'm looking around. U-Um,",
        'definition': 'そう だ まわり を 見る ふり し て',
        'pinyinSpace': 'そう だ  まわり  を  みる  ふり  し  て'
    },
    '222': {
        'character': 'えっと … お手洗い は どっち かな',
        'pinyin': 'えっと … おてあらい は どっち かな',
        'letter': 'U-Um, I wonder where the bathroom is...',
        'definition': 'えっと お手洗い は どっち かな',
        'pinyinSpace': 'えっと … おてあらい  は  どっち  かな'
    },
    '223': {
        'character': '見 られ てる パンダ に メッチャ 見 られ てる',
        'pinyin': 'み られ てる ぱんだ に めっちゃ み られ てる',
        'letter': 'The panda is totally staring at me! ',
        'definition': '見 られ てる パンダ に メッチャ 見 られ てる',
        'pinyinSpace': 'み  られ  てる  パンダ  に  メッチャ  み  られ  てる'
    },
    '224': {
        'character': '食べ ない の ？',
        'pinyin': 'たべ ない の ？',
        'letter': "Aren't you going to eat that? Huh?",
        'definition': '食べ ない の',
        'pinyinSpace': 'たべ  ない  の ？'
    },
    '225': {
        'character': 'えっ いっ ？ ！',
        'pinyin': 'えっ いっ ？ ！',
        'letter': 'Huh? ',
        'definition': 'え っ いっ',
        'pinyinSpace': 'え っ  いっ ？ ！'
    },
    '226': {
        'character': 'もらって あげて も いい よ',
        'pinyin': 'もらって あげて も いい よ',
        'letter': "I'll take it off your hands if you want. ",
        'definition': 'もらって あげて も いい よ',
        'pinyinSpace': 'もらって  あげて  も  いい  よ'
    },
    '227': {
        'character': 'この チャンス を 逃し て は なら ぬ',
        'pinyin': 'この ちゃんす を のがし て は なら ぬ',
        'letter': "I can't let this chance slip by. ",
        'definition': 'この チャンス を 逃し て は なら ぬ',
        'pinyinSpace': 'この  チャンス  を  のがし  て  は  なら  ぬ'
    },
    '228': {
        'character': 'よ … よかったら どうぞ',
        'pinyin': 'よ … よかったら どうぞ',
        'letter': 'H-Here, help yourself.',
        'definition': 'よ よかったら どうぞ',
        'pinyinSpace': 'よ … よかったら  どうぞ'
    },
    '229': {
        'character': 'ありがとう',
        'pinyin': 'ありがとう',
        'letter': 'Wow, thank you! ',
        'definition': 'ありがとう',
        'pinyinSpace': 'ありがとう'
    },
    '230': {
        'character': 'ピンチ 脱出 ！',
        'pinyin': 'ぴんち だっしゅつ ！',
        'letter': 'Crisis adverted! ',
        'definition': 'ピンチ 脱出',
        'pinyinSpace': 'ピンチ  だっしゅつ ！'
    },
    '231': {
        'character': 'なんだか すみません ね',
        'pinyin': 'なんだか すみません ね',
        'letter': 'I apologize. ',
        'definition': 'なんだか すみません ね',
        'pinyinSpace': 'なんだか  すみません  ね'
    },
    '232': {
        'character': 'ああ いえいえ',
        'pinyin': 'ああ いえいえ',
        'letter': 'Oh, no problem at all. ',
        'definition': 'ああ いえいえ',
        'pinyinSpace': 'ああ  いえいえ'
    },
    '233': {
        'character': 'よろしかったら どうぞ サービス です',
        'pinyin': 'よろしかったら どうぞ さーびす です',
        'letter': "It's on the house. ",
        'definition': 'よろしかったら どうぞ サービス です',
        'pinyinSpace': 'よろしかったら  どうぞ  サービス  です'
    },
    '234': {
        'character': 'ふ … 振り出し に 戻った …',
        'pinyin': 'ふ … ふりだし に もどった …',
        'letter': " I'm right back where I started.",
        'definition': 'ふ 振り出し に 戻った',
        'pinyinSpace': 'ふ … ふりだし  に  もどった …'
    },
    '235': {
        'character': 'いらっしゃい',
        'pinyin': 'いらっしゃい',
        'letter': 'Welcome. ',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '236': {
        'character': 'こんにちは',
        'pinyin': 'こんにちは',
        'letter': 'Hey. ',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '237': {
        'character': '今度 は ペンギン ！ ？',
        'pinyin': 'こんど は ぺんぎん ！ ？',
        'letter': ' This time a penguin',
        'definition': '今度 は ペンギン',
        'pinyinSpace': 'こんど  は  ペンギン ！ ？'
    },
    '238': {
        'character': 'かわいい …',
        'pinyin': 'かわいい …',
        'letter': "It's so cute. ",
        'definition': 'かわいい',
        'pinyinSpace': 'かわいい …'
    },
    '239': {
        'character': 'その イス に 座る つもり か ？',
        'pinyin': 'その いす に すわる つもり か ？',
        'letter': 'Does it plan to sit on that stool?! ',
        'definition': 'その イス に 座る つもり か',
        'pinyinSpace': 'その  イス  に  すわる  つもり  か ？'
    },
    '240': {
        'character': 'よじ登る の か ？ 跳ぶ の か ？ 誰か に のせ て もらう の か ？',
        'pinyin': 'よじのぼる の か ？ とぶ の か ？ だれか に のせ て もらう の か ？',
        'letter': 'Is someone going to lift him up? ',
        'definition': 'よじ登る の か 跳ぶ の か 誰か に のせ て もらう の か',
        'pinyinSpace': 'よじのぼる  の  か ？ とぶ  の  か ？ だれか  に  のせ  て  もらう  の  か ？'
    },
    '241': {
        'character': 'コーヒー おかわり いかが です ？',
        'pinyin': 'こーひー おかわり いかが です ？',
        'letter': 'Would you like a refill on your coffee? ',
        'definition': 'コーヒー おかわり いかが です',
        'pinyinSpace': 'コーヒー  おかわり  いかが  です ？'
    },
    '242': {
        'character': 'ありがとう ござい ます',
        'pinyin': 'ありがとう ござい ます',
        'letter': 'Th-Thank you very much. ',
        'definition': 'ありがとう ご ざい ます',
        'pinyinSpace': 'ありがとう  ご ざい  ます'
    },
    '243': {
        'character': 'クソ ！ 見 そこね た ！',
        'pinyin': 'くそ ！ み そこね た ！',
        'letter': 'Damn it! I missed it!',
        'definition': 'クソ 見 そこ ね た',
        'pinyinSpace': 'クソ ！ み  そこ ね  た ！'
    },
    '244': {
        'character': '今日 は 暑い ね',
        'pinyin': 'きょう は あつい ね',
        'letter': "It's pretty hot today.",
        'definition': '今日 は 暑い ね',
        'pinyinSpace': 'きょう  は  あつい  ね'
    },
    '245': {
        'character': 'ホント 仕事場 に も クーラー 欲しい よ',
        'pinyin': 'ほんと しごとば に も くーらー ほしい よ',
        'letter': 'I want an air conditioner (ku-ra) at work, too. ',
        'definition': 'ホント 仕事場 に も クーラー 欲しい よ',
        'pinyinSpace': 'ホント  しごとば  に  も  クーラー  ほしい  よ'
    },
    '246': {
        'character': 'それ は カーラー',
        'pinyin': 'それ は かーらー',
        'letter': 'Those would be curlers (ka-ra). ',
        'definition': 'それ は カーラー',
        'pinyinSpace': 'それ  は  カーラー'
    },
    '247': {
        'character': 'それ は セーラー',
        'pinyin': 'それ は せーらー',
        'letter': 'That would be sailor (se-ra) style uniform. ',
        'definition': 'それ は セーラー',
        'pinyinSpace': 'それ  は  セーラー'
    },
    '248': {
        'character': 'それ は ディーラー',
        'pinyin': 'それ は でぃーらー',
        'letter': 'That would be a dealer (di-ra). ',
        'definition': 'それ は ディーラー',
        'pinyinSpace': 'それ  は  ディーラー'
    },
    '249': {
        'character': 'それ は … 何だ っけ ？',
        'pinyin': 'それ は … なんだ っけ ？',
        'letter': 'What is it, again? ',
        'definition': 'それ は 何 だ っけ',
        'pinyinSpace': 'それ  は … なん だ  っけ ？'
    },
    '250': {
        'character': '何とか ラー ？',
        'pinyin': 'なんとか らー ？',
        'letter': 'Something ra?',
        'definition': '何とか ラー',
        'pinyinSpace': 'なんとか  ラー ？'
    },
    '251': {
        'character': 'ラー … ラー …',
        'pinyin': 'らー … らー …',
        'letter': 'Ra, ra... ',
        'definition': 'ラー ラー',
        'pinyinSpace': 'ラー … ラー …'
    },
    '252': {
        'character': 'マーラー ？ トレーラー ？',
        'pinyin': 'まーらー ？ とれーらー ？',
        'letter': ' Trailer (Tore-ra)?',
        'definition': 'マーラー トレーラー',
        'pinyinSpace': 'マーラー ？ トレーラー ？'
    },
    '253': {
        'character': 'ハスラー だ ！',
        'pinyin': 'はすらー だ ！',
        'letter': "It's hustler (hasura)! ",
        'definition': 'ハスラー だ',
        'pinyinSpace': 'ハスラー  だ ！'
    },
    '254': {
        'character': 'ハスラー ！',
        'pinyin': 'はすらー ！',
        'letter': 'Hustler! ',
        'definition': 'ハスラー',
        'pinyinSpace': 'ハスラー ！'
    },
    '255': {
        'character': '何だ っけ ？',
        'pinyin': 'なんだ っけ ？',
        'letter': "I can't remember. ",
        'definition': '何 だ っけ',
        'pinyinSpace': 'なん だ  っけ ？'
    },
    '256': {
        'character': '教え て よ',
        'pinyin': 'おしえ て よ',
        'letter': 'Tell us!',
        'definition': '教え て よ',
        'pinyinSpace': 'おしえ  て  よ'
    },
    '257': {
        'character': 'ひ み つ',
        'pinyin': 'ひ み つ',
        'letter': "It's... a... secret. ",
        'definition': 'ひ み つ',
        'pinyinSpace': 'ひ  み  つ'
    },
    '258': {
        'character': '言い たい … 言って しまい たい …',
        'pinyin': 'いい たい … いって しまい たい …',
        'letter': 'I want to say it! I really want to say it!',
        'definition': '言い たい 言って しまい たい',
        'pinyinSpace': 'いい  たい … いって  しまい  たい …'
    },
    '259': {
        'character': 'しかし いきなり 会話 に 入り込む など …',
        'pinyin': 'しかし いきなり かいわ に はいりこむ など …',
        'letter': "But I can't just butt into the conversation... ",
        'definition': 'しかし いきなり 会話 に 入り込む など',
        'pinyinSpace': 'しかし  いきなり  かいわ  に  はいりこむ  など …'
    },
    '260': {
        'character': 'ああ レスラー',
        'pinyin': 'ああ れすらー',
        'letter': 'Oh, I know, a wrestler (resura)! ',
        'definition': 'ああ レスラー',
        'pinyinSpace': 'ああ  レスラー'
    },
    '261': {
        'character': '惜しい ！',
        'pinyin': 'おしい ！',
        'letter': ' Then, broiler (buroira)!',
        'definition': '惜しい',
        'pinyinSpace': 'おしい ！'
    },
    '262': {
        'character': 'じゃあ ブロイラー ！',
        'pinyin': 'じゃあ ぶろいらー ！',
        'letter': 'Then, broiler (buroira)!',
        'definition': 'じゃあ ブロイラー',
        'pinyinSpace': 'じゃあ  ブロイラー ！'
    },
    '263': {
        'character': '遠ざかった …',
        'pinyin': 'とおざかった …',
        'letter': "So far! I can't hold it any longer!",
        'definition': '遠ざかった',
        'pinyinSpace': 'とおざかった …'
    },
    '264': {
        'character': 'もう 我慢 でき ない どう 思わ れ て も 私 は 言う ！ ！',
        'pinyin': 'もう がまん でき ない どう おもわ れ て も わたし は いう ！ ！',
        'letter': "I'll say it, no matter what they may think of me!",
        'definition': 'もう 我慢 でき ない どう 思わ れ て も 私 は 言う',
        'pinyinSpace': 'もう  がまん  でき  ない  どう  おもわ  れ  て  も  わたし  は  いう ！ ！'
    },
    '265': {
        'character': 'ハス …',
        'pinyin': 'はす …',
        'letter': 'Hu— ',
        'definition': 'ハス',
        'pinyinSpace': 'ハス …'
    },
    '266': {
        'character': 'いらっしゃい',
        'pinyin': 'いらっしゃい',
        'letter': 'Welcome. ',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '267': {
        'character': 'これまた 動物園 の アイドル コアラ ！',
        'pinyin': 'これまた どうぶつえん の あいどる こあら ！',
        'letter': 'Another idol from the zoo, the koala! ',
        'definition': 'これまた 動物園 の アイドル コアラ',
        'pinyinSpace': 'これまた  どうぶつえん  の  アイドル  コアラ ！'
    },
    '268': {
        'character': '根強い 人気 の ラッコ',
        'pinyin': 'ねづよい にんき の らっこ',
        'letter': 'The ever-popular otter!',
        'definition': '根強い 人気 の ラッコ',
        'pinyinSpace': 'ねづよい  にんき  の  ラッコ'
    },
    '269': {
        'character': 'マン ドリル 色 鮮やか ！',
        'pinyin': 'まん どりる いろ あざやか ！',
        'letter': 'The colorful mandrill! ',
        'definition': 'マン ドリル 色 鮮やか',
        'pinyinSpace': 'マン  ドリル  いろ  あざやか ！'
    },
    '270': {
        'character': 'ラクダ ？',
        'pinyin': 'らくだ ？',
        'letter': 'A camel? ',
        'definition': 'ラクダ',
        'pinyinSpace': 'ラクダ ？'
    },
    '271': {
        'character': 'ロバ … じゃ ない え ～',
        'pinyin': 'ろば … じゃ ない え ～',
        'letter': "A donkey? No... A tama? No, but it's something like that...",
        'definition': 'ロバ じゃ ない え',
        'pinyinSpace': 'ロバ … じゃ  ない  え ～'
    },
    '272': {
        'character': 'タ … タマ … いや そんな 感じ の …',
        'pinyin': 'た … たま … いや そんな かんじ の …',
        'letter': "A tama? No, but it's something like that... ",
        'definition': 'タ タマ いや そんな 感じ の',
        'pinyinSpace': 'タ … タマ … いや  そんな  かんじ  の …'
    },
    '273': {
        'character': 'ああ 思い出せ ない … クソ ！',
        'pinyin': 'ああ おもいだせ ない … くそ ！',
        'letter': "I can't remember! Damn it!",
        'definition': 'ああ 思い出せ ない クソ',
        'pinyinSpace': 'ああ  おもいだせ  ない … クソ ！'
    },
    '274': {
        'character': 'いらっしゃい ラマ さん',
        'pinyin': 'いらっしゃい らま さん',
        'letter': 'Welcome, Mr. Llama.',
        'definition': 'いらっしゃい ラマ さん',
        'pinyinSpace': 'いらっしゃい  ラマ  さん'
    },
    '275': {
        'character': 'そうだ ！ ラマ だ',
        'pinyin': 'そうだ ！ らま だ',
        'letter': "That's it! It's a llama! ",
        'definition': 'そう だ ラマ だ',
        'pinyinSpace': 'そう だ ！ ラマ  だ'
    },
    '276': {
        'character': 'ああ … すっきり し た',
        'pinyin': 'ああ … すっきり し た',
        'letter': ' I feel so much better!',
        'definition': 'ああ すっきり し た',
        'pinyinSpace': 'ああ … すっきり  し  た'
    },
    '277': {
        'character': 'そういえ ば この 前 の 半田 さん おもしろかった よ ね',
        'pinyin': 'そういえ ば この まえ の はんでん さん おもしろかった よ ね',
        'letter': 'Mr. Handa was really funny the other day. ',
        'definition': 'そう いえ ば この 前 の 半田 さん おもしろかった よ ね',
        'pinyinSpace': 'そう いえ  ば  この  ぜん/まえ  の  はんだ  さん  おもしろかった  よ  ね'
    },
    '278': {
        'character': '気がつい たら 私以外 周り は みんな 動物',
        'pinyin': 'きがつい たら わたくしいがい まわり は みんな どうぶつ',
        'letter': "Suddenly, I'm completely surrounded by animals... ",
        'definition': '気 が つい たら 私 以外 周り は みんな 動物',
        'pinyinSpace': 'き が つい  たら  わたし いがい  まわり  は  みんな  どうぶつ'
    },
    '279': {
        'character': 'しかも みんな 常連 風 だ',
        'pinyin': 'しかも みんな じょうれん ふう だ',
        'letter': 'Not to mention they all seem to be regulars... ',
        'definition': 'しかも みんな 常連 風 だ',
        'pinyinSpace': 'しかも  みんな  じょうれん  かぜ/ふう  だ'
    },
    '280': {
        'character': 'なんか 居づらい …',
        'pinyin': 'なんか いづらい …',
        'letter': 'I feel awkward being here. ',
        'definition': 'なんか 居づらい',
        'pinyinSpace': 'なんか  いづらい …'
    },
    '281': {
        'character': 'せ … 席 が いっぱい だ よ',
        'pinyin': 'せ … せき が いっぱい だ よ',
        'letter': 'A-All the seats are full! ',
        'definition': 'せ 席 が いっぱい だ よ',
        'pinyinSpace': 'せ … せき  が  いっぱい  だ  よ'
    },
    '282': {
        'character': 'テーブル 席 は 空い てる よ',
        'pinyin': 'てーぶる せき は あい てる よ',
        'letter': "There're some tables open, though. U-Um...",
        'definition': 'テーブル 席 は 空 い てる よ',
        'pinyinSpace': 'テーブル  せき  は  そら/から い  てる  よ'
    },
    '283': {
        'character': 'あ … あの … よかったら どうぞ',
        'pinyin': 'あ … あの … よかったら どうぞ',
        'letter': "You can have my seat. I'm about to head out, so...",
        'definition': 'あ あの よかったら どうぞ',
        'pinyinSpace': 'あ … あの … よかったら  どうぞ'
    },
    '284': {
        'character': 'もう 帰り ます ので',
        'pinyin': 'もう かえり ます ので',
        'letter': "I'm about to head out, so...",
        'definition': 'もう 帰り ます ので',
        'pinyinSpace': 'もう  かえり  ます  ので'
    },
    '285': {
        'character': 'もう 帰っちゃう の ？ ゆっくり し て いけ ば いい のに',
        'pinyin': 'もう かえっちゃう の ？ ゆっくり し て いけ ば いい のに',
        'letter': 'You should stay a while longer. When did you two get so close?',
        'definition': 'もう 帰っちゃう の ゆっくり し て いけ ば いい のに',
        'pinyinSpace': 'もう  かえっちゃう  の ？ ゆっくり  し  て  いけ  ば  いい  のに'
    },
    '286': {
        'character': 'いつの間に 仲よく なった の ？',
        'pinyin': 'いつのまに なかよく なった の ？',
        'letter': 'When did you two get so close?',
        'definition': 'いつの間に 仲よく なった の',
        'pinyinSpace': 'いつのまに  なかよく  なった  の ？'
    },
    '287': {
        'character': 'ネクタイ さん と は 竹 を もらった 仲 だ よ',
        'pinyin': 'ねくたい さん と は たけ を もらった なか だ よ',
        'letter': 'Mr. Necktie gave me his bamboo. ',
        'definition': 'ネクタイ さん と は 竹 を もらった 仲 だ よ',
        'pinyinSpace': 'ネクタイ  さん  と  は  たけ  を  もらった  なか  だ  よ'
    },
    '288': {
        'character': 'ね ？',
        'pinyin': 'ね ？',
        'letter': 'Right? ',
        'definition': 'ね',
        'pinyinSpace': 'ね ？'
    },
    '289': {
        'character': 'はい',
        'pinyin': 'はい',
        'letter': 'Yes. ',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '290': {
        'character': 'ありがとう ござい まし た',
        'pinyin': 'ありがとう ござい まし た',
        'letter': 'Thank you very much. ',
        'definition': 'ありがとう ご ざい まし た',
        'pinyinSpace': 'ありがとう  ご ざい  まし  た'
    },
    '291': {
        'character': 'ごちそうさま',
        'pinyin': 'ごちそうさま',
        'letter': 'Thank you. ',
        'definition': 'ごちそうさま',
        'pinyinSpace': 'ごちそうさま'
    },
    '292': {
        'character': 'あの …',
        'pinyin': 'あの …',
        'letter': 'Pardon me. ',
        'definition': 'あの',
        'pinyinSpace': 'あの …'
    },
    '293': {
        'character': 'は … はい ？',
        'pinyin': 'は … はい ？',
        'letter': 'Yes? ',
        'definition': 'は はい',
        'pinyinSpace': 'は … はい ？'
    },
    '294': {
        'character': 'お 持ち帰り でき ます ので どうぞ',
        'pinyin': 'お もちかえり でき ます ので どうぞ',
        'letter': 'You can get it to go, so here you go.',
        'definition': 'お 持ち帰り でき ます ので どうぞ',
        'pinyinSpace': 'お  もちかえり  でき  ます  ので  どうぞ'
    },
    '295': {
        'character': 'あ … ありがとう ござい ます …',
        'pinyin': 'あ … ありがとう ござい ます …',
        'letter': 'Thank you very much. ',
        'definition': 'あ ありがとう ご ざい ます',
        'pinyinSpace': 'あ … ありがとう  ご ざい  ます …'
    },
    '296': {
        'character': 'さて … あと ひと仕事 頑張る か',
        'pinyin': 'さて … あと ひとしごと がんばる か',
        'letter': " Guess I'll get back to work.",
        'definition': 'さて あと ひと 仕事 頑張る か',
        'pinyinSpace': 'さて … あと  ひと しごと  がんばる  か'
    },
    '297': {
        'character': 'そうして 私 は 日暮れ まで 働き',
        'pinyin': 'そうして わたし は ひぐれ まで はたらき',
        'letter': 'And so I worked until the sun set,',
        'definition': 'そうして 私 は 日暮れ まで 働き',
        'pinyinSpace': 'そうして  わたし  は  ひぐれ  まで  はたらき'
    },
    '298': {
        'character': 'この 街 で 夜 を 迎え た',
        'pinyin': 'この まち で よる を むかえ た',
        'letter': 'and welcomed night in this town. ',
        'definition': 'この 街 で 夜 を 迎え た',
        'pinyinSpace': 'この  がい/まち  で  よる  を  むかえ  た'
    },
    '299': {
        'character': '一杯 やる か',
        'pinyin': 'いっぱい やる か',
        'letter': "Maybe I'll get a drink. ",
        'definition': '一杯 やる か',
        'pinyinSpace': 'いっぱい  やる  か'
    },
    '300': {
        'character': 'おう そこ は 空い てる ぜ 座ん な',
        'pinyin': 'おう そこ は あい てる ぜ すわん な',
        'letter': "That spot there's open. Have a seat.",
        'definition': 'おう そこ は 空 い てる ぜ 座 ん な',
        'pinyinSpace': 'おう  そこ  は  そら/から い  てる  ぜ  ざ ん  な'
    },
    '301': {
        'character': 'いや … その …',
        'pinyin': 'いや … その …',
        'letter': ' No.. this ...',
        'definition': 'いや その',
        'pinyinSpace': 'いや … その …'
    },
    '302': {
        'character': '座れ って 遠慮 すん な',
        'pinyin': 'すわれ って えんりょ すん な',
        'letter': "Sit down. There's no need to hold back.",
        'definition': '座れ って 遠慮 すん な',
        'pinyinSpace': 'すわれ  って  えんりょ  すん  な'
    },
    '303': {
        'character': '見知らぬ 店 に 入る の は',
        'pinyin': 'みしらぬ みせ に はいる の は',
        'letter': 'There are a lot of risks',
        'definition': '見知らぬ 店 に 入る の は',
        'pinyinSpace': 'みしらぬ  みせ/てん  に  はいる/いる  の  は'
    },
    '304': {
        'character': '当たり はずれ が とても 大きい',
        'pinyin': 'あたり はずれ が とても おおきい',
        'letter': 'in going into an unknown shop... ',
        'definition': '当たり は ずれ が とても 大きい',
        'pinyinSpace': 'あたり  は ずれ  が  とても  おおきい'
    },
    '305': {
        'character': 'パンダ 君 パンダ 君',
        'pinyin': 'ぱんだ くん ぱんだ くん',
        'letter': 'Hey, Panda, Panda',
        'definition': 'パンダ 君 パンダ 君',
        'pinyinSpace': 'パンダ  きみ/くん  パンダ  きみ/くん'
    },
    '306': {
        'character': '何 ペンギン さん ？',
        'pinyin': 'なに ぺんぎん さん ？',
        'letter': "What is it, Mr. Penguin? I'm always on the receiving end,",
        'definition': '何 ペンギン さん',
        'pinyinSpace': 'なに/なん  ペンギン  さん ？'
    },
    '307': {
        'character': 'いつも せめ られる 立場 だ から 先手 を 打と う と 思って さ',
        'pinyin': 'いつも せめ られる たちば だ から せんて を うと う と おもって さ',
        'letter': "I'm always on the receiving end, so I thought I'd strike first.",
        'definition': 'いつも せめ られる 立場 だ から 先手 を 打 と う と 思って さ',
        'pinyinSpace': 'いつも  せめ  られる  たちば  だ  から  せんて  を  ダース/だ と  う  と  おもって  さ'
    },
    '308': {
        'character': 'パンダ 君 は あれ かい ？',
        'pinyin': 'ぱんだ くん は あれ かい ？',
        'letter': 'So, Panda— More importantly, look at what Mr. Llama has become.',
        'definition': 'パンダ 君 は あれ かい',
        'pinyinSpace': 'パンダ  きみ/くん  は  あれ  かい ？'
    },
    '309': {
        'character': 'そんなこと より 見 て よ ラマ さん の 変わり果て た 姿',
        'pinyin': 'そんなこと より み て よ らま さん の かわりはて た すがた',
        'letter': 'More importantly, look at what Mr. Llama has become.',
        'definition': 'そんな こと より 見 て よ ラマ さん の 変わり果て た 姿',
        'pinyinSpace': 'そんな こと  より  み  て  よ  ラマ  さん  の  かわりはて  た  すがた'
    },
    '310': {
        'character': '君 の 辞書 に は 僕 の 話 を 聞く という 言葉 は ない の かな',
        'pinyin': 'きみ の じしょ に は ぼく の はなし を きく という ことば は ない の かな',
        'letter': "Does listening to me not exist in your dictionary? Let's end this, Polar Bear.",
        'definition': '君 の 辞書 に は 僕 の 話 を 聞く という 言葉 は ない の かな',
        'pinyinSpace': 'きみ/くん  の  じしょ  に  は  ぼく  の  はなし  を  きく  という  ことば  は  ない  の  かな'
    },
    '311': {
        'character': '終わろ しろくま 君',
        'pinyin': 'おわろ しろくま くん',
        'letter': "Let's end this, Polar Bear. Next time on Polar Bear's Café,",
        'definition': '終わ ろ しろくま 君',
        'pinyinSpace': 'しまわ ろ  しろくま  きみ/くん'
    },
    '312': {
        'character': '次回 しろくま カフェ',
        'pinyin': 'じかい しろくま かふぇ',
        'letter': "Next time on Polar Bear's Café, ",
        'definition': '次回 しろくま カフェ',
        'pinyinSpace': 'じかい  しろくま  カフェ'
    },
    '313': {
        'character': 'さよなら ペンギン さん を お送り し ます',
        'pinyin': 'さよなら ぺんぎん さん を おおくり し ます',
        'letter': "we'll be presenting, Goodbye, Mr. Penguin. Wait, I'm still here! I'll always be here!",
        'definition': 'さよなら ペンギン さん を お 送り し ます',
        'pinyinSpace': 'さよなら  ペンギン  さん  を  お おくり  し  ます'
    },
    '314': {
        'character': 'いる よ ずっと いる よ',
        'pinyin': 'いる よ ずっと いる よ',
        'letter': "Wait, I'm still here! I'll always be here! Goodbye.",
        'definition': 'いる よ ずっと いる よ',
        'pinyinSpace': 'いる  よ  ずっと  いる  よ'
    },
    '315': {
        'character': 'さよ ら な',
        'pinyin': 'さよ ら な',
        'letter': 'Goodbye.',
        'definition': 'さ よ ら な',
        'pinyinSpace': 'さ よ  ら  な'
    },
    '316': {
        'character': 'いる って いる よ',
        'pinyin': 'いる って いる よ',
        'letter': "I'm here! I'm still here! ",
        'definition': 'いる って いる よ',
        'pinyinSpace': 'いる  って  いる  よ'
    }
}