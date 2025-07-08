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
import { signup } from "@/lib/auth-actions"
import SignInWithGoogleButton from "./SignInWithGoogleButton"

export function SignUpForm({

  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Inscription</CardTitle>
          <CardDescription>
            Entrez vos identifiants pour vous inscrire
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="first-name">Prénom</Label>
                        <Input
                        name="first-name"
                        id="first-name"
                        placeholder="Max"
                        required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">Nom de famille</Label>
                        <Input
                        name="last-name"
                        id="last-name"
                        placeholder="Robinson"
                        required
                        />
                    </div>
                </div>
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
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
                <Button type="submit" formAction={signup} className="w-full cursor-pointer">
                    S&apos;inscrire
                </Button>
                <SignInWithGoogleButton/>
            </div>
            
        </form>
        <div className="mt-4 text-center text-sm">
          Vous avez déjà un compte ?{" "}
          <Link href="/login" className="underline">
            Connectez-vous
          </Link>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}
