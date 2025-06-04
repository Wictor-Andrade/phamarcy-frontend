import {LoginForm} from "@/features/login/login-form";
import {cdn} from "@/utils/cdn";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Image
        src={cdn.backgroundLogin}
        alt="Background"
        fill
        quality={100}
        priority
        className="object-cover -z-10 brightness-50 contrast-125"
      />
        <LoginForm className="w-full max-w-xl p-12" />
    </div>
  );
}
