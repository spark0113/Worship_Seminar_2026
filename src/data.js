export const questions = [
  {
    id: 1,
    question: '예배드릴 때 내가 가장 중요하게 생각하는 것은?',
    answers: [
      { label: 'A', text: '하나님께 온전히 마음을 드리는 것', type: 'mary' },
      { label: 'B', text: '온 마음으로 찬양하며 반응하는 것', type: 'david' },
      { label: 'C', text: '말씀을 깊이 듣고 깨닫는 것', type: 'solomon' },
      { label: 'D', text: '예배 후 삶에서 어떻게 살아갈지 생각하는 것', type: 'isaiah' },
    ],
  },
  {
    id: 2,
    question: '예배 중 가장 마음이 열리는 순간은?',
    answers: [
      { label: 'A', text: '조용히 하나님 앞에 머무를 때', type: 'mary' },
      { label: 'B', text: '찬양 가운데 마음이 뜨거워질 때', type: 'david' },
      { label: 'C', text: '말씀이 분명하게 깨달아질 때', type: 'solomon' },
      { label: 'D', text: '결단하고 삶으로 나아가고 싶어질 때', type: 'isaiah' },
    ],
  },
  {
    id: 3,
    question: '예배를 준비할 때 나는?',
    answers: [
      { label: 'A', text: '기도로 마음을 먼저 준비한다', type: 'mary' },
      { label: 'B', text: '찬양을 들으며 기대하는 마음을 가진다', type: 'david' },
      { label: 'C', text: '말씀이나 본문을 미리 살펴본다', type: 'solomon' },
      { label: 'D', text: '오늘 받은 은혜를 삶에서 실천하고 싶다고 생각한다', type: 'isaiah' },
    ],
  },
  {
    id: 4,
    question: '예배가 끝난 뒤 가장 마음에 남는 것은?',
    answers: [
      { label: 'A', text: '하나님과 더 가까워진 느낌', type: 'mary' },
      { label: 'B', text: '찬양과 기도 가운데 받은 은혜', type: 'david' },
      { label: 'C', text: '말씀을 통해 새롭게 깨달은 진리', type: 'solomon' },
      { label: 'D', text: '이번 주 삶에서 실천해야 할 마음의 결단', type: 'isaiah' },
    ],
  },
  {
    id: 5,
    question: '예배 가운데 가장 힘들게 느껴질 때는?',
    answers: [
      { label: 'A', text: '마음이 분주해서 하나님께 집중하기 어려울 때', type: 'mary' },
      { label: 'B', text: '찬양과 기도에 마음이 잘 반응하지 않을 때', type: 'david' },
      { label: 'C', text: '말씀을 들어도 잘 이해되거나 와닿지 않을 때', type: 'solomon' },
      { label: 'D', text: '예배와 내 일상이 따로 느껴질 때', type: 'isaiah' },
    ],
  },
  {
    id: 6,
    question: '하나님께서 지금 내게 가장 원하시는 것은?',
    answers: [
      { label: 'A', text: '주님 앞에 더 깊이 머무는 마음', type: 'mary' },
      { label: 'B', text: '기쁨으로 반응하는 예배', type: 'david' },
      { label: 'C', text: '말씀 안에서 자라나는 믿음', type: 'solomon' },
      { label: 'D', text: '삶으로 이어지는 순종', type: 'isaiah' },
    ],
  },
]

export const results = {
  mary: {
    emoji: '🌿',
    title: '마리아형 예배자',
    tagline: '주님 앞에 머무는 예배자',
    description:
      '당신은 예배에서 하나님과의 친밀한 관계를 가장 소중히 여기는 사람이에요. 분주함을 내려놓고 주님께 마음을 드리는 예배를 갈망하는 타입이에요.',
    traits: [
      '조용히 하나님께 집중하는 시간을 소중히 여겨요',
      '예배를 의무보다 드림의 마음으로 받아들여요',
      '하나님과의 관계가 회복될 때 큰 은혜를 느껴요',
    ],
    ministries: ['기도', '찬양', '예배 준비'],
  },

  david: {
    emoji: '🔥',
    title: '다윗형 예배자',
    tagline: '온 마음으로 반응하는 예배자',
    description:
      '당신은 찬양과 기도 가운데 하나님께 마음껏 반응하는 예배자예요. 예배의 감격과 기쁨을 소중히 여기고, 하나님을 향한 마음을 자연스럽게 표현하는 타입이에요.',
    traits: [
      '찬양 가운데 마음이 잘 열려요',
      '예배의 기쁨과 감격을 중요하게 생각해요',
      '하나님께 솔직하게 반응하는 것을 소중히 여겨요',
    ],
    ministries: ['찬양팀', '성가대', '예배팀'],
  },

  solomon: {
    emoji: '📖',
    title: '솔로몬형 예배자',
    tagline: '말씀 안에서 깊어지는 예배자',
    description:
      '당신은 예배 가운데 말씀의 의미를 깊이 깨닫고 이해하기를 원하는 사람이에요. 진리를 분명히 알고, 믿음의 기초를 단단히 세우는 것을 중요하게 여기는 타입이에요.',
    traits: [
      '설교와 말씀의 내용을 깊이 생각해요',
      '예배 속에서 하나님의 뜻을 이해하고 싶어해요',
      '믿음이 말씀 위에 세워질 때 안정감을 느껴요',
    ],
    ministries: ['성경공부', '말씀 묵상', '교육 사역'],
  },

  isaiah: {
    emoji: '🕊️',
    title: '이사야형 예배자',
    tagline: '삶으로 보냄받는 예배자',
    description:
      '당신은 예배가 예배당 안에서 끝나지 않고 삶으로 이어져야 한다고 느끼는 사람이에요. 받은 은혜가 일상의 순종과 결단으로 이어지기를 바라는 타입이에요.',
    traits: [
      '예배 후 어떻게 살아야 할지 자주 생각해요',
      '말씀을 삶에 적용하는 것을 중요하게 여겨요',
      '예배가 일상의 변화로 이어질 때 큰 의미를 느껴요',
    ],
    ministries: ['섬김', '선교', '삶의 자리에서의 예배'],
  },

  balanced: {
    emoji: '💡',
    title: '균형형 예배자',
    tagline: '예배의 여러 모습을 함께 품은 예배자',
    description:
      '당신은 찬양, 말씀, 기도, 삶의 적용을 함께 소중히 여기는 사람이에요. 예배의 다양한 모습을 균형 있게 바라보는 타입이에요.',
    traits: [
      '예배의 여러 요소를 고르게 소중히 여겨요',
      '상황에 따라 다양한 방식으로 하나님께 반응해요',
      '예배와 삶이 함께 자라가기를 바라요',
    ],
    ministries: ['예배 전반', '공동체 사역', '섬김의 자리'],
  },
}