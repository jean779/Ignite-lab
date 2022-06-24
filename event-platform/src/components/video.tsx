import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'

export function Video(){
    return(
        <div className="flex-1">
            <div className="flex-1">
                <div className="bg-black flex justify-center">
                    <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">   
                        <Player>
                            <Youtube videoId="n1h1AOeVQ38"/>
                            <DefaultUi />
                        </Player>        
                    </div>
                </div>

                <div className="p-8 max-w-[1100px] mx-auto">
                    <div className="flex items-start gap-16">
                        <div className="flex-1">
                            <h1 className="text-2xl font-bold">
                                Aula 01
                            </h1>
                            <p className="mt-4 text-gray-200 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="h-16 w-16 rounded-full border-2 border-discord-100"
                                    src="https://github.com/jean779.png"
                                    alt=""
                                />
                                
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">
                                        Diego
                                    </strong>
                                    <span className="text-gray-200 text sm block">
                                        Cto @Rocketseat
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="" className="p-4 text-sm bg-discord-100 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-discord-300 transition-colors">
                                <DiscordLogo size={24}/>
                                Comunidade do Discord
                            </a>
                            <a href="" className="p-4 text-sm border border-discord-100  text-discord-100  items-center rounded font-bold uppercase gap-2 justify-center hover:bg-discord-300  hover:text-white transition-colors">
                                <Lightning size={24}/>
                                Acesse o desafio
                            </a>
                        </div>                      
                    </div>

                    <div className="gap-8 mt-20 grid grid-cols-2">
                        <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                            <div className="bg-discord-200 h-full p-6 flex items-center">
                                <FileArrowDown size={40}/>
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">
                                    Material Complementar
                                </strong>
                                <p className="text-sm text-gray-200"> 
                                    Acesse o material complementar para a celerar o seu desenvolvimento
                                </p>
                            </div>
                            <div  className="h-full p-6 flex items-center">
                                <CaretRight size={24}/>
                            </div>
                        </a>
                        <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                            <div className="bg-discord-200 h-full p-6 flex items-center">
                                <FileArrowDown size={40}/>
                            </div>
                            <div className="py-6 leading-relaxed">
                                <strong className="text-2xl">
                                    Walpapers exclusivos
                                </strong>
                                <p className="text-sm text-gray-200"> 
                                    Baixe Walpaper exclusivosdo ignite lab e personalize a sua maquina
                                </p>
                            </div>
                            <div  className="h-full p-6 flex items-center">
                                <CaretRight size={24}/>
                            </div>                       
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}