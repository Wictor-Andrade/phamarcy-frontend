import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cdn } from "@/utils/cdn";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 my-8", className)} {...props}>
      <Card className="rounded-none h-auto bg-background min-w-2xl">
        <CardHeader className="text-center items-center my-8">
          <Image
            className="w-auto h-auto"
            src={cdn.logo}
            width={300}
            height={121}
            alt="a barateira"
          />
        </CardHeader>
        <CardContent className="my-8">
          <form>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">User Address</Label>
                <div className="border-b border-primary border-1 pb-1">
                  <Input
                    className="border-0 shadow-none"
                    id="email"
                    type="email"
                    placeholder="joe@phamarcy.com"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2 border-b border-primary border-1 pb-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="border-0 shadow-none"
                  id="password"
                  type="password"
                  placeholder="***********"
                  required
                />
              </div>
              <div className="flex flex-row">
                <div className="gap-2 flex flex-row items-center text-primary">
                  <Checkbox />
                  Remember me
                </div>
                <a
                  href="#"
                  className="ml-auto text-sm text-primary underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Link href="/home">
                <Button type="submit" className="w-full">
                  Log in
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
