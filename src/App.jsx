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
  const score = {
    mary: 0,
    david: 0,
    solomon: 0,
    isaiah: 0,
  }

  answers.forEach((type) => {
    if (score[type] !== undefined) score[type] += 1
  })

  const entries = Object.entries(score).sort((a, b) => b[1] - a[1])
  const topScore = entries[0][1]
  const topTypes = entries.filter(([, value]) => value === topScore)

  // 동점이면 균형형
  if (topTypes.length >= 2 || topScore <= 1) return 'balanced'

  return entries[0][0]
}

function StartScreen({ onStart }) {
  return (
    <main className="screen">
      <section className="hero card">
        <p className="eyebrow">우리는 예배자입니다</p>
        <h1>나는 어떤 예배자일까?</h1>
        <p className="subtitle">10초만에 알아보는 나의 예배 유형</p>

        <div className="emoji-row" aria-hidden="true">
          <span>🎵</span>
          <span>🛠️</span>
          <span>🤝</span>
          <span>❤️</span>
        </div>

        <button className="primary-button" onClick={onStart}>
          테스트 시작하기
        </button>

        <p className="tiny">누구나 참여할 수 있어요!</p>
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
  const [showPoster, setShowPoster] = useState(false)
  const shareText = `나의 예배 유형은 ${result.emoji} ${result.title}! ${result.tagline}`

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: '나의 예배 유형 테스트',
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
        <p className="eyebrow">당신의 예배 유형은</p>
        <div className="result-emoji">{result.emoji}</div>
        <h1>{result.title}</h1>
        <p className="tagline">“{result.tagline}”</p>
        <p className="description">{result.description}</p>
      </section>

      <section className="bridge">
        <strong>
          참된 예배가 궁금하신가요?
          <br />하나님은 지금의 우리를 예배자로 부르고 계세요.
          <br />
          <br />
          더 깊은 예배가 궁금하다면,
          <br />섬김이 다시 기쁨이 되기를 원한다면,
          <br />그런 당신을 위해 준비했습니다.
        </strong>
      </section>

      <section className="card seminar-card">
        <p className="eyebrow">예배 세미나</p>
        <h1>우리는 예배자입니다</h1>

        <button
          className="poster-card"
          type="button"
          onClick={() => setShowPoster(true)}
          aria-label="예배 세미나 포스터 크게 보기"
        >
          <img src="/poster.png" alt="우리는 예배자입니다 예배 세미나 포스터" />
          <span className="poster-hint">눌러서 크게 보기</span>
          <div className="poster-info">
            <strong>6월 27일 토요일</strong>
            <span>오후 2:00–7:30</span>
            <span>퍼스백양장로교회</span>
          </div>
        </button>

        <a className="primary-button link-button" href={APPLY_URL} target="_blank" rel="noreferrer">
          예배 세미나 신청하기
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
          예배 세미나 신청하기
        </a>
      </div>

      {showPoster && (
        <div className="poster-modal" onClick={() => setShowPoster(false)}>
          <div className="poster-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/poster.png" alt="예배 세미나 포스터 크게 보기" />
            <button type="button" onClick={() => setShowPoster(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
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