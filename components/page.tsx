// app/page.tsx (recommended location)
import ValentineQr from "@/components/ValentineQr"

export default function Home() {
  // For local dev: value="/welcome"
  // For production: set value="https://YOUR_DEPLOYED_ORIGIN/welcome"
  return (
    <div>
      <ValentineQr value="/welcome" />
    </div>
  )
}
