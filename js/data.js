// 동물 데이터: id(그림 파일 이름), en(영어), ko(한글), say(읽을 소리, 없으면 en)
window.A = window.A || {};

A.THEMES = [
  { id: 'bug', ko: '곤충', en: 'Bugs', icon: '🐞', cover: 'butterfly', color: '#f8c8d2',
    words: [
      ['bee', 'bee', '벌'], ['butterfly', 'butterfly', '나비'], ['ant', 'ant', '개미'], ['ladybug', 'ladybug', '무당벌레'], ['dragonfly', 'dragonfly', '잠자리'],
      ['spider', 'spider', '거미'], ['snail', 'snail', '달팽이'], ['caterpillar', 'caterpillar', '애벌레'], ['grasshopper', 'grasshopper', '메뚜기'], ['firefly', 'firefly', '반딧불이'],
      ['moth', 'moth', '나방'], ['mosquito', 'mosquito', '모기'], ['scorpion', 'scorpion', '전갈'], ['beetle', 'beetle', '딱정벌레'], ['worm', 'worm', '지렁이'],
    ] },
];

// 5개씩 묶음으로 나누기 (맨 끝 묶음은 5개보다 적을 수 있음)
A.GROUP_SIZE = 5;
A.THEMES.forEach(t => {
  t.words = t.words.map(([id, en, ko, say]) => ({
    id, en, ko, say: say || en,
    art: /^[aeiou]/i.test(en) && !/^uni/i.test(en) ? 'an' : 'a',   // unicorn 은 '유'로 시작하는 소리라 a
  }));
  t.groups = [];
  for (let i = 0; i < t.words.length; i += A.GROUP_SIZE) {
    t.groups.push(t.words.slice(i, i + A.GROUP_SIZE));
  }
});
