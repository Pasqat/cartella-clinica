export const patients = {
  123456789: {
    personalData: {
      firstName: "Pasquale",
      lastName: "Matarrese",
      birthDay: "1987-05-05T16:38:00.000Z",
    },
    continuousInfusion: "propofol 1%",
    intravenous: "pantorc 40mg",
    iM: "",
    sC: "",
    oral: "aspirina",
    aerosol: "",
    other: "paziente intubato\nGlasgow 4",
  },
};

export const test = [
  {
    id: "1234567",
    firstName: "Pasquale",
    lastName: "Matarrese",
    birthDay: "1987-05-05T16:38:00.000Z",
    out: {},
    continuousInfusion: [
      {
        name: "propofol 1%",
        signedBy: "AP",
        intake: {},
        8: false,
        12: true,
        16: false,
        20: true,
        24: false,
      },
    ],
    intravenous: [
      {
        name: "Pantorc 40mg",
        signedBy: "AP",
        8: false,
        12: true,
        16: false,
        20: false,
        24: true,
      },
    ],
    iM: [],
    sC: [],
    oral: [],
    aerosol: [],
    other: [],
  },
];
