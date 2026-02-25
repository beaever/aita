# Sila Sveta Clone

Sila Sveta 멀티미디어 프로덕션 스튜디오 웹사이트 클론 프로젝트입니다.

## 🌐 Live Demo

**GitHub Pages**: [https://beaever.github.io/aita](https://beaever.github.io/aita)

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS 4
- **애니메이션**: Framer Motion
- **아이콘**: Lucide React
- **이미지**: Next.js Image 최적화
- **패키지 매니저**: pnpm 9.0.0
- **배포**: GitHub Actions + GitHub Pages

## 주요 기능

- ✨ 반응형 디자인 (웹/모바일 완벽 지원)
- 🎨 다크/라이트 모드 토글
- 🎯 아토믹 디자인 패턴 (Atoms, Molecules, Organisms)
- 🎨 디자인 토큰 시스템
- 🔍 고급 필터링 시스템 (카테고리, 지역, 연도, 환경)
- 📱 모바일 햄버거 메뉴
- 🎬 프로젝트 갤러리 (15개 샘플 프로젝트)
- 🎯 프로젝트 상세 페이지
- 🌟 부드러운 애니메이션 효과
- 🔗 6개 페이지 (Works, Showreel, Services, About, Career, Contact)

## 시작하기

### 개발 서버 실행

```bash
pnpm install
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
pnpm build
pnpm start
```

### 배포

GitHub에 push하면 자동으로 GitHub Pages에 배포됩니다.

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 프로젝트 구조

```
aita/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 메인 페이지 (프로젝트 갤러리)
│   ├── projects/[slug]/   # 프로젝트 상세 페이지
│   ├── showreel/          # 쇼릴 페이지
│   ├── services/          # 서비스 페이지
│   ├── about/             # 소개 페이지
│   ├── career/            # 채용 페이지
│   ├── contacts/          # 연락처 페이지
│   ├── providers.tsx      # Context Providers
│   └── layout.tsx         # Root Layout
├── components/            # 재사용 가능한 컴포넌트
│   ├── atoms/            # 아토믹 컴포넌트
│   │   ├── Button.tsx    # 버튼
│   │   ├── Badge.tsx     # 배지
│   │   ├── Text.tsx      # 텍스트
│   │   ├── Container.tsx # 컨테이너
│   │   └── Overlay.tsx   # 오버레이
│   ├── molecules/        # 분자 컴포넌트
│   │   ├── VideoCardContent.tsx
│   │   └── VideoCardOverlay.tsx
│   ├── Header.tsx        # 네비게이션 헤더
│   ├── Footer.tsx        # 푸터
│   ├── VideoGallery.tsx  # 비디오 갤러리
│   ├── VideoCard.tsx     # 비디오 카드
│   ├── ProjectCard.tsx   # 프로젝트 카드
│   ├── FilterBar.tsx     # 필터 바
│   └── FilterModal.tsx   # 고급 필터 모달
├── contexts/             # React Context
│   └── ThemeContext.tsx  # 다크모드 Context
├── lib/                  # 유틸리티 및 데이터
│   ├── data.ts          # Mock 프로젝트 데이터
│   ├── design-tokens.ts # 디자인 토큰
│   └── utils.ts         # 유틸리티 함수
├── types/                # TypeScript 타입 정의
│   └── index.ts
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions 배포 워크플로우

```

## 페이지 설명

- **Works (/)**: 메인 페이지, 프로젝트 갤러리 및 필터링
- **Showreel**: 비디오 쇼릴 페이지
- **Services**: 제공 서비스 소개
- **About Us**: 회사 소개
- **Join Us**: 채용 정보
- **Contact Us**: 연락처 및 문의 폼

## 필터링 기능

- **카테고리 필터**: Music, Museums & exhibitions, Shows & events
- **고급 필터**:
  - 검색어
  - 연도 (2021-2025)
  - 지역 (Europe, Asia, Middle East and Africa, Americas)
  - 환경 (Show Production, Stage Design, Media Facades, etc.)

## 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 개발 참고사항

- 이미지는 Unsplash API를 사용한 placeholder
- 모든 애니메이션은 Framer Motion으로 구현
- TailwindCSS 4의 최신 기능 활용
- TypeScript strict mode 적용
- 아토믹 디자인 패턴 적용 (Atoms → Molecules → Organisms)
- 디자인 토큰으로 스타일 중앙 관리
- React Context API로 다크모드 구현
- GitHub Actions로 자동 배포

## 배포 설정

### GitHub Pages 배포

1. **Repository Settings**
   - Settings → Pages
   - Source: GitHub Actions 선택

2. **자동 배포**
   - `main` 브랜치에 push하면 자동으로 배포됩니다
   - `.github/workflows/deploy.yml` 파일이 배포를 담당합니다

3. **배포 확인**
   - Actions 탭에서 배포 진행 상황 확인
   - 배포 완료 후 `https://beaever.github.io/aita` 접속

## 디자인 시스템

### 아토믹 디자인 패턴

- **Atoms**: Button, Badge, Text, Container, Overlay
- **Molecules**: VideoCardContent, VideoCardOverlay
- **Organisms**: VideoCard, VideoGallery, ProjectCard, FilterBar, FilterModal

### 디자인 토큰

`lib/design-tokens.ts`에서 중앙 관리:

- Colors (배경, 텍스트, 테두리)
- Spacing (gap, padding, margin)
- Typography (크기, 굵기)
- Effects (rounded, shadow, blur)
- Transitions & Animations
