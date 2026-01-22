import { motion, AnimatePresence } from "framer-motion";

const ProfileModal = ({ profile, onClose }) => {
  if (!profile) return null;

  const image = `https://storage.googleapis.com/lifepage-plan/amscareerprofile/${profile.thumb}`;
  const fromYear = new Date(profile.from * 1000).getFullYear();
  const toYear = new Date(profile.to * 1000).getFullYear();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 22 }}
          className="
            max-w-lg w-full
            bg-white
            rounded-3xl
            p-6
            shadow-2xl
            text-center
          "
        >
          <img
            src={image}
            alt={profile.name}
            className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-brand"
          />

          <h2 className="mt-4 text-xl font-extrabold text-textPrimary">
            {profile.name}
          </h2>

          <p className="mt-1 text-sm text-textSecondary">
            {profile.des} · {profile.pl}
          </p>

          <p className="mt-2 text-xs uppercase text-brand font-semibold">
            {profile.title}
          </p>

          <p className="mt-2 text-sm text-textSecondary">
            {fromYear} – {toYear}
          </p>

          <p className="mt-4 text-sm text-textPrimary leading-relaxed">
            {profile.member_bio || profile.session_description}
          </p>

          {profile.link && (
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-brand font-semibold hover:underline"
            >
              Watch Profile Video
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfileModal;
