import React from "react"
import Nav from "../components/Nav.js"
import Intro from "../components/Intro.js"

export default class Index extends React.Component {
    render() {
        return (
            <div className="">
                <Intro />
                <Nav />
            <style jsx global>{`
                 body {
                     margin: 0;
                     padding: 0;
                     height: 100%;
                     font-family: 'Gloria Hallelujah', cursive;
                 }
                 `}</style>
            </div>
        )
    }
}

