"use client"

import { useUser } from "@clerk/nextjs";
import { Navigation } from "./_components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {isSignedIn, user, isLoaded } = useUser();

  const isAdmin = user?.publicMetadata.role === "admin";
  if (isAdmin){
    return   <div className="bg-muted h-screen flex gap-6  ">
      <Navigation />
      {children}
    </div>
  }
    return <div>Not an admin</div>
}

