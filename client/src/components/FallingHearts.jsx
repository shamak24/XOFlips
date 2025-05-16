import { motion } from 'framer-motion';

const heartEmojis = ['💖', '❤️', '💘', '💕', '💗','🥰','🎀','🎁', '💌', '😍', '🌷', '🌸', '🌻'];
const generateHearts = (count = 20) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // % from left
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 3,
    size: 35 + Math.random() * 20, // px
    emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
  }));

const FallingHearts = ({ children }) => {
  const hearts = generateHearts(20);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex flex-col items-center justify-center">
      {children}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: '110vh', opacity: 1 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingHearts;
