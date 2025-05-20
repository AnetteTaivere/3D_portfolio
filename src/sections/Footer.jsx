import React from 'react'

const Footer = () => {

    //gitlab & linkedin lisada
    return (
        <section className="c-space pt-7 pb-3 border-t
        border-black-300 flex justify-between items-center flex-wrap gap-5">

            <div className="flex justify-center gap-3">
                <a href="https://github.com/AnetteTaivere/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>

                    </div>
                </a>
                <a href="https://www.linkedin.com/in/anette-taivere/" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2"/>
                    </div>
                </a>
            </div>

            <div className="social-icon">
                <button
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    aria-label="Back to top"
                    className="social-icon"
                >
                    <img
                        src="/assets/toTop.svg"
                        alt="Back to top"
                        className="w-1/2 h-1/2 object-contain"
                    />
                </button>

            </div>

            <p className="text-white-500">
                © 2025 Anette. All rights reserved.
            </p>
        </section>
    )
}
export default Footer
