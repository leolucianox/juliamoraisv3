const U = (id: string, w = 800) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PHOTOS = {
  session1: U("1704861766101-a5d420e04bf2"), // sessão de tatuagem
  session2: U("1568515045052-f9a854d70bfd"), // tatuando
  session3: U("1565058379802-bbe93b2f703a"), // foco raso, tatuando o braço
  session4: U("1745777723328-6228e34ed2aa"), // tatuadora atendendo cliente
  machine: U("1482375702222-03a768d5ea3c"), // mão segurando máquina de tatuar
  artistAtWork: U("1542744383-8c330d91f4b1"), // tatuadora segurando máquina
  wristFine1: U("1675622086392-3d93006444c0"), // tatuagem fine line no pulso
  wristFine2: U("1675621992781-991ec29f9131"), // detalhe tatuagem no pulso
  handFine: U("1654938143294-7b24ae1b98cb"), // tatuagem fina na mão
} as const;

export const PHOTOS_LARGE = {
  session1: U("1704861766101-a5d420e04bf2", 1400),
  session2: U("1568515045052-f9a854d70bfd", 1400),
  session3: U("1565058379802-bbe93b2f703a", 1400),
  session4: U("1745777723328-6228e34ed2aa", 1400),
  machine: U("1482375702222-03a768d5ea3c", 1400),
  artistAtWork: U("1542744383-8c330d91f4b1", 1400),
  wristFine1: U("1675622086392-3d93006444c0", 1400),
  wristFine2: U("1675621992781-991ec29f9131", 1400),
  handFine: U("1654938143294-7b24ae1b98cb", 1400),
} as const;
