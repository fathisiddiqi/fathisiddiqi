import React from "react"
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
    <div className="container mx-auto flex">
      <div className="inline-flex">
        <div className="mr-2 text-xl md:text-5xl">Hi, there!</div>
        <div className="text-xl md:text-5xl">
          <Typewriter
            options={{
              strings: [
                "<span style='color: red'>I'm Muhammad Fathi</span>",
                "<span style='color: green'>I'm Freelancer</span>",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}
