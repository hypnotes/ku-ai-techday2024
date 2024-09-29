// 11:10	11:40	게임 산업에서의 Vision AI 기술 활용 사례	NCSOFT (김민재 AI Tech 센터장)
// 11:40	12:00	Harnessing Vision-Language Models for Open-Vocabulary Visual Understanding	김현우 교수
// 12:00	13:30	점심
// 13:30	14:00	EXAONE과 멀티모달: 실사례로 살펴보는 AI의 가능성	LG AI 연구원 (이순영 멀티모달랩장)
// 14:00	14:20	Connecting Language to Vision: Exploring Vision-Language Foundation Models for Grounding Language	서홍석 교수
// 14:20	14:30	Break
// 14:30	15:00	지능을 만드는 과정의 조망 : LLM Lifecycle	KT (윤경아 AI Tech 랩장)
// 15:00	15:20	한국어 특화 LLM: 구름 (KULLM)	임희석 교수
// 15:20	16:00	Coffee Break 및 포스터 세션
// 16:00	16:30	Powering the Inference Age: Introducing RNGD for Scalable and Sustainable AI	퓨리오사AI (김한준 CTO)
// 16:30	16:50	Enabling Resource-Efficient Deep Learning: Toward On-Device AI	김영근 교수
// 16:50	17:00	Break
// 17:00	17:30	B2B Innovation: Harnessing Fullstack LLMs and RAG Pipelines with Language Expansion	업스테이지 (이활석 CTO)
// 17:30	17:50	Learning from Evolving Unstructured Data with Foundation Models	윤수식 교수
// 17:50	18:00	시상 및 폐회사 (포스터/데모, 명품인재x업스테이지 LLM Innovators Challenge)	한정현 사업단장
const scheduleData = [
  {
    time: '10:00 - 10:10',
    program: '개회사',
    presenter: '한정현 사업단장',
    affiliation: '고려대 컴퓨터학과',
    chair: '정원기 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '10:10 - 10:30',
    program: 'Conquering Cancer with Foundation Models at Lunit',
    presenter: '김태수 리더',
    affiliation: '루닛',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '10:40 - 11:00',
    program: 'Navigating the New Frontier of Precision Medicine in the LLM Era',
    presenter: '강재우 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '11:00 - 11:10',
    program: 'Break ',
    presenter: '',
    affiliation: '',
    chair: '',
    location: ''
  },
  {
    time: '11:10 - 11:40',
    program: '게임 산업에서의 Vision AI 기술 활용 사례	NCSOFT',
    presenter: '김민재 AI Tech 센터장',
    affiliation: 'NCSOFT',
    chair: '오학주 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '11:40 - 12:00',
    program:
      'Harnessing Vision-Language Models for Open-Vocabulary Visual Understanding',
    presenter: '김현우 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '12:00 - 13:30',
    program: '점심 ',
    presenter: '',
    affiliation: '',
    chair: '',
    location: '애기능생활관'
  },
  {
    time: '13:30 - 14:00',
    program: 'EXAONE과 멀티모달: 실사례로 살펴보는 AI의 가능성',
    presenter: '이순영 멀티모달랩장',
    affiliation: 'LG AI 연구원',
    chair: '',
    location: '강당 (B112호)'
  },
  {
    time: '14:00 - 14:20',
    program:
      'Connecting Language to Vision: Exploring Vision-Language Foundation Models for Grounding Language',
    presenter: '서홍석 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '김승룡 교수님',
    location: '강당 (B112호)'
  },
  {
    time: '14:20 - 14:30',
    program: 'Break',
    presenter: '',
    affiliation: '',
    chair: '',
    location: ''
  },
  {
    time: '14:30 - 15:00',
    program: '지능을 만드는 과정의 조망: LLM Lifecycle',
    presenter: '윤경아 AI Tech 랩장',
    affiliation: 'KT',
    chair: '',
    location: ''
  },
  {
    time: '15:00 - 15:20',
    program: '한국어 특화 LLM: 구름 (KULLM)',
    presenter: '임희석 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: ''
  },
  {
    time: '15:20 - 16:00',
    program: 'Coffee Break 및 포스터 세션',
    presenter: '',
    affiliation: '',
    chair: '',
    location: ''
  },
  {
    time: '16:00 - 16:30',
    program:
      'Powering the Inference Age: Introducing RNGD for Scalable and Sustainable AI',
    presenter: '김한준 CTO',
    affiliation: '퓨리오사AI',
    chair: '',
    location: ''
  },
  {
    time: '16:30 - 16:50',
    program: 'Enabling Resource-Efficient Deep Learning: Toward On-Device AI',
    presenter: '김영근 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: ''
  },
  {
    time: '16:50 - 17:00',
    program: 'Break',
    presenter: '',
    affiliation: '',
    chair: '',
    location: ''
  },
  {
    time: '17:00 - 17:30',
    program:
      'B2B Innovation: Harnessing Fullstack LLMs and RAG Pipelines with Language Expansion',
    presenter: '이활석 CTO',
    affiliation: '업스테이지',
    chair: '',
    location: ''
  },
  {
    time: '17:30 - 17:50',
    program: 'Learning from Evolving Unstructured Data with Foundation Models',
    presenter: '윤수식 교수',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: ''
  },
  {
    time: '17:50 - 18:00',
    program:
      '시상 및 폐회사 (포스터/데모, 명품인재x업스테이지 LLM Innovators Challenge)',
    presenter: '한정현 사업단장',
    affiliation: '고려대 컴퓨터학과',
    chair: '',
    location: ''
  }
]

export default scheduleData
