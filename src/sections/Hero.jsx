import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import {Leva, useControls} from "leva";
import {calculateSizes} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

function Hero() {
    // const x = useControls('HackerRoom',{
    //     rotationX:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionX:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     scale:{
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    // })

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall,isMobile,isTablet);

    return (
        <>

            {/*<Leva />*/}
        <section className={`min-h-screen w-full flex flex-col relative`}>
            <div className={`w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3`}>
                <p className={`sm:text-3xl text-2xl font-medium text-white text-center font-generalsans`}>
                    Hi, I am Abraham <span className={`waving-hand`}>👋🏽</span>
                </p>
                <p className={`hero_tag text-gray_gradient`}>Turning Ideas into Reality</p>
            </div>

            <div className={`w-full h-full absolute inset-0`}>
                {/*<p className={`text-white z-50 text-center text-8xl`}>hi</p>*/}
                <Canvas className={`w-full h-full`}>
                    <Suspense fallback={<CanvasLoader/>}>            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        {/*<HackerRoom*/}
                        {/*    // scale={0.07}*/}
                        {/*    // position={[0,0,0]}*/}
                        {/*    // rotation={[0,280,0]}*/}
                        {/*    position={[x.positionX,x.positionY,x.positionZ]}*/}
                        {/*    rotation={[x.rotationX,x.rotationY,x.rotationZ]}*/}
                        {/*    scale={[*/}
                        {/*        x.scale,*/}
                        {/*        x.scale,*/}
                        {/*        x.scale*/}
                        {/*    ]}*/}
                        <HackerRoom
                            // scale={0.07}
                            // position={[0,0,0]}
                            // rotation={[0,280,0]}
                            position={sizes.deskPosition}
                            rotation={[0.2,-6,-9.4]}
                            scale={sizes.deskScale}
                        />
                        <group>
                            <Target position={sizes.targetPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
            </>
    )
}

export default Hero
