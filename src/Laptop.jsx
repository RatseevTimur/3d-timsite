import { Environment, Html, PresentationControls, useGLTF } from "@react-three/drei";

export default function Laptop(){
    const laptop = useGLTF(
        // "src/models/macBook.gltf"
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    )
    
    return(
        <primitive object={laptop.scene} position={[ 1,-2.5, -7]}>
            <Html wrapperClass="laptop"
                position={[0, 1.51, -1.4]}
                transform distanceFactor={1.16}
                rotation-x={-0.26}>
                <iframe src="https://timur-site.netlify.app" />
            </Html>
        </primitive>
    )
}