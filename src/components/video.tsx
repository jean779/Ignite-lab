import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, CircleNotch, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGeLessonBySlugQuery } from "../graphql/generated";

interface VideoProps{
    lessonSlug: string;
}

export function Video(props: VideoProps){
    const { data } = useGeLessonBySlugQuery({
        variables:{
            slug : props.lessonSlug,
        }
    });

    if(!data || !data.lesson){
        return(
            
            <div className="flex-1">
                <div className="bg-black flex justify-center">
                    <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video items-center flex justify-center">   
                        <CircleNotch size={80} weight="fill"  className="animate-spin"/>
                    </div>
                </div>
            </div>
        )
    }

    return(
            <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">   
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>        
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-discord-100"
                                src={data.lesson.teacher.avatarURL}
                                alt=""
                            />
                            
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">
                                    {data.lesson.teacher.name}
                                </strong>
                                <span className="text-gray-200 text sm block">
                                    {data.lesson.teacher.bio}
                                </span>
                            </div>
                        </div>
                        )}
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
    )
}