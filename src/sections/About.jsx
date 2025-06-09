import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('taivereanette@gmail.com');
            setHasCopied(true);
            setTimeout(() => {
                setHasCopied(false);
            }, 2000);
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3
            xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5
            h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container flex flex-col justify-start">
                        <div className="h-[326px] w-full flex items-center justify-center">
                            <img src="/assets/me.png" alt="grid-1"
                                 className="w-full h-full object-contain"/>
                        </div>
                        <div className="mt-6 w-full text-left">
                            <p className="grid-headtext">
                                Hi, I'm Anette
                            </p>
                            <p className="grid-subtext">
                                I’m a Frontend Developer with a background
                                in QA testing, passionate about building clean,
                                responsive, and user-friendly interfaces.
                                My attention to detail helps me create seamless
                                web experiences.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container flex flex-col justify-start items-center h-full p-4">
                        <div className="h-[326px] flex items-center justify-center">
                            <Canvas>
                                <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                                <ambientLight intensity={1}/>
                                <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                                <ReactLogo position={[0,0,0]} scale={3.5} spin={true}/>
                            </Canvas>
                        </div>
                        <div className="mt-6 text-left w-full">
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in React, focusing on building interactive and scalable user interfaces.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container flex flex-col h-full">
                        <div className="rflex-1 flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>

                        <div className="mt-6 flex flex-col">
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm based in Estonia, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container flex justify-center items-center">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">taivereanette@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
