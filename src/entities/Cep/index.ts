interface Cep {
  altitude: number;
  cep: string;
  latitude: string;
  longitude: string;
  logradouro: string;
  bairro: string;
  cidade: {
    ddd: number;
    ibge: string;
    nome: string;
  };
  estado: {
    sigla: string;
  };
}

export type { Cep };
