import { X } from "lucide-react";

export default function VideoModal({ isOpen, onClose, videoUrl }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white hover:opacity-80 z-10"
                >
                    <X size={24} />
                </button>

                {/* Video */}
                <div className="aspect-video">
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full bg-black rounded-xl"
                    >
                        Your browser does not support the video tag.
                    </video>


                </div>

            </div>
        </div>
    );
}
