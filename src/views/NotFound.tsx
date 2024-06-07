import styles from "./NotFound.module.css"
import { NavBar } from "../components/NavBar"
import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"

export function NotFound(){
    return(
        <>
        <NavBar/>
        <Hero first= "404" second="not found"/>
        <Footer/>
        </>
    )
}