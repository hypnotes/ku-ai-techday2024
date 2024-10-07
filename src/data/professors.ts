export interface Professor {
  name: string
  url: string
  profile: string
  lab: string
}

export const PROFESSORS: Professor[] = [
  {
    name: '강재우',
    url: 'https://dmis.korea.ac.kr',
    profile: '/assets/prof/profKangJaeWoo.jpg',
    lab: 'DMIS'
  },
  {
    name: '김현우',
    url: 'http://mlv.korea.ac.kr/',
    profile: '/assets/prof/profKimHyunWoo.jpg',
    lab: 'MLV'
  },
  {
    name: '서홍석',
    url: 'https://miil.korea.ac.kr/',
    profile: '/assets/prof/profSeoHongSeok.jpg',
    lab: 'MIIL'
  },
  {
    name: '임희석',
    url: 'https://blpkorea.cafe24.com/wp/',
    profile: '/assets/prof/profLimHeeSeok.jpg',
    lab: 'NLP&AI'
  },
  {
    name: '김영근',
    url: 'https://casl.korea.ac.kr/',
    profile: '/assets/prof/profKimYoungGeun.jpg',
    lab: 'CASL'
  },
  {
    name: '윤수식',
    url: 'https://dais.korea.ac.kr/',
    profile: '/assets/prof/profYoonSooSik.png',
    lab: 'DAIS'
  }
]

export type INVITED_LECTURER = {
  name: string
  position: string
  company: string
  education?: string[]
  career: string[]
  lectureTitle?: string
  lectureContent: string[]
  profile: string
}
export const INVITED_LECTURER: INVITED_LECTURER[] = [
  {
    name: '김태수',
    position: '리더',
    company: '루닛',
    education: [
      'Johns Hopkins University, Computer Science 박사, advisor: Dr. Gregory Hager, Dr. Alan Yuille',
      'Johns Hopkins University, Computer Science 석사',
      'Johns Hopkins University, Computer Science 학사'
    ],
    career: ['루닛 의 Cancer Screening AI Department 모델팀 팀장'],
    lectureTitle: 'Foundation Model 이란',
    lectureContent: [
      '루닛의 Foundation Model 과 의료 AI',
      '루닛의 Foundation Model 관련 연구 결과'
    ],
    profile: '/assets/prof/kimtaesu.png'
  },
  {
    name: '김민재',
    position: 'AI Tech 센터장',
    company: 'NCSOFT',
    education: [
      '2015 고려대학교 전자전기공학과 박사',
      '2017 고려대학교 전기전자전파공학부 학사'
    ],
    career: [
      '2024 - 현재  NCSOFT AI Tech 센터장',
      '2022 - 2024 NCSOFT AI 센터 Vision AI Lab 실장',
      '2017 - 2022 NCSOFT AI 센터 Vision AI Lab 팀장',
      '2015 - 2017 LG전자 CTO 자동차부품기술연구소 선임연구원'
    ],
    lectureTitle: '게임 산업에서의 Vision AI 기술 활용 사례',
    lectureContent: [
      '1. Generative AI 기술 발전이 불러온 창작의 패러다임 변화',
      '2. NC에서의 Vision AI 기술 활용 분야 소개'
    ],
    profile: '/assets/prof/kimminjae.png'
  },
  {
    name: '이순영',
    position: '멀티모달랩장',
    company: 'LG AI 연구원',
    education: [
      '2012 서울대학교 전기정보공학부 박사',
      '2007 서울대학교 전기정보공학부 석사',
      '2004 서울대학교 전기정보공학부 학사'
    ],
    career: [
      '2012 ~ 2016 삼성전자 무선사업부: 삼성 인터넷 브라우저 Rendering 엔진 개발, VR 브라우저 개발',
      '2016 ~ 2017 삼성전자 차세대사업팀: 위성 영상 분석, Urban Scene understanding',
      '2017 ~ 2020 삼성전자 네트워크사업부: 최적 기지국 위치 선정 알고리즘 연구, OpenRAN 개발',
      '2021 ~ 현재 LG AI 연구원 멀티모달랩: 생성형 AI, 메디컬 AI '
    ],
    lectureTitle: '전문가를 위한 AI: EXAONE 멀티모달',
    lectureContent: [
      '연구원의 비전/멀티모달  연구 분야 개요',
      'EXAONE 멀티모달 모델의 현업 적용 사례 소개'
    ],
    profile: '/assets/prof/leesunyoung.jpg'
  },
  {
    name: '윤경아',
    position: 'AI Tech 랩장',
    company: 'KT',
    education: ['2001 ~ 2010 전산학과 석/박사, KAIST'],
    career: [
      '2023 ~ 현재 AI Tech Lab장, KT',
      '2021 ~ 2023 Cloud 개발실장, 현대카드',
      '2010 ~ 2020 AI센터 리더, SKT'
    ],
    lectureTitle: '지능을 만드는 과정의 조망: LLM Lifecycle',
    lectureContent: [
      'LLM은 어떻게 만들어 지는가?',
      'LLM은 어떻게 평가되는가?',
      'LLM은 어떻게 운영되고 개선되는가?'
    ],
    profile: '/assets/prof/yoonkyeonga.jpg'
  },
  {
    name: '김한준',
    position: 'CTO',
    company: '퓨리오사AI',
    education: ['2005 KAIST 전산학과 학사', '2015 KAIST 전산학과 박사'],
    career: [
      '2014 ~ 2017 삼성전자 메모리 사업부 메모리솔루션랩',
      '2017 ~ 현재 FuriosaAI CTO'
    ],
    lectureTitle:
      'Powering the Inference Age: Introducing RNGD for Scalable and Sustainable AI',
    lectureContent: [
      '지속가능한 AI 시대를 위한 고성능 저전력 AI Chip의 필요성',
      ' AI Chip 아키텍쳐의 핵심 요소와 Tensor Contraction Architecture 소개'
    ],
    profile: '/assets/prof/kimhanjun.png'
  },
  {
    name: '이활석',
    position: 'CTO',
    company: '업스테이지',
    education: ['2006 ~ 2011 KAIST 전기및전자공학 박사'],
    career: ['2020 ~ 현재 Upstage CTO, ', 
            '2014 ~ 2020 네이버 Clova Visual AI 책임리더',
            '2016 ~ 2017 NCSOFT AI center AI lab vision TF 연구원',
            '2011 ~ 2016 한화테크윈 선행기술연구원 비전기술그룹 연구원'],
    lectureTitle:
      'B2B Innovation: Harnessing Fullstack LLMs and RAG Pipelines with Language Expansion ',
    lectureContent: ['Understand the current state of LLM training, including pre-training, upscaling, and fine-tuning processes in 2024',
                    'Learn about the advancements in language expansion for LLMs to support a wide range of languages',
                    'Gain insights into the role of RAG in enhancing LLM capabilities, focusing on OCR, layout analysis, and embedding techniques'],
    profile: '/assets/prof/leehualseok.jpg'
  }
]
