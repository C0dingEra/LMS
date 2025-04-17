import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {
    const [signupInput, setSignupInput] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput((prev) => ({
                ...prev,
                [name]: value
            }))
        }
        else {
            setLoginInput((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleRegistration = (e, type) => {
        e.preventDefault();
        console.log(signupInput)
        console.log(loginInput)
    }
    return (
        <div className="flex justify-center items-center w-full">
            <Tabs defaultValue="signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup" className="cursor-pointer">Signup</TabsTrigger>
                    <TabsTrigger value="login" className="cursor-pointer">Login</TabsTrigger>
                </TabsList>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Signup</CardTitle>
                            <CardDescription>
                                Create a new Account and Click signup when you're done.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input name="username" placeholder="Eg. Akash"
                                    required={true}
                                    onChange={(e) => handleChange(e, "signup")}
                                    value={signupInput.username}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" placeholder='Eg. akash@gmail.com'
                                    required={true}
                                    onChange={(e) => handleChange(e, "signup")}
                                    value={signupInput.email}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input name="password" placeholder='1234'
                                    required={true}
                                    onChange={(e) => handleChange(e, "signup")}
                                    value={signupInput.password}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e) => handleRegistration(e, "signup")} className="cursor-pointer" >Signup</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Enter your login credentials. After signing up, you will be logged in.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" type="email"
                                    placeholder="Eg. akash@gmail.com"
                                    required={true}
                                    onChange={(e) => handleChange(e, "login")}
                                    value={loginInput.email}
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input name="password" type="password"
                                    placeholder="1234"
                                    required={true}
                                    onChange={(e) => handleChange(e, "login")}
                                    value={loginInput.password}
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button onClick={(e) => handleRegistration(e, "login")} className="cursor-pointer"
                            >Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Login;
