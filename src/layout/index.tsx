import Header from "~/components/Header"
import type { JSXElement } from "solid-js"

export default function ({ children }: { children: JSXElement }) {
  return (
    <div id="root" class="py-2em before">
      <Header />
      {children}
    </div>
  )
}
