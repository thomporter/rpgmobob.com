

export function PageHeader ({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-4 text-xl font-bold">
      {children}
    </h1>
  )
}