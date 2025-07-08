import { SignUpForm } from "@/components/auth/SignUpForm"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: "Inscription | Ripe Strawberries",
    description: "Créez votre compte Ripe Strawberries pour commencer à noter vos films et vos séries.",
  }
}