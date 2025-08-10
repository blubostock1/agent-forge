"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {

  const { data: session } = authClient.useSession() 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
      authClient.signUp.email({
        email,
        name,
        password
      }, {
        onError: () => {
          window.alert("Something went wrong.");
        }, 
        onSuccess: () => {
          window.alert("Success");
        }
      });
  }

  const login = () => {
    authClient.signIn.email({
      email,
      password
    }, {
      onError: () => {
        window.alert("Something went wrong.");
      }, 
      onSuccess: () => {
        window.alert("Success");
      }
    });
}

  const signOut = () => {
    authClient.signOut();
  }

  if (session) {
    return (
      <div>
        <p>Logged in as {session.user.name}</p>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    )
  } else {
    return (
      <div>
        <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={submit}>Create User</Button>
      </div>
      <div>
        <div className="p-4 flex flex-col gap-y-4">
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={login}>Login</Button>
      </div>
      </div>
      </div>
    );
  }
}
