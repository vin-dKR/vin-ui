import React from 'react';
import { Sparkles } from './Sparkle';
import ThreeDBtn from '../customBtn/3dButton';

function Clientsxx() {
    return (
        <>
            <div className='h-screen w-screen overflow-hidden dark:bg-black flex flex-col items-center justify-center'>
                <div className='mx-auto mt-32 w-screen max-w-2xl'>
                    <div className='text-center text-5xl text-white mb-14'>
                        <span className='text-white dark:text-black text-shadow-lg dark:text-shadow-purple-900'>Trusted by none.</span>

                        <br />

                        <span className='text-black dark:text-white text-shadow-lg'>Used by the none.</span>
                    </div>

                    <div className='relative my-14 items-center flex justify-center z-100 opacity-75'>
                        <ThreeDBtn href="https://x.com/always_VinodKr" text="Be the first one to put your logo" variant="purple" className="text-white cursor-pointer" />
                    </div>
                </div>
                <div
                    className="
        relative -mt-32 h-96 w-screen overflow-hidden 
        [mask-image:radial-gradient(50%_50%,white,transparent)]
        before:absolute before:inset-0 
        before:bg-[radial-gradient(circle_at_bottom_center,#5100ba,transparent_80%)]
        before:opacity-100 
        after:absolute after:-left-1/2 after:top-1/2 
        after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] 
        after:border-t after:border-[#7876c566]
        after:bg-white dark:after:bg-zinc-900
      "
                >
                    <Sparkles
                        density={1000}
                        speed={1}
                        size={1.1}
                        color="#FFFFFF"
                        className="absolute inset-x-0 bottom-0 h-full contrast-200 w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                    />
                </div>
            </div>
        </>
    );
}

export default Clientsxx
