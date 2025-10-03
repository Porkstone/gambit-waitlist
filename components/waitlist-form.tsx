"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your backend
      fetch("https://hallowed-mongoose-597.convex.site/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          mailingListName: "gambit-waitlist",
          email
        })
      }).catch((err) => {
        // Optionally handle error, but don't block UI
        console.error("Failed to subscribe:", err)
      })
      console.log("Email submitted:", email)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6">
          <p className="text-green-400 font-medium">{"🎉 You're on the list!"}</p>
          <p className="text-sm text-green-300 mt-1">{"We'll notify you when Gambit launches."}</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <Input
        type="email"
        placeholder="ENTER EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 border-0 h-12 text-sm font-medium tracking-wide text-center sm:text-left placeholder:text-center sm:placeholder:text-left"
      />
      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 font-bold text-sm tracking-wide whitespace-nowrap"
      >
        CLAIM FREE INVITE
      </Button>
    </form>
  )
}
