/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B60EB2D1-02FA-40BB-9125-4C2DD47B019C"}
 */
var VERSION = '1.0.2';

/**
 * @properties={typeid:35,uuid:"9D4866D3-DAC9-4BBB-B032-932191DEFF9C",variableType:-4}
 */
var DATE = {
	FULL : 'cldr.date.FULL',
	LONG : 'cldr.date.LONG',
	MEDIUM : 'cldr.date.MEDIUM',
	SHORT : 'cldr.date.SHORT',
	SHORTFULLYEAR : 'cldr.date.SHORTFULLYEAR',
	yM : 'cldr.date.yM',
	yMM : 'cldr.date.yMM',
	yMMM : 'cldr.date.yMMM',
	yMMMM : 'cldr.date.yMMMM',
	yyMMdd : 'cldr.date.yyMMdd',
	yMMMd : 'cldr.date.yMMMd',
	Md : 'cldr.date.Md',
	MMMEd : 'cldr.date.MMMEd',
	MMMMd : 'cldr.date.MMMMd'
};

/**
 * @properties={typeid:35,uuid:"EA868554-C124-4BFE-AD7F-512BEE598133",variableType:-4}
 */
var TIME = {
	FULL : 'cldr.time.FULL',
	LONG : 'cldr.time.LONG',
	MEDIUM : 'cldr.time.MEDIUM',
	SHORT : 'cldr.time.SHORT'
};

/**
 * @properties={typeid:35,uuid:"92DAB303-47E5-4AA4-96A6-509D1918F1CF",variableType:-4}
 */
var DATETIME = {
	FULL : 'cldr.datetime.FULL',
	LONG : 'cldr.datetime.LONG',
	MEDIUM : 'cldr.datetime.MEDIUM',
	SHORT : 'cldr.datetime.SHORT'
};

/**
 * @properties={typeid:35,uuid:"510725B1-B306-45B6-9F3A-EE216FD60C54",variableType:-4}
 */
var NUMBER = {
	STANDARD : 'cldr.number.STANDARD',
	PERCENT : 'cldr.number.PERCENT',
	SCIENTIFIC : 'cldr.number.SCIENTIFIC',
	COUNT : {
		LONG : {
			1000 : {
				ONE : 'cldr.number.count.long.1000.ONE',
				OTHER : 'cldr.number.count.long.1000.OTHER',
				FEW : 'cldr.number.count.long.1000.FEW',
				MANY : 'cldr.number.count.long.1000.MANY'
			},
			10000 : {
				ONE : 'cldr.number.count.long.10000.ONE',
				OTHER : 'cldr.number.count.long.10000.OTHER',
				FEW : 'cldr.number.count.long.10000.FEW',
				MANY : 'cldr.number.count.long.10000.MANY'
			},
			100000 : {
				ONE : 'cldr.number.count.long.100000.ONE',
				OTHER : 'cldr.number.count.long.100000.OTHER',
				FEW : 'cldr.number.count.long.100000.FEW',
				MANY : 'cldr.number.count.long.100000.MANY'
			},
			1000000 : {
				ONE : 'cldr.number.count.long.1000000.ONE',
				OTHER : 'cldr.number.count.long.1000000.OTHER',
				FEW : 'cldr.number.count.long.1000000.FEW',
				MANY : 'cldr.number.count.long.1000000.MANY'
			},
			10000000 : {
				ONE : 'cldr.number.count.long.10000000.ONE',
				OTHER : 'cldr.number.count.long.10000000.OTHER',
				FEW : 'cldr.number.count.long.10000000.FEW',
				MANY : 'cldr.number.count.long.10000000.MANY'
			},
			100000000 : {
				ONE : 'cldr.number.count.long.100000000.ONE',
				OTHER : 'cldr.number.count.long.100000000.OTHER',
				FEW : 'cldr.number.count.long.100000000.FEW',
				MANY : 'cldr.number.count.long.100000000.MANY'
			},
			1000000000 : {
				ONE : 'cldr.number.count.long.1000000000.ONE',
				OTHER : 'cldr.number.count.long.1000000000.OTHER',
				FEW : 'cldr.number.count.long.1000000000.FEW',
				MANY : 'cldr.number.count.long.1000000000.MANY'
			},
			10000000000 : {
				ONE : 'cldr.number.count.long.10000000000.ONE',
				OTHER : 'cldr.number.count.long.10000000000.OTHER',
				FEW : 'cldr.number.count.long.10000000000.FEW',
				MANY : 'cldr.number.count.long.10000000000.MANY'
			},
			100000000000 : {
				ONE : 'cldr.number.count.long.100000000000.ONE',
				OTHER : 'cldr.number.count.long.100000000000.OTHER',
				FEW : 'cldr.number.count.long.100000000000.FEW',
				MANY : 'cldr.number.count.long.100000000000.MANY'
			},
			1000000000000 : {
				ONE : 'cldr.number.count.long.1000000000000.ONE',
				OTHER : 'cldr.number.count.long.1000000000000.OTHER',
				FEW : 'cldr.number.count.long.1000000000000.FEW',
				MANY : 'cldr.number.count.long.1000000000000.MANY'
			},
			10000000000000 : {
				ONE : 'cldr.number.count.long.10000000000000.ONE',
				OTHER : 'cldr.number.count.long.10000000000000.OTHER',
				FEW : 'cldr.number.count.long.10000000000000.FEW',
				MANY : 'cldr.number.count.long.10000000000000.MANY'
			},
			100000000000000 : {
				ONE : 'cldr.number.count.long.100000000000000.ONE',
				OTHER : 'cldr.number.count.long.100000000000000.OTHER',
				FEW : 'cldr.number.count.long.100000000000000.FEW',
				MANY : 'cldr.number.count.long.100000000000000.MANY'
			}
		},
		SHORT : {
			1000 : {
				ONE : 'cldr.number.count.short.1000.ONE',
				OTHER : 'cldr.number.count.short.1000.OTHER',
				FEW : 'cldr.number.count.short.1000.FEW',
				MANY : 'cldr.number.count.short.1000.MANY'
			},
			10000 : {
				ONE : 'cldr.number.count.short.10000.ONE',
				OTHER : 'cldr.number.count.short.10000.OTHER',
				FEW : 'cldr.number.count.short.10000.FEW',
				MANY : 'cldr.number.count.short.10000.MANY'
			},
			100000 : {
				ONE : 'cldr.number.count.short.100000.ONE',
				OTHER : 'cldr.number.count.short.100000.OTHER',
				FEW : 'cldr.number.count.short.100000.FEW',
				MANY : 'cldr.number.count.short.100000.MANY'
			},
			1000000 : {
				ONE : 'cldr.number.count.short.1000000.ONE',
				OTHER : 'cldr.number.count.short.1000000.OTHER',
				FEW : 'cldr.number.count.short.1000000.FEW',
				MANY : 'cldr.number.count.short.1000000.MANY'
			},
			10000000 : {
				ONE : 'cldr.number.count.short.10000000.ONE',
				OTHER : 'cldr.number.count.short.10000000.OTHER',
				FEW : 'cldr.number.count.short.10000000.FEW',
				MANY : 'cldr.number.count.short.10000000.MANY'
			},
			100000000 : {
				ONE : 'cldr.number.count.short.100000000.ONE',
				OTHER : 'cldr.number.count.short.100000000.OTHER',
				FEW : 'cldr.number.count.short.100000000.FEW',
				MANY : 'cldr.number.count.short.100000000.MANY'
			},
			1000000000 : {
				ONE : 'cldr.number.count.short.1000000000.ONE',
				OTHER : 'cldr.number.count.short.1000000000.OTHER',
				FEW : 'cldr.number.count.short.1000000000.FEW',
				MANY : 'cldr.number.count.short.1000000000.MANY'
			},
			10000000000 : {
				ONE : 'cldr.number.count.short.10000000000.ONE',
				OTHER : 'cldr.number.count.short.10000000000.OTHER',
				FEW : 'cldr.number.count.short.10000000000.FEW',
				MANY : 'cldr.number.count.short.10000000000.MANY'
			},
			100000000000 : {
				ONE : 'cldr.number.count.short.100000000000.ONE',
				OTHER : 'cldr.number.count.short.100000000000.OTHER',
				FEW : 'cldr.number.count.short.100000000000.FEW',
				MANY : 'cldr.number.count.short.100000000000.MANY'
			},
			1000000000000 : {
				ONE : 'cldr.number.count.short.1000000000000.ONE',
				OTHER : 'cldr.number.count.short.1000000000000.OTHER',
				FEW : 'cldr.number.count.short.1000000000000.FEW',
				MANY : 'cldr.number.count.short.1000000000000.MANY'
			},
			10000000000000 : {
				ONE : 'cldr.number.count.short.10000000000000.ONE',
				OTHER : 'cldr.number.count.short.10000000000000.OTHER',
				FEW : 'cldr.number.count.short.10000000000000.FEW',
				MANY : 'cldr.number.count.short.10000000000000.MANY'
			},
			100000000000000 : {
				ONE : 'cldr.number.count.short.100000000000000.ONE',
				OTHER : 'cldr.number.count.short.100000000000000.OTHER',
				FEW : 'cldr.number.count.short.100000000000000.FEW',
				MANY : 'cldr.number.count.short.100000000000000.MANY'
			}
		}
	}
};

/**
 * @properties={typeid:35,uuid:"AAE2A224-02C9-4EFC-8AD2-11C7A42DEDA1",variableType:-4}
 */
var CURRENCY = {
	STANDARD : 'cldr.currency.STANDARD',
	NOFRACTION : 'cldr.currency.NOFRACTION',
	ACCOUNTING : 'cldr.currency.ACCOUNTING',
	NOFRACTIONSYMBOL : 'cldr.currency.NOFRACTIONSYMBOL',
	CURRENCIES : {
		DISPLAY : {
			ADP : 'cldr.currency.currencies.display.ADP',
			AED : 'cldr.currency.currencies.display.AED',
			AFA : 'cldr.currency.currencies.display.AFA',
			AFN : 'cldr.currency.currencies.display.AFN',
			ALK : 'cldr.currency.currencies.display.ALK',
			ALL : 'cldr.currency.currencies.display.ALL',
			AMD : 'cldr.currency.currencies.display.AMD',
			ANG : 'cldr.currency.currencies.display.ANG',
			AOA : 'cldr.currency.currencies.display.AOA',
			AOK : 'cldr.currency.currencies.display.AOK',
			AON : 'cldr.currency.currencies.display.AON',
			AOR : 'cldr.currency.currencies.display.AOR',
			ARA : 'cldr.currency.currencies.display.ARA',
			ARL : 'cldr.currency.currencies.display.ARL',
			ARM : 'cldr.currency.currencies.display.ARM',
			ARP : 'cldr.currency.currencies.display.ARP',
			ARS : 'cldr.currency.currencies.display.ARS',
			ATS : 'cldr.currency.currencies.display.ATS',
			AUD : 'cldr.currency.currencies.display.AUD',
			AWG : 'cldr.currency.currencies.display.AWG',
			AZM : 'cldr.currency.currencies.display.AZM',
			AZN : 'cldr.currency.currencies.display.AZN',
			BAD : 'cldr.currency.currencies.display.BAD',
			BAM : 'cldr.currency.currencies.display.BAM',
			BAN : 'cldr.currency.currencies.display.BAN',
			BBD : 'cldr.currency.currencies.display.BBD',
			BDT : 'cldr.currency.currencies.display.BDT',
			BEC : 'cldr.currency.currencies.display.BEC',
			BEF : 'cldr.currency.currencies.display.BEF',
			BEL : 'cldr.currency.currencies.display.BEL',
			BGL : 'cldr.currency.currencies.display.BGL',
			BGM : 'cldr.currency.currencies.display.BGM',
			BGN : 'cldr.currency.currencies.display.BGN',
			BGO : 'cldr.currency.currencies.display.BGO',
			BHD : 'cldr.currency.currencies.display.BHD',
			BIF : 'cldr.currency.currencies.display.BIF',
			BMD : 'cldr.currency.currencies.display.BMD',
			BND : 'cldr.currency.currencies.display.BND',
			BOB : 'cldr.currency.currencies.display.BOB',
			BOL : 'cldr.currency.currencies.display.BOL',
			BOP : 'cldr.currency.currencies.display.BOP',
			BOV : 'cldr.currency.currencies.display.BOV',
			BRB : 'cldr.currency.currencies.display.BRB',
			BRC : 'cldr.currency.currencies.display.BRC',
			BRE : 'cldr.currency.currencies.display.BRE',
			BRL : 'cldr.currency.currencies.display.BRL',
			BRN : 'cldr.currency.currencies.display.BRN',
			BRR : 'cldr.currency.currencies.display.BRR',
			BRZ : 'cldr.currency.currencies.display.BRZ',
			BSD : 'cldr.currency.currencies.display.BSD',
			BTN : 'cldr.currency.currencies.display.BTN',
			BUK : 'cldr.currency.currencies.display.BUK',
			BWP : 'cldr.currency.currencies.display.BWP',
			BYB : 'cldr.currency.currencies.display.BYB',
			BYR : 'cldr.currency.currencies.display.BYR',
			BZD : 'cldr.currency.currencies.display.BZD',
			CAD : 'cldr.currency.currencies.display.CAD',
			CDF : 'cldr.currency.currencies.display.CDF',
			CHE : 'cldr.currency.currencies.display.CHE',
			CHF : 'cldr.currency.currencies.display.CHF',
			CHW : 'cldr.currency.currencies.display.CHW',
			CLE : 'cldr.currency.currencies.display.CLE',
			CLF : 'cldr.currency.currencies.display.CLF',
			CLP : 'cldr.currency.currencies.display.CLP',
			CNX : 'cldr.currency.currencies.display.CNX',
			CNY : 'cldr.currency.currencies.display.CNY',
			COP : 'cldr.currency.currencies.display.COP',
			COU : 'cldr.currency.currencies.display.COU',
			CRC : 'cldr.currency.currencies.display.CRC',
			CSD : 'cldr.currency.currencies.display.CSD',
			CSK : 'cldr.currency.currencies.display.CSK',
			CUC : 'cldr.currency.currencies.display.CUC',
			CUP : 'cldr.currency.currencies.display.CUP',
			CVE : 'cldr.currency.currencies.display.CVE',
			CYP : 'cldr.currency.currencies.display.CYP',
			CZK : 'cldr.currency.currencies.display.CZK',
			DDM : 'cldr.currency.currencies.display.DDM',
			DEM : 'cldr.currency.currencies.display.DEM',
			DJF : 'cldr.currency.currencies.display.DJF',
			DKK : 'cldr.currency.currencies.display.DKK',
			DOP : 'cldr.currency.currencies.display.DOP',
			DZD : 'cldr.currency.currencies.display.DZD',
			ECS : 'cldr.currency.currencies.display.ECS',
			ECV : 'cldr.currency.currencies.display.ECV',
			EEK : 'cldr.currency.currencies.display.EEK',
			EGP : 'cldr.currency.currencies.display.EGP',
			ERN : 'cldr.currency.currencies.display.ERN',
			ESA : 'cldr.currency.currencies.display.ESA',
			ESB : 'cldr.currency.currencies.display.ESB',
			ESP : 'cldr.currency.currencies.display.ESP',
			ETB : 'cldr.currency.currencies.display.ETB',
			EUR : 'cldr.currency.currencies.display.EUR',
			FIM : 'cldr.currency.currencies.display.FIM',
			FJD : 'cldr.currency.currencies.display.FJD',
			FKP : 'cldr.currency.currencies.display.FKP',
			FRF : 'cldr.currency.currencies.display.FRF',
			GBP : 'cldr.currency.currencies.display.GBP',
			GEK : 'cldr.currency.currencies.display.GEK',
			GEL : 'cldr.currency.currencies.display.GEL',
			GHC : 'cldr.currency.currencies.display.GHC',
			GHS : 'cldr.currency.currencies.display.GHS',
			GIP : 'cldr.currency.currencies.display.GIP',
			GMD : 'cldr.currency.currencies.display.GMD',
			GNF : 'cldr.currency.currencies.display.GNF',
			GNS : 'cldr.currency.currencies.display.GNS',
			GQE : 'cldr.currency.currencies.display.GQE',
			GRD : 'cldr.currency.currencies.display.GRD',
			GTQ : 'cldr.currency.currencies.display.GTQ',
			GWE : 'cldr.currency.currencies.display.GWE',
			GWP : 'cldr.currency.currencies.display.GWP',
			GYD : 'cldr.currency.currencies.display.GYD',
			HKD : 'cldr.currency.currencies.display.HKD',
			HNL : 'cldr.currency.currencies.display.HNL',
			HRD : 'cldr.currency.currencies.display.HRD',
			HRK : 'cldr.currency.currencies.display.HRK',
			HTG : 'cldr.currency.currencies.display.HTG',
			HUF : 'cldr.currency.currencies.display.HUF',
			IDR : 'cldr.currency.currencies.display.IDR',
			IEP : 'cldr.currency.currencies.display.IEP',
			ILP : 'cldr.currency.currencies.display.ILP',
			ILR : 'cldr.currency.currencies.display.ILR',
			ILS : 'cldr.currency.currencies.display.ILS',
			INR : 'cldr.currency.currencies.display.INR',
			IQD : 'cldr.currency.currencies.display.IQD',
			IRR : 'cldr.currency.currencies.display.IRR',
			ISJ : 'cldr.currency.currencies.display.ISJ',
			ISK : 'cldr.currency.currencies.display.ISK',
			ITL : 'cldr.currency.currencies.display.ITL',
			JMD : 'cldr.currency.currencies.display.JMD',
			JOD : 'cldr.currency.currencies.display.JOD',
			JPY : 'cldr.currency.currencies.display.JPY',
			KES : 'cldr.currency.currencies.display.KES',
			KGS : 'cldr.currency.currencies.display.KGS',
			KHR : 'cldr.currency.currencies.display.KHR',
			KMF : 'cldr.currency.currencies.display.KMF',
			KPW : 'cldr.currency.currencies.display.KPW',
			KRH : 'cldr.currency.currencies.display.KRH',
			KRO : 'cldr.currency.currencies.display.KRO',
			KRW : 'cldr.currency.currencies.display.KRW',
			KWD : 'cldr.currency.currencies.display.KWD',
			KYD : 'cldr.currency.currencies.display.KYD',
			KZT : 'cldr.currency.currencies.display.KZT',
			LAK : 'cldr.currency.currencies.display.LAK',
			LBP : 'cldr.currency.currencies.display.LBP',
			LKR : 'cldr.currency.currencies.display.LKR',
			LRD : 'cldr.currency.currencies.display.LRD',
			LSL : 'cldr.currency.currencies.display.LSL',
			LTL : 'cldr.currency.currencies.display.LTL',
			LTT : 'cldr.currency.currencies.display.LTT',
			LUC : 'cldr.currency.currencies.display.LUC',
			LUF : 'cldr.currency.currencies.display.LUF',
			LUL : 'cldr.currency.currencies.display.LUL',
			LVL : 'cldr.currency.currencies.display.LVL',
			LVR : 'cldr.currency.currencies.display.LVR',
			LYD : 'cldr.currency.currencies.display.LYD',
			MAD : 'cldr.currency.currencies.display.MAD',
			MAF : 'cldr.currency.currencies.display.MAF',
			MCF : 'cldr.currency.currencies.display.MCF',
			MDC : 'cldr.currency.currencies.display.MDC',
			MDL : 'cldr.currency.currencies.display.MDL',
			MGA : 'cldr.currency.currencies.display.MGA',
			MGF : 'cldr.currency.currencies.display.MGF',
			MKD : 'cldr.currency.currencies.display.MKD',
			MKN : 'cldr.currency.currencies.display.MKN',
			MLF : 'cldr.currency.currencies.display.MLF',
			MMK : 'cldr.currency.currencies.display.MMK',
			MNT : 'cldr.currency.currencies.display.MNT',
			MOP : 'cldr.currency.currencies.display.MOP',
			MRO : 'cldr.currency.currencies.display.MRO',
			MTL : 'cldr.currency.currencies.display.MTL',
			MTP : 'cldr.currency.currencies.display.MTP',
			MUR : 'cldr.currency.currencies.display.MUR',
			MVP : 'cldr.currency.currencies.display.MVP',
			MVR : 'cldr.currency.currencies.display.MVR',
			MWK : 'cldr.currency.currencies.display.MWK',
			MXN : 'cldr.currency.currencies.display.MXN',
			MXP : 'cldr.currency.currencies.display.MXP',
			MXV : 'cldr.currency.currencies.display.MXV',
			MYR : 'cldr.currency.currencies.display.MYR',
			MZE : 'cldr.currency.currencies.display.MZE',
			MZM : 'cldr.currency.currencies.display.MZM',
			MZN : 'cldr.currency.currencies.display.MZN',
			NAD : 'cldr.currency.currencies.display.NAD',
			NGN : 'cldr.currency.currencies.display.NGN',
			NIC : 'cldr.currency.currencies.display.NIC',
			NIO : 'cldr.currency.currencies.display.NIO',
			NLG : 'cldr.currency.currencies.display.NLG',
			NOK : 'cldr.currency.currencies.display.NOK',
			NPR : 'cldr.currency.currencies.display.NPR',
			NZD : 'cldr.currency.currencies.display.NZD',
			OMR : 'cldr.currency.currencies.display.OMR',
			PAB : 'cldr.currency.currencies.display.PAB',
			PEI : 'cldr.currency.currencies.display.PEI',
			PEN : 'cldr.currency.currencies.display.PEN',
			PES : 'cldr.currency.currencies.display.PES',
			PGK : 'cldr.currency.currencies.display.PGK',
			PHP : 'cldr.currency.currencies.display.PHP',
			PKR : 'cldr.currency.currencies.display.PKR',
			PLN : 'cldr.currency.currencies.display.PLN',
			PLZ : 'cldr.currency.currencies.display.PLZ',
			PTE : 'cldr.currency.currencies.display.PTE',
			PYG : 'cldr.currency.currencies.display.PYG',
			QAR : 'cldr.currency.currencies.display.QAR',
			RHD : 'cldr.currency.currencies.display.RHD',
			ROL : 'cldr.currency.currencies.display.ROL',
			RON : 'cldr.currency.currencies.display.RON',
			RSD : 'cldr.currency.currencies.display.RSD',
			RUB : 'cldr.currency.currencies.display.RUB',
			RUR : 'cldr.currency.currencies.display.RUR',
			RWF : 'cldr.currency.currencies.display.RWF',
			SAR : 'cldr.currency.currencies.display.SAR',
			SBD : 'cldr.currency.currencies.display.SBD',
			SCR : 'cldr.currency.currencies.display.SCR',
			SDD : 'cldr.currency.currencies.display.SDD',
			SDG : 'cldr.currency.currencies.display.SDG',
			SDP : 'cldr.currency.currencies.display.SDP',
			SEK : 'cldr.currency.currencies.display.SEK',
			SGD : 'cldr.currency.currencies.display.SGD',
			SHP : 'cldr.currency.currencies.display.SHP',
			SIT : 'cldr.currency.currencies.display.SIT',
			SKK : 'cldr.currency.currencies.display.SKK',
			SLL : 'cldr.currency.currencies.display.SLL',
			SOS : 'cldr.currency.currencies.display.SOS',
			SRD : 'cldr.currency.currencies.display.SRD',
			SRG : 'cldr.currency.currencies.display.SRG',
			SSP : 'cldr.currency.currencies.display.SSP',
			STD : 'cldr.currency.currencies.display.STD',
			SUR : 'cldr.currency.currencies.display.SUR',
			SVC : 'cldr.currency.currencies.display.SVC',
			SYP : 'cldr.currency.currencies.display.SYP',
			SZL : 'cldr.currency.currencies.display.SZL',
			THB : 'cldr.currency.currencies.display.THB',
			TJR : 'cldr.currency.currencies.display.TJR',
			TJS : 'cldr.currency.currencies.display.TJS',
			TMM : 'cldr.currency.currencies.display.TMM',
			TMT : 'cldr.currency.currencies.display.TMT',
			TND : 'cldr.currency.currencies.display.TND',
			TOP : 'cldr.currency.currencies.display.TOP',
			TPE : 'cldr.currency.currencies.display.TPE',
			TRL : 'cldr.currency.currencies.display.TRL',
			TRY : 'cldr.currency.currencies.display.TRY',
			TTD : 'cldr.currency.currencies.display.TTD',
			TWD : 'cldr.currency.currencies.display.TWD',
			TZS : 'cldr.currency.currencies.display.TZS',
			UAH : 'cldr.currency.currencies.display.UAH',
			UAK : 'cldr.currency.currencies.display.UAK',
			UGS : 'cldr.currency.currencies.display.UGS',
			UGX : 'cldr.currency.currencies.display.UGX',
			USD : 'cldr.currency.currencies.display.USD',
			USN : 'cldr.currency.currencies.display.USN',
			USS : 'cldr.currency.currencies.display.USS',
			UYI : 'cldr.currency.currencies.display.UYI',
			UYP : 'cldr.currency.currencies.display.UYP',
			UYU : 'cldr.currency.currencies.display.UYU',
			UZS : 'cldr.currency.currencies.display.UZS',
			VEB : 'cldr.currency.currencies.display.VEB',
			VEF : 'cldr.currency.currencies.display.VEF',
			VND : 'cldr.currency.currencies.display.VND',
			VNN : 'cldr.currency.currencies.display.VNN',
			VUV : 'cldr.currency.currencies.display.VUV',
			WST : 'cldr.currency.currencies.display.WST',
			XAF : 'cldr.currency.currencies.display.XAF',
			XAG : 'cldr.currency.currencies.display.XAG',
			XAU : 'cldr.currency.currencies.display.XAU',
			XBA : 'cldr.currency.currencies.display.XBA',
			XBB : 'cldr.currency.currencies.display.XBB',
			XBC : 'cldr.currency.currencies.display.XBC',
			XBD : 'cldr.currency.currencies.display.XBD',
			XCD : 'cldr.currency.currencies.display.XCD',
			XDR : 'cldr.currency.currencies.display.XDR',
			XEU : 'cldr.currency.currencies.display.XEU',
			XFO : 'cldr.currency.currencies.display.XFO',
			XFU : 'cldr.currency.currencies.display.XFU',
			XOF : 'cldr.currency.currencies.display.XOF',
			XPD : 'cldr.currency.currencies.display.XPD',
			XPF : 'cldr.currency.currencies.display.XPF',
			XPT : 'cldr.currency.currencies.display.XPT',
			XRE : 'cldr.currency.currencies.display.XRE',
			XSU : 'cldr.currency.currencies.display.XSU',
			XTS : 'cldr.currency.currencies.display.XTS',
			XUA : 'cldr.currency.currencies.display.XUA',
			XXX : 'cldr.currency.currencies.display.XXX',
			YDD : 'cldr.currency.currencies.display.YDD',
			YER : 'cldr.currency.currencies.display.YER',
			YUD : 'cldr.currency.currencies.display.YUD',
			YUM : 'cldr.currency.currencies.display.YUM',
			YUN : 'cldr.currency.currencies.display.YUN',
			YUR : 'cldr.currency.currencies.display.YUR',
			ZAL : 'cldr.currency.currencies.display.ZAL',
			ZAR : 'cldr.currency.currencies.display.ZAR',
			ZMK : 'cldr.currency.currencies.display.ZMK',
			ZMW : 'cldr.currency.currencies.display.ZMW',
			ZRN : 'cldr.currency.currencies.display.ZRN',
			ZRZ : 'cldr.currency.currencies.display.ZRZ',
			ZWD : 'cldr.currency.currencies.display.ZWD',
			ZWL : 'cldr.currency.currencies.display.ZWL',
			ZWR : 'cldr.currency.currencies.display.ZWR'
		},
		SYMBOL : {
			ADP : 'cldr.currency.currencies.symbol.ADP',
			AED : 'cldr.currency.currencies.symbol.AED',
			AFA : 'cldr.currency.currencies.symbol.AFA',
			AFN : 'cldr.currency.currencies.symbol.AFN',
			ALK : 'cldr.currency.currencies.symbol.ALK',
			ALL : 'cldr.currency.currencies.symbol.ALL',
			AMD : 'cldr.currency.currencies.symbol.AMD',
			ANG : 'cldr.currency.currencies.symbol.ANG',
			AOA : 'cldr.currency.currencies.symbol.AOA',
			AOK : 'cldr.currency.currencies.symbol.AOK',
			AON : 'cldr.currency.currencies.symbol.AON',
			AOR : 'cldr.currency.currencies.symbol.AOR',
			ARA : 'cldr.currency.currencies.symbol.ARA',
			ARL : 'cldr.currency.currencies.symbol.ARL',
			ARM : 'cldr.currency.currencies.symbol.ARM',
			ARP : 'cldr.currency.currencies.symbol.ARP',
			ARS : 'cldr.currency.currencies.symbol.ARS',
			ATS : 'cldr.currency.currencies.symbol.ATS',
			AUD : 'cldr.currency.currencies.symbol.AUD',
			AWG : 'cldr.currency.currencies.symbol.AWG',
			AZM : 'cldr.currency.currencies.symbol.AZM',
			AZN : 'cldr.currency.currencies.symbol.AZN',
			BAD : 'cldr.currency.currencies.symbol.BAD',
			BAM : 'cldr.currency.currencies.symbol.BAM',
			BAN : 'cldr.currency.currencies.symbol.BAN',
			BBD : 'cldr.currency.currencies.symbol.BBD',
			BDT : 'cldr.currency.currencies.symbol.BDT',
			BEC : 'cldr.currency.currencies.symbol.BEC',
			BEF : 'cldr.currency.currencies.symbol.BEF',
			BEL : 'cldr.currency.currencies.symbol.BEL',
			BGL : 'cldr.currency.currencies.symbol.BGL',
			BGM : 'cldr.currency.currencies.symbol.BGM',
			BGN : 'cldr.currency.currencies.symbol.BGN',
			BGO : 'cldr.currency.currencies.symbol.BGO',
			BHD : 'cldr.currency.currencies.symbol.BHD',
			BIF : 'cldr.currency.currencies.symbol.BIF',
			BMD : 'cldr.currency.currencies.symbol.BMD',
			BND : 'cldr.currency.currencies.symbol.BND',
			BOB : 'cldr.currency.currencies.symbol.BOB',
			BOL : 'cldr.currency.currencies.symbol.BOL',
			BOP : 'cldr.currency.currencies.symbol.BOP',
			BOV : 'cldr.currency.currencies.symbol.BOV',
			BRB : 'cldr.currency.currencies.symbol.BRB',
			BRC : 'cldr.currency.currencies.symbol.BRC',
			BRE : 'cldr.currency.currencies.symbol.BRE',
			BRL : 'cldr.currency.currencies.symbol.BRL',
			BRN : 'cldr.currency.currencies.symbol.BRN',
			BRR : 'cldr.currency.currencies.symbol.BRR',
			BRZ : 'cldr.currency.currencies.symbol.BRZ',
			BSD : 'cldr.currency.currencies.symbol.BSD',
			BTN : 'cldr.currency.currencies.symbol.BTN',
			BUK : 'cldr.currency.currencies.symbol.BUK',
			BWP : 'cldr.currency.currencies.symbol.BWP',
			BYB : 'cldr.currency.currencies.symbol.BYB',
			BYR : 'cldr.currency.currencies.symbol.BYR',
			BZD : 'cldr.currency.currencies.symbol.BZD',
			CAD : 'cldr.currency.currencies.symbol.CAD',
			CDF : 'cldr.currency.currencies.symbol.CDF',
			CHE : 'cldr.currency.currencies.symbol.CHE',
			CHF : 'cldr.currency.currencies.symbol.CHF',
			CHW : 'cldr.currency.currencies.symbol.CHW',
			CLE : 'cldr.currency.currencies.symbol.CLE',
			CLF : 'cldr.currency.currencies.symbol.CLF',
			CLP : 'cldr.currency.currencies.symbol.CLP',
			CNX : 'cldr.currency.currencies.symbol.CNX',
			CNY : 'cldr.currency.currencies.symbol.CNY',
			COP : 'cldr.currency.currencies.symbol.COP',
			COU : 'cldr.currency.currencies.symbol.COU',
			CRC : 'cldr.currency.currencies.symbol.CRC',
			CSD : 'cldr.currency.currencies.symbol.CSD',
			CSK : 'cldr.currency.currencies.symbol.CSK',
			CUC : 'cldr.currency.currencies.symbol.CUC',
			CUP : 'cldr.currency.currencies.symbol.CUP',
			CVE : 'cldr.currency.currencies.symbol.CVE',
			CYP : 'cldr.currency.currencies.symbol.CYP',
			CZK : 'cldr.currency.currencies.symbol.CZK',
			DDM : 'cldr.currency.currencies.symbol.DDM',
			DEM : 'cldr.currency.currencies.symbol.DEM',
			DJF : 'cldr.currency.currencies.symbol.DJF',
			DKK : 'cldr.currency.currencies.symbol.DKK',
			DOP : 'cldr.currency.currencies.symbol.DOP',
			DZD : 'cldr.currency.currencies.symbol.DZD',
			ECS : 'cldr.currency.currencies.symbol.ECS',
			ECV : 'cldr.currency.currencies.symbol.ECV',
			EEK : 'cldr.currency.currencies.symbol.EEK',
			EGP : 'cldr.currency.currencies.symbol.EGP',
			ERN : 'cldr.currency.currencies.symbol.ERN',
			ESA : 'cldr.currency.currencies.symbol.ESA',
			ESB : 'cldr.currency.currencies.symbol.ESB',
			ESP : 'cldr.currency.currencies.symbol.ESP',
			ETB : 'cldr.currency.currencies.symbol.ETB',
			EUR : 'cldr.currency.currencies.symbol.EUR',
			FIM : 'cldr.currency.currencies.symbol.FIM',
			FJD : 'cldr.currency.currencies.symbol.FJD',
			FKP : 'cldr.currency.currencies.symbol.FKP',
			FRF : 'cldr.currency.currencies.symbol.FRF',
			GBP : 'cldr.currency.currencies.symbol.GBP',
			GEK : 'cldr.currency.currencies.symbol.GEK',
			GEL : 'cldr.currency.currencies.symbol.GEL',
			GHC : 'cldr.currency.currencies.symbol.GHC',
			GHS : 'cldr.currency.currencies.symbol.GHS',
			GIP : 'cldr.currency.currencies.symbol.GIP',
			GMD : 'cldr.currency.currencies.symbol.GMD',
			GNF : 'cldr.currency.currencies.symbol.GNF',
			GNS : 'cldr.currency.currencies.symbol.GNS',
			GQE : 'cldr.currency.currencies.symbol.GQE',
			GRD : 'cldr.currency.currencies.symbol.GRD',
			GTQ : 'cldr.currency.currencies.symbol.GTQ',
			GWE : 'cldr.currency.currencies.symbol.GWE',
			GWP : 'cldr.currency.currencies.symbol.GWP',
			GYD : 'cldr.currency.currencies.symbol.GYD',
			HKD : 'cldr.currency.currencies.symbol.HKD',
			HNL : 'cldr.currency.currencies.symbol.HNL',
			HRD : 'cldr.currency.currencies.symbol.HRD',
			HRK : 'cldr.currency.currencies.symbol.HRK',
			HTG : 'cldr.currency.currencies.symbol.HTG',
			HUF : 'cldr.currency.currencies.symbol.HUF',
			IDR : 'cldr.currency.currencies.symbol.IDR',
			IEP : 'cldr.currency.currencies.symbol.IEP',
			ILP : 'cldr.currency.currencies.symbol.ILP',
			ILR : 'cldr.currency.currencies.symbol.ILR',
			ILS : 'cldr.currency.currencies.symbol.ILS',
			INR : 'cldr.currency.currencies.symbol.INR',
			IQD : 'cldr.currency.currencies.symbol.IQD',
			IRR : 'cldr.currency.currencies.symbol.IRR',
			ISJ : 'cldr.currency.currencies.symbol.ISJ',
			ISK : 'cldr.currency.currencies.symbol.ISK',
			ITL : 'cldr.currency.currencies.symbol.ITL',
			JMD : 'cldr.currency.currencies.symbol.JMD',
			JOD : 'cldr.currency.currencies.symbol.JOD',
			JPY : 'cldr.currency.currencies.symbol.JPY',
			KES : 'cldr.currency.currencies.symbol.KES',
			KGS : 'cldr.currency.currencies.symbol.KGS',
			KHR : 'cldr.currency.currencies.symbol.KHR',
			KMF : 'cldr.currency.currencies.symbol.KMF',
			KPW : 'cldr.currency.currencies.symbol.KPW',
			KRH : 'cldr.currency.currencies.symbol.KRH',
			KRO : 'cldr.currency.currencies.symbol.KRO',
			KRW : 'cldr.currency.currencies.symbol.KRW',
			KWD : 'cldr.currency.currencies.symbol.KWD',
			KYD : 'cldr.currency.currencies.symbol.KYD',
			KZT : 'cldr.currency.currencies.symbol.KZT',
			LAK : 'cldr.currency.currencies.symbol.LAK',
			LBP : 'cldr.currency.currencies.symbol.LBP',
			LKR : 'cldr.currency.currencies.symbol.LKR',
			LRD : 'cldr.currency.currencies.symbol.LRD',
			LSL : 'cldr.currency.currencies.symbol.LSL',
			LTL : 'cldr.currency.currencies.symbol.LTL',
			LTT : 'cldr.currency.currencies.symbol.LTT',
			LUC : 'cldr.currency.currencies.symbol.LUC',
			LUF : 'cldr.currency.currencies.symbol.LUF',
			LUL : 'cldr.currency.currencies.symbol.LUL',
			LVL : 'cldr.currency.currencies.symbol.LVL',
			LVR : 'cldr.currency.currencies.symbol.LVR',
			LYD : 'cldr.currency.currencies.symbol.LYD',
			MAD : 'cldr.currency.currencies.symbol.MAD',
			MAF : 'cldr.currency.currencies.symbol.MAF',
			MCF : 'cldr.currency.currencies.symbol.MCF',
			MDC : 'cldr.currency.currencies.symbol.MDC',
			MDL : 'cldr.currency.currencies.symbol.MDL',
			MGA : 'cldr.currency.currencies.symbol.MGA',
			MGF : 'cldr.currency.currencies.symbol.MGF',
			MKD : 'cldr.currency.currencies.symbol.MKD',
			MKN : 'cldr.currency.currencies.symbol.MKN',
			MLF : 'cldr.currency.currencies.symbol.MLF',
			MMK : 'cldr.currency.currencies.symbol.MMK',
			MNT : 'cldr.currency.currencies.symbol.MNT',
			MOP : 'cldr.currency.currencies.symbol.MOP',
			MRO : 'cldr.currency.currencies.symbol.MRO',
			MTL : 'cldr.currency.currencies.symbol.MTL',
			MTP : 'cldr.currency.currencies.symbol.MTP',
			MUR : 'cldr.currency.currencies.symbol.MUR',
			MVP : 'cldr.currency.currencies.symbol.MVP',
			MVR : 'cldr.currency.currencies.symbol.MVR',
			MWK : 'cldr.currency.currencies.symbol.MWK',
			MXN : 'cldr.currency.currencies.symbol.MXN',
			MXP : 'cldr.currency.currencies.symbol.MXP',
			MXV : 'cldr.currency.currencies.symbol.MXV',
			MYR : 'cldr.currency.currencies.symbol.MYR',
			MZE : 'cldr.currency.currencies.symbol.MZE',
			MZM : 'cldr.currency.currencies.symbol.MZM',
			MZN : 'cldr.currency.currencies.symbol.MZN',
			NAD : 'cldr.currency.currencies.symbol.NAD',
			NGN : 'cldr.currency.currencies.symbol.NGN',
			NIC : 'cldr.currency.currencies.symbol.NIC',
			NIO : 'cldr.currency.currencies.symbol.NIO',
			NLG : 'cldr.currency.currencies.symbol.NLG',
			NOK : 'cldr.currency.currencies.symbol.NOK',
			NPR : 'cldr.currency.currencies.symbol.NPR',
			NZD : 'cldr.currency.currencies.symbol.NZD',
			OMR : 'cldr.currency.currencies.symbol.OMR',
			PAB : 'cldr.currency.currencies.symbol.PAB',
			PEI : 'cldr.currency.currencies.symbol.PEI',
			PEN : 'cldr.currency.currencies.symbol.PEN',
			PES : 'cldr.currency.currencies.symbol.PES',
			PGK : 'cldr.currency.currencies.symbol.PGK',
			PHP : 'cldr.currency.currencies.symbol.PHP',
			PKR : 'cldr.currency.currencies.symbol.PKR',
			PLN : 'cldr.currency.currencies.symbol.PLN',
			PLZ : 'cldr.currency.currencies.symbol.PLZ',
			PTE : 'cldr.currency.currencies.symbol.PTE',
			PYG : 'cldr.currency.currencies.symbol.PYG',
			QAR : 'cldr.currency.currencies.symbol.QAR',
			RHD : 'cldr.currency.currencies.symbol.RHD',
			ROL : 'cldr.currency.currencies.symbol.ROL',
			RON : 'cldr.currency.currencies.symbol.RON',
			RSD : 'cldr.currency.currencies.symbol.RSD',
			RUB : 'cldr.currency.currencies.symbol.RUB',
			RUR : 'cldr.currency.currencies.symbol.RUR',
			RWF : 'cldr.currency.currencies.symbol.RWF',
			SAR : 'cldr.currency.currencies.symbol.SAR',
			SBD : 'cldr.currency.currencies.symbol.SBD',
			SCR : 'cldr.currency.currencies.symbol.SCR',
			SDD : 'cldr.currency.currencies.symbol.SDD',
			SDG : 'cldr.currency.currencies.symbol.SDG',
			SDP : 'cldr.currency.currencies.symbol.SDP',
			SEK : 'cldr.currency.currencies.symbol.SEK',
			SGD : 'cldr.currency.currencies.symbol.SGD',
			SHP : 'cldr.currency.currencies.symbol.SHP',
			SIT : 'cldr.currency.currencies.symbol.SIT',
			SKK : 'cldr.currency.currencies.symbol.SKK',
			SLL : 'cldr.currency.currencies.symbol.SLL',
			SOS : 'cldr.currency.currencies.symbol.SOS',
			SRD : 'cldr.currency.currencies.symbol.SRD',
			SRG : 'cldr.currency.currencies.symbol.SRG',
			SSP : 'cldr.currency.currencies.symbol.SSP',
			STD : 'cldr.currency.currencies.symbol.STD',
			SUR : 'cldr.currency.currencies.symbol.SUR',
			SVC : 'cldr.currency.currencies.symbol.SVC',
			SYP : 'cldr.currency.currencies.symbol.SYP',
			SZL : 'cldr.currency.currencies.symbol.SZL',
			THB : 'cldr.currency.currencies.symbol.THB',
			TJR : 'cldr.currency.currencies.symbol.TJR',
			TJS : 'cldr.currency.currencies.symbol.TJS',
			TMM : 'cldr.currency.currencies.symbol.TMM',
			TMT : 'cldr.currency.currencies.symbol.TMT',
			TND : 'cldr.currency.currencies.symbol.TND',
			TOP : 'cldr.currency.currencies.symbol.TOP',
			TPE : 'cldr.currency.currencies.symbol.TPE',
			TRL : 'cldr.currency.currencies.symbol.TRL',
			TRY : 'cldr.currency.currencies.symbol.TRY',
			TTD : 'cldr.currency.currencies.symbol.TTD',
			TWD : 'cldr.currency.currencies.symbol.TWD',
			TZS : 'cldr.currency.currencies.symbol.TZS',
			UAH : 'cldr.currency.currencies.symbol.UAH',
			UAK : 'cldr.currency.currencies.symbol.UAK',
			UGS : 'cldr.currency.currencies.symbol.UGS',
			UGX : 'cldr.currency.currencies.symbol.UGX',
			USD : 'cldr.currency.currencies.symbol.USD',
			USN : 'cldr.currency.currencies.symbol.USN',
			USS : 'cldr.currency.currencies.symbol.USS',
			UYI : 'cldr.currency.currencies.symbol.UYI',
			UYP : 'cldr.currency.currencies.symbol.UYP',
			UYU : 'cldr.currency.currencies.symbol.UYU',
			UZS : 'cldr.currency.currencies.symbol.UZS',
			VEB : 'cldr.currency.currencies.symbol.VEB',
			VEF : 'cldr.currency.currencies.symbol.VEF',
			VND : 'cldr.currency.currencies.symbol.VND',
			VNN : 'cldr.currency.currencies.symbol.VNN',
			VUV : 'cldr.currency.currencies.symbol.VUV',
			WST : 'cldr.currency.currencies.symbol.WST',
			XAF : 'cldr.currency.currencies.symbol.XAF',
			XAG : 'cldr.currency.currencies.symbol.XAG',
			XAU : 'cldr.currency.currencies.symbol.XAU',
			XBA : 'cldr.currency.currencies.symbol.XBA',
			XBB : 'cldr.currency.currencies.symbol.XBB',
			XBC : 'cldr.currency.currencies.symbol.XBC',
			XBD : 'cldr.currency.currencies.symbol.XBD',
			XCD : 'cldr.currency.currencies.symbol.XCD',
			XDR : 'cldr.currency.currencies.symbol.XDR',
			XEU : 'cldr.currency.currencies.symbol.XEU',
			XFO : 'cldr.currency.currencies.symbol.XFO',
			XFU : 'cldr.currency.currencies.symbol.XFU',
			XOF : 'cldr.currency.currencies.symbol.XOF',
			XPD : 'cldr.currency.currencies.symbol.XPD',
			XPF : 'cldr.currency.currencies.symbol.XPF',
			XPT : 'cldr.currency.currencies.symbol.XPT',
			XRE : 'cldr.currency.currencies.symbol.XRE',
			XSU : 'cldr.currency.currencies.symbol.XSU',
			XTS : 'cldr.currency.currencies.symbol.XTS',
			XUA : 'cldr.currency.currencies.symbol.XUA',
			XXX : 'cldr.currency.currencies.symbol.XXX',
			YDD : 'cldr.currency.currencies.symbol.YDD',
			YER : 'cldr.currency.currencies.symbol.YER',
			YUD : 'cldr.currency.currencies.symbol.YUD',
			YUM : 'cldr.currency.currencies.symbol.YUM',
			YUN : 'cldr.currency.currencies.symbol.YUN',
			YUR : 'cldr.currency.currencies.symbol.YUR',
			ZAL : 'cldr.currency.currencies.symbol.ZAL',
			ZAR : 'cldr.currency.currencies.symbol.ZAR',
			ZMK : 'cldr.currency.currencies.symbol.ZMK',
			ZMW : 'cldr.currency.currencies.symbol.ZMW',
			ZRN : 'cldr.currency.currencies.symbol.ZRN',
			ZRZ : 'cldr.currency.currencies.symbol.ZRZ',
			ZWD : 'cldr.currency.currencies.symbol.ZWD',
			ZWL : 'cldr.currency.currencies.symbol.ZWL',
			ZWR : 'cldr.currency.currencies.symbol.ZWR'
		},
		COUNT : {
			ADP : {
				ONE : 'cldr.currency.currencies.count.ADP.one',
				OTHER : 'cldr.currency.currencies.count.ADP.other',
				FEW : 'cldr.currency.currencies.count.ADP.few',
				MANY : 'cldr.currency.currencies.count.ADP.many'
			},
			AED : {
				ONE : 'cldr.currency.currencies.count.AED.one',
				OTHER : 'cldr.currency.currencies.count.AED.other',
				FEW : 'cldr.currency.currencies.count.AED.few',
				MANY : 'cldr.currency.currencies.count.AED.many'
			},
			AFA : {
				ONE : 'cldr.currency.currencies.count.AFA.one',
				OTHER : 'cldr.currency.currencies.count.AFA.other',
				FEW : 'cldr.currency.currencies.count.AFA.few',
				MANY : 'cldr.currency.currencies.count.AFA.many'
			},
			AFN : {
				ONE : 'cldr.currency.currencies.count.AFN.one',
				OTHER : 'cldr.currency.currencies.count.AFN.other',
				FEW : 'cldr.currency.currencies.count.AFN.few',
				MANY : 'cldr.currency.currencies.count.AFN.many'
			},
			ALK : {
				ONE : 'cldr.currency.currencies.count.ALK.one',
				OTHER : 'cldr.currency.currencies.count.ALK.other',
				FEW : 'cldr.currency.currencies.count.ALK.few',
				MANY : 'cldr.currency.currencies.count.ALK.many'
			},
			ALL : {
				ONE : 'cldr.currency.currencies.count.ALL.one',
				OTHER : 'cldr.currency.currencies.count.ALL.other',
				FEW : 'cldr.currency.currencies.count.ALL.few',
				MANY : 'cldr.currency.currencies.count.ALL.many'
			},
			AMD : {
				ONE : 'cldr.currency.currencies.count.AMD.one',
				OTHER : 'cldr.currency.currencies.count.AMD.other',
				FEW : 'cldr.currency.currencies.count.AMD.few',
				MANY : 'cldr.currency.currencies.count.AMD.many'
			},
			ANG : {
				ONE : 'cldr.currency.currencies.count.ANG.one',
				OTHER : 'cldr.currency.currencies.count.ANG.other',
				FEW : 'cldr.currency.currencies.count.ANG.few',
				MANY : 'cldr.currency.currencies.count.ANG.many'
			},
			AOA : {
				ONE : 'cldr.currency.currencies.count.AOA.one',
				OTHER : 'cldr.currency.currencies.count.AOA.other',
				FEW : 'cldr.currency.currencies.count.AOA.few',
				MANY : 'cldr.currency.currencies.count.AOA.many'
			},
			AOK : {
				ONE : 'cldr.currency.currencies.count.AOK.one',
				OTHER : 'cldr.currency.currencies.count.AOK.other',
				FEW : 'cldr.currency.currencies.count.AOK.few',
				MANY : 'cldr.currency.currencies.count.AOK.many'
			},
			AON : {
				ONE : 'cldr.currency.currencies.count.AON.one',
				OTHER : 'cldr.currency.currencies.count.AON.other',
				FEW : 'cldr.currency.currencies.count.AON.few',
				MANY : 'cldr.currency.currencies.count.AON.many'
			},
			AOR : {
				ONE : 'cldr.currency.currencies.count.AOR.one',
				OTHER : 'cldr.currency.currencies.count.AOR.other',
				FEW : 'cldr.currency.currencies.count.AOR.few',
				MANY : 'cldr.currency.currencies.count.AOR.many'
			},
			ARA : {
				ONE : 'cldr.currency.currencies.count.ARA.one',
				OTHER : 'cldr.currency.currencies.count.ARA.other',
				FEW : 'cldr.currency.currencies.count.ARA.few',
				MANY : 'cldr.currency.currencies.count.ARA.many'
			},
			ARL : {
				ONE : 'cldr.currency.currencies.count.ARL.one',
				OTHER : 'cldr.currency.currencies.count.ARL.other',
				FEW : 'cldr.currency.currencies.count.ARL.few',
				MANY : 'cldr.currency.currencies.count.ARL.many'
			},
			ARM : {
				ONE : 'cldr.currency.currencies.count.ARM.one',
				OTHER : 'cldr.currency.currencies.count.ARM.other',
				FEW : 'cldr.currency.currencies.count.ARM.few',
				MANY : 'cldr.currency.currencies.count.ARM.many'
			},
			ARP : {
				ONE : 'cldr.currency.currencies.count.ARP.one',
				OTHER : 'cldr.currency.currencies.count.ARP.other',
				FEW : 'cldr.currency.currencies.count.ARP.few',
				MANY : 'cldr.currency.currencies.count.ARP.many'
			},
			ARS : {
				ONE : 'cldr.currency.currencies.count.ARS.one',
				OTHER : 'cldr.currency.currencies.count.ARS.other',
				FEW : 'cldr.currency.currencies.count.ARS.few',
				MANY : 'cldr.currency.currencies.count.ARS.many'
			},
			ATS : {
				ONE : 'cldr.currency.currencies.count.ATS.one',
				OTHER : 'cldr.currency.currencies.count.ATS.other',
				FEW : 'cldr.currency.currencies.count.ATS.few',
				MANY : 'cldr.currency.currencies.count.ATS.many'
			},
			AUD : {
				ONE : 'cldr.currency.currencies.count.AUD.one',
				OTHER : 'cldr.currency.currencies.count.AUD.other',
				FEW : 'cldr.currency.currencies.count.AUD.few',
				MANY : 'cldr.currency.currencies.count.AUD.many'
			},
			AWG : {
				ONE : 'cldr.currency.currencies.count.AWG.one',
				OTHER : 'cldr.currency.currencies.count.AWG.other',
				FEW : 'cldr.currency.currencies.count.AWG.few',
				MANY : 'cldr.currency.currencies.count.AWG.many'
			},
			AZM : {
				ONE : 'cldr.currency.currencies.count.AZM.one',
				OTHER : 'cldr.currency.currencies.count.AZM.other',
				FEW : 'cldr.currency.currencies.count.AZM.few',
				MANY : 'cldr.currency.currencies.count.AZM.many'
			},
			AZN : {
				ONE : 'cldr.currency.currencies.count.AZN.one',
				OTHER : 'cldr.currency.currencies.count.AZN.other',
				FEW : 'cldr.currency.currencies.count.AZN.few',
				MANY : 'cldr.currency.currencies.count.AZN.many'
			},
			BAD : {
				ONE : 'cldr.currency.currencies.count.BAD.one',
				OTHER : 'cldr.currency.currencies.count.BAD.other',
				FEW : 'cldr.currency.currencies.count.BAD.few',
				MANY : 'cldr.currency.currencies.count.BAD.many'
			},
			BAM : {
				ONE : 'cldr.currency.currencies.count.BAM.one',
				OTHER : 'cldr.currency.currencies.count.BAM.other',
				FEW : 'cldr.currency.currencies.count.BAM.few',
				MANY : 'cldr.currency.currencies.count.BAM.many'
			},
			BAN : {
				ONE : 'cldr.currency.currencies.count.BAN.one',
				OTHER : 'cldr.currency.currencies.count.BAN.other',
				FEW : 'cldr.currency.currencies.count.BAN.few',
				MANY : 'cldr.currency.currencies.count.BAN.many'
			},
			BBD : {
				ONE : 'cldr.currency.currencies.count.BBD.one',
				OTHER : 'cldr.currency.currencies.count.BBD.other',
				FEW : 'cldr.currency.currencies.count.BBD.few',
				MANY : 'cldr.currency.currencies.count.BBD.many'
			},
			BDT : {
				ONE : 'cldr.currency.currencies.count.BDT.one',
				OTHER : 'cldr.currency.currencies.count.BDT.other',
				FEW : 'cldr.currency.currencies.count.BDT.few',
				MANY : 'cldr.currency.currencies.count.BDT.many'
			},
			BEC : {
				ONE : 'cldr.currency.currencies.count.BEC.one',
				OTHER : 'cldr.currency.currencies.count.BEC.other',
				FEW : 'cldr.currency.currencies.count.BEC.few',
				MANY : 'cldr.currency.currencies.count.BEC.many'
			},
			BEF : {
				ONE : 'cldr.currency.currencies.count.BEF.one',
				OTHER : 'cldr.currency.currencies.count.BEF.other',
				FEW : 'cldr.currency.currencies.count.BEF.few',
				MANY : 'cldr.currency.currencies.count.BEF.many'
			},
			BEL : {
				ONE : 'cldr.currency.currencies.count.BEL.one',
				OTHER : 'cldr.currency.currencies.count.BEL.other',
				FEW : 'cldr.currency.currencies.count.BEL.few',
				MANY : 'cldr.currency.currencies.count.BEL.many'
			},
			BGL : {
				ONE : 'cldr.currency.currencies.count.BGL.one',
				OTHER : 'cldr.currency.currencies.count.BGL.other',
				FEW : 'cldr.currency.currencies.count.BGL.few',
				MANY : 'cldr.currency.currencies.count.BGL.many'
			},
			BGM : {
				ONE : 'cldr.currency.currencies.count.BGM.one',
				OTHER : 'cldr.currency.currencies.count.BGM.other',
				FEW : 'cldr.currency.currencies.count.BGM.few',
				MANY : 'cldr.currency.currencies.count.BGM.many'
			},
			BGN : {
				ONE : 'cldr.currency.currencies.count.BGN.one',
				OTHER : 'cldr.currency.currencies.count.BGN.other',
				FEW : 'cldr.currency.currencies.count.BGN.few',
				MANY : 'cldr.currency.currencies.count.BGN.many'
			},
			BGO : {
				ONE : 'cldr.currency.currencies.count.BGO.one',
				OTHER : 'cldr.currency.currencies.count.BGO.other',
				FEW : 'cldr.currency.currencies.count.BGO.few',
				MANY : 'cldr.currency.currencies.count.BGO.many'
			},
			BHD : {
				ONE : 'cldr.currency.currencies.count.BHD.one',
				OTHER : 'cldr.currency.currencies.count.BHD.other',
				FEW : 'cldr.currency.currencies.count.BHD.few',
				MANY : 'cldr.currency.currencies.count.BHD.many'
			},
			BIF : {
				ONE : 'cldr.currency.currencies.count.BIF.one',
				OTHER : 'cldr.currency.currencies.count.BIF.other',
				FEW : 'cldr.currency.currencies.count.BIF.few',
				MANY : 'cldr.currency.currencies.count.BIF.many'
			},
			BMD : {
				ONE : 'cldr.currency.currencies.count.BMD.one',
				OTHER : 'cldr.currency.currencies.count.BMD.other',
				FEW : 'cldr.currency.currencies.count.BMD.few',
				MANY : 'cldr.currency.currencies.count.BMD.many'
			},
			BND : {
				ONE : 'cldr.currency.currencies.count.BND.one',
				OTHER : 'cldr.currency.currencies.count.BND.other',
				FEW : 'cldr.currency.currencies.count.BND.few',
				MANY : 'cldr.currency.currencies.count.BND.many'
			},
			BOB : {
				ONE : 'cldr.currency.currencies.count.BOB.one',
				OTHER : 'cldr.currency.currencies.count.BOB.other',
				FEW : 'cldr.currency.currencies.count.BOB.few',
				MANY : 'cldr.currency.currencies.count.BOB.many'
			},
			BOL : {
				ONE : 'cldr.currency.currencies.count.BOL.one',
				OTHER : 'cldr.currency.currencies.count.BOL.other',
				FEW : 'cldr.currency.currencies.count.BOL.few',
				MANY : 'cldr.currency.currencies.count.BOL.many'
			},
			BOP : {
				ONE : 'cldr.currency.currencies.count.BOP.one',
				OTHER : 'cldr.currency.currencies.count.BOP.other',
				FEW : 'cldr.currency.currencies.count.BOP.few',
				MANY : 'cldr.currency.currencies.count.BOP.many'
			},
			BOV : {
				ONE : 'cldr.currency.currencies.count.BOV.one',
				OTHER : 'cldr.currency.currencies.count.BOV.other',
				FEW : 'cldr.currency.currencies.count.BOV.few',
				MANY : 'cldr.currency.currencies.count.BOV.many'
			},
			BRB : {
				ONE : 'cldr.currency.currencies.count.BRB.one',
				OTHER : 'cldr.currency.currencies.count.BRB.other',
				FEW : 'cldr.currency.currencies.count.BRB.few',
				MANY : 'cldr.currency.currencies.count.BRB.many'
			},
			BRC : {
				ONE : 'cldr.currency.currencies.count.BRC.one',
				OTHER : 'cldr.currency.currencies.count.BRC.other',
				FEW : 'cldr.currency.currencies.count.BRC.few',
				MANY : 'cldr.currency.currencies.count.BRC.many'
			},
			BRE : {
				ONE : 'cldr.currency.currencies.count.BRE.one',
				OTHER : 'cldr.currency.currencies.count.BRE.other',
				FEW : 'cldr.currency.currencies.count.BRE.few',
				MANY : 'cldr.currency.currencies.count.BRE.many'
			},
			BRL : {
				ONE : 'cldr.currency.currencies.count.BRL.one',
				OTHER : 'cldr.currency.currencies.count.BRL.other',
				FEW : 'cldr.currency.currencies.count.BRL.few',
				MANY : 'cldr.currency.currencies.count.BRL.many'
			},
			BRN : {
				ONE : 'cldr.currency.currencies.count.BRN.one',
				OTHER : 'cldr.currency.currencies.count.BRN.other',
				FEW : 'cldr.currency.currencies.count.BRN.few',
				MANY : 'cldr.currency.currencies.count.BRN.many'
			},
			BRR : {
				ONE : 'cldr.currency.currencies.count.BRR.one',
				OTHER : 'cldr.currency.currencies.count.BRR.other',
				FEW : 'cldr.currency.currencies.count.BRR.few',
				MANY : 'cldr.currency.currencies.count.BRR.many'
			},
			BRZ : {
				ONE : 'cldr.currency.currencies.count.BRZ.one',
				OTHER : 'cldr.currency.currencies.count.BRZ.other',
				FEW : 'cldr.currency.currencies.count.BRZ.few',
				MANY : 'cldr.currency.currencies.count.BRZ.many'
			},
			BSD : {
				ONE : 'cldr.currency.currencies.count.BSD.one',
				OTHER : 'cldr.currency.currencies.count.BSD.other',
				FEW : 'cldr.currency.currencies.count.BSD.few',
				MANY : 'cldr.currency.currencies.count.BSD.many'
			},
			BTN : {
				ONE : 'cldr.currency.currencies.count.BTN.one',
				OTHER : 'cldr.currency.currencies.count.BTN.other',
				FEW : 'cldr.currency.currencies.count.BTN.few',
				MANY : 'cldr.currency.currencies.count.BTN.many'
			},
			BUK : {
				ONE : 'cldr.currency.currencies.count.BUK.one',
				OTHER : 'cldr.currency.currencies.count.BUK.other',
				FEW : 'cldr.currency.currencies.count.BUK.few',
				MANY : 'cldr.currency.currencies.count.BUK.many'
			},
			BWP : {
				ONE : 'cldr.currency.currencies.count.BWP.one',
				OTHER : 'cldr.currency.currencies.count.BWP.other',
				FEW : 'cldr.currency.currencies.count.BWP.few',
				MANY : 'cldr.currency.currencies.count.BWP.many'
			},
			BYB : {
				ONE : 'cldr.currency.currencies.count.BYB.one',
				OTHER : 'cldr.currency.currencies.count.BYB.other',
				FEW : 'cldr.currency.currencies.count.BYB.few',
				MANY : 'cldr.currency.currencies.count.BYB.many'
			},
			BYR : {
				ONE : 'cldr.currency.currencies.count.BYR.one',
				OTHER : 'cldr.currency.currencies.count.BYR.other',
				FEW : 'cldr.currency.currencies.count.BYR.few',
				MANY : 'cldr.currency.currencies.count.BYR.many'
			},
			BZD : {
				ONE : 'cldr.currency.currencies.count.BZD.one',
				OTHER : 'cldr.currency.currencies.count.BZD.other',
				FEW : 'cldr.currency.currencies.count.BZD.few',
				MANY : 'cldr.currency.currencies.count.BZD.many'
			},
			CAD : {
				ONE : 'cldr.currency.currencies.count.CAD.one',
				OTHER : 'cldr.currency.currencies.count.CAD.other',
				FEW : 'cldr.currency.currencies.count.CAD.few',
				MANY : 'cldr.currency.currencies.count.CAD.many'
			},
			CDF : {
				ONE : 'cldr.currency.currencies.count.CDF.one',
				OTHER : 'cldr.currency.currencies.count.CDF.other',
				FEW : 'cldr.currency.currencies.count.CDF.few',
				MANY : 'cldr.currency.currencies.count.CDF.many'
			},
			CHE : {
				ONE : 'cldr.currency.currencies.count.CHE.one',
				OTHER : 'cldr.currency.currencies.count.CHE.other',
				FEW : 'cldr.currency.currencies.count.CHE.few',
				MANY : 'cldr.currency.currencies.count.CHE.many'
			},
			CHF : {
				ONE : 'cldr.currency.currencies.count.CHF.one',
				OTHER : 'cldr.currency.currencies.count.CHF.other',
				FEW : 'cldr.currency.currencies.count.CHF.few',
				MANY : 'cldr.currency.currencies.count.CHF.many'
			},
			CHW : {
				ONE : 'cldr.currency.currencies.count.CHW.one',
				OTHER : 'cldr.currency.currencies.count.CHW.other',
				FEW : 'cldr.currency.currencies.count.CHW.few',
				MANY : 'cldr.currency.currencies.count.CHW.many'
			},
			CLE : {
				ONE : 'cldr.currency.currencies.count.CLE.one',
				OTHER : 'cldr.currency.currencies.count.CLE.other',
				FEW : 'cldr.currency.currencies.count.CLE.few',
				MANY : 'cldr.currency.currencies.count.CLE.many'
			},
			CLF : {
				ONE : 'cldr.currency.currencies.count.CLF.one',
				OTHER : 'cldr.currency.currencies.count.CLF.other',
				FEW : 'cldr.currency.currencies.count.CLF.few',
				MANY : 'cldr.currency.currencies.count.CLF.many'
			},
			CLP : {
				ONE : 'cldr.currency.currencies.count.CLP.one',
				OTHER : 'cldr.currency.currencies.count.CLP.other',
				FEW : 'cldr.currency.currencies.count.CLP.few',
				MANY : 'cldr.currency.currencies.count.CLP.many'
			},
			CNX : {
				ONE : 'cldr.currency.currencies.count.CNX.one',
				OTHER : 'cldr.currency.currencies.count.CNX.other',
				FEW : 'cldr.currency.currencies.count.CNX.few',
				MANY : 'cldr.currency.currencies.count.CNX.many'
			},
			CNY : {
				ONE : 'cldr.currency.currencies.count.CNY.one',
				OTHER : 'cldr.currency.currencies.count.CNY.other',
				FEW : 'cldr.currency.currencies.count.CNY.few',
				MANY : 'cldr.currency.currencies.count.CNY.many'
			},
			COP : {
				ONE : 'cldr.currency.currencies.count.COP.one',
				OTHER : 'cldr.currency.currencies.count.COP.other',
				FEW : 'cldr.currency.currencies.count.COP.few',
				MANY : 'cldr.currency.currencies.count.COP.many'
			},
			COU : {
				ONE : 'cldr.currency.currencies.count.COU.one',
				OTHER : 'cldr.currency.currencies.count.COU.other',
				FEW : 'cldr.currency.currencies.count.COU.few',
				MANY : 'cldr.currency.currencies.count.COU.many'
			},
			CRC : {
				ONE : 'cldr.currency.currencies.count.CRC.one',
				OTHER : 'cldr.currency.currencies.count.CRC.other',
				FEW : 'cldr.currency.currencies.count.CRC.few',
				MANY : 'cldr.currency.currencies.count.CRC.many'
			},
			CSD : {
				ONE : 'cldr.currency.currencies.count.CSD.one',
				OTHER : 'cldr.currency.currencies.count.CSD.other',
				FEW : 'cldr.currency.currencies.count.CSD.few',
				MANY : 'cldr.currency.currencies.count.CSD.many'
			},
			CSK : {
				ONE : 'cldr.currency.currencies.count.CSK.one',
				OTHER : 'cldr.currency.currencies.count.CSK.other',
				FEW : 'cldr.currency.currencies.count.CSK.few',
				MANY : 'cldr.currency.currencies.count.CSK.many'
			},
			CUC : {
				ONE : 'cldr.currency.currencies.count.CUC.one',
				OTHER : 'cldr.currency.currencies.count.CUC.other',
				FEW : 'cldr.currency.currencies.count.CUC.few',
				MANY : 'cldr.currency.currencies.count.CUC.many'
			},
			CUP : {
				ONE : 'cldr.currency.currencies.count.CUP.one',
				OTHER : 'cldr.currency.currencies.count.CUP.other',
				FEW : 'cldr.currency.currencies.count.CUP.few',
				MANY : 'cldr.currency.currencies.count.CUP.many'
			},
			CVE : {
				ONE : 'cldr.currency.currencies.count.CVE.one',
				OTHER : 'cldr.currency.currencies.count.CVE.other',
				FEW : 'cldr.currency.currencies.count.CVE.few',
				MANY : 'cldr.currency.currencies.count.CVE.many'
			},
			CYP : {
				ONE : 'cldr.currency.currencies.count.CYP.one',
				OTHER : 'cldr.currency.currencies.count.CYP.other',
				FEW : 'cldr.currency.currencies.count.CYP.few',
				MANY : 'cldr.currency.currencies.count.CYP.many'
			},
			CZK : {
				ONE : 'cldr.currency.currencies.count.CZK.one',
				OTHER : 'cldr.currency.currencies.count.CZK.other',
				FEW : 'cldr.currency.currencies.count.CZK.few',
				MANY : 'cldr.currency.currencies.count.CZK.many'
			},
			DDM : {
				ONE : 'cldr.currency.currencies.count.DDM.one',
				OTHER : 'cldr.currency.currencies.count.DDM.other',
				FEW : 'cldr.currency.currencies.count.DDM.few',
				MANY : 'cldr.currency.currencies.count.DDM.many'
			},
			DEM : {
				ONE : 'cldr.currency.currencies.count.DEM.one',
				OTHER : 'cldr.currency.currencies.count.DEM.other',
				FEW : 'cldr.currency.currencies.count.DEM.few',
				MANY : 'cldr.currency.currencies.count.DEM.many'
			},
			DJF : {
				ONE : 'cldr.currency.currencies.count.DJF.one',
				OTHER : 'cldr.currency.currencies.count.DJF.other',
				FEW : 'cldr.currency.currencies.count.DJF.few',
				MANY : 'cldr.currency.currencies.count.DJF.many'
			},
			DKK : {
				ONE : 'cldr.currency.currencies.count.DKK.one',
				OTHER : 'cldr.currency.currencies.count.DKK.other',
				FEW : 'cldr.currency.currencies.count.DKK.few',
				MANY : 'cldr.currency.currencies.count.DKK.many'
			},
			DOP : {
				ONE : 'cldr.currency.currencies.count.DOP.one',
				OTHER : 'cldr.currency.currencies.count.DOP.other',
				FEW : 'cldr.currency.currencies.count.DOP.few',
				MANY : 'cldr.currency.currencies.count.DOP.many'
			},
			DZD : {
				ONE : 'cldr.currency.currencies.count.DZD.one',
				OTHER : 'cldr.currency.currencies.count.DZD.other',
				FEW : 'cldr.currency.currencies.count.DZD.few',
				MANY : 'cldr.currency.currencies.count.DZD.many'
			},
			ECS : {
				ONE : 'cldr.currency.currencies.count.ECS.one',
				OTHER : 'cldr.currency.currencies.count.ECS.other',
				FEW : 'cldr.currency.currencies.count.ECS.few',
				MANY : 'cldr.currency.currencies.count.ECS.many'
			},
			ECV : {
				ONE : 'cldr.currency.currencies.count.ECV.one',
				OTHER : 'cldr.currency.currencies.count.ECV.other',
				FEW : 'cldr.currency.currencies.count.ECV.few',
				MANY : 'cldr.currency.currencies.count.ECV.many'
			},
			EEK : {
				ONE : 'cldr.currency.currencies.count.EEK.one',
				OTHER : 'cldr.currency.currencies.count.EEK.other',
				FEW : 'cldr.currency.currencies.count.EEK.few',
				MANY : 'cldr.currency.currencies.count.EEK.many'
			},
			EGP : {
				ONE : 'cldr.currency.currencies.count.EGP.one',
				OTHER : 'cldr.currency.currencies.count.EGP.other',
				FEW : 'cldr.currency.currencies.count.EGP.few',
				MANY : 'cldr.currency.currencies.count.EGP.many'
			},
			ERN : {
				ONE : 'cldr.currency.currencies.count.ERN.one',
				OTHER : 'cldr.currency.currencies.count.ERN.other',
				FEW : 'cldr.currency.currencies.count.ERN.few',
				MANY : 'cldr.currency.currencies.count.ERN.many'
			},
			ESA : {
				ONE : 'cldr.currency.currencies.count.ESA.one',
				OTHER : 'cldr.currency.currencies.count.ESA.other',
				FEW : 'cldr.currency.currencies.count.ESA.few',
				MANY : 'cldr.currency.currencies.count.ESA.many'
			},
			ESB : {
				ONE : 'cldr.currency.currencies.count.ESB.one',
				OTHER : 'cldr.currency.currencies.count.ESB.other',
				FEW : 'cldr.currency.currencies.count.ESB.few',
				MANY : 'cldr.currency.currencies.count.ESB.many'
			},
			ESP : {
				ONE : 'cldr.currency.currencies.count.ESP.one',
				OTHER : 'cldr.currency.currencies.count.ESP.other',
				FEW : 'cldr.currency.currencies.count.ESP.few',
				MANY : 'cldr.currency.currencies.count.ESP.many'
			},
			ETB : {
				ONE : 'cldr.currency.currencies.count.ETB.one',
				OTHER : 'cldr.currency.currencies.count.ETB.other',
				FEW : 'cldr.currency.currencies.count.ETB.few',
				MANY : 'cldr.currency.currencies.count.ETB.many'
			},
			EUR : {
				ONE : 'cldr.currency.currencies.count.EUR.one',
				OTHER : 'cldr.currency.currencies.count.EUR.other',
				FEW : 'cldr.currency.currencies.count.EUR.few',
				MANY : 'cldr.currency.currencies.count.EUR.many'
			},
			FIM : {
				ONE : 'cldr.currency.currencies.count.FIM.one',
				OTHER : 'cldr.currency.currencies.count.FIM.other',
				FEW : 'cldr.currency.currencies.count.FIM.few',
				MANY : 'cldr.currency.currencies.count.FIM.many'
			},
			FJD : {
				ONE : 'cldr.currency.currencies.count.FJD.one',
				OTHER : 'cldr.currency.currencies.count.FJD.other',
				FEW : 'cldr.currency.currencies.count.FJD.few',
				MANY : 'cldr.currency.currencies.count.FJD.many'
			},
			FKP : {
				ONE : 'cldr.currency.currencies.count.FKP.one',
				OTHER : 'cldr.currency.currencies.count.FKP.other',
				FEW : 'cldr.currency.currencies.count.FKP.few',
				MANY : 'cldr.currency.currencies.count.FKP.many'
			},
			FRF : {
				ONE : 'cldr.currency.currencies.count.FRF.one',
				OTHER : 'cldr.currency.currencies.count.FRF.other',
				FEW : 'cldr.currency.currencies.count.FRF.few',
				MANY : 'cldr.currency.currencies.count.FRF.many'
			},
			GBP : {
				ONE : 'cldr.currency.currencies.count.GBP.one',
				OTHER : 'cldr.currency.currencies.count.GBP.other',
				FEW : 'cldr.currency.currencies.count.GBP.few',
				MANY : 'cldr.currency.currencies.count.GBP.many'
			},
			GEK : {
				ONE : 'cldr.currency.currencies.count.GEK.one',
				OTHER : 'cldr.currency.currencies.count.GEK.other',
				FEW : 'cldr.currency.currencies.count.GEK.few',
				MANY : 'cldr.currency.currencies.count.GEK.many'
			},
			GEL : {
				ONE : 'cldr.currency.currencies.count.GEL.one',
				OTHER : 'cldr.currency.currencies.count.GEL.other',
				FEW : 'cldr.currency.currencies.count.GEL.few',
				MANY : 'cldr.currency.currencies.count.GEL.many'
			},
			GHC : {
				ONE : 'cldr.currency.currencies.count.GHC.one',
				OTHER : 'cldr.currency.currencies.count.GHC.other',
				FEW : 'cldr.currency.currencies.count.GHC.few',
				MANY : 'cldr.currency.currencies.count.GHC.many'
			},
			GHS : {
				ONE : 'cldr.currency.currencies.count.GHS.one',
				OTHER : 'cldr.currency.currencies.count.GHS.other',
				FEW : 'cldr.currency.currencies.count.GHS.few',
				MANY : 'cldr.currency.currencies.count.GHS.many'
			},
			GIP : {
				ONE : 'cldr.currency.currencies.count.GIP.one',
				OTHER : 'cldr.currency.currencies.count.GIP.other',
				FEW : 'cldr.currency.currencies.count.GIP.few',
				MANY : 'cldr.currency.currencies.count.GIP.many'
			},
			GMD : {
				ONE : 'cldr.currency.currencies.count.GMD.one',
				OTHER : 'cldr.currency.currencies.count.GMD.other',
				FEW : 'cldr.currency.currencies.count.GMD.few',
				MANY : 'cldr.currency.currencies.count.GMD.many'
			},
			GNF : {
				ONE : 'cldr.currency.currencies.count.GNF.one',
				OTHER : 'cldr.currency.currencies.count.GNF.other',
				FEW : 'cldr.currency.currencies.count.GNF.few',
				MANY : 'cldr.currency.currencies.count.GNF.many'
			},
			GNS : {
				ONE : 'cldr.currency.currencies.count.GNS.one',
				OTHER : 'cldr.currency.currencies.count.GNS.other',
				FEW : 'cldr.currency.currencies.count.GNS.few',
				MANY : 'cldr.currency.currencies.count.GNS.many'
			},
			GQE : {
				ONE : 'cldr.currency.currencies.count.GQE.one',
				OTHER : 'cldr.currency.currencies.count.GQE.other',
				FEW : 'cldr.currency.currencies.count.GQE.few',
				MANY : 'cldr.currency.currencies.count.GQE.many'
			},
			GRD : {
				ONE : 'cldr.currency.currencies.count.GRD.one',
				OTHER : 'cldr.currency.currencies.count.GRD.other',
				FEW : 'cldr.currency.currencies.count.GRD.few',
				MANY : 'cldr.currency.currencies.count.GRD.many'
			},
			GTQ : {
				ONE : 'cldr.currency.currencies.count.GTQ.one',
				OTHER : 'cldr.currency.currencies.count.GTQ.other',
				FEW : 'cldr.currency.currencies.count.GTQ.few',
				MANY : 'cldr.currency.currencies.count.GTQ.many'
			},
			GWE : {
				ONE : 'cldr.currency.currencies.count.GWE.one',
				OTHER : 'cldr.currency.currencies.count.GWE.other',
				FEW : 'cldr.currency.currencies.count.GWE.few',
				MANY : 'cldr.currency.currencies.count.GWE.many'
			},
			GWP : {
				ONE : 'cldr.currency.currencies.count.GWP.one',
				OTHER : 'cldr.currency.currencies.count.GWP.other',
				FEW : 'cldr.currency.currencies.count.GWP.few',
				MANY : 'cldr.currency.currencies.count.GWP.many'
			},
			GYD : {
				ONE : 'cldr.currency.currencies.count.GYD.one',
				OTHER : 'cldr.currency.currencies.count.GYD.other',
				FEW : 'cldr.currency.currencies.count.GYD.few',
				MANY : 'cldr.currency.currencies.count.GYD.many'
			},
			HKD : {
				ONE : 'cldr.currency.currencies.count.HKD.one',
				OTHER : 'cldr.currency.currencies.count.HKD.other',
				FEW : 'cldr.currency.currencies.count.HKD.few',
				MANY : 'cldr.currency.currencies.count.HKD.many'
			},
			HNL : {
				ONE : 'cldr.currency.currencies.count.HNL.one',
				OTHER : 'cldr.currency.currencies.count.HNL.other',
				FEW : 'cldr.currency.currencies.count.HNL.few',
				MANY : 'cldr.currency.currencies.count.HNL.many'
			},
			HRD : {
				ONE : 'cldr.currency.currencies.count.HRD.one',
				OTHER : 'cldr.currency.currencies.count.HRD.other',
				FEW : 'cldr.currency.currencies.count.HRD.few',
				MANY : 'cldr.currency.currencies.count.HRD.many'
			},
			HRK : {
				ONE : 'cldr.currency.currencies.count.HRK.one',
				OTHER : 'cldr.currency.currencies.count.HRK.other',
				FEW : 'cldr.currency.currencies.count.HRK.few',
				MANY : 'cldr.currency.currencies.count.HRK.many'
			},
			HTG : {
				ONE : 'cldr.currency.currencies.count.HTG.one',
				OTHER : 'cldr.currency.currencies.count.HTG.other',
				FEW : 'cldr.currency.currencies.count.HTG.few',
				MANY : 'cldr.currency.currencies.count.HTG.many'
			},
			HUF : {
				ONE : 'cldr.currency.currencies.count.HUF.one',
				OTHER : 'cldr.currency.currencies.count.HUF.other',
				FEW : 'cldr.currency.currencies.count.HUF.few',
				MANY : 'cldr.currency.currencies.count.HUF.many'
			},
			IDR : {
				ONE : 'cldr.currency.currencies.count.IDR.one',
				OTHER : 'cldr.currency.currencies.count.IDR.other',
				FEW : 'cldr.currency.currencies.count.IDR.few',
				MANY : 'cldr.currency.currencies.count.IDR.many'
			},
			IEP : {
				ONE : 'cldr.currency.currencies.count.IEP.one',
				OTHER : 'cldr.currency.currencies.count.IEP.other',
				FEW : 'cldr.currency.currencies.count.IEP.few',
				MANY : 'cldr.currency.currencies.count.IEP.many'
			},
			ILP : {
				ONE : 'cldr.currency.currencies.count.ILP.one',
				OTHER : 'cldr.currency.currencies.count.ILP.other',
				FEW : 'cldr.currency.currencies.count.ILP.few',
				MANY : 'cldr.currency.currencies.count.ILP.many'
			},
			ILR : {
				ONE : 'cldr.currency.currencies.count.ILR.one',
				OTHER : 'cldr.currency.currencies.count.ILR.other',
				FEW : 'cldr.currency.currencies.count.ILR.few',
				MANY : 'cldr.currency.currencies.count.ILR.many'
			},
			ILS : {
				ONE : 'cldr.currency.currencies.count.ILS.one',
				OTHER : 'cldr.currency.currencies.count.ILS.other',
				FEW : 'cldr.currency.currencies.count.ILS.few',
				MANY : 'cldr.currency.currencies.count.ILS.many'
			},
			INR : {
				ONE : 'cldr.currency.currencies.count.INR.one',
				OTHER : 'cldr.currency.currencies.count.INR.other',
				FEW : 'cldr.currency.currencies.count.INR.few',
				MANY : 'cldr.currency.currencies.count.INR.many'
			},
			IQD : {
				ONE : 'cldr.currency.currencies.count.IQD.one',
				OTHER : 'cldr.currency.currencies.count.IQD.other',
				FEW : 'cldr.currency.currencies.count.IQD.few',
				MANY : 'cldr.currency.currencies.count.IQD.many'
			},
			IRR : {
				ONE : 'cldr.currency.currencies.count.IRR.one',
				OTHER : 'cldr.currency.currencies.count.IRR.other',
				FEW : 'cldr.currency.currencies.count.IRR.few',
				MANY : 'cldr.currency.currencies.count.IRR.many'
			},
			ISJ : {
				ONE : 'cldr.currency.currencies.count.ISJ.one',
				OTHER : 'cldr.currency.currencies.count.ISJ.other',
				FEW : 'cldr.currency.currencies.count.ISJ.few',
				MANY : 'cldr.currency.currencies.count.ISJ.many'
			},
			ISK : {
				ONE : 'cldr.currency.currencies.count.ISK.one',
				OTHER : 'cldr.currency.currencies.count.ISK.other',
				FEW : 'cldr.currency.currencies.count.ISK.few',
				MANY : 'cldr.currency.currencies.count.ISK.many'
			},
			ITL : {
				ONE : 'cldr.currency.currencies.count.ITL.one',
				OTHER : 'cldr.currency.currencies.count.ITL.other',
				FEW : 'cldr.currency.currencies.count.ITL.few',
				MANY : 'cldr.currency.currencies.count.ITL.many'
			},
			JMD : {
				ONE : 'cldr.currency.currencies.count.JMD.one',
				OTHER : 'cldr.currency.currencies.count.JMD.other',
				FEW : 'cldr.currency.currencies.count.JMD.few',
				MANY : 'cldr.currency.currencies.count.JMD.many'
			},
			JOD : {
				ONE : 'cldr.currency.currencies.count.JOD.one',
				OTHER : 'cldr.currency.currencies.count.JOD.other',
				FEW : 'cldr.currency.currencies.count.JOD.few',
				MANY : 'cldr.currency.currencies.count.JOD.many'
			},
			JPY : {
				ONE : 'cldr.currency.currencies.count.JPY.one',
				OTHER : 'cldr.currency.currencies.count.JPY.other',
				FEW : 'cldr.currency.currencies.count.JPY.few',
				MANY : 'cldr.currency.currencies.count.JPY.many'
			},
			KES : {
				ONE : 'cldr.currency.currencies.count.KES.one',
				OTHER : 'cldr.currency.currencies.count.KES.other',
				FEW : 'cldr.currency.currencies.count.KES.few',
				MANY : 'cldr.currency.currencies.count.KES.many'
			},
			KGS : {
				ONE : 'cldr.currency.currencies.count.KGS.one',
				OTHER : 'cldr.currency.currencies.count.KGS.other',
				FEW : 'cldr.currency.currencies.count.KGS.few',
				MANY : 'cldr.currency.currencies.count.KGS.many'
			},
			KHR : {
				ONE : 'cldr.currency.currencies.count.KHR.one',
				OTHER : 'cldr.currency.currencies.count.KHR.other',
				FEW : 'cldr.currency.currencies.count.KHR.few',
				MANY : 'cldr.currency.currencies.count.KHR.many'
			},
			KMF : {
				ONE : 'cldr.currency.currencies.count.KMF.one',
				OTHER : 'cldr.currency.currencies.count.KMF.other',
				FEW : 'cldr.currency.currencies.count.KMF.few',
				MANY : 'cldr.currency.currencies.count.KMF.many'
			},
			KPW : {
				ONE : 'cldr.currency.currencies.count.KPW.one',
				OTHER : 'cldr.currency.currencies.count.KPW.other',
				FEW : 'cldr.currency.currencies.count.KPW.few',
				MANY : 'cldr.currency.currencies.count.KPW.many'
			},
			KRH : {
				ONE : 'cldr.currency.currencies.count.KRH.one',
				OTHER : 'cldr.currency.currencies.count.KRH.other',
				FEW : 'cldr.currency.currencies.count.KRH.few',
				MANY : 'cldr.currency.currencies.count.KRH.many'
			},
			KRO : {
				ONE : 'cldr.currency.currencies.count.KRO.one',
				OTHER : 'cldr.currency.currencies.count.KRO.other',
				FEW : 'cldr.currency.currencies.count.KRO.few',
				MANY : 'cldr.currency.currencies.count.KRO.many'
			},
			KRW : {
				ONE : 'cldr.currency.currencies.count.KRW.one',
				OTHER : 'cldr.currency.currencies.count.KRW.other',
				FEW : 'cldr.currency.currencies.count.KRW.few',
				MANY : 'cldr.currency.currencies.count.KRW.many'
			},
			KWD : {
				ONE : 'cldr.currency.currencies.count.KWD.one',
				OTHER : 'cldr.currency.currencies.count.KWD.other',
				FEW : 'cldr.currency.currencies.count.KWD.few',
				MANY : 'cldr.currency.currencies.count.KWD.many'
			},
			KYD : {
				ONE : 'cldr.currency.currencies.count.KYD.one',
				OTHER : 'cldr.currency.currencies.count.KYD.other',
				FEW : 'cldr.currency.currencies.count.KYD.few',
				MANY : 'cldr.currency.currencies.count.KYD.many'
			},
			KZT : {
				ONE : 'cldr.currency.currencies.count.KZT.one',
				OTHER : 'cldr.currency.currencies.count.KZT.other',
				FEW : 'cldr.currency.currencies.count.KZT.few',
				MANY : 'cldr.currency.currencies.count.KZT.many'
			},
			LAK : {
				ONE : 'cldr.currency.currencies.count.LAK.one',
				OTHER : 'cldr.currency.currencies.count.LAK.other',
				FEW : 'cldr.currency.currencies.count.LAK.few',
				MANY : 'cldr.currency.currencies.count.LAK.many'
			},
			LBP : {
				ONE : 'cldr.currency.currencies.count.LBP.one',
				OTHER : 'cldr.currency.currencies.count.LBP.other',
				FEW : 'cldr.currency.currencies.count.LBP.few',
				MANY : 'cldr.currency.currencies.count.LBP.many'
			},
			LKR : {
				ONE : 'cldr.currency.currencies.count.LKR.one',
				OTHER : 'cldr.currency.currencies.count.LKR.other',
				FEW : 'cldr.currency.currencies.count.LKR.few',
				MANY : 'cldr.currency.currencies.count.LKR.many'
			},
			LRD : {
				ONE : 'cldr.currency.currencies.count.LRD.one',
				OTHER : 'cldr.currency.currencies.count.LRD.other',
				FEW : 'cldr.currency.currencies.count.LRD.few',
				MANY : 'cldr.currency.currencies.count.LRD.many'
			},
			LSL : {
				ONE : 'cldr.currency.currencies.count.LSL.one',
				OTHER : 'cldr.currency.currencies.count.LSL.other',
				FEW : 'cldr.currency.currencies.count.LSL.few',
				MANY : 'cldr.currency.currencies.count.LSL.many'
			},
			LTL : {
				ONE : 'cldr.currency.currencies.count.LTL.one',
				OTHER : 'cldr.currency.currencies.count.LTL.other',
				FEW : 'cldr.currency.currencies.count.LTL.few',
				MANY : 'cldr.currency.currencies.count.LTL.many'
			},
			LTT : {
				ONE : 'cldr.currency.currencies.count.LTT.one',
				OTHER : 'cldr.currency.currencies.count.LTT.other',
				FEW : 'cldr.currency.currencies.count.LTT.few',
				MANY : 'cldr.currency.currencies.count.LTT.many'
			},
			LUC : {
				ONE : 'cldr.currency.currencies.count.LUC.one',
				OTHER : 'cldr.currency.currencies.count.LUC.other',
				FEW : 'cldr.currency.currencies.count.LUC.few',
				MANY : 'cldr.currency.currencies.count.LUC.many'
			},
			LUF : {
				ONE : 'cldr.currency.currencies.count.LUF.one',
				OTHER : 'cldr.currency.currencies.count.LUF.other',
				FEW : 'cldr.currency.currencies.count.LUF.few',
				MANY : 'cldr.currency.currencies.count.LUF.many'
			},
			LUL : {
				ONE : 'cldr.currency.currencies.count.LUL.one',
				OTHER : 'cldr.currency.currencies.count.LUL.other',
				FEW : 'cldr.currency.currencies.count.LUL.few',
				MANY : 'cldr.currency.currencies.count.LUL.many'
			},
			LVL : {
				ONE : 'cldr.currency.currencies.count.LVL.one',
				OTHER : 'cldr.currency.currencies.count.LVL.other',
				FEW : 'cldr.currency.currencies.count.LVL.few',
				MANY : 'cldr.currency.currencies.count.LVL.many'
			},
			LVR : {
				ONE : 'cldr.currency.currencies.count.LVR.one',
				OTHER : 'cldr.currency.currencies.count.LVR.other',
				FEW : 'cldr.currency.currencies.count.LVR.few',
				MANY : 'cldr.currency.currencies.count.LVR.many'
			},
			LYD : {
				ONE : 'cldr.currency.currencies.count.LYD.one',
				OTHER : 'cldr.currency.currencies.count.LYD.other',
				FEW : 'cldr.currency.currencies.count.LYD.few',
				MANY : 'cldr.currency.currencies.count.LYD.many'
			},
			MAD : {
				ONE : 'cldr.currency.currencies.count.MAD.one',
				OTHER : 'cldr.currency.currencies.count.MAD.other',
				FEW : 'cldr.currency.currencies.count.MAD.few',
				MANY : 'cldr.currency.currencies.count.MAD.many'
			},
			MAF : {
				ONE : 'cldr.currency.currencies.count.MAF.one',
				OTHER : 'cldr.currency.currencies.count.MAF.other',
				FEW : 'cldr.currency.currencies.count.MAF.few',
				MANY : 'cldr.currency.currencies.count.MAF.many'
			},
			MCF : {
				ONE : 'cldr.currency.currencies.count.MCF.one',
				OTHER : 'cldr.currency.currencies.count.MCF.other',
				FEW : 'cldr.currency.currencies.count.MCF.few',
				MANY : 'cldr.currency.currencies.count.MCF.many'
			},
			MDC : {
				ONE : 'cldr.currency.currencies.count.MDC.one',
				OTHER : 'cldr.currency.currencies.count.MDC.other',
				FEW : 'cldr.currency.currencies.count.MDC.few',
				MANY : 'cldr.currency.currencies.count.MDC.many'
			},
			MDL : {
				ONE : 'cldr.currency.currencies.count.MDL.one',
				OTHER : 'cldr.currency.currencies.count.MDL.other',
				FEW : 'cldr.currency.currencies.count.MDL.few',
				MANY : 'cldr.currency.currencies.count.MDL.many'
			},
			MGA : {
				ONE : 'cldr.currency.currencies.count.MGA.one',
				OTHER : 'cldr.currency.currencies.count.MGA.other',
				FEW : 'cldr.currency.currencies.count.MGA.few',
				MANY : 'cldr.currency.currencies.count.MGA.many'
			},
			MGF : {
				ONE : 'cldr.currency.currencies.count.MGF.one',
				OTHER : 'cldr.currency.currencies.count.MGF.other',
				FEW : 'cldr.currency.currencies.count.MGF.few',
				MANY : 'cldr.currency.currencies.count.MGF.many'
			},
			MKD : {
				ONE : 'cldr.currency.currencies.count.MKD.one',
				OTHER : 'cldr.currency.currencies.count.MKD.other',
				FEW : 'cldr.currency.currencies.count.MKD.few',
				MANY : 'cldr.currency.currencies.count.MKD.many'
			},
			MKN : {
				ONE : 'cldr.currency.currencies.count.MKN.one',
				OTHER : 'cldr.currency.currencies.count.MKN.other',
				FEW : 'cldr.currency.currencies.count.MKN.few',
				MANY : 'cldr.currency.currencies.count.MKN.many'
			},
			MLF : {
				ONE : 'cldr.currency.currencies.count.MLF.one',
				OTHER : 'cldr.currency.currencies.count.MLF.other',
				FEW : 'cldr.currency.currencies.count.MLF.few',
				MANY : 'cldr.currency.currencies.count.MLF.many'
			},
			MMK : {
				ONE : 'cldr.currency.currencies.count.MMK.one',
				OTHER : 'cldr.currency.currencies.count.MMK.other',
				FEW : 'cldr.currency.currencies.count.MMK.few',
				MANY : 'cldr.currency.currencies.count.MMK.many'
			},
			MNT : {
				ONE : 'cldr.currency.currencies.count.MNT.one',
				OTHER : 'cldr.currency.currencies.count.MNT.other',
				FEW : 'cldr.currency.currencies.count.MNT.few',
				MANY : 'cldr.currency.currencies.count.MNT.many'
			},
			MOP : {
				ONE : 'cldr.currency.currencies.count.MOP.one',
				OTHER : 'cldr.currency.currencies.count.MOP.other',
				FEW : 'cldr.currency.currencies.count.MOP.few',
				MANY : 'cldr.currency.currencies.count.MOP.many'
			},
			MRO : {
				ONE : 'cldr.currency.currencies.count.MRO.one',
				OTHER : 'cldr.currency.currencies.count.MRO.other',
				FEW : 'cldr.currency.currencies.count.MRO.few',
				MANY : 'cldr.currency.currencies.count.MRO.many'
			},
			MTL : {
				ONE : 'cldr.currency.currencies.count.MTL.one',
				OTHER : 'cldr.currency.currencies.count.MTL.other',
				FEW : 'cldr.currency.currencies.count.MTL.few',
				MANY : 'cldr.currency.currencies.count.MTL.many'
			},
			MTP : {
				ONE : 'cldr.currency.currencies.count.MTP.one',
				OTHER : 'cldr.currency.currencies.count.MTP.other',
				FEW : 'cldr.currency.currencies.count.MTP.few',
				MANY : 'cldr.currency.currencies.count.MTP.many'
			},
			MUR : {
				ONE : 'cldr.currency.currencies.count.MUR.one',
				OTHER : 'cldr.currency.currencies.count.MUR.other',
				FEW : 'cldr.currency.currencies.count.MUR.few',
				MANY : 'cldr.currency.currencies.count.MUR.many'
			},
			MVP : {
				ONE : 'cldr.currency.currencies.count.MVP.one',
				OTHER : 'cldr.currency.currencies.count.MVP.other',
				FEW : 'cldr.currency.currencies.count.MVP.few',
				MANY : 'cldr.currency.currencies.count.MVP.many'
			},
			MVR : {
				ONE : 'cldr.currency.currencies.count.MVR.one',
				OTHER : 'cldr.currency.currencies.count.MVR.other',
				FEW : 'cldr.currency.currencies.count.MVR.few',
				MANY : 'cldr.currency.currencies.count.MVR.many'
			},
			MWK : {
				ONE : 'cldr.currency.currencies.count.MWK.one',
				OTHER : 'cldr.currency.currencies.count.MWK.other',
				FEW : 'cldr.currency.currencies.count.MWK.few',
				MANY : 'cldr.currency.currencies.count.MWK.many'
			},
			MXN : {
				ONE : 'cldr.currency.currencies.count.MXN.one',
				OTHER : 'cldr.currency.currencies.count.MXN.other',
				FEW : 'cldr.currency.currencies.count.MXN.few',
				MANY : 'cldr.currency.currencies.count.MXN.many'
			},
			MXP : {
				ONE : 'cldr.currency.currencies.count.MXP.one',
				OTHER : 'cldr.currency.currencies.count.MXP.other',
				FEW : 'cldr.currency.currencies.count.MXP.few',
				MANY : 'cldr.currency.currencies.count.MXP.many'
			},
			MXV : {
				ONE : 'cldr.currency.currencies.count.MXV.one',
				OTHER : 'cldr.currency.currencies.count.MXV.other',
				FEW : 'cldr.currency.currencies.count.MXV.few',
				MANY : 'cldr.currency.currencies.count.MXV.many'
			},
			MYR : {
				ONE : 'cldr.currency.currencies.count.MYR.one',
				OTHER : 'cldr.currency.currencies.count.MYR.other',
				FEW : 'cldr.currency.currencies.count.MYR.few',
				MANY : 'cldr.currency.currencies.count.MYR.many'
			},
			MZE : {
				ONE : 'cldr.currency.currencies.count.MZE.one',
				OTHER : 'cldr.currency.currencies.count.MZE.other',
				FEW : 'cldr.currency.currencies.count.MZE.few',
				MANY : 'cldr.currency.currencies.count.MZE.many'
			},
			MZM : {
				ONE : 'cldr.currency.currencies.count.MZM.one',
				OTHER : 'cldr.currency.currencies.count.MZM.other',
				FEW : 'cldr.currency.currencies.count.MZM.few',
				MANY : 'cldr.currency.currencies.count.MZM.many'
			},
			MZN : {
				ONE : 'cldr.currency.currencies.count.MZN.one',
				OTHER : 'cldr.currency.currencies.count.MZN.other',
				FEW : 'cldr.currency.currencies.count.MZN.few',
				MANY : 'cldr.currency.currencies.count.MZN.many'
			},
			NAD : {
				ONE : 'cldr.currency.currencies.count.NAD.one',
				OTHER : 'cldr.currency.currencies.count.NAD.other',
				FEW : 'cldr.currency.currencies.count.NAD.few',
				MANY : 'cldr.currency.currencies.count.NAD.many'
			},
			NGN : {
				ONE : 'cldr.currency.currencies.count.NGN.one',
				OTHER : 'cldr.currency.currencies.count.NGN.other',
				FEW : 'cldr.currency.currencies.count.NGN.few',
				MANY : 'cldr.currency.currencies.count.NGN.many'
			},
			NIC : {
				ONE : 'cldr.currency.currencies.count.NIC.one',
				OTHER : 'cldr.currency.currencies.count.NIC.other',
				FEW : 'cldr.currency.currencies.count.NIC.few',
				MANY : 'cldr.currency.currencies.count.NIC.many'
			},
			NIO : {
				ONE : 'cldr.currency.currencies.count.NIO.one',
				OTHER : 'cldr.currency.currencies.count.NIO.other',
				FEW : 'cldr.currency.currencies.count.NIO.few',
				MANY : 'cldr.currency.currencies.count.NIO.many'
			},
			NLG : {
				ONE : 'cldr.currency.currencies.count.NLG.one',
				OTHER : 'cldr.currency.currencies.count.NLG.other',
				FEW : 'cldr.currency.currencies.count.NLG.few',
				MANY : 'cldr.currency.currencies.count.NLG.many'
			},
			NOK : {
				ONE : 'cldr.currency.currencies.count.NOK.one',
				OTHER : 'cldr.currency.currencies.count.NOK.other',
				FEW : 'cldr.currency.currencies.count.NOK.few',
				MANY : 'cldr.currency.currencies.count.NOK.many'
			},
			NPR : {
				ONE : 'cldr.currency.currencies.count.NPR.one',
				OTHER : 'cldr.currency.currencies.count.NPR.other',
				FEW : 'cldr.currency.currencies.count.NPR.few',
				MANY : 'cldr.currency.currencies.count.NPR.many'
			},
			NZD : {
				ONE : 'cldr.currency.currencies.count.NZD.one',
				OTHER : 'cldr.currency.currencies.count.NZD.other',
				FEW : 'cldr.currency.currencies.count.NZD.few',
				MANY : 'cldr.currency.currencies.count.NZD.many'
			},
			OMR : {
				ONE : 'cldr.currency.currencies.count.OMR.one',
				OTHER : 'cldr.currency.currencies.count.OMR.other',
				FEW : 'cldr.currency.currencies.count.OMR.few',
				MANY : 'cldr.currency.currencies.count.OMR.many'
			},
			PAB : {
				ONE : 'cldr.currency.currencies.count.PAB.one',
				OTHER : 'cldr.currency.currencies.count.PAB.other',
				FEW : 'cldr.currency.currencies.count.PAB.few',
				MANY : 'cldr.currency.currencies.count.PAB.many'
			},
			PEI : {
				ONE : 'cldr.currency.currencies.count.PEI.one',
				OTHER : 'cldr.currency.currencies.count.PEI.other',
				FEW : 'cldr.currency.currencies.count.PEI.few',
				MANY : 'cldr.currency.currencies.count.PEI.many'
			},
			PEN : {
				ONE : 'cldr.currency.currencies.count.PEN.one',
				OTHER : 'cldr.currency.currencies.count.PEN.other',
				FEW : 'cldr.currency.currencies.count.PEN.few',
				MANY : 'cldr.currency.currencies.count.PEN.many'
			},
			PES : {
				ONE : 'cldr.currency.currencies.count.PES.one',
				OTHER : 'cldr.currency.currencies.count.PES.other',
				FEW : 'cldr.currency.currencies.count.PES.few',
				MANY : 'cldr.currency.currencies.count.PES.many'
			},
			PGK : {
				ONE : 'cldr.currency.currencies.count.PGK.one',
				OTHER : 'cldr.currency.currencies.count.PGK.other',
				FEW : 'cldr.currency.currencies.count.PGK.few',
				MANY : 'cldr.currency.currencies.count.PGK.many'
			},
			PHP : {
				ONE : 'cldr.currency.currencies.count.PHP.one',
				OTHER : 'cldr.currency.currencies.count.PHP.other',
				FEW : 'cldr.currency.currencies.count.PHP.few',
				MANY : 'cldr.currency.currencies.count.PHP.many'
			},
			PKR : {
				ONE : 'cldr.currency.currencies.count.PKR.one',
				OTHER : 'cldr.currency.currencies.count.PKR.other',
				FEW : 'cldr.currency.currencies.count.PKR.few',
				MANY : 'cldr.currency.currencies.count.PKR.many'
			},
			PLN : {
				ONE : 'cldr.currency.currencies.count.PLN.one',
				OTHER : 'cldr.currency.currencies.count.PLN.other',
				FEW : 'cldr.currency.currencies.count.PLN.few',
				MANY : 'cldr.currency.currencies.count.PLN.many'
			},
			PLZ : {
				ONE : 'cldr.currency.currencies.count.PLZ.one',
				OTHER : 'cldr.currency.currencies.count.PLZ.other',
				FEW : 'cldr.currency.currencies.count.PLZ.few',
				MANY : 'cldr.currency.currencies.count.PLZ.many'
			},
			PTE : {
				ONE : 'cldr.currency.currencies.count.PTE.one',
				OTHER : 'cldr.currency.currencies.count.PTE.other',
				FEW : 'cldr.currency.currencies.count.PTE.few',
				MANY : 'cldr.currency.currencies.count.PTE.many'
			},
			PYG : {
				ONE : 'cldr.currency.currencies.count.PYG.one',
				OTHER : 'cldr.currency.currencies.count.PYG.other',
				FEW : 'cldr.currency.currencies.count.PYG.few',
				MANY : 'cldr.currency.currencies.count.PYG.many'
			},
			QAR : {
				ONE : 'cldr.currency.currencies.count.QAR.one',
				OTHER : 'cldr.currency.currencies.count.QAR.other',
				FEW : 'cldr.currency.currencies.count.QAR.few',
				MANY : 'cldr.currency.currencies.count.QAR.many'
			},
			RHD : {
				ONE : 'cldr.currency.currencies.count.RHD.one',
				OTHER : 'cldr.currency.currencies.count.RHD.other',
				FEW : 'cldr.currency.currencies.count.RHD.few',
				MANY : 'cldr.currency.currencies.count.RHD.many'
			},
			ROL : {
				ONE : 'cldr.currency.currencies.count.ROL.one',
				OTHER : 'cldr.currency.currencies.count.ROL.other',
				FEW : 'cldr.currency.currencies.count.ROL.few',
				MANY : 'cldr.currency.currencies.count.ROL.many'
			},
			RON : {
				ONE : 'cldr.currency.currencies.count.RON.one',
				OTHER : 'cldr.currency.currencies.count.RON.other',
				FEW : 'cldr.currency.currencies.count.RON.few',
				MANY : 'cldr.currency.currencies.count.RON.many'
			},
			RSD : {
				ONE : 'cldr.currency.currencies.count.RSD.one',
				OTHER : 'cldr.currency.currencies.count.RSD.other',
				FEW : 'cldr.currency.currencies.count.RSD.few',
				MANY : 'cldr.currency.currencies.count.RSD.many'
			},
			RUB : {
				ONE : 'cldr.currency.currencies.count.RUB.one',
				OTHER : 'cldr.currency.currencies.count.RUB.other',
				FEW : 'cldr.currency.currencies.count.RUB.few',
				MANY : 'cldr.currency.currencies.count.RUB.many'
			},
			RUR : {
				ONE : 'cldr.currency.currencies.count.RUR.one',
				OTHER : 'cldr.currency.currencies.count.RUR.other',
				FEW : 'cldr.currency.currencies.count.RUR.few',
				MANY : 'cldr.currency.currencies.count.RUR.many'
			},
			RWF : {
				ONE : 'cldr.currency.currencies.count.RWF.one',
				OTHER : 'cldr.currency.currencies.count.RWF.other',
				FEW : 'cldr.currency.currencies.count.RWF.few',
				MANY : 'cldr.currency.currencies.count.RWF.many'
			},
			SAR : {
				ONE : 'cldr.currency.currencies.count.SAR.one',
				OTHER : 'cldr.currency.currencies.count.SAR.other',
				FEW : 'cldr.currency.currencies.count.SAR.few',
				MANY : 'cldr.currency.currencies.count.SAR.many'
			},
			SBD : {
				ONE : 'cldr.currency.currencies.count.SBD.one',
				OTHER : 'cldr.currency.currencies.count.SBD.other',
				FEW : 'cldr.currency.currencies.count.SBD.few',
				MANY : 'cldr.currency.currencies.count.SBD.many'
			},
			SCR : {
				ONE : 'cldr.currency.currencies.count.SCR.one',
				OTHER : 'cldr.currency.currencies.count.SCR.other',
				FEW : 'cldr.currency.currencies.count.SCR.few',
				MANY : 'cldr.currency.currencies.count.SCR.many'
			},
			SDD : {
				ONE : 'cldr.currency.currencies.count.SDD.one',
				OTHER : 'cldr.currency.currencies.count.SDD.other',
				FEW : 'cldr.currency.currencies.count.SDD.few',
				MANY : 'cldr.currency.currencies.count.SDD.many'
			},
			SDG : {
				ONE : 'cldr.currency.currencies.count.SDG.one',
				OTHER : 'cldr.currency.currencies.count.SDG.other',
				FEW : 'cldr.currency.currencies.count.SDG.few',
				MANY : 'cldr.currency.currencies.count.SDG.many'
			},
			SDP : {
				ONE : 'cldr.currency.currencies.count.SDP.one',
				OTHER : 'cldr.currency.currencies.count.SDP.other',
				FEW : 'cldr.currency.currencies.count.SDP.few',
				MANY : 'cldr.currency.currencies.count.SDP.many'
			},
			SEK : {
				ONE : 'cldr.currency.currencies.count.SEK.one',
				OTHER : 'cldr.currency.currencies.count.SEK.other',
				FEW : 'cldr.currency.currencies.count.SEK.few',
				MANY : 'cldr.currency.currencies.count.SEK.many'
			},
			SGD : {
				ONE : 'cldr.currency.currencies.count.SGD.one',
				OTHER : 'cldr.currency.currencies.count.SGD.other',
				FEW : 'cldr.currency.currencies.count.SGD.few',
				MANY : 'cldr.currency.currencies.count.SGD.many'
			},
			SHP : {
				ONE : 'cldr.currency.currencies.count.SHP.one',
				OTHER : 'cldr.currency.currencies.count.SHP.other',
				FEW : 'cldr.currency.currencies.count.SHP.few',
				MANY : 'cldr.currency.currencies.count.SHP.many'
			},
			SIT : {
				ONE : 'cldr.currency.currencies.count.SIT.one',
				OTHER : 'cldr.currency.currencies.count.SIT.other',
				FEW : 'cldr.currency.currencies.count.SIT.few',
				MANY : 'cldr.currency.currencies.count.SIT.many'
			},
			SKK : {
				ONE : 'cldr.currency.currencies.count.SKK.one',
				OTHER : 'cldr.currency.currencies.count.SKK.other',
				FEW : 'cldr.currency.currencies.count.SKK.few',
				MANY : 'cldr.currency.currencies.count.SKK.many'
			},
			SLL : {
				ONE : 'cldr.currency.currencies.count.SLL.one',
				OTHER : 'cldr.currency.currencies.count.SLL.other',
				FEW : 'cldr.currency.currencies.count.SLL.few',
				MANY : 'cldr.currency.currencies.count.SLL.many'
			},
			SOS : {
				ONE : 'cldr.currency.currencies.count.SOS.one',
				OTHER : 'cldr.currency.currencies.count.SOS.other',
				FEW : 'cldr.currency.currencies.count.SOS.few',
				MANY : 'cldr.currency.currencies.count.SOS.many'
			},
			SRD : {
				ONE : 'cldr.currency.currencies.count.SRD.one',
				OTHER : 'cldr.currency.currencies.count.SRD.other',
				FEW : 'cldr.currency.currencies.count.SRD.few',
				MANY : 'cldr.currency.currencies.count.SRD.many'
			},
			SRG : {
				ONE : 'cldr.currency.currencies.count.SRG.one',
				OTHER : 'cldr.currency.currencies.count.SRG.other',
				FEW : 'cldr.currency.currencies.count.SRG.few',
				MANY : 'cldr.currency.currencies.count.SRG.many'
			},
			SSP : {
				ONE : 'cldr.currency.currencies.count.SSP.one',
				OTHER : 'cldr.currency.currencies.count.SSP.other',
				FEW : 'cldr.currency.currencies.count.SSP.few',
				MANY : 'cldr.currency.currencies.count.SSP.many'
			},
			STD : {
				ONE : 'cldr.currency.currencies.count.STD.one',
				OTHER : 'cldr.currency.currencies.count.STD.other',
				FEW : 'cldr.currency.currencies.count.STD.few',
				MANY : 'cldr.currency.currencies.count.STD.many'
			},
			SUR : {
				ONE : 'cldr.currency.currencies.count.SUR.one',
				OTHER : 'cldr.currency.currencies.count.SUR.other',
				FEW : 'cldr.currency.currencies.count.SUR.few',
				MANY : 'cldr.currency.currencies.count.SUR.many'
			},
			SVC : {
				ONE : 'cldr.currency.currencies.count.SVC.one',
				OTHER : 'cldr.currency.currencies.count.SVC.other',
				FEW : 'cldr.currency.currencies.count.SVC.few',
				MANY : 'cldr.currency.currencies.count.SVC.many'
			},
			SYP : {
				ONE : 'cldr.currency.currencies.count.SYP.one',
				OTHER : 'cldr.currency.currencies.count.SYP.other',
				FEW : 'cldr.currency.currencies.count.SYP.few',
				MANY : 'cldr.currency.currencies.count.SYP.many'
			},
			SZL : {
				ONE : 'cldr.currency.currencies.count.SZL.one',
				OTHER : 'cldr.currency.currencies.count.SZL.other',
				FEW : 'cldr.currency.currencies.count.SZL.few',
				MANY : 'cldr.currency.currencies.count.SZL.many'
			},
			THB : {
				ONE : 'cldr.currency.currencies.count.THB.one',
				OTHER : 'cldr.currency.currencies.count.THB.other',
				FEW : 'cldr.currency.currencies.count.THB.few',
				MANY : 'cldr.currency.currencies.count.THB.many'
			},
			TJR : {
				ONE : 'cldr.currency.currencies.count.TJR.one',
				OTHER : 'cldr.currency.currencies.count.TJR.other',
				FEW : 'cldr.currency.currencies.count.TJR.few',
				MANY : 'cldr.currency.currencies.count.TJR.many'
			},
			TJS : {
				ONE : 'cldr.currency.currencies.count.TJS.one',
				OTHER : 'cldr.currency.currencies.count.TJS.other',
				FEW : 'cldr.currency.currencies.count.TJS.few',
				MANY : 'cldr.currency.currencies.count.TJS.many'
			},
			TMM : {
				ONE : 'cldr.currency.currencies.count.TMM.one',
				OTHER : 'cldr.currency.currencies.count.TMM.other',
				FEW : 'cldr.currency.currencies.count.TMM.few',
				MANY : 'cldr.currency.currencies.count.TMM.many'
			},
			TMT : {
				ONE : 'cldr.currency.currencies.count.TMT.one',
				OTHER : 'cldr.currency.currencies.count.TMT.other',
				FEW : 'cldr.currency.currencies.count.TMT.few',
				MANY : 'cldr.currency.currencies.count.TMT.many'
			},
			TND : {
				ONE : 'cldr.currency.currencies.count.TND.one',
				OTHER : 'cldr.currency.currencies.count.TND.other',
				FEW : 'cldr.currency.currencies.count.TND.few',
				MANY : 'cldr.currency.currencies.count.TND.many'
			},
			TOP : {
				ONE : 'cldr.currency.currencies.count.TOP.one',
				OTHER : 'cldr.currency.currencies.count.TOP.other',
				FEW : 'cldr.currency.currencies.count.TOP.few',
				MANY : 'cldr.currency.currencies.count.TOP.many'
			},
			TPE : {
				ONE : 'cldr.currency.currencies.count.TPE.one',
				OTHER : 'cldr.currency.currencies.count.TPE.other',
				FEW : 'cldr.currency.currencies.count.TPE.few',
				MANY : 'cldr.currency.currencies.count.TPE.many'
			},
			TRL : {
				ONE : 'cldr.currency.currencies.count.TRL.one',
				OTHER : 'cldr.currency.currencies.count.TRL.other',
				FEW : 'cldr.currency.currencies.count.TRL.few',
				MANY : 'cldr.currency.currencies.count.TRL.many'
			},
			TRY : {
				ONE : 'cldr.currency.currencies.count.TRY.one',
				OTHER : 'cldr.currency.currencies.count.TRY.other',
				FEW : 'cldr.currency.currencies.count.TRY.few',
				MANY : 'cldr.currency.currencies.count.TRY.many'
			},
			TTD : {
				ONE : 'cldr.currency.currencies.count.TTD.one',
				OTHER : 'cldr.currency.currencies.count.TTD.other',
				FEW : 'cldr.currency.currencies.count.TTD.few',
				MANY : 'cldr.currency.currencies.count.TTD.many'
			},
			TWD : {
				ONE : 'cldr.currency.currencies.count.TWD.one',
				OTHER : 'cldr.currency.currencies.count.TWD.other',
				FEW : 'cldr.currency.currencies.count.TWD.few',
				MANY : 'cldr.currency.currencies.count.TWD.many'
			},
			TZS : {
				ONE : 'cldr.currency.currencies.count.TZS.one',
				OTHER : 'cldr.currency.currencies.count.TZS.other',
				FEW : 'cldr.currency.currencies.count.TZS.few',
				MANY : 'cldr.currency.currencies.count.TZS.many'
			},
			UAH : {
				ONE : 'cldr.currency.currencies.count.UAH.one',
				OTHER : 'cldr.currency.currencies.count.UAH.other',
				FEW : 'cldr.currency.currencies.count.UAH.few',
				MANY : 'cldr.currency.currencies.count.UAH.many'
			},
			UAK : {
				ONE : 'cldr.currency.currencies.count.UAK.one',
				OTHER : 'cldr.currency.currencies.count.UAK.other',
				FEW : 'cldr.currency.currencies.count.UAK.few',
				MANY : 'cldr.currency.currencies.count.UAK.many'
			},
			UGS : {
				ONE : 'cldr.currency.currencies.count.UGS.one',
				OTHER : 'cldr.currency.currencies.count.UGS.other',
				FEW : 'cldr.currency.currencies.count.UGS.few',
				MANY : 'cldr.currency.currencies.count.UGS.many'
			},
			UGX : {
				ONE : 'cldr.currency.currencies.count.UGX.one',
				OTHER : 'cldr.currency.currencies.count.UGX.other',
				FEW : 'cldr.currency.currencies.count.UGX.few',
				MANY : 'cldr.currency.currencies.count.UGX.many'
			},
			USD : {
				ONE : 'cldr.currency.currencies.count.USD.one',
				OTHER : 'cldr.currency.currencies.count.USD.other',
				FEW : 'cldr.currency.currencies.count.USD.few',
				MANY : 'cldr.currency.currencies.count.USD.many'
			},
			USN : {
				ONE : 'cldr.currency.currencies.count.USN.one',
				OTHER : 'cldr.currency.currencies.count.USN.other',
				FEW : 'cldr.currency.currencies.count.USN.few',
				MANY : 'cldr.currency.currencies.count.USN.many'
			},
			USS : {
				ONE : 'cldr.currency.currencies.count.USS.one',
				OTHER : 'cldr.currency.currencies.count.USS.other',
				FEW : 'cldr.currency.currencies.count.USS.few',
				MANY : 'cldr.currency.currencies.count.USS.many'
			},
			UYI : {
				ONE : 'cldr.currency.currencies.count.UYI.one',
				OTHER : 'cldr.currency.currencies.count.UYI.other',
				FEW : 'cldr.currency.currencies.count.UYI.few',
				MANY : 'cldr.currency.currencies.count.UYI.many'
			},
			UYP : {
				ONE : 'cldr.currency.currencies.count.UYP.one',
				OTHER : 'cldr.currency.currencies.count.UYP.other',
				FEW : 'cldr.currency.currencies.count.UYP.few',
				MANY : 'cldr.currency.currencies.count.UYP.many'
			},
			UYU : {
				ONE : 'cldr.currency.currencies.count.UYU.one',
				OTHER : 'cldr.currency.currencies.count.UYU.other',
				FEW : 'cldr.currency.currencies.count.UYU.few',
				MANY : 'cldr.currency.currencies.count.UYU.many'
			},
			UZS : {
				ONE : 'cldr.currency.currencies.count.UZS.one',
				OTHER : 'cldr.currency.currencies.count.UZS.other',
				FEW : 'cldr.currency.currencies.count.UZS.few',
				MANY : 'cldr.currency.currencies.count.UZS.many'
			},
			VEB : {
				ONE : 'cldr.currency.currencies.count.VEB.one',
				OTHER : 'cldr.currency.currencies.count.VEB.other',
				FEW : 'cldr.currency.currencies.count.VEB.few',
				MANY : 'cldr.currency.currencies.count.VEB.many'
			},
			VEF : {
				ONE : 'cldr.currency.currencies.count.VEF.one',
				OTHER : 'cldr.currency.currencies.count.VEF.other',
				FEW : 'cldr.currency.currencies.count.VEF.few',
				MANY : 'cldr.currency.currencies.count.VEF.many'
			},
			VND : {
				ONE : 'cldr.currency.currencies.count.VND.one',
				OTHER : 'cldr.currency.currencies.count.VND.other',
				FEW : 'cldr.currency.currencies.count.VND.few',
				MANY : 'cldr.currency.currencies.count.VND.many'
			},
			VNN : {
				ONE : 'cldr.currency.currencies.count.VNN.one',
				OTHER : 'cldr.currency.currencies.count.VNN.other',
				FEW : 'cldr.currency.currencies.count.VNN.few',
				MANY : 'cldr.currency.currencies.count.VNN.many'
			},
			VUV : {
				ONE : 'cldr.currency.currencies.count.VUV.one',
				OTHER : 'cldr.currency.currencies.count.VUV.other',
				FEW : 'cldr.currency.currencies.count.VUV.few',
				MANY : 'cldr.currency.currencies.count.VUV.many'
			},
			WST : {
				ONE : 'cldr.currency.currencies.count.WST.one',
				OTHER : 'cldr.currency.currencies.count.WST.other',
				FEW : 'cldr.currency.currencies.count.WST.few',
				MANY : 'cldr.currency.currencies.count.WST.many'
			},
			XAF : {
				ONE : 'cldr.currency.currencies.count.XAF.one',
				OTHER : 'cldr.currency.currencies.count.XAF.other',
				FEW : 'cldr.currency.currencies.count.XAF.few',
				MANY : 'cldr.currency.currencies.count.XAF.many'
			},
			XAG : {
				ONE : 'cldr.currency.currencies.count.XAG.one',
				OTHER : 'cldr.currency.currencies.count.XAG.other',
				FEW : 'cldr.currency.currencies.count.XAG.few',
				MANY : 'cldr.currency.currencies.count.XAG.many'
			},
			XAU : {
				ONE : 'cldr.currency.currencies.count.XAU.one',
				OTHER : 'cldr.currency.currencies.count.XAU.other',
				FEW : 'cldr.currency.currencies.count.XAU.few',
				MANY : 'cldr.currency.currencies.count.XAU.many'
			},
			XBA : {
				ONE : 'cldr.currency.currencies.count.XBA.one',
				OTHER : 'cldr.currency.currencies.count.XBA.other',
				FEW : 'cldr.currency.currencies.count.XBA.few',
				MANY : 'cldr.currency.currencies.count.XBA.many'
			},
			XBB : {
				ONE : 'cldr.currency.currencies.count.XBB.one',
				OTHER : 'cldr.currency.currencies.count.XBB.other',
				FEW : 'cldr.currency.currencies.count.XBB.few',
				MANY : 'cldr.currency.currencies.count.XBB.many'
			},
			XBC : {
				ONE : 'cldr.currency.currencies.count.XBC.one',
				OTHER : 'cldr.currency.currencies.count.XBC.other',
				FEW : 'cldr.currency.currencies.count.XBC.few',
				MANY : 'cldr.currency.currencies.count.XBC.many'
			},
			XBD : {
				ONE : 'cldr.currency.currencies.count.XBD.one',
				OTHER : 'cldr.currency.currencies.count.XBD.other',
				FEW : 'cldr.currency.currencies.count.XBD.few',
				MANY : 'cldr.currency.currencies.count.XBD.many'
			},
			XCD : {
				ONE : 'cldr.currency.currencies.count.XCD.one',
				OTHER : 'cldr.currency.currencies.count.XCD.other',
				FEW : 'cldr.currency.currencies.count.XCD.few',
				MANY : 'cldr.currency.currencies.count.XCD.many'
			},
			XDR : {
				ONE : 'cldr.currency.currencies.count.XDR.one',
				OTHER : 'cldr.currency.currencies.count.XDR.other',
				FEW : 'cldr.currency.currencies.count.XDR.few',
				MANY : 'cldr.currency.currencies.count.XDR.many'
			},
			XEU : {
				ONE : 'cldr.currency.currencies.count.XEU.one',
				OTHER : 'cldr.currency.currencies.count.XEU.other',
				FEW : 'cldr.currency.currencies.count.XEU.few',
				MANY : 'cldr.currency.currencies.count.XEU.many'
			},
			XFO : {
				ONE : 'cldr.currency.currencies.count.XFO.one',
				OTHER : 'cldr.currency.currencies.count.XFO.other',
				FEW : 'cldr.currency.currencies.count.XFO.few',
				MANY : 'cldr.currency.currencies.count.XFO.many'
			},
			XFU : {
				ONE : 'cldr.currency.currencies.count.XFU.one',
				OTHER : 'cldr.currency.currencies.count.XFU.other',
				FEW : 'cldr.currency.currencies.count.XFU.few',
				MANY : 'cldr.currency.currencies.count.XFU.many'
			},
			XOF : {
				ONE : 'cldr.currency.currencies.count.XOF.one',
				OTHER : 'cldr.currency.currencies.count.XOF.other',
				FEW : 'cldr.currency.currencies.count.XOF.few',
				MANY : 'cldr.currency.currencies.count.XOF.many'
			},
			XPD : {
				ONE : 'cldr.currency.currencies.count.XPD.one',
				OTHER : 'cldr.currency.currencies.count.XPD.other',
				FEW : 'cldr.currency.currencies.count.XPD.few',
				MANY : 'cldr.currency.currencies.count.XPD.many'
			},
			XPF : {
				ONE : 'cldr.currency.currencies.count.XPF.one',
				OTHER : 'cldr.currency.currencies.count.XPF.other',
				FEW : 'cldr.currency.currencies.count.XPF.few',
				MANY : 'cldr.currency.currencies.count.XPF.many'
			},
			XPT : {
				ONE : 'cldr.currency.currencies.count.XPT.one',
				OTHER : 'cldr.currency.currencies.count.XPT.other',
				FEW : 'cldr.currency.currencies.count.XPT.few',
				MANY : 'cldr.currency.currencies.count.XPT.many'
			},
			XRE : {
				ONE : 'cldr.currency.currencies.count.XRE.one',
				OTHER : 'cldr.currency.currencies.count.XRE.other',
				FEW : 'cldr.currency.currencies.count.XRE.few',
				MANY : 'cldr.currency.currencies.count.XRE.many'
			},
			XSU : {
				ONE : 'cldr.currency.currencies.count.XSU.one',
				OTHER : 'cldr.currency.currencies.count.XSU.other',
				FEW : 'cldr.currency.currencies.count.XSU.few',
				MANY : 'cldr.currency.currencies.count.XSU.many'
			},
			XTS : {
				ONE : 'cldr.currency.currencies.count.XTS.one',
				OTHER : 'cldr.currency.currencies.count.XTS.other',
				FEW : 'cldr.currency.currencies.count.XTS.few',
				MANY : 'cldr.currency.currencies.count.XTS.many'
			},
			XUA : {
				ONE : 'cldr.currency.currencies.count.XUA.one',
				OTHER : 'cldr.currency.currencies.count.XUA.other',
				FEW : 'cldr.currency.currencies.count.XUA.few',
				MANY : 'cldr.currency.currencies.count.XUA.many'
			},
			XXX : {
				ONE : 'cldr.currency.currencies.count.XXX.one',
				OTHER : 'cldr.currency.currencies.count.XXX.other',
				FEW : 'cldr.currency.currencies.count.XXX.few',
				MANY : 'cldr.currency.currencies.count.XXX.many'
			},
			YDD : {
				ONE : 'cldr.currency.currencies.count.YDD.one',
				OTHER : 'cldr.currency.currencies.count.YDD.other',
				FEW : 'cldr.currency.currencies.count.YDD.few',
				MANY : 'cldr.currency.currencies.count.YDD.many'
			},
			YER : {
				ONE : 'cldr.currency.currencies.count.YER.one',
				OTHER : 'cldr.currency.currencies.count.YER.other',
				FEW : 'cldr.currency.currencies.count.YER.few',
				MANY : 'cldr.currency.currencies.count.YER.many'
			},
			YUD : {
				ONE : 'cldr.currency.currencies.count.YUD.one',
				OTHER : 'cldr.currency.currencies.count.YUD.other',
				FEW : 'cldr.currency.currencies.count.YUD.few',
				MANY : 'cldr.currency.currencies.count.YUD.many'
			},
			YUM : {
				ONE : 'cldr.currency.currencies.count.YUM.one',
				OTHER : 'cldr.currency.currencies.count.YUM.other',
				FEW : 'cldr.currency.currencies.count.YUM.few',
				MANY : 'cldr.currency.currencies.count.YUM.many'
			},
			YUN : {
				ONE : 'cldr.currency.currencies.count.YUN.one',
				OTHER : 'cldr.currency.currencies.count.YUN.other',
				FEW : 'cldr.currency.currencies.count.YUN.few',
				MANY : 'cldr.currency.currencies.count.YUN.many'
			},
			YUR : {
				ONE : 'cldr.currency.currencies.count.YUR.one',
				OTHER : 'cldr.currency.currencies.count.YUR.other',
				FEW : 'cldr.currency.currencies.count.YUR.few',
				MANY : 'cldr.currency.currencies.count.YUR.many'
			},
			ZAL : {
				ONE : 'cldr.currency.currencies.count.ZAL.one',
				OTHER : 'cldr.currency.currencies.count.ZAL.other',
				FEW : 'cldr.currency.currencies.count.ZAL.few',
				MANY : 'cldr.currency.currencies.count.ZAL.many'
			},
			ZAR : {
				ONE : 'cldr.currency.currencies.count.ZAR.one',
				OTHER : 'cldr.currency.currencies.count.ZAR.other',
				FEW : 'cldr.currency.currencies.count.ZAR.few',
				MANY : 'cldr.currency.currencies.count.ZAR.many'
			},
			ZMK : {
				ONE : 'cldr.currency.currencies.count.ZMK.one',
				OTHER : 'cldr.currency.currencies.count.ZMK.other',
				FEW : 'cldr.currency.currencies.count.ZMK.few',
				MANY : 'cldr.currency.currencies.count.ZMK.many'
			},
			ZMW : {
				ONE : 'cldr.currency.currencies.count.ZMW.one',
				OTHER : 'cldr.currency.currencies.count.ZMW.other',
				FEW : 'cldr.currency.currencies.count.ZMW.few',
				MANY : 'cldr.currency.currencies.count.ZMW.many'
			},
			ZRN : {
				ONE : 'cldr.currency.currencies.count.ZRN.one',
				OTHER : 'cldr.currency.currencies.count.ZRN.other',
				FEW : 'cldr.currency.currencies.count.ZRN.few',
				MANY : 'cldr.currency.currencies.count.ZRN.many'
			},
			ZRZ : {
				ONE : 'cldr.currency.currencies.count.ZRZ.one',
				OTHER : 'cldr.currency.currencies.count.ZRZ.other',
				FEW : 'cldr.currency.currencies.count.ZRZ.few',
				MANY : 'cldr.currency.currencies.count.ZRZ.many'
			},
			ZWD : {
				ONE : 'cldr.currency.currencies.count.ZWD.one',
				OTHER : 'cldr.currency.currencies.count.ZWD.other',
				FEW : 'cldr.currency.currencies.count.ZWD.few',
				MANY : 'cldr.currency.currencies.count.ZWD.many'
			},
			ZWL : {
				ONE : 'cldr.currency.currencies.count.ZWL.one',
				OTHER : 'cldr.currency.currencies.count.ZWL.other',
				FEW : 'cldr.currency.currencies.count.ZWL.few',
				MANY : 'cldr.currency.currencies.count.ZWL.many'
			},
			ZWR : {
				ONE : 'cldr.currency.currencies.count.ZWR.one',
				OTHER : 'cldr.currency.currencies.count.ZWR.other',
				FEW : 'cldr.currency.currencies.count.ZWR.few',
				MANY : 'cldr.currency.currencies.count.ZWR.many'
			}
		}
	}
};

/**
 * Get a locale specific format string based on an i18n pattern name. If not found defaults back to original pattern.
 *
 * @param {String} sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"8151B94B-7D26-48FF-9E01-F7D360581093"}
 */
function getLocaleFormat(sPattern) {
	var sFormat = i18n.getI18NMessage(sPattern);
	var sInvalidKey = '!' + sPattern + '!';
	if (sFormat == sInvalidKey) {
		sFormat = sPattern;
	}
	return sFormat;
}

/**
 * Get a format string for a given currency code in the locale format
 * @param {String} [sPattern]
 * @param {String} [sCode]
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"72AE6840-333D-42BA-841F-02F3EF74C03E"}
 */
function getCurrencyFormat(sPattern, sCode) {
	sPattern = sPattern || CURRENCY.STANDARD;

	var sFormat = getLocaleFormat(sPattern);

	var sCountry = i18n.getCurrentCountry();
	var sCurrentCode = getCurrencyCode(sCountry);

	//If formatting for a code that is not the currently selected locale, formatting needs to be adjusted
	if (sCode && sCode != sCurrentCode) {
		//Symbol used by the currently selected locale to represent the given code
		var sAlternateSymbol = i18n.getI18NMessage(CURRENCY.CURRENCIES.SYMBOL[sCode]);

		//Symbol that is used to replace '¤' for the current country
		var sCurrentCountrySymbol = getCurrencySymbol(sCountry);

		//Symbol is ambiguous with current locale's currency, use country code instead
		if (sAlternateSymbol == sCurrentCountrySymbol) {
			sAlternateSymbol = sCode;
		}
		sFormat = utils.stringReplace(sFormat, '¤', sAlternateSymbol);
	}
	return sFormat;
}


/**
 * Parses a date object into a string based on a format stored in an i18n key
 *
 * @param {Date}	dDate
 * @param {String}	sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"3E56AAA7-262A-46FC-96D2-6FDD6B0E5A9C"}
 */
function dateFormat(dDate, sPattern) {
	var sFormat = getLocaleFormat(sPattern);
	return utils.dateFormat(dDate, sFormat);
}

/**
 * Parses a number into a string based on a format stored in an i18n key
 *
 * @param {Number}	nNumber
 * @param {String}	sPattern
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"4FF547F8-0FF9-401C-A032-D45E294083F0"}
 */
function numberFormat(nNumber, sPattern) {
	var sFormat = getLocaleFormat(sPattern);
	return utils.numberFormat(nNumber, sFormat);
}

/**
 * Format a number as a a locale specific currency
 *
 * @param {Number} nMoney
 * @param {String} [sPattern] i18n format key. Defaults to standard currency format. If not found is treated as a formatting string
 * @param {String} [sCode] Specify currency code to use (when omitted defaults to standard locale symbol)
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"5B7B3E22-D447-4815-86AC-58549998E7EE"}
 */
function currencyFormat(nMoney, sPattern, sCode) {
	sPattern = sPattern || CURRENCY.STANDARD;
	var sFormat = getCurrencyFormat(sPattern,sCode);
	return utils.numberFormat(nMoney, sFormat);
}

/**
 * Get the currency symbol for a given language/country combination
 * @param {String} [sCountry] Defaults to current i18n setting
 * @param {String} [sLanguage] Defaults to current i18n setting
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"FB0F09EB-AD1D-42B8-8696-62F6B474FDFA"}
 */
function getCurrencySymbol(sCountry, sLanguage) {
	sCountry = sCountry || i18n.getCurrentCountry();
	sLanguage = sLanguage || i18n.getCurrentLanguage();
	return java.util.Currency.getInstance(new java.util.Locale(sLanguage, sCountry)).getSymbol();
}

/**
 * Get the currency code for a given language/country combination
 * @param {String} [sCountry] Defaults to current i18n setting
 * @param {String} [sLanguage] Defaults to current i18n setting
 *
 * @return {String}
 *
 * @properties={typeid:24,uuid:"353D5B83-E4FA-40F4-B4C8-E95BE89F4E25"}
 */
function getCurrencyCode(sCountry, sLanguage) {
	sCountry = sCountry || i18n.getCurrentCountry();
	sLanguage = sLanguage || i18n.getCurrentLanguage();
	return java.util.Currency.getInstance(new java.util.Locale(sLanguage, sCountry)).getCurrencyCode();
}