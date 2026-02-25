# AITA Design System

## 아토믹 디자인 구조

이 프로젝트는 **아토믹 디자인 패턴**을 따라 구조화되어 있습니다.

### 📁 구조

```
components/
├── atoms/              # 가장 작은 단위의 컴포넌트
│   ├── Button.tsx      # 버튼
│   ├── Badge.tsx       # 뱃지/태그
│   ├── Text.tsx        # 텍스트
│   ├── Overlay.tsx     # 오버레이
│   ├── Container.tsx   # 컨테이너
│   └── index.ts        # Export 모음
│
├── molecules/          # 아토믹 컴포넌트들의 조합
│   ├── VideoCardContent.tsx    # 비디오 카드 콘텐츠
│   ├── VideoCardOverlay.tsx    # 비디오 카드 오버레이
│   └── index.ts
│
├── organisms/          # 복잡한 UI 섹션
│   ├── VideoCard.tsx   # 비디오 카드
│   └── VideoGallery.tsx # 비디오 갤러리
│
└── templates/          # 페이지 레이아웃
    └── Hero.tsx        # 히어로 섹션

lib/
└── design-tokens.ts    # 디자인 토큰 정의
```

---

## 🎨 디자인 토큰

모든 스타일은 `lib/design-tokens.ts`에 정의되어 있습니다.

### Colors (색상)
```typescript
designTokens.colors.background.primary    // bg-black
designTokens.colors.text.primary          // text-white
designTokens.colors.border.light          // border-white/20
```

### Spacing (간격)
```typescript
designTokens.spacing.padding.button.lg    // px-8 py-3
designTokens.spacing.container.x          // px-8 md:px-16 lg:px-20 xl:px-24
designTokens.spacing.margin.md            // mb-4
```

### Typography (타이포그래피)
```typescript
designTokens.typography.size.hero         // text-5xl md:text-6xl lg:text-7xl xl:text-8xl
designTokens.typography.weight.bold       // font-bold
designTokens.typography.leading.tight     // leading-tight
```

### Effects (효과)
```typescript
designTokens.effects.rounded.xl           // rounded-3xl
designTokens.effects.blur.md              // backdrop-blur-md
designTokens.effects.opacity.medium       // opacity-80
```

### Transitions (전환)
```typescript
designTokens.transitions.normal           // transition-all duration-300
designTokens.transitions.transform        // transition-transform duration-700
```

---

## 🧩 Atoms (원자)

### Button
```tsx
import { Button } from '@/components/atoms';

<Button variant="primary" size="lg">
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean

### Badge
```tsx
import { Badge } from '@/components/atoms';

<Badge>FEATURED</Badge>
```

### Text
```tsx
import { Text } from '@/components/atoms';

<Text variant="hero" weight="bold" as="h1">
  Title
</Text>
```

**Props:**
- `variant`: 'hero' | 'h1' | 'h2' | 'h3' | 'body' | 'caption'
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `as`: HTML 태그 (h1, h2, p, span 등)

### Container
```tsx
import { Container } from '@/components/atoms';

<Container>
  Content
</Container>
```

### Overlay
```tsx
import { Overlay } from '@/components/atoms';

<Overlay variant="gradient" />
```

**Props:**
- `variant`: 'gradient' | 'solid' | 'glass'

---

## 🔬 Molecules (분자)

### VideoCardContent
비디오 카드의 제목과 버튼을 포함하는 컴포넌트

### VideoCardOverlay
비디오 카드의 오버레이와 뱃지를 포함하는 컴포넌트

---

## 🧬 Organisms (유기체)

### VideoCard
완전한 비디오 카드 컴포넌트

### VideoGallery
비디오 카드들의 갤러리

---

## 📝 수정 가이드

### 1. 색상 변경
`lib/design-tokens.ts`에서 색상 토큰 수정:
```typescript
colors: {
  background: {
    primary: 'bg-black',  // 여기를 수정
  }
}
```

### 2. 버튼 스타일 변경
`components/atoms/Button.tsx`에서 variant 스타일 수정:
```typescript
const variantStyles: Record<ButtonVariant, string> = {
  primary: `...`,  // 여기를 수정
}
```

### 3. 간격 조정
`lib/design-tokens.ts`에서 spacing 토큰 수정:
```typescript
spacing: {
  padding: {
    button: {
      lg: 'px-8 py-3',  // 여기를 수정
    }
  }
}
```

### 4. 새로운 아토믹 컴포넌트 추가
1. `components/atoms/NewComponent.tsx` 생성
2. 디자인 토큰 사용
3. `components/atoms/index.ts`에 export 추가

---

## ✨ 장점

1. **일관성**: 모든 컴포넌트가 동일한 디자인 토큰 사용
2. **유지보수**: 한 곳만 수정하면 전체 적용
3. **재사용성**: 작은 컴포넌트들을 조합하여 복잡한 UI 구성
4. **확장성**: 새로운 컴포넌트 추가 용이
5. **타입 안정성**: TypeScript로 Props 타입 정의

---

## 🎯 사용 예시

```tsx
import { Button, Text, Container } from '@/components/atoms';
import { designTokens } from '@/lib/design-tokens';

export default function Example() {
  return (
    <Container>
      <Text variant="h1" weight="bold" className={designTokens.spacing.margin.lg}>
        Hello World
      </Text>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </Container>
  );
}
```
