'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LogoutPage =  () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=> router.push("/"), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return <div>Vous vous êtes déconnecté... redirection dans un instant.</div>;
};

export default LogoutPage;