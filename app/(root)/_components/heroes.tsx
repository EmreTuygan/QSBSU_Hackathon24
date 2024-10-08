import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mr-4 md:mr-8">
                    <Image src="/Networking.jpg" fill className="object-contain" alt="Networking"/>
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image src="/Seminar.jpg" fill className="object-contain" alt="Seminars"/>
                </div>
               
            </div>
        </div>
    )
}
