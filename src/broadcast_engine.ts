// Живая трансляция: профили комментаторов, факты эфира, реалистичная дисциплина и разнообразие VAR

export interface CommentatorProfile {
  id: string;
  name: string;
  shortName: string;
  roleTitle: string;
  badge: string;
  accent: string;
  preferredCoId: string;
  styleSummary: string;
  speechRules: string;
  signatureTags: string[];
  soloSample: string;
}

export const COMMENTATORS: CommentatorProfile[] = [
  {
    id: "naguchev",
    name: "Роман Нагучев",
    shortName: "Нагучев",
    roleTitle: "Драйв и живые детали",
    badge: "Живой темп и истории",
    accent: "#0d7b51",
    preferredCoId: "genich",
    styleSummary: "Быстрый разговорный ритм, юмор, цепкий взгляд на трибуны, бровку и мимику игроков.",
    speechRules:
      "Пиши живо, разговорно и ритмично. Замечай микродетали у бровки, жесты тренеров, реакцию скамейки и болельщиков. Используй живые переходы («Ох ты ж!», «И тут же — смотрите!», «Вот это поворот»), но избегай картонных криков на пустом месте.",
    signatureTags: ["бровка", "ритм", "детали", "эмоции"],
    soloSample: "Завелась публика! И обратите внимание на скамейку — запасные уже вскочили, хотя до углового еще секунд десять."
  },
  {
    id: "genich",
    name: "Константин Генич",
    shortName: "Генич",
    roleTitle: "Взгляд бывшего игрока",
    badge: "Разбор биомеханики",
    accent: "#2563eb",
    preferredCoId: "shnyakin",
    styleSummary: "Читает эпизод глазами футболиста: корпус, опорная нога, мелкие хитрости и честный разбор фолов.",
    speechRules:
      "Объясняй, ПОЧЕМУ эпизод вышел именно так с точки зрения игрока на газоне: не успел переложить корпус, зацепил пятку на противоходе, вратарь прочитал паузу, нападающий сам искал контакт. В мелких фолах подмечай футбольные хитрости без лишней драматизации.",
    signatureTags: ["техника", "стыки", "эксперт"],
    soloSample: "Здесь защитник просто не успел развернуть таз — классический мелкий фол на противоходе, без всякой злобы."
  },
  {
    id: "shnyakin",
    name: "Дмитрий Шнякин",
    shortName: "Шнякин",
    roleTitle: "Факты, цифры и сюжеты",
    badge: "Энциклопедия эфира",
    accent: "#7c3aed",
    preferredCoId: "genich",
    styleSummary: "Мастер точных фактов и скрытых интриг: связывает текущий момент с биографией, сериями и очной историей.",
    speechRules:
      "Органично вплетай в паузы интересные факты о футболистах, сериях команд, личных счетах и статистике — не сухой справкой, а живой репликой между эпизодами («А вы помните, что…», «Кстати, любопытный штрих…»). В острые секунды держи энергичный темп.",
    signatureTags: ["факты", "биографии", "интриги"],
    soloSample: "Кстати, для него это уже третий матч подряд против бывших одноклубников — мотивация сегодня чувствуется в каждом стыке."
  },
  {
    id: "minin",
    name: "Станислав Минин",
    shortName: "Минин",
    roleTitle: "Тактический аналитик",
    badge: "Структура и прессинг",
    accent: "#0f766e",
    preferredCoId: "trushechkin",
    styleSummary: "Спокойный интеллигентный разбор: видит перестроения схем, полуфланги, компактность линий и усталость опорной зоны.",
    speechRules:
      "Анализируй геометрию игры: кто садится в 5-3-2 без мяча, где провисает полуфланг, как свежее крыло растягивает блок. Речь интеллигентная, точная, без дешёвой истерики; на голе — сдержанно-сильная констатация класса.",
    signatureTags: ["тактика", "полуфланги", "спокойный темп"],
    soloSample: "Обратите внимание: гости уже минуты три не поднимают линию прессинга — экономят силы перед концовкой тайма."
  },
  {
    id: "cherdantsev",
    name: "Георгий Черданцев",
    shortName: "Черданцев",
    roleTitle: "Голос больших афиш",
    badge: "Драма и нерв концовки",
    accent: "#b91c1c",
    preferredCoId: "minin",
    styleSummary: "Эпический градус топ-матчей: умеет нагнетать паузу перед стандартом и взрываться на голевых развязках.",
    speechRules:
      "Создавай ощущение большого футбольного вечера. Держи короткие рубленые фразы перед опасными ударами и эмоциональный всплеск на голах, сейвах и решениях VAR. Но в спокойные минуты не фальшивь — честно отмечай вязкую борьбу в центре.",
    signatureTags: ["афиша", "накал", "большие моменты"],
    soloSample: "Какая пауза перед штрафным! Весь стадион замер — сейчас будет решение, которое может определить весь тайм!"
  },
  {
    id: "trushechkin",
    name: "Роман Трушечкин",
    shortName: "Трушечкин",
    roleTitle: "Рассказчик и атмосфера",
    badge: "Литературный репортаж",
    accent: "#475569",
    preferredCoId: "naguchev",
    styleSummary: "Тонкий, образный русский язык: передаёт настроение погоды, дыхание трибун и эстетику комбинаций.",
    speechRules:
      "Пиши выразительным, но не вычурным русским языком. Передавай вкус погоды, состояние газона, звуки стадиона и психологию дуэлей. Избегай сухих штампов вроде «игрок отдал пас» — каждое действие должно иметь образ.",
    signatureTags: ["образность", "атмосфера", "литературный слог"],
    soloSample: "Вечерний воздух на трибунах звенит, мяч по влажной траве катится с тихим шелестом — футбол набирает глубину."
  },
  {
    id: "aksenov",
    name: "Александр Аксёнов",
    shortName: "Аксёнов",
    roleTitle: "Репортёр у кромки поля",
    badge: "Характер и судейство",
    accent: "#c2410c",
    preferredCoId: "shnyakin",
    styleSummary: "Чувствует нерв единоборств, считает мелкие фолы «по совокупности», считывает диалоги капитанов с арбитром.",
    speechRules:
      "Держи фокус на борьбе, психологии фолов, предупреждениях арбитра («ещё один такой стык — и будет жёлтая») и реакции тренеров. Различай рабочий мелкий фол в центре и по-настоящему грубую игру.",
    signatureTags: ["единоборства", "судейство", "характер"],
    soloSample: "Уже третий мелкий зацеп за последние пять минут — судья пока обходится строгим взглядом и жестом, но терпение на исходе."
  }
];

export function getCommentatorById(id: string | null | undefined): CommentatorProfile | null {
  if (!id) return null;
  const k = String(id).trim().toLowerCase();
  return COMMENTATORS.find((c) => c.id === k) || null;
}

function stableHash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface CommentatorBooth {
  lead: CommentatorProfile;
  co: CommentatorProfile | null;
  duo: boolean;
  label: string;
  shortLabel: string;
  manual: boolean;
}

export function resolveMatchCommentatorBooth(
  f: any,
  opts?: { derby?: boolean; rivalry?: boolean; finalMatch?: boolean }
): CommentatorBooth {
  const manualLead = getCommentatorById(f?.commentatorId);
  const manualCo = f?.coCommentatorId === "none" ? null : getCommentatorById(f?.coCommentatorId);
  if (manualLead) {
    const co = manualCo && manualCo.id !== manualLead.id ? manualCo : null;
    const duo = !!co;
    return {
      lead: manualLead,
      co,
      duo,
      label: duo ? `${manualLead.name} и ${co!.name}` : manualLead.name,
      shortLabel: duo ? `${manualLead.shortName} / ${co!.shortName}` : manualLead.shortName,
      manual: true
    };
  }

  const seedStr = `${f?.id || ""}:${f?.home || ""}:${f?.away || ""}:${f?.round || ""}`;
  const h = stableHash(seedStr);
  const lead = COMMENTATORS[h % COMMENTATORS.length];
  const isBigStage = !!(
    opts?.derby ||
    opts?.rivalry ||
    opts?.finalMatch ||
    f?.comp === "supercup" ||
    f?.comp === "playoff" ||
    f?.comp === "playoff_rpl_fnl" ||
    (f?.comp === "cup" && ["rpl_playoff_sf", "regions_final", "superfinal"].includes(String(f?.cupStage || "")))
  );
  // Big matches get a natural broadcast duo (~100% on derbies/finals, ~35% on regular RPL matches)
  const useDuo = isBigStage ? true : (h % 100) < 35;
  const co = useDuo
    ? getCommentatorById(lead.preferredCoId) || COMMENTATORS[(h + 3) % COMMENTATORS.length]
    : null;
  const cleanCo = co && co.id !== lead.id ? co : null;
  return {
    lead,
    co: cleanCo,
    duo: !!cleanCo,
    label: cleanCo ? `${lead.name} и ${cleanCo.name}` : lead.name,
    shortLabel: cleanCo ? `${lead.shortName} / ${cleanCo.shortName}` : lead.shortName,
    manual: false
  };
}

export function pubCommentatorBooth(booth: CommentatorBooth) {
  return {
    id: booth.lead.id,
    name: booth.lead.name,
    shortName: booth.lead.shortName,
    roleTitle: booth.lead.roleTitle,
    badge: booth.lead.badge,
    accent: booth.lead.accent,
    styleSummary: booth.lead.styleSummary,
    coId: booth.co?.id || null,
    coName: booth.co?.name || null,
    coShortName: booth.co?.shortName || null,
    coRoleTitle: booth.co?.roleTitle || null,
    duo: booth.duo,
    label: booth.label,
    shortLabel: booth.shortLabel,
    manual: booth.manual
  };
}

export interface DisciplinaryProfile {
  tier: "calm" | "balanced" | "intense";
  foulsTarget: string;
  yellowTarget: string;
  redRule: string;
  refMood: string;
  allowStraightRedRate: number; // probability hint for fakePeriod
  yellowOnFoulProb: number;
  lightFoulRatioNote: string;
}

export function buildDisciplinaryProfile(ctx: any, isDerby: boolean, isRivalry: boolean, isFinal: boolean): DisciplinaryProfile {
  const head = ctx?.refereeCrew?.head;
  const bio = String(head?.bio || "").toLowerCase();
  const matches = Number(head?.matches || 0);
  const avgYc = matches > 0 ? Number(head?.yellows || 0) / matches : 3.8;
  const avgRc = matches > 0 ? Number(head?.reds || 0) / matches : 0.14;

  const tempH = String(ctx?.coaches?.home?.coach?.temperament || "").toLowerCase();
  const tempA = String(ctx?.coaches?.away?.coach?.temperament || "").toLowerCase();
  const spH = String(ctx?.lineup?.home?.speech || "").toLowerCase();
  const spA = String(ctx?.lineup?.away?.speech || "").toLowerCase();

  const strictRef = /строг|принципиал|жёстк|много карточ|не терп/i.test(bio) || avgYc >= 4.7 || avgRc >= 0.25;
  const softRef = /даёт играть|либераль|мягк|спокойн|редко достаёт/i.test(bio) || (matches >= 3 && avgYc <= 3.1);
  const heatedSpeech = /разорв|кость в кость|давить|жестко|жёстко|бить|ломать|агрессив/i.test(`${spH} ${spA}`);
  const hotTemp = /вспыльч|взрывн|эмоцион|буйн/i.test(`${tempH} ${tempA}`);

  if (isDerby || isFinal || (strictRef && (isRivalry || heatedSpeech))) {
    return {
      tier: "intense",
      foulsTarget: "22–31 фол на обе команды (из них 16–24 — обычные мелкие/тактические фолы БЕЗ карточки)",
      yellowTarget: "4–6 жёлтых карточек суммарно на обе команды (при сильной вязкости может быть 3)",
      redRule:
        "Прямые КК и вторые ЖК всё равно РЕДКИ (~20–25% даже в дерби, то есть в 3 из 4 дерби удалений НЕТ). Максимум 1 удаление за матч и ТОЛЬКО если игрок уже висел на ЖК или допустил действительно опасный фол / фол последней надежды. Тренерам КК не давай, кроме экстремального скандала.",
      refMood: strictRef
        ? `${head?.name || "Арбитр"} держит высокий градус строгости, но сначала предупреждает устно (verbal_warning) перед жёлтой.`
        : "Дерби/финал повышенной принципиальности — много мелких стыков и споров, но судья старается не ломать игру ранним удалением.",
      allowStraightRedRate: 0.011,
      yellowOnFoulProb: 0.19,
      lightFoulRatioNote: "минимум 75% фолов — обычные мелкие нарушения без карточки"
    };
  }

  if (softRef && !isRivalry && !heatedSpeech && !hotTemp) {
    return {
      tier: "calm",
      foulsTarget: "16–24 фола на обе команды (из них 13–20 — лёгкие позиционные фолы БЕЗ карточки)",
      yellowTarget: "1–3 жёлтые карточки за весь матч",
      redRule:
        "КРАСНЫЕ КАРТОЧКИ ПРАКТИЧЕСКИ ИСКЛЮЧЕНЫ (0 КК в ~90% подобных игр). Никаких удалений ради «остроты» — даже жёлтые арбитр достаёт только за явный срыв атаки или откровенную накладку.",
      refMood: `${head?.name || "Арбитр"} даёт командам бороться и играть в темпе, предпочитая устные внушения (verbal_warning) и свистки без лишнего размахивания карточками.`,
      allowStraightRedRate: 0.004,
      yellowOnFoulProb: 0.12,
      lightFoulRatioNote: "80–88% фолов — лёгкие фолы без карточки"
    };
  }

  return {
    tier: "balanced",
    foulsTarget: "18–27 фолов на обе команды (из них 14–22 — обычные мелкие фолы БЕЗ карточки)",
    yellowTarget: "2–5 жёлтых карточек суммарно на обе команды",
    redRule:
      "КРАСНЫЕ КАРТОЧКИ — РЕДКОСТЬ: в ~82–85% таких матчей игра заканчивается БЕЗ УДАЛЕНИЙ (0 КК). Вторая жёлтая или прямая красная возможна лишь в редких случаях по логике конкретной грубой ошибки или ФПН — НЕ суй красную в каждый матч!",
    refMood: `${head?.name || "Арбитр"} ведёт матч в сбалансированной манере: мелкие толчки, задержки за майку и фолы в атаке фиксирует обычным свистком без карточки, ЖК показывает за срыв перспективной атаки или грубость.`,
    allowStraightRedRate: 0.007,
    yellowOnFoulProb: 0.15,
    lightFoulRatioNote: "75–85% фолов — лёгкие/рабочие фолы без карточки"
  };
}

export function buildMatchFacts(
  ctx: any,
  helpers: {
    player: (id: string) => any;
    age: (p: any, date: string) => number | null;
    aggPlayers: () => Record<string, any>;
    tn: (tid: string) => string;
    date: string;
    compId: string | null;
    isDerby: boolean;
    isRivalry: boolean;
  }
): string[] {
  const facts: string[] = [];
  const { player, age, aggPlayers, tn, date, compId } = helpers;
  const hName = ctx?.sides?.home?.name || "Хозяева";
  const aName = ctx?.sides?.away?.name || "Гости";
  const agMap = Object.values(aggPlayers() || {});

  // 1. Standings / streak storylines
  if (ctx?.tableStandings?.home && ctx?.tableStandings?.away) {
    const hShort = String(ctx.tableStandings.home).split(", форма:")[0];
    const aShort = String(ctx.tableStandings.away).split(", форма:")[0];
    facts.push(`Турнирный расклад перед матчем: ${hName} — ${hShort}; ${aName} — ${aShort}.`);
  }

  // 2. H2H concrete memory
  if (ctx?.h2h?.recent?.length) {
    const last = ctx.h2h.recent[0];
    const sc = last.scorers?.length ? ` (отличились: ${last.scorers.slice(0, 3).join(", ")})` : "";
    facts.push(
      `Очная история (${ctx.h2h.total} матчей: ${hName} ${ctx.h2h.homeWins}В, ничьих ${ctx.h2h.draws}, ${aName} ${ctx.h2h.awayWins}В): в последний раз (${last.date}) сыграли ${last.homeName} ${last.score} ${last.awayName}${sc}.`
    );
  } else {
    facts.push(`Команды впервые сойдутся в официальном завершённом матче текущей симуляции — чистый лист очных встреч.`);
  }

  // 3. Top scorers & assist leaders in today's lineups
  const allMatchPids = [
    ...(ctx?.lineup?.home?.starters || []),
    ...(ctx?.lineup?.home?.bench || []),
    ...(ctx?.lineup?.away?.starters || []),
    ...(ctx?.lineup?.away?.bench || [])
  ];
  const scoredRows: Array<{ p: any; sideName: string; g: number; a: number; m: number; cs: number }> = [];
  for (const pid of allMatchPids) {
    const p = player(pid);
    if (!p) continue;
    const row =
      agMap.find((x: any) => x.pid === pid && x.comp === (compId || "rpl")) ||
      agMap.find((x: any) => x.pid === pid && x.comp === "rpl");
    if (row && (row.g > 0 || row.a >= 2 || row.cs >= 2)) {
      const sideKey = ctx?.pidSide?.[pid];
      const sideName = sideKey === "away" ? aName : hName;
      scoredRows.push({ p, sideName, g: row.g || 0, a: row.a || 0, m: row.m || 0, cs: row.cs || 0 });
    }
  }
  scoredRows.sort((x, y) => y.g * 2 + y.a - (x.g * 2 + x.a));
  if (scoredRows.length) {
    const top = scoredRows[0];
    if (top.g > 0 || top.a > 0) {
      facts.push(
        `Главная ударная сила заявки: ${top.p.name} (${top.sideName}) — ${top.g} гол. и ${top.a} пас. в ${top.m} матчах этого сезона.`
      );
    }
  }

  // 4. Card-suspension tightrope (3/4 YC)
  const riskPlayers: string[] = [];
  if (compId) {
    for (const pid of allMatchPids) {
      const p = player(pid);
      if (!p) continue;
      const ycCycle = (p.ycByComp?.[compId] || 0) % 4;
      if (ycCycle === 3) {
        const sName = ctx?.pidSide?.[pid] === "away" ? aName : hName;
        riskPlayers.push(`${p.name} (${sName})`);
      }
    }
  }
  if (riskPlayers.length) {
    facts.push(`На грани дисквалификации (3 жёлтые из 4, следующая — пропуск матча): ${riskPlayers.slice(0, 4).join(", ")}.`);
  }

  // 5. Youngest vs Oldest / Loan / Real Club Bio
  const aged: Array<{ name: string; sideName: string; age: number }> = [];
  const loaned: string[] = [];
  const richBio: string[] = [];
  for (const pid of allMatchPids) {
    const p = player(pid);
    if (!p) continue;
    const sName = ctx?.pidSide?.[pid] === "away" ? aName : hName;
    const a = age(p, date);
    if (a && a >= 15 && a <= 45) aged.push({ name: p.name, sideName: sName, age: a });
    if (ctx?.loan?.[pid] && loaned.length < 2) {
      loaned.push(`${p.name} играет за ${sName} на правах аренды из клуба «${ctx.loan[pid]}»`);
    }
    if (richBio.length < 2 && Array.isArray(p.achievements) && p.achievements.length) {
      const ach = String(p.achievements[0]).trim();
      if (ach && ach.length >= 8) {
        richBio.push(`${p.name} (${sName}): ${ach}${p.realClub ? ` (в реальности — ${p.realClub})` : ""}`);
      }
    }
  }
  if (aged.length >= 2) {
    aged.sort((x, y) => x.age - y.age);
    const y = aged[0], o = aged[aged.length - 1];
    if (o.age - y.age >= 10) {
      facts.push(`Контраст поколений: самый юный в заявке — ${y.name} (${y.sideName}, ${y.age} лет), самый опытный — ${o.name} (${o.sideName}, ${o.age} лет).`);
    }
  }
  if (loaned.length) facts.push(`Арендная интрига: ${loaned.join("; ")}.`);
  if (richBio.length) facts.push(`Из биографий участников: ${richBio.join(" | ")}.`);

  // 6. Coach / tactical fact
  const cH = ctx?.coaches?.home?.coach;
  const cA = ctx?.coaches?.away?.coach;
  if (cH && cA) {
    const fH = ctx?.lineup?.home?.formation || "4-3-3";
    const fA = ctx?.lineup?.away?.formation || "4-3-3";
    facts.push(
      `Дуэль тренеров: ${cH.name} (${hName}, схема ${fH}, стиль «${cH.styleTitle || cH.style}») против ${cA.name} (${aName}, схема ${fA}, стиль «${cA.styleTitle || cA.style}»).`
    );
  }

  // 7. Referee trivia
  const hRef = ctx?.refereeCrew?.head;
  if (hRef?.name) {
    const statLine = Number(hRef.matches || 0) > 0
      ? `(${hRef.matches} игр, ${hRef.yellows || 0} ЖК, ${hRef.reds || 0} КК, ${hRef.penalties || 0} пенальти)`
      : "(дебютный матч в этом сезоне симуляции)";
    facts.push(`Судейский штрих: главный арбитр ${hRef.name}${hRef.city ? ` из ${hRef.city}` : ""} ${statLine}${ctx.refereeCrew?.var ? `; на ВАР — ${ctx.refereeCrew.var}` : ""}.`);
  }

  // 8. Weather / arena fact
  if (ctx?.weather) {
    facts.push(`Условия игры на «${ctx.stadium || "стадионе"}»: ${ctx.weather}.`);
  }

  return facts.slice(0, 10);
}

export function buildVarPauseCommentaryBeat(
  cur: any,
  nxt: any,
  ctx: any,
  beatIdx: number,
  totalBeats: number,
  usedTexts?: Set<string>
) {
  const curLow = `${cur?.text || ""}`.toLowerCase();
  const combined = `${cur?.text || ""} ${nxt?.text || ""}`.toLowerCase();
  const hName = ctx?.sides?.home?.name || "хозяева";
  const aName = ctx?.sides?.away?.name || "гости";
  const hCoach = ctx?.coaches?.home?.coach?.name || `тренер ${hName}`;
  const aCoach = ctx?.coaches?.away?.coach?.name || `тренер ${aName}`;
  const headRef = ctx?.refereeCrew?.head?.name || "главный арбитр";
  const varRef = ctx?.refereeCrew?.var || "видеоассистент";
  const booth = ctx?.commentatorBooth || resolveMatchCommentatorBooth({});
  const leadName = booth?.lead?.shortName || "Комментатор";
  const coName = booth?.duo && booth?.co ? booth.co.shortName : null;
  const speakerA = leadName;
  const speakerB = coName || leadName;

  const playerHint = cur?.players?.[0] || nxt?.players?.[0] || "";
  const isMon = /монит|экран|бровк/i.test(curLow);
  const isOffside = /офсайд|лини|вне\s+игр/i.test(combined);
  const isHand = /рукой|рук[аеуо]|локт|кист/i.test(combined);
  const isRed = /красн|удален|груб|шипами|стык|прям/i.test(combined);
  const isPen = /пенальти|штрафн|точк|паден|симул|нырок/i.test(combined);

  const poolOffside = [
    { type: "commentator_intro", speaker: speakerA, text: `${speakerA} разбирает стоп-кадр в эфире: оцениваем плечо и бутсу последнего защитника${playerHint ? ` рядом с ${playerHint}` : ""} — эпизод действительно пограничный.` },
    { type: "crowd", speaker: speakerA, text: `Трибуны гудят в нетерпении: пока ${varRef} и АВAР выстраивают 3D-линию в комнате ВАР, капитаны ${hName} и ${aName} не отходят от ${headRef}.` },
    { type: "var", speaker: speakerA, text: `На экран трансляции выводят калибровочную проекцию с офсайдной линией — счёт идёт буквально на сантиметры.` },
    { type: "tactical_note", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}«Линия обороны сработала синхронно, но важно поймать именно первый кадр касания мяча при передаче — вот сейчас его и ищут».` }
  ];

  const poolHand = [
    { type: "commentator_intro", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}Смотрим повтор с боковой камеры — рука в естественном положении при движении корпуса или всё же увеличила площадь тела?` },
    { type: "var", speaker: speakerA, text: `${varRef} из комнаты ВАР крутит эпизод с касанием мяча руки с трёх разных точек, ${headRef} слушает подсказку по гарнитуре.` },
    { type: "crowd", speaker: speakerA, text: `Игроки обеих команд обступили арбитра и показывают каждый свою версию жестами — шум на трибунах нарастает.` }
  ];

  const poolPen = [
    { type: "commentator_intro", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}Режиссёр даёт крупный план из-за ворот${playerHint ? ` по дуэли с участием ${playerHint}` : ""}: был ли чистый удар в мяч раньше контакта с голеностопом?` },
    { type: "crowd", speaker: speakerA, text: `${hCoach} и ${aCoach} эмоционально общаются с резервным арбитром у технической зоны, а трибуны давят свистом на бригаду.` },
    { type: "var", speaker: speakerA, text: `${varRef} в ВАР-центре проверяет не только сам контакт в штрафной, но и всю предыдущую фазу атаки на возможный мелкий фол или офсайд.` },
    { type: "tactical_note", speaker: speakerA, text: `Пока тянется пауза, вратари общаются с защитниками и проверяют бутсы, а полевые пьют воду у бровки.` }
  ];

  const poolRed = [
    { type: "commentator_intro", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}В замедлении каждый стык выглядит жёстче, чем в динамике — ВАР проверяет интенсивность контакта, скорость подката и точку соприкосновения шипов.` },
    { type: "crowd", speaker: speakerA, text: `Вокруг ${headRef} кипят страсти, капитаны пытаются развести одноклубников в стороны, чтобы не нахватать лишних жёлтых за споры.` },
    { type: "tactical_note", speaker: speakerA, text: `Запасные ${hName} и ${aName} поднялись с мест — возможное удаление способно перечеркнуть все стартовые задумки тренеров.` },
    { type: "var", speaker: speakerA, text: `Бригада на ВАР во главе с ${varRef} оценивает, тянет ли эпизод на прямое удаление или достаточно предупреждения.` }
  ];

  const poolMon = [
    { type: "commentator_intro", speaker: speakerA, text: `${headRef} ушёл к монитору RRA у боковой линии — в таких ситуациях первоначальное решение меняется примерно в четырёх случаях из пяти!` },
    { type: "tactical_note", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}Пока ${headRef} смотрит повтор в реальном времени и на стоп-кадре, игроки ${hName} и ${aName} разминаются коротким пасом, чтобы не остыть.` },
    { type: "crowd", speaker: speakerA, text: `Решающие секунды у экрана: болельщики ловят каждое движение арбитра, тренеры в напряжении ждут жеста от бровки.` },
    { type: "var", speaker: speakerA, text: `${headRef} просит операторов прокрутить ключевые два кадра контакта ещё раз на нормальной скорости — вердикт уже близок.` }
  ];

  const poolGen = [
    { type: "commentator_intro", speaker: speakerA, text: `Режиссёр эфира показывает замедленный повтор эпизода сразу с нескольких ракурсов — разбираем детали без лишней суеты.` },
    { type: "crowd", speaker: speakerA, text: `Трибуны по-разному встречают затянувшуюся паузу: одна часть стадиона свистит, другая скандирует кричалки.` },
    { type: "var", speaker: speakerA, text: `${varRef} продолжает коммуникацию с ${headRef} по радиосвязи — проверяется легитимность предшествующего эпизода.` },
    { type: "tactical_note", speaker: speakerB, text: `${coName ? `${coName}: ` : ""}Обе команды используют паузу как мини-тайм-аут: защитники получают персональные подсказки от тренеров у бровки.` }
  ];

  const pool = isMon
    ? poolMon
    : isOffside
      ? poolOffside
      : isHand
        ? poolHand
        : isRed
          ? poolRed
          : isPen
            ? poolPen
            : poolGen;
  const fallbackPool = [...pool, ...poolGen, ...poolMon, ...poolPen, ...poolOffside, ...poolHand];
  const startIdx = Math.abs(Math.round((cur?.min || 1) * 11 + (cur?.sec || 0) * 3 + beatIdx * 5 + totalBeats)) % pool.length;
  let picked = pool[startIdx];
  if (usedTexts) {
    let foundUnused = null;
    for (let k = 0; k < pool.length; k++) {
      const cand = pool[(startIdx + k) % pool.length];
      if (!usedTexts.has(cand.text)) {
        foundUnused = cand;
        break;
      }
    }
    if (foundUnused) {
      picked = foundUnused;
    } else {
      const anyUnused = fallbackPool.find((x) => !usedTexts.has(x.text));
      if (anyUnused) picked = anyUnused;
    }
    usedTexts.add(picked.text);
  }
  const out: any = {
    type: picked.type,
    team: "none",
    players: [],
    pids: [],
    text: picked.text,
    varPause: true
  };
  if (booth?.duo && picked.speaker) out.speaker = picked.speaker;
  return out;
}

export function buildCommentatorPromptBlock(ctx: any, mode: "full" | "light" = "full"): string {
  const booth: CommentatorBooth = ctx?.commentatorBooth || resolveMatchCommentatorBooth({});
  const disc: DisciplinaryProfile = ctx?.disciplinaryProfile || buildDisciplinaryProfile(ctx, false, false, false);
  const facts: string[] = Array.isArray(ctx?.broadcastFacts) ? ctx.broadcastFacts : [];

  const lines: string[] = [];
  lines.push(`═══ ЖИВАЯ ТРАНСЛЯЦИЯ: КОММЕНТАТОРЫ, РЕАЛИЗМ ФОЛОВ, ФАКТЫ И ВАР ═══`);
  if (booth.duo && booth.co) {
    lines.push(
      `А. ЭФИРНЫЙ ДУЭТ МАТЧА: в кабине работают ${booth.lead.name} (${booth.lead.roleTitle}) и ${booth.co.name} (${booth.co.roleTitle}).`
    );
    lines.push(
      `• Характер ${booth.lead.shortName}: ${booth.lead.styleSummary} Правило речи: ${booth.lead.speechRules}`
    );
    lines.push(
      `• Характер ${booth.co.shortName}: ${booth.co.styleSummary} Правило речи: ${booth.co.speechRules}`
    );
    lines.push(
      `• КАК ВЕСТИ ДИАЛОГ ДУЭТА: ${booth.lead.shortName} ведёт живой репортаж атаки и голов, а ${booth.co.shortName} подключается с тактикой, разбором стыков, эмоцией эксперта, спорами по VAR и интересными фактами! По желанию ставь поле "speaker": "${booth.lead.shortName}" или "${booth.co.shortName}" на репликах комментаторов (особенно для "fact", "tactical_note", "commentator_intro", "var"). Пусть реплики звучат как живой разговор в кабине, а не сухой пересказ.`
    );
  } else {
    lines.push(`А. КОММЕНТАТОР МАТЧА: ${booth.lead.name} (${booth.lead.roleTitle}).`);
    lines.push(`• Фирменный стиль: ${booth.lead.styleSummary}`);
    lines.push(`• Как говорить: ${booth.lead.speechRules}`);
    lines.push(
      `• Помни образец интонации ${booth.lead.shortName}: «${booth.lead.soloSample}». Говори как ОН от первой до последней минуты — не скатывайся в шаблонный «сухой отчёт бота»!`
    );
  }

  lines.push(``);
  lines.push(`Б. ЖИВОЙ ЯЗЫК БЕЗ «БОТОВСКИХ ШАБЛОНОВ» (ОБЯЗАТЕЛЬНО):`);
  lines.push(
    `• ЗАПРЕЩЕНО повторять подряд однотипные конструкции вроде «Игрок Х отдал пас игроку Y», «Опасный момент у ворот», «Футболист пробил по воротам», «Нарушает правила против». Меняй синтаксис в каждом событии: где-то начни со звука стадиона или жеста тренера, где-то с детали газона/погоды, где-то с короткой живой реакции или обрыва мысли («Смещается в центр, замах… нет, накрывает защитник в подкате!»).`
  );
  lines.push(
    `• События на поле должны течь естественно: борьба за подбор, перевод с фланга на фланг, высокий прессинг, ошибки при приёме под давлением, мелкие остановки игры.`
  );

  lines.push(``);
  lines.push(`В. РЕАЛИСТИЧНОСТЬ ФОЛОВ, ЖЁЛТЫХ И КРАСНЫХ КАРТОЧЕК (${disc.tier.toUpperCase()}):`);
  lines.push(`• Настрой судейства на эту игру: ${disc.refMood}`);
  lines.push(`• Ориентир фолов на весь матч: ${disc.foulsTarget} (${disc.lightFoulRatioNote}).`);
  lines.push(
    `• ОБЫЧНЫЕ МЕЛКИЕ ФОЛЫ БЕЗ КАРТОЧКИ (около 80% всех фолов!): обязательно показывай обычные рабочие нарушения без ЖК — лёгкий толчок в спину при приёме, зацеп за пятку на развороте, задержка за плечо в середине поля, неаккуратная накладка в борьбе за ничейный мяч, высоко поднятая нога, фол в атаке при верховой борьбе. Для таких эпизодов используй "foul" (и иногда "verbal_warning"), БЕЗ последующего события "yellow"!`
  );
  lines.push(`• Ориентир жёлтых карточек: ${disc.yellowTarget}.`);
  lines.push(`• ${disc.redRule}`);

  if (mode === "full") {
    lines.push(``);
    lines.push(`Г. РАЗНООБРАЗИЕ VAR (БЕЗ ШАБЛОНА):`);
    lines.push(
      `• Не превращай каждое спорное касание в одинаковую драму с одним и тем же сценарием! Используй разные типы VAR-динамики:`
    );
    lines.push(
      `  1) Тихая быстрая фоновая проверка без долгой остановки (особенно при обычных голах — «ВАР проверил позицию на предмет офсайда, всё чисто, игра возобновляется»).`
    );
    lines.push(
      `  2) Проверка и ПОДТВЕРЖДЕНИЕ решения арбитра (гол засчитан несмотря на протесты защитников; пенальти НЕ назначен, потому что защитник дотянулся до мяча; начальная ЖК оставлена в силе без повышения до красной).`
    );
    lines.push(
      `  3) Отмена гола из-за миллиметрового офсайда, случайной игры рукой в голевой фазе или фола в атаке за 10–15 секунд до удара.`
    );
    lines.push(
      `  4) Изменение решения у монитора: назначен пенальти ИЛИ наоборот отменён пенальти с жёлтой за симуляцию; красная карточка отменена после монитора и заменена на жёлтую (либо редкое повышение с жёлтой на красную при откровенной грубости).`
    );
    lines.push(
      `• Во многих матчах вообще обходись 0–1 вмешательством ВАР; 2 длинные проверки — только в редких спорных играх.`
    );
  }

  if (facts.length) {
    lines.push(``);
    lines.push(`Д. ИНТЕРЕСНЫЕ ФАКТЫ ДЛЯ ЖИВОГО ЭФИРА (используй в паузах, типом "fact", "tactical_note" или вплетая в комментарий):`);
    for (const fct of facts) {
      lines.push(`• ${fct}`);
    }
    lines.push(
      mode === "full"
        ? `• Вставь 2–4 события с типом "fact" (или органично вплети факты в комментарий во время пауз, аута, подготовки к стандарту или спокойного отрезка). Никогда не выдумывай статистику не из контекста!`
        : `• Упомяни в заметке (note) или ключевых событиях 1–2 реальных факта из списка выше (предыстория, серия, лидеры).`
    );
  }

  return lines.join("\n");
}

// ---------- Rich Fallback Phrases (when LLM is unavailable or fails) ----------

const LIGHT_FOUL_TEMPLATES = [
  (f: string, v: string) => `${f} слегка подталкивает ${v} в спину при борьбе за верховой мяч — мелкий рабочий фол в центре поля.`,
  (f: string, v: string) => `${f} опаздывает на полшага в отборе и цепляет ${v} за бутсу на развороте — свисток арбитра без карточки.`,
  (f: string, v: string) => `${f} придерживает ${v} за футболку, не давая развернуть быструю атаку — фол зафиксирован, играем дальше.`,
  (f: string, v: string) => `${f} ставит корпус неаккуратно и сбивает темп прорыва ${v} — обычный тактический фол на бровке.`,
  (f: string, v: string) => `Небольшая накладка со стороны ${f} в единоборстве против ${v} — арбитр сразу указывает на точку штрафного.`,
  (f: string, v: string) => `${f} высоко поднимает ногу в борьбе за подбор рядом с ${v} — свисток за опасную игру, но без жёлтой.`,
  (f: string, v: string) => `${f} в атаке слишком активно помогает себе руками против ${v} — мяч переходит сопернику.`,
  (f: string, v: string) => `Мелкий фол у центральной линии: ${f} задевает ${v} по голеностопу в попытке сыграть на опережение.`
];

const YELLOW_FOUL_TEMPLATES = [
  (f: string, v: string) => `${f} в жёстком подкате сбивает ${v}, срывая быстрый выход в контратаку — откровенный фол на предупреждение!`,
  (f: string, v: string) => `${f} срывает перспективный прорыв ${v}, прихватывая соперника руками за плечо — судья тянется к карману.`,
  (f: string, v: string) => `Опоздал в стык ${f} и неприятно врезался в ${v} на границе трети поля — жёсткое нарушение правил.`
];

const PASS_TEMPLATES: Record<string, Array<(p1: string, p2: string, tName: string, oppName: string) => string>> = {
  naguchev: [
    (p1, p2, t) => `${p1} выкручивается из-под опеки и тут же бросает мяч вперёд на ${p2} — ${t} старается завести темп!`,
    (p1, p2, t) => `Смотрите, как тонко ${p1} вырезает передачу по бровке на ${p2} — тренеры ${t} активно подсказывают с кромки.`,
    (p1, p2, t) => `${p1} мягким касанием отыгрывается с ${p2}, и ${t} уже разворачивает атаку на противоположный край.`
  ],
  genich: [
    (p1, p2, t) => `${p1} грамотно прикрывает мяч корпусом и выводит его из-под давления на ${p2} — очень зрелое решение для ${t}.`,
    (p1, p2) => `Передача в недодачу чуть тормозит темп, но ${p2} сам вытягивается на мяч после паса ${p1} и сохраняет владение.`,
    (p1, p2, t) => `${p1} читает открывание ${p2} между линиями — ${t} пробует вскрыть середину коротким розыгрышем.`
  ],
  shnyakin: [
    (p1, p2, t) => `${p1} находит свободным ${p2} в полуфланге — у ${t} сейчас именно через эту зону идёт большая часть остроты.`,
    (p1, p2, t) => `Неторопливый перепас: ${p1} возвращает мяч ${p2}, команда собирается с мыслями и ищет брешь в блоке.`,
    (p1, p2, t) => `${p1} диагональю переводит игру на ${p2}, заставляя оборону соперника смещаться по ширине поля.`
  ],
  minin: [
    (p1, p2, t) => `${p1} через короткую стенку с ${p2} отрезает первую линию прессинга — ${t} планомерно забирает территорию.`,
    (p1, p2) => `${p1} смещается в опорную, получает и переводит мяч в левый полуфланг на ${p2}, меняя вектор атаки.`,
    (p1, p2, t) => `${t} выстраивает позиционное наступление: ${p1} и ${p2} методично раскачивают оборонительный блок.`
  ],
  cherdantsev: [
    (p1, p2, t) => `${p1} разгоняет атаку! Точный пас вперёд на ${p2} — ${t} начинает давить на подступах к штрафной!`,
    (p1, p2) => `${p1} ищет обострение, катит мяч на ход ${p2} — трибуны сразу реагируют шумом!`,
    (p1, p2, t) => `Вязкая борьба за центр, ${p1} выцарапывает мяч и подключает ${p2} — ${t} снова в игре.`
  ],
  trushechkin: [
    (p1, p2, t) => `${p1} мягко опускает мяч на газон и отправляет его вдоль поля к ${p2} — дышит атака ${t}.`,
    (p1, p2) => `Спокойный обмен передачами между ${p1} и ${p2}: пауза в темпе, где каждый ждёт неосторожного шага соперника.`,
    (p1, p2, t) => `${p1} чувствует свободное пространство на краю и отправляет туда ${p2} — рисунок ${t} выстраивается неспешно.`
  ],
  aksenov: [
    (p1, p2, t) => `${p1} вырывается из жёсткой опеки и успевает сунуть мяч на ${p2} — ${t} не уступает в стыках.`,
    (p1, p2) => `${p1} и ${p2} вдвоём выходят из-под плотного прессинга на фланге, судья рядом всё контролирует.`,
    (p1, p2, t) => `${p1} отправляет мяч вперёд на ${p2}, заставляя защитников пятиться лицом к своим воротам — ${t} добавляет в движении.`
  ]
};

export function pickCommentatorPassLine(
  commentatorId: string,
  p1: string,
  p2: string,
  tName: string,
  oppName: string,
  rVal: number
): string {
  const pool = PASS_TEMPLATES[commentatorId] || PASS_TEMPLATES.naguchev;
  const fn = pool[Math.floor(rVal * pool.length) % pool.length];
  return fn(p1, p2, tName, oppName);
}

export function pickRealisticFoulLine(isYellow: boolean, fName: string, vName: string, rVal: number): string {
  const pool = isYellow ? YELLOW_FOUL_TEMPLATES : LIGHT_FOUL_TEMPLATES;
  const fn = pool[Math.floor(rVal * pool.length) % pool.length];
  return fn(fName, vName);
}
