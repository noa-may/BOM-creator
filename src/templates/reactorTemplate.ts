export const reactorTemplate = {

  type: "reactor",

  width: 120,
  height: 120,

  ports: [

    {
      id: "top_inlet",

      label: "Top Inlet",

      position: {
        x: 0,
        y: 60
      },

      allowedModes: [
        "sanitary"
      ]
    },

    {
      id: "sbv",

      label: "SBV",

      position: {
        x: 60,
        y: 120
      },

      allowedModes: [
        "split_butterfly",
        "sanitary",
        "bola"
      ]
    },

    {
      id: "side_arm",

      label: "Side Arm",

      position: {
        x: 120,
        y: 80
      },

      allowedModes: [
        "bola",
        "loose_tubing"
      ]
    },

      {
      id: "side_splitter",

      label: "Side Splitter",

      position: {
        x: 120,
        y: 40
      },

      allowedModes: [
        "bola",
        "loose_tubing"
      ]
    },

    {
      id: "bottom_outlet",

      label: "Bottom Outlet",

      position: {
        x: 60,
        y: 0
      },

      allowedModes: [
        "sanitary"
      ]
    }

  ]
};