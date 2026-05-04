// 时空星火 · 卡牌数据
// 设计风格：科幻档案馆风 — 深宇宙黑底色、各职业专属霓虹色、扫描线纹理
// 构筑价值分层: S=核心运转 A=更有用 B=很有用 C=较有用 D=对核心贡献低

export type CardType = '初始牌' | '普通攻击' | '普通防御' | '普通技能' | '稀有' | '稀有填充' | '传奇' | '传奇填充' | '神级';
export type ClassType = 'mathematician' | 'medic' | 'psychologist' | 'physicist' | 'archaeologist' | 'engineer';
export type CardTier = 'S' | 'A' | 'B' | 'C' | 'D';

export interface Card {
  id: string;
  name: string;
  type: CardType;
  cost: number;
  description: string;
  image: string;
  classType: ClassType;
  tier: CardTier;
  tierReason?: string;
}

export interface CharacterClass {
  id: ClassType;
  name: string;
  color: string;       // 职业主色（霓虹色）
  bgColor: string;     // 职业背景色（深色）
  borderColor: string; // 边框色
  description: string;
  coreMechanic: string; // 核心机制描述
  buildPaths: string[]; // build路线
  cards: Card[];
}

// ==================== 物理学家 ====================
// 核心循环: 充能→高伤害攻击→燃烧DOT→势能转化(防转攻)
// Build A: 燃烧流 | Build B: 大招流 | Build C: 防转攻流
const physicistCards: Card[] = [
  // 初始牌（5张）
  { id: 'ph001', name: '粒子冲击', type: '初始牌', cost: 1, description: '发射高能粒子束，造成 9 点伤害。如果目标身上有「燃烧」状态，额外造成 5 点伤害。', image: '/manus-storage/card_physicist_001_56079809.jpg', classType: 'physicist', tier: 'C', tierReason: '基础攻击，燃烧协同但本身不启动循环' },
  { id: 'ph002', name: '力场展开', type: '初始牌', cost: 1, description: '展开电磁力场，获得 10 层防火墙。', image: '/manus-storage/card_physicist_002_b161535e.jpg', classType: 'physicist', tier: 'C', tierReason: '基础防御，防转攻流的基础素材' },
  { id: 'ph003', name: '动能引爆', type: '初始牌', cost: 2, description: '将动能压缩后释放，造成 18 点伤害，并对目标施加「震荡」（下回合行动延迟）。', image: '/manus-storage/card_physicist_003_c9302d68.jpg', classType: 'physicist', tier: 'C', tierReason: '高费初始牌，伤害尚可但不配合核心循环' },
  { id: 'ph004', name: '势能转化', type: '初始牌', cost: 1, description: '将当前防火墙层数的 50% 转化为攻击伤害。防火墙清零。', image: '/manus-storage/card_physicist_004_7f0b8903.jpg', classType: 'physicist', tier: 'S', tierReason: '防转攻流核心引擎，将防御资源转化为爆发伤害' },
  { id: 'ph005', name: '量子纠缠', type: '初始牌', cost: 0, description: '抽 1 张牌。如果抽到的牌费用 ≥ 2，本回合打出它时费用 -1。', image: '/manus-storage/card_physicist_005_66d17d0c.jpg', classType: 'physicist', tier: 'B', tierReason: '0费过牌+降费，任何build都有用' },

  // 普通牌（10张）
  { id: 'ph006', name: '加速轨道', type: '普通攻击', cost: 1, description: '发射加速粒子，造成 12 点伤害，并使目标「减速」（下回合行动推后）。', image: '/manus-storage/card_physicist_006_9b5fb555.jpg', classType: 'physicist', tier: 'C', tierReason: '泛用攻击+控制，但不配合核心循环' },
  { id: 'ph007', name: '惯性吸收', type: '普通防御', cost: 1, description: '吸收来袭攻击的动能，获得 14 层防火墙，并恢复 5 点生命值。', image: '/manus-storage/card_physicist_007_02cb188c.jpg', classType: 'physicist', tier: 'D', tierReason: '纯防御+回血，对三条build路线均无直接贡献，类似观者的护身' },
  { id: 'ph008', name: '链式反应', type: '普通攻击', cost: 2, description: '触发链式核反应，造成 15 点伤害，并施加「燃烧」（每回合 5 点伤害，持续 3 回合）。', image: '/manus-storage/card_physicist_008_6b41d321.jpg', classType: 'physicist', tier: 'B', tierReason: '燃烧流核心输出牌，稳定挂燃烧' },
  { id: 'ph009', name: '人造恒星', type: '普通攻击', cost: 3, description: '点燃微型恒星，造成 25 点伤害，并对周围目标各造成 10 点溅射。', image: '/manus-storage/card_physicist_009_caa755b6.jpg', classType: 'physicist', tier: 'B', tierReason: '高费AOE，大招流的基础输出' },
  { id: 'ph010', name: '能量守恒', type: '普通技能', cost: 1, description: '将本回合未使用的算力转化为「能量储备」，下回合释放造成等量×8 伤害。', image: '/manus-storage/card_physicist_010_22ce4959.jpg', classType: 'physicist', tier: 'C', tierReason: '算力转伤害，灵活但不核心' },
  { id: 'ph011', name: '时空扭曲', type: '普通技能', cost: 2, description: '扭曲局部时空，使目标下回合行动延迟，自身下回合额外获得 1 点算力。', image: '/manus-storage/card_physicist_011_0d8a5357.jpg', classType: 'physicist', tier: 'C', tierReason: '控制+加算力，泛用但不核心' },
  { id: 'ph012', name: '空间涟漪', type: '普通攻击', cost: 2, description: '制造空间涟漪，对所有目标造成 8 点伤害，并使其防火墙降低 5 层。', image: '/manus-storage/card_physicist_012_49c06293.jpg', classType: 'physicist', tier: 'C', tierReason: 'AOE+破防，泛用' },
  { id: 'ph013', name: '充能', type: '普通技能', cost: 0, description: '为下一张打出的攻击牌充能，使其伤害提升 80%。', image: '/manus-storage/card_physicist_013_a9ad3075.jpg', classType: 'physicist', tier: 'S', tierReason: '大招流核心引擎，0费80%增伤是所有爆发combo的起点' },
  { id: 'ph014', name: '缓冲', type: '普通防御', cost: 1, description: '建立能量缓冲层，获得 8 层防火墙，下一次受到的伤害减少 50%。', image: '/manus-storage/card_physicist_014_70d246d8.jpg', classType: 'physicist', tier: 'D', tierReason: '纯防御，防火墙量低且不配合势能转化（量太少不值得转）' },
  { id: 'ph015', name: '微粒', type: '普通攻击', cost: 1, description: '发射微粒子群，造成 3×4 点伤害（分 3 次各 4 点），每次命中 30% 概率触发「燃烧」。', image: '/manus-storage/card_physicist_015_3f918779.jpg', classType: 'physicist', tier: 'B', tierReason: '燃烧流关键牌，多段攻击高概率挂燃烧' },

  // 稀有牌（8张）
  { id: 'ph016', name: '薛定谔定理', type: '稀有', cost: 2, description: '使目标进入「叠加态」：50% 概率造成 30 点伤害，50% 概率使目标下回合无法行动。', image: '/manus-storage/card_physicist_016_948c6025.jpg', classType: 'physicist', tier: 'C', tierReason: '随机性高，不稳定但两个结果都不差' },
  { id: 'ph017', name: '熵增定律', type: '稀有', cost: 2, description: '使目标所有增益效果持续时间缩短 2 回合，并造成 15 点伤害。每有一个增益被缩短，额外造成 5 点伤害。', image: '/manus-storage/card_physicist_017_687ef446.jpg', classType: 'physicist', tier: 'B', tierReason: '反增益+伤害，对有增益的精英/Boss很强' },
  { id: 'ph018', name: '反物质炸弹', type: '稀有', cost: 3, description: '投掷反物质炸弹，造成 35 点伤害，并使目标防火墙清零。', image: '/manus-storage/card_physicist_018_93819620.jpg', classType: 'physicist', tier: 'B', tierReason: '高伤害+破防，大招流的优质输出牌' },
  { id: 'ph019', name: '质能转换', type: '稀有', cost: 2, description: '将自身 20 点生命值转化为能量，造成 40 点伤害（E=mc²）。如果有「充能」效果，伤害提升至 72 点。', image: '/manus-storage/card_physicist_019_16b3d794.jpg', classType: 'physicist', tier: 'A', tierReason: '大招流核心输出，充能后72点是中期最强单体' },
  { id: 'ph020', name: '光速突破', type: '稀有', cost: 3, description: '突破光速限制，本回合可额外打出 2 张牌，且这 2 张牌费用 -1。', image: '/manus-storage/card_physicist_020_a446b9b9.jpg', classType: 'physicist', tier: 'A', tierReason: '大招流关键牌，额外出牌=更多充能combo机会' },
  { id: 'ph021', name: '引力透镜', type: '稀有', cost: 2, description: '弯曲空间，使下一次攻击绕过目标防火墙直接造成伤害。', image: '/manus-storage/card_physicist_021_a50f4df2.jpg', classType: 'physicist', tier: 'B', tierReason: '穿透防御，对高防敌人价值极高' },
  { id: 'ph022', name: '暗物质凝聚', type: '稀有', cost: 2, description: '凝聚暗物质，获得 25 层持久防火墙（回合结束不清零，不受破防影响）。', image: '/manus-storage/card_physicist_022_6b0f05d1.jpg', classType: 'physicist', tier: 'A', tierReason: '防转攻流核心牌，25层不清零=势能转化的最佳搭档' },
  { id: 'ph023', name: '奇点膨胀', type: '稀有', cost: 3, description: '制造微型奇点，对目标造成 20 点伤害，并将目标拉入「引力场」（无法逃脱，持续 2 回合受到每回合 10 点伤害）。', image: '/manus-storage/card_physicist_023_5bbe5109.jpg', classType: 'physicist', tier: 'B', tierReason: '控制+持续伤害，对Boss有效' },

  // 传奇牌（6张）
  { id: 'ph024', name: '宇宙弦切割', type: '传奇', cost: 4, description: '操控宇宙弦切割目标，造成 50 点伤害，并使目标所有防御失效 2 回合。', image: '/manus-storage/card_physicist_024_33e3f2d5.jpg', classType: 'physicist', tier: 'A', tierReason: '高伤害+破防持续，大招流的终极输出' },
  { id: 'ph025', name: '平行宇宙碰撞', type: '传奇', cost: 4, description: '引导平行宇宙碰撞，对所有目标造成 30 点伤害，并随机施加「燃烧」「减速」或「震荡」。', image: '/manus-storage/card_physicist_025_627c0a20.jpg', classType: 'physicist', tier: 'B', tierReason: 'AOE传奇，随机性降低了可靠性' },
  { id: 'ph026', name: '统一场论', type: '传奇', cost: 3, description: '统一四种基本力，本回合所有攻击牌伤害 +100%，防御牌防火墙 +50%。', image: '/manus-storage/card_physicist_026_5fdd2728.jpg', classType: 'physicist', tier: 'A', tierReason: '全局增幅，任何build都极强' },
  { id: 'ph027', name: '热寂审判', type: '传奇', cost: 5, description: '加速目标热寂进程，使目标所有属性每回合衰减 10%（持续 5 回合），并造成 40 点初始伤害。', image: '/manus-storage/card_physicist_027_01489c77.jpg', classType: 'physicist', tier: 'C', tierReason: '高费长线debuff，对速战build不友好' },
  { id: 'ph028', name: '宇宙大撕裂', type: '传奇', cost: 5, description: '撕裂宇宙结构，对所有目标造成 45 点伤害，并清零所有目标的防火墙和持久防火墙。', image: '/manus-storage/card_physicist_028_9c1075c5.jpg', classType: 'physicist', tier: 'B', tierReason: 'AOE+全破防，对多敌人场景极强' },
  { id: 'ph029', name: '物理奇点', type: '传奇', cost: 4, description: '制造物理奇点，使目标陷入「奇点囚笼」（无法行动 3 回合），并每回合造成 20 点伤害。', image: '/manus-storage/card_physicist_029_5cff0e4d.jpg', classType: 'physicist', tier: 'B', tierReason: '强控制+持续伤害，对Boss极有价值' },

  // 神级牌（4张）
  { id: 'ph030', name: '时空终结', type: '神级', cost: 6, description: '终结局部时空，对目标区域所有生命体造成 80 点伤害，并进入「时空冻结」（3 回合无法行动）。', image: '/manus-storage/card_physicist_030_d82d86b3.jpg', classType: 'physicist', tier: 'B', tierReason: '神级AOE+控制，但6费极难打出' },
  { id: 'ph031', name: '超新星爆发', type: '神级', cost: 5, description: '引爆超新星，对所有目标造成 60 点伤害，并施加「辐射灼烧」（每回合 15 点伤害，持续 4 回合）。', image: '/manus-storage/card_physicist_031_64f5c601.jpg', classType: 'physicist', tier: 'B', tierReason: '燃烧流终极牌，AOE+强DOT' },
  { id: 'ph032', name: '黑洞蒸发', type: '神级', cost: 6, description: '制造微型黑洞并使其蒸发，持续吸收目标生命值（每回合 25 点，持续 5 回合），蒸发时爆炸造成 50 点伤害。', image: '/manus-storage/card_physicist_032_0fbed764.jpg', classType: 'physicist', tier: 'D', tierReason: '6费+5回合才能打满伤害，太慢了，大多数战斗撑不到' },
  { id: 'ph033', name: '万物终焉', type: '神级', cost: 7, description: '使目标承受「万物终焉」：每回合损失当前生命值的 20%，所有治疗无效，持续至战斗结束。每区域限用 1 次。', image: '/manus-storage/card_physicist_033_c6954c2c.jpg', classType: 'physicist', tier: 'C', tierReason: '7费极难打出，百分比伤害对低血量目标递减' },
];

// ==================== 数学家 ====================
// 核心循环: 推导/置换控牌序→数学归纳法递增→多段攻击触发
// Build A: 归纳流 | Build B: 防御翻倍流 | Build C: 穿透+永久加攻流
const mathematicianCards: Card[] = [
  // 初始牌（3张）
  { id: 'm001', name: '分析', type: '初始牌', cost: 1, description: '造成 8 点伤害，如果目标当前生命值低于 50%，额外造成 8 点伤害。', image: '/manus-storage/card_mathematician_001_c37aff88.jpg', classType: 'mathematician', tier: 'C', tierReason: '斩杀型基础攻击，后期有用但不启动循环' },
  { id: 'm002', name: '函数', type: '初始牌', cost: 1, description: '获得 8 层防火墙。如果你当前防火墙为 0，改为获得 12 层。', image: '/manus-storage/card_mathematician_002_aa15e2dd.jpg', classType: 'mathematician', tier: 'C', tierReason: '基础防御，条件加成使其不至于废' },
  { id: 'm003', name: '作图', type: '初始牌', cost: 0, description: '抽 1 张牌。如果手牌少于 3 张，改为抽 2 张。', image: '/manus-storage/card_mathematician_003_b16d2aa9.jpg', classType: 'mathematician', tier: 'B', tierReason: '0费过牌是归纳流的润滑剂，任何build都好用' },

  // 普通攻击牌（4张）
  { id: 'm004', name: '反击', type: '普通攻击', cost: 1, description: '造成 10 点伤害。如果你有防火墙，额外造成 5 点伤害。', image: '/manus-storage/card_mathematician_004_878b8917.jpg', classType: 'mathematician', tier: 'C', tierReason: '防御翻倍流的配套攻击，但不核心' },
  { id: 'm005', name: '塌缩', type: '普通攻击', cost: 2, description: '造成 20 点伤害，并使目标防火墙降低 5 层（持续 2 回合）。', image: '/manus-storage/card_mathematician_005_6956a6a9.jpg', classType: 'mathematician', tier: 'C', tierReason: '中规中矩的攻击+破防' },
  { id: 'm006', name: '切割', type: '普通攻击', cost: 1, description: '连续造成 3 次 5 点伤害（共 15 点）。每次命中若目标有debuff，额外造成 2 点伤害。', image: '/manus-storage/card_mathematician_006_5dabaf6c.jpg', classType: 'mathematician', tier: 'B', tierReason: '多段攻击配合归纳法每段都加伤，核心输出牌' },
  { id: 'm007', name: '绝对值', type: '普通攻击', cost: 2, description: '造成 15 点伤害，并获得 15 层防火墙。', image: '/manus-storage/card_mathematician_007_76a88f08.jpg', classType: 'mathematician', tier: 'B', tierReason: '攻防一体，防御翻倍流的优质牌' },

  // 普通防御牌（3张）
  { id: 'm008', name: '矩阵', type: '普通防御', cost: 1, description: '获得 12 层防火墙。本回合每打出一张技能牌，额外获得 3 层防火墙。', image: '/manus-storage/card_mathematician_008_a26ef8b9.jpg', classType: 'mathematician', tier: 'B', tierReason: '防御翻倍流基础牌，配合技能牌连打可叠高防' },
  { id: 'm009', name: '修正', type: '普通防御', cost: 1, description: '恢复 10 点生命值，并获得 5 层防火墙。', image: '/manus-storage/card_mathematician_009_fe8ab79c.jpg', classType: 'mathematician', tier: 'D', tierReason: '回血+少量防御，对三条build均无贡献' },
  { id: 'm010', name: '存甲', type: '普通防御', cost: 0, description: '将你当前的防火墙保留到下一回合（通常回合结束时防火墙清零）。', image: '/manus-storage/card_mathematician_010_7b2217d4.jpg', classType: 'mathematician', tier: 'B', tierReason: '防御翻倍流关键牌，保留防火墙=下回合收敛翻倍基数更高' },

  // 普通技能牌（3张）
  { id: 'm011', name: '递归', type: '普通技能', cost: 1, description: '从弃牌堆中取回 1 张指定牌到手牌。', image: '/manus-storage/card_mathematician_011_ce3ffd0c.jpg', classType: 'mathematician', tier: 'B', tierReason: '取回关键牌，归纳流可以反复取回归纳法' },
  { id: 'm012', name: '置换', type: '普通技能', cost: 1, description: '将手牌中 1 张牌放入弃牌堆，然后抽 2 张牌。', image: '/manus-storage/card_mathematician_012_401c17f9.jpg', classType: 'mathematician', tier: 'B', tierReason: '过牌+手牌筛选，归纳流的润滑剂' },
  { id: 'm013', name: '推导', type: '普通技能', cost: 0, description: '查看牌库顶 3 张牌，将 1 张放入手牌，其余放回牌库底。', image: '/manus-storage/card_mathematician_013_8537df66.jpg', classType: 'mathematician', tier: 'C', tierReason: '0费看牌，灵活但不如置换高效' },

  // 稀有牌（5张）
  { id: 'm014', name: '展开', type: '稀有', cost: 2, description: '对所有敌人造成 10 点伤害。如果本回合已打出 3 张以上的牌，伤害翻倍。', image: '/manus-storage/card_mathematician_014_3dcaf28a.jpg', classType: 'mathematician', tier: 'B', tierReason: '归纳流的AOE输出，连打后翻倍' },
  { id: 'm015', name: '收敛', type: '稀有', cost: 2, description: '获得 20 层防火墙，回合结束时防火墙翻倍。', image: '/manus-storage/card_mathematician_015_340b441e.jpg', classType: 'mathematician', tier: 'A', tierReason: '防御翻倍流核心牌，20层翻倍=40层，配合存甲=80层' },
  { id: 'm016', name: '超频', type: '稀有', cost: 1, description: '本回合内，每打出一张牌额外获得 1 点算力。', image: '/manus-storage/card_mathematician_016_6ee9388b.jpg', classType: 'mathematician', tier: 'S', tierReason: '归纳流核心引擎，算力经济的关键，打得越多赚得越多' },
  { id: 'm017', name: '逆运算', type: '稀有', cost: 2, description: '将目标上回合对你造成的伤害反射回去（造成等量伤害）。', image: '/manus-storage/card_mathematician_017_8f2d0fda.jpg', classType: 'mathematician', tier: 'D', tierReason: '被动反击，需要先挨打，对主动出击的build无贡献' },
  { id: 'm018', name: '穿透', type: '稀有', cost: 2, description: '造成 25 点伤害，无视目标所有防御。', image: '/manus-storage/card_mathematician_018_61759174.jpg', classType: 'mathematician', tier: 'A', tierReason: '穿透流核心输出，对高防敌人价值极高' },

  // 稀有填充牌（3张）
  { id: 'm019', name: '降维算法', type: '稀有填充', cost: 2, description: '造成 18 点伤害，并使目标进入「降维」状态（无法获得防火墙，持续 1 回合）。', image: '/manus-storage/card_mathematician_019_56c21919.jpg', classType: 'mathematician', tier: 'C', tierReason: '破防+伤害，泛用但不突出' },
  { id: 'm020', name: '函数重载', type: '稀有填充', cost: 1, description: '选择手牌中 1 张牌，本回合内效果翻倍。', image: '/manus-storage/card_mathematician_020_5667a9b8.jpg', classType: 'mathematician', tier: 'A', tierReason: '万能增幅，翻倍归纳法/收敛/穿透都极强' },
  { id: 'm021', name: '维度折叠', type: '稀有填充', cost: 2, description: '获得 15 层防火墙，并抽 2 张牌。', image: '/manus-storage/card_mathematician_021_c311108c.jpg', classType: 'mathematician', tier: 'C', tierReason: '防御+过牌，泛用但不核心' },

  // 传奇牌（5张）
  { id: 'm022', name: '哥德巴赫猜想', type: '传奇', cost: 3, description: '对所有敌人造成 30 点伤害，并施加「素数诅咒」（每回合 5 点伤害，持续 3 回合）。', image: '/manus-storage/card_mathematician_022_9d6590ec.jpg', classType: 'mathematician', tier: 'B', tierReason: 'AOE+DOT，对多敌人场景强' },
  { id: 'm023', name: '黎曼假设', type: '传奇', cost: 3, description: '永久提升你所有攻击牌伤害 +10 点。', image: '/manus-storage/card_mathematician_023_70e7a4a0.jpg', classType: 'mathematician', tier: 'A', tierReason: '永久加攻，越早拿到越强，穿透流核心' },
  { id: 'm024', name: '费马大定理', type: '传奇', cost: 3, description: '永久提升你所有防御牌防火墙 +10 层。', image: '/manus-storage/card_mathematician_024_d2b58c2c.jpg', classType: 'mathematician', tier: 'A', tierReason: '永久加防，防御翻倍流核心' },
  { id: 'm025', name: '数学归纳法', type: '传奇', cost: 2, description: '本回合内，每打出 1 张牌，下一张牌伤害/防御 +5（可叠加，上限 +30）。', image: '/manus-storage/card_mathematician_025_9c84334d.jpg', classType: 'mathematician', tier: 'S', tierReason: '归纳流核心引擎，连打递增是整个职业的灵魂' },
  { id: 'm026', name: '无穷级数', type: '传奇', cost: 3, description: '造成 10 点伤害，触发 5 次（共 50 点）。每次触发受归纳法加成。', image: '/manus-storage/card_mathematician_026_43b3fa46.jpg', classType: 'mathematician', tier: 'B', tierReason: '多段触发配合归纳法极强，但3费较重' },

  // 传奇填充牌（1张）
  { id: 'm027', name: '纳什均衡', type: '传奇填充', cost: 2, description: '使所有敌人进入「均衡」状态（无法攻击，持续 1 回合）。', image: '/manus-storage/card_mathematician_027_5ae702ac.jpg', classType: 'mathematician', tier: 'C', tierReason: '全场控制1回合，防御向但不配合核心循环' },

  // 神级牌（6张）
  { id: 'm028', name: '混沌理论', type: '神级', cost: 4, description: '对所有敌人造成 50 点伤害，并随机触发弃牌堆中 3 张牌的效果。每区域限用 1 次。', image: '/manus-storage/card_mathematician_028_a6e77735.jpg', classType: 'mathematician', tier: 'C', tierReason: '随机性太高，不可控' },
  { id: 'm029', name: '公理系统', type: '神级', cost: 3, description: '本场战斗中，所有牌费用 -1（最低 0）。每区域限用 1 次。', image: '/manus-storage/card_mathematician_029_81adda21.jpg', classType: 'mathematician', tier: 'B', tierReason: '全局降费，归纳流打更多牌' },
  { id: 'm030', name: '拓扑变换', type: '神级', cost: 3, description: '将战场上所有状态效果（敌方增益和己方减益）互换。每区域限用 1 次。', image: '/manus-storage/card_mathematician_030_d3047a44.jpg', classType: 'mathematician', tier: 'D', tierReason: '极其situational，大多数时候用不上' },
  { id: 'm031', name: '数学奇点', type: '神级', cost: 5, description: '对单体目标造成 999 点伤害。每区域限用 1 次。', image: '/manus-storage/card_mathematician_031_9ca7ac26.jpg', classType: 'mathematician', tier: 'C', tierReason: '秒杀牌但5费很难打出，且只能单体' },
  { id: 'm032', name: '天眼', type: '神级', cost: 2, description: '揭示地图所有隐藏节点，接下来 3 场战斗敌人初始生命值减半。整局限用 1 次。', image: '/manus-storage/card_mathematician_032_154b22f5.jpg', classType: 'mathematician', tier: 'C', tierReason: '探索向，战斗中价值低' },
  { id: 'm033', name: '覆写', type: '神级', cost: 3, description: '强制夺取一个非Boss敌人的控制权，使其为你作战。整局限用 1 次。', image: '/manus-storage/card_mathematician_033_6ea51dde.jpg', classType: 'mathematician', tier: 'C', tierReason: '强力但限制多（非Boss+整局1次）' },
];

// ==================== 医学家 ====================
// 核心循环: 感染/中毒叠加→交叉感染扩散→肾上腺素爆发→治疗续航
// Build A: 毒素流 | Build B: 续航流 | Build C: 爆发流
const medicCards: Card[] = [
  // 初始牌（3张）
  { id: 'med001', name: '手术刀', type: '初始牌', cost: 1, description: '造成 10 点伤害。如果目标有「出血」状态，额外造成 5 点伤害。', image: '/manus-storage/card_medic_001_32f60a49.jpg', classType: 'medic', tier: 'C', tierReason: '基础攻击，出血协同但本身不挂出血' },
  { id: 'med002', name: '急救包', type: '初始牌', cost: 1, description: '恢复 12 点生命值。低于 50% 生命值时改为恢复 20 点。', image: '/manus-storage/card_medic_002_73c1174a.jpg', classType: 'medic', tier: 'C', tierReason: '基础治疗，续航流的基础素材' },
  { id: 'med003', name: '提取', type: '初始牌', cost: 0, description: '抽 1 张牌。如果抽到治疗牌，额外恢复 5 点生命值。', image: '/manus-storage/card_medic_003_da6d7024.jpg', classType: 'medic', tier: 'B', tierReason: '0费过牌+条件回血，任何build的润滑剂' },

  // 普通攻击牌（4张）
  { id: 'med004', name: '抗体注射', type: '普通攻击', cost: 1, description: '造成 8 点伤害，并施加「感染」（每回合 3 点伤害，持续 2 回合）。', image: '/manus-storage/card_medic_004_4862de1a.jpg', classType: 'medic', tier: 'B', tierReason: '毒素流基础挂感染牌' },
  { id: 'med005', name: '静脉注射', type: '普通攻击', cost: 2, description: '造成 15 点伤害，并施加「中毒」（每回合 5 点伤害，持续 3 回合）。', image: '/manus-storage/card_medic_005_b271f2f2.jpg', classType: 'medic', tier: 'B', tierReason: '毒素流核心挂毒牌，DOT总量15点' },
  { id: 'med006', name: '组织清创', type: '普通攻击', cost: 1, description: '造成 12 点伤害，并移除目标 1 层增益。', image: '/manus-storage/card_medic_006_99c4e20f.jpg', classType: 'medic', tier: 'C', tierReason: '泛用攻击+去增益' },
  { id: 'med007', name: '麻醉剂', type: '普通攻击', cost: 2, description: '使目标进入「麻醉」（跳过下一回合行动）。', image: '/manus-storage/card_medic_007_923614ed.jpg', classType: 'medic', tier: 'C', tierReason: '强控制但不配合毒素循环' },

  // 普通防御牌（3张）
  { id: 'med008', name: '端粒封锁', type: '普通防御', cost: 1, description: '获得 10 层防火墙。受到伤害时若防火墙 > 0，额外恢复 2 点生命值。', image: '/manus-storage/card_medic_008_828dd7f0.jpg', classType: 'medic', tier: 'D', tierReason: '纯防御+微量回血，对三条build均无直接贡献' },
  { id: 'med009', name: '临床实验', type: '普通防御', cost: 1, description: '恢复 8 点生命值，并抽 1 张牌。', image: '/manus-storage/card_medic_009_87290499.jpg', classType: 'medic', tier: 'C', tierReason: '回血+过牌，续航流的基础牌' },
  { id: 'med010', name: '毒性爆发', type: '普通防御', cost: 2, description: '对所有敌人造成等同于它们身上「中毒」层数×3 的伤害。', image: '/manus-storage/card_medic_010_d6149371.jpg', classType: 'medic', tier: 'A', tierReason: '毒素流的爆发输出，中毒叠高后一波收割' },

  // 普通技能牌（3张）
  { id: 'med011', name: '干细胞增殖', type: '普通技能', cost: 1, description: '本回合结束时额外恢复 5 点生命值（可叠加，每叠加一次+3）。', image: '/manus-storage/card_medic_011_33afe3cd.jpg', classType: 'medic', tier: 'C', tierReason: '续航流的叠加回血' },
  { id: 'med012', name: '交叉感染', type: '普通技能', cost: 1, description: '将目标身上的所有「感染」和「中毒」状态复制给另一个目标（原目标保留）。', image: '/manus-storage/card_medic_012_3dd61f29.jpg', classType: 'medic', tier: 'S', tierReason: '毒素流核心引擎，将DOT扩散到全场，多敌人时价值爆炸' },
  { id: 'med013', name: '急救', type: '普通技能', cost: 0, description: '立即恢复 15 点生命值，但本回合不能再使用治疗牌。', image: '/manus-storage/card_medic_013_352f0170.jpg', classType: 'medic', tier: 'C', tierReason: '紧急回血但限制后续治疗' },

  // 稀有牌（5张）
  { id: 'med014', name: '挂水', type: '稀有', cost: 1, description: '每回合开始时恢复 8 点生命值（持续 3 回合）。总恢复 24 点。', image: '/manus-storage/card_medic_014_5858ddd2.jpg', classType: 'medic', tier: 'B', tierReason: '续航流核心牌，1费24点回复效率极高' },
  { id: 'med015', name: '微创手术', type: '稀有', cost: 2, description: '造成 20 点伤害，并恢复 10 点生命值。如果目标有「出血」，额外造成 10 点。', image: '/manus-storage/card_medic_015_ea65cc08.jpg', classType: 'medic', tier: 'B', tierReason: '攻防一体，爆发流的稳定输出' },
  { id: 'med016', name: '肾上腺素', type: '稀有', cost: 1, description: '本回合所有攻击牌伤害翻倍，但回合结束时受到 10 点反噬。', image: '/manus-storage/card_medic_016_65ee2f5f.jpg', classType: 'medic', tier: 'S', tierReason: '爆发流核心引擎，翻倍伤害是所有combo的起点' },
  { id: 'med017', name: '代偿机制', type: '稀有', cost: 2, description: '当生命值低于 30% 时，获得 20 层防火墙并恢复 20 点生命值。', image: '/manus-storage/card_medic_017_98a3923a.jpg', classType: 'medic', tier: 'C', tierReason: '保命牌，条件触发不稳定' },
  { id: 'med018', name: '重症监护', type: '稀有', cost: 2, description: '使目标进入「重症」（受到的所有伤害翻倍，持续 2 回合）。', image: '/manus-storage/card_medic_018_7d2d2bd2.jpg', classType: 'medic', tier: 'A', tierReason: '增伤debuff，配合肾上腺素=四倍伤害' },

  // 稀有填充牌（3张）
  { id: 'med019', name: '特效药', type: '稀有填充', cost: 2, description: '移除自身所有负面状态，并恢复 25 点生命值。', image: '/manus-storage/card_medic_019_7f5c5f69.jpg', classType: 'medic', tier: 'C', tierReason: '解debuff+回血，situational' },
  { id: 'med020', name: '全能灵药', type: '稀有填充', cost: 3, description: '恢复 40 点生命值，并使你本回合免疫所有伤害。', image: '/manus-storage/card_medic_020_a57428ca.jpg', classType: 'medic', tier: 'C', tierReason: '大量回血+免疫，保命用' },
  { id: 'med021', name: '生命重塑', type: '稀有填充', cost: 3, description: '将生命值重置为最大值的 70%（低于则恢复，高于不变）。', image: '/manus-storage/card_medic_021_1dbb4aa7.jpg', classType: 'medic', tier: 'D', tierReason: '3费且效果不稳定，高血量时完全无用' },

  // 传奇牌（5张）
  { id: 'med022', name: '基因编辑', type: '传奇', cost: 3, description: '永久提升所有治疗牌恢复量 +15 点。', image: '/manus-storage/card_medic_022_6f04a92b.jpg', classType: 'medic', tier: 'A', tierReason: '续航流核心，永久加治疗越早拿越强' },
  { id: 'med023', name: '纳米手术', type: '传奇', cost: 3, description: '对目标造成 35 点伤害，并移除目标所有增益。', image: '/manus-storage/card_medic_023_6dd21ac0.jpg', classType: 'medic', tier: 'B', tierReason: '高伤害+全去增益，对精英/Boss强' },
  { id: 'med024', name: '神经再生', type: '传奇', cost: 3, description: '永久提升最大生命值 +30，并立即恢复 30 点。', image: '/manus-storage/card_medic_024_1c213290.jpg', classType: 'medic', tier: 'A', tierReason: '续航流核心，永久加血上限' },
  { id: 'med025', name: '器官培育', type: '传奇', cost: 2, description: '获得「备用器官」：生命值归零时自动恢复 50 点（每场战斗 1 次）。', image: '/manus-storage/card_medic_025_0ae3586d.jpg', classType: 'medic', tier: 'A', tierReason: '保命神牌，等于多一条命' },
  { id: 'med026', name: '免疫风暴', type: '传奇', cost: 3, description: '对所有敌人造成 25 点伤害，并施加「免疫崩溃」（无法获得增益，持续 2 回合）。', image: '/manus-storage/card_medic_026_b2cfc154.jpg', classType: 'medic', tier: 'B', tierReason: 'AOE+反增益，对多敌人场景强' },

  // 传奇填充牌（2张）
  { id: 'med027', name: '细胞凋亡', type: '传奇填充', cost: 2, description: '使目标进入「凋亡」（每回合失去 10% 当前生命值，持续 3 回合）。', image: '/manus-storage/card_medic_027_3a75ea64.jpg', classType: 'medic', tier: 'C', tierReason: '百分比伤害对高血量Boss强，但递减' },
  { id: 'med033', name: '神经毒素', type: '传奇填充', cost: 3, description: '使目标进入「神经麻痹」（每回合行动数 -1，持续 3 回合）。', image: '/manus-storage/card_medic_033_e83f06e9.jpg', classType: 'medic', tier: 'C', tierReason: '控制向，不配合毒素循环' },

  // 神级牌（4张）
  { id: 'med028', name: '永生协议', type: '神级', cost: 4, description: '本场战斗中，致命伤害改为将生命值降至 1 点（最多触发 2 次）。每区域限用 1 次。', image: '/manus-storage/card_medic_028_cce4cc5f.jpg', classType: 'medic', tier: 'B', tierReason: '续航流终极保命，等于多两条命' },
  { id: 'med029', name: '病毒觉醒', type: '神级', cost: 4, description: '对所有敌人造成 60 点伤害，并施加「病毒感染」（每回合 15 点伤害，持续 3 回合）。每区域限用 1 次。', image: '/manus-storage/card_medic_029_70ddc708.jpg', classType: 'medic', tier: 'B', tierReason: '毒素流终极牌，AOE+强DOT' },
  { id: 'med030', name: '时空手术', type: '神级', cost: 5, description: '将战场时间回溯 1 回合（所有状态恢复到上回合开始时）。每区域限用 1 次。', image: '/manus-storage/card_medic_030_b8de5c1f.jpg', classType: 'medic', tier: 'C', tierReason: '5费极难打出，且回溯可能清掉自己的DOT' },
  { id: 'med031', name: '生命奇点', type: '神级', cost: 5, description: '恢复所有生命值，并免疫所有伤害 2 回合。每区域限用 1 次。', image: '/manus-storage/card_medic_031_4df63aeb.jpg', classType: 'medic', tier: 'C', tierReason: '终极保命但5费很难打出' },

  // 额外牌
  { id: 'med032', name: '血液净化', type: '稀有填充', cost: 2, description: '移除自身所有「中毒」和「感染」，并对施加者反射等量伤害。', image: '/manus-storage/card_medic_032_780bb5d6.jpg', classType: 'medic', tier: 'C', tierReason: '解毒+反伤，situational' },
];

// ==================== 心理学家 ====================
// 核心循环: 动摇/混乱debuff→催眠跳回合→精神穿刺无视防御
// Build A: 控制流 | Build B: 干扰流 | Build C: 穿透流
const psychologistCards: Card[] = [
  // 初始牌（5张）
  { id: 'psy001', name: '言语打击', type: '初始牌', cost: 1, description: '造成 7 点伤害，并施加「动摇」（下回合攻击力 -3）。', image: '/manus-storage/card_psychologist_001_e0008c92.jpg', classType: 'psychologist', tier: 'C', tierReason: '基础攻击+debuff，控制流的基础素材' },
  { id: 'psy002', name: '心理防线', type: '初始牌', cost: 1, description: '获得 10 层防火墙。', image: '/manus-storage/card_psychologist_002_13298720.jpg', classType: 'psychologist', tier: 'D', tierReason: '纯防御，对三条build均无贡献' },
  { id: 'psy003', name: '潜意识植入', type: '初始牌', cost: 1, description: '使目标下回合随机弃掉 1 张手牌。', image: '/manus-storage/card_psychologist_003_0190438a.jpg', classType: 'psychologist', tier: 'B', tierReason: '干扰流基础牌，破坏敌人手牌节奏' },
  { id: 'psy004', name: '共情', type: '初始牌', cost: 0, description: '抽 1 张牌。上回合受到伤害则改为抽 2 张。', image: '/manus-storage/card_psychologist_004_7ab22099.jpg', classType: 'psychologist', tier: 'B', tierReason: '0费过牌，任何build的润滑剂' },
  { id: 'psy005', name: '认知重塑', type: '初始牌', cost: 2, description: '将目标手牌全部洗回牌库，重新抽 3 张（打乱手牌节奏）。', image: '/manus-storage/card_psychologist_005_29500883.jpg', classType: 'psychologist', tier: 'C', tierReason: '干扰流的高费初始牌' },

  // 普通攻击牌（4张）
  { id: 'psy006', name: '精神穿刺', type: '普通攻击', cost: 1, description: '造成 12 点伤害，无视目标防火墙。', image: '/manus-storage/card_psychologist_006_cabc72e7.jpg', classType: 'psychologist', tier: 'B', tierReason: '穿透流核心输出，无视防御' },
  { id: 'psy007', name: '逻辑陷阱', type: '普通攻击', cost: 2, description: '造成 10 点伤害，目标下回合所有牌费用 +1。', image: '/manus-storage/card_psychologist_007_da1a0178.jpg', classType: 'psychologist', tier: 'B', tierReason: '干扰流核心牌，增加敌人费用=减少敌人行动' },
  { id: 'psy008', name: '思维窃取', type: '普通攻击', cost: 2, description: '随机复制目标 1 张手牌加入你的手牌，并造成 8 点伤害。', image: '/manus-storage/card_psychologist_008_e80b55fe.jpg', classType: 'psychologist', tier: 'C', tierReason: '随机性高，但偶尔能偷到好牌' },
  { id: 'psy009', name: '脑波干扰', type: '普通攻击', cost: 1, description: '对所有敌人造成 5 点伤害，并施加「混乱」1 回合。', image: '/manus-storage/card_psychologist_009_bf2c796f.jpg', classType: 'psychologist', tier: 'B', tierReason: 'AOE+混乱，控制流的群控牌' },

  // 普通防御牌（3张）
  { id: 'psy010', name: '自我反省', type: '普通防御', cost: 1, description: '获得 8 层防火墙，并从弃牌堆取回 1 张牌。', image: '/manus-storage/card_psychologist_010_1e620a05.jpg', classType: 'psychologist', tier: 'B', tierReason: '防御+取回关键牌，灵活性高' },
  { id: 'psy011', name: '情绪宣泄', type: '普通防御', cost: 0, description: '弃掉 1 张手牌，获得该牌费用×8 的防火墙。', image: '/manus-storage/card_psychologist_011_07b49c45.jpg', classType: 'psychologist', tier: 'C', tierReason: '0费防御但需要弃牌，灵活' },
  { id: 'psy012', name: '倾听', type: '普通防御', cost: 1, description: '恢复 12 点生命值。手牌为 0 时改为恢复 20 点。', image: '/manus-storage/card_psychologist_012_b037fa9c.jpg', classType: 'psychologist', tier: 'D', tierReason: '纯治疗，对三条build均无贡献' },

  // 普通技能牌（3张）
  { id: 'psy013', name: '疏导', type: '普通技能', cost: 1, description: '移除目标所有增益，并使其下回合无法使用技能牌。', image: '/manus-storage/card_psychologist_013_0ce67057.jpg', classType: 'psychologist', tier: 'C', tierReason: '去增益+封技能，对特定敌人强' },
  { id: 'psy014', name: '安抚', type: '普通技能', cost: 1, description: '使目标进入「平静」（下回合攻击力降为 0，但防御 +5）。', image: '/manus-storage/card_psychologist_014_e91f3b6a.jpg', classType: 'psychologist', tier: 'C', tierReason: '控制流的软控制，降攻但加防' },
  { id: 'psy015', name: '幻觉种植', type: '普通技能', cost: 2, description: '使目标下回合随机攻击（可能攻击自己或队友）。', image: '/manus-storage/card_psychologist_015_e0d2724d.jpg', classType: 'psychologist', tier: 'B', tierReason: '控制流核心牌，让敌人自相残杀' },

  // 稀有牌（5张）
  { id: 'psy016', name: '突触风暴', type: '稀有', cost: 3, description: '对所有敌人造成 15 点伤害，并施加「眩晕」1 回合。', image: '/manus-storage/card_psychologist_016_1d5347fc.jpg', classType: 'psychologist', tier: 'B', tierReason: 'AOE+眩晕，控制流的群控' },
  { id: 'psy017', name: '洞察', type: '稀有', cost: 1, description: '查看对手手牌，选择 1 张使其本回合无法使用。', image: '/manus-storage/card_psychologist_017_17a28901.jpg', classType: 'psychologist', tier: 'A', tierReason: '干扰流核心牌，精准封锁敌人关键牌' },
  { id: 'psy018', name: '共振', type: '稀有', cost: 2, description: '复制目标上回合最后一张牌的效果（对你生效）。', image: '/manus-storage/card_psychologist_018_9950f943.jpg', classType: 'psychologist', tier: 'C', tierReason: '灵活但不可控，取决于敌人出了什么' },
  { id: 'psy019', name: '催眠', type: '稀有', cost: 2, description: '使目标进入「深度催眠」（跳过下一回合）。', image: '/manus-storage/card_psychologist_019_a369814e.jpg', classType: 'psychologist', tier: 'S', tierReason: '控制流核心引擎，跳过敌人回合=无伤过回合' },
  { id: 'psy020', name: '顿悟', type: '稀有', cost: 0, description: '抽 3 张牌，然后弃掉 1 张。', image: '/manus-storage/card_psychologist_020_779c6ed0.jpg', classType: 'psychologist', tier: 'S', tierReason: '0费抽3是所有build的核心引擎，快速找到关键牌' },

  // 稀有填充牌（3张）
  { id: 'psy021', name: '灵魂互换', type: '稀有填充', cost: 3, description: '交换你与目标当前生命值。', image: '/manus-storage/card_psychologist_021_d450faf1.jpg', classType: 'psychologist', tier: 'C', tierReason: '高风险高回报，低血量时极强' },
  { id: 'psy022', name: '精神控制', type: '稀有填充', cost: 3, description: '控制目标 1 回合，使其攻击自己或队友。', image: '/manus-storage/card_psychologist_022_0aea57cb.jpg', classType: 'psychologist', tier: 'B', tierReason: '控制流的强力牌，让敌人自残' },
  { id: 'psy023', name: '集体潜意识', type: '稀有填充', cost: 2, description: '所有友方各抽 1 张牌，并获得 5 层防火墙。', image: '/manus-storage/card_psychologist_023_2e1b4a18.jpg', classType: 'psychologist', tier: 'D', tierReason: '单人游戏中友方概念不存在，效果大打折扣' },

  // 传奇牌（5张）
  { id: 'psy024', name: '记忆抹除', type: '传奇', cost: 4, description: '使目标永久失去手牌中费用最高的 1 张牌（从牌库移除）。', image: '/manus-storage/card_psychologist_024_3efd40da.jpg', classType: 'psychologist', tier: 'A', tierReason: '干扰流终极牌，永久削弱敌人牌库' },
  { id: 'psy025', name: '人格分裂', type: '传奇', cost: 3, description: '使目标分裂为两个人格，各有 50% 生命值，需分别击败。', image: '/manus-storage/card_psychologist_025_1ff3a5d5.jpg', classType: 'psychologist', tier: 'C', tierReason: '创意十足但实战中分裂=多打一个敌人' },
  { id: 'psy026', name: '意识侵占', type: '传奇', cost: 4, description: '完全控制目标 2 回合，期间目标行动由你决定。', image: '/manus-storage/card_psychologist_026_cee84879.jpg', classType: 'psychologist', tier: 'A', tierReason: '控制流终极牌，2回合完全控制' },
  { id: 'psy027', name: '梦境崩塌', type: '传奇', cost: 5, description: '对目标造成 40 点伤害，并使其手牌全部变为「噩梦碎片」（无法使用的废牌）。', image: '/manus-storage/card_psychologist_027_571add75.jpg', classType: 'psychologist', tier: 'A', tierReason: '干扰流终极牌，彻底瘫痪敌人手牌' },
  { id: 'psy028', name: '心理奇点', type: '传奇', cost: 4, description: '使目标所有增益反转为减益（持续 3 回合）。', image: '/manus-storage/card_psychologist_028_34eac06c.jpg', classType: 'psychologist', tier: 'B', tierReason: '反增益，对有大量增益的Boss极强' },

  // 传奇填充牌（2张）
  { id: 'psy029', name: '虚空凝视', type: '传奇填充', cost: 3, description: '使目标陷入「虚空恐惧」（每回合 8 点精神伤害，持续 4 回合）。', image: '/manus-storage/card_psychologist_029_9c02abe2.jpg', classType: 'psychologist', tier: 'C', tierReason: 'DOT但心理学家不是DOT职业' },
  { id: 'psy030', name: '精神奴役', type: '传奇填充', cost: 4, description: '永久降低目标最大生命值 20 点。', image: '/manus-storage/card_psychologist_030_e3af395f.jpg', classType: 'psychologist', tier: 'C', tierReason: '永久削弱但20点在后期不算多' },

  // 神级牌（3张）
  { id: 'psy031', name: '认知重构', type: '神级', cost: 5, description: '重置目标所有状态（清除所有增益与减益），并使其本回合无法行动。每区域限用 1 次。', image: '/manus-storage/card_psychologist_031_36f4e59e.jpg', classType: 'psychologist', tier: 'C', tierReason: '清状态+控制，但也清掉自己给的debuff' },
  { id: 'psy032', name: '时间感知扭曲', type: '神级', cost: 6, description: '使目标陷入「时间扭曲」（每回合行动数减半，持续整场战斗）。每区域限用 1 次。', image: '/manus-storage/card_psychologist_032_9d1c84b2.jpg', classType: 'psychologist', tier: 'B', tierReason: '永久半速，对Boss极强但6费难打出' },
  { id: 'psy033', name: '心理奇迹', type: '神级', cost: 7, description: '恢复至满血，对所有敌人造成 50 点精神伤害，并施加「崩溃」3 回合。每区域限用 1 次。', image: '/manus-storage/card_psychologist_033_a747c838.jpg', classType: 'psychologist', tier: 'C', tierReason: '7费极难打出' },
];

// ==================== 考古学家 ====================
// 核心循环: 发掘化石→鉴定/粉碎化石→触发化石协同效果
// Build A: 化石流 | Build B: 遗物流 | Build C: 防御流
const archaeologistCards: Card[] = [
  // 初始牌（5张）
  { id: 'arc001', name: '考古铁镐', type: '初始牌', cost: 1, description: '造成 10 点伤害。如果目标有「化石碎片」状态，额外造成 8 点伤害。', image: '/manus-storage/card_archaeologist_001_38383553.jpg', classType: 'archaeologist', tier: 'C', tierReason: '基础攻击，化石协同但本身不产化石' },
  { id: 'arc002', name: '防尘护服', type: '初始牌', cost: 1, description: '获得 10 层防火墙。手牌中有「化石」时额外获得 5 层。', image: '/manus-storage/card_archaeologist_002_6baed456.jpg', classType: 'archaeologist', tier: 'C', tierReason: '基础防御+化石协同' },
  { id: 'arc003', name: '鉴定', type: '初始牌', cost: 1, description: '粉碎手牌中 1 张「化石」，抽 2 张牌。', image: '/manus-storage/card_archaeologist_003_71a2e65a.jpg', classType: 'archaeologist', tier: 'S', tierReason: '化石流核心引擎，粉碎化石+过牌=化石经济的起点' },
  { id: 'arc004', name: '文物修复', type: '初始牌', cost: 2, description: '粉碎手牌中 1 张「化石」，恢复 15 点生命值。', image: '/manus-storage/card_archaeologist_004_0bb7d33a.jpg', classType: 'archaeologist', tier: 'C', tierReason: '化石消耗+回血，续航用' },
  { id: 'arc005', name: '抛沙', type: '初始牌', cost: 1, description: '造成 8 点伤害，施加「盲目」（攻击 50% 落空，持续 2 回合）。', image: '/manus-storage/card_archaeologist_005_31021972.jpg', classType: 'archaeologist', tier: 'C', tierReason: '控制+伤害，泛用' },

  // 普通牌（10张）
  { id: 'arc006', name: '地层探测', type: '普通攻击', cost: 1, description: '造成 12 点伤害。将 1 张「化石」洗入牌库。', image: '/manus-storage/card_archaeologist_006_4fb3520d.jpg', classType: 'archaeologist', tier: 'B', tierReason: '化石流的化石生产牌，攻击同时补充化石' },
  { id: 'arc007', name: '地下陵墓', type: '普通防御', cost: 1, description: '获得 15 层防火墙。本回合粉碎过「化石」则防火墙翻倍（30层）。', image: '/manus-storage/card_archaeologist_007_9ec41812.jpg', classType: 'archaeologist', tier: 'B', tierReason: '防御流核心牌，粉碎化石后30层防火墙极强' },
  { id: 'arc008', name: '古老咒语', type: '普通技能', cost: 0, description: '随机施加 1 个debuff（疲惫/盲目/装甲降解/减速）。', image: '/manus-storage/card_archaeologist_008_0955a103.jpg', classType: 'archaeologist', tier: 'C', tierReason: '0费debuff，随机但免费' },
  { id: 'arc009', name: '强光探照', type: '普通技能', cost: 1, description: '抽 2 张牌。抽到「化石」时额外获得 2 点算力。', image: '/manus-storage/card_archaeologist_009_40e8ae74.jpg', classType: 'archaeologist', tier: 'S', tierReason: '化石流核心引擎，过牌+化石经济加速' },
  { id: 'arc010', name: '遗迹守卫', type: '普通攻击', cost: 2, description: '造成 20 点伤害。手牌中有「化石」时伤害翻倍（40点）。', image: '/manus-storage/card_archaeologist_010_6832d1ba.jpg', classType: 'archaeologist', tier: 'A', tierReason: '化石流核心输出，40点伤害是中期最强单体之一' },
  { id: 'arc011', name: '碳十四加速', type: '普通攻击', cost: 1, description: '施加 2 层「输出衰减」（每层降低攻击力 5%，持续 2 回合）。', image: '/manus-storage/card_archaeologist_011_29febb18.jpg', classType: 'archaeologist', tier: 'D', tierReason: '不造成伤害的攻击牌，对核心循环无贡献' },
  { id: 'arc012', name: '遗物扫描', type: '普通技能', cost: 1, description: '查看牌库顶 3 张牌，将所有「化石」放入手牌，其余放回。', image: '/manus-storage/card_archaeologist_012_f357ca99.jpg', classType: 'archaeologist', tier: 'B', tierReason: '化石流的化石搜索牌' },
  { id: 'arc013', name: '发掘', type: '普通技能', cost: 1, description: '抽 2 张牌，将 1 张「化石」洗入牌库。', image: '/manus-storage/card_archaeologist_013_be26d7d8.jpg', classType: 'archaeologist', tier: 'B', tierReason: '过牌+化石生产，化石流的基础循环牌' },
  { id: 'arc014', name: '拓片', type: '普通防御', cost: 1, description: '获得 10 层防火墙，抽 1 张牌。', image: '/manus-storage/card_archaeologist_014_41097569.jpg', classType: 'archaeologist', tier: 'D', tierReason: '防御+过牌但不配合化石循环' },
  { id: 'arc015', name: '扫雷', type: '普通攻击', cost: 0, description: '造成 5 点伤害。目标有「盲目」时伤害提升至 15 点。', image: '/manus-storage/card_archaeologist_015_1b6883b3.jpg', classType: 'archaeologist', tier: 'C', tierReason: '0费攻击，配合抛沙有用但不核心' },

  // 稀有牌（8张）
  { id: 'arc016', name: '博物馆长', type: '稀有', cost: 2, description: '本场战斗中，每粉碎 1 张「化石」，所有攻击牌伤害 +2（永久叠加）。', image: '/manus-storage/card_archaeologist_016_abad462a.jpg', classType: 'archaeologist', tier: 'A', tierReason: '化石流核心增幅，越早拿到越强' },
  { id: 'arc017', name: '黄金面具', type: '稀有', cost: 3, description: '获得 30 层防火墙，并获得「强化」（攻击力 +30%，持续 3 回合）。', image: '/manus-storage/card_archaeologist_017_ed07d69d.jpg', classType: 'archaeologist', tier: 'B', tierReason: '遗物流的强力牌，攻防一体' },
  { id: 'arc018', name: '罗塞塔石碑', type: '稀有', cost: 1, description: '将手牌中所有「化石」变为随机稀有牌（本场战斗有效）。', image: '/manus-storage/card_archaeologist_018_87d77074.jpg', classType: 'archaeologist', tier: 'A', tierReason: '化石→稀有牌的转化，化石流的质量提升' },
  { id: 'arc019', name: '盗墓笔记', type: '稀有', cost: 0, description: '查看牌库顶 3 张牌，将所有「化石」放入手牌，其余丢弃。', image: '/manus-storage/card_archaeologist_019_eabbf0bc.jpg', classType: 'archaeologist', tier: 'B', tierReason: '0费化石搜索+瘦牌库' },
  { id: 'arc020', name: '木乃伊诅咒', type: '稀有', cost: 2, description: '对所有敌人造成 15 点伤害，并施加 2 层「装甲降解」（持续 2 回合）。', image: '/manus-storage/card_archaeologist_020_bfbf5616.jpg', classType: 'archaeologist', tier: 'C', tierReason: 'AOE+debuff，泛用' },
  { id: 'arc021', name: '勘探', type: '稀有', cost: 2, description: '造成 15 点伤害，抽 2 张牌。抽到「化石」额外造成 10 点伤害。', image: '/manus-storage/card_archaeologist_021_f52ad7bf.jpg', classType: 'archaeologist', tier: 'B', tierReason: '攻击+过牌+化石协同' },
  { id: 'arc022', name: '古代造物', type: '稀有', cost: 1, description: '召唤「古代石像」（HP 50，每回合对敌人造成 10 点伤害，持续 3 回合）。', image: '/manus-storage/card_archaeologist_022_0af73612.jpg', classType: 'archaeologist', tier: 'B', tierReason: '遗物流的召唤物，持续输出' },
  { id: 'arc023', name: '鉴定·高级', type: '稀有', cost: 0, description: '选择手牌中 1 张牌，本回合费用变为 0。', image: '/manus-storage/card_archaeologist_023_94368748.jpg', classType: 'archaeologist', tier: 'A', tierReason: '0费降费，任何build都极强' },

  // 传奇牌（6张）
  { id: 'arc024', name: '法老王苏醒', type: '传奇', cost: 3, description: '召唤「法老王」（HP 100，每回合造成 20 点伤害）为你作战。', image: '/manus-storage/card_archaeologist_024_8d98168a.jpg', classType: 'archaeologist', tier: 'A', tierReason: '遗物流终极召唤，持续高输出' },
  { id: 'arc025', name: '失落文明', type: '传奇', cost: 2, description: '将牌库中所有普通牌粉碎，每粉碎一张获得 10 层防火墙。', image: '/manus-storage/card_archaeologist_025_7b0a602f.jpg', classType: 'archaeologist', tier: 'B', tierReason: '防御流+瘦牌库，后期极强' },
  { id: 'arc026', name: '时间胶囊', type: '传奇', cost: 3, description: '保存当前生命值、防火墙和手牌状态。下回合开始时恢复到该状态。', image: '/manus-storage/card_archaeologist_026_f4517b31.jpg', classType: 'archaeologist', tier: 'C', tierReason: '保险牌，situational' },
  { id: 'arc027', name: '遗迹', type: '传奇', cost: 3, description: '获得 40 层防火墙，抽 3 张牌。抽到「化石」额外获得 20 层。', image: '/manus-storage/card_archaeologist_027_056a6746.jpg', classType: 'archaeologist', tier: 'B', tierReason: '防御流的大防御+过牌' },
  { id: 'arc028', name: '史诗', type: '传奇', cost: 1, description: '将手牌中所有「化石」变为随机传奇牌（本回合有效）。', image: '/manus-storage/card_archaeologist_028_0637df1f.jpg', classType: 'archaeologist', tier: 'B', tierReason: '化石→传奇的升级版罗塞塔' },
  { id: 'arc029', name: '传说', type: '传奇', cost: 2, description: '对所有敌人造成 20 点伤害，将 2 张「化石」洗入牌库。', image: '/manus-storage/card_archaeologist_029_46399226.jpg', classType: 'archaeologist', tier: 'C', tierReason: 'AOE+化石生产，泛用' },

  // 神级牌（4张）
  { id: 'arc030', name: '真理之口', type: '神级', cost: 2, description: '覆写卡组中 2 张任意牌（替换为更强版本）。每区域限用 1 次。', image: '/manus-storage/card_archaeologist_030_d4848631.jpg', classType: 'archaeologist', tier: 'B', tierReason: '永久强化卡组' },
  { id: 'arc031', name: '亚特兰蒂斯', type: '神级', cost: 4, description: '恢复 30% 生命值，并获得 1 件随机稀有级装备。每区域限用 1 次。', image: '/manus-storage/card_archaeologist_031_11d9ecc1.jpg', classType: 'archaeologist', tier: 'C', tierReason: '随机装备不可控' },
  { id: 'arc032', name: '历史重构', type: '神级', cost: 3, description: '将本场战斗中粉碎的最多 3 张牌回到手牌，费用变为 0。每区域限用 1 次。', image: '/manus-storage/card_archaeologist_032_9696a5b0.jpg', classType: 'archaeologist', tier: 'B', tierReason: '化石流的回收牌，取回被粉碎的好牌' },
  { id: 'arc033', name: '不朽丰碑', type: '神级', cost: 0, description: '最大生命值永久提升 20%。每区域限用 1 次。', image: '/manus-storage/card_archaeologist_033_fa95cae4.jpg', classType: 'archaeologist', tier: 'C', tierReason: '永久加血上限，但不影响战斗节奏' },
];

// ==================== 工程师 ====================
// 核心循环: 召唤炮塔/矩阵→超频/维修→自毁爆发
// Build A: 炮塔流 | Build B: 机甲流 | Build C: 自毁流
const engineerCards: Card[] = [
  // 初始牌（5张）
  { id: 'en001', name: '扳手敲击', type: '初始牌', cost: 1, description: '造成 10 点伤害。', image: '/manus-storage/card_engineer_001_3a264dca.jpg', classType: 'engineer', tier: 'D', tierReason: '纯伤害无协同，对三条build均无贡献' },
  { id: 'en002', name: '焊接防火墙', type: '初始牌', cost: 1, description: '获得 10 层防火墙。', image: '/manus-storage/card_engineer_002_6803b18c.jpg', classType: 'engineer', tier: 'D', tierReason: '纯防御无协同' },
  { id: 'en003', name: '自动炮塔', type: '初始牌', cost: 2, description: '召唤「自动炮塔」（HP 30，每回合结束对随机敌人造成 8 点伤害）。', image: '/manus-storage/card_engineer_003_3342d2b9.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的基础召唤物' },
  { id: 'en004', name: '防御矩阵', type: '初始牌', cost: 2, description: '召唤「防御矩阵」（HP 40，每回合结束提供 5 层防火墙）。', image: '/manus-storage/card_engineer_004_f186fd28.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的防御召唤物' },
  { id: 'en005', name: '零件回收', type: '初始牌', cost: 1, description: '粉碎手牌中 1 张牌，获得 2 点算力。', image: '/manus-storage/card_engineer_005_eb7a6108.jpg', classType: 'engineer', tier: 'C', tierReason: '算力经济，灵活但需要牺牲手牌' },

  // 普通牌（10张）
  { id: 'en006', name: '超频运转', type: '普通技能', cost: 1, description: '使一个召唤物本回合行动触发 2 次。', image: '/manus-storage/card_engineer_006_56089fa2.jpg', classType: 'engineer', tier: 'S', tierReason: '炮塔流核心引擎，炮塔双倍输出/矩阵双倍防御' },
  { id: 'en007', name: '紧急维修', type: '普通技能', cost: 1, description: '恢复一个召唤物 20 点生命值。', image: '/manus-storage/card_engineer_007_a7cda7b6.jpg', classType: 'engineer', tier: 'C', tierReason: '召唤物续航，泛用但不核心' },
  { id: 'en008', name: '电磁脉冲', type: '普通攻击', cost: 2, description: '对所有敌人造成 12 点伤害，并施加 1 层「迟缓」。', image: '/manus-storage/card_engineer_008_c6736f70.jpg', classType: 'engineer', tier: 'C', tierReason: 'AOE+控制，泛用' },
  { id: 'en009', name: '模块防御', type: '普通防御', cost: 1, description: '获得 12 层防火墙。每有一个召唤物额外获得 4 层。', image: '/manus-storage/card_engineer_009_26be634d.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的防御牌，召唤物越多越强' },
  { id: 'en010', name: '自毁程序', type: '普通技能', cost: 0, description: '摧毁一个召唤物，对所有敌人造成等同于其剩余生命值的伤害。', image: '/manus-storage/card_engineer_010_bc548dc4.jpg', classType: 'engineer', tier: 'B', tierReason: '自毁流核心牌，0费AOE爆发' },
  { id: 'en011', name: '废品利用', type: '普通技能', cost: 1, description: '抽 2 张牌。抽到废牌或病毒则粉碎并额外抽 1 张。', image: '/manus-storage/card_engineer_011_90ea2d3f.jpg', classType: 'engineer', tier: 'C', tierReason: '过牌+瘦牌库' },
  { id: 'en012', name: '火力覆盖', type: '普通攻击', cost: 2, description: '造成 18 点伤害。炮塔存活时伤害 +10。', image: '/manus-storage/card_engineer_012_77124dec.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的协同攻击牌' },
  { id: 'en013', name: '保养', type: '普通技能', cost: 1, description: '恢复一个召唤物 15 点生命值，获得 5 层防火墙。', image: '/manus-storage/card_engineer_013_9b1c54e0.jpg', classType: 'engineer', tier: 'C', tierReason: '召唤物维护+防御' },
  { id: 'en014', name: '加固', type: '普通防御', cost: 1, description: '获得 10 层防火墙。', image: '/manus-storage/card_engineer_014_552173b4.jpg', classType: 'engineer', tier: 'D', tierReason: '纯10层防御，对核心循环无贡献' },
  { id: 'en015', name: '点焊', type: '普通攻击', cost: 0, description: '造成 4 点伤害，获得 4 层防火墙。', image: '/manus-storage/card_engineer_015_46bfb69e.jpg', classType: 'engineer', tier: 'C', tierReason: '0费攻防，灵活但数值低' },

  // 稀有牌（8张）
  { id: 'en016', name: '重火力升级', type: '稀有', cost: 2, description: '永久提升所有炮塔攻击力（每回合 +5 伤害）。', image: '/manus-storage/card_engineer_016_777f7b8e.jpg', classType: 'engineer', tier: 'A', tierReason: '炮塔流核心增幅，永久加攻' },
  { id: 'en017', name: '偏导护盾', type: '稀有', cost: 2, description: '永久提升所有防御矩阵的防火墙生成量（每回合 +5）。', image: '/manus-storage/card_engineer_017_e0c5c7c6.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的防御增幅' },
  { id: 'en018', name: '流水线作业', type: '稀有', cost: 1, description: '每当你召唤一个召唤物，抽 1 张牌。', image: '/manus-storage/card_engineer_018_3ed6659f.jpg', classType: 'engineer', tier: 'S', tierReason: '炮塔流核心引擎，召唤=过牌，保持手牌不断' },
  { id: 'en019', name: '机甲驾驶', type: '稀有', cost: 3, description: '进入机甲状态（获得 50 层不清零的防火墙），但无法再召唤新召唤物。', image: '/manus-storage/card_engineer_019_e9f50550.jpg', classType: 'engineer', tier: 'A', tierReason: '机甲流核心牌，50层持久防火墙极强' },
  { id: 'en020', name: '纳米虫群', type: '稀有', cost: 2, description: '对所有敌人造成 10 点伤害。每击中一个敌人恢复 5 点生命值。', image: '/manus-storage/card_engineer_020_7228533f.jpg', classType: 'engineer', tier: 'C', tierReason: 'AOE+回血，泛用' },
  { id: 'en021', name: '改装', type: '稀有填充', cost: 2, description: '造成 15 点伤害，获得 15 层防火墙。', image: '/manus-storage/card_engineer_021_72482cf9.jpg', classType: 'engineer', tier: 'C', tierReason: '攻防一体，泛用' },
  { id: 'en022', name: '蓝图', type: '稀有填充', cost: 1, description: '抽 2 张牌，抽到攻击牌时费用 -1。', image: '/manus-storage/card_engineer_022_c8e67443.jpg', classType: 'engineer', tier: 'B', tierReason: '过牌+降费' },
  { id: 'en023', name: '润滑', type: '稀有填充', cost: 0, description: '使一个召唤物本回合行动触发 2 次。', image: '/manus-storage/card_engineer_023_ab05e2e7.jpg', classType: 'engineer', tier: 'B', tierReason: '超频运转的0费版本，炮塔流的备选' },

  // 传奇牌（6张）
  { id: 'en024', name: '轨道空投', type: '传奇', cost: 3, description: '直接召唤满级炮塔和满级防御矩阵（替换当前召唤物）。', image: '/manus-storage/card_engineer_024_6ae3333a.jpg', classType: 'engineer', tier: 'A', tierReason: '炮塔流终极召唤，一键满配' },
  { id: 'en025', name: '机械飞升', type: '传奇', cost: 3, description: '生命值上限变为 1，但免疫所有debuff，且每回合额外获得 3 点算力。', image: '/manus-storage/card_engineer_025_d26ade67.jpg', classType: 'engineer', tier: 'C', tierReason: '极端build，需要配合大量防御才能运转' },
  { id: 'en026', name: '万能组装', type: '传奇', cost: 2, description: '将任意两张牌组装成 1 张「神级牌」。', image: '/manus-storage/card_engineer_026_c5cc99a5.jpg', classType: 'engineer', tier: 'A', tierReason: '万能组装，灵活性极高' },
  { id: 'en027', name: '量产', type: '传奇填充', cost: 3, description: '召唤 2 个基础炮塔。', image: '/manus-storage/card_engineer_027_092a691a.jpg', classType: 'engineer', tier: 'B', tierReason: '炮塔流的批量召唤' },
  { id: 'en028', name: '黑科技', type: '传奇填充', cost: 1, description: '将手牌中所有牌费用变为 1。', image: '/manus-storage/card_engineer_028_e8c18bc3.jpg', classType: 'engineer', tier: 'B', tierReason: '降费牌，高费手牌时极强' },
  { id: 'en029', name: '熔炉', type: '传奇填充', cost: 2, description: '粉碎手牌中 1 张牌，获得 3 点算力。', image: '/manus-storage/card_engineer_029_95977623.jpg', classType: 'engineer', tier: 'C', tierReason: '算力经济，灵活' },

  // 神级牌（4张）
  { id: 'en030', name: '高达部署', type: '神级', cost: 4, description: '召唤「机甲」（HP 150，每回合造成 20 点伤害，提供 20 层防火墙）。每区域限用 1 次。', image: '/manus-storage/card_engineer_030_87a6a917.jpg', classType: 'engineer', tier: 'A', tierReason: '机甲流终极牌，攻防一体的超级召唤物' },
  { id: 'en031', name: '无限算力', type: '神级', cost: 0, description: '本回合算力不再消耗。每区域限用 1 次。', image: '/manus-storage/card_engineer_031_6b4c744d.jpg', classType: 'engineer', tier: 'B', tierReason: '无限出牌回合，配合大量召唤极强' },
  { id: 'en032', name: '时光机器', type: '神级', cost: 3, description: '将战斗状态倒退回第一回合。每区域限用 1 次。', image: '/manus-storage/card_engineer_032_91e3d18b.jpg', classType: 'engineer', tier: 'C', tierReason: '重置战斗，situational' },
  { id: 'en033', name: '赛博坦协议', type: '神级', cost: 2, description: '将手牌中所有牌在本场战斗中升级为传奇效果。每区域限用 1 次。', image: '/manus-storage/card_engineer_033_8f103f12.jpg', classType: 'engineer', tier: 'B', tierReason: '全局升级，后期极强' },
];

// ==================== 职业配置 ====================
export const characterClasses: CharacterClass[] = [
  {
    id: 'mathematician',
    name: '数学家',
    color: '#4fc3f7',
    bgColor: 'rgba(10, 30, 60, 0.95)',
    borderColor: '#1e90ff',
    description: '以几何与算法为武器，冷静精准地分析战场，在数字的秩序中寻找敌人的弱点。',
    coreMechanic: '牌序操控 + 递增伤害：通过推导/置换控制牌序，利用数学归纳法实现伤害递增',
    buildPaths: ['归纳流：数学归纳法+大量低费牌连打，伤害递增', '防御翻倍流：收敛+存甲+费马大定理，防火墙指数增长', '穿透流：穿透+黎曼假设永久加攻，无视防御'],
    cards: mathematicianCards,
  },
  {
    id: 'medic',
    name: '医学家',
    color: '#80cbc4',
    bgColor: 'rgba(5, 25, 25, 0.95)',
    borderColor: '#26a69a',
    description: '以手术刀和医学知识为武器，在冰冷的病房美学中，将治愈与伤害融为一体。',
    coreMechanic: '治疗转化 + 毒素DOT：通过感染/中毒叠加并扩散，同时利用治疗保持续航',
    buildPaths: ['毒素流：中毒+感染+交叉感染扩散+毒性爆发', '续航流：挂水+干细胞+基因编辑+器官培育', '爆发流：肾上腺素+重症监护+微创手术'],
    cards: medicCards,
  },
  {
    id: 'psychologist',
    name: '心理学家',
    color: '#ce93d8',
    bgColor: 'rgba(20, 10, 35, 0.95)',
    borderColor: '#9c27b0',
    description: '以意识与梦境为战场，侵入敌人的精神世界，在超现实的扭曲中瓦解对手的意志。',
    coreMechanic: '精神控制 + 手牌干扰：通过催眠跳回合、干扰手牌、精神穿刺无视防御',
    buildPaths: ['控制流：催眠+精神控制+意识侵占，让敌人无法行动', '干扰流：潜意识植入+逻辑陷阱+记忆抹除，破坏敌人手牌', '穿透流：精神穿刺+脑波干扰+梦境崩塌，无视防御输出'],
    cards: psychologistCards,
  },
  {
    id: 'physicist',
    name: '物理学家',
    color: '#ffb74d',
    bgColor: 'rgba(30, 15, 5, 0.95)',
    borderColor: '#ff6f00',
    description: '以宇宙能量为弹药，将引力、粒子与等离子体凝聚于掌心，释放毁灭性的物理力量。',
    coreMechanic: '能量操控 + 燃烧DOT：通过充能增幅攻击，利用燃烧叠加持续伤害，防转攻爆发',
    buildPaths: ['燃烧流：链式反应+微粒+燃烧叠加，持续DOT', '大招流：充能+质能转换+光速突破，单回合爆发', '防转攻流：力场+暗物质凝聚+势能转化，防御转伤害'],
    cards: physicistCards,
  },
  {
    id: 'archaeologist',
    name: '考古学家',
    color: '#ffd54f',
    bgColor: 'rgba(25, 20, 5, 0.95)',
    borderColor: '#f9a825',
    description: '以古代遗物为力量源泉，唤醒沉睡千年的文明力量，在历史的厚重中找到致命的武器。',
    coreMechanic: '化石经济 + 遗物召唤：通过发掘和粉碎化石触发协同效果，召唤古代遗物作战',
    buildPaths: ['化石流：博物馆长+大量化石生成粉碎，永久叠加攻击力', '遗物流：罗塞塔石碑+黄金面具+法老王苏醒，召唤物输出', '防御流：地下陵墓+化石粉碎翻倍防御+失落文明'],
    cards: archaeologistCards,
  },
  {
    id: 'engineer',
    name: '工程师',
    color: '#90caf9',
    bgColor: 'rgba(5, 15, 30, 0.95)',
    borderColor: '#1565c0',
    description: '以机械与电路为盔甲，召唤有生命感的钢铁构造物，在工业美学的冷酷中碾压一切。',
    coreMechanic: '召唤物经济 + 组装：通过召唤炮塔/矩阵建立战场优势，超频增幅或自毁爆发',
    buildPaths: ['炮塔流：自动炮塔+重火力升级+超频运转，持续输出', '机甲流：机甲驾驶+高达部署，超厚防御', '自毁流：召唤物+自毁程序，0费AOE爆发'],
    cards: engineerCards,
  },
];

export const cardTypeColors: Record<CardType, { bg: string; text: string; border: string }> = {
  '初始牌':   { bg: 'rgba(100,100,120,0.3)', text: '#aab', border: '#556' },
  '普通攻击': { bg: 'rgba(180,40,40,0.25)', text: '#f88', border: '#c44' },
  '普通防御': { bg: 'rgba(40,80,180,0.25)', text: '#88f', border: '#44c' },
  '普通技能': { bg: 'rgba(40,160,80,0.25)', text: '#8f8', border: '#4a4' },
  '稀有':     { bg: 'rgba(120,60,200,0.3)', text: '#c8f', border: '#86c' },
  '稀有填充': { bg: 'rgba(100,50,160,0.25)', text: '#b8e', border: '#74a' },
  '传奇':     { bg: 'rgba(200,140,20,0.3)', text: '#fd8', border: '#ca4' },
  '传奇填充': { bg: 'rgba(160,110,15,0.25)', text: '#ec7', border: '#a83' },
  '神级':     { bg: 'rgba(220,60,60,0.35)', text: '#faa', border: '#e44' },
};

export const tierColors: Record<CardTier, { bg: string; text: string; border: string; label: string }> = {
  'S': { bg: 'rgba(255,50,50,0.3)', text: '#ff6b6b', border: '#ff4444', label: '核心运转' },
  'A': { bg: 'rgba(255,140,0,0.3)', text: '#ffa500', border: '#ff8c00', label: '更有用' },
  'B': { bg: 'rgba(100,149,237,0.3)', text: '#6495ed', border: '#4169e1', label: '很有用' },
  'C': { bg: 'rgba(120,120,120,0.25)', text: '#aaa', border: '#888', label: '较有用' },
  'D': { bg: 'rgba(80,80,80,0.2)', text: '#777', border: '#555', label: '低贡献' },
};
