import Header from "@/components/Header/Header"
import Navbar from "@/components/Navbar/Navbar"
import { ReactNode }from "react"

interface layoutProps {
  children: ReactNode
}

export default function Layout(props: layoutProps) {
return (
    <>
    <Header/>
    <Navbar/>
    {props.children}
    </>
)
}