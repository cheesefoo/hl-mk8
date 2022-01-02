import { dev } from '$app/env';

const chardir = dev ? '../static/images/characters' : '/images/characters';
const coursedir = dev ? '../static/images/courses' : '/images/courses';
const itemdir = dev ? '../static/images/items' : '/images/items';
const cartdir = dev ? '../static/images/carts' : '/images/carts';

export interface TranslationItem {
	english: string;
	alt?: string;
	japanese: string;
	romaji: string;
	src: string;
}
export interface CupItem {
	name: TranslationItem;
	courses: Array<TranslationItem>;
}

export const characters: Array<TranslationItem> = [
	{
		english: 'Baby Daisy',
		japanese: 'ベイビーデイジー',
		romaji: 'beibiー deijiー',
		src: 'baby_daisy.png'
	},
	{
		english: 'Baby Luigi',
		japanese: 'ベビィルイージ',
		romaji: 'beibiー ruiーji',
		src: 'baby_luigi.png'
	},
	{
		english: 'Baby Mario',
		japanese: 'ベビーマリオ',
		romaji: 'bebiー mario',
		src: 'baby_mario.png'
	},
	{
		english: 'Baby Peach',
		japanese: 'ベイビーピーチ',
		romaji: 'beibiー piーchi',
		src: 'baby_peach.png'
	},
	{
		english: 'Baby Rosalina',
		alt: 'Baby Rozetta',
		japanese: 'ベビー ロゼッタ',
		romaji: 'beibiー rozetta',
		src: 'baby_rosalina.png'
	},
	{
		english: 'Bone Bowser',
		alt: 'Hone Koopa',
		japanese: 'ほねクッパ',
		romaji: 'hone kuppa',
		src: 'bone_bowser.png'
	},
	{ english: 'Bowser', alt: 'Koopa', japanese: 'クッパ', romaji: 'kuppa', src: 'bowser.png' },
	{
		english: 'Bowser Jr.',
		japanese: 'クッパジュニア',
		romaji: 'kuppa junia',
		src: 'bowser_jr.png'
	},
	{ english: 'Cat Peach', japanese: 'ネコピーチ', romaji: 'neko piーchi', src: 'cat_peach.png' },
	{ english: 'Daisy', japanese: 'デイジー', romaji: 'deijiー', src: 'daisy.png' },
	{ english: 'Donkey Kong', japanese: 'ドンキーコング', romaji: 'donkiー kongu', src: 'dk.png' },
	{ english: 'Dry Bones', alt: 'Charon', japanese: 'カロン', romaji: 'karon', src: 'drybones.png' },
	{
		english: 'Gold Mario',
		japanese: 'ゴールドマリオ',
		romaji: 'goーrudo mario',
		src: 'gold_mario.png'
	},
	{
		english: 'Pink Gold Peach',
		japanese: 'ピンクゴールドピーチ',
		romaji: 'pinky goーrudo piーchi',
		src: 'gold_peach.png'
	},
	{ english: 'Iggy', japanese: 'イギー', romaji: 'igiー', src: 'iggy.png' },
	{
		english: 'Inkling Boy',
		japanese: 'インクリング ボーイ',
		romaji: 'inkuringu boーi',
		src: 'inkling_boy.png'
	},
	{
		english: 'Inkling Girl',
		japanese: 'インクリング ガール',
		romaji: 'inkuringu gaーru',
		src: 'inkling-girl.png'
	},
	{ english: 'Isabelle', alt: 'Shizue', japanese: 'しずえ', romaji: 'shizue', src: 'isabelle.png' },
	{
		english: 'King Boo',
		alt: 'King Teresa',
		japanese: 'キングテレサ',
		romaji: 'kingu teresa',
		src: 'king_boo.png'
	},
	{
		english: 'Koopa Troopa',
		alt: 'Noko Noko',
		japanese: 'ノコノコ',
		romaji: 'nokonoko',
		src: 'koopa_troopa.png'
	},
	{ english: 'Lakitu', alt: 'Jugemu ', japanese: 'ジュゲム', romaji: 'jugemu', src: 'lakitu.png' },
	{ english: 'Larry', japanese: 'ラリー', romaji: 'rariー', src: 'larry.png' },
	{ english: 'Lemy', japanese: 'レミー', romaji: 'remiー', src: 'lemy.png' },
	{ english: 'Link', japanese: 'リンク', romaji: 'rinku', src: 'link.png' },
	{ english: 'Ludwig', japanese: 'ルドウィッグ', romaji: 'rudouiggu', src: 'ludwig.png' },
	{ english: 'Luigi', japanese: 'ルイージ', romaji: 'ruiーji', src: 'luigi.png' },
	{ english: 'Mario', japanese: 'マリオ', romaji: 'mario', src: 'mario.png' },
	{
		english: 'Metal Mario',
		japanese: 'メタルマリオ',
		romaji: 'metaru mario',
		src: 'metal_mario.png'
	},
	{ english: 'Morton', japanese: 'モートン', romaji: 'moーton', src: 'morton.png' },
	{ english: 'Peach', japanese: 'ピーチ', romaji: 'piーchi', src: 'peach.png' },
	{
		english: 'Racoon Mario',
		alt: 'Tanuki Mario',
		japanese: 'タヌキマリオ',
		romaji: 'tanuki mario',
		src: 'racoon_mario.png'
	},
	{ english: 'Rosalina', japanese: 'ロゼッタ', romaji: 'rozetta', src: 'rosalina.png' },
	{ english: 'Roy', japanese: 'ロイ', romaji: 'roi', src: 'roy.png' },
	{ english: 'Shy Guy', japanese: 'ヘイホー', romaji: 'heihoー', src: 'shyguy.png' },
	{ english: 'Toad', alt: 'Kinopio', japanese: 'キノピオ', romaji: 'kinopio', src: 'toad.png' },
	{
		english: 'Toadette',
		alt: 'Kinopiko',
		japanese: 'キノピコ',
		romaji: 'kinopiko',
		src: 'toadette.png'
	},
	{
		english: 'Villager Boy',
		japanese: 'むらびと(男の子)',
		romaji: 'murabito otoko no ko',
		src: 'villager_boy.png'
	},
	{
		english: 'Villager Girl',
		japanese: 'むらびと(女の子)',
		romaji: 'murabito onna no ko',
		src: 'villager_girl.png'
	},
	{ english: 'Waluigi', japanese: 'ワルイージ', romaji: 'waruiーji', src: 'waluigi.png' },
	{ english: 'Wario', japanese: 'ワリオ', romaji: 'wario', src: 'wario.png' },
	{ english: 'Wendy', japanese: 'ウェンディ', romaji: 'uendi', src: 'wendy.png' },
	{ english: 'Yoshi', japanese: 'ヨッシー', romaji: 'yosshiー', src: 'yoshi.png' }
];

export const maps: Array<CupItem> = [
	{
		name: {
			english: 'Mushroom Cup',
			japanese: 'キノコカップ',
			romaji: 'kinoko',
			src: 'mushroom.png'
		},
		courses: [
			{
				english: 'Mario Kart Stadium',
				japanese: 'マリオカートスタジアム',
				romaji: 'mario ka-to sutajiamu',
				src: 'Mario_Kart_Stadium.png'
			},
			{
				english: 'Water Park',
				japanese: 'ウォーターパーク',
				romaji: 'wota- pa-ku',
				src: 'Water_Park.png'
			},
			{
				english: 'Sweet Sweet Canyon',
				alt: 'Sweets Canyon',
				japanese: 'スイーツキャニオン',
				romaji: 'sui-tsu kyanion',
				src: 'Sweet_Sweet_Canyon.png'
			},
			{
				english: 'Thwomp Ruins',
				alt: 'Dossun Ruins',
				japanese: 'ドッスンいせき',
				romaji: 'dossun iseki',
				src: 'Thwomp_Ruins.png'
			}
		]
	},
	{
		name: { english: 'Flower', japanese: 'フラワー', romaji: 'furawaー', src: 'flower.png' },
		courses: [
			{
				english: 'Mario Circuit',
				japanese: 'マリオサーキット',
				romaji: 'mario saーkitto',
				src: 'Mario_Circuit.png'
			},
			{
				english: 'Toad Harbor',
				alt: 'Kinopio Harbor',
				japanese: 'キノピオハーバー',
				romaji: 'kinopio haーbaー',
				src: 'Toad_Harbor.png'
			},
			{
				english: 'Twisted Mansion',
				japanese: 'ねじれマンション',
				romaji: 'nejire manshon',
				src: 'Twisted_Mansion.png'
			},
			{
				english: 'Shy Guy Falls',
				alt: 'Heiho Mountains',
				japanese: 'ヘイホーこうざん',
				romaji: 'heihoー kouzan',
				src: 'Shy_Guy_Falls.png'
			}
		]
	},
	{
		name: {
			english: 'Star Cup',
			alt: 'Shine Cup',
			japanese: 'スター',
			romaji: 'suta',
			src: 'star.png'
		},
		courses: [
			{
				english: 'Sunshine Airport',
				japanese: 'サンシャインくうこう',
				romaji: 'sanshain kuukou',
				src: 'Sunshine_Airport.png'
			},
			{
				english: 'Dolphin Shoals',
				japanese: 'ドルフィンみさき',
				romaji: 'dorufin misaki',
				src: 'Dolphin_Shoals.png'
			},
			{
				english: 'Electrodrome',
				japanese: 'エレクトロドリーム',
				romaji: 'erekutorodori-mu',
				src: 'Electrodrome.png'
			},
			{
				english: 'Mount Wario',
				alt: 'Wario Snow Mountain',
				japanese: 'ワリオスノーマウンテン',
				romaji: 'wario sunoー maunten',
				src: 'Mount_Wario.png'
			}
		]
	},
	{
		name: { english: 'Special', japanese: 'スペシャル', romaji: 'supesharu', src: 'special.png' },

		courses: [
			{
				english: 'Cloudtop Cruise',
				alt: 'Sky Garden',
				japanese: 'スカイガーデン',
				romaji: 'sukai gaーden',
				src: 'Cloudtop_Cruise.png'
			},
			{
				english: 'Bone-Dry Dunes',
				alt: 'Bone Bone Desert',
				japanese: 'ホネホネさばく',
				romaji: 'hone hone sabaku',
				src: 'Bone-Dry_Dunes.png'
			},
			{
				english: "Bowser's Castle",
				alt: 'Koopa Castle',
				japanese: 'クッパキャッスル',
				romaji: 'kuppa kyassuru',
				src: "Bowser's_Castle.png"
			},
			{
				english: 'Rainbow Road',
				japanese: 'レインボーロード',
				romaji: 'reinboー roーdo',
				src: 'Rainbow_Road.png'
			}
		]
	},
	{
		name: { english: 'Egg Cup', japanese: 'たまご', romaji: 'tamago', src: 'egg.png' },
		courses: [
			{
				english: '(GC)Yoshi Circuit',
				japanese: 'ヨッシーサーキット',
				romaji: 'yosshiー saーkitto',
				src: 'Yoshi_Circuit.png'
			},
			{
				english: 'Excitebike Arena',
				japanese: 'エキサイトバイク',
				romaji: 'ekisaitobaiku',
				src: 'Excitebike_Arena.png'
			},
			{
				english: 'Dragon Driftway',
				alt: 'Dragon Road',
				japanese: 'ドラゴンロード',
				romaji: 'doragon roーdo',
				src: 'Dragon_Driftway.png'
			},
			{
				english: 'Mute City',
				japanese: 'ミュートシティ',
				romaji: 'myuーto shitei',
				src: 'Mute_City.png'
			}
		]
	},
	{
		name: {
			english: 'Crossing Cup',
			japanese: 'どうぶつ',
			romaji: 'doubutsu',
			src: 'crossing.png'
		},
		courses: [
			{
				english: '(GC)Baby Park',
				japanese: 'ベビィパーク',
				romaji: 'bebyi paーku',
				src: 'Baby_Park.png'
			},
			{
				english: '(GBA)Cheese Land',
				japanese: 'チーズランド',
				romaji: 'chiーzu rando',
				src: 'Cheese_Land.png'
			},
			{
				english: 'Wild Woods',
				alt: 'Nature Road',
				japanese: 'ネイチャーロード',
				romaji: 'neichaー roーdo',
				src: 'Wild_Woods.png'
			},
			{
				english: 'Animal Crossing',
				japanese: 'どうぶつの森',
				romaji: 'doubutsu no mori',
				src: 'Animal_Crossing.png'
			}
		]
	},
	{
		name: { english: 'Shell Cup', japanese: 'こうら', romaji: 'koura', src: 'shell.png' },
		courses: [
			{
				english: '(WII)Moo Moo Meadows',
				alt: 'Mo Mo Country',
				japanese: 'モーモーカントリー',
				romaji: 'moーmoー kantoriー',
				src: 'Moo_Moo_Meadows.png'
			},
			{
				english: '(GBA)Mario Circuit',
				japanese: 'マリオサーキット',
				romaji: 'mario saーkitto',
				src: 'GBA_Mario_Circuit.png'
			},
			{
				english: '(DS)Cheep Cheep Beach',
				japanese: 'プクプクビーチ',
				romaji: 'pukupuku biーchi',
				src: 'Cheep_Cheep_Beach.png'
			},
			{
				english: "(N64)Toad's Turnpike",
				japanese: 'キノピオハイウェイ',
				romaji: 'kinopio haiuei',
				src: "Toad's_Turnpike.png"
			}
		]
	},
	{
		name: { english: 'Banana', japanese: 'バナナ', romaji: 'banana', src: 'banana.png' },
		courses: [
			{
				english: '(GCN)Dry Dry Desert',
				japanese: 'カラカラさばく',
				romaji: 'karakara sabaku',
				src: 'Dry_Dry_Desert.png'
			},
			{
				english: '(SNES)Donut Plains 3',
				japanese: 'ドーナツへいや',
				romaji: 'doーnatsu heiya',
				src: 'Donut_Plains_3.png'
			},
			{
				english: '(N64)Royal Raceway',
				alt: 'Peach Circuit',
				japanese: 'ピーチサーキット',
				romaji: 'piーchi saーkitto',
				src: 'Royal_Raceway.png'
			},
			{
				english: '(3DS)DK Jungle',
				japanese: 'DKジャングル',
				romaji: 'DK janguru',
				src: 'DK_Jungle.png'
			}
		]
	},
	{
		name: { english: 'Leaf Cup', japanese: 'このは', romaji: 'konoha', src: 'leaf.png' },
		courses: [
			{
				english: '(DS)Wario Stadium',
				japanese: 'ワリオスタジアム',
				romaji: 'wario sutajiamu',
				src: 'Wario_Stadium.png'
			},
			{
				english: '(GCN)Sherbet Land',
				japanese: 'シャーベットランド',
				romaji: 'shaーbetto rando',
				src: 'Sherbet_Land.png'
			},
			{
				english: '(3DS)Music Park',
				japanese: 'ミュージックパーク',
				romaji: 'myuーjikkupaーku',
				src: 'Music_Park.png'
			},
			{
				english: '(N64)Yoshi Valley',
				japanese: 'ヨッシーバレー',
				romaji: 'yosshiー bareー',
				src: 'Yoshi_Valley.png'
			}
		]
	},
	{
		name: {
			english: 'Lightning Cup',
			alt: 'Thunder Cup',
			japanese: 'サンダー',
			romaji: 'sandaー',
			src: 'lightning.png'
		},
		courses: [
			{
				english: '(DS)Tick-Tock Clock',
				japanese: 'チクタクロック',
				romaji: 'chikutakurokku',
				src: 'Tick-Tock_Clock.png'
			},
			{
				english: '(3DS)Piranha Plant Slide',
				alt: 'Pakkun Slider',
				japanese: 'パックンスライダー',
				romaji: 'pakkun suraidaー',
				src: 'Piranha_Plant_Slide.png'
			},
			{
				english: '(WII)Grumble Volcano',
				japanese: 'グラグラかざん',
				romaji: 'guragura kazan',
				src: 'Grumble_Volcano.png'
			},
			{
				english: '(N64)Rainbow Road',
				japanese: 'レインボーロード',
				romaji: 'reinboーroーdo',
				src: 'N64_Rainbow_Road.png'
			}
		]
	},
	{
		name: {
			english: 'Triforce (Zelda)',
			japanese: 'ゼルダ',
			romaji: 'zeruda',
			src: 'triforce.png'
		},
		courses: [
			{
				english: "(WII)Wario's Gold Mine",
				japanese: 'ワリオこうざん',
				romaji: 'wario kouzan',
				src: "Wario's_Gold_Mine.png"
			},
			{
				english: '(SNES)Rainbow Road',
				japanese: 'レインボーロード',
				romaji: 'reinboー roーdo',
				src: 'SNES_Rainbow_Road.png'
			},
			{
				english: 'Ice Ice Outpost',
				alt: 'Slippery Twister',
				japanese: 'ツルツルツイスター',
				romaji: 'tsurutsuru tsuisutaー',
				src: 'Ice_Ice_Outpost.png'
			},
			{
				english: 'Hyrule Circuit',
				japanese: 'ハイラルサーキット',
				romaji: 'hairaru saーkitto',
				src: 'Hyrule_Circuit.png'
			}
		]
	},
	{
		name: { english: 'Bell Cup', japanese: 'ベル', romaji: 'beru', src: 'bell.png' },
		courses: [
			{
				english: '(3DS)Neo Bowser City',
				alt: 'Neo Koopa City',
				japanese: 'ネオクッパシティ',
				romaji: 'neo kuppa shitei',
				src: 'Neo_Bowser_City.png'
			},
			{
				english: '(GBA)Ribbon Road',
				japanese: 'リボンロード',
				romaji: 'ribon roーdo',
				src: 'Ribbon_Road.png'
			},
			{
				english: 'Super Bell Subway',
				alt: 'RinRin Metro',
				japanese: 'リンリンメトロ',
				romaji: 'rinrin metoro',
				src: 'Super_Bell_Subway.png'
			},
			{ english: 'Big Blue', japanese: 'ビッグブルー', romaji: 'biggu buruー', src: 'Big_Blue.png' }
		]
	}
];

export const items: Array<TranslationItem> = [
	{
		english: 'Mushroom, Golden Mushroom',
		alt: '(Powerful) Dash Kinoko, Kin Kinoko',
		japanese: '(パワフル)ダッシュキノコ',
		romaji: 'pawafuru dasshu kinoko',
		src: 'golden_mushroom.png'
	},

	{ english: 'Blooper', alt: 'Ika', japanese: 'ゲッソー', romaji: 'Gesso-', src: 'blooper.png' },

	{
		english: "Crazy 8's",
		alt: 'Miracle 8',
		japanese: 'ミラクル8',
		romaji: 'mirakuru eito',
		src: 'crazy8.png'
	},

	{
		english: 'Bullet Bill',
		alt: 'Killer',
		japanese: 'キラー',
		romaji: 'kira',
		src: 'bulletbill.png'
	},

	{
		english: 'Piranha Plant',
		alt: 'Potted Pakkun',
		japanese: '(鉢植え)パックン',
		romaji: '(hachiue) pakkun',
		src: 'piranha.png'
	},

	{
		english: 'Horn',
		alt: 'Super Klaxon',
		japanese: 'スーパークラクション',
		romaji: 'supa- kurakushon',
		src: 'horn.png'
	},

	{
		english: 'Green/Red/Blue (Spiny) Shell',
		japanese: 'ミドリ/あか/あお こうら',
		romaji: 'midori/aka/ao koura',
		src: 'shells.png'
	}
];

export const carts: Array<TranslationItem> = [
	{
		english: 'Cloud Glider',
		alt: 'Moku Moku Balloon',
		japanese: 'もくもくバルーン',
		romaji: 'mokumoku baruーn',
		src: 'cloud.png'
	},

	{
		english: 'Paper Glider',
		alt: 'Paper Airplane',
		japanese: 'かみひこうき',
		romaji: 'kami hikouki',
		src: 'paper.png'
	},

	{
		english: 'Wild Wiggler',
		alt: 'Hana-chan Buggy',
		japanese: 'ハナチャンバギー',
		romaji: 'hanachan bagiー',
		src: 'wiggler.png'
	},

	{
		english: 'Biddybuggy',
		alt: 'Para-Biddybud',
		japanese: 'パタテンテン',
		romaji: 'pata tenten',
		src: 'biddy.png'
	},

	{
		english: 'Mr. Scooty',
		alt: 'Broad/Fava bean',
		japanese: 'そらまめ',
		romaji: 'soramame',
		src: 'scooty.png'
	},

	{ english: 'Roller', japanese: 'ローラータイヤ', romaji: 'roーraー taiya', src: 'roller.png' },

	{
		english: 'Azure Roller',
		alt: 'Sky Roller',
		japanese: 'スカイローラー',
		romaji: 'sukai roーraー',
		src: 'azure_roller.png'
	}
];

characters.forEach((t) => {
	t.src = `${chardir}/${t.src}`;
});
maps.forEach((t) => {
	t.name.src = `${coursedir}/${t.name.src}`;
	t.courses.forEach((c) => (c.src = `${coursedir}/${c.src}`));
});
items.forEach((t) => {
	t.src = `${itemdir}/${t.src}`;
});
carts.forEach((t) => {
	t.src = `${cartdir}/${t.src}`;
});
export default characters;
