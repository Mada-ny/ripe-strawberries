import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/lib/auth-actions"
import SignInWithGoogleButton from "./SignInWithGoogleButton"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Connexion</CardTitle>
          <CardDescription>
            Entrez votre email pour vous accéder à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" formAction={login} className="w-full cursor-pointer">
                Se connecter
              </Button>
             <SignInWithGoogleButton/> 
            </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;avez pas de compte ?{" "}
          <Link href="/signup" className="underline">
            Créer un compte
          </Link>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}
