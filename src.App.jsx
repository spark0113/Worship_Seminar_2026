import { useMemo, useState } from 'react'
import { questions, results } from './data'

const APPLY_URL = 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=k4J4x4E8Jk6bDTgoTCerRt0eUiGlKrFLhd87XA-lG2FUQkM1WlRWQUoxNFlSMTZUSEQ2OURTR1FTWi4u&route=shorturl'

function shuffleAnswers(answers, seed) {
  // 같은 질문 안에서는 렌더링마다 순서가 바뀌지 않게 간단한 seeded shuffle
  const arr = [...answers]
  let x = seed * 9973
  for (let i = arr.length - 1; i > 0; i--) {
    x = (x * 9301 + 49297) % 233280
    const j = Math.floor((x / 233280) * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.map((answer, index) => ({
    ...answer,
    displayLabel: ['A', 'B', 'C', 'D'][index],
  }))
}

function getResultType(answers) {
  const score = { worship: 0, support: 0, community: 0, service: 0 }

  answers.forEach((type) => {
    if (score[type] !== undefined) score[type] += 1
  })

  const entries = Object.entries(score).sort((a, b) => b[1] - a[1])
  const topScore = entries[0][1]
  const topTypes = entries.filter(([, value]) => value === topScore)

  // 5문항이라 동점이 잦을 수 있음. 1등이 명확하지 않으면 균형형으로 처리.
  if (topTypes.length >= 2 || topScore <= 1) return 'balanced'

  return entries[0][0]
}

function StartScreen({ onStart }) {
  return (
    <main className="screen">
      <section className="hero card">
        <p className="eyebrow">우리는 예배자입니다</p>
        <h1>나는 어떤 예배자일까?</h1>
        <p className="subtitle">10초만에 알아보는 나의 사역 스타일</p>

        <div className="emoji-row" aria-hidden="true">
          <span>🎵</span>
          <span>🛠️</span>
          <span>🤝</span>
          <span>❤️</span>
        </div>

        <button className="primary-button" onClick={onStart}>
          테스트 시작하기
        </button>

        <p className="tiny">사역 여부와 상관없이 누구나 참여할 수 있어요.</p>
      </section>
    </main>
  )
}

function QuestionScreen({ currentIndex, selectedType, onSelect, onBack }) {
  const question = questions[currentIndex]
  const shuffledAnswers = useMemo(
    () => shuffleAnswers(question.answers, question.id),
    [question]
  )

  return (
    <main className="screen">
      <section className="card question-card">
        <div className="topline">
          <button className="ghost-button" onClick={onBack}>
            이전
          </button>
          <span>
            Q{currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className="progress-track">
          <div
            className="progress-bar"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2>{question.question}</h2>

        <div className="answer-list">
          {shuffledAnswers.map((answer) => (
            <button
              key={`${question.id}-${answer.text}`}
              className={`answer-button ${selectedType === answer.type ? 'selected' : ''}`}
              onClick={() => onSelect(answer.type)}
            >
              <span className="answer-label">{answer.displayLabel}</span>
              <span>{answer.text}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

function ResultScreen({ resultType, onRestart }) {
  const result = results[resultType]

  const shareText = `나의 사역 스타일은 ${result.emoji} ${result.title}! ${result.tagline}`

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: '나의 사역 스타일 테스트',
        text: shareText,
        url: window.location.href,
      })
      return
    }

    await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`)
    alert('결과 링크가 복사됐어요!')
  }

  return (
    <main className="screen result-screen">
      <section className="card result-hero">
        <p className="eyebrow">당신의 사역 스타일은</p>
        <div className="result-emoji">{result.emoji}</div>
        <h1>{result.title}</h1>
        <p className="tagline">“{result.tagline}”</p>
        <p className="description">{result.description}</p>
        <a className="primary-button link-button" href={APPLY_URL} target="_blank" rel="noreferrer">
          예배사역 세미나 신청하기
        </a>
      </section>

      <section className="card">
        <h2>이런 모습이 있어요</h2>
        <ul className="check-list">
          {result.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>찰떡궁합 사역</h2>
        <div className="chips">
          {result.ministries.map((ministry) => (
            <span key={ministry}>{ministry}</span>
          ))}
        </div>
        <p className="tiny left">
          꼭 정답은 아니에요. 나의 성향을 발견해보는 작은 힌트예요.
        </p>
      </section>

      <section className="bridge">
        <p>
          하지만 사역은 하나의 유형으로만 정해지지 않아요.
          각자의 은사와 마음이 모일 때, 예배는 살아나고 공동체는 함께 세워져요.
        </p>
        <strong>당신은 하나의 역할이 아니라, 하나님이 사용하시는 예배의 조각입니다.</strong>
      </section>

      <section className="card seminar-card">
        <p className="eyebrow">예배사역 세미나</p>
        <h1>우리는 예배자입니다</h1>
        <p>
          이번 예배사역 세미나는 예배팀만을 위한 시간이 아니에요.
          예배를 섬기고 있는 분들, 사역을 시작해보고 싶은 분들,
          그리고 예배와 공동체를 더 깊이 알아가고 싶은 모든 성도님들을 위한 자리예요.
        </p>

        <div className="invite-box">
          <h2>이런 분들을 초대합니다</h2>
          <ul className="check-list">
            <li>예배를 더 깊이 알고 싶은 분</li>
            <li>현재 예배/사역팀으로 섬기고 있는 분</li>
            <li>사역을 시작해보고 싶지만 망설이고 있는 분</li>
            <li>섬김의 기쁨을 다시 회복하고 싶은 분</li>
            <li>공동체 안에서 나의 역할을 고민하는 분</li>
          </ul>
        </div>

        <p className="closing">
          참된 예배의 회복, 아름다운 공동체의 세움,
          그리고 사역의 기쁨을 다시 발견하는 시간이 되기를 소망합니다.
        </p>

        <a className="primary-button link-button" href={APPLY_URL} target="_blank" rel="noreferrer">
          예배사역 세미나 신청하기
        </a>

        <div className="button-row">
          <button className="secondary-button" onClick={handleShare}>
            결과 공유하기
          </button>
          <button className="secondary-button" onClick={onRestart}>
            다시 테스트하기
          </button>
        </div>
      </section>

      <div className="sticky-cta">
        <a href={APPLY_URL} target="_blank" rel="noreferrer">
          세미나 신청하기
        </a>
      </div>
    </main>
  )
}

export default function App() {
  const [step, setStep] = useState('start')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleStart = () => {
    setAnswers([])
    setCurrentIndex(0)
    setStep('question')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelect = (type) => {
    const nextAnswers = [...answers]
    nextAnswers[currentIndex] = type
    setAnswers(nextAnswers)

    if (currentIndex === questions.length - 1) {
      setStep('result')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setCurrentIndex((prev) => prev + 1)
  }

  const handleBack = () => {
    if (currentIndex === 0) {
      setStep('start')
      return
    }
    setCurrentIndex((prev) => prev - 1)
  }

  const resultType = getResultType(answers)

  if (step === 'start') return <StartScreen onStart={handleStart} />

  if (step === 'question') {
    return (
      <QuestionScreen
        currentIndex={currentIndex}
        selectedType={answers[currentIndex]}
        onSelect={handleSelect}
        onBack={handleBack}
      />
    )
  }

  return <ResultScreen resultType={resultType} onRestart={handleStart} />
}
