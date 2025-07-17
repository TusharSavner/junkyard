var country_ini;
var country_end;

const ppp = {
  "AFG": 20.9,  "ALB": 145.5,  "DZA": 90.8,  "AGO": 310.6,  "ARG": 135.4,
  "ARM": 296.5, "AUS": 1.4,    "AUT": 0.8,   "AZE": 1.7,    "BGD": 32.4,
  "BLR": 2.5,   "BEL": 0.8,    "BEN": 305.3, "BOL": 4.6,    "BIH": 1.6,
  "BWA": 5.5,   "BRA": 2.7,    "BRN": 1.1,   "BGR": 1.3,    "BFA": 420.5,
  "BDI": 1500,  "KHM": 1710,   "CMR": 310.7, "CAN": 1.2,    "CPV": 100,
  "CAF": 580,   "TCD": 520,    "CHL": 600,   "CHN": 3.6,    "COL": 3200,
  "COM": 440,   "COG": 610,    "COD": 2000,  "CRI": 530,    "CIV": 290,
  "HRV": 4.6,   "CYP": 0.9,    "CZE": 15.0,  "DNK": 6.5,    "DJI": 175,
  "DOM": 28,    "ECU": 0.5,    "EGY": 17.3,  "SLV": 0.45,   "GNQ": 620,
  "ERI": 15,    "EST": 0.9,    "SWZ": 8.3,   "ETH": 21,     "FJI": 2.4,
  "FIN": 0.9,   "FRA": 0.8,    "GAB": 430,   "GMB": 62,     "GEO": 1.7,
  "DEU": 0.7,   "GHA": 5.4,    "GRC": 0.9,   "GTM": 5.8,    "GIN": 880,
  "GNB": 400,   "GUY": 218,    "HTI": 92,    "HND": 22,     "HUN": 130,
  "ISL": 140,   "IND": 24,     "IDN": 4900,  "IRN": 42000,  "IRQ": 1.7,
  "IRL": 0.9,   "ISR": 3.2,    "ITA": 0.8,   "JAM": 150,    "JPN": 95,
  "JOR": 0.4,   "KAZ": 470,    "KEN": 90,    "KIR": 2,      "KOR": 1100,
  "KWT": 0.3,   "KGZ": 43.2,   "LAO": 6800,  "LVA": 0.7,    "LBN": 80000,
  "LSO": 15.3,  "LBR": 100,    "LBY": 3.6,   "LTU": 0.8,    "LUX": 0.9,
  "MDG": 1700,  "MWI": 860,    "MYS": 2.3,   "MDV": 15.4,   "MLI": 300,
  "MLT": 0.9,   "MRT": 370,    "MUS": 15.8,  "MEX": 10,     "MDA": 5.4,
  "MNG": 2650,  "MNE": 1.2,    "MAR": 8.5,   "MOZ": 30.2,   "MMR": 1085,
  "NAM": 16.1,  "NPL": 43.2,   "NLD": 0.8,   "NZL": 1.5,    "NIC": 7.5,
  "NER": 550,   "NGA": 110,    "MKD": 1.8,   "NOR": 8.8,    "OMN": 0.4,
  "PAK": 55,    "PAN": 1.0,    "PNG": 2.1,   "PRY": 3700,   "PER": 2.1,
  "PHL": 23,    "POL": 2.1,    "PRT": 0.9,   "QAT": 3.4,    "ROU": 1.5,
  "RUS": 27,    "RWA": 835,    "WSM": 2.3,   "STP": 24.6,   "SAU": 3.6,
  "SEN": 310,   "SRB": 105,    "SYC": 18.4,  "SLE": 18000,  "SGP": 1.4,
  "SVK": 1.1,   "SVN": 0.9,    "SLB": 5.2,   "SOM": 580,    "ZAF": 6.6,
  "SSD": 580,   "ESP": 0.8,    "LKA": 106,   "SDN": 460,    "SUR": 24.1,
  "SWE": 9.5,   "CHE": 0.9,    "SYR": 2500,  "TJK": 9.2,    "TZA": 1900,
  "THA": 15,    "TLS": 0.3,    "TGO": 420,   "TON": 1.1,    "TTO": 5.5,
  "TUN": 1.4,   "TUR": 6.3,    "TKM": 3.5,   "UGA": 1100,   "UKR": 9.5,
  "ARE": 3.3,   "GBR": 0.7,    "USA": 1,     "URY": 35.2,   "UZB": 12000,
  "VUT": 2.6,   "VEN": 4700000,"VNM": 7200,  "YEM": 250,    "ZMB": 10.5,
  "ZWE": 4000
};


const currency = {
  "AFG": "؋",   "ALB": "L",    "DZA": "د.ج", "AGO": "Kz",   "ARG": "$",
  "ARM": "֏",   "AUS": "$",    "AUT": "€",   "AZE": "₼",    "BGD": "৳",
  "BLR": "Br",  "BEL": "€",    "BEN": "CFA", "BOL": "Bs.",  "BIH": "KM",
  "BWA": "P",   "BRA": "R$",   "BRN": "$",   "BGR": "лв",   "BFA": "CFA",
  "BDI": "FBu", "KHM": "៛",    "CMR": "CFA", "CAN": "$",    "CPV": "$",
  "CAF": "CFA", "TCD": "CFA",  "CHL": "$",   "CHN": "¥",    "COL": "$",
  "COM": "CF",  "COG": "CFA",  "COD": "FC",  "CRI": "₡",    "CIV": "CFA",
  "HRV": "kn",  "CYP": "€",    "CZE": "Kč",  "DNK": "kr",   "DJI": "Fdj",
  "DOM": "RD$", "ECU": "$",    "EGY": "£",   "SLV": "$",    "GNQ": "CFA",
  "ERI": "Nkf", "EST": "€",    "SWZ": "E",   "ETH": "Br",   "FJI": "$",
  "FIN": "€",   "FRA": "€",    "GAB": "CFA", "GMB": "D",    "GEO": "₾",
  "DEU": "€",   "GHA": "₵",    "GRC": "€",   "GTM": "Q",    "GIN": "FG",
  "GNB": "CFA", "GUY": "$",    "HTI": "G",   "HND": "L",    "HUN": "Ft",
  "ISL": "kr",  "IND": "₹",    "IDN": "Rp",  "IRN": "﷼",    "IRQ": "ع.د",
  "IRL": "€",   "ISR": "₪",    "ITA": "€",   "JAM": "J$",   "JPN": "¥",
  "JOR": "د.ا", "KAZ": "₸",    "KEN": "KSh", "KIR": "$",    "KOR": "₩",
  "KWT": "د.ك", "KGZ": "сом",  "LAO": "₭",   "LVA": "€",    "LBN": "ل.ل",
  "LSO": "L",   "LBR": "$",    "LBY": "ل.د", "LTU": "€",    "LUX": "€",
  "MDG": "Ar",  "MWI": "MK",   "MYS": "RM",  "MDV": "Rf",   "MLI": "CFA",
  "MLT": "€",   "MRT": "MRU",  "MUS": "₨",   "MEX": "$",    "MDA": "L",
  "MNG": "₮",   "MNE": "€",    "MAR": "د.م.", "MOZ": "MT",  "MMR": "K",
  "NAM": "$",   "NPL": "₨",    "NLD": "€",   "NZL": "$",    "NIC": "C$",
  "NER": "CFA", "NGA": "₦",    "MKD": "ден", "NOR": "kr",   "OMN": "ر.ع.",
  "PAK": "₨",   "PAN": "B/.",  "PNG": "K",   "PRY": "₲",    "PER": "S/",
  "PHL": "₱",   "POL": "zł",   "PRT": "€",   "QAT": "ر.ق",  "ROU": "lei",
  "RUS": "₽",   "RWA": "FRw",  "WSM": "T",   "STP": "Db",   "SAU": "ر.س",
  "SEN": "CFA", "SRB": "дин",  "SYC": "₨",   "SLE": "Le",   "SGP": "$",
  "SVK": "€",   "SVN": "€",    "SLB": "$",   "SOM": "Sh",   "ZAF": "R",
  "SSD": "SSP", "ESP": "€",    "LKA": "Rs",  "SDN": "£",    "SUR": "$",
  "SWE": "kr",  "CHE": "CHF",  "SYR": "£",   "TJK": "ЅМ",   "TZA": "TSh",
  "THA": "฿",   "TLS": "$",    "TGO": "CFA", "TON": "T$",   "TTO": "$",
  "TUN": "د.ت", "TUR": "₺",    "TKM": "m",   "UGA": "USh",  "UKR": "₴",
  "ARE": "د.إ", "GBR": "£",    "USA": "$",   "URY": "$U",   "UZB": "soʻm",
  "VUT": "VT",  "VEN": "Bs.",  "VNM": "₫",   "YEM": "﷼",    "ZMB": "ZK",
  "ZWE": "$"
};


const price = {
  "AFG": 0.011, "ALB": 0.011, "DZA": 0.0074, "AGO": 0.0012, "ARG": 0.0011,
  "ARM": 0.0025, "AUS": 0.67, "AUT": 1.09, "AZE": 0.59, "BGD": 0.0091,
  "BLR": 0.30, "BEL": 1.09, "BEN": 0.0017, "BOL": 0.14, "BIH": 0.56,
  "BWA": 0.074, "BRA": 0.18, "BRN": 0.74, "BGR": 0.55, "BFA": 0.0017,
  "BDI": 0.00035, "KHM": 0.00025, "CMR": 0.0017, "CAN": 0.73, "CPV": 0.010,
  "CAF": 0.0017, "TCD": 0.0017, "CHL": 0.0011, "CHN": 0.14, "COL": 0.00026,
  "COM": 0.0022, "COG": 0.0017, "COD": 0.00041, "CRI": 0.0019, "CIV": 0.0017,
  "HRV": 0.15, "CYP": 1.09, "CZE": 0.044, "DNK": 0.14, "DJI": 0.0056,
  "DOM": 0.017, "ECU": 1, "EGY": 0.021, "SLV": 1, "GNQ": 0.0017,
  "ERI": 0.067, "EST": 1.09, "SWZ": 0.054, "ETH": 0.017, "FJI": 0.44,
  "FIN": 1.09, "FRA": 1.09, "GAB": 0.0017, "GMB": 0.015, "GEO": 0.37,
  "DEU": 1.09, "GHA": 0.085, "GRC": 1.09, "GTM": 0.13, "GIN": 0.00012,
  "GNB": 0.0017, "GUY": 0.0048, "HTI": 0.0065, "HND": 0.041, "HUN": 0.0028,
  "ISL": 0.0073, "IND": 0.012, "IDN": 0.000062, "IRN": 0.000024, "IRQ": 0.00076,
  "IRL": 1.09, "ISR": 0.28, "ITA": 1.09, "JAM": 0.0065, "JPN": 0.0064,
  "JOR": 1.41, "KAZ": 0.0023, "KEN": 0.0077, "KIR": 0.74, "KOR": 0.00072,
  "KWT": 3.25, "KGZ": 0.011, "LAO": 0.000049, "LVA": 1.09, "LBN": 0.000011,
  "LSO": 0.054, "LBR": 0.0053, "LBY": 0.20, "LTU": 1.09, "LUX": 1.09,
  "MDG": 0.00022, "MWI": 0.00059, "MYS": 0.21, "MDV": 0.065, "MLI": 0.0017,
  "MLT": 1.09, "MRT": 0.026, "MUS": 0.022, "MEX": 0.057, "MDA": 0.056,
  "MNG": 0.00029, "MNE": 1.09, "MAR": 0.099, "MOZ": 0.016, "MMR": 0.00048,
  "NAM": 0.054, "NPL": 0.0075, "NLD": 1.09, "NZL": 0.61, "NIC": 0.027,
  "NER": 0.0017, "NGA": 0.00063, "MKD": 0.017, "NOR": 0.094, "OMN": 2.60,
  "PAK": 0.0036, "PAN": 1, "PNG": 0.27, "PRY": 0.00014, "PER": 0.27,
  "PHL": 0.017, "POL": 0.25, "PRT": 1.09, "QAT": 0.27, "ROU": 0.22,
  "RUS": 0.011, "RWA": 0.00081, "WSM": 0.37, "STP": 0.000042, "SAU": 0.27,
  "SEN": 0.0017, "SRB": 0.0092, "SYC": 0.073, "SLE": 0.000052, "SGP": 0.74,
  "SVK": 1.09, "SVN": 1.09, "SLB": 0.12, "SOM": 0.0017, "ZAF": 0.054,
  "SSD": 0.0076, "ESP": 1.09, "LKA": 0.0033, "SDN": 0.0018, "SUR": 0.026,
  "SWE": 0.094, "CHE": 1.12, "SYR": 0.00040, "TJK": 0.092, "TZA": 0.00039,
  "THA": 0.027, "TLS": 1, "TGO": 0.0017, "TON": 0.42, "TTO": 0.15,
  "TUN": 0.32, "TUR": 0.031, "TKM": 0.29, "UGA": 0.00027, "UKR": 0.025,
  "ARE": 0.27, "GBR": 1.29, "USA": 1, "URY": 0.025, "UZB": 0.000082,
  "VUT": 0.0084, "VEN": 0.0000002, "VNM": 0.000039, "YEM": 0.004,
  "ZMB": 0.039, "ZWE": 0.0028
};

const full_name = {
  "AFG": "Afghanistan", "ALB": "Albania", "DZA": "Algeria", "AGO": "Angola", "ARG": "Argentina",
  "ARM": "Armenia", "AUS": "Australia", "AUT": "Austria", "AZE": "Azerbaijan", "BGD": "Bangladesh",
  "BLR": "Belarus", "BEL": "Belgium", "BEN": "Benin", "BOL": "Bolivia", "BIH": "Bosnia and Herzegovina",
  "BWA": "Botswana", "BRA": "Brazil", "BRN": "Brunei", "BGR": "Bulgaria", "BFA": "Burkina Faso",
  "BDI": "Burundi", "KHM": "Cambodia", "CMR": "Cameroon", "CAN": "Canada", "CPV": "Cape Verde",
  "CAF": "Central African Republic", "TCD": "Chad", "CHL": "Chile", "CHN": "China", "COL": "Colombia",
  "COM": "Comoros", "COG": "Republic of the Congo", "COD": "Democratic Republic of the Congo", "CRI": "Costa Rica", "CIV": "Ivory Coast",
  "HRV": "Croatia", "CYP": "Cyprus", "CZE": "Czech Republic", "DNK": "Denmark", "DJI": "Djibouti",
  "DOM": "Dominican Republic", "ECU": "Ecuador", "EGY": "Egypt", "SLV": "El Salvador", "GNQ": "Equatorial Guinea",
  "ERI": "Eritrea", "EST": "Estonia", "SWZ": "Eswatini", "ETH": "Ethiopia", "FJI": "Fiji",
  "FIN": "Finland", "FRA": "France", "GAB": "Gabon", "GMB": "Gambia", "GEO": "Georgia",
  "DEU": "Germany", "GHA": "Ghana", "GRC": "Greece", "GTM": "Guatemala", "GIN": "Guinea",
  "GNB": "Guinea-Bissau", "GUY": "Guyana", "HTI": "Haiti", "HND": "Honduras", "HUN": "Hungary",
  "ISL": "Iceland", "IND": "India", "IDN": "Indonesia", "IRN": "Iran", "IRQ": "Iraq",
  "IRL": "Ireland", "ISR": "Israel", "ITA": "Italy", "JAM": "Jamaica", "JPN": "Japan",
  "JOR": "Jordan", "KAZ": "Kazakhstan", "KEN": "Kenya", "KIR": "Kiribati", "KOR": "South Korea",
  "KWT": "Kuwait", "KGZ": "Kyrgyzstan", "LAO": "Laos", "LVA": "Latvia", "LBN": "Lebanon",
  "LSO": "Lesotho", "LBR": "Liberia", "LBY": "Libya", "LTU": "Lithuania", "LUX": "Luxembourg",
  "MDG": "Madagascar", "MWI": "Malawi", "MYS": "Malaysia", "MDV": "Maldives", "MLI": "Mali",
  "MLT": "Malta", "MRT": "Mauritania", "MUS": "Mauritius", "MEX": "Mexico", "MDA": "Moldova",
  "MNG": "Mongolia", "MNE": "Montenegro", "MAR": "Morocco", "MOZ": "Mozambique", "MMR": "Myanmar",
  "NAM": "Namibia", "NPL": "Nepal", "NLD": "Netherlands", "NZL": "New Zealand", "NIC": "Nicaragua",
  "NER": "Niger", "NGA": "Nigeria", "MKD": "North Macedonia", "NOR": "Norway", "OMN": "Oman",
  "PAK": "Pakistan", "PAN": "Panama", "PNG": "Papua New Guinea", "PRY": "Paraguay", "PER": "Peru",
  "PHL": "Philippines", "POL": "Poland", "PRT": "Portugal", "QAT": "Qatar", "ROU": "Romania",
  "RUS": "Russia", "RWA": "Rwanda", "WSM": "Samoa", "STP": "São Tomé and Príncipe", "SAU": "Saudi Arabia",
  "SEN": "Senegal", "SRB": "Serbia", "SYC": "Seychelles", "SLE": "Sierra Leone", "SGP": "Singapore",
  "SVK": "Slovakia", "SVN": "Slovenia", "SLB": "Solomon Islands", "SOM": "Somalia", "ZAF": "South Africa",
  "SSD": "South Sudan", "ESP": "Spain", "LKA": "Sri Lanka", "SDN": "Sudan", "SUR": "Suriname",
  "SWE": "Sweden", "CHE": "Switzerland", "SYR": "Syria", "TJK": "Tajikistan", "TZA": "Tanzania",
  "THA": "Thailand", "TLS": "Timor-Leste", "TGO": "Togo", "TON": "Tonga", "TTO": "Trinidad and Tobago",
  "TUN": "Tunisia", "TUR": "Turkey", "TKM": "Turkmenistan", "UGA": "Uganda", "UKR": "Ukraine",
  "ARE": "United Arab Emirates", "GBR": "United Kingdom", "USA": "United States", "URY": "Uruguay", "UZB": "Uzbekistan",
  "VUT": "Vanuatu", "VEN": "Venezuela", "VNM": "Vietnam", "YEM": "Yemen", "ZMB": "Zambia",
  "ZWE": "Zimbabwe"
};




const suffix_currency = ["zł", "Ft", "Kč", "kr", "₫", "₭", "₮", "ден", "сом", "lei", "soʻm", "Db", "ZK", "K", "MT", "MK"];

var display = document.getElementById("display");


function calculate() {
    country_ini = document.getElementById("country_select").value;
    country_end = document.getElementById("target_select").value;
    salary_ini = parseFloat(document.getElementById("salary_ini").value);
    salary_end = salary_ini * (ppp[country_end] / ppp[country_ini]);
    abs_salary = salary_end * (price[country_end] / price[country_ini] )
  if (!salary_ini || !country_ini || !country_end) {
    display.textContent = "Please enter all three values before calculating.";
    display.style.color = "red";
    return;
  }
  else {

   
    if (suffix_currency.includes(currency[country_end])){
        var display_end = `${salary_end.toFixed(2)}${currency[country_end]}`;
    }
    else {
        var display_end = `${currency[country_end]}${salary_end.toFixed(2)}`;
    };
    if (suffix_currency.includes(currency[country_ini])) {
        var display_ini = `${salary_ini.toFixed(2)}${currency[country_ini]}`;
        var abs_value = `${abs_salary.toFixed(2)}${currency[country_ini]}`;
    }
    else {
        var display_ini = `${currency[country_ini]}${salary_ini.toFixed(2)}`;
        var abs_value = `${currency[country_ini]}${abs_salary.toFixed(2)}`;
    }
  }
    
    display.textContent =`Income of ${display_ini} in ${full_name[country_ini]} would feel like ${display_end} in ${full_name[country_end]} and is equivalent to ${abs_value} in absolute value.`
    display.style.color = 'black';
};


