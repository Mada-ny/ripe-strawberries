import { LoginForm } from "@/components/auth/LoginForm"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

export async function generateMetadata() {
  return {
    title: "Connexion | Ripe Strawberries",
    description: "Connectez-vous à votre compte Ripe Strawberries pour accéder à vos notes de films, critiques et recommandations.",
  }
}