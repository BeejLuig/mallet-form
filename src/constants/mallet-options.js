const handle = {
  rattan: {
    widths: [9, 10],
    lengths: [36, 37, 38, 39, 40, 41]
  },
  beech: {
    widths: [8, 8.5, 9],
    lengths: [36, 37, 38, 39, 40, 41, 42, 43]
  },
  'carbon-fiber': {
    widths: [8, 9],
    lengths: [36, 37, 38, 39, 40, 41]
  }
};

const weights = [
  { id: "light", name: "Light" },
  { id: "medium", name: "Medium" },
  { id: "heavy", name: "Heavy" }
];

export const MALLET_OPTIONS = {
  marimba: {
    ...handle,
    weights,
    models: [
      { id: "m1h", name: "M1 Hard" },
      { id: "m1m", name: "M1 Medium" },
      { id: "m1s", name: "M1 Soft" },
      { id: "m2h", name: "M2 Hard" },
      { id: "m2m", name: "M2 Medium" },
      { id: "m2s", name: "M2 Soft" },
      { id: "mrm", name: "MR Medium" },
      { id: "mrs", name: "MR Soft" }
    ]
  },
  vibraphone: {
    ...handle,
    weights,
    models: [
      { id: "v1", name: "V1 Hard" },
      { id: "v2", name: "V2 Medium" },
      { id: "v3", name: "V3 Soft" }
    ]
  }
};

/*
1st Step: Kind of mallet

Type: Marimba, Vibraphone

2nd Step: Mallet handle

Material:
  rattan:
    sizes: {
      width: 9mm, 10mm
      length: 36mm-41mm
    }
  beech:
    sizes: {
      width: 8mm, 8.6mm, 9mm, 10mm,
      length: 36mm-43mm
    }
  carbon fiber: 
    sizes: {
      width: 8mm, 9mm, 10mm
      length: 36mm-41mm
    }

3rd Step: Mallet head

Vibraphone: 
  v1 hard, v2 medium, v3 soft

Marimba: 
  m1 hard, m1 medium, m1 soft, m2 hard, m2 medium, m2 soft, mr medium, mr soft

4th Step (optional):
  
Engraving (initials only)

5th step

Email/address and order confirmation
*/
