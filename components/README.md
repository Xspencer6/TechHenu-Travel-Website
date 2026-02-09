# Components Directory

This directory is for your React components.

## Suggested Structure

```
components/
├── ui/              # Reusable UI components (buttons, cards, etc.)
├── layout/          # Layout components (header, footer, sidebar)
├── tours/           # Tour-related components
├── booking/         # Booking-related components
└── auth/            # Authentication components
```

## Example Component

```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}
    >
      {children}
    </button>
  )
}
```
