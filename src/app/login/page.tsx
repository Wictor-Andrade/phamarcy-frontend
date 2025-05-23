import { LoginForm } from "@/features/login/login-form";
import { cdn } from "@/utils/cdn";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <Image
        src={cdn.loginBackgroundImage}
        alt="Background"
        fill
        className="object-cover -z-10"
      />
      <div className="flex w-full max-w-lg flex-col rounded-xl p-6">
        <LoginForm />
      </div>
    </div>
  );
}
