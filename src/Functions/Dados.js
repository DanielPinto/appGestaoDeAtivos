const dados = {
    headers: ["status","codigo", "estoque", "mundo",
        "regional", "nome_unidade", "departamento",
        "area", "serial", "imei", "periodo_reposicao",
        "familia", "marca", "modelo", "tamanho",
        "quantidade", "etiqueta_ti", "responsavel_id",
        "responsavel_nome", "termo_responsabilidade",
        "kit", "gerente_ti", "numero_chamado_motivo",
        "nota_fiscal", "acesso", "observacoes", "data_cadastro",
        "data_atualizacao", "usuario"],

    ObjectClean: {
        "status":"",
        "codigo": "",
        "estoque": "",
        "mundo": "",
        "regional": "",
        "nome_unidade": "",
        "departamento": "",
        "area": "",
        "serial": "",
        "imei": "",
        "periodo_reposicao": "",
        "familia": "",
        "marca": "",
        "modelo": "",
        "tamanho": "",
        "quantidade": "",
        "etiqueta_ti": "",
        "responsavel_id": "",
        "responsavel_nome": "",
        "termo_responsabilidade": "",
        "kit": "",
        "gerente_ti": "",
        "numero_chamado_motivo": "",
        "nota_fiscal": "",
        "acesso": "",
        "observacoes": "",
        "data_cadastro": "",
        "data_atualizacao": "",
        "usuario": ""
    },

    mundo: ["", "Sales", "Supply", "Maltaria"],
    estoque: ["", "Backup", "Produção", "Sucata", "Manutenção", "Saída", "Em Trânsito"],
    regional: ["", "Geo SUL", "Regional SUL", "AgroIndustrial"],
    unidade: ["", "CDD Cascavel", "CDD Francisco Beltrão",
        "CDD Balneario Camboriu",
        "CDD Blumenau",
        "CERV Sapucaia do Sul",
        "SR Toledo",
        "CDD Florianópolis",
        "CDD Caxias do Sul",
        "CDD Curitiba",
        "DIR Geo Sul",
        "CDL São José dos Pinhais",
        "SR Florianópolis",
        "SR Pato Branco",
        "CERV Águas Claras do Sul",
        "CDD Foz do Iguaçu",
        "CDD Gravataí",
        "CDD Londrina",
        "SR Cornélio Procópio",
        "SR Arapongas",
        "HUB Geo SUL (Navegantes)",
        "CDD Guarapuava",
        "CDD Pelotas",
        "CDD Sapucaia do Sul",
        "CDD Ponta Grossa",
        "CDL Paranaguá",
        "CDD São José dos Pinhais",
        "CDD Porto Alegre",
        "CERV Santa Catarina",
        "MALT Navegantes",
        "DIR Regional Sul",
        "DIR AgroIndustrial",
        "CDD Santa Cruz do Sul",
        "CDD Santa Maria",
        "CDL Eldorado",
        "CERV Curitibana",
        "CERV Ponta Grossa",
        "MALT Passo Fundo",
        "Dir Geo Sul",
        "SR Campo Bom",
        "SR Medianeira",
        "SR Rio Grande",
        "CDR Itajaí"
    ],
    departamento: ["", "STI",
        "Gente e Gestão",
        "Vendas",
        "CPD",
        "Financeiro",
        "Logística",
        "Regional",
        "Diretoria",
        "Marketing",
        "Jurídico",
        "Gerência",
        "Gestão de Ativos",
        "Packaging",
        "Escritório",
        "Operações",
        "Qualidade",
        "Engenharia",
        "Processo",
        "Meio Ambiente",
        "Almoxarifado",
        "Projetos",
        "Auto Serviço",
        "PROCESSO REFRI",
        "Processo Agricola",
        "Portaria",
        "Armazem",
        "CSC",
        "Logistica",
        "Transportadora",
        "Conferentes",
        "Sala Reunião",
        "Caixa",
        "TI",
        "PROCESSO CERVEJA",
        "Comercial",
    ],
    area: ["", "Informática",
        "Administrativo",
        "Sala de Vendas",
        "Financeiro",
        "Logística",
        "Portaria",
        "Caixa",
        "Sala de Reunião",
        "Armazém",
        "Monitoramento",
        "Marketing",
        "Gente e Gestão",
        "TI",
        "Vendas",
        "Controle",
        "Transportadora",
        "Auditório",
        "Gerência",
        "APR",
        "Cat",
        "Auto Serviço",
        "Diretoria",
        "Segurança do Trabalho",
        "Conferência",
        "ARMAZEM",
        "Operações",
        "Jurídico",
        "Sala Remota",
        "Segurança Trabalho",
        "Sala de Reunião Budweiser",
        "Sala de Vendas AS ROTA",
        "Sala de Vendas VIP",
        "Produção",
        "Sala de Matinal",
        "Faturamento",
        "Laboratorio",
        "Almoxarifado",
        "Pcm",
        "Utilidades",
        "Universidade Ambev",
        "Etei",
        "Eletrica",
        "Xaroparia",
        "Adegas",
        "Biomassa",
        "Mecanica",
        "Ambulatório",
        "Eta",
        "Paf",
        "Instrumentacao",
        "Laboratório Central",
        "Packaging",
        "Oficina",
        "Sopro",
        "Supervisório",
        "Brassagem",
        "Refeitorio",
        "Recepcao",
        "Filtracao",
        "Projetos",
        "Sicobe",
        "Laboratório Packaging",
        "Supervisão",
        "Staff",
        "Beneficiamento",
        "Dealcolização",
        "Linha 501",
        "AS",
        "Arquivo",
        "Silos Cevada",
        "Caldeira",
        "HUB Geo SUL",
        "Container",
        "Recepção",
        "Processo",
        "Emgenharia",
        "Armazem",
        "Sala Reuniao",
        "Sala Vendas",
        "Sala de Troca Turnos",
        "CFTV",
        "Descompressão",
        "Distribuição",
        "Linha 511",
        "Alo TI",
        "Logistica",
        "CPD",
        "Puxada",
        "Comercial",
        "Craft",
        "Carregamento",
        "Retorno de Rota",
        "Refrigerante",
        "Supply",
        "Laboratório QRM",
        "RCM",
        "TENDA EXTERNA",
        "CRACS",
        "Linha 502",
        "Sala de Troca de Turnos 502",
        "Linha 561",
    ],
    familia: ["", "Monitores",
        "TVs",
        "Thinclients",
        "Telefones",
        "Roteadores",
        "Nobreaks",
        "Desktops",
        "Switchs",
        "Conferências",
        "Servidores",
        "Projetores",
        "Notebooks",
        "Access Point",
        "Conversor de Fibra",
        "Telepresença",
        "Videoconferência",
        "Tablets",
        "Modem",
        "Impressora",
    ],
    marca: ["", "3Com",
        "3com",
        "Acer",
        "Anatel",
        "Aoc",
        "Apc",
        "APC",
        "Aquario",
        "Benq",
        "BENQ",
        "Buster",
        "Cce",
        "Cisco",
        "CISCO",
        "Cp Eletrônica",
        "Cs Eletro",
        "D-Link",
        "D-Net",
        "DCWORLD",
        "Dell",
        "Elgin",
        "Enermax",
        "Enterasys",
        "Epsilon",
        "Epson",
        "Exbom",
        "Fortinet",
        "Furukawa",
        "Gigaset",
        "Hi Top",
        "Hp",
        "hp",
        "HP",
        "HPE",
        "Ibm",
        "Init",
        "Intelbras",
        "Intermec",
        "Juniper",
        "Keo",
        "Lacerda",
        "Lenovo",
        "Lexmark",
        "Lg",
        "LG",
        "Linksys",
        "Micronet",
        "Mikrotik",
        "Multilaser",
        "Nhs",
        "Optma",
        "Outras Marcas",
        "Panasonic",
        "Philco",
        "Philips",
        "Pinbox",
        "Planet",
        "Polycom",
        "Samsung",
        "Semp Toshiba",
        "Siemens",
        "Sinus Double II",
        "Sky Range",
        "Sms",
        "Sony",
        "Supermicro",
        "SuperMicro",
        "Tp-Link",
        "Ubiquiti",
        "UniFi",
        "Vtech",
        "Wyse",
        "Yealink",
        "Zte",
    ],
    modelo: ["", "V206HQL",
        "*  SW - DES - 1026G",
        "* CM - Gigabit",
        "* DE - Todos Dell",
        "* DE - Todos Lenovo",
        "* MO - Outros",
        "* MT - P2418HZM",
        "* MT - Todos AOC",
        "* MT - Todos Samsung",
        "* NB - Todos CP",
        "* PJ - Todos Benq",
        "* PJ - Todos Sony",
        "* RT - Todos Cisco",
        "* RT - Todos Intelbras",
        "* RT - Todos Pinbox",
        "* RT - Todos Zte",
        "* SW - 1410-24R",
        "* SW - 1910-24",
        "* SW - 1921 Series",
        "* SW - 2024",
        "* SW - 226-SFP PLUS",
        "* SW - 2960",
        "* SW - Catalyst 1900",
        "* SW - Catalyst 3560",
        "* SW - Des-1024d",
        "* SW - EX2200-24T",
        "* SW - Fnsw-2401",
        "* SW - Meraki MS120-8",
        "* SW - Meraki MX100-HW",
        "* SW - Outros",
        "* SW - V1900-24",
        "* TF - Todos Polycom",
        "* TP - Todas Intelbras",
        "* TP - Todos Cisco",
        "* TU - Outros",
        "* TV - Todas Aoc",
        "* TV - Todas Buster",
        "* TV - Todas LG",
        "* TV - Todas Panasonic",
        "* TV - Todas Philco",
        "* TV - Todas Philips",
        "* TV - Todas Samsung",
        "* TV - Todas Sony",
        "* TV - Todas ST",
        "1619SWA",
        "177WSS",
        "1920-24G (JG924A)",
        "1920S-24G (JL381A)",
        "20m37aa",
        "24P1U",
        "35700004-24 ",
        "540N",
        "632NW PLUS",
        "732NW",
        "933SNPLUS",
        "AIR-CAP2702E-Z-K9",
        "ANT MA-ANT 25",
        "AP - AC-Lite",
        "AP - AC-Pro",
        "AP - AIR-AP 28021",
        "AP - AIR-AP1242AG-A-K9",
        "AP - AIR-CAP1532I",
        "AP - AIR-CAP2602L",
        "AP - Air-Cap2702e",
        "AP - Air-Cap2702I",
        "AP - AIR-SAP2602E-T-K9",
        "AP - Aironet 2700",
        "AP - Aironet-2600",
        "AP - APC 2M-90",
        "AP - MOB (Intermec)",
        "AP - MOB (Outros)",
        "AP - MR53",
        "AP - OneABI (Cisco)",
        "AP - RF (Outros)",
        "AP - UAP-AC-LITE",
        "AP - Wog-212",
        "AP – MR56",
        "Baseline 2016 (3C16470)",
        "Baseline 2024 (3C16471B) (JD986A)",
        "Baseline 2226-SFP Plus (3CBLSF26H) (JD990A)",
        "Catalyst 2960-C (WS-C2960CPD-8PT-L)",
        "Catalyst 2960C (WS-C2960-12-PC)",
        "Catalyst 2960CX (WS-C2960CX-8PC-L)",
        "Catalyst 2960L (WS-C2960L-24TS-LL)",
        "Catalyst 2960S (WS-C2960S-24PS-L)",
        "Catalyst 2960S (WS-C2960S-48FPS-L)",
        "Catalyst 2960X (WS-C2960X-24PS-L)",
        "Catalyst 3560 (WS-C3560V2-48PS-S)",
        "Catalyst 3560CX (WS-C3560-12PC-S)",
        "Catalyst 3560CX (WS-C3560-24PS-S)",
        "Catalyst 3560v2 (WS-C3560V2-24TS-S)",
        "Catalyst 3750 (WS-C3750V2-24PS-S)",
        "Catalyst 3750X (WS-C3750X-24PS-S)",
        "Catalyst 3850 (WS-C3850-12S-S)",
        "Catalyst 9200L (C9200L-24T-4G)",
        "CM - 10/100",
        "CM - DCWORLD 10/100/1000",
        "CM - Intelbras",
        "CM - KGM 1105",
        "CM - Planet 10/100",
        "D1901",
        "D1901Nc",
        "D1960wa",
        "DE - Compaq 505b Mt",
        "DE - G1000br",
        "DE - Optiplex 320",
        "DE - OPTIPLEX 990",
        "DE - Outros",
        "DE - Vostro 230",
        "DES-1024D",
        "DIR-610",
        "Dn-10000M",
        "Dn-8800M",
        "DN-932D",
        "DN-SF1024",
        "E1670SWU",
        "E1914HC",
        "E1916H",
        "E1950SW",
        "E2270PWHE",
        "E950SW",
        "E950SWN",
        "E970swnl",
        "EdgeSwitch (ES-12F-BR)",
        "ET-0025-B",
        "Et-802(V4)",
        "EX2200 (EX2200-24T-4G)",
        "EX2200 (EX2200-48T-4G)",
        "FNSW-1601",
        "Fnsw-2401",
        "FT-801(V4)",
        "FT-802(V4)",
        "Gt-802(V3)",
        "GTS Network",
        "H856A",
        "HS - HSB50",
        "Htsg2-20A",
        "i20",
        "i20X (2.0)",
        "i37",
        "i60x²",
        "Kfm112",
        "KFSD 1120B",
        "L1753",
        "Lenovo ideapad 330 - 15IKBR",
        "Lenovo ThinkPad - E14-I5-10210U",
        "MC100CM",
        "Meraki (MS120-24-HW)",
        "Meraki (MS120-8-HW)",
        "Meraki (MS225-24P-HW)",
        "Meraki MR36",
        "Meraki MR76",
        "Meraki MX 84 (MX84-HW)",
        "Meraki MX100 (MX100HW)",
        "Meraki MX64 (MX64W)",
        "MT - 193V5L",
        "MT - 195165wa",
        "MT - 196v3l",
        "MT - 20en33ssa",
        "MT - 20m35pd",
        "MT - 222HQL",
        "MT - 22MA33N",
        "MT - 22MP55HA",
        "MT - 42LN549C-AS",
        "MT - 712sa",
        "MT - 819B300B",
        "MT - 9338NPLUS",
        "MT - B1630N",
        "MT - B2030N",
        "MT - D1930n",
        "MT - DP/N 0XTK9N",
        "MT - E1709WC",
        "MT - E170SC",
        "MT - E19040sv",
        "MT - E1940SL",
        "MT - E1941",
        "MT - E1941C",
        "MT - E1941SX",
        "MT - E2002ba",
        "MT - E2041sx",
        "MT - E2050s",
        "MT - E2211HB",
        "MT - E221hb",
        "MT - E2250SWN",
        "MT - E950SSWN",
        "MT - E950WSN",
        "MT - F950SW",
        "MT - G185HV",
        "MT - K22hql",
        "MT - L1752s",
        "MT - L1753T - SF",
        "MT - L185X",
        "MT - L2250p",
        "MT - Le147",
        "MT - Ls1921wa",
        "MT - M227WAPPM",
        "MT - N/A",
        "MT - P2270HN",
        "MT - S20C300FL",
        "MT - S20c300fl",
        "MT - VFS5577",
        "MT - W1642ct",
        "MT - W1643CV",
        "MT - W1752TT",
        "MT - W1942peu",
        "MT - W1943sv",
        "MT - W1946PW",
        "MT - W2043sv",
        "MT - W2243t",
        "MT - X163WA",
        "NB - Back Ups 1200va",
        "NB - CSO 5000va",
        "NB - MAGIC POWER II 3000va",
        "NB - Mini III",
        "NB - Mini III Max",
        "NB - NEW STATION",
        "NB - Premium GII 3000va",
        "NB - Sinus Double II",
        "NB - Smart-UPS BR 3000VA",
        "NB - SMC3000XLBI-BR",
        "NB - TB Ecco Power",
        "NB - Unw 1300va",
        "NB - UPS New MS 5000VA",
        "NB - Ups Tb 3000va",
        "NB - Ups TBB 10000va",
        "NB - UPS TBB 10000VA",
        "NB - Ups Tbb 5000va",
        "NB - Ups Tbl 10000va",
        "NO -  B490",
        "NO - A1515-51",
        "NO - A515-51-51UX",
        "NO - B40-70",
        "NO - E430",
        "NO - E490",
        "NO - E5-471",
        "NO - HP430",
        "NO - HP530",
        "NO - Inspiron 13 5378 2in1",
        "NO - Inspiron 15",
        "NO - KAM (Outros)",
        "NO - Pavilion DV6700",
        "NO - T410",
        "NO - T430u",
        "NO - Thinkpad T14",
        "NO - ThinkPad X1 Carbon 6th",
        "NO - ThinkPad X1 Carbon 7th",
        "NO - ThinkPad X1 Carbon 8th",
        "NO - TP-E430",
        "PC - Outros",
        "PJ - BR334",
        "PJ - EB-X02",
        "PJ - EMP-S5",
        "PJ - H283A",
        "PJ - MP511",
        "PJ - Outros",
        "PJ - Power Lite S41+",
        "PJ - S12+",
        "PJ - S27+",
        "PJ - S31+",
        "PJ - S5+",
        "PJ - V200",
        "PJ - VPL-DX1308",
        "PJ - Vpl-Dx140",
        "PJ - Vpl-Ex130",
        "PJ - X36+",
        "PL - MS812de",
        "PL - MX711",
        "RT - 1700 Series",
        "RT - 1800 Series",
        "RT - 1900 Series",
        "RT - 1900 SERIES",
        "RT - 1921",
        "RT - 1921 Series",
        "RT - 2100 Series",
        "RT - 2500 Series",
        "RT - 2800 Series",
        "RT - 2900 Series",
        "RT - 4321",
        "RT - 4G Max",
        "RT - ASA 5565",
        "RT - Catalyst 2960 -X",
        "RT - DES1008D",
        "RT - DIR-610",
        "RT - DIR-615",
        "RT - DIR-816L",
        "RT - DIR-905L",
        "RT - DSL-500b",
        "RT - Dwr-922B",
        "RT - Fortigate",
        "RT - IWR 1000N",
        "RT - Outros",
        "RT - TDW8951",
        "RT - TL-WA802ND",
        "RT - TL-WR741",
        "RT - Tl-wr941",
        "RT - TL-WR941ND ",
        "RT - Tlwr841",
        "RT - WAP2000",
        "RT - Win240",
        "RT - Wrv200",
        "RT - Wrv210",
        "RT - WRV210",
        "RT- 1941",
        "S19b300b",
        "S19C301F",
        "Samsung              TV - UN58H5203",
        "SecureStack  (A2H124-24P)",
        "SecureStack (B2H124-48P)",
        "SMC3000XLI - BR",
        "SP684C",
        "SuperStack 3 4200(3C17300A) (JE891A)",
        "SuperStack 3 4400 (3C17203)",
        "SV - Marcas 3",
        "SV - NETFINITY 3500",
        "SV - Outros",
        "SV - PowerEdge 6800",
        "SV - POWEREDGE T410",
        "SV - Sicobe",
        "SV - SYSTEM X3200",
        "SW - 1920S(Jl381a)",
        "SW - 2226-SFP Plus",
        "SW - 3C16790",
        "SW - 3C16794",
        "SW - FSD-2405",
        "SW - Não Gerenciável (Outros)",
        "SW - SF 800 Q",
        "SW - SG 800C",
        "SW - V1905-24",
        "SW - V1910-24",
        "Sx0",
        "T20C310LB",
        "TB - Galaxy Tab E",
        "TC - I20x",
        "TC - Wyse 3040",
        "TF - 4245-i",
        "TF - Ca40",
        "TF - CF-4201",
        "TF - Cf4000",
        "TF - CF6031",
        "TF - D100",
        "TF - Da100",
        "TF - Epsilon 300",
        "TF - Euroset 3005",
        "TF - Euroset 805 S",
        "TF - Fenix500",
        "TF - Fixo",
        "TF - GIGASET A390",
        "TF - HSB50",
        "TF - Hsb50",
        "TF - K101",
        "TF - K103",
        "TF - K302",
        "TF - KX-TGC210LB",
        "TF - KX-TS9LBW",
        "TF - Outros",
        "TF - Pleno",
        "TF - PLENO",
        "TF - Premium",
        "TF - RE504",
        "TF - REC504",
        "TF - SoundStation2",
        "TF - TC 60 ID",
        "TF - TC60",
        "TF - TCF-2000",
        "TF - TCF-3000",
        "TF - TCF2000",
        "TF - TEX516i",
        "TF - TS 40 C",
        "TF - TS3110",
        "TF - TS40",
        "TF - TS6120",
        "TI - 7940",
        "TI - CP 7900",
        "TI - Cp-7942",
        "TI - Cp3905",
        "TI - Cp7960",
        "TI - SIP-T20",
        "TI - SIP-T22P",
        "TL-WR840N",
        "TL-WR841N",
        "TLSF1016D",
        "TP - Audio (Polycom)",
        "TP - QDX6000",
        "TP - SoundStation2",
        "TP - SX10",
        "TP - Video (Polycom)",
        "TP-L AC750 C20 4",
        "TR2340",
        "TV - 32LC4R",
        "TV - 42CS460",
        "TV - 42d04fd",
        "TV - 42LD420",
        "TV - 42LG30R",
        "TV - 42LG60FR",
        "TV - 42PJ350",
        "TV - 42PQ20R",
        "TV - 42PQ30R",
        "TV - 43PFG5102",
        "TV - 49LH5600",
        "TV - 504Q30R",
        "TV - 55LY540S",
        "TV - DB48E",
        "TV - E1941SX",
        "TV - KDL-40BX425",
        "TV - LC3246",
        "TV - LC42H053",
        "TV - LE32D1352",
        "TV - LE32H",
        "TV - LH46MDCPLGV/ZD",
        "TV - MD46C",
        "TV - PH39E538Q",
        "TV - PH42",
        "TV - PH42E53SG",
        "TV - PH60D",
        "TV - PL42C450B1",
        "TV - PL51E490",
        "TV - PL51F4000AGZD",
        "TV - TC-40DS600BE",
        "TV - TCL 55PLUS",
        "TV - Todas",
        "TV - UN40EH5300G",
        "TV - UN40J5200A",
        "TV - UN40J5290AG",
        "TV - UN55NU7100",
        "Tx0",
        "Tx0D",
        "U2417H",
        "UN46F5500AG",
        "V1405-24 (JD986B)",
        "V1410-24 (J9663A)",
        "V1410-24-2G (J9664A)",
        "V1905-24 (JD990A)",
        "V1910-24 (JG538A)",
        "V1910-24G (JE006A)",
        "V1910-48 (JG540A)",
        "V226HQL",
        "V2H124-24P",
        "VC200-WP",
        "VG - Vg224",
    ],
    kit: ["",
        "Kit VD",
        "Kit Sala Reunião",
        "Kit TV Ambev",
        "Kit Desktop",
        "Kit VD Tela Dupla",
        "Kit Notebook",
    ],
}

export default dados;