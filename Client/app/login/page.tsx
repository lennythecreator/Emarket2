import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page(){
    return(
        <div className="bg-gradient-to-l from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center">
            <form className="bg-white flex flex-col gap-4 w-full max-w-md p-8 rounded-lg shadow-md">
               <h1 className="font-semibold text-2xl">Welcome to E-market!</h1>
               <Label htmlFor="login">Login</Label>
               <Input type="text" placeholder="Login" id="login"/>
               <Label htmlFor="password">Password</Label>
               <Input type="password" placeholder="Password"/>
               <Button>Login</Button>

                
            </form>
        </div>
    )
}