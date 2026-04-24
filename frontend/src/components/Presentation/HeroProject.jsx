import React from 'react'
import Robot from "../../assets/robot.png"

function HeroProject() {
  return (
    <section className="flex flex-col md:flex-row gap-14 items-start justify-between max-w-7xl mx-auto px-4 p-10 bg-gradient-to-b from-[#3B006E] to-[#050146]">
            <div className="max-w-sm">
                <p className="mt-4 text-sm/6 text-gray-500">
                    Voici notre robot ainsi que ses fonctionnalitées.
                </p>

                <img src={Robot} alt="" />


                <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-gray-500">
                        <div className="p-2.5 border border-gray-200 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles size-5" aria-hidden="true" >
                                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                <path d="M20 2v4"></path>
                                <path d="M22 4h-4"></path>
                                <circle cx="4" cy="20" r="2"></circle>
                            </svg>
                        </div>
                        <p>Une IA capable de se repérer dans l'espace</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                        <div className="p-2.5 border border-gray-200 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap size-5" aria-hidden="true" >
                                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                            </svg>
                        </div>
                        <p>Vitesse Moyenne</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                        <div className="p-2.5 border border-gray-200 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check size-5" aria-hidden="true" >
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                        </div>
                        <p>Facile d'utilisation</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-end justify-center gap-10 w-full">
                <div className="group w-full max-w-85 rounded-xl p-6 pb-10 bg-white border border-slate-200">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-semibold">Plan</h3>
                        <p className="text-gray-500">Parfait pour de petits usages simples</p>
                        <p className="mt-4 text-2xl font-semibold">
                            Fait en 3 <span className="text-sm font-normal text-gray-500">semaines</span>
                        </p>
                    </div>
                    <div className="mt-2 flex flex-col">
                        <div className="flex items-center gap-2 border-b py-3 border-gray-200">
                            <div className="rounded-full p-1 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3 text-white" aria-hidden="true" >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                            Calcul automatique des positions
                        </div>
                        <div className="flex items-center gap-2 border-b py-3 border-gray-200">
                            <div className="rounded-full p-1 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3 text-white" aria-hidden="true" >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                            IA capable de suivre des trajectoires données à la main.
                        </div>
                        <div className="flex items-center gap-2 border-b py-3 border-gray-200">
                            <div className="rounded-full p-1 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3 text-white" aria-hidden="true" >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                            Crée ses propres dessins
                        </div>
                        <div className="flex items-center gap-2 border-b py-3 border-gray-200">
                            <div className="rounded-full p-1 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3 text-white" aria-hidden="true" >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                            Petit écran pour interactions
                        </div>
                        <div className="flex items-center gap-2 border-b py-3 border-gray-200">
                            <div className="rounded-full p-1 bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check size-3 text-white" aria-hidden="true" >
                                    <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                            </div>
                            Possibilité de changer de modes et d'outils
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
  )
}

export default HeroProject
