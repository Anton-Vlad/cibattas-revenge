import React from "react";
import { useEffect, useRef } from "react";
import { CELL_SIZE } from "../../helpers/consts";
import { useRecoilValue } from "recoil";
import { spriteSheetImageAtom } from "../../atoms/spriteSheetImageAtom";

function Sprite({ frameCoord, size=16 }) {

    const spriteSheetImage = useRecoilValue(spriteSheetImageAtom);

    const canvasRef = useRef();
    useEffect(() => {
        /** @type {HTMLCanvasElement} */
        const canvasEL = canvasRef.current;
        const ctx = canvasEL.getContext("2d");
    
        // Clear out anything in the canvas tag
        ctx.clearRect(0, 0, canvasEL.width, canvasEL.height);

        // Draw a graphic to the canvas tag
        // frameCoord: "1x0", "0x2"
        const tileSheetX = Number(frameCoord.split("x")[0]);
        const tileSheetY = Number(frameCoord.split("x")[1]);

        ctx.drawImage(
            spriteSheetImage, // Image to pull from
            tileSheetX * CELL_SIZE, // Left X corner of frame
            tileSheetY * CELL_SIZE, // Top Y corner of frame
            size, //How much to crop from the sprite sheet (X)
            size, //How much to crop from the sprite sheet (Y)
            0, //Where to place this on canvas tag X (0)
            0, //Where to place this on canvas tag Y (0)
            size, //How large to scale it (X)
            size //How large to scale it (Y)
        );

    }, [ spriteSheetImage, frameCoord, size ]);
    
    return <canvas width={size} height={size} ref={canvasRef} />;
}

const MemorizedSprite = React.memo(Sprite);
export default MemorizedSprite;