import Header from "@/components/Header/Header"
import { ReactNode }from "react"

interface layoutProps {
  children: ReactNode
}

export default function Layout(props: layoutProps) {
return (
    <>
    <Header/>
    {props.children}
    </>
)
}