# MermaidDiagram Component

A React component for rendering Mermaid diagrams with dark theme styling in the lp-development project.

## Installation

The `mermaid` package has been added to the project dependencies:

```json
"mermaid": "^11.12.2"
```

## Component Location

`c:\PrimaMateriaWeb\lp-development\components\MermaidDiagram.tsx`

## Usage

### Basic Usage

```typescript
import { MermaidDiagram } from "@/components/MermaidDiagram";

export default function Page() {
  const flowchartCode = `
    graph TD
    A[開始] --> B{条件分岐}
    B -->|Yes| C[処理A]
    B -->|No| D[処理B]
  `;

  return <MermaidDiagram chart={flowchartCode} />;
}
```

### With Custom Classes

```typescript
<MermaidDiagram
  chart={flowchartCode}
  className="my-custom-class"
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `chart` | `string` | Yes | Mermaid diagram syntax as a string |
| `className` | `string` | No | Additional CSS classes for styling |

## Features

1. **Client Component**: Uses `"use client"` directive for client-side rendering
2. **Dark Theme**: Automatically applies dark theme with PrimaMateria brand colors
3. **Responsive**: Mobile-friendly with horizontal scrolling for large diagrams
4. **Error Handling**: Graceful error display if diagram fails to render
5. **Loading State**: Shows loading indicator while rendering
6. **Type Safe**: Full TypeScript support with proper type definitions

## Theme Configuration

The component uses the following color scheme aligned with lp-development design:

| Element | Color | Usage |
|---------|-------|-------|
| Primary | `#14b8a6` | Main diagram elements |
| Secondary | `#2d3139` | Background elements |
| Background | `#1a1d23` | Container background |
| Text | `#ffffff` | Primary text |
| Text (Secondary) | `#e2e8f0` | Secondary text |

## Supported Diagram Types

The component supports all Mermaid diagram types:

- Flowcharts (`graph TD/LR`)
- Sequence diagrams (`sequenceDiagram`)
- Class diagrams (`classDiagram`)
- State diagrams (`stateDiagram-v2`)
- ER diagrams (`erDiagram`)
- Gantt charts (`gantt`)
- Pie charts (`pie`)
- And more...

## Example Diagrams

### Flowchart

```typescript
const flowchart = `
  graph TD
    A[開始] --> B{条件分岐}
    B -->|Yes| C[処理A]
    B -->|No| D[処理B]
    C --> E[終了]
    D --> E
`;

<MermaidDiagram chart={flowchart} />
```

### Sequence Diagram

```typescript
const sequenceDiagram = `
  sequenceDiagram
    participant U as User
    participant C as Client
    participant S as Server

    U->>C: Click button
    C->>S: API Request
    S-->>C: Response
    C-->>U: Update UI
`;

<MermaidDiagram chart={sequenceDiagram} />
```

### ER Diagram

```typescript
const erDiagram = `
  erDiagram
    CUSTOMERS ||--o{ ORDERS : places
    ORDERS ||--|{ ITEMS : contains
    CUSTOMERS {
        int id PK
        string name
        string email
    }
    ORDERS {
        int id PK
        int customerId FK
        date orderDate
    }
`;

<MermaidDiagram chart={erDiagram} />
```

## Error Handling

The component gracefully handles rendering errors:

- Displays an error message if Mermaid fails to parse the diagram
- Shows loading state during rendering
- Logs errors to browser console for debugging
- Provides user-friendly error display

## Browser Compatibility

Works in all modern browsers that support:
- React 19+
- ES2020+
- Canvas rendering (for SVG output)

## Notes

- The component re-renders when the `chart` prop changes
- Use `mermaid` syntax directly without wrapping in code blocks
- Ensure Japanese text is properly encoded (UTF-8)
- For complex diagrams, consider breaking them into smaller, more focused ones

## Build Status

- TypeScript: ✓ Compiled successfully (no type errors)
- Production Build: ✓ Built successfully with Next.js 16.1.6
- Package Installation: ✓ Mermaid 11.12.2 installed

## Development

To test the component in development:

```bash
cd c:\PrimaMateriaWeb\lp-development
pnpm dev  # Starts dev server on port 3003
```

The component will be available for import in any page or component within the project.
