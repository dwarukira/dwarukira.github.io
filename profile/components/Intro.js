import React from "react"


const Intro = () => (
    <div className="container">
        <div> </div>
        <div className="intro">
            <h2 className="name"> Duncan Gitonga </h2>
            <p className="">
                            The pictures that you sent me they're still living in my phone
                            I'll admit I like to see them, I'll admit I feel alone
                            And all my friends keep asking why I'm not around

                            It hurts to know you're happy, yeah, it hurts that you've moved on
                            It's hard to hear your name when I haven't seen you in so long

                            It's like we never happened, was it just a lie?
                            If what we had was real, how could you be fine?

                            'Cause I'm not fine at all
            </p>
        </div>
        <style jsx>
        {
            `
            .container {
                width: 100%;
                height: 100vh;
                margin: 0;
                padding:0;
                background-image: url("https://n2o55y0h0e-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Minimalist-Blogging-e1516278695313.jpg");
                background-size: cover;
                background-repeat: no-repeat;
            }

            .intro {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            .name {
                font-size: 4vh;
                margin: 0px;
                background: -webkit-linear-gradient(#AAB6D7, #293555);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            p {
                font-size: 2vh;
                line-height: 50px;
                background: -webkit-linear-gradient(#293555, #AAB6D7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            `
        }
        </style>
    </div>
)

export default Intro
