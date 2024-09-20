import { Environment, Html, PresentationControls, useGLTF } from "@react-three/drei";

export default function Desk(){
    const desk = useGLTF(
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf"
    )

    return(
        <>
            <Environment preset="warehouse" />

            <PresentationControls global polar={[-0.6, 0.6]} azimuth={[-1, 1]} >
                <primitive object={desk.scene} position={[ 0,-20, 0]} />
            </PresentationControls>
        </>
    )
}