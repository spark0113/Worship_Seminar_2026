export const questions = [
  {
    id: 1,
    question: '예배가 끝난 뒤, 가장 마음에 남는 순간은?',
    answers: [
      { label: 'A', text: '하나님께 온전히 집중됐다고 느낄 때', type: 'worship' },
      { label: 'B', text: '전체 예배가 자연스럽게 잘 흘러갔을 때', type: 'support' },
      { label: 'C', text: '함께한 사람들과 따뜻한 분위기를 느꼈을 때', type: 'community' },
      { label: 'D', text: '예배를 통해 마음이 움직이거나 위로를 받을 때', type: 'service' },
    ],
  },
  {
    id: 2,
    question: '사역 중 가장 힘들 때는?',
    answers: [
      { label: 'A', text: '예배에 집중하지 못할 때', type: 'worship' },
      { label: 'B', text: '준비가 부족하다고 느낄 때', type: 'support' },
      { label: 'C', text: '팀 분위기가 좋지 않을 때', type: 'community' },
      { label: 'D', text: '섬김의 의미를 잃어버릴 때', type: 'service' },
    ],
  },
  {
    id: 3,
    question: '내가 사역에서 가장 중요하게 생각하는 것은?',
    answers: [
      { label: 'A', text: '하나님과의 관계', type: 'worship' },
      { label: 'B', text: '맡은 역할과 디테일', type: 'support' },
      { label: 'C', text: '함께하는 사람들의 관계', type: 'community' },
      { label: 'D', text: '사람을 세우는 섬김', type: 'service' },
    ],
  },
  {
    id: 4,
    question: '사역을 시작할 때 나는?',
    answers: [
      { label: 'A', text: '누가 도움이 필요한지 살핀다', type: 'service' },
      { label: 'B', text: '기도하며 마음을 준비한다', type: 'worship' },
      { label: 'C', text: '함께할 사람들을 떠올린다', type: 'community' },
      { label: 'D', text: '계획을 꼼꼼히 점검한다', type: 'support' },
    ],
  },
  {
    id: 5,
    question: '하나님께서 지금 내게 가장 원하시는 것은?',
    answers: [
      { label: 'A', text: '사랑의 공동체', type: 'community' },
      { label: 'B', text: '예배의 회복', type: 'worship' },
      { label: 'C', text: '기쁨으로 드리는 헌신', type: 'service' },
      { label: 'D', text: '충성된 섬김', type: 'support' },
    ],
  },
]

export const results = {
  worship: {
    emoji: '🎵',
    title: '예배 에너지형',
    tagline: '예배의 흐름을 살아나게 하는 사람',
    description:
      '예배의 분위기와 흐름에 민감하게 반응하며, 하나님께 집중되는 순간을 자연스럽게 만들어내는 타입이에요.',
    traits: ['예배 흐름 변화에 민감해요', '분위기 전환 감각이 있어요', '은혜의 흐름을 잘 따라가요'],
    ministries: ['찬양팀', '성가대', '미디어팀'],
  },
  support: {
    emoji: '🛠️',
    title: '든든한 지원형',
    tagline: '예배가 흔들리지 않게 세우는 사람',
    description:
      '보이지 않는 디테일과 안정적인 흐름을 책임지며, 전체가 무너지지 않도록 기반을 만드는 타입이에요.',
    traits: ['문제를 미리 발견해요', '준비와 정리 능력이 좋아요', '안정적인 진행을 중요하게 생각해요'],
    ministries: ['미디어팀', '절기팀', '행사운영팀', '통역팀'],
  },
  community: {
    emoji: '🤝',
    title: '공동체 연결형',
    tagline: '공동체 안에서 예배가 살아나게 하는 사람',
    description:
      '관계와 분위기를 중요하게 생각하며, 팀이 하나 되도록 자연스럽게 연결하는 타입이에요.',
    traits: ['사람의 감정과 분위기에 민감해요', '팀 연결 역할을 자연스럽게 해요', '공동체 흐름을 잘 읽어요'],
    ministries: ['안내팀', '행사운영팀', '새가족팀'],
  },
  service: {
    emoji: '❤️',
    title: '섬김 실천형',
    tagline: '손과 발로 예배를 완성하는 사람',
    description:
      '누가 말하기 전에 먼저 보고 움직이며, 사랑을 행동으로 가장 먼저 보여주는 타입이에요.',
    traits: ['눈치가 빠르고 실행력이 있어요', '“그냥 했어요” 스타일이에요', '보이지 않는 섬김을 자연스럽게 감당해요'],
    ministries: ['안내팀', '행사운영팀', '절기팀'],
  },
  balanced: {
    emoji: '💡',
    title: '비전 균형형',
    tagline: '전체를 보는 예배의 조율자',
    description:
      '특정 한 영역보다 전체 흐름을 보며, 예배와 공동체가 균형 있게 흐르도록 돕는 타입이에요.',
    traits: ['전체 흐름을 보는 시야가 있어요', '상황에 따라 유연하게 역할을 바꿔요', '균형 감각이 뛰어나요'],
    ministries: ['예배 전체 흐름을 돕는 모든 사역'],
  },
}
