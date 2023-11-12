import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  fontSize?: number;
  color: string;
}

export default function ParallaxText({
  children,
  baseVelocity = 100,
  fontSize,
  color,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div
      style={{
        overflow: "hidden",
        letterSpacing: "2px",
        lineHeight: 0.8,
        margin: 0,
        whiteSpace: "nowrap",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <motion.div
        style={{
          x,
          fontSize: `${fontSize}px`,
          display: "flex",
          whiteSpace: "nowrap",
          flexWrap: "nowrap",
          color: color,
        }}
      >
        <span style={{ display: "block", marginRight: "100px" }}>
          {children}{" "}
        </span>
        <span style={{ display: "block", marginRight: "100px" }}>
          {children}{" "}
        </span>
        <span style={{ display: "block", marginRight: "100px" }}>
          {children}{" "}
        </span>
        <span style={{ display: "block", marginRight: "100px" }}>
          {children}{" "}
        </span>
      </motion.div>
    </div>
  );
}
