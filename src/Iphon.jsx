import { Environment, Html, PresentationControls, useGLTF } from "@react-three/drei";

export default function Iphon(){
    const iphon = useGLTF(
        // "src/models/iphon.gltf"
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
    )

    return(
        <primitive object={iphon.scene} position={[ -2,-2, -6]} rotation-x={-1.58}
            scale={0.5}>
            <Html wrapperClass="iphon"
                position={[0.17, 1.47, 0]}
                transform distanceFactor={1.16}
                rotation-x={0}>
                <iframe src="https://timur-site.netlify.app" />
            </Html>
        </primitive>
    )
}