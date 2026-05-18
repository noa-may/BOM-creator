import { reactorTemplate } from "../templates/reactorTemplate";

function ReactorNode({ data }: any) {

  return (

    <div
      style={{
        width: reactorTemplate.width,
        height: reactorTemplate.height,
        border: "2px solid black",
        borderRadius: "8px",
        position: "relative",
        backgroundColor: "white"
      }}
    >

      <div
        style={{
          textAlign: "center",
          marginTop: "45px",
          fontWeight: "bold"
        }}
      >
        {data.label}
      </div>

      {

        reactorTemplate.ports.map((port: any) => (

          <div
            key={port.id}

            style={{
              position: "absolute",

              left:
                port.position.x -
                (
                  port.id === "sbv"
                    ? 20
                    : 12
                ) / 2,

              top:
                port.position.y -
                (
                  port.id === "sbv"
                    ? 20
                    : 12
                ) / 2,

              width:
                port.id === "sbv"
                  ? 20
                  : 12,

              height:
                port.id === "sbv"
                  ? 20
                  : 12,

              borderRadius: "50%",

              backgroundColor:
                    port.id === "sbv" ||
                    port.id === "top_inlet" ||
                    port.id === "bottom_outlet"
                  ? "white"
                  : "red",

              border:
                port.id === "sbv"
                  ? "3px solid black"
                  : "2px solid black"
            }}
          >

            {

              port.id === "sbv" && (

                <div
                  style={{
                    position: "absolute",

                    top: "50%",
                    left: "10%",

                    width: "80%",
                    height: "2px",

                    backgroundColor: "black",

                    transform: "translateY(-50%)"
                  }}
                />

              )

            }

            {

              port.id === "top_inlet" && (

                <div
                  style={{
                    position: "absolute",

                    top: "50%",
                    left: "50%",

                    width: "4px",
                    height: "4px",

                    borderRadius: "50%",

                    border: "2px solid black",

                    backgroundColor: "white",

                    transform: "translate(-50%, -50%)"
                  }}
                />

              )

            }


            {

              port.id === "bottom_outlet" && (

                <div
                  style={{
                    position: "absolute",

                    top: "50%",
                    left: "50%",

                    width: "4px",
                    height: "4px",

                    borderRadius: "50%",

                    border: "2px solid black",

                    backgroundColor: "white",

                    transform: "translate(-50%, -50%)"
                  }}
                />

              )

            }

          </div>

        ))

      }

    </div>

  );
}

export default ReactorNode;