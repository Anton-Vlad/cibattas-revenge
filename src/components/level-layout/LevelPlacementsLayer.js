import { CELL_SIZE } from "../../helpers/consts";

export default function LevePlacementsLayer({ level }) {

    return level.placements.map(placement => {
        // Wrap each Sprite in  position div
        const x = placement.x * CELL_SIZE + "px";
        const y = placement.y * CELL_SIZE + "px";
        const style = {
          position: "absolute",
          transform: `translate3d(${x}, ${y}, 0)`,
        };

        return (
          <div key={placement.id} style={style}>
            {placement.renderComponent()}
          </div>
        );
      }
    )
}