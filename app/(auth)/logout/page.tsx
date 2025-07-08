'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-sm text-center shadow-xl">
        <CardContent className="py-8">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <h2 className="text-lg font-medium text-muted-foreground">
              Vous vous êtes déconnecté.
            </h2>
            <p className="text-sm text-muted-foreground">
              {"Redirection vers l'accueil..."}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoutPage;
