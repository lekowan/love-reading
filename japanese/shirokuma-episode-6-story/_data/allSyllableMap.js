const allSyllableMap = {
    '1': {
        'character': 'パンダくんのダイエット',
        'letter': "Panda-kun's Diet",
        'pinyin': 'ぱんだくんのだいえっと',
        'definition': 'パンダ くん の ダイエット',
        'pinyinSpace': 'パンダ くん の ダイエット'
    },
    '2': {
        'character': 'いらっしゃいませ',
        'letter': 'Welcome!',
        'pinyin': 'いらっしゃいませ',
        'definition': 'いらっしゃいませ',
        'pinyinSpace': 'いらっしゃいませ'
    },
    '3': {
        'character': 'どうしたの？元気ないね',
        'letter': "What's wrong? You don't look well.",
        'pinyin': 'どうしたの？げんきないね',
        'definition': 'どうしたの 元気 ない ね',
        'pinyinSpace': 'どうしたの ？ げんき ない ね'
    },
    '4': {
        'character': 'パンダくんいつもの？',
        'letter': 'Panda, usual?',
        'pinyin': 'ぱんだくんいつもの？',
        'definition': 'パンダ くん いつも の',
        'pinyinSpace': 'パンダ くん いつも の ？'
    },
    '5': {
        'character': 'うん',
        'letter': "Yes, I'm fine.",
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '6': {
        'character': 'あぁいや…普通盛りで',
        'letter': "Oh, no, I'll have a regular serving.",
        'pinyin': 'あぁいや…ふつうざかりで',
        'definition': 'あぁ いや 普通盛り で',
        'pinyinSpace': 'あぁ いや … ふつうもり で'
    },
    '7': {
        'character': 'えっ！？大盛りじゃないの？',
        'letter': 'What? Not a large portion?',
        'pinyin': 'えっ！？おおもりじゃないの？',
        'definition': 'え っ 大盛り じゃない の',
        'pinyinSpace': 'え っ ！？ おおもり じゃない の ？'
    },
    '8': {
        'character': '今日からダイエットするの',
        'letter': "I'm going on a diet starting today.",
        'pinyin': 'きょうからだいえっとするの',
        'definition': '今日 から ダイエットする の',
        'pinyinSpace': 'きょう から ダイエット する の'
    },
    '9': {
        'character': 'え～っ！？',
        'letter': 'What?',
        'pinyin': 'え～っ！？',
        'definition': 'え っ',
        'pinyinSpace': 'え ～ っ ！？'
    },
    '10': {
        'character': 'ダイエット？',
        'letter': 'Diet?',
        'pinyin': 'だいえっと？',
        'definition': 'ダイエット',
        'pinyinSpace': 'ダイエット ？'
    },
    '11': {
        'character': 'それはインターネット',
        'letter': "That's the Internet",
        'pinyin': 'それはいんたーねっと',
        'definition': 'それは インターネット',
        'pinyinSpace': 'それは インターネット'
    },
    '12': {
        'character': 'それはイヌイット',
        'letter': "That's Inuit.",
        'pinyin': 'それはいぬいっと',
        'definition': 'それは イヌイット',
        'pinyinSpace': 'それは イヌイット'
    },
    '13': {
        'character': 'それはカルテット',
        'letter': "It's a quartet.",
        'pinyin': 'それはかるてっと',
        'definition': 'それは カルテット',
        'pinyinSpace': 'それは カルテット'
    },
    '14': {
        'character': 'どうしたの？急に',
        'letter': "What's wrong? Suddenly...",
        'pinyin': 'どうしたの？きゅうに',
        'definition': 'どうしたの 急に',
        'pinyinSpace': 'どうしたの ？ きゅうに'
    },
    '15': {
        'character': '実は今日動物園でさ…',
        'letter': 'I was at the zoo today and...',
        'pinyin': 'じつはきょうどうぶつえんでさ…',
        'definition': '実は 今日 動物園 で さ',
        'pinyinSpace': 'じつは きょう どうぶつえん で さ …'
    },
    '16': {
        'character': 'パンダさん！',
        'letter': 'Panda!',
        'pinyin': 'ぱんださん！',
        'definition': 'パンダ さん',
        'pinyinSpace': 'パンダ さん ！'
    },
    '17': {
        'character': 'サービスサービス',
        'letter': 'Service, service, service.',
        'pinyin': 'さーびすさーびす',
        'definition': 'サービス サービス',
        'pinyinSpace': 'サービス サービス'
    },
    '18': {
        'character': 'え～っ！？ケガしなくてよかったね',
        'letter': "What? You're lucky you didn't get hurt.",
        'pinyin': 'え～っ！？けがしなくてよかったね',
        'definition': 'え っ ケガ しなく て よかった ね',
        'pinyinSpace': 'え ～ っ ！？ ケガ しなく て よかった ね'
    },
    '19': {
        'character': 'それでダイエット？',
        'letter': "Is that why you're on a diet?",
        'pinyin': 'それでだいえっと？',
        'definition': 'それで ダイエット',
        'pinyinSpace': 'それで ダイエット ？'
    },
    '20': {
        'character': 'まぁ昔から',
        'letter': 'Well, for a long time.',
        'pinyin': 'まぁむかしから',
        'definition': 'まぁ 昔 から',
        'pinyinSpace': 'まぁ むかし から'
    },
    '21': {
        'character': 'スマートな動物に生まれたかったなって思ってたんだよ',
        'letter': 'I always wanted to be born a smart animal.',
        'pinyin': 'すまーとなどうぶつにうまれたかったなっておもってたんだよ',
        'definition': 'スマート な 動物 に 生まれたかった なって 思ってた ん だ よ',
        'pinyinSpace': 'スマート な どうぶつ に うまれたかった なって おもってた ん だ よ'
    },
    '22': {
        'character': 'スタイル気になるの？',
        'letter': 'Are you worried about your style?',
        'pinyin': 'すたいるきになるの？',
        'definition': 'スタイル 気になる の',
        'pinyinSpace': 'スタイル きになる の ？'
    },
    '23': {
        'character': 'うんだって…',
        'letter': 'Well...',
        'pinyin': 'うんだって…',
        'definition': 'うん だって',
        'pinyinSpace': 'うん だって …'
    },
    '24': {
        'character': '生まれたときからおっさん体型なんだもん',
        'letter': "I've been an old man since birth.",
        'pinyin': 'うまれたときからおっさんたいけいなんだもん',
        'definition': '生まれた とき から おっさん 体型 な ん だ もん',
        'pinyinSpace': 'うまれた とき から おっさん たいけい な ん だ もん'
    },
    '25': {
        'character': 'どうなりたいの？',
        'letter': 'What do you want to be?',
        'pinyin': 'どうなりたいの？',
        'definition': 'どう なりたい の',
        'pinyinSpace': 'どう なりたい の ？'
    },
    '26': {
        'character': '僕の理想はね…',
        'letter': 'My ideal would be...',
        'pinyin': 'ぼくのりそうはね…',
        'definition': '僕 の 理想 は ね',
        'pinyinSpace': 'ぼく の りそう は ね …'
    },
    '27': {
        'character': 'もっと脚が長くて',
        'letter': 'Longer legs.',
        'pinyin': 'もっとあしがながくて',
        'definition': 'もっと 脚 が 長くて',
        'pinyinSpace': 'もっと あし が ながくて'
    },
    '28': {
        'character': '逆三角形の体型で',
        'letter': 'Inverted triangle.',
        'pinyin': 'ぎゃくさんかくけいのたいけいで',
        'definition': '逆三角形 の 体型 で',
        'pinyinSpace': 'ぎゃくさんかくけい の たいけい で'
    },
    '29': {
        'character': '顔も逆三角形なの',
        'letter': 'And an inverted triangle face.',
        'pinyin': 'かおもぎゃくさんかくけいなの',
        'definition': '顔 も 逆三角形 なの',
        'pinyinSpace': 'かお も ぎゃくさんかくけい なの'
    },
    '30': {
        'character': 'ドリームパンダハハハハハ！',
        'letter': 'Dream panda hahahahahaha!',
        'pinyin': 'どりーむぱんだははははは！',
        'definition': 'ドリーム パンダ ハハハ ハハ',
        'pinyinSpace': 'ドリーム パンダ ハハハ ハハ ！'
    },
    '31': {
        'character': 'それかっこいいの？',
        'letter': 'Is that cool?',
        'pinyin': 'それかっこいいの？',
        'definition': 'それ かっこいい の',
        'pinyinSpace': 'それ かっこいい の ？'
    },
    '32': {
        'character': 'パンダくん悪いヤツみたいになっちゃうね',
        'letter': 'Panda, you look like a bad guy.',
        'pinyin': 'ぱんだくんわるいやつみたいになっちゃうね',
        'definition': 'パンダ くん 悪い ヤツ みたい に なっちゃう ね',
        'pinyinSpace': 'パンダ くん わるい ヤツ みたい に なっちゃう ね'
    },
    '33': {
        'character': 'いいの僕ワルに憧れてるから',
        'letter': "That's okay, I've always wanted to be a badass.",
        'pinyin': 'いいのぼくわるにあこがれてるから',
        'definition': 'いい の 僕 ワル に 憧れてる から',
        'pinyinSpace': 'いい の ぼく ワル に あこがれてる から'
    },
    '34': {
        'character': 'お待たせ',
        'letter': 'Here you go.',
        'pinyin': 'おまたせ',
        'definition': 'お 待たせ',
        'pinyinSpace': 'お またせ'
    },
    '35': {
        'character': 'はい普通盛りね',
        'letter': 'Here you go.',
        'pinyin': 'はいふつうもりね',
        'definition': 'はい 普通盛り ね',
        'pinyinSpace': 'はい ふつうもり ね'
    },
    '36': {
        'character': 'やっぱりいつもので',
        'letter': 'I knew it! I always get a large!',
        'pinyin': 'やっぱりいつもので',
        'definition': 'やっぱり いつも ので',
        'pinyinSpace': 'やっぱり いつも ので'
    },
    '37': {
        'character': '大盛りね',
        'letter': "I'll have a large.",
        'pinyin': 'おおもりね',
        'definition': '大盛り ね',
        'pinyinSpace': 'おおもり ね'
    },
    '38': {
        'character': 'ダイエットは？',
        'letter': 'What about your diet?',
        'pinyin': 'だいえっとは？',
        'definition': 'ダイエット は',
        'pinyinSpace': 'ダイエット は ？'
    },
    '39': {
        'character': '明日からにするよ',
        'letter': "I'll start tomorrow.",
        'pinyin': 'あしたからにするよ',
        'definition': '明日 からにする よ',
        'pinyinSpace': 'あした からにする よ'
    },
    '40': {
        'character': 'パンダさん！',
        'letter': 'Panda!',
        'pinyin': 'ぱんださん！',
        'definition': 'パンダ さん',
        'pinyinSpace': 'パンダ さん ！'
    },
    '41': {
        'character': 'エビドリア！',
        'letter': 'Shrimp doria!',
        'pinyin': 'えびどりあ！',
        'definition': 'エビ ドリア',
        'pinyinSpace': 'エビ ドリア ！'
    },
    '42': {
        'character': 'パンダくん起きなさい！',
        'letter': 'Wake up, panda!',
        'pinyin': 'ぱんだくんおきなさい！',
        'definition': 'パンダ くん 起きなさい',
        'pinyinSpace': 'パンダ くん おきなさい ！'
    },
    '43': {
        'character': 'たった週２回のバイトなのに',
        'letter': "I'm only working two jobs a week.",
        'pinyin': 'たったしゅう２かいのばいとなのに',
        'definition': 'たった 週 ２回 の バイト な のに',
        'pinyinSpace': 'たった しゅう にかい の バイト な のに'
    },
    '44': {
        'character': '朝から居眠りしないでよ',
        'letter': "Don't doze off in the morning.",
        'pinyin': 'あさからいねむりしないでよ',
        'definition': '朝 から 居眠りしないで よ',
        'pinyinSpace': 'あさ から いねむり しないで よ'
    },
    '45': {
        'character': 'はいパンダだんご',
        'letter': 'Here you go, panda dumplings.',
        'pinyin': 'はいぱんだだんご',
        'definition': 'はい パンダ だんご',
        'pinyinSpace': 'はい パンダ だんご'
    },
    '46': {
        'character': 'いらない',
        'letter': "I don't want it.",
        'pinyin': 'いらない',
        'definition': 'いらない',
        'pinyinSpace': 'いらない'
    },
    '47': {
        'character': 'えっ！？どうして？',
        'letter': 'What? Why not?',
        'pinyin': 'えっ！？どうして？',
        'definition': 'え っ どうして',
        'pinyinSpace': 'え っ ！？ どうして ？'
    },
    '48': {
        'character': '今日からダイエットするの',
        'letter': "I'm going on a diet today.",
        'pinyin': 'きょうからだいえっとするの',
        'definition': '今日 から ダイエットする の',
        'pinyinSpace': 'きょう から ダイエット する の'
    },
    '49': {
        'character': 'ダイエット！？',
        'letter': 'Diet?',
        'pinyin': 'だいえっと！？',
        'definition': 'ダイエット',
        'pinyinSpace': 'ダイエット ！？'
    },
    '50': {
        'character': 'へぇ…私なんかすっかりメタボだけど',
        'letter': "Well...I'm a metabolic syndrome person, but...",
        'pinyin': 'へぇ…わたしなんかすっかりめたぼだけど',
        'definition': 'へぇ 私 なんか すっかり メタボ だけど',
        'pinyinSpace': 'へぇ … わたし なんか すっかり メタボ だけど'
    },
    '51': {
        'character': 'なんにもしてないな',
        'letter': "I haven't done anything.",
        'pinyin': 'なんにもしてないな',
        'definition': 'なんにも してない な',
        'pinyinSpace': 'なんにも してない な'
    },
    '52': {
        'character': '昨日はすべり台を壊しちゃったしさ…',
        'letter': 'I broke the slide yesterday...',
        'pinyin': 'きのうはすべりだいをこわしちゃったしさ…',
        'definition': '昨日 は すべり台 を 壊しちゃった し さ',
        'pinyinSpace': 'きのう は すべりだい を こわしちゃった し さ …'
    },
    '53': {
        'character': 'ごめんごめん',
        'letter': 'Sorry, sorry.',
        'pinyin': 'ごめんごめん',
        'definition': 'ごめん ごめん',
        'pinyinSpace': 'ごめん ごめん'
    },
    '54': {
        'character': 'あれは柱がシロアリに食われてたからで',
        'letter': 'That was because the pillars were eaten by termites.',
        'pinyin': 'あれははしらがしろありにくわれてたからで',
        'definition': 'あれ は 柱 が シロアリ に 食われてた から で',
        'pinyinSpace': 'あれ は はしら が シロアリ に くわれてた から で'
    },
    '55': {
        'character': 'パンダくんのせいじゃないから',
        'letter': "It's not your fault.",
        'pinyin': 'ぱんだくんのせいじゃないから',
        'definition': 'パンダ くん の せい じゃない から',
        'pinyinSpace': 'パンダ くん の せい じゃない から'
    },
    '56': {
        'character': 'それにまだ若いのにおっさん体型だし…',
        'letter': "And you're still young, but you're an old man...",
        'pinyin': 'それにまだわかいのにおっさんたいけいだし…',
        'definition': 'それに まだ 若い のに おっさん 体型 だ し',
        'pinyinSpace': 'それに まだ わかい のに おっさん たいけい だ し …'
    },
    '57': {
        'character': 'でもそれが自然なパンダだし',
        'letter': "But he's a natural panda.",
        'pinyin': 'でもそれがしぜんなぱんだだし',
        'definition': 'でも それ が 自然 な パンダ だ し',
        'pinyinSpace': 'でも それ が しぜん な パンダ だ し'
    },
    '58': {
        'character': 'そもそもパンダの名前の由来を知らないの？',
        'letter': "You don't know where the name 'panda' comes from?",
        'pinyin': 'そもそもぱんだのなまえのゆらいをしらないの？',
        'definition': 'そもそも パンダ の 名前 の 由来 を 知らない の',
        'pinyinSpace': 'そもそも パンダ の なまえ の ゆらい を しらない の ？'
    },
    '59': {
        'character': 'えっ何？かわいいとか？',
        'letter': 'What? Cute?',
        'pinyin': 'えっなに？かわいいとか？',
        'definition': 'え っ 何 かわいい とか',
        'pinyinSpace': 'え っ なに/なん ？ かわいい とか ？'
    },
    '60': {
        'character': 'まぁいろんな説があるんだけどさそのうちの一つは…',
        'letter': 'Well, there are many theories, but one of them is...',
        'pinyin': 'まぁいろんなせつがあるんだけどさそのうちのひとつは…',
        'definition': 'まぁ いろんな 説 が ある ん だけど さ そのうち の 一つ は',
        'pinyinSpace': 'まぁ いろんな せつ が ある ん だけど さ そのうち の ひとつ は …'
    },
    '61': {
        'character': 'むか～しむかし',
        'letter': 'Once upon a time...',
        'pinyin': 'むか～しむかし',
        'definition': 'む か し むかし',
        'pinyinSpace': 'む か ～ し むかし'
    },
    '62': {
        'character': '外国人が中国を探検していたときのこと…',
        'letter': 'A long time ago, when foreigners were exploring China...',
        'pinyin': 'がいこくじんがちゅうごくをたんけんしていたときのこと…',
        'definition': '外国人 が 中国 を 探検していた と きのこ と',
        'pinyinSpace': 'がいこくじん が ちゅうごく を たんけん していた と きのこ と …'
    },
    '63': {
        'character': 'ワオ！',
        'letter': 'Wow!',
        'pinyin': 'わお！',
        'definition': 'ワオ',
        'pinyinSpace': 'ワオ ！'
    },
    '64': {
        'character': 'あ～パンダ…',
        'letter': 'Panda...',
        'pinyin': 'あ～ぱんだ…',
        'definition': 'あ パンダ',
        'pinyinSpace': 'あ ～ パンダ …'
    },
    '65': {
        'character': 'こうして中国語の「太った」という意味のパンダが',
        'letter': "And so the name 'panda,' which means 'fat' in Chinese...",
        'pinyin': 'こうしてちゅうごくごの「ふとった」といういみのぱんだが',
        'definition': 'こうして 中国語 の 太った という 意味 の パンダ が',
        'pinyinSpace': 'こうして ちゅうごくご の 「 ふとった 」 という いみ の パンダ が'
    },
    '66': {
        'character': '名前として広まったという説があるんだ',
        'letter': 'as the name of a panda.',
        'pinyin': 'なまえとしてひろまったというせつがあるんだ',
        'definition': '名前 として 広まった という 説 が ある ん だ',
        'pinyinSpace': 'なまえ として ひろまった という せつ が ある ん だ'
    },
    '67': {
        'character': 'じゃあ僕って…',
        'letter': "So I'm a...",
        'pinyin': 'じゃあぼくって…',
        'definition': 'じゃあ 僕 って',
        'pinyinSpace': 'じゃあ ぼく って …'
    },
    '68': {
        'character': 'パンダパンダ',
        'letter': 'Panda-panda.',
        'pinyin': 'ぱんだぱんだ',
        'definition': 'パンダ パンダ',
        'pinyinSpace': 'パンダ パンダ'
    },
    '69': {
        'character': 'メタボーメタボー',
        'letter': 'Metabo, metabo, metabo...',
        'pinyin': 'めたぼーめたぼー',
        'definition': 'メタ ボー メタ ボー',
        'pinyinSpace': 'メタ ボー メタ ボー'
    },
    '70': {
        'character': 'なんかすごくへこんできた…',
        'letter': 'I feel so depressed...',
        'pinyin': 'なんかすごくへこんできた…',
        'definition': 'なんか すごく へこんできた',
        'pinyinSpace': 'なんか すごく へこんできた …'
    },
    '71': {
        'character': '世の中には知らないほうが幸せなこともあるよね',
        'letter': "There are some things in this world you're better off not knowing.",
        'pinyin': 'よのなかにはしらないほうがしあわせなこともあるよね',
        'definition': '世の中 には 知らない ほう が 幸せ な こと も ある よね',
        'pinyinSpace': 'よのなか には しらない ほう が しあわせ な こと も ある よね'
    },
    '72': {
        'character': 'バイトのせいだよ',
        'letter': "It's because of my part-time job.",
        'pinyin': 'ばいとのせいだよ',
        'definition': 'バイト の せい だ よ',
        'pinyinSpace': 'バイト の せい だ よ'
    },
    '73': {
        'character': '超ヒマで',
        'letter': "I'm super busy.",
        'pinyin': 'ちょうひまで',
        'definition': '超 ヒマ で',
        'pinyinSpace': 'ちょう ヒマ で'
    },
    '74': {
        'character': 'おやつを食べてお昼寝するしかないから太っちゃったんだ',
        'letter': "I've gained weight because I have to eat snacks and take naps.",
        'pinyin': 'おやつをたべておひるねするしかないからふとっちゃったんだ',
        'definition': 'おやつ を 食べて お 昼寝する しかない から 太っちゃった ん だ',
        'pinyinSpace': 'おやつ を たべて お ひるね する しかない から ふとっちゃった ん だ'
    },
    '75': {
        'character': 'ヒマじゃないでしょう！',
        'letter': "You're not busy!",
        'pinyin': 'ひまじゃないでしょう！',
        'definition': 'ヒマ じゃないでしょう',
        'pinyinSpace': 'ヒマ じゃない でしょう ！'
    },
    '76': {
        'character': 'ちゃんとお客さんにサービスしなさい！',
        'letter': "You're supposed to be serving the customers!",
        'pinyin': 'ちゃんとおきゃくさんにさーびすしなさい！',
        'definition': 'ちゃんと お客さん に サービスしなさい',
        'pinyinSpace': 'ちゃんと おきゃくさん に サービス しなさい ！'
    },
    '77': {
        'character': 'なんか最近マンネリでさ…',
        'letter': "I've been in a rut lately...",
        'pinyin': 'なんかさいきんまんねりでさ…',
        'definition': 'なんか 最近 マンネリ で さ',
        'pinyinSpace': 'なんか さいきん マンネリ で さ …'
    },
    '78': {
        'character': 'タイヤやすべり台で遊ぶのも飽きちゃって…',
        'letter': "I'm tired of playing with tires and slides...",
        'pinyin': 'たいややすべりだいであそぶのもあきちゃって…',
        'definition': 'タイヤ や すべり台 で 遊ぶ の も 飽きちゃって',
        'pinyinSpace': 'タイヤ や すべりだい で あそぶ の も あきちゃって …'
    },
    '79': {
        'character': 'お仕事でしょ！',
        'letter': "You're working!",
        'pinyin': 'おしごとでしょ！',
        'definition': 'お仕事 でしょ',
        'pinyinSpace': 'おしごと でしょ ！'
    },
    '80': {
        'character': 'ねぇフィットネスゲーム持ってきていい？',
        'letter': 'Hey, can I bring my fitness game?',
        'pinyin': 'ねぇふぃっとねすげーむもってきていい？',
        'definition': 'ねぇ フィットネス ゲーム 持ってきていい',
        'pinyinSpace': 'ねぇ フィットネス ゲーム もってきて いい ？'
    },
    '81': {
        'character': 'ダメ！',
        'letter': 'No!',
        'pinyin': 'だめ！',
        'definition': 'ダメ',
        'pinyinSpace': 'ダメ ！'
    },
    '82': {
        'character': 'ゲルマニウム温浴作ってよ',
        'letter': 'Make me a Germanium bath.',
        'pinyin': 'げるまにうむおんよくつくってよ',
        'definition': 'ゲルマニウム 温浴 作って よ',
        'pinyinSpace': 'ゲルマニウム おんよく つくって よ'
    },
    '83': {
        'character': 'ダメです！',
        'letter': 'No!',
        'pinyin': 'だめです！',
        'definition': 'ダメ です',
        'pinyinSpace': 'ダメ です ！'
    },
    '84': {
        'character': 'エアロビのお姉さんを呼ぼうよ',
        'letter': "Let's call the aerobics lady.",
        'pinyin': 'えあろびのおねえさんをよぼうよ',
        'definition': 'エアロビ の お姉さん を 呼ぼう よ',
        'pinyinSpace': 'エアロビ の おねえさん を よぼう よ'
    },
    '85': {
        'character': 'ダメだってば！',
        'letter': "No, you can't!",
        'pinyin': 'だめだってば！',
        'definition': 'ダメ だ ってば',
        'pinyinSpace': 'ダメ だ ってば ！'
    },
    '86': {
        'character': 'はぁ～あ…なんかきっかけさえあれば',
        'letter': 'If only there was some kind of a trigger...',
        'pinyin': 'はぁ～あ…なんかきっかけさえあれば',
        'definition': 'はぁ あ なんか きっかけ さえあれば',
        'pinyinSpace': 'はぁ ～ あ … なんか きっかけ さえあれば'
    },
    '87': {
        'character': 'もっとダイエットやる気になるのにな',
        'letter': "I'd be more motivated to lose weight.",
        'pinyin': 'もっとだいえっとやるきになるのにな',
        'definition': 'もっと ダイエット やる 気になる のに な',
        'pinyinSpace': 'もっと ダイエット やる きになる のに な'
    },
    '88': {
        'character': 'まぁダイエットしたいならしっかりとサービスに励みなさい',
        'letter': "Well, if you want to lose weight, make sure you're in the service.",
        'pinyin': 'まぁだいえっとしたいならしっかりとさーびすにはげみなさい',
        'definition': 'まぁ ダイエットしたい なら しっかり と サービス に 励みなさい',
        'pinyinSpace': 'まぁ ダイエット したい なら しっかり と サービス に はげみなさい'
    },
    '89': {
        'character': 'は～い任せて',
        'letter': "I'll take care of it.",
        'pinyin': 'は～いまかせて',
        'definition': 'は い 任せて',
        'pinyinSpace': 'は ～ い まかせて'
    },
    '90': {
        'character': '僕ってやればできる子だから',
        'letter': "I'm a can-do girl.",
        'pinyin': 'ぼくってやればできるこだから',
        'definition': '僕 って やればできる 子 だから',
        'pinyinSpace': 'ぼく って やればできる こ だ から'
    },
    '91': {
        'character': 'じゃあちゃんと頼むよ',
        'letter': 'Then take good care of me.',
        'pinyin': 'じゃあちゃんとたのむよ',
        'definition': 'じゃあ ちゃんと 頼む よ',
        'pinyinSpace': 'じゃあ ちゃんと たのむ よ'
    },
    '92': {
        'character': 'パンダさん起きて～！',
        'letter': 'Wake up, panda!',
        'pinyin': 'ぱんださんおきて～！',
        'definition': 'パンダ さん 起きて',
        'pinyinSpace': 'パンダ さん おきて ～！'
    },
    '93': {
        'character': 'パンダさんかわいい！',
        'letter': "Panda, you're so cute!",
        'pinyin': 'ぱんださんかわいい！',
        'definition': 'パンダ さん かわいい',
        'pinyinSpace': 'パンダ さん かわいい ！'
    },
    '94': {
        'character': 'サービスサービス！',
        'letter': 'Service, service, service!',
        'pinyin': 'さーびすさーびす！',
        'definition': 'サービス サービス',
        'pinyinSpace': 'サービス サービス ！'
    },
    '95': {
        'character': 'サービスサービス！',
        'letter': 'Service, service, service!',
        'pinyin': 'さーびすさーびす！',
        'definition': 'サービス サービス',
        'pinyinSpace': 'サービス サービス ！'
    },
    '96': {
        'character': 'かわいいって言われたときだけ反応するね',
        'letter': 'I only respond when you call me cute.',
        'pinyin': 'かわいいっていわれたときだけはんのうするね',
        'definition': 'かわいい って 言われた とき だけ 反応する ね',
        'pinyinSpace': 'かわいい って いわれた とき だけ はんのう する ね'
    },
    '97': {
        'character': 'サービスサービス！',
        'letter': 'Service, service, service!',
        'pinyin': 'さーびすさーびす！',
        'definition': 'サービス サービス',
        'pinyinSpace': 'サービス サービス ！'
    },
    '98': {
        'character': 'この下膨れ体型がかわいいんだよね',
        'letter': "I think he's cute with this bulging bottom.",
        'pinyin': 'このしもぶくれたいけいがかわいいんだよね',
        'definition': 'この 下膨れ 体型 が かわいい ん だよね',
        'pinyinSpace': 'この しもぶくれ たいけい が かわいい ん だよね'
    },
    '99': {
        'character': 'メタボパンダさんだね',
        'letter': "You're a metabolic panda, aren't you?",
        'pinyin': 'めたぼぱんださんだね',
        'definition': 'メタボ パンダ さん だ ね',
        'pinyinSpace': 'メタボ パンダ さん だ ね'
    },
    '100': {
        'character': '目指せドリームパンダ！',
        'letter': 'Aim for dream panda!',
        'pinyin': 'めざせどりーむぱんだ！',
        'definition': '目指せ ドリーム パンダ',
        'pinyinSpace': 'めざせ ドリーム パンダ ！'
    },
    '101': {
        'character': 'パパンダーパパンパンパパンダー',
        'letter': 'Papander panda panda panda panda panda',
        'pinyin': 'ぱぱんだーぱぱんぱんぱぱんだー',
        'definition': 'パパ ンダー パパ ン パンパ パンダ ー',
        'pinyinSpace': 'パパ ンダー パパ ン パンパ パンダ ー'
    },
    '102': {
        'character': 'パパンダーパンパンパンパパンダー',
        'letter': 'Papandapandapandapandapandapandapandapandapandapandapandapandapandapandapandap!',
        'pinyin': 'ぱぱんだーぱんぱんぱんぱぱんだー',
        'definition': 'パパ ンダー パンパン パンパ パンダ ー',
        'pinyinSpace': 'パパ ンダー パンパン パンパ パンダ ー'
    },
    '103': {
        'character': 'ダイエット！',
        'letter': 'Diet!',
        'pinyin': 'だいえっと！',
        'definition': 'ダイエット',
        'pinyinSpace': 'ダイエット ！'
    },
    '104': {
        'character': 'ダイエット',
        'letter': 'Diet!',
        'pinyin': 'だいえっと',
        'definition': 'ダイエット',
        'pinyinSpace': 'ダイエット'
    },
    '105': {
        'character': 'ダイエット…',
        'letter': 'Diet...',
        'pinyin': 'だいえっと…',
        'definition': 'ダイエット',
        'pinyinSpace': 'ダイエット …'
    },
    '106': {
        'character': 'パンダさ～ん！',
        'letter': 'Panda~!',
        'pinyin': 'ぱんださ～ん！',
        'definition': 'パンダ さ ん',
        'pinyinSpace': 'パンダ さ ～ ん ！'
    },
    '107': {
        'character': 'ダイエットダイエット！',
        'letter': 'Diet, diet, diet!',
        'pinyin': 'だいえっとだいえっと！',
        'definition': 'ダイエット ダイエット',
        'pinyinSpace': 'ダイエット ダイエット ！'
    },
    '108': {
        'character': 'ダイエットダイエット！',
        'letter': 'Diet, diet, diet!',
        'pinyin': 'だいえっとだいえっと！',
        'definition': 'ダイエット ダイエット',
        'pinyinSpace': 'ダイエット ダイエット ！'
    },
    '109': {
        'character': 'ダイエットダイエット！',
        'letter': 'Diet, diet, diet!',
        'pinyin': 'だいえっとだいえっと！',
        'definition': 'ダイエット ダイエット',
        'pinyinSpace': 'ダイエット ダイエット ！'
    },
    '110': {
        'character': '何だかドキドキするね',
        'letter': "I'm kind of nervous.",
        'pinyin': 'なんだかどきどきするね',
        'definition': '何だか ドキドキする ね',
        'pinyinSpace': 'なんだか ドキドキ する ね'
    },
    '111': {
        'character': '大丈夫だよ',
        'letter': "It's okay.",
        'pinyin': 'だいじょうぶだよ',
        'definition': '大丈夫 だ よ',
        'pinyinSpace': 'だいじょうぶ だ よ'
    },
    '112': {
        'character': 'ここんとこずっと頑張ってたんだから',
        'letter': "You've been working so hard these past few weeks.",
        'pinyin': 'ここんとこずっとがんばってたんだから',
        'definition': 'ここんとこ ずっと 頑張って たん だから',
        'pinyinSpace': 'ここんとこ ずっと がんばって たん だ·から'
    },
    '113': {
        'character': '目標とりあえず１３０キロ',
        'letter': 'My goal is 130 pounds for now.',
        'pinyin': 'もくひょうとりあえず１３０きろ',
        'definition': '目標 とりあえず １３０キロ',
        'pinyinSpace': 'もくひょう とりあえず ひゃくさんじゅっキロ'
    },
    '114': {
        'character': 'やった！',
        'letter': 'Yes!',
        'pinyin': 'やった！',
        'definition': 'やった',
        'pinyinSpace': 'やった ！'
    },
    '115': {
        'character': 'おめでとうダイエット成功だね',
        'letter': 'Congrats on the diet!',
        'pinyin': 'おめでとうだいえっとせいこうだね',
        'definition': 'おめでとう ダイエット 成功 だ ね',
        'pinyinSpace': 'おめでとう ダイエット せいこう だ ね'
    },
    '116': {
        'character': '僕もっと頑張ってスリムなドリームパンダになるよ',
        'letter': "I'm going to work even harder to become a slim dream panda!",
        'pinyin': 'ぼくもっとがんばってすりむなどりーむぱんだになるよ',
        'definition': '僕 もっと 頑張って スリム な ドリーム パンダ に なる よ',
        'pinyinSpace': 'ぼく もっと がんばって スリム な ドリーム パンダ に なる よ'
    },
    '117': {
        'character': 'いや～そこまでしなくていいから',
        'letter': "No, you don't have to go that far.",
        'pinyin': 'いや～そこまでしなくていいから',
        'definition': 'いや そこまで しなくていい から',
        'pinyinSpace': 'いや ～ そこまで しなくて いい から'
    },
    '118': {
        'character': '頑張ったパンダくんにご褒美があるよ',
        'letter': "There's a reward for your hard work, panda!",
        'pinyin': 'がんばったぱんだくんにごほうびがあるよ',
        'definition': '頑張った パンダ くん に ご褒美 が ある よ',
        'pinyinSpace': 'がんばった パンダ くん に ごほうび が ある よ'
    },
    '119': {
        'character': 'えっ何？',
        'letter': 'What?',
        'pinyin': 'えっなに？',
        'definition': 'え っ 何',
        'pinyinSpace': 'え っ なに/なん ？'
    },
    '120': {
        'character': '楽しく滑れるように工夫してみたんだ',
        'letter': "I've made it fun for you.",
        'pinyin': 'たのしくすべれるようにくふうしてみたんだ',
        'definition': '楽しく 滑れる ように 工夫して みた ん だ',
        'pinyinSpace': 'たのしく すべれる ように くふう して みた ん だ'
    },
    '121': {
        'character': 'パンダくんがマンネリって言ってたからね',
        'letter': 'You said you were in a rut.',
        'pinyin': 'ぱんだくんがまんねりっていってたからね',
        'definition': 'パンダ くん が マンネリ って 言ってた から ね',
        'pinyinSpace': 'パンダ くん が マンネリ って いってた から ね'
    },
    '122': {
        'character': '半田さんありがとう',
        'letter': 'Thank you, Mr. Handa.',
        'pinyin': 'はんでんさんありがとう',
        'definition': '半田 さん ありがとう',
        'pinyinSpace': 'はんだ さん ありがとう'
    },
    '123': {
        'character': '待ってたよ一緒に初滑りしよう',
        'letter': "I've been waiting for you... let's go skiing together for the first time!",
        'pinyin': 'まってたよいっしょにはつすべりしよう',
        'definition': '待ってた よ 一緒に 初滑り しよう',
        'pinyinSpace': 'まってた よ いっしょに はつすべり しよう'
    },
    '124': {
        'character': 'うん！',
        'letter': 'Yeah!',
        'pinyin': 'うん！',
        'definition': 'うん',
        'pinyinSpace': 'うん ！'
    },
    '125': {
        'character': 'ワーイ！',
        'letter': 'Yay!',
        'pinyin': 'わーい！',
        'definition': 'ワーイ',
        'pinyinSpace': 'ワーイ ！'
    },
    '126': {
        'character': 'ワーイ！',
        'letter': 'Yay!',
        'pinyin': 'わーい！',
        'definition': 'ワーイ',
        'pinyinSpace': 'ワーイ ！'
    },
    '127': {
        'character': 'あっ！どうしたんですか？',
        'letter': "Oh! What's wrong?",
        'pinyin': 'あっ！どうしたんですか？',
        'definition': 'あっ どうしたん です か',
        'pinyinSpace': 'あっ ！ どうしたん です か ？'
    },
    '128': {
        'character': 'あいや…お腹がつっかえて…',
        'letter': 'Oh, no... just a little tummy ache...',
        'pinyin': 'あいや…おなかがつっかえて…',
        'definition': 'あい や お腹 が つっかえて',
        'pinyinSpace': 'あい や … おなか が つっかえて …'
    },
    '129': {
        'character': '常勤パンダさんメタボ',
        'letter': 'Full-time panda, metabolic syndrome.',
        'pinyin': 'じょうきんぱんださんめたぼ',
        'definition': '常勤 パンダ さん メタボ',
        'pinyinSpace': 'じょうきん パンダ さん メタボ'
    },
    '130': {
        'character': 'ハァー作り直しかな…',
        'letter': "I'll have to remake it...",
        'pinyin': 'はぁーつくりなおしかな…',
        'definition': 'ハァー 作り直し かな',
        'pinyinSpace': 'ハァー つくりなおし かな …'
    },
    '131': {
        'character': '目指せ！ワイルドパンダ',
        'letter': 'Go for it! Wild Panda',
        'pinyin': 'めざせ！わいるどぱんだ',
        'definition': '目指せ ワイルド パンダ',
        'pinyinSpace': 'めざせ ！ ワイルド パンダ'
    },
    '132': {
        'character': 'いらっしゃい',
        'letter': 'Hello, there...',
        'pinyin': 'いらっしゃい',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '133': {
        'character': 'こんにちは',
        'letter': 'Hello.',
        'pinyin': 'こんにちは',
        'definition': 'こんにちは',
        'pinyinSpace': 'こんにちは'
    },
    '134': {
        'character': '何してるのパンダくん',
        'letter': 'What are you doing, panda?',
        'pinyin': 'なにしてるのぱんだくん',
        'definition': '何 してる の パンダ くん',
        'pinyinSpace': 'なに してる の パンダ くん'
    },
    '135': {
        'character': 'どうしたのその格好',
        'letter': "What's with the outfit?",
        'pinyin': 'どうしたのそのかっこう',
        'definition': 'どうしたの その 格好',
        'pinyinSpace': 'どうしたの その かっこう'
    },
    '136': {
        'character': '悪いヤツな気分になってみたくて',
        'letter': "I'm just trying to feel like a badass.",
        'pinyin': 'わるいやつなきぶんになってみたくて',
        'definition': '悪い ヤツ な 気分 に なって みたくて',
        'pinyinSpace': 'わるい ヤツ な きぶん に なって みたくて'
    },
    '137': {
        'character': 'ワルな人って憧れちゃうな',
        'letter': "I've always wanted to be a badass.",
        'pinyin': 'わるなひとってあこがれちゃうな',
        'definition': 'ワル な 人 って 憧れちゃう な',
        'pinyinSpace': 'ワル な じん/ひと/にん って あこがれちゃう な'
    },
    '138': {
        'character': 'パンダくんいつもの？',
        'letter': 'Panda, is that your usual?',
        'pinyin': 'ぱんだくんいつもの？',
        'definition': 'パンダ くん いつも の',
        'pinyinSpace': 'パンダ くん いつも の ？'
    },
    '139': {
        'character': 'うんあいやストロングコーヒー',
        'letter': "No, it's strong coffee.",
        'pinyin': 'うんあいやすとろんぐこーひー',
        'definition': 'うん あい や ストロング コーヒー',
        'pinyinSpace': 'うん あい や ストロング コーヒー'
    },
    '140': {
        'character': 'えっストロング？結構苦いよ',
        'letter': "Strong coffee? It's pretty bitter.",
        'pinyin': 'えっすとろんぐ？けっこうにがいよ',
        'definition': 'え っスト ロング 結構 苦い よ',
        'pinyinSpace': 'え っスト ロング ？ けっこう にがい よ'
    },
    '141': {
        'character': '今日はワルの気分だから',
        'letter': "I'm feeling badass today.",
        'pinyin': 'きょうはわるのきぶんだから',
        'definition': '今日 は ワル の 気分 だから',
        'pinyinSpace': 'きょう は ワル の きぶん だ から'
    },
    '142': {
        'character': 'はいストロング',
        'letter': 'Here you go, Strong.',
        'pinyin': 'はいすとろんぐ',
        'definition': 'はい ストロング',
        'pinyinSpace': 'はい ストロング'
    },
    '143': {
        'character': 'いただきます',
        'letter': 'Bon appétit!',
        'pinyin': 'いただきます',
        'definition': 'いただきます',
        'pinyinSpace': 'いただきます'
    },
    '144': {
        'character': '外せば',
        'letter': 'Take it off.',
        'pinyin': 'はずせば',
        'definition': '外せば',
        'pinyinSpace': 'はずせば'
    },
    '145': {
        'character': 'ねぇワルのどこに憧れたの？',
        'letter': 'What is it about being a badass that you admire so much?',
        'pinyin': 'ねぇわるのどこにあこがれたの？',
        'definition': 'ねぇ ワル の どこ に 憧れた の',
        'pinyinSpace': 'ねぇ ワル の どこ に あこがれた の ？'
    },
    '146': {
        'character': 'ほら僕って優柔不断だから',
        'letter': "Well, I'm indecisive.",
        'pinyin': 'ほらぼくってゆうじゅうふだんだから',
        'definition': 'ほら 僕 って 優柔不断 だから',
        'pinyinSpace': 'ほら ぼく って ゆうじゅうふだん だ から'
    },
    '147': {
        'character': '強気な人が羨ましくって',
        'letter': 'I envy people who can be tough.',
        'pinyin': 'つよきなひとがうらやましくって',
        'definition': '強気 な 人 が 羨ましく って',
        'pinyinSpace': 'つよき な ひと が うらやましく って'
    },
    '148': {
        'character': 'それワルとは関係ないでしょ',
        'letter': 'That has nothing to do with being a badass.',
        'pinyin': 'それわるとはかんけいないでしょ',
        'definition': 'それ ワル とは 関係 ないでしょ',
        'pinyinSpace': 'それ ワル と·は かんけい ない でしょ'
    },
    '149': {
        'character': 'えっそう？',
        'letter': 'Oh, really?',
        'pinyin': 'えっそう？',
        'definition': 'えっそう',
        'pinyinSpace': 'えっそう ？'
    },
    '150': {
        'character': '僕に足りないのはワイルドさだと思うんだ',
        'letter': 'I think what I lack is wildness.',
        'pinyin': 'ぼくにたりないのはわいるどさだとおもうんだ',
        'definition': '僕 に 足りない の は ワイルドさ だ と 思う ん だ',
        'pinyinSpace': 'ぼく に たりない の は ワイルドさ だ と おもう ん だ'
    },
    '151': {
        'character': 'ワイルドねぇ…',
        'letter': 'Wild...',
        'pinyin': 'わいるどねぇ…',
        'definition': 'ワイルド ねぇ',
        'pinyinSpace': 'ワイルド ねぇ …'
    },
    '152': {
        'character': 'うわ～苦っ！',
        'letter': "Wow, that's bitter!",
        'pinyin': 'うわ～くっ！',
        'definition': 'うわ 苦 っ',
        'pinyinSpace': 'うわ ～ にが/く っ ！'
    },
    '153': {
        'character': 'やっぱり…',
        'letter': 'I knew it...',
        'pinyin': 'やっぱり…',
        'definition': 'やっぱり',
        'pinyinSpace': 'やっぱり …'
    },
    '154': {
        'character': 'マイルドなコーヒーね',
        'letter': 'Mild coffee.',
        'pinyin': 'まいるどなこーひーね',
        'definition': 'マイルド な コーヒー ね',
        'pinyinSpace': 'マイルド な コーヒー ね'
    },
    '155': {
        'character': 'いろいろビデオを見てワイルドなイメージを膨らませてみたの',
        'letter': "I've been watching a lot of videos and trying to develop a wild image of it.",
        'pinyin': 'いろいろびでおをみてわいるどないめーじをふくらませてみたの',
        'definition': 'いろいろ ビデオ を 見て ワイルド な イメージ を 膨らませて みた の',
        'pinyinSpace': 'いろいろ ビデオ を みて ワイルド な イメージ を ふくらませて みた の'
    },
    '156': {
        'character': 'ビデオ？',
        'letter': 'Videos?',
        'pinyin': 'びでお？',
        'definition': 'ビデオ',
        'pinyinSpace': 'ビデオ ？'
    },
    '157': {
        'character': 'うんとね…',
        'letter': 'Yeah...',
        'pinyin': 'うんとね…',
        'definition': 'うんと ね',
        'pinyinSpace': 'うんと ね …'
    },
    '158': {
        'character': 'グフッグフフフッ…',
        'letter': 'Guffaw...',
        'pinyin': 'ぐふっぐふふふっ…',
        'definition': 'グフッグ フフフ ッ',
        'pinyinSpace': 'グフッグ フフフ ッ …'
    },
    '159': {
        'character': '山吹色のお菓子でございます',
        'letter': "It's a wild yellow candy.",
        'pinyin': 'やまぶきいろのおかしでございます',
        'definition': '山吹色 の お菓子 でございます',
        'pinyinSpace': 'やまぶきいろ の おかし でございます'
    },
    '160': {
        'character': '越後屋お主もワルよのう',
        'letter': "Echigoya, you're a bad boy too.",
        'pinyin': 'えちごやおぬしもわるよのう',
        'definition': '越後 屋 お 主 も ワル よ のう',
        'pinyinSpace': 'えちご や/おく お おも/しゅ/ぬし/あるじ も ワル よ のう'
    },
    '161': {
        'character': 'ノーノー！',
        'letter': 'No no no!',
        'pinyin': 'のーのー！',
        'definition': 'ノーノー',
        'pinyinSpace': 'ノーノー ！'
    },
    '162': {
        'character': '微妙にズレてない？それ',
        'letter': "Aren't you slightly off? That...",
        'pinyin': 'びみょうにずれてない？それ',
        'definition': '微妙 に ズレてない それ',
        'pinyinSpace': 'びみょう に ズレてない ？ それ'
    },
    '163': {
        'character': 'イマイチ強気でワイルドなイメージがつかめなくて',
        'letter': "I can't quite grasp the image of him being tough and wild.",
        'pinyin': 'いまいちつよきでわいるどないめーじがつかめなくて',
        'definition': 'イマイチ 強気 で ワイルド な イメージ が つかめなくて',
        'pinyinSpace': 'イマイチ つよき で ワイルド な イメージ が つかめなくて'
    },
    '164': {
        'character': '強気でワイルドですか',
        'letter': 'Bullish and wild?',
        'pinyin': 'つよきでわいるどですか',
        'definition': '強気 で ワイルド です か',
        'pinyinSpace': 'つよき で ワイルド です か'
    },
    '165': {
        'character': 'グリズリーくんとかそうかも',
        'letter': 'Like a grizzly bear, maybe.',
        'pinyin': 'ぐりずりーくんとかそうかも',
        'definition': 'グリズリー くん とか そうか も',
        'pinyinSpace': 'グリズリー くん とか そうか も'
    },
    '166': {
        'character': 'えっ誰？誰？',
        'letter': 'Who? Who?',
        'pinyin': 'えっだれ？だれ？',
        'definition': 'え っ 誰 誰',
        'pinyinSpace': 'え っ だれ ？ だれ ？'
    },
    '167': {
        'character': 'お店やってるから夜行ってみる？',
        'letter': 'He runs a store. You want to go there at night?',
        'pinyin': 'おみせやってるからよるいってみる？',
        'definition': 'お店 やってる から 夜行 って みる',
        'pinyinSpace': 'おみせ やってる から やこう って みる ？'
    },
    '168': {
        'character': 'グリズリーさんのお店ってこの辺りなの？',
        'letter': "Is Mr. Grizzly's store around here?",
        'pinyin': 'ぐりずりーさんのおみせってこのあたりなの？',
        'definition': 'グリズリー さん の お店 って この辺り なの',
        'pinyinSpace': 'グリズリー さん の おみせ って このあたり なの ？'
    },
    '169': {
        'character': 'いやもっと先',
        'letter': "No, it's a little further.",
        'pinyin': 'いやもっとさき',
        'definition': 'いや もっと 先',
        'pinyinSpace': 'いや もっと さき'
    },
    '170': {
        'character': 'ここを抜けるとすぐそこ',
        'letter': "It's right through here.",
        'pinyin': 'ここをぬけるとすぐそこ',
        'definition': 'ここ を 抜ける と すぐそこ',
        'pinyinSpace': 'ここ を ぬける と すぐそこ'
    },
    '171': {
        'character': '着いたよここね',
        'letter': 'There we are.',
        'pinyin': 'ついたよここね',
        'definition': '着いた よ ここ ね',
        'pinyinSpace': 'ついた よ ここ ね'
    },
    '172': {
        'character': 'パンダくんこっちこっち',
        'letter': 'Here we are. Come on, panda, come on.',
        'pinyin': 'ぱんだくんこっちこっち',
        'definition': 'パンダ くん こっち こっち',
        'pinyinSpace': 'パンダ くん こっち こっち'
    },
    '173': {
        'character': '確かにワイルドなお店だね',
        'letter': 'This sure is a wild place.',
        'pinyin': 'たしかにわいるどなおみせだね',
        'definition': '確かに ワイルド な お店 だ ね',
        'pinyinSpace': 'たしかに ワイルド な おみせ だ ね'
    },
    '174': {
        'character': '猛獣館って感じ？',
        'letter': "It's like a menagerie.",
        'pinyin': 'もうじゅうかんってかんじ？',
        'definition': '猛獣 館 って 感じ',
        'pinyinSpace': 'もうじゅう やかた/かん って かんじ ？'
    },
    '175': {
        'character': 'こんばんはグリズリーくん',
        'letter': 'Good evening, grizzly.',
        'pinyin': 'こんばんはぐりずりーくん',
        'definition': 'こんばんは グリズリー くん',
        'pinyinSpace': 'こんばんは グリズリー くん'
    },
    '176': {
        'character': 'よおシロクマ久しぶりじゃねえか',
        'letter': "Hey, polar bear. It's been a long time.",
        'pinyin': 'よおしろくまひさしぶりじゃねえか',
        'definition': 'よ お シロクマ 久しぶり じゃねえ か',
        'pinyinSpace': 'よ お シロクマ ひさしぶり じゃねえ か'
    },
    '177': {
        'character': '本当にワイルドだ…',
        'letter': "He's really wild...",
        'pinyin': 'ほんとうにわいるどだ…',
        'definition': '本当に ワイルド だ',
        'pinyinSpace': 'ほんとうに ワイルド だ …'
    },
    '178': {
        'character': '相変わらずなまっちろい野郎だぜこのシロクマ野郎',
        'letter': "You're still the same old lazy bastard, you polar bear.",
        'pinyin': 'あいかわらずなまっちろいやろうだぜこのしろくまやろう',
        'definition': '相変わらず なまっちろい 野郎 だ ぜ この シロクマ 野郎',
        'pinyinSpace': 'あいかわらず なまっちろい やろう だ ぜ この シロクマ やろう'
    },
    '179': {
        'character': 'ちょっと焼いてこいよ日サロで',
        'letter': 'Go get a tan at the tanning salon.',
        'pinyin': 'ちょっとやいてこいよひさろで',
        'definition': 'ちょっと 焼いてこい よ 日サロ で',
        'pinyinSpace': 'ちょっと やいてこい よ ひサロ で'
    },
    '180': {
        'character': 'いや…行ってもたぶん変わらない',
        'letter': "No... it probably won't make a difference.",
        'pinyin': 'いや…いってもたぶんかわらない',
        'definition': 'いや 行っても たぶん 変わらない',
        'pinyinSpace': 'いや … おこなっても/いっても たぶん かわらない'
    },
    '181': {
        'character': '今日は友達を連れてきた',
        'letter': 'I brought a friend today.',
        'pinyin': 'きょうはともだちをつれてきた',
        'definition': '今日 は 友達 を 連れてきた',
        'pinyinSpace': 'きょう は ともだち を つれてきた'
    },
    '182': {
        'character': 'は…はじめまして',
        'letter': 'Nice to meet you.',
        'pinyin': 'は…はじめまして',
        'definition': 'は はじめまして',
        'pinyinSpace': 'は … はじめまして'
    },
    '183': {
        'character': '白いのか黒いのかはっきりしねえ野郎だな',
        'letter': "You're a white or black bastard.",
        'pinyin': 'しろいのかくろいのかはっきりしねえやろうだな',
        'definition': '白い の か黒い のか はっきりしねえ 野郎 だ な',
        'pinyinSpace': 'しろい の かぐろい のか はっきり しねえ やろう だ な'
    },
    '184': {
        'character': 'パンダだからね',
        'letter': "He's a panda.",
        'pinyin': 'ぱんだだからね',
        'definition': 'パンダ だから ね',
        'pinyinSpace': 'パンダ だ から ね'
    },
    '185': {
        'character': 'まあいいか座れ',
        'letter': 'Well, sit down.',
        'pinyin': 'まあいいかすわれ',
        'definition': 'まあいいか 座れ',
        'pinyinSpace': 'まあいいか すわれ'
    },
    '186': {
        'character': '何にする？',
        'letter': "What'll it be?",
        'pinyin': 'なににする？',
        'definition': '何 に する',
        'pinyinSpace': 'なに に する ？'
    },
    '187': {
        'character': 'シングルモルト',
        'letter': 'Single malt.',
        'pinyin': 'しんぐるもると',
        'definition': 'シングル モルト',
        'pinyinSpace': 'シングル モルト'
    },
    '188': {
        'character': 'おいパンダ',
        'letter': 'Hey, panda.',
        'pinyin': 'おいぱんだ',
        'definition': 'おい パンダ',
        'pinyinSpace': 'おい パンダ'
    },
    '189': {
        'character': 'はい…',
        'letter': "Yes, I'll have a...",
        'pinyin': 'はい…',
        'definition': 'はい',
        'pinyinSpace': 'はい …'
    },
    '190': {
        'character': 'お前は？',
        'letter': "What's yours?",
        'pinyin': 'おまえは？',
        'definition': 'お前 は',
        'pinyinSpace': 'おまえ は ？'
    },
    '191': {
        'character': 'えっと…竹大盛り',
        'letter': 'Uh... a big bowl of bamboo.',
        'pinyin': 'えっと…たけおおもり',
        'definition': 'えっと 竹 大盛り',
        'pinyinSpace': 'えっと … たけ おおもり'
    },
    '192': {
        'character': '悪いなヘルシーなものは置いてないんだ',
        'letter': "Sorry, we don't have anything healthy.",
        'pinyin': 'わるいなへるしーなものはおいてないんだ',
        'definition': '悪い な ヘルシー な もの は 置いてない ん だ',
        'pinyinSpace': 'わるい な ヘルシー な もの は おいてない ん だ'
    },
    '193': {
        'character': 'じゃ…じゃあ…アイスコーヒーお願いします',
        'letter': 'Well... then... can I have an iced coffee, please?',
        'pinyin': 'じゃ…じゃあ…あいすこーひーおねがいします',
        'definition': 'じゃ じゃあ アイスコーヒー お願いします',
        'pinyinSpace': 'じゃ … じゃあ … アイスコーヒー おねがい·します'
    },
    '194': {
        'character': 'ソフトドリンクもないね',
        'letter': 'No soft drinks either.',
        'pinyin': 'そふとどりんくもないね',
        'definition': 'ソフトドリンク も ない ね',
        'pinyinSpace': 'ソフトドリンク も ない ね'
    },
    '195': {
        'character': 'じゃあ笹の入ったパフェをお願いします',
        'letter': "Then I'll have a parfait with bamboo leaves.",
        'pinyin': 'じゃあささのはいったぱふぇをおねがいします',
        'definition': 'じゃあ 笹 の 入った パフェ を お願いします',
        'pinyinSpace': 'じゃあ ささ の はいった/いった パフェ を おねがい·します'
    },
    '196': {
        'character': 'ヘルシーなものはないっつってんだろ！！',
        'letter': "I told you we don't have anything healthy!",
        'pinyin': 'へるしーなものはないっつってんだろ！！',
        'definition': 'ヘルシー な もの は ない っつって んだ ろ',
        'pinyinSpace': 'ヘルシー な もの は ない っつって んだ ろ ！！'
    },
    '197': {
        'character': 'グリズリーくん',
        'letter': 'Grizzly.',
        'pinyin': 'ぐりずりーくん',
        'definition': 'グリズリー くん',
        'pinyinSpace': 'グリズリー くん'
    },
    '198': {
        'character': 'しようがねえな',
        'letter': "I can't help it.",
        'pinyin': 'しようがねえな',
        'definition': 'しようがねえ な',
        'pinyinSpace': 'しようがねえ な'
    },
    '199': {
        'character': 'シロクマの友人だ特別にコーヒーいれてやるよ',
        'letter': "I'm a friend of the polar bears, so I'll make you a special coffee.",
        'pinyin': 'しろくまのゆうじんだとくべつにこーひーいれてやるよ',
        'definition': 'シロクマ の 友人 だ 特別 に コーヒー いれて やる よ',
        'pinyinSpace': 'シロクマ の ゆうじん だ とくべつ に コーヒー いれて やる よ'
    },
    '200': {
        'character': 'ミルクは？',
        'letter': 'Milk?',
        'pinyin': 'みるくは？',
        'definition': 'ミルク は',
        'pinyinSpace': 'ミルク は ？'
    },
    '201': {
        'character': 'なしで',
        'letter': 'No milk?',
        'pinyin': 'なしで',
        'definition': 'なしで',
        'pinyinSpace': 'なしで'
    },
    '202': {
        'character': 'あっいや…ありで',
        'letter': 'No, with milk.',
        'pinyin': 'あっいや…ありで',
        'definition': 'あっい や あり で',
        'pinyinSpace': 'あっい や … あり で'
    },
    '203': {
        'character': 'あっやっぱなしで',
        'letter': 'No milk.',
        'pinyin': 'あっやっぱなしで',
        'definition': 'あっや っぱなし で',
        'pinyinSpace': 'あっや っぱなし で'
    },
    '204': {
        'character': '白黒はっきりしろ！！',
        'letter': "It's black and white!",
        'pinyin': 'しろくろはっきりしろ！！',
        'definition': '白黒 はっきりしろ',
        'pinyinSpace': 'しろくろ はっきり しろ ！！'
    },
    '205': {
        'character': 'もう…相変わらず短気だな',
        'letter': "You've got a temper as usual, don't you?",
        'pinyin': 'もう…あいかわらずたんきだな',
        'definition': 'もう 相変わらず 短気 だ な',
        'pinyinSpace': 'もう … あいかわらず たんき だ な'
    },
    '206': {
        'character': 'まあパンダが白黒はっきりしたら',
        'letter': 'If pandas were black and white.',
        'pinyin': 'まあぱんだがしろくろはっきりしたら',
        'definition': 'まあ パンダ が 白黒 はっきりしたら',
        'pinyinSpace': 'まあ パンダ が しろくろ はっきり したら'
    },
    '207': {
        'character': 'シロクマかただのクマになっちまうよな',
        'letter': "If pandas were black and white, they'd be polar bears or just bears.",
        'pinyin': 'しろくまかただのくまになっちまうよな',
        'definition': 'シロクマ か ただ の クマ に なっちまう よな',
        'pinyinSpace': 'シロクマ か ただ の クマ に なっちまう よな'
    },
    '208': {
        'character': 'ハハハハハハ！',
        'letter': 'Ha-ha-ha-ha-ha!',
        'pinyin': 'はははははは！',
        'definition': 'ハハハ ハハハ',
        'pinyinSpace': 'ハハハ ハハハ ！'
    },
    '209': {
        'character': 'グリズリーさんって怖い人だね',
        'letter': "You're a scary grizzly, aren't you?",
        'pinyin': 'ぐりずりーさんってこわいひとだね',
        'definition': 'グリズリー さん って 怖い 人 だ ね',
        'pinyinSpace': 'グリズリー さん って こわい ひと だ ね'
    },
    '210': {
        'character': 'そう？',
        'letter': 'Yeah?',
        'pinyin': 'そう？',
        'definition': 'そう',
        'pinyinSpace': 'そう ？'
    },
    '211': {
        'character': 'よう兄ちゃん',
        'letter': 'Hey, bro.',
        'pinyin': 'ようにいちゃん',
        'definition': 'よう 兄ちゃん',
        'pinyinSpace': 'よう にいちゃん'
    },
    '212': {
        'character': 'アンタ丸々と太っててうまそうだな',
        'letter': 'You look so fat and delicious.',
        'pinyin': 'あんたまるまるとふとっててうまそうだな',
        'definition': 'アンタ 丸々 と 太ってて うまそう だ な',
        'pinyinSpace': 'アンタ まるまる と ふとってて うまそう だ な'
    },
    '213': {
        'character': 'どうやって食べるのがいいかな',
        'letter': 'How should I eat it?',
        'pinyin': 'どうやってたべるのがいいかな',
        'definition': 'どうやって 食べる の が いい かな',
        'pinyinSpace': 'どうやって たべる の が いい かな'
    },
    '214': {
        'character': '丸飲みとか',
        'letter': 'Swallow it whole.',
        'pinyin': 'まるのみとか',
        'definition': '丸飲み とか',
        'pinyinSpace': 'まるのみ とか'
    },
    '215': {
        'character': 'ヤシの実とか',
        'letter': 'Or coconuts.',
        'pinyin': 'やしのみとか',
        'definition': 'ヤシの実 とか',
        'pinyinSpace': 'ヤシのみ とか'
    },
    '216': {
        'character': 'バーベキューとか',
        'letter': 'Barbecue.',
        'pinyin': 'ばーべきゅーとか',
        'definition': 'バーベキュー とか',
        'pinyinSpace': 'バーベキュー とか'
    },
    '217': {
        'character': 'もろきゅうとか',
        'letter': 'Morokyu.',
        'pinyin': 'もろきゅうとか',
        'definition': 'も ろ きゅう とか',
        'pinyinSpace': 'も ろ きゅう とか'
    },
    '218': {
        'character': '活け作りとか',
        'letter': 'Live fish...',
        'pinyin': 'いけづくりとか',
        'definition': '活け作り とか',
        'pinyinSpace': 'いけづくり とか'
    },
    '219': {
        'character': '若作りとか',
        'letter': 'Wakamaki...',
        'pinyin': 'わかづくりとか',
        'definition': '若作り とか',
        'pinyinSpace': 'わかづくり とか'
    },
    '220': {
        'character': 'おいお前！',
        'letter': 'Hey, you!',
        'pinyin': 'おいおまえ！',
        'definition': 'おい お前',
        'pinyinSpace': 'おい おまえ ！'
    },
    '221': {
        'character': 'あんまり他の客を怖がらすんじゃねえよ',
        'letter': "Don't scare the other customers!",
        'pinyin': 'あんまりほかのきゃくをこわがらすんじゃねえよ',
        'definition': 'あんまり 他 の 客 を 怖がらす ん じゃねえ よ',
        'pinyinSpace': 'あんまり た/ほか の きゃく を こわがらす ん じゃねえ よ'
    },
    '222': {
        'character': 'か…帰ります！',
        'letter': "I'm leaving!",
        'pinyin': 'か…かえります！',
        'definition': 'か 帰ります',
        'pinyinSpace': 'か … かえります ！'
    },
    '223': {
        'character': 'おいパンダ！',
        'letter': 'Hey, panda!',
        'pinyin': 'おいぱんだ！',
        'definition': 'おい パンダ',
        'pinyinSpace': 'おい パンダ ！'
    },
    '224': {
        'character': '悪かったなほらよコーヒーだ',
        'letter': "Here's your coffee.",
        'pinyin': 'わるかったなほらよこーひーだ',
        'definition': '悪かった な ほら よ コーヒー だ',
        'pinyinSpace': 'わるかった な ほら よ コーヒー だ'
    },
    '225': {
        'character': 'グリズリーさんありがとう！',
        'letter': 'Here you go, coffee. Thank you, grizzly!',
        'pinyin': 'ぐりずりーさんありがとう！',
        'definition': 'グリズリー さん ありがとう',
        'pinyinSpace': 'グリズリー さん ありがとう ！'
    },
    '226': {
        'character': 'ねぇグリズリーさん',
        'letter': 'Hey, Mr. Grizzly.',
        'pinyin': 'ねぇぐりずりーさん',
        'definition': 'ねぇ グリズリー さん',
        'pinyinSpace': 'ねぇ グリズリー さん'
    },
    '227': {
        'character': '何だ？',
        'letter': "What's up?",
        'pinyin': 'なんだ？',
        'definition': '何 だ',
        'pinyinSpace': 'なん だ ？'
    },
    '228': {
        'character': 'あの写真ってグリズリーさんだよね？',
        'letter': "That's a grizzly in the picture, right?",
        'pinyin': 'あのしゃしんってぐりずりーさんだよね？',
        'definition': 'あの 写真 って グリズリー さん だよね',
        'pinyinSpace': 'あの しゃしん って グリズリー さん だよね ？'
    },
    '229': {
        'character': 'うん？おおあれか',
        'letter': 'Yeah? Oh, that one.',
        'pinyin': 'うん？おおあれか',
        'definition': 'うん おおあれ か',
        'pinyinSpace': 'うん ？ おおあれ か'
    },
    '230': {
        'character': '愛車でアメリカを横断したときのやつさ',
        'letter': "That's the one where he drove his car across America.",
        'pinyin': 'あいしゃであめりかをおうだんしたときのやつさ',
        'definition': '愛車 で アメリカ を 横断した とき の やつ さ',
        'pinyinSpace': 'あいしゃ で アメリカ を おうだん した とき の やつ さ'
    },
    '231': {
        'character': 'かっこいい！',
        'letter': "Oh, my God, that's so cool!",
        'pinyin': 'かっこいい！',
        'definition': 'かっこいい',
        'pinyinSpace': 'かっこいい ！'
    },
    '232': {
        'character': 'よかったぜ地平線まで続く道をぶっ飛ばしてよ',
        'letter': "That's great... blasting down the road to the horizon.",
        'pinyin': 'よかったぜちへいせんまでつづくみちをぶっとばしてよ',
        'definition': 'よかった ぜ 地平線 まで 続く 道 を ぶっ飛ばして よ',
        'pinyinSpace': 'よかった ぜ ちへいせん まで つづく みち を ぶっとばして よ'
    },
    '233': {
        'character': 'わぁ～憧れちゃうな',
        'letter': "Wow, I'd love to be a part of that.",
        'pinyin': 'わぁ～あこがれちゃうな',
        'definition': 'わぁ 憧れちゃう な',
        'pinyinSpace': 'わぁ ～ あこがれちゃう な'
    },
    '234': {
        'character': 'どうせお前らはスローライフとかいってダラダラ暮らしてやがんだろ？',
        'letter': "You guys live the slow life anyway, don't you?",
        'pinyin': 'どうせおまえらはすろーらいふとかいってだらだらくらしてやがんだろ？',
        'definition': 'どうせ お前ら は スローライフ とかい って ダラダラ 暮らし て や が ん だろ',
        'pinyinSpace': 'どうせ おまえら は スローライフ とかい って ダラダラ くらし て や が ん だろ ？'
    },
    '235': {
        'character': 'ロハスって言ってよ',
        'letter': 'Call it LOHAS.',
        'pinyin': 'ろはすっていってよ',
        'definition': 'ロハス って 言って よ',
        'pinyinSpace': 'ロハス って いって よ'
    },
    '236': {
        'character': '言い方変えただけだろ',
        'letter': "It's just a different way of saying it.",
        'pinyin': 'いいかたかえただけだろ',
        'definition': '言い方 変えた だけ だろ',
        'pinyinSpace': 'いいかた かえた だけ だろ'
    },
    '237': {
        'character': 'ゆっくりでもそんなに変わらないよ',
        'letter': "Slowly isn't going to change much.",
        'pinyin': 'ゆっくりでもそんなにかわらないよ',
        'definition': 'ゆっくり でも そんなに 変わらない よ',
        'pinyinSpace': 'ゆっくり でも そんなに かわらない よ'
    },
    '238': {
        'character': '昔からマイペースだよなお前は',
        'letter': "You've always taken things at your own pace.",
        'pinyin': 'むかしからまいぺーすだよなおまえは',
        'definition': '昔 から マイペース だ よな お前 は',
        'pinyinSpace': 'むかし から マイペース だ よな おまえ は'
    },
    '239': {
        'character': '人生は一度きりだぜ',
        'letter': 'You only live once.',
        'pinyin': 'じんせいはいちどきりだぜ',
        'definition': '人生 は 一度 きり だ ぜ',
        'pinyinSpace': 'じんせい は いちど きり だ ぜ'
    },
    '240': {
        'character': '熱くぶっ飛ばさなきゃな',
        'letter': 'You gotta go out with a bang.',
        'pinyin': 'あつくぶっとばさなきゃな',
        'definition': '熱く ぶっ飛ばさなきゃ な',
        'pinyinSpace': 'あつく ぶっとばさなきゃ な'
    },
    '241': {
        'character': 'グリズリーさんすごくかっこいいね',
        'letter': "You're so cool, grizzly.",
        'pinyin': 'ぐりずりーさんすごくかっこいいね',
        'definition': 'グリズリー さん すごく かっこいい ね',
        'pinyinSpace': 'グリズリー さん すごく かっこいい ね'
    },
    '242': {
        'character': '僕そういうの大好き！',
        'letter': 'I love it!',
        'pinyin': 'ぼくそういうのだいすき！',
        'definition': '僕 そういう の 大好き',
        'pinyinSpace': 'ぼく そういう の だいすき ！'
    },
    '243': {
        'character': 'おっ？シロクマの知り合いにしちゃあ',
        'letter': 'What? For a guy who knows polar bears.',
        'pinyin': 'おっ？しろくまのしりあいにしちゃあ',
        'definition': 'お っ シロクマ の 知り合い に しちゃ あ',
        'pinyinSpace': 'お っ ？ シロクマ の しりあい に しちゃ あ'
    },
    '244': {
        'character': '話のわかるヤツじゃないか',
        'letter': "You know, for a guy who knows polar bears, you sure know what you're talking about.",
        'pinyin': 'はなしのわかるやつじゃないか',
        'definition': '話のわかる ヤツ じゃないか',
        'pinyinSpace': 'はなしのわかる ヤツ じゃないか'
    },
    '245': {
        'character': 'ほら冷めちまうぞ飲めよ',
        'letter': "Here, drink up, it's getting cold.",
        'pinyin': 'ほらさめちまうぞのめよ',
        'definition': 'ほら 冷めちまう ぞ 飲め よ',
        'pinyinSpace': 'ほら さめちまう ぞ のめ よ'
    },
    '246': {
        'character': 'うん！',
        'letter': 'Drink up.',
        'pinyin': 'うん！',
        'definition': 'うん',
        'pinyinSpace': 'うん ！'
    },
    '247': {
        'character': 'どうだ？アイリッシュコーヒーにしてみたんだ',
        'letter': 'What do you think? I made you an Irish coffee.',
        'pinyin': 'どうだ？あいりっしゅこーひーにしてみたんだ',
        'definition': 'どう だ アイリッシュコーヒー に して みた ん だ',
        'pinyinSpace': 'どう だ ？ アイリッシュコーヒー に して みた ん だ'
    },
    '248': {
        'character': 'まっコーヒーよりウイスキーのほうが多かったかもな',
        'letter': 'Well, it was more whiskey than coffee.',
        'pinyin': 'まっこーひーよりういすきーのほうがおおかったかもな',
        'definition': 'まっコーヒー より ウイスキー の ほう が 多かった かも な',
        'pinyinSpace': 'まっコーヒー より ウイスキー の ほう が おおかった かも な'
    },
    '249': {
        'character': 'えっ？それは…',
        'letter': "What? That's...",
        'pinyin': 'えっ？それは…',
        'definition': 'え っ それは',
        'pinyinSpace': 'え っ ？ それは …'
    },
    '250': {
        'character': 'バルルルル…グフッフフフ',
        'letter': 'Barlle-lulu... guffaw.',
        'pinyin': 'ばるるるる…ぐふっふふふ',
        'definition': 'バル ルルル グフッフ フフ',
        'pinyinSpace': 'バル ルルル … グフッフ フフ'
    },
    '251': {
        'character': 'またソイツと来いよ',
        'letter': 'Come again with him.',
        'pinyin': 'またそいつとこいよ',
        'definition': 'また ソイツ と 来い よ',
        'pinyinSpace': 'また ソイツ と こい よ'
    },
    '252': {
        'character': '今度はインスタントじゃないコーヒーをいれてやるから',
        'letter': "I'll make you a coffee that's not instant this time.",
        'pinyin': 'こんどはいんすたんとじゃないこーひーをいれてやるから',
        'definition': '今度 は インスタント じゃない コーヒーをいれて やる から',
        'pinyinSpace': 'こんど は インスタント じゃない コーヒーをいれて やる から'
    },
    '253': {
        'character': 'うんマイルドでよろしくね',
        'letter': 'Mild coffee, please.',
        'pinyin': 'うんまいるどでよろしくね',
        'definition': 'うん マイルド で よろしく ね',
        'pinyinSpace': 'うん マイルド で よろしく ね'
    },
    '254': {
        'character': 'あれ？',
        'letter': 'What?',
        'pinyin': 'あれ？',
        'definition': 'あれ',
        'pinyinSpace': 'あれ ？'
    },
    '255': {
        'character': '目が覚めた？',
        'letter': "You're awake?",
        'pinyin': 'めがさめた？',
        'definition': '目が覚めた',
        'pinyinSpace': 'めがさめた ？'
    },
    '256': {
        'character': 'シロクマくん運んでくれたんだね',
        'letter': 'Polar bear, you brought me here.',
        'pinyin': 'しろくまくんはこんでくれたんだね',
        'definition': 'シロクマ くん 運んでくれた ん だ ね',
        'pinyinSpace': 'シロクマ くん はこんで くれた ん だ ね'
    },
    '257': {
        'character': 'うん',
        'letter': 'Yeah, I did.',
        'pinyin': 'うん',
        'definition': 'うん',
        'pinyinSpace': 'うん'
    },
    '258': {
        'character': 'ありがとう',
        'letter': 'Thank you.',
        'pinyin': 'ありがとう',
        'definition': 'ありがとう',
        'pinyinSpace': 'ありがとう'
    },
    '259': {
        'character': 'いいよ別に',
        'letter': 'No problem.',
        'pinyin': 'いいよべつに',
        'definition': 'いい よ 別に',
        'pinyinSpace': 'いい よ べつに'
    },
    '260': {
        'character': 'それともうひとつありがとう',
        'letter': 'And thanks for the other thing.',
        'pinyin': 'それともうひとつありがとう',
        'definition': 'それ と もう ひとつ ありがとう',
        'pinyinSpace': 'それ と もう ひとつ ありがとう'
    },
    '261': {
        'character': 'えっ？',
        'letter': 'What?',
        'pinyin': 'えっ？',
        'definition': 'え っ',
        'pinyinSpace': 'え っ ？'
    },
    '262': {
        'character': '僕だいぶワイルドってのがわかった気がするよ',
        'letter': "I think I'm starting to understand wild.",
        'pinyin': 'ぼくだいぶわいるどってのがわかったきがするよ',
        'definition': '僕 だいぶ ワイルド って の が わかった 気がする よ',
        'pinyinSpace': 'ぼく だいぶ ワイルド って の が わかった きがする よ'
    },
    '263': {
        'character': 'そうそれならよかった',
        'letter': "Well, that's good.",
        'pinyin': 'そうそれならよかった',
        'definition': 'そう それなら よかった',
        'pinyinSpace': 'そう それなら よかった'
    },
    '264': {
        'character': 'シロクマくんどう？これ',
        'letter': 'What do you think, Polar Bear? What do you think, Polar Bear?',
        'pinyin': 'しろくまくんどう？これ',
        'definition': 'シロクマ くんどう これ',
        'pinyinSpace': 'シロクマ くんどう ？ これ'
    },
    '265': {
        'character': 'ワイルド？',
        'letter': 'Wild?',
        'pinyin': 'わいるど？',
        'definition': 'ワイルド',
        'pinyinSpace': 'ワイルド ？'
    },
    '266': {
        'character': 'いやぁマイルドかな',
        'letter': 'Mild.',
        'pinyin': 'いやぁまいるどかな',
        'definition': 'いやぁ マイルド かな',
        'pinyinSpace': 'いやぁ マイルド かな'
    },
    '267': {
        'character': 'じゃあ！',
        'letter': 'Okay, then.',
        'pinyin': 'じゃあ！',
        'definition': 'じゃあ',
        'pinyinSpace': 'じゃあ ！'
    },
    '268': {
        'character': 'あれ？パンダくんどこ行くの？',
        'letter': "What's that? Where are you going, panda?",
        'pinyin': 'あれ？ぱんだくんどこいくの？',
        'definition': 'あれ パンダ くん どこ 行く の',
        'pinyinSpace': 'あれ ？ パンダ くん どこ いく の ？'
    },
    '269': {
        'character': 'ワルは後ろを振り返らない',
        'letter': 'Badass never looks back.',
        'pinyin': 'わるはうしろをふりかえらない',
        'definition': 'ワル は 後ろ を 振り返らない',
        'pinyinSpace': 'ワル は うしろ を ふりかえらない'
    },
    '270': {
        'character': 'あっそう…',
        'letter': 'Oh, yeah...',
        'pinyin': 'あっそう…',
        'definition': 'あっそ う',
        'pinyinSpace': 'あっそ う …'
    },
    '271': {
        'character': 'ペンギンさんペンギンさん',
        'letter': 'Penguins! Penguins!',
        'pinyin': 'ぺんぎんさんぺんぎんさん',
        'definition': 'ペンギン さん ペンギン さん',
        'pinyinSpace': 'ペンギン さん ペンギン さん'
    },
    '272': {
        'character': 'どうしたのパンダ君',
        'letter': "What's wrong, Mr. Panda?",
        'pinyin': 'どうしたのぱんだくん',
        'definition': 'どうしたの パンダ 君',
        'pinyinSpace': 'どうしたの パンダ きみ/くん'
    },
    '273': {
        'character': 'ペンギンさんってどうしてみんなに嫌われてるんだっけ',
        'letter': 'Why does everyone hate Mr. Penguin?',
        'pinyin': 'ぺんぎんさんってどうしてみんなにきらわれてるんだっけ',
        'definition': 'ペンギン さん って どうして みんな に 嫌われてる ん だっけ',
        'pinyinSpace': 'ペンギン さん って どうして みんな に きらわれてる ん だっけ'
    },
    '274': {
        'character': 'そんな事実ないでしょう',
        'letter': "That's not true.",
        'pinyin': 'そんなじじつないでしょう',
        'definition': 'そんな 事実 ないでしょう',
        'pinyinSpace': 'そんな じじつ ない·でしょう'
    },
    '275': {
        'character': '人気ものだよ僕は',
        'letter': "I'm popular.",
        'pinyin': 'にんきものだよぼくは',
        'definition': '人気 も のだ よ 僕 は',
        'pinyinSpace': 'にんき も のだ よ ぼく は'
    },
    '276': {
        'character': 'どっちでもいいじゃない',
        'letter': "I don't care.",
        'pinyin': 'どっちでもいいじゃない',
        'definition': 'どっち でもいい じゃない',
        'pinyinSpace': 'どっち で もいい じゃない'
    },
    '277': {
        'character': '次回のしろくまカフェは',
        'letter': 'Next time at the Shirokuma Cafe...',
        'pinyin': 'じかいのしろくまかふぇは',
        'definition': '次回 の しろくま カフェ は',
        'pinyinSpace': 'じかい の しろくま カフェ は'
    },
    '278': {
        'character': '鉛筆書きでお送りします',
        'letter': "I'll send you a pencil drawing.",
        'pinyin': 'えんぴつがきでおおくりします',
        'definition': '鉛筆書き で お 送り します',
        'pinyinSpace': 'えんぴつがき で お おくり します'
    },
    '279': {
        'character': '塗ります',
        'letter': "I'll paint.",
        'pinyin': 'ぬります',
        'definition': '塗ります',
        'pinyinSpace': 'ぬります'
    },
    '280': {
        'character': 'お楽しみに',
        'letter': 'Enjoy!',
        'pinyin': 'おたのしみに',
        'definition': 'お 楽しみ に',
        'pinyinSpace': 'お たのしみ に'
    }
}