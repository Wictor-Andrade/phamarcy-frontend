"use client";
import {FormEvent, useContext, useState} from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {cdn} from "@/utils/cdn";
import Image from "next/image";
import {Checkbox} from "@/components/ui/checkbox";
import {AuthContext} from '@/features/auth/contexts/auth-context';


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const [email, setEmail] = useState('admin@phamarcy.com');
  const [password, setPassword] = useState('12345678');
  const { signIn } = useContext(AuthContext);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    await signIn({ email, password });
  };
  return (
    <div className={cn("flex flex-col bg-background", className)} {...props}>
      <Card className="rounded-none border-0 shadow-none max-w-lg h-auto">
        <CardHeader className="text-center items-center">
          <Image
            className="w-auto h-auto"
            src={cdn.logo}
            width={300}
            height={121}
            alt="a barateira"
          />
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">User Address</Label>
                <div className="border-b border-primary border-1 pb-1">
                  <Input
                      value={email}
                    className="border-0 shadow-none"
                    id="email"
                    type="email"
                    placeholder="joe@phamarcy.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid gap-2 border-b border-primary border-1 pb-1">
                <Label htmlFor="password">Password</Label>
                <Input
                    value={password}
                  className="border-0 shadow-none"
                  id="password"
                  type="password"
                  placeholder="***********"
                  onChange={(e) => setPassword(e.target.value)}
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
              <Button type="submit" className="w-full rounded-none h-10">
                Log in
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
