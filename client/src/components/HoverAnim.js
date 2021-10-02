import React, { useEffect, useState } from "react";
import "./HoverAnim.css";

const defaultLg = {
  position: {
    top: "0",
    left: "0",
    bottom: "",
    right: "",
  },
  transitionDelay: "100ms",
  size: "20px",
};
const defaultMd = {
  position: {
    top: "-1rem",
    left: "0",
    bottom: "",
    right: "",
  },
  transitionDelay: "200ms",
  size: "15px",
};
const defaultSm = {
  position: {
    top: "0",
    left: "-1rem",
    bottom: "",
    right: "",
  },
  transitionDelay: "300ms",
  size: "10px",
};
const HoverAnim = ({
  children,
  className = "",
  options = [
    {
      position: {
        top: "random",
        left: "random",
        bottom: "",
        right: "",
      },
      items: [{ ...defaultLg }, { ...defaultMd }, { ...defaultSm }],
      color: "white",
    },
  ],
}) => {
  const [mouseIn, setMouseIn] = useState(false);
  const onMouseEnter = () => {
    setMouseIn(true);
  };
  const onMouseLeave = () => {
    setMouseIn(false);
  };
  useEffect(() => {
    console.log(mouseIn);
  }, [mouseIn]);
  const randY = () => {
    const rand = `${Math.floor(Math.random() * 3) - 3}rem`;
    console.log(rand);
    return rand;
  };
  const randX = () => {
    const rand = `${Math.floor(Math.random() * 16)}rem`;
    console.log(rand);
    return rand;
  };
  return (
    <div
      className={className + " relative"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
      {options.map((group) => (
        <div className={`f-group ${mouseIn ? "active" : ""}`}>
          <div
            className="fg-group"
            style={{
              top:
                group.position.top === ""
                  ? "unset"
                  : group.position.top === "random"
                  ? randY()
                  : group.position.top,
              left:
                group.position.left === ""
                  ? "unset"
                  : group.position.left === "random"
                  ? randX()
                  : group.position.left,
              bottom:
                group.position.bottom === ""
                  ? "unset"
                  : group.position.bottom === "random"
                  ? randY()
                  : group.position.bottom,
              right:
                group.position.right === ""
                  ? "unset"
                  : group.position.right === "random"
                  ? randX()
                  : group.position.right,
              color: group.color,
            }}
          >
            {group.items.map((item) => (
              <div
                className="f"
                style={{
                  top: item.position.top === "" ? "unset" : item.position.top,
                  bottom:
                    item.position.bottom === ""
                      ? "unset"
                      : item.position.bottom,
                  right:
                    item.position.right === "" ? "unset" : item.position.right,
                  left:
                    item.position.left === "" ? "unset" : item.position.left,
                  "--size": item.size === "" ? "15px" : item.size,
                  "--delay":
                    item.transitionDelay === ""
                      ? "150ms"
                      : item.transitionDelay,
                }}
              >
                {" "}
                <div class="tr l"></div>
                <div class="br l"></div>
                <div class="tl l"></div>
                <div class="bl l"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverAnim;
